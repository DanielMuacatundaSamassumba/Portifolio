
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
export default function Header() {
    const [menu, setMenu] = useState("block")
    const [close, setClose] = useState("none")
    const [ itemsmenu, setItemsmenu] = useState("none")
    function MenuState() {
        setClose("block")
        setMenu("none")
        setItemsmenu("block")
    }
    function MenuClose() {
        setClose("none")
        setMenu("block")
        setItemsmenu("none")
    }
    return (
        <div>
            <header className="flex justify-center items-center w-full xl:flex justify-evenly ">
                <div className="text-otherColor  text-2xl font-bold">
                    {"<Samassumba/>"}
                </div>
                <nav className="flex flex-col justify-end items-center  w-full mt-3 p-2 xl:w-1/3     xl:flex xl:flex-row-reverse xl:justify-around items-center  ">
                    <div className=' flex justify-end  w-full xl:hidden'>
                        <Menu size={40} style={{ display: menu }} onClick={MenuState}  />
                        <X size={40} style={{ display: close }} onClick={MenuClose}/>
                        <button className="bg-otherColor p-2 rounded-full ml-2"> <a href="#contacto">Contacte-me</a></button>
                    </div>
                    <div className=' hidden  w-1/2 xl:block '>
                        <button className="bg-otherColor p-2 rounded-full ml-2 "><a href="#contacto">Contacte-me</a></button>
                    </div>
                    <ul className="hidden absolute top-20 left-0 w-full p-4 bg-otherColor" style={{display:itemsmenu, backgroundColor:"", transition:"ease-in"}}>
                        <li className='border-b p-2'> <a href="#home">Pagina Inicial</a></li>
                        <li className='border-b p-2'><a href="#service">Serviços</a></li>
                        <li className='border-b p-2'><a href="#work">Projectos</a></li>
                    </ul>
                    <ul className=" hidden xl:block xl:flex" >
                        <li className=' p-2  text-xl font-semibold'> <a href="#home">Home</a></li>
                        <li className=' p-2  text-xl font-semibold'><a href="#service">Serviços</a></li>
                        <li className=' p-2  text-xl font-semibold'><a href="#work">Projectos</a></li>
                    </ul>
          
                </nav>
            </header>
        </div>
    )
}
