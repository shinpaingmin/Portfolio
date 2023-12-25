import { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Footer from "./components/Footer"
import Alert from "./components/Alert"

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
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact setSuccess={setSuccess} />
      <Footer />
    </>
  )
}

export default App

