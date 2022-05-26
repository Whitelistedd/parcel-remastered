import Head from "next/head"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 80vh;
    align-items:center;
    justify-content: center;
    font-size: 100px;
    color: white;
    background-color: rgba(244,94,95,1);
`

const Image = styled.img`
    height: 80vh;
`

const error = () => {
  return (
    <Container>
        <Head>
            <title>VolxenJS: 404 Page not found</title>
        </Head>
        <Image src="https://www.lego.com/_build/public/emmet-fe70d8bbd77eb5ec2f0a84f515f5121b.png" />
        404: WRONG PAGE EDIOT
    </Container>
  )
}

export default error