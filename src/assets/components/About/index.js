import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/indedx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  // const[letterClass, setLetterClass]=useState('text-animate')

  // useEffect(()=>{
  //   return setTimeout(()=>{
  //     setLetterClass('text-animated-hover')
  //   },4000)
  // },[]) 

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
           <h1>
              <AnimatedLetters 
              strArray={['H','e','l','l','o', ' ','T','h','e','r','e','!']}
              idx={10}
              />
           </h1>
           <p>
            I'm Thant Thant Sin Han, from Myanmar. You can call me Sammy. I love to learn how to build website since I was in grade 10th. I've graduated Bachelor of Science : Computing from University of Greenwich with <b>First Class Honors' </b> I'm would love to learn and challenge myself with different kinds of project . 
           </p>
           <p>
            I can work as a website/software developer and technical support position. I have <b>2 years experience with Technical Support position</b> in banking industry. I can understand about banking operation. I have been worked with MySQL developer to deploy report for the core operation system. 
           </p>
           <p>
             I can build user-friendly website and motivated to build and experience in various project. I'm able to responsible for designing, developing, testing and debugging responsive website.I can confidently develop website using HTML, CSS(Bootstrap), and JS(React). . GitHub is one
of my proficient code hosting platform.

           </p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faJs} color='#e6ff03'/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faBootstrap} color='#8c17eb'/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faNodeJs} color='#10e86a'/>
              </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About