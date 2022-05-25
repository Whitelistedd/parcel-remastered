import Link from "next/link"
import styled from "styled-components"

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 4em;
  align-items: center;
  background-color: #F45E5F;
  height: 10vh;
  color: #F45E5F;
`

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
  gap: 4em;
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

interface NavbarProps {
}

const Navbar : React.FC<NavbarProps> = () => {
    return (
      <Container>
        <Left>
          <Link href="/">
            <Logo>NextJS Tracker</Logo>
          </Link>
          <Button>English</Button>
        </Left>
        <Right>
          <Button>Couriers</Button>
          <Button>Features</Button>
          <Button>Ecommerce</Button>
          <SignIn>Sign-in/up</SignIn>
        </Right>
      </Container>
    )
}

export default Navbar