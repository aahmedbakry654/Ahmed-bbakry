import { useState } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  // Variants لتحريك الأيقونات
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  // حالة للتحكم في النافذة المنبثقة
  const [selectedImage, setSelectedImage] = useState(null);

  // دالة لفتح الصورة في النافذة المنبثقة
  const openImage = (imagePath) => {
    setSelectedImage(imagePath);
  };

  // دالة لإغلاق النافذة المنبثقة
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <footer className="footer">
      <table className="footer-table">
        <tbody>
          <tr>
            <td className="website-links">
              <motion.a
                href="#"
                onClick={() => openImage('/images/photo2.jpg')} // استبدل بمسار الصورة الفعلي
                className="web-link"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <img src="/images/photo2.png" alt="Image 1" className="image-icon" />
                مركز مالي
              </motion.a>
              <motion.a
                href="#"
                onClick={() => openImage('/images/photo1.jpg')} // استبدل بمسار الصورة الفعلي
                className="web-link"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <img src="/images/photo1.png" alt="Image 2" className="image-icon" />
                يوميات الفروع
              </motion.a>
              <motion.a
                href="#"
                onClick={() => openImage('/images/photo3.jpg')} // استبدل بمسار الصورة الفعلي
                className="web-link"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <img src="/images/photo3.png" alt="Image 3" className="image-icon" />
                التارجيت
              </motion.a>
            </td>
          </tr>
          <tr>
            <td className="social-links">
              <motion.a
                href="https://www.facebook.com/share/1E3XoEFyEA/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaFacebook className="icon" />
              </motion.a>
              <motion.a
                href="https://wa.me/+201207391129"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaWhatsapp className="icon" />
              </motion.a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* النافذة المنبثقة لعرض الصورة */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;