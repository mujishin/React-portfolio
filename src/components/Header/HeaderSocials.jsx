import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
    <a href="https://facebook.com" targe="blank"><BsFacebook/></a>
    <a href="https://facebook.com" targe="blank"><BsInstagram/></a>
    <a href="https://facebook.com" targe="blank"><AiFillTwitterCircle/></a>
    <a href="https://facebook.com" targe="blank"><AiFillLinkedin/></a>
    <a href="https://facebook.com" targe="blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials