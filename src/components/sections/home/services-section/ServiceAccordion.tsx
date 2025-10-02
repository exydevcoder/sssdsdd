'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { CheckedIcon } from '@/components/icon';
import img1 from '../../../../assets/services/1.png';
import img2 from '../../../../assets/services/2.png';
import img3 from '../../../../assets/services/3.png';

interface Service {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
}

const services: Service[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'DESIGNING DIGITAL & PHYSICAL PRODUCTS THAT PEOPLE LOVE',
    image: img1,
    features: [
      'User Research & Strategy',
      'UX Flows & Prototypes',
      'UI Design & Design Systems',
      'Responsive & Accessible Interfaces',
      'Motion & Micro-interactions',
      'Developer Handoff & QA',
      'Post-launch Testing & Iteration'
    ]
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    description: 'Creating strategy and identity that connect with The right audience',
    image: img2,
    features: [
      'Brand Discovery & Positioning',
      'Voice, Messaging & Storytelling',
      'Logo, Identity & Guidelines',
      'Collateral & Packaging',
      'Social & Digital Branding',
      'Launch Campaigns & Brand Audits'
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Building smarter, faster, and Scalable web experiences',
    image: img3,
    features: [
      'Web Strategy & Architecture',
      'UX/UI Web Design',
      'Webflow, Framer, Shopify Builds',
      'Landing Pages & CMS Solutions',
      'AI Content & Personalization',
      'Chatbots, Automations & Analytics',
      'SEO, CRO & Performance Tuning'
    ]
  }
];

export default function ServiceAccordion() {
  const [activeService, setActiveService] = useState('product-design');
  const [mobileOpenServices, setMobileOpenServices] = useState(['product-design']);

  const toggleMobileService = (serviceId: string) => {
  setMobileOpenServices(prev =>
    prev.includes(serviceId)
      ? prev.filter(id => id !== serviceId)
      : [serviceId]
  );
};

  return (
    <div className="px-6 lg:px-16 py-8 sm:py-20 lg:py-32 bg-neutral-900 rounded-3xl outline outline-offset-[-1px] outline-white/10">
      {/* Mobile Accordion Layout */}
      <div className="block lg:hidden space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut'
            }}
            className="border-b border-white/10 pb-6 last:border-b-0"
          >
            {/* Mobile Service Header */}
            <button
              onClick={() => toggleMobileService(service.id)}
              className="w-full text-left group"
            >
              <h2
                className={`text-3xl sm:text-4xl leading-tight transition-all duration-300 ${
                  mobileOpenServices.includes(service.id)
                    ? 'text-white font-light'
                    : 'text-white/60 font-thin'
                }`}
              >
                {service.title}
              </h2>
            </button>

            {/* Mobile Service Content */}
            <AnimatePresence>
              {mobileOpenServices.includes(service.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-6">
                    {/* Image */}
                    <motion.div
                      className="overflow-hidden rounded-2xl"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={384}
                        height={256}
                        className="w-full object-cover"
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.h3
                      className="text-white text-base sm:text-lg font-medium uppercase leading-7"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {service.description}
                    </motion.h3>

                    {/* Features */}
                    <motion.ul
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.35 + idx * 0.05
                          }}
                        >
                          <CheckedIcon />
                          <span className="text-neutral-400 text-sm font-normal leading-tight">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Desktop Side-by-Side Layout */}
      <div className="hidden lg:grid w-full grid-cols-2 gap-16">
        {/* Left side - Service titles */}
        <div className="flex flex-col space-y-7">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut'
              }}
              onClick={() => setActiveService(service.id)}
              className="cursor-pointer group relative text-left transition-all duration-300"
            >
              <motion.h2
                className={`text-white text-6xl leading-[86px] transition-all duration-500 ${
                  activeService === service.id ? 'text-white font-light' : 'text-white/40 font-thin'
                }`}
                initial={false}
                animate={{
                  opacity: activeService === service.id ? 1 : 0.3
                }}
              >
                {service.title}
              </motion.h2>
              {/* Underline indicator */}
              <motion.div
                className="mt-4 h-px bg-white/10"
                initial={false}
                animate={{
                  scaleX: activeService === service.id ? 1 : 0.5,
                  opacity: activeService === service.id ? 1 : 0.3
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Right side - Service details */}
        <div className="flex items-center xl:pr-7 2xl:pr-15">
          <AnimatePresence mode="wait">
            {services.map(
              service =>
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full flex flex-col gap-6"
                  >
                    {/* Image */}
                    <motion.div
                      className="overflow-hidden rounded-3xl"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={384}
                        height={245}
                        className="w-full object-cover"
                        priority={activeService === service.id}
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.h3
                      className="max-w-[384px] text-white text-lg font-medium uppercase leading-7"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {service.description}
                    </motion.h3>

                    {/* Features list */}
                    <motion.ul
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.08
                          }}
                        >
                          <CheckedIcon />
                          <span className="text-neutral-400 text-sm font-normal leading-tight">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}