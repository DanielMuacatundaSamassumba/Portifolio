import Banner from './Components/Banner'
import Header from './Components/Header'
import CardFirstSetion from './Components/CardFirstSetion'
import CardServicce from './Components/CardServicce'
import image1 from './assets/Cryptocurrency.svg'
import image2 from './assets/Development Skill.svg'
import image3 from './assets/Espeasy.svg'
import dev from './assets/Google Code.svg'
import ResumeSetion from './Components/ResumeSetion'
import ContactForm from './Components/ContactForm'
export default function App() {
  return (
    <div className='bg-background min-h-svh text-white'>
      <div>
        <Header></Header>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div className='mt-3 xl:flex xl:w-11/12 xl:justify-center xl:items-center xl:mt-8'>
        <div className=' flex justify-center h-full'>
          <CardFirstSetion
            text={"Years of Expirience"}
            number={2}
            image={image1}></CardFirstSetion>
        </div>
        <div className=' flex justify-center h-1/2 xl:ml-2'>
          <CardFirstSetion
            text={"Years of Expirience"}
            number={2}
            image={image2}></CardFirstSetion>
        </div>
        <div className=' flex justify-center h-1/2 xl:ml-2'>
          <CardFirstSetion
            text={"Years of Expirience"}
            number={2}
            image={image3}></CardFirstSetion>
        </div>
      </div>
      <div className='flex justify-center xl:mt-20'>
        <div className='w-10/12 xl:flex xl:flex-col xl:w-7/12'>
          <h1 className='text-otherColor font-bold text-2xl mt-3'>
            Service
          </h1>
          <div className='xl:flex xl:justify-between xl:items-center  '>
            <div className='xl:'>

              <CardServicce
                number={"01"}
                icon={dev}
                skill={"Web Developement"}
                text={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consectetur hic unde ad nisi esse. Deleniti dolo"} />
            </div>
            <div className='xl:ml-2'>

              <CardServicce
                number={"02"}
                icon={dev}
                skill={"UI/ UX Design"}
                text={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consectetur hic unde ad nisi esse. Deleniti dolo"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center xl: xl:flex xl:justify-center'>

          <ResumeSetion />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-10/12 xl:  xl:w-8/12 xl:flex xl:justify-center'>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  )
}
