import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Menu, MenuButton, MenuList, MenuItem, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Heading>
          <Link to='/'>
            <p> My Book-Commerce </p>
          </Link>
          </Heading>
          <Menu>
            <MenuButton>
              Categorias
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
        </Box>
        <Spacer/>
        <Box p='4'>
            <Link to={'/cart'}>
              <CartWidget />
            </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar