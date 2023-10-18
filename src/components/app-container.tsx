import React from 'react'
import { Header } from '../layouts/Header'
import { Body } from '../layouts/Body'
import { Footer } from '../layouts/Footer'
import { BrowserRouter } from 'react-router-dom'

export const AppContainer = () => {
  return (
    <BrowserRouter>
    {/* Header */}
    <Header/>
    {/* Body */}
    <Body/>
    {/* Footer */}
    <Footer/>
    </BrowserRouter>
  )
}
 