import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="#">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-medium'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primry-text'>
                            {' '}
                            Hello, I'M <span className='highlighted-text'>Aman</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {' '}
                            <h1>
                                {' '}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Web Developer 🖥',
                                        1000,
                                        "MERN Stack Developer ⚛",
                                        1000,
                                        "DevOps ∞",
                                        1000,
                                        "Linux Enthusiast 🐧",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>Love to explore & keep diving into the new technologies.</span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {''}
                            Hire Me{' '}
                        </button>
                        <a href="resume.pdf" download='resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
