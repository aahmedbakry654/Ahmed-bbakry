import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  // Variants لتحريك النصوص والفيديو
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <header className="hero">
      {/* خلفية ديناميكية ثابتة */}
      <div className="hero-background">
        <div className="gradient-overlay" />
        <div className="particles" />
      </div>

      {/* المحتوى الشخصي */}
      <div className="profile-content">
        <motion.h1 custom={1} variants={textVariants} initial="hidden" animate="visible">
          Ahmed Bakry
        </motion.h1>
        <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible">
         Accountant
        </motion.p>
      </div>

      {/* الفيديو */}
      <motion.div
        className="hero-video"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <video autoPlay muted loop className="video-content">
          <source src="/images/WhatsApp Video 2025-08-11 at 02.37.58_cb8999f6.mp4" type="video/mp4" /> {/* استبدل بالمسار الصحيح */}
        
        </video>
      </motion.div>

      {/* الفقرة أسفل الفيديو */}
      <motion.p
        custom={4}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="video-caption"
      >
       يتم جمع المبيعات ثم طرح المرتجعات والخصومات للوصول إلى صافي المبيعات. بعد ذلك يتم حساب تكلفة البضاعة المباعة عن طريق إضافة مخزون أول المدة إلى المشتريات وطرح مخزون آخر المدة. الفرق بين صافي المبيعات وتكلفة البضاعة المباعة يمثل مجمل الربح. تُسجَّل المصاريف التشغيلية مثل الإيجار والرواتب وفواتير الخدمات، وتُطرح من مجمل الربح لاستخراج صافي الربح أو الخسارة. في النهاية تتم مقارنة المبيعات والمصاريف مع نفس الفترة في السنوات السابقة لمعرفة الفروق وأسبابها ووضع خطة لتحسين الأداء.
      </motion.p>
    </header>
  );
}

export default Hero;