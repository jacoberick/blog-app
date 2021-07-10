import HomepageArticles from './homepage-components/homepageArticles';

const Home = () => {
  return (
    <div
      id="homeContainer"
      className="flex flex-col items-center m-10 h-home 999:h-auto"
    >
      <HomepageArticles />
    </div>
  );
};

export default Home;
