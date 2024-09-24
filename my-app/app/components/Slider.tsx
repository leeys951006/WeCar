'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Slider = () => {
  const images = ['/main1.jpg', '/main2.jpg', '/main3.jpg', '/main4.jpg', '/main5.jpg', '/main6.jpg']; // 이미지 경로 설정

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); // Correctly typed ref

  // Function to reset the interval
  const resetInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5초마다 이미지 변경
  };

  useEffect(() => {
    resetInterval(); // Initialize the interval when component mounts

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current); // Clean up on unmount
      }
    };
  }, [images.length]);

  // 이전 이미지로 이동하는 함수
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetInterval(); // Reset the interval on manual navigation
  };

  // 다음 이미지로 이동하는 함수
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval(); // Reset the interval on manual navigation
  };

  return (
    <div className="relative w-full md:w-[80%] h-80 md:h-[699px] overflow-hidden mx-auto">
      {images.map((image, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover', borderRadius: '20px' }} // 모서리를 둥글게 설정
            unoptimized
          />

          {/* main1.jpg일 때 텍스트와 버튼 표시 */}
          {index === 0 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <p className="text-2xl md:text-4xl mb-4">내차를 높은 가격으로</p>
                <p className="text-xl md:text-3xl mb-4">판매하는</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">팔아줘 중고차 서비스</h1>
              </div>
              <button
                className={`bg-red-500 text-base md:text-xl py-2 px-4 rounded-full hover:bg-red-600 transition duration-1000 transform ${
                  currentIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
                }`}
              >
                예약 바로가기
              </button>
            </div>
          )}

          {/* main2.jpg일 때 텍스트 표시 */}
          {index === 1 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-black text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 1 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <h1 className="text-3xl md:text-6xl font-bold mb-4">WELCOME</h1>
                <h2 className="text-2xl md:text-5xl mb-4">
                  <span className="text-red-500">WE</span>CAR MOBILITY
                </h2>
                <p className="text-xl md:text-4xl">자동차 진단&탁송 전문기업</p>
              </div>
            </div>
          )}

          {/* main3.jpg일 때 텍스트 표시 */}
          {index === 2 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 2 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <p className="text-2xl md:text-5xl mb-4">KIA CPO DIAGNOSIS OF</p>
                <p className="text-2xl md:text-5xl mb-4">USED CAR PURCHASE</p>
                <h1 className="text-3xl md:text-6xl font-bold">기아 인증중고차 매입진단</h1>
              </div>
            </div>
          )}

          {/* main4.jpg일 때 텍스트와 예약 바로가기 버튼 표시 */}
          {index === 3 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 3 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <p className="text-2xl md:text-5xl mb-4">자동차 진단</p>
                <p className="text-2xl md:text-5xl mb-4">평가사로 구성된</p>
                <h1 className="text-3xl md:text-6xl font-bold mb-8">자동차 진단 사업</h1>
              </div>
              <button
                className={`bg-red-500 text-base md:text-xl py-2 px-4 rounded-full hover:bg-red-600 transition duration-1000 transform ${
                  currentIndex === 3 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
                }`}
              >
                예약 바로가기
              </button>
            </div>
          )}

          {/* main5.jpg일 때 텍스트와 예약 바로가기 버튼 표시 */}
          {index === 4 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 4 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <p className="text-2xl md:text-5xl mb-4">안전하고</p>
                <p className="text-2xl md:text-5xl mb-4">정확한 탁송</p>
                <h1 className="text-3xl md:text-6xl font-bold mb-8">자동차 탁송 사업</h1>
              </div>
              <button
                className={`bg-red-500 text-base md:text-xl py-2 px-4 rounded-full hover:bg-red-600 transition duration-1000 transform ${
                  currentIndex === 4 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
                }`}
              >
                예약 바로가기
              </button>
            </div>
          )}

          {/* main6.jpg일 때 텍스트와 예약 바로가기 버튼 표시 */}
          {index === 5 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-left p-4 sm:p-2">
              <div className={`transition-transform duration-1000 ease-out transform ${currentIndex === 5 ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
                <p className="text-2xl md:text-5xl mb-4">중고차를 저렴하게</p>
                <p className="text-2xl md:text-5xl mb-4">구매하는</p>
                <h1 className="text-3xl md:text-6xl font-bold mb-8">구해줘중고차 서비스</h1>
              </div>
              <button
                className={`bg-red-500 text-base md:text-xl py-2 px-4 rounded-full hover:bg-red-600 transition duration-1000 transform ${
                  currentIndex === 5 ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
                }`}
              >
                예약 바로가기
              </button>
            </div>
          )}
        </div>
      ))}

      {/* 이전 버튼 */}
      <button
        className="absolute top-[50%] left-5 transform -translate-y-1/2 text-white text-2xl sm:text-xl border-2 border-white rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center z-10 hover:bg-red-500 hover:border-red-500 transition-colors duration-300"
        onClick={prevSlide}
      >
        {'<'}
      </button>

      {/* 다음 버튼 */}
      <button
        className="absolute top-[50%] right-5 transform -translate-y-1/2 text-white text-2xl sm:text-xl border-2 border-white rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center z-10 hover:bg-red-500 hover:border-red-500 transition-colors duration-300"
        onClick={nextSlide}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
