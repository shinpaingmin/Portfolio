import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Card from "./Card";
import { useMemo, useState } from "react";

 
const Projects = () => {

    const [option, setOption] = useState("all");

    console.log(option)

    const filteredProjects = useMemo(() => {
        let newProjects = projects;

        if(option === "frontend") {
            newProjects = newProjects.filter((pro) => pro.projectType === "Frontend Project");
        } else if (option === "fullstack") {
            newProjects = newProjects.filter((pro) => pro.projectType === "Fullstack Project");
        }

        return newProjects;

    }, [option])

    return (
        <section className="px-4 lg:px-20 xl:px-28 mt-16 lg:mt-40" id='projects'>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-16 text-center">My Projects</h1>

            <div className="flex justify-end">
            <select onChange={(e) => setOption(e.currentTarget.value)}
                    className="w-44 border border-gray-200 
                    outline-none p-2 mb-8"
            >
                <option value="all">All</option>
                <option value="frontend">Frontend</option>
                <option value="fullstack">Fullstack</option>
            </select>
            </div>

            <Swiper grabCursor={true}
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        }
                    }}
                
                    autoplay={{
                        delay: 2000
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    
                    modules={[ Pagination, Autoplay]}
                    className="">

                {
                    filteredProjects.map((project, i) => (
                        <SwiperSlide key={i} className="mb-12">
                            <Card {...project} />
                        </SwiperSlide>
                    ))
                }
                
                
            </Swiper>
                    
        </section>
    )
}

export default Projects