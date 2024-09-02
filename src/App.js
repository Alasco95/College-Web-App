
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx';
import Programs from './programs/programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';
import { useState } from 'react';

function App() {

const[PlayState, SetPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>

        <Title subTitle='Our Programmes' title='what we offer'/>

      <Programs/>

      <About SetPlayState={SetPlayState}/>

      <Title subTitle='Gallery' title='Campus Photos'/>

      <Gallery/>
      
      <Title subTitle='TESTIMONIALS' title='What Students Say'/>
      
      <Testimonials/>

      <Title subTitle='Contact US' title='Get in Touch'/>

      <Contact/>
     <Footer/>


      </div>
     
<VideoPlayer PlayState={PlayState} SetPlayState={SetPlayState} />

    </div>
  );
}

export default App;
