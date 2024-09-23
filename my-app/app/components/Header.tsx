'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center p-2 bg-gray-100">
      {/* PC Logo */}
      <div className="hidden md:flex md:items-center flex-shrink-0 ml-4">
        <img
          src="/wecar_logo.png"
          alt="Wecar Logo"
          className="w-[300px] h-[100px]" // 300x100 px
        />
      </div>

      {/* Mobile Logo and Menu Button */}
      <div className="flex-1 flex items-center md:hidden">
        {/* Mobile Logo */}
        <div className="flex-shrink-0 ml-4">
          <img
            src="/wecar_logo.png"
            alt="Wecar Logo"
            className="w-[165px] h-[60px]" // 165x60 px
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto mr-4">
          <button className="text-gray-600 hover:text-red-500 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`fixed inset-0 z-50 bg-gray-100 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Logo in Mobile Menu */}
        <div className="mb-4">
          <img
            src="/wecar_logo.png"
            alt="Wecar Logo"
            className="w-[165px] h-[60px]" // 165x60 px
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 text-gray-600 font-bold">
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
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-10 text-sm text-gray-600 font-bold ml-20">
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
    </header>
  );
}
