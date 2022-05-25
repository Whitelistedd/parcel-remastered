import { Twitter, YouTube } from "@mui/icons-material"
import styled from "styled-components"

const Title = styled.h1`
  color: white;
  font-size: 30px;
`

const Container = styled.div`
  background-color: #4C4956;
  display: flex;
  min-height: 45vh;
  align-items: center;
  justify-content: center;
  gap: 18vw;
`

const SocialMedia = styled.div`
`

const PagesWrap = styled.div`
  display: flex;
  gap: 8vw;
`

const Pages = styled.div`
  color: white;
`

const PageTitle = styled.h5``

const Page = styled.p`
  font-size: 13px;
  opacity: 0.8;
`

const Footer = () => {
    return (
    <Container>
      <SocialMedia>
        <Title>NextJS Tracker</Title>
        <YouTube sx={{color: "white"}} />
        <Twitter sx={{color: "white"}} />
      </SocialMedia>
      <PagesWrap>
      <Pages>
        <PageTitle>TRACKER</PageTitle>
        <Page>Track a parcel</Page>
        <Page>Couriers</Page>
        <Page>Features</Page>
        <Page>Sitemap</Page>
      </Pages>
      <Pages>
      <PageTitle>INTEGRATION</PageTitle>
        <Page>Ecommerce</Page>
        <Page>Tracking button</Page>
        <Page>Tracking iFrame</Page>
        <Page>Shopify plugin</Page>
      </Pages>
      <Pages>
        <PageTitle>COMPANY</PageTitle>
        <Page>About</Page>
        <Page>Privacy</Page>
        <Page>Terms</Page>
        <Page>Contact</Page>
      </Pages>
      </PagesWrap>
    </Container>
    )
}

export default Footer