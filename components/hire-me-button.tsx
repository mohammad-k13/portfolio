import React from 'react'
import Avatar from './ui/avatar'
import Button from './ui/button'

const HireMeButton = () => {
  return (
    <div className='flex items-center gap-2 text-background'>
      <Button className='scale-110'>Hire Me</Button>
      <Avatar />
    </div>
  )
}

export default HireMeButton