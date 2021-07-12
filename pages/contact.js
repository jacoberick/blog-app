import Header from '../components/header';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div className="h-screen">
      <Header />
      <div
        id="ContactSection"
        className="h-96 flex items-center justify-center flex-col py-72 my-10 text-main"
      >
        <h1 className="font-header text-2xl mb-10 m850:text-lg m550:text-base m550:mb-5">
          FOR ALL INQUIRIES
        </h1>
        <a
          className="font-bookTitle text-7xl m850:text-5xl m550:text-4xl m400:text-2xl hover:text-highlight transition duration-175"
          href="mailto:gulaganthem@gmail.com"
        >
          GULAGANTHEM@GMAIL.COM
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
