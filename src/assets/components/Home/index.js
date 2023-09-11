import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import slogo from '../../images/ss.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/indedx'
import Logo from './Logo'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'm', 'm', 'y']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.'
    ]

    // useEffect(()=>{
    //   return setTimeout(()=> {
    //     setLetterClass('text-animate-hover')
    //   })
    // },[])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={
                        `${letterClass} _12`
                    }>i,</span>
                    <br/>
                    <span className={
                        `${letterClass} _13`
                    }>I</span>
                    <span className={
                        `${letterClass} _14`
                    }>'m</span>
                    <img src={slogo}
                        alt='developer'></img>
                           
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}/>
                </h1>
                <h2>Frontend Developer / JavaScript Expert</h2>
                <h2>+95-9-791714213 / hanthantthantsin@gmail.com</h2>
                <h2>Thant Thant Sin Han / Yangon, Myanmar   </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home
