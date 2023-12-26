import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';
import project6 from '../assets/images/project6.jpg';
import project7 from '../assets/images/project7.jpg';
import project8 from '../assets/images/project8.jpg';
import project9 from '../assets/images/project9.png';
import project10 from '../assets/images/project10.jpg';
import project11 from '../assets/images/project11.jpg';
import project12 from '../assets/images/project12.jpg';
import project13 from '../assets/images/project13.jpg';
import project14 from '../assets/images/project14.jpg';
import project15 from '../assets/images/project15.jpg';
import project16 from '../assets/images/project16.jpg';
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
        projectType: "Fullstack Project",
        img: project1, 
        desc: "Global Wild Swimming and Camping website in HTML, CSS, JavaScript, PHP, MySQL database including stripe payment, and much more...",
        url1: "https://github.com/shinpaingmin/Global_Wild_Swimming_and_Camping",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: ""
    },

    { 
        projectType: "Fullstack Project",
        img: project2, 
        desc: "An E-commerce website using Laravel + JetStream Auth, and MySQL database including admin dashboard, pagination, Ajax and much more...",
        url1: "https://github.com/shinpaingmin/Pizza-Order-System",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: ""
    },

    { 
        projectType: "Fullstack Project",
        img: project3, 
        desc: "The Laravel-React Fullstack Application for CRUD including user authentication and authorization",
        url1: "https://github.com/shinpaingmin/laravel-react-full-stack-app",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: ""
    },

    { 
        projectType: "Frontend Project",
        img: project4, 
        desc: "Quiz app in ReactJs using context api, custom hook, axios, etc...",
        url1: "https://github.com/shinpaingmin/Quiz_App",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-quiz-app.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project5, 
        desc: "Nike Landing Page Design in React + Tailwind CSS",
        url1: "https://github.com/shinpaingmin/Nike-Landing-Page",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-nike-landing-page.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project6, 
        desc: "A Movie App in React Js using Redux State Management",
        url1: "https://github.com/shinpaingmin/Movie_App",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-movie-app.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project7, 
        desc: "A Fully-functional Shopping Cart in React JS using useReducer hook and advanced filtering items",
        url1: "https://github.com/shinpaingmin/Shopping_Cart",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-shopping-cart.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project8, 
        desc: "Todo List Project using React and Typescript including drag and drop functionalities",
        url1: "https://github.com/shinpaingmin/React-TS-TodoList",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-todolist-ts.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Fullstack Project",
        img: project9, 
        desc: "A Mini Expense Tracker in functional PHP reading data from CSV file",
        url1: "https://github.com/shinpaingmin/Mini_Expense_Tracker",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "",
    },

    { 
        projectType: "Frontend Project",
        img: project10, 
        desc: "A Fully-functional QR Code Generator in pure HTML, CSS and JS",
        url1: "https://github.com/shinpaingmin/QR_Code_Generator",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin.github.io/QR_Code_Generator/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Fullstack Project",
        img: project11, 
        desc: "A CRUD Project in Laravel including pagination, search bar, etc...",
        url1: "https://github.com/shinpaingmin/Fruit_Bucket_List",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "",
    },

    { 
        projectType: "Frontend Project",
        img: project12, 
        desc: "NCC L4DC web project using only HTML, CSS, some Javascript concepts",
        url1: "https://github.com/shinpaingmin/Vintage_Rally_Club",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin.github.io/Vintage_Rally_Club/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project13, 
        desc: "The Landing Page in Tailwind CSS",
        url1: "https://github.com/shinpaingmin/Morden-Landing-Page",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin.github.io/Morden-Landing-Page/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project14, 
        desc: "A Mini TodoList Project in React Js using integrated json server + axios api",
        url1: "https://github.com/shinpaingmin/todo-List",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "",
    },

    { 
        projectType: "Frontend Project",
        img: project15, 
        desc: "A Simple Calculator App in React Js",
        url1: "https://github.com/shinpaingmin/Calculator_App",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin-calculator.netlify.app/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },

    { 
        projectType: "Frontend Project",
        img: project16, 
        desc: "SpaceX-2022 Landing Page clone using HTML, CSS, JS",
        url1: "https://github.com/shinpaingmin/SpaceX-2022-Clone",
        urlType1: "View Code",
        Icon1: FaGithub,
        url2: "https://shinpaingmin.github.io/SpaceX-2022-Clone/",
        urlType2: "Live Demo",
        Icon2: FaLaptop,
    },
];

export const contacts = [
    { Icon: FaPhoneAlt, title: "phone", desc: "+959 794219842" },
    { Icon: IoMdMail , title: "email", desc: "shinpaingmin@gmail.com" },
    { Icon: FaMapLocationDot, title: "address", desc: "19-G, Aung Baw Ga Street, Hlaing Township, Yangon, Myanmar" },
]