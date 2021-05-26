import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home'>
      <h1>home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, 
        blanditiis quod corrupti impedit, distinctio animi aliquid, 
        autem veritatis accusamus molestiae numquam dolore eligendi? 
        Ipsa possimus, dolorem consequatur incidunt corrupti cumque!</p>
      <Link className='button' to='/login'>SingIn</Link>
    </div>
  )
}

export default HomePage;
