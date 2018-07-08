import React from 'react'
import FullScreenLoading from './Full'
import './style.css'

const Loading = ({ size }) => size === 'full' ? <FullScreenLoading /> : (
  <div className="Loading">
    Loading
  </div>
)

export default Loading

