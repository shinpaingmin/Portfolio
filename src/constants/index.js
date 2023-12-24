import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';
import project6 from '../assets/images/project6.jpg';
import { FaGithub, FaLaptop, FaPhoneAlt  } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail  } from "react-icons/io";


export const navLinks = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
];

export const skills = [
    { title: "HTML", percent: "90%" , style: "w-[90%]" },
    { title: "CSS", percent: "90%" , style: "w-[90%]" },
    { title: "Javascript", percent: "85%" , style: "w-[85%]" },
    { title: "React Js", percent: "85%" , style: "w-[85%]" },
    { title: "Typescript", percent: "75%" , style: "w-[75%]" },
    { title: "PHP", percent: "80%" , style: "w-[80%]" },
    { title: "Laravel", percent: "80%" , style: "w-[80%]" },
    { title: "MySQL", percent: "85%" , style: "w-[85%]" },
];

export const projects = [
    { 
        projectType: "PHP Project",
        img: project1, 
        desc: "Global Wild Swimming and Camping website in HTML, CSS, JavaScript, PHP, MySQL database",
        url: "https://github.com/shinpaingmin/Global_Wild_Swimming_and_Camping",
        urlType: "View Code",
        Icon: FaGithub,
    },

    { 
        projectType: "Laravel Project",
        img: project2, 
        desc: "An E-commerce website using Laravel + JetStream Auth, and MySQL database",
        url: "https://github.com/shinpaingmin/Pizza-Order-System",
        urlType: "View Code",
        Icon: FaGithub,
    },

    { 
        projectType: "React Project",
        img: project3, 
        desc: "Todo List Project using React and Typescript including drag and drop functionalities",
        url: "https://shinpaingmin-todolist-ts.netlify.app/",
        urlType: "Live Demo",
        Icon: FaLaptop,
    },

    { 
        projectType: "React Project",
        img: project4, 
        desc: "Quiz app in ReactJs using context api, custom hook, axios, etc...",
        url: "https://shinpaingmin-quiz-app.netlify.app/",
        urlType: "Live Demo",
        Icon: FaLaptop,
    },

    { 
        projectType: "React Project",
        img: project5, 
        desc: "Nike Landing Page Design in React + Tailwind CSS",
        url: "https://shinpaingmin-nike-landing-page.netlify.app/",
        urlType: "Live Demo",
        Icon: FaLaptop,
    },

    { 
        projectType: "React Project",
        img: project6, 
        desc: "A Movie App in React Js using Redux State Management",
        url: "https://shinpaingmin-movie-app.netlify.app/",
        urlType: "Live Demo",
        Icon: FaLaptop,
    },


];

export const contacts = [
    { Icon: FaPhoneAlt, title: "phone", desc: "+959 794219842" },
    { Icon: IoMdMail , title: "email", desc: "shinpaingmin@gmail.com" },
    { Icon: FaMapLocationDot, title: "address", desc: "19-G, Aung Baw Ga Street, Hlaing Township, Yangon, Myanmar" },
]