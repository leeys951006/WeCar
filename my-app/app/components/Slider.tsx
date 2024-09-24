'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
  const images = ['/main1.jpg', '/main2.jpg', '/main3.jpg', '/main4.jpg', '/main5.jpg', '/main6.jpg']; // 이미지 경로 설정

  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3초마다 이미지 변경
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [images.length]);

  // 이전 이미지로 이동하는 함수
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // 다음 이미지로 이동하는 함수
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[80%] h-[699px] overflow-hidden mx-auto">
      {images.map((image, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover', borderRadius: '20px' }} // 모서리를 둥글게 설정
            unoptimized
          />
        </div>
      ))}

      {/* 이전 버튼 */}
      <button
        className="absolute top-[50%] left-5 transform -translate-y-1/2 text-white text-2xl border-2 border-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={prevSlide}
      >
        {'<'}
      </button>

      {/* 다음 버튼 */}
      <button
        className="absolute top-[50%] right-5 transform -translate-y-1/2 text-white text-2xl border-2 border-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={nextSlide}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
