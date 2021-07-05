import HomepageArticles from './homepageArticles';
import HomepageArt from './HomepageArt';

const Home = () => {
  return (
    <div id="homeContainer" className="flex flex-col items-center m-10 h-home">
      <HomepageArticles />
    </div>
  );
};

export default Home;
