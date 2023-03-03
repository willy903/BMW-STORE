import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../image/sidebar.png'
import Ecommerce from '../../image/ecommerce.png'
import HOC from '../../image/hoc.png'
import MusicApp from '../../image/musicapp.png'
import 'swiper/css'
const portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projetcs</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default portfolio