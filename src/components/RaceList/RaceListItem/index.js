import React from 'react'
import './style.css'

class RaceListItem extends React.PureComponent {
  render() {
    const { race, season } = this.props

    return (
      <div className="RaceListItem">
        <h3>
          {race.name}

          <small>
          {' '} - {race.date}
          </small>
        </h3>

        <span style={{ backgroundColor: race.winner.driverId === season.winner.driverId ? 'yellow' : 'transparent' }}>
          {'🏁'} {race.winner.givenName} {race.winner.familyName}
        </span>
      </div>
    )
  }
}

export default RaceListItem

