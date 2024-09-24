import React from 'react'
import { useState } from 'react';
import { BadgeCheck } from 'lucide-react'
export default function ContactForm() {
   const [result, setResult] = useState(null)
   const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);

      formData.append("access_key", "be78ca6b-6fea-432b-b6a4-2f5c63717cdc");

      const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData
      });

      const data = await response.json();

      if (data.success) {
         setResult("Mensagem Enviada com Sucesso!");
         event.target.reset();
      } else {
         console.log("Error", data);
         setResult(data.message);
      }
   };
   return (
      <div className='mb-10 xl:w-1/2' id='contacto'>
         <div className=''>
            <h1 className='text-otherColor text-2xl font-bold mt-8'> Contact-me</h1>
         </div>
     {
       result ?
       <div className='xl:bg-otherColor xl:w-1/3 p-3 mt-2 flex  justify-center items-center bg-otherColor'>
       { result } <BadgeCheck className='ml-3'></BadgeCheck>
    </div>
     :""
     }
         <div className=' bg-secondColor w-full mt-10 p-4'>
            <h1 className='text-2xl font-semibold text-center mt-3'>Formulário de Contacto</h1>
            <form action="" className='mt-10' onSubmit={onSubmit}>
               <div className='w-full'>
                  <input
                     type="email"
                     name="email" id=""
                     className='w-full 
              bg-background p-4
               text-white rounded-sm
               '  placeholder='Email' 
                required/>
               </div>
               <div className='w-full'>
                  <input type="text"
                     name="Assunto" id=""
                     className='w-full
                    bg-background p-4
                     text-white mt-2 rounded-sm
                     ' placeholder='Subject'
                      required />
               </div>

               <div className='w-full'>
                  <textarea name="Mensagem" id="" className='w-full bg-background p-4 text-white mt-2 h-60 rounded-sm' placeholder='Massege' required></textarea>
               </div>
               <div className='w-full'>
                  <button className='w-full bg-otherColor p-3 mt-2 rounded-sm'>Send</button>
               </div>
            </form>
         </div>
      </div>
   )
}
