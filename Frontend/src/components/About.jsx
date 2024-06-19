import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
       <Navbar/>
       <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
            <div className='p-8 mt-16 border border-slate-700'>
                <div className='p-4'>
                   <h2 className='text-2xl text-pink-500 font-bold'>Our Story:</h2>
                    <p className='mt-4 font-semibold'>Welcome to <span className='text-lg text-pink-500 font-semibold'>BookStore</span>, where every page turns into an adventure! Founded in 2005, our journey began with a simple passion for literature and a dream to create a haven for book lovers. What started as a humble corner shop has blossomed into a bustling online bookstore, catering to bibliophiles worldwide. We are driven by our love for storytelling, aiming to curate an unparalleled selection of books that inspire, entertain, and enlighten.
                    </p>
                   <br/>
                </div>


                <div className='p-4'>
                   <h2 className='text-2xl text-pink-500 font-bold'>Our Mission:</h2>
                    <p className='mt-4 font-semibold'>
                        At <span className='text-lg text-pink-500 font-semibold'>BookStore</span> we believe in the transformative power of books. Our mission is to connect readers with stories that ignite their imagination, broaden their horizons, and foster a lifelong love for reading. We strive to be more than just a bookstore; we aspire to be a community hub where book enthusiasts of all ages and backgrounds can come together to explore, learn, and share their passion for literature.
                    </p>
                   <br/>
                </div>

                <div className='p-4'>
                   <h2 className='text-2xl text-pink-500 font-bold'>Our Team:</h2>
                    <p className='mt-4 font-semibold'>
                    Behind <span className='text-lg text-pink-500 font-semibold'>BookStore</span> is a team of passionate individuals who eat, sleep, and breathe books. From our avid readers who meticulously curate our inventory to our tech-savvy wizards who keep our website running smoothly, each member of our team plays a vital role in bringing our vision to life. We are united by our love for literature and our desire to make the world a little brighter, one page at a time.
                    </p>
                   <br/>
                </div>
                
            </div>
       </div>
       <Footer/>
    </>
  )
}

export default About