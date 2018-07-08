const axios = require('axios')

class Api {
  constructor(options = {}) {
    this.baseURL = options.baseURL || Api.DEFAULT_OPTIONS.baseURL
  }

  getSeason(year) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${this.baseURL}/${year}/driverStandings/1.json`)
        const winner = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']
        resolve({ year, winner })
      } catch (error) {
        reject(error)
      }
    })
  }

  getSeasonRaces(year) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${this.baseURL}/${year}/results/1.json`)
        const result = data['MRData']['RaceTable']['Races'].map((race) => ({
          round: race.round,
          name: race.raceName,
          date: race.date,
          winner: race['Results'][0]['Driver'],
        }))
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }
}

Api.DEFAULT_OPTIONS = {
  baseURL: 'https://ergast.com/api/f1',
}

export default Api

