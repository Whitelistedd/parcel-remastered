import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    svg {
        color: white;
        font-size: 40px;
        background-color: #F1C40F;
        border-radius: 50%;
        padding: 2px;
    }
`

const PackageStatusWrap = styled.div`
    background-color: white;
    padding: 0em 1em;
    border: 1px solid #E7E9F4;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
`

const StatusTitle = styled.h3`
    opacity: 0.8;
`

const StatusDesc = styled.p`
    opacity: 0.8;
`

interface TrackingStatus {
    info : {
        status: string,
        location: string
    },
    key?: number
}

const TrackingStatus = ({info} : TrackingStatus) => {

    console.log(info)

  return (
    <Container>
        <PackageStatusWrap>
            <StatusTitle>{info.status}</StatusTitle>
            <StatusDesc>{info.location}</StatusDesc>
        </PackageStatusWrap>
    </Container>
  )
}

export default TrackingStatus