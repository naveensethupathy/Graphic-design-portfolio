import React from 'react'
import naveen01 from '../images/naveen01.png'
import andrea from '../images/andrea.jpg'
import flex from '../images/flex1.jpg'
import phoneix from '../images/phoenix.jpg'
import cover from '../images/cover.jpg'
import bcm from '../images/bcm.jpg'
import Image from '../components/Image'

const Box1 = () => {
  function openModal(img) {
    console.log("clicked");
    return(
    <Image img={img}></Image>
    )
 
  }
  return (
    <div className='grid'>
      <div class="item">
        <h1>Who Am I 🎨</h1>
        <p>I am a freelance graphic designer and a college student pursuing a BTech in Artificial Intelligence and Data Science. With a passion for graphic design that started in ninth grade, I have developed extensive experience and strong skills in tools like Photoshop and Illustrator.</p>
        <img src={naveen01} className='naveenpic'></img>
      </div>
      <div class="item">
        <h1 className='name1'>Naveen Sethupathy...</h1>
        {/* <p className='namep'>I am</p> */}
  
      </div>
      <div class="item"> 
       <h1>Hello👋</h1>
      <h1>வணக்கம்</h1>
      <h1>नमस्ते</h1>  
      <h1>Bonjour</h1>
      <h1>Ciao</h1>
      <h1>
      Olà
      </h1>
      <h1>やあ</h1>
       
      
      
        
      </div>
      <div id="and" class="item">
      {/* <h1>Posters</h1> */}
      <img className='andrea' src={andrea}></img>
      </div>
      <div class="item">
      <img onClick={()=>openModal(cover)} className='cover' src={cover}></img>
      </div>
      <div class="item">
        <img className='flex1' src={flex}></img>
      </div>
      
      <div class="item">
        <img className='post1' src={phoneix}></img>
      </div>
      <div class="item">
        
      </div>
     
    </div>

  )
}

export default Box1