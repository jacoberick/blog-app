import '../styles/global.css';
import '../styles/tailwind.css';
import { motion } from 'framer-motion';
import Store from './Store';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <motion.div
      className="relative overflow-x-hidden"
      key={router.route}
      initial="init"
      animate="animate"
      variants={{
        init: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <Store>
        <Component {...pageProps} />
      </Store>
    </motion.div>
  );
};

export default MyApp;
