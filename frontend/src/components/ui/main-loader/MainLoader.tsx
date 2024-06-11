import React from 'react'
import './MainLoader.scss'

export default function MainLoader() {
  return (
    <div className='main-loader' id='main-loader'>
      <div className='main-loader__spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <input className='main-loader__fake-input' id="main-loader-input" />
    </div>
  )
}
