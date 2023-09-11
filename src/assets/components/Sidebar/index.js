import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import logoS from '../../images/ss.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressCard, faBriefcase, faE, faEnvelope, faHome, faProcedures, faUser} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGit, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logoS}
                    alt='logo'></img>
                <p className='sublogo'>Sammy</p>
            </Link>
            
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome}
                        color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser}
                        color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/work">
                    <FontAwesomeIcon icon={faBriefcase}
                        color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope}
                        color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/thant-thant-sin-han-73182423a'>
                        <FontAwesomeIcon icon={faLinkedinIn}  color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/bomxbomx'>
                        <FontAwesomeIcon icon={faGithub}  color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/sammy.boomx?mibextid=9R9pXO'>
                        <FontAwesomeIcon icon={faFacebook}  color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://instagram.com/sammybomx?igshid=OGQ5ZDc2ODk2ZA=='>
                        <FontAwesomeIcon icon={faInstagram}  color='#4d4d4e'></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
