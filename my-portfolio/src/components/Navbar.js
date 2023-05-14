import React from 'react'
import brandLogo from '../pictures/BrandLogo.png';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#0A2647"}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img className='brandLogo' src={brandLogo}/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/rabbani-alam97/" target='_blank'>LinkedIn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/RabbaniAlam12" target='_blank'>GitHub</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Resume</a>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}
