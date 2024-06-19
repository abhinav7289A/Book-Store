import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {useForm} from 'react-hook-form'

function Contact() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <>
       <Navbar/>
       <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
         <form onSubmit={handleSubmit(onSubmit)}>
         <h3 className="text-3xl mt-20 justify-center text-center font-extrabold text-pink-500">Contact Us</h3>
                    <div className='justify-center border p-4 mt-6 rounded-lg border-slate-700 '>
                        <div className='mt-6 space-y-2'>
                           <span className='text-xl text-pink-500'>Name</span>
                           <br/>
                           <input type='text' placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("name", { required: true })}
                           />
                        </div> 

                        <div className='mt-6 space-y-2'>
                           <span className='text-xl text-pink-500'>Email</span>
                           <br/>
                           <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                           />
                        </div> 

                        <div className='mt-6 space-y-2'>
                           <span className='text-xl text-pink-500'>Message</span>
                           <br/>
                           <input type='text' placeholder='Enter Your Message' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("message", { required: true })}
                           />
                        </div> 

                        <div className='mt-6 space-y-2'>
                           <span className='text-xl text-pink-500'>Address</span>
                           <br/>
                           <input type='text' placeholder='Enter Your Address' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("address", { required: true })}
                           />
                        </div> 
                    </div>

                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200 rounded-md '>Send Message</button>
                        
                    </div>

                    <div className='mt-8 justify-normal p-6'>
                        <p className='font-semibold text-lg'>
                        Thank you for your interest in reaching out to us! Whether you have a question, feedback, or simply want to say hello, we're here to assist you. Please feel free to contact us using any time.
                        </p>
                        <p className='font-bold text-lg text-pink-500'>
                        Connect with us on [Facebook, Twitter, Instagram, etc.] for the latest updates, promotions, and literary discussions!
                        </p>
                    </div>

                    
                       
         </form>
          
          
       </div>
       <Footer/>
    </>
  )
}

export default Contact