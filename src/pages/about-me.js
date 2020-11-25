import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { colors, fonts } from "../style/variables"
import AboutMeImage from "../components/AboutMe/AboutMeImage"
import AcapitImage from "../components/AboutMe/AcapitImage"
import SectionHeader from "../components/SectionHeader/SectionHeader"

const AboutMePageWrapper = styled.div`
  background-color: ${colors.background};
  width: 100vw;
  height: 150vh;
  position: relative;
`
const AboutMeContentWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  flex-direction: column;
`
const HeaderHolder = styled.div`
  position: absolute;
  top: 200px;
  right: 50px;
  z-index: 2;
`
const FirstAcapit = styled.p`
  color: ${colors.text};
  z-index: 2;
  position: absolute;
  left: 50px;
  top: 300px;
  width: 56%;
  text-align: justify;
  font-family: ${fonts.text};
  font-size: 1.2rem;
`
const SecondAcapit = styled.p`
  color: ${colors.text};
  z-index: 2;
  position: absolute;
  left: 50px;
  font-family: ${fonts.text};
  width: 90%;
  font-size: 1.2rem;
  top: 820px;
`

const AboutMePage = () => {
  return (
    <>
      <Navigation />
      <AboutMePageWrapper>
        <HeaderHolder>
          <SectionHeader>
            <h1>Pagan Poetry </h1>
          </SectionHeader>
        </HeaderHolder>
        <AboutMeContentWrapper>
          <AcapitImage />
          <FirstAcapit>
            Z miłości do lin. <br />
            <br /> Chciałabym napisać o sobie jak najmniej, a wstawić jak
            najwięcej zdjęć, ponieważ zawsze umiałam robić zdjęcia, ale nigdy
            mówić o sobie. Niech zatem przede wszystkim sama siebie zaprezentuję
            zdjęciami, zaś moją duszę ubierając w słowa niezgrabne, postaram się
            oddać skromnie acz uczciwie.
            <br />
            <br />
            Shibari is my life. My life is shibari.
            <br />
            <br /> Gdy życie obmywa się w pasji, to pasja staje się życiem. To
            podróż, w której wszystko, co stare staje się jak nowe, objawia się
            w innym, nieznanym dotąd świetle. Nowe doznania i emocje, nowi
            ludzie, nieznane miejsca. Wreszcie coś, co dodaje życiu dodatkowe
            znaczenie, jak przyprawa, która zmienia smak zwykłego dania. Shibari
            to najważniejszy rozdział w moim życiu. Wszystko zaczęło się od
            fotografii. Od znajomego, który zaproponował, że zrobi mi zdjęcia
            sznurkowe. Sznurki wtedy to był dla mnie tylko pretekst do zdjęć.
            Przez kilka lat modelowałam i sama fotografowałam nie mogąc sobie
            wyobrazić, że sama mogłabym wiązać. W tym czasie spotkałam osobę,
            która pokazała, wręcz objawiła mi emocje w wiązaniu, ten ktoś
            odszedł, a ja nie mogłam znaleźć nikogo innego, kto na powrót
            wyzwolił by takie doznania we mnie. I tak odkryłam, że shibari to
            emocje i chciałam nauczyć się wiązać, żeby sama przekazywać te
            emocje.
          </FirstAcapit>
          <SecondAcapit>
            Nie chcąc podróżować bez drogi, mapy i kompasu spotykałam różnych
            przewodników, lecz powoli zaczęłam się poddawać, ponieważ wciąż nie
            rozumiałam sensu, przekazu, istoty shibari. Na szczęście pewnego
            dnia rozwinęłam rulony map nakreślone przez znakomitych mistrzów.
            Pierwsze kroki stawiałam u Gan Raptora, potem brałam udział w wielu
            warsztatach u Spotika i Yoroi Nicolasa. W końcu odkryłam styl
            Ricardo i zaczęłam się go uczyć u Pawła Grzesznika z Shibari
            Akademia i u samego Ricardo. I ta droga była bardzo moja. Spodobał
            mi się japoński styl, semenawa, właśnie ze względu na emocje, bo
            semenawa jest tylko dla osób, które są naprawdę blisko, trzeba
            dobrze poznać i czuć drugą osobę.
            <br />
            <br />
            Emocje... To co się dla mnie liczy to kontakt z innymi ludźmi,
            porozumienie, przekazywanie emocji. Wiązanie kogoś, kto czuje tam,
            po drugiej stronie lin, widzieć reakcje tego człowieka, emocje i
            stany w trakcie, a zwłaszcza po wiązaniu. Jestem z siebie i niego
            dumna, gdy widzę w jakim stanie zostawiam go po wiązaniu -
            wyluzowany, odprężony, jakby spadły wszystkie emocje podczas
            wiązania, jakby wszystko, co się kotłowało w głowie rozpuściło się.
            Jakby to była swoista forma medytacji. W linach cenię sobie stronę
            estetyczną, każde ciało wygląda pięknie w sznurkach i każde ciało
            wygląda w sznurkach estetycznie, grube czy chude, wysportowane czy
            kanapowe, nie ważne. Ważna jest dla mnie technika i estetyka
            prowadzenia sznurków i splotów, symetryczna estetyka, lecz także
            element chaosu, wszystko zależy od ciała, które wiążę. Lubię
            połączenie ciała i szurków, nie samo ciało ułożone w sznurkach ani
            nie same sploty lin, tylko ich połączenie i jak staje się całością.
            <br />
            <br />
            To moja droga od modelki shibari, przez kursy i warsztaty, fotografa
            sznurkowego i fotografa na imprezach Eurix, Moscow Knot, Rope Show
            IL, ShiFest Ukraine, przez organizatora imprez Shibari by night,
            organizatora gościnnych warsztatów wreszcie do współprowadzenia
            warsztatów Shibari Akademia. Wiem, że w klimacie shibari jestem
            osobą rozpoznawalną, czy tego chcę czy nie, ale ja ciągle się uczę i
            uczyć się będę przez całe życie. Idę swoim tempem i z tego tempa
            jestem dumna. W sznurkach zaszłam wysoko, ale nie porównuję się z
            innymi, bo zawsze będą lepsi i gorsi ode mnie.
          </SecondAcapit>
        </AboutMeContentWrapper>
      </AboutMePageWrapper>
      <AboutMeImage />
      <Footer />
    </>
  )
}

export default AboutMePage
