import React from 'react'
import AnimatedLetters from '../AnimatedLetters/indedx'
import Loader from 'react-loaders'
import './index.scss'
import colorful from '../../images/Rock-paper-scissors.png'
import cafeoclock from '../../images/Cafe-O-Clock.png'


const Work = () => {
  return (
    <>
    <div className='container work-page'>
        <div className='text-zone'>
           <h1>
              <AnimatedLetters 
              strArray={['M','y', ' ','P','r','o','j','e','c','t','s']}
              idx={10}
              />
           </h1>
           <p>
              I have done some projects!<br/>
              More update will coming soon...
           </p>
        </div>
        <div className='image-container'>
         <div className='pj'>
            <div className='image-overlay'>
               <a href='https://github.com/bomxbomx/Rock_Paper_Scissors_with_react.git' className='image-button'>Rock-paper-scissors</a>
            </div>
            <img className='image' src={colorful}></img>
         </div>
         <div className='pj2'>
            <div className='image-overlay2'>
               <a href='https://github.com/bomxbomx/Cafe_O_Clock_Website.git' className='image-button2'>Cafe-O-Clock</a>
            </div>
            <img className='image2' src={cafeoclock}></img>
            </div>
        </div>
        
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Work