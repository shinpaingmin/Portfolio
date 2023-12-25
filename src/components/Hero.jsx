import profile from '../assets/images/profile1.jpg';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Hero = () => {

    const onButtonClick = () => {
        const pdfURL = "Shin Paing Min-Cv Form.pdf";
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <section className="flex max-lg:flex-col-reverse
                        justify-around items-center px-4 lg:px-8 mt-16 lg:mt-32">
        <div className="w-full lg:w-1/2 max-lg:mt-12">
            <p className="text-zinc-600 text-lg font-semibold mb-4 max-lg:text-center">Hello I&apos;m</p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-lg:text-center">Shin Paing Min</h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-600 mb-4 max-lg:text-center">Full-stack Web Developer</h2>

            <p className="text-justify text-zinc-600 mb-4">
            I am a dedicated 21-year-old Web Developer with a fervent passion for full-stack web development. Proficient in a diverse array of web programming languages, including <span className='font-semibold text-black'>HTML, CSS, JavaScript, React, Typescript, PHP, Laravel and MySQL, etc.</span> I thrive on the dynamic challenges of creating smooth and user-centric web experiences.
            </p>

            <button onClick={onButtonClick} type='button'
                    className='bg-black text-white 
                                px-4 py-2 rounded-md mb-4
                                transition-all active:scale-95'>
                Download CV
            </button>

            <div className='flex'>
                <a href="https://github.com/shinpaingmin" target='_blank' rel="noreferrer">
                    <FaGithub size={32} className='mr-3' />
                </a>

                <a href="https://www.linkedin.com/in/shinpaing-min-3420b9213" target='_blank' rel="noreferrer">
                    <FaLinkedin size={32} className='mr-3' />
                </a>
            </div>
        </div>

        <div className='xl:w-1/4'>
            <div className="w-72 h-72 md:w-96 md:h-96 ">
                <img src={profile} alt="profile" 
                                    className='w-full h-full 
                                                rounded-full object-cover object-center' />
            </div>
        </div>
    </section>
  )
}

export default Hero