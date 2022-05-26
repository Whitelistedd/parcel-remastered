import { Close, Menu } from "@mui/icons-material"
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { devices } from "../../MediaQueries"


const Logo = styled.h1`
  color: white;
  transition: 400ms ease;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 400ms ease;
  }
`

const Button = styled.button`
  outline: none;
  color: white;
  height: 30%;
  border: none;
  font-size: 13px;
  font-weight: 700;
  background: none;
  transition: 400ms ease;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 400ms ease;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`

const Right = styled.div`
  display: flex;
  gap: 4em;
  align-items: center;
  color: inherit;
`

const SignIn = styled.button`
  background-color: white;
  font-size: 13px;
  font-weight: 700;
  color: inherit;
  padding: 1em 1em;
  border: none;
  transition: 400ms ease;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 400ms ease;
  }
`

const CustomDrawer = styled(Drawer)`
  display: flex;
  align-items: flex-end;
  width: 100%;

  .MuiPaper-root {
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 33vw;
    color: #F45E5F;
    background-color: #FDFCFF;
  } 

  svg {
    font-size: 40px;
    margin: 1em 0.5em;
  }

  ul {
    display: flex;
    color: black;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    height: 100%;
  }

  li {
    border-top: 1px solid #F3F4FD;
    border-bottom: 1px solid #F3F4FD;
  }

  span {
    font-size: 13px;
    font-weight: 700;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 4em;
  align-items: center;
  background-color: #F45E5F;
  height: 10vh;
  color: #F45E5F;
  @media only screen and (max-width: ${devices.md}) {
    ${Right} {
      display: none;
    }
    svg {
      font-size: 30px;
      color: white;
    }
  }
`

interface NavbarProps {
}

const Navbar : React.FC<NavbarProps> = () => {
    const [menu,setMenu] = useState(false)

    const toggleDrawer = () => {
      setMenu((prev) => prev ? false : true)
    }

    return (
      <Container>
        <Left>
          <Link href="/">
            <Logo>VolxenJS Tracker</Logo>
          </Link>
          <Link href={"/idiot"}>
          <Button>English</Button>
          </Link>
        </Left>
        <Menu onClick={() => toggleDrawer()}/>
        <CustomDrawer
        anchor={"right"}
        open={menu}
        onClose={() => toggleDrawer()}
        >
        <Close onClick={() => toggleDrawer()} />
        <List>
          {['Couriers', 'Features', 'Ecommerce', 'Sign-in/up'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </CustomDrawer>
        <Right>
          <Link href={"/idiot"}>
          <Button>Couriers</Button>
          </Link>
          <Link href={"/idiot"}>
          <Button>Features</Button>
          </Link>
          <Link href={"/idiot"}>
          <Button>Ecommerce</Button>
          </Link>
          <Link href={"/idiot"}>
          <SignIn>Sign-in/up</SignIn>
          </Link>
        </Right>
      </Container>
    )
}

export default Navbar