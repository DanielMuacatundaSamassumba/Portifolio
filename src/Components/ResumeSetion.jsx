import { useState } from "react"
import { Github, ChevronLeft, ChevronRight } from 'lucide-react'
import html from './../assets/Skills/html-5.png'
import js from "./../assets/Skills/js (1).png"
import css from "./../assets/Skills/css-3.png"
import typscript from "./../assets/Skills/typescript.png"
import react from "./../assets/Skills/physics.png"
import nodejs from "./../assets/Skills/nodejs.png"
import tailwind from "./../assets/Skills/taiwidcsss-removebg-preview.png"
import figma from "./../assets/Skills/figma.png"
import mysql from './../assets/Skills/mysql.png'
import LpginProject from './../assets/Projects/LoginPage.png'
import projct2 from './../assets/Projects/Captura de Ecrã (12).png'
import projct3 from './../assets/Projects/Captura de Ecrã (16).png'
import projct4 from './../assets/Projects/Captura de Ecrã (17).png'
import projct5 from './../assets/Projects/Capturar1.png'
import projct6 from './../assets/Projects/Capturar3.png'
import projct7 from './../assets/Projects/1710690073412.jfif'
import projct8 from './../assets/Projects/1710690073881.jfif'
import projct9 from './../assets/Projects/1710690073895.jfif'
export default function ResumeSetion() {
  const [experience, setExperience] = useState("none")
  const [skills, setSkills] = useState("none")
  const [education, setEducation] = useState("none")
  const [experiencesetion, setExperiencesetion] = useState(true)
  const [skillsetion, setSkillssetion] = useState(false)
  const [educationsetion, setEducationsetion] = useState(false)
  const [next, SetNext] = useState(0)
  const [prev, setPreve] = useState(0)
  const [projects, setProjects] = useState([



    {
      id: 5,
      image: LpginProject,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "ReactJs, Typescript, Tailwind Css, Mysql, Node JS",
            link:"https://github.com/DanielMuacatundaSamassumba/Maneger_Financial"
    },
    {
      id: 6,
      image: projct6,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "ReactJs, Typescript, Tailwind Css, Mysql, Node JS",
            link:"https://github.com/DanielMuacatundaSamassumba/Maneger_Financial"
    },
    {
      id: 7,
      image: projct5,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "ReactJs, Typescript, Tailwind Css, Mysql, Node JS",
            link:"https://github.com/DanielMuacatundaSamassumba/Maneger_Financial"
    },
    {
      id: 8,
      image: projct7,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "HTML 5, CSS3, JS, PHP, MYSQL",
            link:"https://github.com/DanielMuacatundaSamassumba/System_Center"
    },
    {
      id: 9,
      image: projct9,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "HTML 5, CSS3, JS, PHP, MYSQL",
            link:"https://github.com/DanielMuacatundaSamassumba/System_Center"
    },
    {
      id: 10,
      image: projct8,
      title: "Figma ",
      desc: "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      stacks: "HTML 5, CSS3, JS, PHP, MYSQL",
            link:"https://github.com/DanielMuacatundaSamassumba/System_Center"
    },
 
  ])
  function Expirence() {
    setEducation("#1E1E1E")
    setExperience("#00875F")
    setSkills("#1E1E1E")
    setEducationsetion(false)
    setSkillssetion(false)
    setExperiencesetion(true)
  }
  function Education() {
    setEducation("#00875F")
    setExperience("#1E1E1E")
    setSkills("#1E1E1E")
    setEducationsetion(true)
    setSkillssetion(false)
    setExperiencesetion(false)
  }
  function Skills() {
    setEducation("#1E1E1E")
    setExperience("#1E1E1E")
    setSkills("#00875F")
    setEducationsetion(false)
    setSkillssetion(true)
    setExperiencesetion(false)
  }
  const Next = () => {
    SetNext(curr => {
      if (curr == projects.length - 1) {
        return curr = 0;
      } else {
        return curr + 1
      }
    })
  }
  const Prev = () => {
    SetNext(curr => {
      if (curr > 0) {
        return curr - 1;
      } else {
        return curr = projects.length - 1
      }
    })
  }
  return (
    <div className="w-10/12 mt-4   xl:w-7/12 xl:m-20">
      <h1 className="text-otherColor font-bold text-2xl">
        Resumo
      </h1>
      <div className="xl:flex xl:justify-between">
        <div className="flex  flex-col justify-center  w-full mt-4 xl:w-1/3 ">
          <button className="bg-secondColor p-3 rounded-lg" onClick={Expirence} style={{ backgroundColor: experience }}>Experiência</button>
          <button className="bg-secondColor p-3 rounded-lg mt-3" onClick={Education} style={{ backgroundColor: education }}>Educação</button>
          <button className="bg-secondColor p-3 rounded-lg mt-3" onClick={Skills} style={{ backgroundColor: skills }}>Hard Skills</button>
        </div>
        <div className="xl:w-1/2">
          {
            experiencesetion && (
              <>
                <div className="bg-secondColor mt-5 p-3 rounded-sm h-32 xl:w-9/12">
                  <div className="text-otherColor font-semibold">2024-Present</div>
                  <div>
                    <h1 className="font-semibold">Desenvolvidor  Web</h1>
                    <div className="flex  justify-start items-center mt-2">
                      <span className="w-4 rounded-full
                h-4 bg-otherColor block "></span>
                      <h1 className="ml-2">Bee - Agência de Marketing</h1></div>
                  </div>

                </div>
               </>
            )


          }

          {
            educationsetion && (
              <>
                <div className="bg-secondColor mt-5 p-3 rounded-sm h-32 xl:w-9/12">
                  <div className="text-otherColor font-semibold">2019-2023</div>
                  <div>
                    <h1 className="font-semibold">Curso Técnico de Gestão de Sistema Informáticos</h1>
                    <div className="flex  justify-start items-center mt-2">
                      <span className="w-4 rounded-full
                 h-4 bg-otherColor block "></span>
                      <h1 className="ml-2">Instituto Politécnico Industrial de Luanda(Makarenko)</h1></div>
                  </div>

                </div>
                <div className="bg-secondColor mt-5 p-3 rounded-sm h-32 xl:w-9/12">
                  <div className="text-otherColor font-semibold">2023</div>
                  <div>
                    <h1 className="font-semibold">Curso de Desenvolvimento Web</h1>
                    <div className="flex  justify-start items-center mt-2">
                      <span className="w-4 rounded-full
                 h-4 bg-otherColor block "></span>
                      <h1 className="ml-2">Centro de Formação do Itel</h1></div>
                  </div>

                </div></>
            )
          }
          {
            skillsetion && (
              <>
                <div className=" bg-secondColor flex justify-center items-center p-3 rounded-sm mt-3 xl:w-9/12">
                  <div className=" flex justify-center">
                    <img src={html} alt="" className="w-1/2" />
                  </div>

                  <div className="flex justify-center">
                    <img src={css} alt="" className="w-1/2" />
                  </div>
                </div>
                <div className="bg-secondColor flex justify-center items-center  p-3 xl:w-9/12">
                  <div className="flex justify-center">
                    <img src={js} alt="" className="w-1/2" />
                  </div>
                  <div className="flex justify-center">
                    <img src={tailwind} alt="" className="w-1/2" />
                  </div>
                </div>

                <div className="bg-secondColor flex justify-center items-center  p-3 xl:w-9/12">
                  <div className="flex justify-center">
                    <img src={react} alt="" className="w-1/2" />
                  </div>
                  <div className="flex justify-center">
                    <img src={typscript} alt="" className="w-1/2" />
                  </div>
                </div>
                <div className="bg-secondColor flex justify-center items-center p-3 xl:w-9/12">
                  <div className="flex justify-center ">
                    <img src={nodejs} alt="" className="w-1/2" />
                  </div>
                  <div className="flex justify-center">
                    <img src={figma} alt="" className="w-1/2" />
                  </div>
                </div>
                <div className="bg-secondColor flex justify-center items-center p-3 xl:w-9/12" >
                  <div className="ml-8">
                    <img src={mysql} alt="" className="w-1/4" />
                  </div>


                </div>

                <div>

                </div>
              </>
            )
          }
          
        </div>
      </div>
      <div className="w-80 xl:w-10/12 xl:mt-20" id="work">
            <h1 className="text-otherColor text-2xl font-bold mt-4">Projetos</h1>
            {
              projects.map((item, i) => (
                next == i ?
                  <>
                    <div className="bg-secondColor mt-4 xl:flex xl:mt-10 xl:p-3">
                      <div key={item.id}>
                        <img src={item.image} alt="" srcset="" className="" />

                      </div>
                      <div className="xl:p-2" >
                        <p className="text-4xl font-bold"> 0 {i + 1}</p>
                        <h2 className="text-2xl font-bold mt-2"> {item.title} </h2>
                        <p className="mt-2"> {item.desc} </p>
                        <p className="text-otherColor font-semibold">{item.stacks}</p>
                        <div className="border-t border-b-neutral-400 border-1  border-dashed mt-2">
                        <a href={item.link}>  <Github size={40} className="mt-2 text-otherColor" cursor={"pointer"} /></a>
                        </div>
                      </div>
                    </div>
                  </>
                  : ""
              )

              )
            }
            <div className=" bg-secondColor p-2 w-full flex justify-end mt-2">
              <button className="bg-otherColor p-2" onClick={Prev}>   <ChevronLeft ></ChevronLeft></button>
              <button className="bg-otherColor p-2 ml-2" onClick={Next}>    <ChevronRight></ChevronRight></button>
            </div>
          </div>
    </div>
  )
}
