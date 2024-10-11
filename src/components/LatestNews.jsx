// src/components/LatestNews.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import cambridge from '../assets/cambridge.avif';

const LatestNews = () => {
  const newsItems = [
    {
      text: "Text for Box 1",
      imgUrl: img1, // Use the imported image
    },
    {
      text: "Text for Box 2",
      imgUrl: img2, // Use the imported image
    },
    {
      text: "Text for Box 3",
      imgUrl: img3, // Use the imported image
    },
    {
      text: "Text for Box 4",
      imgUrl: img4, // Use the imported image
    },
    {
      text: "Text for Box 5",
      imgUrl: cambridge, // Use the imported image
    },
  ];

  return (
    <section className="latest-news-section py-10 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Latest News</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mx-5"
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img src={news.imgUrl} alt={`news-${index}`} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{news.text}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;
