import React from 'react'
import ReactDOM from 'react-dom'
import SeasonList from './components/SeasonList'
import registerServiceWorker from './registerServiceWorker'
import './style.css'

ReactDOM.render(<SeasonList />, document.getElementById('root'))
registerServiceWorker()
