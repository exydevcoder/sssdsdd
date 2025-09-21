'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ""

export default function FloatingDockDemo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const navItems = [
    { icon: 'Home', label: 'Home', id: 'home' },
    { icon: 'Work', label: 'Work', id: 'work', active: true },
    { icon: 'Apps', label: 'Apps', id: 'apps' },
    { icon: 'Messages', label: 'Messages', id: 'messages' },
    { icon: 'Profile', label: 'Profile', id: 'profile' },
    { icon: 'Analytics', label: 'Analytics', id: 'analytics' },
    { icon: 'Close', label: 'Close', id: 'close' },
    { icon: 'Globe', label: 'Globe', id: 'globe' }
  ];

  const IconComponent = ({ name, className = 'w-5 h-5' }) => {
    const icons = {
      Home: (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.2472 19H4.74927C2.68192 19 1 17.3181 1 15.2507V8.29508C1 7.04657 1.61788 5.8843 2.65268 5.18693L7.90091 1.64462C8.5197 1.22457 9.25036 1 9.99825 1C10.7461 1 11.4768 1.22457 12.0956 1.64462L17.3446 5.18693C17.8536 5.52986 18.2706 5.99272 18.5587 6.53473C18.8467 7.07674 18.9971 7.68127 18.9965 8.29508V15.2507C18.9965 17.3181 17.3146 19 15.2472 19ZM9.99825 2.50095C9.54949 2.50134 9.11116 2.63639 8.74 2.88863L3.49102 6.43019C3.18555 6.63576 2.93534 6.91332 2.76247 7.23841C2.58959 7.5635 2.49935 7.92613 2.49971 8.29433V15.25C2.49971 16.4902 3.50901 17.4995 4.74927 17.4995H15.2472C16.4875 17.4995 17.4968 16.4902 17.4968 15.25V8.29508C17.4968 7.54597 17.1264 6.84861 16.5062 6.43094L11.2565 2.88863C10.8853 2.63639 10.447 2.50134 9.99825 2.50095Z"
            fill="#D4D4D4"
          />
        </svg>
      ),
      Work: (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.75 1H4.75C2.68225 1 1 2.68225 1 4.75V6.25C1 7.07725 1.67275 7.75 2.5 7.75H7.75C8.57725 7.75 9.25 7.07725 9.25 6.25V2.5C9.25 1.67275 8.57725 1 7.75 1ZM2.5 6.25V4.75C2.5 3.5095 3.5095 2.5 4.75 2.5H7.75L7.7515 6.25H2.5ZM17.5 12.25H12.25C11.4227 12.25 10.75 12.9227 10.75 13.75V17.5C10.75 18.3272 11.4227 19 12.25 19H15.25C17.3177 19 19 17.3177 19 15.25V13.75C19 12.9227 18.3272 12.25 17.5 12.25ZM17.5 15.25C17.5 16.4905 16.4905 17.5 15.25 17.5H12.25V13.75H17.5V15.25ZM15.25 1H12.25C11.4227 1 10.75 1.67275 10.75 2.5V9.25C10.75 10.0773 11.4227 10.75 12.25 10.75H17.5C18.3272 10.75 19 10.0773 19 9.25V4.75C19 2.68225 17.3177 1 15.25 1ZM12.25 9.25V2.5H15.25C16.4905 2.5 17.5 3.5095 17.5 4.75L17.5015 9.25H12.25ZM7.75 9.25H2.5C1.67275 9.25 1 9.92275 1 10.75V15.25C1 17.3177 2.68225 19 4.75 19H7.75C8.57725 19 9.25 18.3272 9.25 17.5V10.75C9.25 9.92275 8.57725 9.25 7.75 9.25ZM4.75 17.5C3.5095 17.5 2.5 16.4905 2.5 15.25V10.75H7.75L7.7515 17.5H4.75Z"
            fill="#D4D4D4"
          />
        </svg>
      ),
      Apps: (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.9829 9.44481C18.8745 7.69157 18.2555 6.00838 17.202 4.60272C16.1486 3.19706 14.7069 2.13039 13.0546 1.53421C11.4023 0.938036 9.61161 0.838413 7.90336 1.24762C6.19512 1.65684 4.64396 2.557 3.44112 3.83713C2.23828 5.11726 1.43634 6.7214 1.13417 8.45179C0.831997 10.1822 1.0428 11.9632 1.74059 13.5752C2.43838 15.1872 3.59266 16.5598 5.06112 17.5238C6.52957 18.4877 8.24801 19.0009 10.0046 19H15.2366C16.2299 18.999 17.1822 18.604 17.8845 17.9017C18.5869 17.1993 18.9819 16.247 18.9829 15.2537V9.44481ZM17.4844 15.2537C17.4844 15.8499 17.2475 16.4216 16.826 16.8431C16.4045 17.2647 15.8327 17.5015 15.2366 17.5015H10.0046C8.94735 17.501 7.90208 17.2777 6.93693 16.8461C5.97179 16.4146 5.10844 15.7844 4.40319 14.9968C3.69453 14.2095 3.16238 13.2798 2.84242 12.2701C2.52247 11.2603 2.4221 10.1938 2.54805 9.14211C2.74693 7.48322 3.49225 5.9377 4.66651 4.74919C5.84078 3.56068 7.37719 2.79679 9.03356 2.57792C9.35666 2.53743 9.68196 2.51691 10.0076 2.51648C11.7537 2.51172 13.4458 3.12181 14.7871 4.23976C15.5704 4.89082 16.2134 5.69417 16.6771 6.60112C17.1407 7.50807 17.4154 8.49973 17.4844 9.51598V15.2537Z"
            fill="#D4D4D4"
          />
          <path
            d="M6.99486 7.76123H9.99186C10.1906 7.76123 10.3811 7.68229 10.5217 7.54178C10.6622 7.40126 10.7411 7.21069 10.7411 7.01198C10.7411 6.81326 10.6622 6.62269 10.5217 6.48218C10.3811 6.34166 10.1906 6.26273 9.99186 6.26273H6.99486C6.79614 6.26273 6.60557 6.34166 6.46506 6.48218C6.32454 6.62269 6.24561 6.81326 6.24561 7.01198C6.24561 7.21069 6.32454 7.40126 6.46506 7.54178C6.60557 7.68229 6.79614 7.76123 6.99486 7.76123ZM12.9889 9.25973H6.99486C6.79614 9.25973 6.60557 9.33867 6.46506 9.47918C6.32454 9.61969 6.24561 9.81027 6.24561 10.009C6.24561 10.2077 6.32454 10.3983 6.46506 10.5388C6.60557 10.6793 6.79614 10.7582 6.99486 10.7582H12.9889C13.1876 10.7582 13.3782 10.6793 13.5187 10.5388C13.6592 10.3983 13.7381 10.2077 13.7381 10.009C13.7381 9.81027 13.6592 9.61969 13.5187 9.47918C13.3782 9.33867 13.1876 9.25973 12.9889 9.25973ZM12.9889 12.2567H6.99486C6.79614 12.2567 6.60557 12.3357 6.46506 12.4762C6.32454 12.6167 6.24561 12.8073 6.24561 13.006C6.24561 13.2047 6.32454 13.3953 6.46506 13.5358C6.60557 13.6763 6.79614 13.7552 6.99486 13.7552H12.9889C13.1876 13.7552 13.3782 13.6763 13.5187 13.5358C13.6592 13.3953 13.7381 13.2047 13.7381 13.006C13.7381 12.8073 13.6592 12.6167 13.5187 12.4762C13.3782 12.3357 13.1876 12.2567 12.9889 12.2567Z"
            fill="#D4D4D4"
          />
        </svg>
      ),
      Messages: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      Profile: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      Analytics: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      Close: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      Globe: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      )
    };

    return icons[name] || null;
  };

  return (
    <div className="fixed xl:right-[144px] 2xl:right-[350px] top-1/2 transform -translate-y-1/2 z-50">
      <motion.div className="w-[72px] bg-neutral-900 rounded-2xl outline outline-offset-[-1px] outline-white/10 backdrop-blur-md inline-flex flex-col justify-end items-center gap-4">
        {navItems.map((item, index) => (
          <motion.div key={item.id} className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            <motion.button className="w-10 h-10 bg-neutral-800 rounded-xl inline-flex justify-center items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconComponent name={item.icon} />
            </motion.button>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute left-16 top-1/2 pointer-events-none z-50"
                  style={{
                    translateY: '-50%'
                  }}
                  initial={{ opacity: 0, x: -10, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 260,
                      damping: 10
                    }
                  }}
                  exit={{ opacity: 0, x: -10, scale: 0.6 }}
                >
                  <div className="bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/50 shadow-xl">
                    <div className="text-sm font-medium text-white whitespace-nowrap">{item.label}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
