import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../components/Container'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {IoIosSearch} from 'react-icons/io'
import { mergeClassName } from '../utils'
import { SearchResult } from '../components/search-result'


const MENU_CLASS = `
  px-1.5
  py-1
  hover:bg-primary
  mobile:px-6
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
  const defaultKeyword = useRef('')


  const [keyword, setKeyword] = useState('')
  const [isSearchFocus, setSearchFocus] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const goToSearchPage = () =>{
    if(keyword){
      defaultKeyword.current = keyword
      navigate(`/search?q=${keyword}`)
      setSearchFocus(false)
      searchRef.current?.blur()
    }
  }

  const initKeyword = () =>{
    if(pathnameRef.current === '/search'){
      setKeyword(defaultKeyword.current)
    } else {
      setKeyword('')
    }
  }

  const onWindowClick = () =>{
    setSearchFocus(false)
    initKeyword()
  }

  const getMenuClass = (path: string) => {
    if(path ===  pathname) {
      return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
    }
    return mergeClassName (MENU_CLASS, '')
  }

  useEffect(() =>{
    setPathname(location.pathname)
    pathnameRef.current = location.pathname
    defaultKeyword.current = params.get('q') || ''
    initKeyword()
  }, [location.pathname])

  useEffect(() =>{
    window.addEventListener('click', onWindowClick)
    return () =>{
      window.removeEventListener('click', onWindowClick)
    }
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
          <div className="pt-1.5 flex items-center gap-1.5 mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:justify-center mobile:py-3 mobile:bg-header mobile:gap-6">
            <Link className={getMenuClass('/movies')} to={'/movies'}>Movies</Link>
            <Link className={getMenuClass('/tv')} to={'/tv'}>Tv</Link>
          </div>
        </div>

        {/* Search */}
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary relative">
            <input 
             onClick={(e) =>{
              e.stopPropagation()
              setSearchFocus(true)
             }}
             onKeyDown={e => e.key === 'Enter' ? goToSearchPage() : ''}
             type="text" 
             className='bg-transparent outline-0 flex-1' 
             placeholder='Search...' 
             onInput={e => setKeyword(e.currentTarget.value)}
             value={keyword}
            />
            <IoIosSearch size={18}></IoIosSearch>
            {/* Results */}
            {
               isSearchFocus ?(
                 <SearchResult keyword={keyword} goToSearchPage={goToSearchPage}></SearchResult> 
               ) : (
                  ''
               )}
        </div>
      </Container>
    </div>
  )
}
