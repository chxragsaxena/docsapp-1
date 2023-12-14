import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
 const ref = useRef(null);
  return (
    <div ref = {ref} className='fixed h-screen w-screen z-[3]'>
        <div className='flex absolute justify-center'> 
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        </div>
    </div>
  )
}

export default Foreground