import React, { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/indedx'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer,Marker,Popup    } from 'react-leaflet'

const Contact = () => {
    const refForm = useRef()

    const sendEmail=(e)=>{
        e.preventDefault()

    emailjs.sendForm('gmail','template_nlohvm2',refForm.current, 'B7olhY8dSOMkAhYbN')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
      }, 
      () => {
          alert('Failed to sent the message, please try again');
      })
    }
  
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                 idx={15}
                />
               
            </h1>
            <p>           
                I'd love to hear from you. You can contact me through my website form. If you have any position requirement or any project to discuss feel free to contact me and I'll get back to you. 
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required></input>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required></input>
                        </li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required></input>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND'></input>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            Thant Thant Sin Han,
            <br/>
            Myanmar
            <br/>
            <span>hanthantthantsin@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[21.9162, 95.9560]} zoom={4}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[21.9162, 95.9560]}>
              <Popup>Sammy lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact