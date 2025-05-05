import React from 'react'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import { Outlet } from 'react-router'

function Home() {
  return (
    <div>
        <Header />
        <ProductsList />
        <Outlet />
    </div>
  )
}

export default Home