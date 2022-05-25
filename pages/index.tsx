import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const AmazonIMG : string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACWCAMAAADdRbMoAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMA/QIR+msG3J/25NYvvSMo8nIejBcMSwnQ7qyH6mVC4MZ4XjQbuJhOKzmRgstGsj5TwVmmfmKjonRPjAAAFANJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAABmt96WEwWCMAD3DAh4IiIqGFHEEwjGI7Hf/802wEYIzAQq5V6E5atcWBmnp3+nSWw0Go1Go9Fo/PcoxMabF2+999SRFP+S8t+fka1SfM1ZpZV7EoYv3n7tqQKU9VRNyXklLVbPT6GOxidtd1yast2x7O6hrzgT4QfT1rs6uu+H85MBDOpZm/l+MD+NoZKN6yjbQ1e2rY+elttday/BvyT1zlrgf3TYOns/O0l1W2EQhPOFADU0Ot/kAX416LxeeWGNxfvqr/fr8HGroTkVMUKmXd/L33nrYrWT1YGsLIyyKxtq2+j9qbjs7sTbSCeOVkUP2ITzvTv9PLBtdXeuADyCm+ZPHychSkiShPbNNaBGKIAX2HE2QjCWvpZDFRikG2ZY+7iMEFrRxugn3ivORplDRk7ns25SeruAb0hv9wGnp8tKAJY5VjPdQ8HjM0ASeaR/AabRATMuSU5pLj8KYGTpQo0MdSsKhwVxXLlFgUKORzJEVOBD7/K1CkFc9h5bF8vcKkHRF4Dn9Irf9NSfQJHUR5FUIKKeD0RBmHXi2vmTOsGomJ7CHEkGuvHo3AsJiT6GurjKcSSWZOG4gbyeiCmCN6CwtpGQ/N7OGhLv08IZBHG7ASYpmEbr/J4GAXNMCFZAUIe8iRmVZaY33yCPQgtJtqAbDdoFsZjwWJM5kWZimo5zKabHGJN0E8E7gGozyhCUN/HHuiKsQwj2BWDYbLGkJ0TFeOKYaG0k3PRtjZaPCUhHdsJXCWrAUKp8rqZaNiZj9h2R5HE6Fa4h3Vmk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"

