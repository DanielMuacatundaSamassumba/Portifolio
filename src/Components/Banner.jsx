import image from './../assets/1720352375592.jfif'
import cv from './../assets/Cv/Cópia de CV-Programador.pdf'
import {  CircleArrowDown, Github, Youtube, Linkedin} from "lucide-react"
export default function Banner() {
    return (
        <div className='xl:flex xl:flex-col xl:justify-center xl:items-center' id='home'>
            <div className='xl:flex xl:w-7/12 xl:justify-center xl:items-center'>
                <div className='mt-10'>
                    <p className='text-center text-otherColor font-bold xl:text-justify'>Desenvolvedor Web FrontEnd</p>
                    <h1 className="font-bold text-2xl mt-2 text-center xl:text-justify">Olá , Eu sou </h1>
                    <h1 className='font-bold text-center text-otherColor text-3xl mt-3 xl:text-justify'>Daniel Samassumba</h1>
                    <p className='text-center mt-2 xl:text-justify xl:w-7/12'>
                    Olá, eu sou Daniel Samassumba, desenvolvedor web FrontEnd.
                     Tenho experiência em tecnologias modernas como
                     JavaScript e React, criando interfaces dinâmicas 
                     e responsivas. Meu foco é entregar soluções eficientes, 
                     garantindo uma ótima experiência para os usuários.
                    </p>
                </div>
                <div className=' flex justify-center mt-4 xl:flex xl:justify-start'>

                    <img src={image} alt="" className='w-2/3  border-dashed border-otherColor border rounded-full p-3 xl:w-full' 
         
                    />

                </div>
            </div>
            <div className='flex justify-center items-center mt-4 xl:flex xl:justify-start xl:w-7/12 '>
               <a href={cvp}>  <button className=' flex border-otherColor border p-3 rounded-full text-otherColor'>download cv  <CircleArrowDown className='ml-3'/></button></a>
                 <div className='flex justify-center items-center'>
                  <a href="https://github.com/DanielMuacatundaSamassumba"> <Github size={40} className='text-otherColor ml-2'/></a>
                 <a href="https://www.youtube.com/@SamasTech">    <Youtube size={40} className='text-otherColor ml-2'/></a>
              <a href="https://www.linkedin.com/in/daniel-samassumba-7b66591b1/">     <Linkedin size={40} className='text-otherColor ml-2'/></a>
            
                 </div>
            </div>
        </div>
    )
}
