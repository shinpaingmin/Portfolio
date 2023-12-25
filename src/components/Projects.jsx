import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Card from "./Card";

 
const Projects = () => {

  return (
    <section className="px-4 lg:px-20 xl:px-28 mt-16 lg:mt-40" id='projects'>
        <h1 className="text-3xl md:text-4xl font-bold mb-12 lg:mb-24 text-center">My Projects</h1>
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
                    projects.map((project, i) => (
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