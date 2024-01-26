import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Link to='/'>
        <p> My Book-Commerce </p>
      </Link>
      
      <Menu>
        <MenuButton>
          CATEGORIAS
        </MenuButton>
        <MenuList>
          <Link to={'/categoria/A'}>
            <MenuItem> Categoria A </MenuItem>
          </Link>
          <Link to={'/categoria/B'}>
            <MenuItem> Categoria B </MenuItem>
          </Link>
          <Link to={'/categoria/C'}>
            <MenuItem> Categoria C </MenuItem>
          </Link>
          

        </MenuList>
      </Menu>
      <Link to={'/cart'}>
        <CartWidget />
      </Link>
      
    </div>
  )
}

export default NavBar