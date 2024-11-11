import './App.css'

import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Testimonal from './components/testimonal/Testimonals'
import Advantage from './components/advantage/Advantage'
import About from './components/about/About'
import Loaction from './components/location/Location'
import Proprty from './components/property/Property'
import Banner from './components/banner/banner'
import Agents from './components/agents/Agents'
import Estimate from "./components/estimate/Estimate";
import Contact from './components/contact/Contact'


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Testimonal />
      <Advantage />
      <About />
      <Loaction />
      <Proprty/>
      <Banner />
      <Agents />
      <Estimate/>
      <Contact />
    </>
  );
}

export default App
