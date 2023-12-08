import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className='nav navbar-expan-sm navbar-dark bg-dark'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>
             Weather app   <i class="fa-thin fa-cloud"></i>
            </Link>
            <button className='navbar-toogler d-lg-none' type='button' data-toggle='collapse' data-target='collapsibleNavId' aria-controls='collapsibleNavId' aria-expanded='false' aria-label='Toggle Navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavId'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/'>
                         Home   <i class="fa-thin fa-cloud"></i>
                        </Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/weather'>
                         Weather <i class="fa-thin fa-cloud"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
