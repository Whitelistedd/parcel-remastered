import { useRouter } from "next/router"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const trackingid = () => {
    const router = useRouter()
    const {trackingid} = router.query

    return (
        <Container>YOUR TRACKING ID  {trackingid}</Container>
    )
}

export default trackingid
