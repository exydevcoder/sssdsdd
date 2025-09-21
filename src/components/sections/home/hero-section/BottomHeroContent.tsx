'use client';

import { BrandDesignIcon, EmailIcon, MotionDesignIcon, ProductDesignIcon, StarIcon, UiUxDesignIcon, WebDevelopmentIcon } from '@/components/icon';
import { Button } from '@/components/ui/button';

export default function BottomHeroContent() {
  const topRow = [
    { title: 'UI/UX Design', icon: <UiUxDesignIcon /> },
    { title: 'Product Design', icon: <ProductDesignIcon /> },
    { title: 'Motion Design', icon: <MotionDesignIcon /> }
  ];

  const bottomRow = [
    { title: 'Brand Design & Strategy', icon: <BrandDesignIcon /> },
    { title: 'Web Development (Low-Code + AI)', icon: <WebDevelopmentIcon /> }
  ];

  return (
    <section className="section border py-[256px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="justify-center text-white text-4xl font-medium leading-[48px]">Senior UI/UX & Product Designer.</h1>
          <p className="max-w-[580px] text-center justify-center text-neutral-400 text-lg font-normal leading-7">
            I design scalable, aesthetic digital experiences across brand, product, and web, driven by strategy and clean execution.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            {topRow.map((item, idx) => (
              <div key={idx} className="max-w-full flex items-center gap-2 bg-[#121212] border border-white/10 rounded-[6px] px-[13px] py-[7px]">
                {item.icon}
                <span className="justify-center text-neutral-400 text-xs font-normal leading-1.5">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Columns */}
          <div className="flex items-center justify-center gap-2">
            {bottomRow.map((item, idx) => (
              <div key={idx} className="max-w-full flex items-center gap-2 bg-[#121212] border border-white/10 rounded-[6px] px-[13px] py-[7px]">
                {item.icon}
                <span className="justify-center text-neutral-400 text-xs font-normal leading-1.5">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant="customBtn">
            <StarIcon />
            <span>View My Work</span>
          </Button>
          <Button variant="customBtn" className="w-[119px] bg-neutral-900 border border-white/10">
            <EmailIcon />
            <span className="text-white">Let's Talk</span>
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="animated-border-card">
            <div className="card-content flex">
              <div className="max-w-full pr-7">
                <h3 className="text-emerald-300 text-3xl font-medium">10+</h3>
                <span className="text-zinc-500 text-xs font-normal">Years Experience</span>
              </div>
              <div className="max-w-full pr-7">
                <h3 className="text-emerald-300 text-3xl font-medium">50+</h3>
                <span className="text-zinc-500 text-xs font-normal">Projects Completed</span>
              </div>
              <div className="max-w-full">
                <h3 className="text-emerald-300 text-3xl font-medium">100%</h3>
                <span className="text-zinc-500 text-xs font-normal">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-3 rounded-xl"></div>
      </div>

      <style jsx>{`
        .animated-border-card {
          position: relative;
          width: 388px;
          height: 105px;
          border-radius: 12px;
          --border-size: 1px;
          --angle: 0deg;
          --opacity: 0.5;
        }

        .animated-border-card::before {
          content: '';
          position: absolute;
          inset: calc(-1 * var(--border-size));
          border-radius: inherit;
          padding: var(--border-size);
          background: conic-gradient(
            from var(--angle),
            #CCF544 0deg 30deg,
            #6EE7B7 30deg 132deg,
            #CCF544 200deg 200deg,
            #FFFFFF11 220deg 360deg
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          opacity: var(--opacity);
          animation: rotate 20s linear infinite, opacityChange 3s infinite alternate;
        }

        .card-content {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          background: rgb(23 23 23); /* bg-neutral-900 equivalent */
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(12px);
        }

        @property --opacity {
          syntax: '<number>';
          initial-value: 0.5;
          inherits: false;
        }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes opacityChange {
          to {
            --opacity: 1;
          }
        }

        @keyframes rotate {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </section>
  );
}