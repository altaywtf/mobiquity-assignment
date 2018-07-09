import React from 'react'
import { api } from '../../utils'
import RaceListItem from './RaceListItem'
import Loading from '../Loading'

class RaceList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      resolved: false,
      data: [],
      error: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    try {
      const data = await api.getSeasonRaces(this.props.season.year)

      this.setState({
        resolved: true,
        data,
      })
    } catch (error) {
      this.setState({
        resolved: true,
        error: true,
      })
    }
  }

  render() {
    const { resolved, data, error } = this.state
    const { season } = this.props

    if (!resolved) {
      return <Loading />
    }
      
    if (error) {
      return 'Error'
    }

    return (
      <div className="RaceList">
        {data.map(race => (
          <RaceListItem
            key={race.round}
            race={race}
            season={season}
          />
        ))}
      </div>
    )
  }
}

export default RaceList

