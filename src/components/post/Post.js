import React from 'react'
import records from '../../images.json'
import './Post.css'

import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
    
    <div className='container'>
    {
        records && records.map((record)=>{
            return(
                <div key={record.id} className='box'>
                    <Link to='/comments' style={{ textDecoration: 'none' }}>
                    <img src={record.icon} alt="example"/>
                    <p><strong style={{color:'black'}}>Caption: {record.caption}</strong></p>
                    </Link>
                </div>
            )
        })
    }
    </div>
    
    </>
  )
}

export default Post