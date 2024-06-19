import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async()=> {
            try {
              const response = await axios.get("http://localhost:4001/book")
              console.log(response.data)
              setBook(response.data)
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        getBook()
    }, [])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>We're Delighted To Have You <span className='text-pink-500'>Here!</span> 😇</h1>
                <p className='mt-12'>But don't just take our word for it - hear what our customers have to say! Join the countless readers who have found their next favorite book at <span className='text-pink-500 font-semibold'>BookStore</span></p>
                <Link to={"/"}>
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                </Link>
            </div>


            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    book.map((item)=> (
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default Course