import React from 'react'
import myPic from '../pictures/myPic.jpg'

export const Intro = () => {
  return (
    <div className='intro-container'>
        <div className='picture-container'>
            <img src={myPic} alt='Profile pictures' className='profilePic'/>
        </div>
        <div className='intro-text'>
            <h2>Hi! I am Rabbani Alam</h2>
            <p> A computer science major set to graduate from Memorial University of Newfoundland in the spring of 2023. As a full-stack developer, I have honed my skills in React, JavaScript, Python, Java, NodeJS, SQL, and PostgreSQL, among others. My passion for programming started during my internship at Colab Software, where I worked on various projects and gained hands-on experience in software development.

In addition to my technical skills, I am also a powerlifter who loves lifting heavy weights. I believe that my dedication and discipline in the gym translate to my work as a developer, where I strive for excellence and continuous improvement. I have also completed the web development bootcamp by Angela Yu in 2020 and received the certificate upon completion.

I am proud to have participated in the Hacking Mount Pearl hackathon in 2022, where my team achieved 2nd place. Our project aimed to overcome the shortage of paraprofessionals in Mount Pearl, Newfoundland, by developing a web platform to connect students with special needs to trained volunteers. I am committed to using my technical skills to make a positive impact in the world and am excited to see what the future holds in my career as a developer.</p>

        </div>
    </div>
  )
}
