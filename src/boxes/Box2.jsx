/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { motion } from 'framer-motion';
import naveen01 from '../images/naveen01.png';
import naveen02 from '../images/naveen02.png';
import andrea from '../images/andrea.jpg';
import flex from '../images/flex1.jpg';
import phoneix from '../images/phoenix.jpg';
import phoneix2 from '../images/phoenix2.jpg';
import cover from '../images/cover.jpg';
import Image from '../components/Image';
import bcm from '../images/bcm.jpg';
import form from '../images/form.jpg';
import pstory from '../images/pstory.jpg';
import mc from '../images/mc.jpg';
import ll from '../images/ll.jpg';
import pn3 from '../images/pn3.jpg';
import mm from '../images/mm.jpg';
import andreastry from '../images/016.png';
import linkedin from '../logos/linkedin-brands-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ImageModel from '../components/ImageModel';
import { useState } from 'react';
import quote from '../images/page1.jpeg'
import bdf from '../images/bdf.pdf'
import tools from '../images/tools.png'
import tools2 from '../images/tools2.png'
const Box2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const openModal = (src) => {
        setImageSrc(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setImageSrc('');
    };

    const leftSlideIn = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const bottomSlideIn = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const topSlideIn = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div>
            <section className="bg-[#edeef0]">
                <div className="py-4 px-2 mx-0 max-w-screen-xxl sm:py-4 lg:px-6">
                    <motion.div
                        className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={leftSlideIn} className="group transition-colors durations-300 ease-in-out col-span-2 row-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                            <div  onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} href=""  className="group group-hover:bg-[#bed321] relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow bg-[#2c88fb]">
                                {isHovered ?
                                    <img className="lg:z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={naveen02} />
                                : <img className="lg:z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={naveen01} />
                                }
                                
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-black group-hover:text-[#233004] text-white absolute top-0 left-0 p-4 xs:text-xl md:text-5xl">Who Am I ?</h3>
                                <p className='group-hover:text-[#233004] top-20 text-[25px] font-bold text-white absolute xs:text-3xl md:text-3xl"'>I am a dedicated graphic designer with over 6 years of experience crafting visually stunning and effective design solutions. Proficient in a variety of design tools and techniques, I bring creativity and innovation to every project.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={rightSlideIn} className="col-span-2 sm:col-span-1 md:col-span-2 bg-[#edeef0]">
                            <div  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-20 pt-40 mb-4">
                                <div className="absolute inset-0 bg-[#feb12a] h-200">
                                    {/* <h1 className='navHead text-[#52100f] text-balance font-black text-[70px] pt-5 text-center break-all leading-[80px]'><h1>
	<span data-z data-z-event="pointer" data-z-eventRotation="20deg">Naveen <br></br>sethupathy</span>
</h1></h1> */}
                                </div>
                                <div class="stage">
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  

</div>
<div  class="stage2">
<div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
  <div class="layer1"></div>
</div>
                            </div>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 rounded-lg">
                                <div  className="group relative flex gap-5 sm:gap-2 lg:gap-2 flex-col overflow-hidden rounded-lg px-4 pb-4 pt-4 bg-[#581b1c]">
                                    {/* <img src={bcm} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                 */}
                                  <div className='flex flex-row gap-2 sm:gap-2 lg:gap-5 justify-center'>
                                  <a href='https://www.linkedin.com/in/naveensethupathys/'>                                      <svg className='h-[50px] sm:h-[50px] lg:h-[70px] bg-blue fill-current text-[#f5e0bf] hover:text-[#3a7eff]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
   
                                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                      </a>

                                     <a href='mailto:naveensethupathy7@gmail.com'>
                                      <svg className='h-[50px] sm:h-[50px] lg:h-[70px] fill-current text-[#f5e0bf] hover:text-[#f55c2f]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                      </a>
                                      <a href='https://wa.me/917448708598'><svg className='h-[50px] sm:h-[50px] lg:h-[70px] fill-current text-[#f5e0bf] hover:text-[#ced726]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
</a>
                                      </div>
                                      <div className='flex flex-row gap-2 sm:gap-2 lg:gap-5 justify-center'>
                                      <a href='https://github.com/naveensethupathy'>                                      <svg className='h-[50px] sm:h-[50px] lg:h-[70px] fill-current text-[#f5e0bf] hover:text-[#98a0b2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                      </a>
                                        <a href='https://drive.google.com/file/d/15D-Xn8sMN3HXYNecrq9vlvQ4Y26Ebpj3/view?usp=sharing'>
                                      <svg className='h-[50px] sm:h-[50px] lg:h-[70px] fill-current text-[#f5e0bf] hover:text-[#f89dc0]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                      <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>
                                      </a>
                                      <a href='https://drive.google.com/drive/folders/13mDy7-6_LiN2BD-k_-shygGb7loeM3Nf?usp=sharing'>

                                      
                                      <svg className='h-[50px] sm:h-[50px] lg:h-[70px] fill-current text-[#f5e0bf] hover:text-[#ffbe7c]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
</a>
                                      </div>
                                      
                                      
                                </div>
                                
                                <div onClick={() => openModal(cover)} className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-1 md:col-span-1 bg-white rounded-lg h-auto md:h-full flex flex-col">
                            <div  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-14 flex-grow">
                            <div class="wrapper">
                            <h1 className='text-black font-black text-3xl pb-2'>Hello <span className='animate-move-left-right'>👋</span></h1>
                                <h1 className='text-black font-black text-3xl pb-2'>வணக்கம்</h1>
                                <h1 className='text-black font-black text-3xl pb-2'>नमस्ते</h1>
                                <h1 className='text-black font-black text-3xl pb-2'>Bonjour</h1>
                                <h1 className='text-black font-black text-3xl pb-2'>Ciao</h1>
                                <h1 className='text-black font-black text-3xl pb-2'>Olà</h1>
                                <h1 className='text-black font-black text-3xl'>やあ</h1>
  <div class="confetti-149"></div>
  <div class="confetti-148"></div>
  <div class="confetti-147"></div>
  <div class="confetti-146"></div>
  <div class="confetti-145"></div>
  <div class="confetti-144"></div>
  <div class="confetti-143"></div>
  <div class="confetti-142"></div>
  <div class="confetti-141"></div>
  <div class="confetti-140"></div>
  <div class="confetti-139"></div>
  <div class="confetti-138"></div>
  <div class="confetti-137"></div>
  <div class="confetti-136"></div>
  <div class="confetti-135"></div>
  <div class="confetti-134"></div>
  <div class="confetti-133"></div>
  <div class="confetti-132"></div>
  <div class="confetti-131"></div>
  <div class="confetti-130"></div>
  <div class="confetti-129"></div>
  <div class="confetti-128"></div>
  <div class="confetti-127"></div>
  <div class="confetti-126"></div>
  <div class="confetti-125"></div>
  <div class="confetti-124"></div>
  <div class="confetti-123"></div>
  <div class="confetti-122"></div>
  <div class="confetti-121"></div>
  <div class="confetti-120"></div>
  <div class="confetti-119"></div>
  <div class="confetti-118"></div>
  <div class="confetti-117"></div>
  <div class="confetti-116"></div>
  <div class="confetti-115"></div>
  <div class="confetti-114"></div>
  <div class="confetti-113"></div>
  <div class="confetti-112"></div>
  <div class="confetti-111"></div>
  <div class="confetti-110"></div>
  <div class="confetti-109"></div>
  <div class="confetti-108"></div>
  <div class="confetti-107"></div>
  <div class="confetti-106"></div>
  <div class="confetti-105"></div>
  <div class="confetti-104"></div>
  <div class="confetti-103"></div>
  <div class="confetti-102"></div>
  <div class="confetti-101"></div>
  <div class="confetti-100"></div>
  <div class="confetti-99"></div>
  <div class="confetti-98"></div>
  <div class="confetti-97"></div>
  <div class="confetti-96"></div>
  <div class="confetti-95"></div>
  <div class="confetti-94"></div>
  <div class="confetti-93"></div>
  <div class="confetti-92"></div>
  <div class="confetti-91"></div>
  <div class="confetti-90"></div>
  <div class="confetti-89"></div>
  <div class="confetti-88"></div>
  <div class="confetti-87"></div>
  <div class="confetti-86"></div>
  <div class="confetti-85"></div>
  <div class="confetti-84"></div>
  <div class="confetti-83"></div>
  <div class="confetti-82"></div>
  <div class="confetti-81"></div>
  <div class="confetti-80"></div>
  <div class="confetti-79"></div>
  <div class="confetti-78"></div>
  <div class="confetti-77"></div>
  <div class="confetti-76"></div>
  <div class="confetti-75"></div>
  <div class="confetti-74"></div>
  <div class="confetti-73"></div>
  <div class="confetti-72"></div>
  <div class="confetti-71"></div>
  <div class="confetti-70"></div>
  <div class="confetti-69"></div>
  <div class="confetti-68"></div>
  <div class="confetti-67"></div>
  <div class="confetti-66"></div>
  <div class="confetti-65"></div>
  <div class="confetti-64"></div>
  <div class="confetti-63"></div>
  <div class="confetti-62"></div>
  <div class="confetti-61"></div>
  <div class="confetti-60"></div>
  <div class="confetti-59"></div>
  <div class="confetti-58"></div>
  <div class="confetti-57"></div>
  <div class="confetti-56"></div>
  <div class="confetti-55"></div>
  <div class="confetti-54"></div>
  <div class="confetti-53"></div>
  <div class="confetti-52"></div>
  <div class="confetti-51"></div>
  <div class="confetti-50"></div>
  <div class="confetti-49"></div>
  <div class="confetti-48"></div>
  <div class="confetti-47"></div>
  <div class="confetti-46"></div>
  <div class="confetti-45"></div>
  <div class="confetti-44"></div>
  <div class="confetti-43"></div>
  <div class="confetti-42"></div>
  <div class="confetti-41"></div>
  <div class="confetti-40"></div>
  <div class="confetti-39"></div>
  <div class="confetti-38"></div>
  <div class="confetti-37"></div>
  <div class="confetti-36"></div>
  <div class="confetti-35"></div>
  <div class="confetti-34"></div>
  <div class="confetti-33"></div>
  <div class="confetti-32"></div>
  <div class="confetti-31"></div>
  <div class="confetti-30"></div>
  <div class="confetti-29"></div>
  <div class="confetti-28"></div>
  <div class="confetti-27"></div>
  <div class="confetti-26"></div>
  <div class="confetti-25"></div>
  <div class="confetti-24"></div>
  <div class="confetti-23"></div>
  <div class="confetti-22"></div>
  <div class="confetti-21"></div>
  <div class="confetti-20"></div>
  <div class="confetti-19"></div>
  <div class="confetti-18"></div>
  <div class="confetti-17"></div>
  <div class="confetti-16"></div>
  <div class="confetti-15"></div>
  <div class="confetti-14"></div>
  <div class="confetti-13"></div>
  <div class="confetti-12"></div>
  <div class="confetti-11"></div>
  <div class="confetti-10"></div>
  <div class="confetti-9"></div>
  <div class="confetti-8"></div>
  <div class="confetti-7"></div>
  <div class="confetti-6"></div>
  <div class="confetti-5"></div>
  <div class="confetti-4"></div>
  <div class="confetti-3"></div>
  <div class="confetti-2"></div>
  <div class="confetti-1"></div>
  <div class="confetti-0"></div>
</div>
                               
                                
                            </div>
                            
                        </motion.div>
                        <motion.div variants={topSlideIn} className="col-span-2 sm:col-span-1 md:col-span-3 bg-sky-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(andrea)} className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={andrea} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Concerts</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={leftSlideIn} className="col-span-2 sm:col-span-2 md:col-span-3 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(mc)} className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={mc} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Branding</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={rightSlideIn} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col rounded-lg">
                            <div onClick={() => openModal(ll)} className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={ll} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <h3 className="z-10 text-2xl font-medium text-[#4a504c] absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Logo design</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 h-auto md:h-full flex flex-col rounded-lg bg-[#a2b41c]">
                            <div onClick={() => openModal(form)} href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow bg-[#a2b41c]">
                            <img src={form} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                
                             
                            </div>
                        </motion.div>
                        <motion.div variants={topSlideIn} className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(pstory)}  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={pstory} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Story Posts</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={leftSlideIn} className="col-span-2 sm:col-span-2 md:col-span-3 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(flex)} className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={flex} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Banner</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={rightSlideIn} className="col-span-2 sm:col-span-2 md:col-span-3 rounded-lg bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(pn3)} href="" className="group relative flex flex-col rounded-lg overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={pn3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Fest Posters</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(mm)} href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={mm} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Business cards</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(andreastry)} href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={andreastry} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div onClick={() => openModal(quote)} href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={quote} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div  href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={tools2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <h3 className="z-10 text-2xl  text-white font-bold  absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Tools</h3>
                            </div>
                        </motion.div>
                        <motion.div variants={bottomSlideIn} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                      
                        <iframe className='h-[100%] rounded-lg' src={bdf}
 frameborder="0"></iframe>
                        </motion.div>
                    </motion.div>
                </div>
                <ImageModel isOpen={isModalOpen} imageSrc={imageSrc} onClose={closeModal} />
            </section>
        </div>
    );
};

export default Box2;
