import {useRef} from 'react';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Service from './components/Service';
import Project from './components/Project'
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Education from './components/Education';
import Footer from './components/Footer';
import Reachout from './components/Reachout';


function App() {



  return (
    <>
      <div className="h-[100%]">
        <div className=" flex flex-col min-h-screen relative bg-dark">
          <div className="">
          <NavBar  />
          </div>
          <div className="">
            <Hero />
            <Service />
            <div className="w-[95%] mx-auto overflow-hidden  items-center gap-4 ">
              <Project />
            </div>
            <div className="h-[350px]">
              <Experience />
            </div>
            <div className="">
              <Testimonial />
            </div>
            <div>
              <Education />
            </div>
            <div>
              <Reachout />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
