import React, { useEffect } from 'react'
import VergilCat from '../img/Vergil Cat.jpg'
import '../styles/loading.css'
import { preLoaderAnim } from '../Animations'

const Loading = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
        <div className="texts-container">
            <span>Loading</span>
            <span>.</span>
            <span>.</span>
        </div>
    </div>
  )
}

export default Loading