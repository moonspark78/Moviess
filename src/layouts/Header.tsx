import React from 'react'
import { Container } from '../components/Container'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-header'>
      <Container className='flex justify-between'>
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          <h1>
            <Link to={'/'}>MovieList</Link>
          </h1>
          <div className="flex items-center gap-1.5">
            <Link to={'/movies'}></Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
