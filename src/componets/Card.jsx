import React from 'react'
import { motion } from "framer-motion"


function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='h-[18rem] w-[14rem] bg-zinc-900/50 left-[20px] right-[20px] m-[10px] rounded-xl'>
      <div className=' h-[2rem] w-[12rem] absolute text-center text-[1.6vw] text-orange-500 m-[2px] font-semibold' > TITLE</div>
         <h2 className='text-zinc-200 p-2 m-2 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, sunt incidunt! Delectus, placeat suscipit! Magni adipisci ab sunt, nesciunt esse voluptatem officiis aperiam exercitationem optio fugit repellendus sit, necessitatibus molestias minus numquam!</h2> 
    </motion.div>
  )
}   

export default Card