const EbayIMG : string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACWCAMAAADdRbMoAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMA8vczCPsEP8ZZG6Fw1OTCImkR2l7uC+qbFfmEkX1UDrqzOd6typYrdULQRy+limMYqB8n9NhLv09/fL1EAAAOR0lEQVR42uzSoQ2AMBQFwA8NggRDgmEOVPdfjATXque5m+EKAAAAAPid+zxGT8GsbX10Fcza0gfrXqAJmvDRhIAmBDQhoAkBTQhoQkATApoQ0ISAJgQ0IaAJAU0IaPKyY69LasJgAIY/EVhARGUBQRDlIHjE46rf/d9Y293OWA1gwG07o3l+omgc3kQIQ4FlwlBgmTAUWCYMBZYJQ4FlwlBgmTAUWCYMBZYJQ4Flwnwn8a9kIorfOkZeBOY/0NOZ3xu6XmKvVkniuVN5sXQez2SUzuSp69l2HLfsbLhepNaDY/z8tFUc23aSDVV5ttSB+RespeHGc83khKur3tDaQSanfO1M9Nm0NdHMAV4IDW3S6jX56oU011nwa4x4jTO1eeAaKQ/M36T43sTEQoJ5Gr7pNTJxjl57gPkanWHTAmri3rDnDSxjSu5Mhy+OQhhBPSPlxub38df6yxsdkzbexZ2macVM0qmEpRrBegNUNvIqQgqCNFzCL+f39o33bb1O+O1H+0rkfoVoqxYvpktwwhE8Pac35pBOZIcVMtln73ifpDpwlzKdCEhL+xylPkeCAXXIxIR5+zquTZbyKtu6md3awXMb9eYC0ut7e8pMrGmEdCYGD6V09QMr6SddAB8JkgXVWWO80YJPTjy0ss7m3D9vxio8tcUJK4pUiyaTcIz04iWUmElY2bshiuPvWU6OB7x2aMKXrQFZBt3AgeypM1GyBlYXLO9mIqp9rELr8VDAck2sYeCNFhze6oygKj7GGzb8lmy7ngf7sQLeM2cSdrCW6HwnEz3BqloK5NJbWFOs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"
const WalmartIMG : string  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACWCAMAAADdRbMoAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAEEAfMFDAoflwYPGv4Qv90Bb1AoAHSjokqCga5bruATUE6cmGRpTca1yadXosj2bUxbWd2M6KVhg0TtoAAA8oSURBVHja7NzbUuJAFIXhnQQUjCZyMpDIGUVFHGUU1/s/2dwwYzfdSfdUqKkaa33XFBWKP6HZNBEiIiIiIiIiIiIiIiIiIiIi+p7y5931+uNyEwlRiXyMg3TUESKbMMaX21yITJ0JVOuBEBmeofsUIsMIur0QGc6h6wuRYQ/dgxAZNtA1hcjwCF0mRIY76IZCZGhAlwiRoYCmK0SmOTRXQmSxgGopRBavUO2EyGIM1ZMQOX/UWQmRxQtn9eT2zH0E5PYDqlCILG6g4iZHsppBFQiRRQRFS/6ZINKJVaRLxCJxPMZt2FD9n6dKr6HKxdc86oiHARS3XgdURNNTr4kA68EOffbWraBpyF87+wZbbgKorsVP8RQDrzfiFuPLh8/7ewUsVoHUlEN3JxYX0O3cA8LFlJl4Z9KMD1PVRFze/2pW39kdrjuZ1LSA5lksfkI3EdM0hmokzMQ3k8cUB+tMHN7w5dyZ3wIH3VDquYTmsiRh3dB5WbpgJr6ZzFr4I+3P/af1e6mUqGf3JJJaHtxbGDo49ujcphkxE89M5u9QLXOpco8vG6mSraEaSy1b6AIxNHHsxXb8qrUwE89MLqDrPkylXN84We3mqxS6UOroTZxr2BccW4phCdU9M/HNZIlju8Lvm+mdlMo/cGx00sXJxueFtAZGvS2omszEM5MCpklTTOaVfSslpu0uDHFP6mi7oktSGGbVU+Q0YCaemdzB5jwQu8yYcZmKMWyGUscMjlVFCNND9Up4KczEM5MLWF2FIo5JZ9oTq88JTPUXJ7FjDdu31V79J+gVM/HN5BN26X4gFgn+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"
const EtsyIMG : string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACWCAMAAADdRbMoAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAD2BAwJBw0BX28SCwMPrgAwrcLIAloQYbZU1I7FtRpsSLvJxW1LeXO+jIrIbYNuR7dWvMzzH+aZEAAAtYSURBVHja7NzZkqIwFIDh48ImiAu4gbjhwrjS3XPe/9VmdGwUBIxGasr0+W670paVv1BiCBBCCCGEEEIIIYSQn0LtBKNPe2Wsx0BEo+wUZV2tzgxj0+36kjS17VBm92Hbkj9erttDjBhARFPDl6OriXgKyMQHIpoCMpGAiKaATGwgovmNLxcCEY7q2sshvpIMREwdT9phio3nVvK53jY5cgBEXNYYb6jAYvQLr5WBiOwTk0rApN/GK3MgQps8mQnoQ7wYARGa/Gwm4OFFBYjQ3KczgQll8mMEz2fiYKQO2Zob48gC8r7qz2fS3DFlYtEF5/1xZAIhftMhW5kyeX86RyYdpkxWlMn748kEFiyD2pTJ+1N5MpkyDNLpZkgAJZ5MHDyDbAPKRAAtnkxKDJksKRMR8GQCazypQSbVpExEYPJkYuPJEDLJtFArhBpPJns8aUCmBWUiBK5MmkM8akMWl372EQNXJjDGIwWyVCkTMTS4MvHw6AsyuPQjsiD4MlHxqArpejvKRBB8mUBf/0uFdFvauSSKzEz4VZAyEYVSWCb6kDIRxkOZWI0T1r33nJk09b1TLg/Kc6cSdFpAClBIJnJ8bT6/KOTJRB/4iobXaoulNAiolv/j9yOZGNGi6z2ehnmZtFS9HrijJqTqhwpmMBXJiVJR56NKpW7pain6R82SbgXufCDbkr9ZrjcQ86FMqobR9aWp/SEPymX5w95KftdYVr8mQHJUWTO5LLou4J6OgUnbgWxPV11jtl40aviPlj54bGIurdu/3aFZGzZ2u0MyTgViJMxUA8KdSWxaJpAv6JrIpA23WhLDYCuRyQVl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"
const AliexpressIMG : string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAACWCAMAAADdRbMoAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA8uAkIPb6T+frrwQSCogam2M2uBdAd1WW1V4HUEi17kooys9725AuxacOMoCiwHJsQzxZvIWsZ1mzqiYAABFuSURBVHja7NvZcqJQEIDhBgFRQBAJBnfABcd9Tb//k01mAgqyiOiUjtXfXapy0gn8ZWHOEQghhBBCCCGEEEIIIYQQQgghhBBCCPl/aJ4MhFzRYDkgJJti8ToQkk1n8AsIyTZErAIhmWQXkZ8BIVnW+G0KhGQoifhNaAIhqZQG/sVOgLyf0mb78WOj5qlhu/G/O5pDW0OfW4ou0Dcf+W0MIC/o15I50fJUVWF8Rwgxjnhi6RDCWcwtdkBeUBfP+qUcmfDoq8JZ08KQiimHMmHxFpTJS1pgyCpHJkwsE6VTFTDKWRuUyRvhKhjiSLdmwrVMbSRgnHgc1nXK5E2sMEzY3JpJ17MYTCSMvBVl8h6UJUZot2YCimHXqwJeclczVZEok/ew4TGC5W7KJLCtYoS1U+gR9o2M8UL9pkzOVgyefRpA73TeiBy7hQ2pWCbQFcPvl4pn0gLyalp4iZ8UzAS2ffxLMCElE2v8eZVG55peTwNjakUzgXrwFJyWySeQ/9EsuOX8sYI+Sy6aCUzx28hIzUQD8j86oI9Vl+gTmoUzmfURsQ6UyXsxLPQtwMTAtHAmsEAcyZTJk0l/AEg/X8Ddmhjohv5pX7ELZ9IR8ACUyXN9OF7Pc/XBsgVgTKtwtyP6XBlgigGzcCaqiAPK5MlsU8OFyZnotmGHAtzLZtB3iBwocKWimYBXsSmTp5swOsCcFQewYHm41xB9zBYAFAcD3cKZVFmDMnm6Ld8FqE0bmj1dINzp16mLfTu6V6wVzmRQb1MmT/eTidZ0p60awp3KAvrWwcF4H8sVyCTw2pm0f8nfFAki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"

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0em 15em;
  min-height: 60vh;
  
  background-color: #F45E5F;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90vw;
  flex: 1;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Form = styled.form`
  display: flex;
  background-color: rgb(252,252,254);
`

