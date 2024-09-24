import { NextPage } from 'next';
import Slider from './components/Slider'; // 슬라이드 컴포넌트 불러오기

const Home: NextPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <Slider /> {/* 슬라이드 컴포넌트 사용 */}
    </div>
  );
};

export default Home;
