import React from 'react'
import { api } from '../../utils'
import { SEASONS_TO_FETCH } from '../../constants'
import SeasonListItem from './SeasonListItem'
import Loading from '../Loading'

class SeasonList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      data: [],
      resolved: false,
      error: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    let requests = []

    for (let year = SEASONS_TO_FETCH.from; year <= SEASONS_TO_FETCH.to; year++) {
      const request = api.getSeason(year)
      requests = [...requests, request]
    }

    try {
      const data = await Promise.all(requests)

      this.setState({
        data,
        resolved: true,
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

    if (!resolved) {
      return <Loading size="full" />
    }

    if (error) {
      return 'Error'
    }

    return (
      <div className="SeasonList">
        {data.map(season => (
          <SeasonListItem
            key={season.year}
            season={season}
          />
        ))}
      </div>
    )
  }
}

export default SeasonList

