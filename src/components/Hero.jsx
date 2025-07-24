import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '/images/photo1.jpg'; // استبدل بالمسار الصحيح للصورة
import coverPic from '/images/photo2.jpg'; // استبدل بالمسار الصحيح للصورة
import './Hero.css'; // تأكد من وجود ملف CSS

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState({ profile: false, cover: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تتبع حركة الماوس لتأثيرات الخداع البصري
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // دالة تبديل المودال
  const toggleModal = (type) => {
    setIsModalOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // حساب تأثير البارالاكس بناءً على موقع الماوس
  const getParallaxStyle = () => ({

  });

  // Variants لتحريك الخلفية
  const backgroundVariants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  // Variants لتحريك صورة الغلاف
  const coverVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Variants لتحريك الصورة الشخصية
  const profilePicVariants = {
    initial: { scale: 0, rotate: -360, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, type: 'spring', stiffness: 120 },
    },
    hover: {
      scale: 1.3,
      rotate: 5,
      boxShadow: '0 0 40px rgba(236, 72, 153, 0.9)',
      transition: { duration: 0.4 },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  // Variants لتحريك النصوص
  const textVariants = {
    hidden: { opacity: 0, y: 50, skewY: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.8, delay: i * 0.3, ease: 'easeOut' },
    }),
  };

  // Variants لتحريك المودال
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.5, rotate: 20, transition: { duration: 0.4 } },
  };

  return (
    <motion.header
      className="hero"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      {/* خلفية ديناميكية */}
      <div className="hero-background">
        <div className="gradient-overlay" />
        <div className="particles" />
      </div>

      {/* صورة الغلاف */}
      <motion.div
        className="cover-photo"
        variants={coverVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        style={getParallaxStyle()}
        onClick={() => toggleModal('cover')}
      >
        <motion.img src={coverPic} alt="Cover" className="cover-img" />
      </motion.div>

      {/* المحتوى الشخصي (بدون كارت) */}
      <div className="profile-content">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          variants={profilePicVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          style={getParallaxStyle()}
          onClick={() => toggleModal('profile')}
        />
        <motion.h1 custom={1} variants={textVariants} initial="hidden" animate="visible">
          Ahmed Bakry
        </motion.h1>
        <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible">
        UI/UX Web Designer and Accountant
        </motion.p>
        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
        </motion.div>
      </div>

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
    </motion.header>
  );
}

export default Hero;