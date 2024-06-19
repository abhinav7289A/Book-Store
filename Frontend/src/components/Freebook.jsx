import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"
const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
      const getBook = async()=> {
          try {
            const response = await axios.get("http://localhost:4001/book")
            
            const data = response.data.filter((data)=> data.category === "Free")
            console.log(data)
            setBook(data)
          } catch (error) {
              console.log("Error: ", error)
          }
      }
      getBook()
  }, [])
    
    // console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-2xl font-semibold pb-2'><span className='text-red-500'>Free!</span> Offered Books.</h1>
          <p>Dive into worlds of mystery, romance, adventure, and beyond, with each book promising an unforgettable journey.</p>
        </div>
        <div className='p-2'>
          <Slider {...settings} >
              {book.map((item)=> (
                 <Cards item={item} key={item.id}/>
              ))}
          </Slider>

        </div>


    </div>

    </>
  )
}

export default Freebook