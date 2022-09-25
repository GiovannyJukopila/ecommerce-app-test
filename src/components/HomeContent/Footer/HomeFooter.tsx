import React from 'react'
import {Link} from 'react-router-dom'
import { idText } from 'typescript'

const HomeFooter = () => {
    const handleFacebook = ()=>{
        window.open('https://www.facebook.com/', '_blank')
        }
        const handleInstagram = ()=>{
            window.open('https://www.instagram.com/', '_blank')
            }
  return (
    <div>
        <footer className= 'text-white py-4 bg-dark'>
            <div className='container'>
                <nav className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Conócenos</h4>
                        <ul className='list-unstyled'>
                        <li>Trabaja con nosotros</li>
                        <li>Seremos tu distribuidor de confianza</li>
                        </ul>
                    </div>

                    <div className='col-md-3 col-sm-6'>
                        <h4>Síguenos</h4>
                        <ul className='list-unstyled'>
                        <li>
                        <button onClick={handleFacebook} >Ir a Facebook</button>
                        </li>
                        <li>
                        <button onClick={handleInstagram} >Ir a Instagram</button>
                        </li>
                        </ul>
                    </div>


                </nav>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default HomeFooter