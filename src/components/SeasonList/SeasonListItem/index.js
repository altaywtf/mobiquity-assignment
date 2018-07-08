import React from 'react'
import RaceList from '../../RaceList'
import './style.css'

class SeasonListItem extends React.PureComponent {
  constructor() {
    super()
    this.onToggleSeasonRaces = this.onToggleSeasonRaces.bind(this)
    this.state = {
      showingRaces: false,
    }
  }

  onToggleSeasonRaces() {
    this.setState(prevState => ({
      showingRaces: !prevState.showingRaces,
    }))
  }

  render() {
    const { season } = this.props
    const { showingRaces } = this.state

    return (
      <div className="SeasonListItem" onClick={this.onToggleSeasonRaces}>
        <h3>
          {season.year} - {'🏆'} {season.winner.givenName} {season.winner.familyName} {'🏆'}
        </h3>

        {showingRaces && (
          <div className="Content">
            <RaceList season={season} />
          </div>
        )}
      </div>
    )
  }
}

export default SeasonListItem

