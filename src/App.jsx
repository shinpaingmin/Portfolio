import { lazy, Suspense, useEffect, useState } from "react"
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Alert from "./components/Alert"
import Spinner from "./components/Spinner";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero")); 
const About = lazy(() => import("./components/About")); 
const Skills = lazy(() => import("./components/Skills")); 
const Projects = lazy(() => import("./components/Projects")); 
const Contact = lazy(() => import("./components/Contact")); 
const Footer = lazy(() => import("./components/Footer"));  

function App() {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
      open && document.body.classList.add('stop-scrolling');
      !open && document.body.classList.remove('stop-scrolling');
  }, [open]);

  return (
    <>
      <Alert success={success} setSuccess={setSuccess} 
              FaCheckCircle={FaCheckCircle} RxCross2={RxCross2} />
      <Suspense fallback={<Spinner />}>
        <Header open={open} setOpen={setOpen} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact setSuccess={setSuccess} />
        <Footer />
      </Suspense>
    </>
  )
}

export default App

