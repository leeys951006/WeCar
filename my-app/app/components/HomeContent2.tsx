import React from 'react';

const HomeContent2: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start p-6 md:p-24 md:ml-20 bg-white mx-5 md:mx-0"
    >
      {/* 왼쪽 섹션 */}
      <div className="flex-1 mb-6 md:mb-0 text-left">
        <p className="text-xl md:text-2xl font-medium text-red-600 mb-2">Recruit</p>
        <h1 className="text-3xl md:text-5xl font-bold text-black">상시채용</h1>
      </div>

      {/* 중간 섹션 */}
      <div className="flex-grow text-left md:ml-28 mb-6 md:mb-0">
        <h2 className="text-lg md:text-2xl text-gray-600">
          위카모빌리티(주)와 함께 성장할 자동차 진단 평가사를 모집합니다.<br />
          좌측의 이력서를 작성하여 이메일로 접수하여 주시기 바랍니다.<br />
          채용 문의 및 접수 : <a href="mailto:WECAR@WECAR-M.CO.KR" className="underline">WECAR@WECAR-M.CO.KR</a> 031-548-4929
        </h2>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="flex-1 flex items-center justify-center">
        <button
          className="bg-red-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-lg text-center"
          style={{ minWidth: '160px', minHeight: '80px' }}
        >
          이력서 양식<br />다운로드
        </button>
      </div>
    </div>
  );
};

export default HomeContent2;
