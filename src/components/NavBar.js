import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
  return (
    <div className="App">
      <NavLink to={''}> Home </NavLink>
      <NavLink to={''}> Profile </NavLink>
      <NavLink to={''}> Login</NavLink>
      <NavLink to={''}> Sign Up</NavLink>
    </div>
  )
}

export default NavBar
