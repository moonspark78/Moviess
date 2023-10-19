import React, { useState } from 'react'
import { Container } from '../components/Container'
import { Link, useLocation } from 'react-router-dom'
import {IoIosSearch} from 'react-icons/io'


const MENU_CLASS = `
  px-3
  py-1.5
  hover:bg-primary
`
const MENU_CLASS_ACTIVE = `
  bg-primary
`

export const Header = () => {
  const location = useLocation()
  const [pathname, setPathname] = useState('')


  return (
    <div className='bg-header'>
      <Container className='flex justify-between'>
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          {/* Brand */}
          <h1 className='text-2xl'>
            <Link to={'/'}>MovieList</Link>
          </h1>
          {/* Menu */}
          <div className="flex items-center gap-1.5">
            <Link to={'/Movies'}>Movies</Link>
            <Link to={'/Tv'}>Tv</Link>
          </div>
        </div>

        {/* Search */}
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5]">
            <input type="text" className='bg-transparent outline-0 flex-1' placeholder='Search...'/>
            <IoIosSearch size={18}></IoIosSearch>
        </div>
      </Container>
    </div>
  )
}
