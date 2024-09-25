// components/Header.tsx
'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggle menu clicked'); // 클릭 시 로그 확인
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col bg-white">
      <div className="flex items-center justify-start p-2">
        {/* 로고 */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="/wecar_logo.png" alt="Wecar Logo" className="w-[165px] h-[60px] ml-4 md:ml-28 md:w-[300px] md:h-[100px]" />
          </a>
        </div>

        {/* PC 버전 네비게이션 */}
        <nav className="hidden md:flex space-x-10 text-sm ml-20 text-gray-600 font-bold">
          <a href="#" className="hover:text-red-500">
            회사소개
          </a>
          <a href="#" className="hover:text-red-500">
            진단서비스
          </a>
          <a href="#" className="hover:text-red-500">
            탁송서비스
          </a>
          <a href="#" className="hover:text-red-500">
            내차로제주로
          </a>
          <a href="#" className="hover:text-red-500">
            구해줘중고차
          </a>
          <a href="#" className="hover:text-red-500">
            팔아줘중고차
          </a>
          <a href="#" className="text-red-500">
            인증중고차 판매
          </a>
          <a href="#" className="hover:text-red-500">
            온라인예약
          </a>
          <a href="#" className="hover:text-red-500">
            게시판
          </a>
          <a href="#" className="hover:text-red-500">
            SNS
          </a>
          <a href="#" className="hover:text-red-500">
            영문(ENG)
          </a>
        </nav>

        {/* 모바일 버전 햄버거 메뉴 */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none mr-4"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <nav
        id="mobile-menu"
        className={`w-full bg-gray-100 flex flex-col items-start text-gray-600 font-bold text-sm md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          회사소개
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          진단서비스
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          탁송서비스
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          내차로제주로
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          구해줘중고차
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          팔아줘중고차
        </a>
        <a href="#" className="w-full text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          인증중고차 판매
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          온라인예약
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          게시판
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          SNS
        </a>
        <a href="#" className="w-full hover:text-red-500 px-4 py-2 border-b border-gray-200 last:border-b-0">
          영문(ENG)
        </a>
      </nav>
    </header>
  );
}
