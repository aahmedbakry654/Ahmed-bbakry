import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

// مكون الفوتر
function Footer() {
  // Variants لتحريك الأيقونات
  const iconVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.2, y: -5, transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.9, transition: { duration: 0.2 } }
  };

  // Variants لتحريك روابط الويب
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <footer className="footer">
      {/* روابط الويب */}
      <div className="website-links">
        <motion.a
          href="https://zaza-photo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="web-link"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <FaGlobe /> Zaza Potographer
        </motion.a>
        <motion.a
          href="https://bitro-caffe.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="web-link"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <FaGlobe /> Bitro cafe
        </motion.a>


        <motion.a
          href="https://hi-proast.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="web-link"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <FaGlobe /> Hi proast
        </motion.a>

      </div>

      {/* روابط السوشيال ميديا */}
      <div className="social-links">
        <motion.a
          href="https://www.facebook.com/share/194M9hmwMQ/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaFacebook className="icon" />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaInstagram className="icon" />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedin className="icon" />
        </motion.a>
        <motion.a
          href="https://wa.me/+201015836376"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaWhatsapp className="icon" />
        </motion.a>
      </div>

    </footer>
  );
}

export default Footer;