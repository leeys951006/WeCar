// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#282828] p-8 text-left text-white flex flex-col md:flex-row">
      {/* First Section */}
      <div className="flex-1 flex flex-col ml-0 md:ml-20 mt-8 md:mb-5">
        <p className="mb-1 text-gray-400 text-xs md:text-sm" style={{ color: '#686868' }}>
          Copyright © 위카모빌리티 All Rights Reserved.
        </p>
        <div className="mb-8">
          <a href="/terms-of-use" className="text-[#686868] hover:text-white hover:underline mr-3 text-xs md:text-sm">
            Terms of Use
          </a>
          <span className="text-[#686868] mr-3 text-xs md:text-sm">|</span>
          <a href="/privacy-policy" className="text-[#686868] hover:text-white hover:underline text-xs md:text-sm">
            Privacy Policy
          </a>
        </div>
        <div className="flex space-x-4 ml-0 md:ml-2 mb-5">
          <div className="relative group">
            <a href="https://play.google.com/store/apps/details?id=co.kr.wecarmobility.app&pli=1">
              <img src="/google.png" alt="Google" className="w-full max-w-xs md:max-w-[200px] h-auto" />
            </a>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div className="relative group">
            <a href="https://apps.apple.com/kr/app/%EC%9C%84%EC%B9%B4%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EC%98%88%EC%95%BD%EC%8B%9C%EC%8A%A4%ED%85%9C/id6451229725">
              <img src="/apple.png" alt="Apple" className="w-full max-w-xs md:max-w-[200px] h-auto" />
            </a>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex-1 flex flex-col items-start md:items-end mr-0 md:mr-20 mt-8 md:mt-8">
        <div className="flex space-x-4 mb-4">
          <div className="relative group">
            <a href="https://blog.naver.com/wecarmobility">
              <img src="/blog_icon.png" alt="Blog" className="w-8 h-8 transition-opacity duration-300 hover:opacity-60" />
            </a>
          </div>
          <div className="relative group">
            <a href="https://www.facebook.com/wecarm">
              <img src="/facebook_icon.png" alt="Facebook" className="w-8 h-8 transition-opacity duration-300 hover:opacity-60" />
            </a>
          </div>
          <div className="relative group">
            <a href="https://www.instagram.com/wecarmobility/">
              <img src="/insta_icon.png" alt="Instagram" className="w-8 h-8 transition-opacity duration-300 hover:opacity-60" />
            </a>
          </div>
          <div className="relative group">
            <a href="https://wecarm.liveklass.com/">
              <img src="/edu_icon1.png" alt="Education" className="w-8 h-8 transition-opacity duration-300 hover:opacity-60" />
            </a>
          </div>
        </div>
        <div className="text-sm text-left md:text-right pt-0.5" style={{ color: '#686868' }}>
          <p className="text-xs md:text-sm">자동차진단＆탁송서비스판매 ㅣ 위카모빌리티(주) ㅣ 대표자 정태영 이승범</p>
          <p className="text-xs md:text-sm">사업자등록번호 : 755-81-02354 ㅣ 통신판매업신고 제2023-용인기흥-6932호</p>
          <p className="text-xs md:text-sm">본점 : 경기도 용인시 기흥구 중부대로 242 A동 W116호~117호 / 안성 : 경기도 안성시 공도읍 문터길 60</p>
          <p className="text-xs md:text-sm">대표번호 진단 1544-2165 탁송 1544-5286 ㅣ 이메일 WECAR@WECAR-M.CO.KR</p>
        </div>
      </div>
    </footer>
  );
}
