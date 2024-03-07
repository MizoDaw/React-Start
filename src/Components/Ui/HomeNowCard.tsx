import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface HomeNowCardProps{
    title:string,
    text:string,
    link:string
}

const HomeNowCard = ({title, text,link}:HomeNowCardProps ) => {
  return (
    <div className='HomeNowCard'>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
        <Link to={link} className='link'>{link} <MdKeyboardDoubleArrowRight/> </Link>
        </div>
    </div>
  )
}

export default HomeNowCard