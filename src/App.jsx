import React from 'react'
import Background from './Components/Dark-section/Background/Background'
import CTA1 from './Components/Dark-section/CTA1/CTA1'
import Customers1 from './Components/Dark-section/Customers1/Customers1'
import Divider1 from './Components/Dark-section/Divider1/Divider1'
import Feature1 from './Components/Dark-section/Feature1/Feature1'
import Feature2 from './Components/Dark-section/Feature2/Feature2'
import Feature3 from './Components/Dark-section/Feature3/Feature3'
import Graph1 from './Components/Dark-section/Graph1/Graph1'
import Hero1 from './Components/Dark-section/Hero1/Hero1'
import Hero2 from './Components/Dark-section/Hero2/Hero2'
import Information1 from './Components/Dark-section/Information1/Information1'
import Background2 from './Components/White-section/Background2/Background2'
import Divider2 from './Components/White-section/Divider2/Divider2'
import Footer from './Components/White-section/Footer/Footer'
import Posts1 from './Components/White-section/Posts1/Posts1'

const App = () => {
  return (
    <>
      <Background />
      <Hero1 />
      <Hero2 />
      <Customers1 />
      <Feature1 />
      <Information1 />
      <Feature2 />
      <Feature3 />
      <CTA1 />
      <Divider1 />
      <Graph1 />
      <Background2 />
      <Divider2 />
      <Posts1 />
      <Footer />
    </>
  )
}

export default App