const Input = styled.input`
  padding: 2em 2em;
  border: none;
  outline: none;
  font-size: 1.3em;
  color: grey;
  width: 100%;
  border-right: 5px solid #F45E5F;
`

const SearchButton = styled.button`
  width: 20%;
  font-size: 1.5rem;
  background-color: inherit;
  border: none;
  transition: 400ms ease;
  &:hover {
    opacity: 0.7;
    transition: 400ms ease;
    cursor: pointer;
  }
`

const Desc = styled.p`
  opacity: 0.8;
  font-size: 18px;
`

const Etsy = styled.img``
const Aliexpress = styled.img``
const Amazon = styled.img``
const Ebay  = styled.img``
const Walmart  = styled.img``

const Companies = styled.div`
  flex: 1;
  width: 50vw;
  overflow: hidden;
  height: 50vh;

`

const CompanieImage = {
  width: "350px",
  height: "450px"
}

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  animation: mymove 40s infinite linear;
  opacity: 0.5;

  ${Amazon} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  };
  ${Ebay} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  ${Walmart} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  ${Etsy} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  ${Aliexpress} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  @keyframes mymove {
    0%    {bottom: 0px;}
    5%    {bottom: 50px;}
    10%   {bottom: 100px;}
    15%   {bottom: 150px;}
    20%   {bottom: 250px;}
    25%   {bottom: 300px;}
    30%   {bottom: 350px;}
    35%   {bottom: 400px;}
    40%   {bottom: 450px;}
    45%   {bottom: 500px;}
    50%   {bottom: 550px;}
    55%   {bottom: 600px;}
    60%   {bottom: 650px;}
    65%   {bottom: 700px;}
    70%   {bottom: 750px;}
    75%   {bottom: 800px;}
    80%   {bottom: 850px;}
    85%   {bottom: 900px;}
    90%   {bottom: 950px;}
    95%   {bottom: 1000px;}
    100%  {bottom: 1050px;}
  }
