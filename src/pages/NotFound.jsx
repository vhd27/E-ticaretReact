import React from 'react'
import Header from '../components/Header'
import PageNotFoundImage from '../assets/pageNotFound.png'
import '../css/pageNotFound.css'

function NotFound() {
  return (
    <div>
        <Header />
        <div>
             <img id='notFoundImg' src={PageNotFoundImage}/>
        </div>
    </div>
  )
}

export default NotFound