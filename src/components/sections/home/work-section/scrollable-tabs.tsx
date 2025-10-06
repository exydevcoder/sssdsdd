'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowIcon } from '@/components/icon';
import ProductDesign from './works-contents/product-design/ProductDesign';
import WebDesign from './works-contents/web-design/WebDesign';
import BrandDesign from './works-contents/brand-design/BrandDesign';
import MotionAndInteraction from './works-contents/motion-and-interaction/MotionAndInteraction';
import IllustrationVisualAssets from './works-contents/illustration-visual-assets/IllustrationVisualAssets';
import PrintOfflineDesign from './works-contents/print-offline-design/PrintOfflineDesign';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'product-design',
    label: 'Product Design',
    content: <ProductDesign />
  },
  {
    id: 'web-design',
    label: 'Web Design',
    content: <WebDesign />
  },
  {
    id: 'brand-design',
    label: 'Brand Design',
    content: <BrandDesign />
  },
  {
    id: 'motion-and-interaction',
    label: 'Motion & Interaction',
    content: <MotionAndInteraction />
  },
  {
    id: 'illustration-visual-assets',
    label: 'Illustration & Visual Assets',
    content: <IllustrationVisualAssets />
  },
  {
    id: 'print-offline-design',
    label: 'Print & Offline Design',
    content: <PrintOfflineDesign />
  },
];

export default function ScrollableTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="shadow-lg overflow-hidden">
        {/* Tabs Header */}
        <div className="relative max-w-[906px] mx-auto">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute cursor-pointer left-0 top-0 bottom-0 z-10 px-2 bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/60 flex items-center"
              aria-label="Scroll left"
            >
              <ArrowIcon className="rotate-180" />
            </button>
          )}

          {/* Scrollable Tabs */}
          <div ref={scrollContainerRef} onScroll={checkScroll} className="flex gap-3 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer h-9 px-3 py-1.5 rounded-xl outline outline-offset-[-1px] outline-white/10 flex justify-center items-center gap-2 text-sm font-medium leading-[20px] transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'text-emerald-300 bg-zinc-900' : 'text-stone-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute cursor-pointer right-0 top-0 bottom-0 z-10 px-2 bg-gradient-to-r from-[#0A0A0A]/60 to-[#0A0A0A] flex items-center"
              aria-label="Scroll right"
            >
              <ArrowIcon />
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] pt-13">{activeTabContent}</div>
      </div>
    </div>
  );
}
