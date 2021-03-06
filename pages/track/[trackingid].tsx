import { Apple, Cached, ContentCopy, InsertLink, Public, Shop } from "@mui/icons-material"
import { useRouter } from "next/router"
import styled from "styled-components"
import Searchbar from "../../src/components/SearchBar/Searchbar"
import { Search } from "@mui/icons-material"
import TrackingStatus from "../../src/components/TrackingStatus/TrackingStatus"
import Head from "next/head"
import { devices } from "../../src/MediaQueries"
import { NextPage } from "next"

interface trackingid {
    data: {
        data: [{
                events: [{
                    length: number,
                    status: string,
                    location: string,
                }]
            }]
    }
}
interface info {
    status: string,
    location: string
}

const trackingidPage : NextPage<trackingid> = ({data}) => {
    const router = useRouter();
    const {trackingid} = router.query;
    const infoArray = data?.data?.[0]?.events;

    return (
        <Container>
            <Head>
                <title>Volxen Tracker: Отследить посылку</title>
            </Head>
            <SearchWrap>
                <TrackingSearchBar />
            </SearchWrap>
            <TrackingWrap>
                <InfoWrap>
                    <TrackingNumber onClick={() => router.reload()}>
                    {trackingid}
                    <Cached sx={{opacity: "0.7"}} />
                    </TrackingNumber>
                    <Buttons>
                        <Button><Public /></Button>
                        <Button><ContentCopy /></Button>
                        <Button><InsertLink /></Button>
                    </Buttons>
                    <DownloadButton>
                        <Apple />
                        Скачать в App Store
                    </DownloadButton>
                    <DownloadButton>
                        <Shop />
                        Скачать в магазине Google
                    </DownloadButton>
                    <QRCODE src="https://www.ordertracker.com/app/template/img/home/qr.svg" />
                </InfoWrap>
                <StatusWrap>
                    { infoArray?.length > 0 ?
                    infoArray.map((info: info,index: number) => <TrackingStatus key={index} info={info} />)
                    :
                    <Info>
                        <Search />
                        <Text>
                        <Title>Пока нет информации</Title>
                        <Desc>На данный момент нет информации по этому номеру отслеживания</Desc>
                        </Text>
                    </Info>
                }
                </StatusWrap>
            </TrackingWrap>
        </Container>
    )
}

export async function getServerSideProps(context : {params: {trackingid: string}}) {

    const response = await fetch(`https://volxenjs.vercel.app/api/trackinginfo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            trackingnumber: `${context.params.trackingid}`
        })
    }) 

    const data = await response.json()

    return {
      props: {data: data}
    }
}

const TrackingWrap = styled.div`
    display: flex;
    width: 70vw;
    height: 100%;
    padding: 3em 0em;
    align-items: flex-start;
    gap: 50px;
`

const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 13vh;
    background-color: #F45E5F;
`

const InfoWrap = styled.div`
    width: 13vw;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: transparent;
`

const Button = styled.button`
    border: 1px solid #E7E9F4;
    background-color: white;
    font-size: 20px;
    width: 55px;
    height: 40px;
    border-radius: 3px;
    transition: 200ms ease;
    &:hover {
        background-color: #F45E5F;
        color: white;
        cursor: pointer;
        svg {
            opacity: 1;
        }
    }
    box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    ${Button} > * {
        opacity: 0.7;
        font-size: inherit;
        height: 100%;
    }
`

const DownloadButton = styled.button`
    width: 100%;
    display: flex;
    font-size: 12px;
    gap: 5px;
    opacity: 0.8;
    text-align: start;
    align-items: center;
    padding: 0.5em;
    background-color: white;
    border: 1px solid #E7E9F4;
    outline: none;
    box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
    svg {
        font-size: 33px;
    }
    &:hover {
        border: 1px solid black;
        cursor: pointer;
    }
`

const QRCODE = styled.img`
box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
`

const StatusWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const TrackingSearchBar = styled(Searchbar)`
    width: 70%;
    display: flex;
    height: 9vh;
    border-radius: 10px;
    input {
        border-radius: 7px 0px 0px 7px;
        font-size: 15px;
    }
    button {
        border-radius: 7px;
        height: 100%;
    }
`

const TrackingNumber = styled.p`
    border: 1px solid #E7E9F4;
    padding: 0.5em;
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin: 0px;
    font-weight: 700;
    align-items: center;
    transition: 200ms ease;
    &:hover {
        background-color: #F45E5F;
        color: white;
        cursor: pointer;
        svg {
            opacity: 1;
        }
    }
    box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
`

const Info = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    svg {
        font-size: 40px;
        color: white;
        border-radius: 50%;
        background-color: #F1C40F;
        padding: 2px;
    }
`

const Text = styled.div`
`

const Title = styled.h3`
    margin: 0px;
    font-size: 1rem;
`

const Desc = styled.p`
    margin: 0px;
    font-size: 1rem;
`

const Container = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FDFCFF;
    @media only screen and (max-width: ${devices.lg}) {
        ${TrackingWrap} {
            width: 90vw;
        }
        ${TrackingSearchBar} {
            width: 90%;
        }
        ${InfoWrap} {
            width: 17vw;
        }
        ${StatusWrap} {
            width: 100%;
        }
        ${TrackingNumber} {
            font-size: 1.2em;
        }
    }
    @media only screen and (max-width: ${devices.md}) {
        ${InfoWrap} {
            display: none;
        }
        ${StatusWrap} {
            width: 100%;
        }
    }
`

export default trackingidPage
