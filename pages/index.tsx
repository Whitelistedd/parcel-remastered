
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components'
import Searchbar from '../src/components/SearchBar/Searchbar';
import { devices } from '../src/MediaQueries';
import PochtaRus from "../src/images/pochtarussia.svg"
import Dhl from "../src/images/DhlLogo.svg"
import Ups from "../src/images/ups.svg"
import FEDEX from "../src/images/FedEx.svg"
import { NextPage } from 'next';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  padding: 0em 10em;
  min-height: 60vh;
  
  background-color: #F45E5F;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95vw;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Desc = styled.p`
  opacity: 0.8;
  font-size: 18px;
`

const UPS = styled.img``
const DHL = styled.img``
const PochtaRussia = styled.img``
const FedEx = styled.img``

const Companies = styled.div`
  width: 50vw;
  overflow: hidden;
  height: 100%;
  &::before {
    content:"";
    position: absolute;
    left: 63%;
    z-index: 2;
    width: 500px;
    height: 50px;
    background: linear-gradient(to bottom, rgba(244,94,95,1) 10%,
                                          rgba(244,94,95,0.6) 70%,
                                          rgba(244,94,95,0.4) 80%,
                                          rgba(244,94,95,0.1)  100%
    );
  }
  &::after {
    content:".";
    padding: 0px 500px;
    position: relative;
    color: rgba(244,94,95,1);
    left: 0px;
    top: 5px;
    z-index: 3;
    width: 500px;
    height: 50px;
    background: linear-gradient(to top, rgba(244,94,95,1) 10%,
    rgba(244,94,95,0.6) 70%,
    rgba(244,94,95,0.4) 80%,
    rgba(244,94,95,0.1)  100%
    );
  }
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
  height: 100vh;
  position: relative;
  animation: mymove 40s infinite linear;
  opacity: 0.7;
  ${UPS} {
    width: ${CompanieImage.width};
    height: 190px;
  }
  ${DHL} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  ${PochtaRussia} {
    width: ${CompanieImage.width};
    height: ${CompanieImage.height};
  }
  ${FEDEX} {
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
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  gap: 5em;
  padding: 0em 10em;
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
  min-width: 300px;
  max-width: 20vw;
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
  width: 20vw;
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

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: ${devices.lg}) {
    ${Companies} {
      display: none;
    }
    ${Section} {
      padding: 0em 5em;
    }
    ${SectionWrap} {
      width: 60vw;
    }
  }
  @media only screen and (max-width: ${devices.md}) {
    gap: 1em;
    align-items: center;
    padding-bottom: 5em;
    ${Section} {
      flex-direction: column;
    }
    ${Header} {
      padding: 0em 5em;
    }
    ${SectionWrap} {
      align-items: center;
      text-align: center;
    }
    ${ConnectWrap} {
      align-items: center;
      text-align: center;
      width: 100%;
    }
    ${ConnectIMG} {
      margin-top: 0px;
    }
    ${PlaneWrap} {
      height: 60vh; 
      width: 60vw;
    }
    ${FeaturesWrap} {
      align-items: center;
      height: 100%;
      gap: 5px;
      padding: 3em 0em;
    }
    ${CardImage} {
      width: 7vw;
    }
    ${Cards} {
      flex-direction: column;
      height: 100%;
    }
    ${FeaturesCard} {
      width: 60%;
    }
  }
  @media only screen and (max-width: ${devices.sm}) {
    ${Header} {
      padding: 0em 1em;
    }
    ${Section} {
      padding: 0em 1em;
    }
    ${SectionWrap} {
      width: 90vw;
    }
  }
