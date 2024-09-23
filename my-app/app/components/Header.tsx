'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-start p-2 bg-gray-100">
      {/* 로고 */}
      <div className="flex-shrink-0">
        {/* 기본 로고 크기 설정, 모바일 버전에서 크기를 변경 */}
        <img src="/wecar_logo.png" alt="Wecar Logo" className="w-[165px] h-[60px] ml-4 md:ml-20 md:w-[300px] md:h-[100px]" />
      </div>

      {/* PC 버전 네비게이션 - 기존 그대로 유지 */}
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
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none mr-4">
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center space-y-4 py-4 text-gray-600 font-bold text-sm md:hidden">
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
      )}
    </header>
  );
}
