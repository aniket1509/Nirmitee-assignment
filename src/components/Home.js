import React from 'react'
import Navbar from './Navbar/Navbar'
import Post from './post/Post'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          event.returnValue = "Are you sure you want to reload this page?";
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, []);
  return (
    <div>
        <Navbar/>
        <Post/>
    </div>
  )
}

export default Home