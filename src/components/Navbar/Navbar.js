import React from 'react'
import './Navbar.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
       <nav className="nav">
            <div className='logo'>
            <Link to= '/'>
              {/* <img src="https://images.unsplash.com/photo-1634942536790-dad8f3c0d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Instagram Logo" /> */}
              <h2 style={{fontSize:'34px'}}>Image<span>Uploader</span></h2>
            </Link>
            </div>
            <div className='menu'>
              <ul>
              <Link to='/upload' style={{textDecoration:'none'}}>
                <li><AddAPhotoOutlinedIcon/><span>Add Posts</span></li>
              </Link>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar




