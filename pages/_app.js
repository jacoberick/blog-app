import "../styles/global.css";
import "../styles/tailwind.css";
import { motion } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <motion.div
      key={router.route}
      initial="init"
      animate="animate"
      variants={{ init: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } } }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
};

export default MyApp;
