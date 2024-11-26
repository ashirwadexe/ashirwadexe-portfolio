import React from 'react'
import { GitBranchPlus, Github, GithubIcon, InstagramIcon, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

function HeroSection() {
  return (
    <div className='max-w-screen-md mx-auto p-5'>

        {/* BANNER */}
        <div>
            <img className='border rounded-3xl' src="/Portfolio-banner.jpg" alt="" />
        </div>

        {/* NAME, PARA */}
        <div>
            <h2 className='mt-7 text-2xl font-semibold text-[#222222] font-spartan'>Hi, I'm <span className='text-sky-500'>Ashirwad Chaurasia</span>👋</h2>
            <h1 className='mt-4 text-5xl font-bold font-spartan text-[#222222]'>I make <span className='text-[#16A34A]'>full-stack</span> products that people <span className='text-[#F472B6]'>love</span>.</h1>
            <p className='mt-6 text-md font-spartan text-[#64748B]'>Hi, I'm a final-year BCA student diving deep into full-stack web development. I love building beautiful, functional applications. From designing engaging front-ends to creating solid back-end systems, I enjoy every part of the development process.</p>
        </div>

        {/* CONTACT ICONS */}
        <div className='my-5 flex gap-7'>
            <a className='text-[#64748B] hover:text-[#1e2938]' href="https://github.com/ashirwadexe" target='_blank'><Github size={30}/></a>
            <a className='text-[#64748B] hover:text-[#1e2938]' href="https://x.com/ashirwadexe" target='_blank'><Twitter size={30}/></a>
            <a className='text-[#64748B] hover:text-[#1e2938]' href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/" target='_blank'><Linkedin size={30}/></a>
            <a className='text-[#64748B] hover:text-[#1e2938]' href="mailto:ashirwadbappy@gmail.com" target='_blank'><Mail size={30}/></a>
            <a className='text-[#64748B] hover:text-[#1e2938]' href="https://www.instagram.com/ashirwad_bappy/" target='_blank'><InstagramIcon size={30}/></a>
        </div>
        {/* <div>
            <p className='mt-6 text-md font-spartan text-[#64748B]'>I’m passionate about learning new technologies and constantly improving my skills. Whether I'm crafting interactive websites or optimizing systems, I’m excited to work on projects that make an impact. Let's collaborate and create something amazing!</p>
        </div> */}

    </div>
  )
}

export default HeroSection

