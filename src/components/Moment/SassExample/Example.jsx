import React from 'react'
import "./Example.scss"

export default function Example() {
  return (
    <div>
      <p>Example</p>
      <p className='font' >Example</p>

      <nav>
        <ul>
          <li>nav test</li>
          <li><a>nav test</a></li>
        </ul>
      </nav>
      <ul>
          <li>nav test</li>
          <li><a>nav test</a></li>
        </ul>
        <p className='base'>base test</p>
        <p className='inverse'>base test</p>
        <p className='info'>base test</p>
        <p className='alert'>base test</p>
        <p className='success'>base test</p>
        <p className='message'>base test</p>
        <p className='success2'>base test</p>
        <p className='error'>base test</p>
        <p className='warning'>base test</p>
        <div className='square-av' ></div>
        <div className='circle-av' ></div>
        <div className='sidebar' ></div>
        <div className='gray' >gray</div>
        <div className='button' >button</div>
        <div className='pulse' >button</div>
    </div>
  )
}
