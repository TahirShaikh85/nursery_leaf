import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Home = () => {
  return (
    <main>
      <Navbar linkColor={"white"} />
      <Search />
      <div className="leftside">
        <h3></h3>
        <h3 className="hello">HELLO</h3>
        <h1>WELCOME TO NURSERY LEAF</h1>
        <h2>Being your green companion</h2>
        <a href="register.html" className="btn">JOIN NOW</a>
      </div>
    </main>
  )
}

export default Home