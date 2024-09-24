'use client';

import React, { useState, useRef, useEffect } from 'react';

const HomeContent: React.FC = () => {
  // State to keep track of the selected service
  const [selectedService, setSelectedService] = useState<number>(1);

  // Array of service images and labels
  const services = [
    { id: 1, image: 'service1.jpg', label: '서비스 1' },
    { id: 2, image: 'service2.jpg', label: '서비스 2' },
    { id: 3, image: 'service3.jpg', label: '서비스 3' },
    { id: 4, image: 'service4.jpg', label: '서비스 4' },
    { id: 5, image: 'service5.jpg', label: '서비스 5' },
  ];

  // Refs to measure the height of the vertical list
  const listRef = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState<number>(0);

  // Update the height when the component mounts or updates
  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.clientHeight);
    }

    // Optional: Update height on window resize
    const handleResize = () => {
      if (listRef.current) {
        setListHeight(listRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedService]);

  return (
    <div className="bg-white py-12 px-20 mt-20 ml-40">
      {/* Top Section: Title and Description */}
      <div className="mb-16">
        <h1 className="text-6xl font-extrabold mb-8 text-black">위카 모빌리티의 핵심 서비스</h1>
        <p className="text-2xl md:text-3xl text-black">위카만의 전문화된 자동차 서비스를 통해 편리한 자동차 생활을 누리세요.</p>
      </div>

      {/* Bottom Section: Services List and Image Display */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Left Side: Vertical List of Services */}
        <div
          className="flex flex-col space-y-8" // Increased space between buttons
          ref={listRef}
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-8 border rounded-xl cursor-pointer transition-colors duration-300 transform ${
                selectedService === service.id ? 'bg-blue-600 text-white scale-105' : 'bg-gray-200 text-black hover:bg-gray-300 hover:scale-105'
              } flex items-center justify-center text-2xl md:text-3xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Right Side: Display Image */}
        <div className="mt-16 md:mt-0 md:ml-16 flex-grow flex justify-center">
          <div
            className="relative"
            style={{
              height: listHeight, // Match the height of the button list
              width: '70%', // Adjusted width for better alignment
            }}
          >
            <img
              src={services.find((s) => s.id === selectedService)?.image || 'default.jpg'}
              alt={`상세 정보: ${services.find((s) => s.id === selectedService)?.label}`}
              className="object-cover w-full h-full rounded-xl shadow-2xl"
              style={{
                transition: 'all 0.3s ease-in-out',
              }}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'default.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
