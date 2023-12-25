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

function App() {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

    useEffect(() => {
        open && document.body.classList.add('stop-scrolling');
        !open && document.body.classList.remove('stop-scrolling');
    }, [open])

  return (
    <>
      <div className={`flex items-center p-4  ${success? "mb-4 mr-3 translate-x-0" : "mr-0 translate-x-full"} transition-all
                     text-green-600 rounded-lg bg-blue-50 w-max
                     fixed bottom-0 right-0`} 
            role="alert"
      >
          <div className="flex items-center mr-5">
            <FaCheckCircle size={24} />
            <p className="ml-3">
              Thanks for contacting me!
            </p>
          </div>

          <RxCross2 size={24} 
                    className="cursor-pointer"
                    onClick={() => setSuccess(false)} />
      </div>
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