`


const Home : NextPage = () => {

  return (
    <Container>
      <Head>
          <title>Volxen Tracker: Главная</title>
      </Head>
      <Header>
        <Wrap>
        <Title>
        Отслеживание посылки стало проще, 
        вам просто нужен номер для отслеживания!
        </Title>
        <Searchbar />
        <Desc>
        Отследить мою посылку еще никогда не было так просто с помощью этого глобального инструмента отслеживания посылок, 
        позволяющего отслеживать посылки из любого почтового отделения. Мощная универсальная система отслеживания посылок, 
        которая предоставит вам информацию об отправке путем поиска номера отслеживания у любого международного курьера, такого как China Post, Speedpak, 
        4PX Express, Amazon Logistics TBA, EMS ePacket, Dynamex, 
        Aliexpress - Standard Shipping, Intelcom Express, Hermes, Deutsche Post — DHL Global mail — DHL Ecommerce, Yanwen, 
        Canpar, Yunexpress, Pitney Bowes Inc — PBI, BNI — BNICA и многие другие!
        </Desc>
        </Wrap>
        <Companies>
          <UL>
            <UPS src={Ups.src} />
            <DHL src={Dhl.src} />
            <PochtaRussia src={PochtaRus.src} />
            <FedEx src={FEDEX.src} />
            <UPS src={Ups.src} />
            <DHL src={Dhl.src} />
            <PochtaRussia src={PochtaRus.src} />
            <FedEx src={FEDEX.src} />
            <UPS src={Ups.src} />
            <DHL src={Dhl.src} />
            <PochtaRussia src={PochtaRus.src} />
            <FedEx src={FEDEX.src} />
          </UL>
        </Companies>
      </Header>
      <Section
      >
        <SectionWrap>
          <SectionTitle>
            Все-в-одном международное отслеживание для
            <Strong> отслеживание любой почты</Strong>
          </SectionTitle>
          <Desc>
          Этот универсальный инструмент отслеживания «отслеживание моей посылки» создан для того, чтобы упростить отслеживание всех ваших международных посылок 
          с помощью поиска по номеру отслеживания. С этой единой всемирной центральной платформы вы можете беспрепятственно отслеживать посылки из любого заказа, 
          отправленного любым курьером в мире, и проверять его местонахождение. Вам больше не нужно оглядываться по сторонам, чтобы узнать, какую почту забрали и 
          где находится ваша почта или посылка, и вы больше никогда не столкнетесь 
          с веб-сайтом отслеживания и отслеживания иностранного почтового отделения, который не переведен на ваш язык.
          </Desc>
          <Link href={"/idiot"}>
          <SectionButton>Поддерживаемые курьеры</SectionButton>
          </Link>
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
                <CardTitle>Более 600 поддерживаемых курьеров</CardTitle>
                <CardDesc>
                Этот инструмент позволяет отслеживать посылки из более чем 200 разных стран, 
                охваченных более чем 600 курьерами, и используется крупнейшими компаниями 
                электронной коммерции, такими как Amazon, Ebay, Walmart, Etsy и Target.
                </CardDesc>
              </FeaturesCard>
              <FeaturesCard>
                <CardImage src="https://www.ordertracker.com/app/template/img/icons/ico-page.svg" />
                <CardTitle>Автоматическое обнаружение курьера</CardTitle>
                <CardDesc>
                Чтобы помочь вам сэкономить время, наш алгоритм автоматически определяет курьера, 
                доставившего вашу посылку, но в то же время 
                это не мешает вам вручную выбирать курьера, от которого вы хотите получить информацию.
                </CardDesc>
              </FeaturesCard>
              <FeaturesCard>
                <CardImage src="https://www.ordertracker.com/app/template/img/icons/ico-mail.svg" />
                <CardTitle>Оповещения по электронной почте об изменении статуса</CardTitle>
                <CardDesc>
                В дополнение к отслеживанию посылок здесь, на веб-сайте, вы также можете включить уведомления по 
                электронной почте, чтобы получать информацию о ходе выполнения вашего заказа, 
                а также о местонахождении вашей посылки при каждом ее обновлении.
                </CardDesc>
          </FeaturesCard>
          </Cards>
          <Link href={"/idiot"}>
          <FeaturesButton>Посмотреть все функции</FeaturesButton>
          </Link>
        </FeaturesWrap>
      </Section>
      <DiscoverSection>
        <ConnectIMG>
          <Image src="https://www.ordertracker.com/app/template/img/home/merchants.svg" />
        </ConnectIMG>
        <ConnectWrap>
        <SectionTitle>
        Откройте для себя наши решения
          <Strong>для вашего Shopify</Strong>
        </SectionTitle>
        <Desc>
        Автоматически отправляйте электронное письмо своим клиентам, когда они заказывают продукт, 
        и получайте фирменную страницу отслеживания со специальной кнопкой отслеживания для вашего веб-сайта! 
        Просто подключите Ordertracker к Shopify, чтобы начать использовать все возможности Ordertracker 
        без необходимости что-либо программировать или реализовывать самостоятельно.
        </Desc>
        <Link href={"/idiot"}>
        <SectionButton>Подключиться к моему Shopify</SectionButton>
        </Link>
        </ConnectWrap>
      </DiscoverSection>
    </Container>
  )
}

export default Home