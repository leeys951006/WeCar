import { NextPage } from 'next';
import Slider from './components/Slider'; // 슬라이드 컴포넌트 불러오기
import HomeContent from './components/HomeContent1'; // 새로 생성한 컴포넌트 불러오기


const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="h-80 md:h-[80vh] md:flex md:items-center md:justify-center bg-white">
        <Slider /> {/* 슬라이드 컴포넌트 사용 */}
      </div>
      <HomeContent /> {/* 새로 생성한 컴포넌트 사용 */}
    </div>
  );
};

export default Home;
