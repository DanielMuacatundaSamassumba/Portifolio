import image from './../assets/1720352375592.jfif'
import {  CircleArrowDown, Github, Youtube, Linkedin} from "lucide-react"
export default function Banner() {
    return (
        <div className='xl:flex xl:flex-col xl:justify-center xl:items-center'>
            <div className='xl:flex xl:w-7/12 xl:justify-center xl:items-center'>
                <div className='mt-10'>
                    <p className='text-center text-otherColor font-bold xl:text-justify'>FrontEnd Developer</p>
                    <h1 className="font-bold text-2xl mt-2 text-center xl:text-justify">Hello , I´m </h1>
                    <h1 className='font-bold text-center text-otherColor text-3xl mt-3 xl:text-justify'>Daniel Samassumba</h1>
                    <p className='text-center mt-2 xl:text-justify xl:w-7/12'>
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting
                        industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                        since the 1500s, when an unknown printer
                        took a galley of
                    </p>
                </div>
                <div className=' flex justify-center mt-4 xl:flex xl:justify-start'>

                    <img src={image} alt="" className='w-2/3  border-dashed border-otherColor border rounded-full p-3' />

                </div>
            </div>
            <div className='flex justify-center items-center mt-4 xl:flex xl:justify-start xl:w-7/12 '>
                <button className=' flex border-otherColor border p-3 rounded-full text-otherColor'>download cv  <CircleArrowDown className='ml-3'/></button>
                 <div className='flex justify-center items-center'>
                 
                 <Github size={40} className='text-otherColor ml-2'/>
                 <Youtube size={40} className='text-otherColor ml-2'/>
                 <Linkedin size={40} className='text-otherColor ml-2'/>
                 </div>
            </div>
        </div>
    )
}
