import React from 'react'

export default function ContactForm() {
  return (
    <div className='mb-10 xl:w-1/2'>
        <div className=''>
            <h1  className='text-otherColor text-2xl font-bold mt-8'> Contact-me</h1>
        </div>
         <div className=' bg-secondColor w-full mt-10 p-4'>
             <h1 className='text-2xl font-semibold text-center mt-3'>Formulário de Contacto</h1>
              <form action="" className='mt-10'>
          <div className='w-full'>
             <input type="email" name="" id="" className='w-full bg-background p-4 text-white rounded-sm'  placeholder='Email'/>
          </div>
          <div className='w-full'>
             <input type="text" name="" id="" className='w-full bg-background p-4 text-white mt-2 rounded-sm' placeholder='Subject' />
          </div>
          <div className='w-full'>
             <textarea name="" id="" className='w-full bg-background p-4 text-white mt-2 h-60 rounded-sm'  placeholder='Massege'></textarea>
          </div>
           <div className='w-full'>
            <button className='w-full bg-otherColor p-3 mt-2 rounded-sm'>Send</button>
           </div>
              </form>
         </div>
    </div>
  )
}
