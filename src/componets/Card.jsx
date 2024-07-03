import React from 'react'
import { motion } from "framer-motion"


function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='h-[18rem] w-[14rem] bg-zinc-900/50 left-[20px] right-[20px] m-[10px] rounded-xl'>
      <div className=' h-[2rem] w-[12rem]  text-center text-[1.6vw] text-orange-500 m-[10px] font-semibold' > CHIRAG </div>
         <div className='text-zinc-200 p-2 m-[2px] '> Thrilled to share the success of our large-scale Arduino Workshop at NIT Bhopal, under the banner of Vision Society, which was meticulously organized by my dedicated team and me.
         </div> 
          
    
    
    </motion.div>
  )
}   

export default Card