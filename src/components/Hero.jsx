import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '/images/photo.jpg'; // صورة الملف الشخصي
import coverPic from '/images/photo2.jpg'; // صورة الغلاف
import './Hero.css';

function Hero() {
  // حالات المودال للصور
  const [isModalOpen, setIsModalOpen] = useState({ profile: false, cover: false });

  // Variants لتحريك الغلاف
  const coverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.5, ease: 'easeOut' } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  // Variants لتحريك الصورة الشخصية
  const profilePicVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotateY: 10, transition: { duration: 0.4, ease: 'easeOut' } },
    tap: { scale: 0.9, transition: { duration: 0.2 } }
  };

  // Variants لتحريك النصوص
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
  };

  // Variants لتحريك المودال
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  return (
    <header className="hero">
      {/* صورة الغلاف */}
      <motion.div
        className="cover-photo"
        variants={coverVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={() => toggleModal('cover')}
      >
        <motion.img
          src={coverPic}
          alt="Cover"
          className="cover-img"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>

      {/* حاوية الملف الشخصي */}
      <motion.div
        className="profile-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -10 }}
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          variants={profilePicVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => toggleModal('profile')}
        />
        <motion.h1 custom={0.2} variants={textVariants} initial="hidden" animate="visible">
          Ahmed Bakry
        </motion.h1>
        <motion.p custom={0.3} variants={textVariants} initial="hidden" animate="visible">
        professional website designer
        </motion.p>
      </motion.div>

      {/* مودال الصور */}
      <AnimatePresence>
        {(isModalOpen.profile || isModalOpen.cover) && (
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsModalOpen({ profile: false, cover: false })}
          >
            <motion.img
              src={isModalOpen.profile ? profilePic : coverPic}
              alt={isModalOpen.profile ? 'Profile Fullscreen' : 'Cover Fullscreen'}
              className="modal-img"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Hero;