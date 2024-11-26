import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Logo from './Components/Logo'
import Team from './Components/Team'
import Achivements from './Components/Achivements'
import Courses from './Components/Courses'
import TeamTwo from './Components/TeamTwo'
import Customer from './Components/Customer'
import Footer from './Components/Footer'
const page = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Logo></Logo>
      <Team></Team>
      <Achivements></Achivements>
      <Courses></Courses> 
       <TeamTwo></TeamTwo>
      <Customer></Customer>
      <Footer></Footer>
    </div>
  )
}

export default page