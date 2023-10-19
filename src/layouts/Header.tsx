import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../components/Container'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {IoIosSearch} from 'react-icons/io'
import { mergeClassName } from '../utils'


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
  const [params, _] =useSearchParams()
  const navigate = useNavigate()
  const [pathname, setPathname] = useState('')
  const pathnameRef = useRef('') 
  const [keyword, setKeyword] = useState('')
  const [isSearchFocus, setSearchFocus] = useState(false)

  const initKeyword = () =>{

  }

  const onWindowClick = () =>{
    setSearchFocus(false)
  }

  const getMenuClass = (path: string) => {
    if(path === pathname) {
      return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
    }
    return mergeClassName (MENU_CLASS, '')
  }

  useEffect(() =>{
    setPathname(location.pathname)
    pathnameRef.current = location.pathname
  }, [location.pathname])

  useEffect(() =>{
    window.addEventListener('click', ()=> onWindowClick())
  }, [])


  return (
    <div className='bg-header'>
      <Container className='flex justify-between'>
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          {/* Brand */}
          <h1 className='text-2xl font-semibold'>
            <Link to={'/'}>MovieList</Link>
          </h1>
          {/* Menu */}
          <div className="pt-1.5 flex items-center gap-1.5">
            <Link className={getMenuClass('/movies')} to={'/movies'}>Movies</Link>
            <Link className={getMenuClass('/tv')} to={'/tv'}>Tv</Link>
          </div>
        </div>

        {/* Search */}
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary">
            <input type="text" className='bg-transparent outline-0 flex-1' placeholder='Search...'/>
            <IoIosSearch size={18}></IoIosSearch>
        </div>
      </Container>
    </div>
  )
}