` 


const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100vw;
  gap: 5em;
  padding: 0em 15em;
  color: #4C4956;
  min-height: 70vh;
`

const SectionTitle = styled.h2`
  width: 100%;
  font-size: 25px;
  opacity: 0.7;
`


const Strong = styled(SectionTitle)`
  margin: 0px;
  font-size: 3rem;
  opacity: 1;
`

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`

const PlaneWrap = styled.div`
  width: 40vw;
  display: flex;
  overflow: hidden;
`

const Image = styled.img`
    width: 100%;
`

const SectionButton = styled.button`
  width: 40%;
  padding: 1em;
  background-color: #F45E5F;
  border-radius: 3px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 15px;
  box-shadow: 0 5px 20px rgb(245 95 95 / 30%);
  transition: 400ms ease;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 400ms ease;
  }
`

const FeaturesWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 60vh;
  background-color: #F2F5FD;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
`

const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5vw;
  align-items: center;
`

const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20vw;
`

const FeaturesButton = styled(SectionButton)`
  width: 10%;
`

const CardImage = styled.img`
  width: 3.5vw;
`

const CardTitle = styled.h3`
  margin-bottom: 0px;
  opacity: 0.8;
`

const CardDesc = styled.p`
  opacity: 0.8;
`

const DiscoverSection = styled(Section)`
  display: flex;
  justify-content: space-around;
`

const ConnectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`

const ConnectIMG = styled.div`
  width: 40vw;
  margin-top: -100px;
