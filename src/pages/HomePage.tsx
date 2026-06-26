import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import Section3 from '../components/sections/Section3';

const HomePage = () => {
    return (
      <div className="bg-gray-500 my-0 mx-auto max-w-7xl">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
};

export default HomePage;