import profile from '../assets/images/profile2.jpg';

const About = () => {
  return (
    <section className="px-4 md:px-28 mt-16 md:mt-40" id='about'>
        <h1 className="text-3xl md:text-4xl font-bold mb-12 md:mb-24 text-center">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96">
                <img src={profile} alt="profile" className='w-full h-full object-cover object-center' />
            </div>

            <div className="">
            <h1 className="text-2xl font-bold mb-4">IT Computing Student</h1>

            <p className="text-justify text-zinc-600 p-l-5 mb-4">I am currently pursuing a Diploma in Computing at MST University through NCC Education. My journey into coding began in 2021, where I acquired programming skills by diligently watching educational content on YouTube, joining online classes and studying online documentation. Beyond my current proficiency, I am a proactive learner, eagerly seeking opportunities to expand my skill on further more languages. With a keen eye for detail and a drive for innovation, I approach with the creativity and technical precision to every project, ensuring the delivery of high-quality, responsive, and efficient user-friendly web applications.
            </p>

            <button type='button'
                    className='bg-black text-white block 
                                px-4 py-2 rounded-md mb-4
                                transition-all active:scale-95'>
                <a href="https://drive.google.com/file/d/1eFJSFkHvzrGxWEXU_NVjHuiM5svsEOMJ/view?usp=drive_link" target='_blink' 
                    rel="noreferrer" >
                    View Diploma
                </a>
            </button>

            <a href="https://drive.google.com/file/d/14ztTxADsp56vFsaQ6nFeUhc3XdOPK09d/view?usp=drive_link" target='_blink' 
                    rel="noreferrer"
                    className='underline mr-4 max-md:block max-md:mb-2' >
                    Full-stack Developer Course Certificate 
            </a>

            <a href="https://drive.google.com/file/d/1V-m-wMqfFNGqg37AiVkbrGGCbnXdiaVz/view?usp=drive_link" target='_blink' 
                rel="noreferrer"
                className='underline max-md:block max-md:mb-2' >
                React Course Certificate
            </a>
        </div>

            
        </div>
    </section>
  )
}

export default About