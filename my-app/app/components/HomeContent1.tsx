'use client'

import React, { useState, useRef, useEffect } from 'react';

const HomeContent: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(1);

  const services = [
    { id: 1, image: 'service1.jpg', label: '진단서비스' },
    { id: 2, image: 'service2.jpg', label: '탁송서비스' },
    { id: 3, image: 'service3.jpg', label: '내차로제주로' },
    { id: 4, image: 'service4.jpg', label: '구해줘중고차' },
    { id: 5, image: 'service5.jpg', label: '팔아줘중고차' },
  ];

  const listRef = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.clientHeight);
    }

    const handleResize = () => {
      if (listRef.current) {
        setListHeight(listRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedService]);

  return (
    <div className="bg-white py-12 px-6 md:px-20 mt-20 md:ml-40">
      <div className="mb-12 md:mb-16">
        <h1 className="text-xl md:text-5xl font-extrabold mb-4 md:mb-6 text-black">위카 모빌리티의 핵심 서비스</h1>
        <p className="text-lg md:text-2xl text-black">
          위카만의 전문화된 자동차 서비스를 통해<br className="md:hidden" />
          편리한 자동차 생활을 누리세요.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div
          className="grid grid-cols-3 md:flex md:flex-col md:space-y-8 gap-4 md:gap-0 mb-0 md:mb-0"
          ref={listRef}
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`w-full py-4 md:py-8 px-6 md:px-16 border rounded-xl cursor-pointer transition-colors duration-300 transform flex items-center justify-center text-base md:text-2xl font-semibold focus:outline-none whitespace-nowrap ${
                selectedService === service.id
                  ? 'bg-red-600 text-white border-red-600 focus:ring-0'
                  : 'bg-white text-gray-400 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
              } rounded-2xl`} // 모바일 버전에서 많이 둥글게 하기 위한 클래스 추가
              aria-pressed={selectedService === service.id ? 'true' : 'false'}
              role="button"
            >
              {service.label}
            </button>
          ))}
        </div>

        <div className="flex-grow flex justify-center">
          <div
            className="relative w-full md:w-7/12 mt-8 md:mt-0"
            style={{
              height: selectedService ? 'auto' : listHeight,
            }}
          >
            <img
              src={services.find((s) => s.id === selectedService)?.image || 'default.jpg'}
              alt={`상세 정보: ${services.find((s) => s.id === selectedService)?.label}`}
              className="object-cover w-full h-full rounded-xl shadow-2xl"
              style={{
                transition: 'all 0.3s ease-in-out',
                height: '100%',
              }}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'default.jpg';
                target.alt = '기본 이미지';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
