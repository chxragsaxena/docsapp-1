import React from 'react'
import { motion } from "framer-motion"


function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='h-[18rem] w-[14rem] bg-zinc-900/50 left-[20px] right-[20px] m-[10px] rounded-xl'>
      <div className=' h-[2rem] w-[12rem]  text-center text-[1.6vw] text-orange-500 m-[10px] font-semibold' > TITLE</div>
         <div className='text-zinc-200 p-2 m-[2px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, sunt incidunt! Delectus, placeat suscipit! Magni adipisci ab sunt, nesciunt esse voluptatem officiis</div> 
          
    
    
    </motion.div>
  )
}   

export default Card