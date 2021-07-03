import Header from '../components/header';
import Footer from '../components/footer';

const Videos = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-96 flex items-center flex-col py-72 my-10 text-main">
        <h1 className="font-bookTitle text-lg">No content at this time...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
