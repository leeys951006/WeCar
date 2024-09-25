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
    <div>
      {/* 기존 섹션 */}
      <div className="bg-white py-12 px-6 ">
        <div className="mb-12 md:mb-16 md:px-20 mt-20 md:ml-40">
          <h1 className="text-xl md:text-5xl font-extrabold mb-4 md:mb-6 text-black">위카 모빌리티의 핵심 서비스</h1>
          <p className="text-lg md:text-2xl text-black">
            위카만의 전문화된 자동차 서비스를 통해<br className="md:hidden" />
            편리한 자동차 생활을 누리세요.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:px-20 mt-20 md:ml-40">
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

      {/* 새로운 섹션 추가 */}
      <div className="p-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-left text-black">진단서비스는 이렇게 진행됩니다.</h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* 1단계 */}
            <div className="flex-1 text-left mb-8 md:mb-0">
              <div className="mb-4">
                <img src="/Truck.png" alt="Truck" className="w-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">1. 서비스 선택/예약</h2>
                <p className="text-black text-lg">
                  구매동행서비스, 출장진단, 센터방문진단, 경매진단 등 이용할 서비스와 이용할 날짜를 선택하시고 예약하시면 차량전문가를 배정해드립니다.
                </p>
              </div>
            </div>
            {/* 2단계 */}
            <div className="flex-1 text-left mb-8 md:mb-0">
              <div className="mb-4">
                <img src="/check_box.png" alt="Check Box" className="w-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">2. 자동차진단평가사 차량 진단</h2>
                <p className="text-black text-lg">
                  국가공인자동차진단평가사가 요청하신 날짜에 방문하여 요청한 자동차를 정확하고 객관적으로 진단해드립니다.
                </p>
              </div>
            </div>
            {/* 3단계 */}
            <div className="flex-1 text-left">
              <div className="mb-4">
                <img src="/Bar chart.png" alt="Bar Chart" className="w-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">3. 진단결과 송부</h2>
                <p className="text-black text-lg">
                  진단결과는 문자 또는 E-MAIL로 즉시 송부해드립니다. 진단 후 탁송 및 WECAR WARRANTY(보증서비스) 등 부가서비스는 방문한 평가사와 상의하기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 새로운 섹션 끝 */}
    </div>
  );
};

export default HomeContent;