`

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()

  const OnSubmit : (data : {serialnumber : object}) => void = (data) => {
    router.push(`/track/${data.serialnumber}`)
  }

  return (
    <Container>
      <Header>
        <Wrap>
        <Title>
          Package tracking made easy, 
          you just need a tracking number!
        </Title>
        <Form onSubmit={handleSubmit(OnSubmit)} method="POST" >
          <Input type="text" {...register("serialnumber")} placeholder='Enter up to 10 tracking numbers...' />
          <SearchButton type="submit">Track</SearchButton>
        </Form>
        <Desc>
          Track my package has never been that easy with this global 
          parcel tracking tool allowing you to track parcels from any post office. A powerful universal parcel tracking system that will provide you with shipment info by tracking number lookup from any international courier such as China Post, Speedpak, 4PX Express, Amazon Logistics TBA, EMS ePacket, Dynamex, Aliexpress - Standard Shipping, Intelcom Express, Hermes, Deutsche Post - DHL Global mail - 
          DHL Ecommerce, Yanwen, Canpar, Yunexpress, Pitney Bowes Inc - 
          PBI, BNI - BNICA and many more!
        </Desc>
        </Wrap>
        <Companies>
          <UL>
            <Etsy src={EtsyIMG} />
            <Aliexpress src={AliexpressIMG} />
            <Amazon src={AmazonIMG} />
            <Ebay src={EbayIMG} />
            <Walmart src={WalmartIMG} />
            <Etsy src={EtsyIMG} />
            <Aliexpress src={AliexpressIMG} />
            <Amazon src={AmazonIMG} />
            <Ebay src={EbayIMG} />
            <Walmart src={WalmartIMG} />
            <Etsy src={EtsyIMG} />
            <Aliexpress src={AliexpressIMG} />
            <Amazon src={AmazonIMG} />
            <Ebay src={EbayIMG} />
            <Walmart src={WalmartIMG} />
            <Etsy src={EtsyIMG} />
            <Aliexpress src={AliexpressIMG} />
            <Amazon src={AmazonIMG} />
            <Ebay src={EbayIMG} />
            <Walmart src={WalmartIMG} />
            <Etsy src={EtsyIMG} />
            <Aliexpress src={AliexpressIMG} />
          </UL>
        </Companies>
      </Header>
      <Section
      >
        <SectionWrap>
          <SectionTitle>
            All-in-one international tracking for
            <Strong> any post office tracking</Strong>
          </SectionTitle>
          <Desc>
            This "track my package" universal tracking tool 
            was created to make it easier than ever before to track all of your international packages by tracking number lookup. From this one worldwide central platform, you can seamlessly track parcels from any order shipping of any courier in the world and check its location. You no longer need to look around to find out which post picked up and where is your mail or package, and you will never be confronted with a 
            foreign post office track and trace website that is not translated into your language again.
          </Desc>
          <SectionButton>Supported couriers</SectionButton>
        </SectionWrap>
        <PlaneWrap>
          <Image src="https://www.ordertracker.com/app/template/img/home/plane.svg" />
        </PlaneWrap>
      </Section>
      <Section>
        <FeaturesWrap>
            <Cards>
              <FeaturesCard>
                <CardImage src="https://www.ordertracker.com/app/template/img/icons/ico-post.svg" />
                <CardTitle>Over 600 supported couriers</CardTitle>
                <CardDesc>
                  This tool allows you to track packages from over 200 different 
                  countries covered by over 600 couriers 
                  and used by the biggest eCommerce companies 
                  like Amazon, Ebay, Walmart, Etsy, and Target.
                </CardDesc>
              </FeaturesCard>
              <FeaturesCard>
                <CardImage src="https://www.ordertracker.com/app/template/img/icons/ico-page.svg" />
                <CardTitle>Automatic courier detection</CardTitle>
                <CardDesc>
                  To help you save time, our algorithm automatically detects
                  the courier that took charge of your parcel - but at the same time,
                  this does not prevent you from manually choosing the courier 
                  you want to get information from.
                </CardDesc>
              </FeaturesCard>
              <FeaturesCard>
                <CardImage src="https://www.ordertracker.com/app/template/img/icons/ico-mail.svg" />
                <CardTitle>Email alerts on status change</CardTitle>
                <CardDesc>
                  In addition to tracking packages here 
                  on the website, you can also enable email notifications to stay 
                  informed about the progress of your order, 
                  as well as the location of your package each time it is updated.
                </CardDesc>
          </FeaturesCard>
          </Cards>
          <FeaturesButton>See all features</FeaturesButton>
        </FeaturesWrap>
      </Section>
      <DiscoverSection>
        <ConnectIMG>
          <Image src="https://www.ordertracker.com/app/template/img/home/merchants.svg" />
        </ConnectIMG>
        <ConnectWrap>
        <Title>
          Discover our solutions
          <Strong>for your Shopify</Strong>
        </Title>
        <Desc>
          Automatically send an email to your customers when they 
          order a product, and get a branded tracking page with 
          a dedicated tracking button for your website! Simply connect 
          Ordertracker with Shopify to begin taking advantage of the 
          full power of Ordertracker, without having to program anything 
          or implement it yourself.
        </Desc>
        <SectionButton>Connect to my Shopify</SectionButton>
        </ConnectWrap>
      </DiscoverSection>
    </Container>
  )
}
