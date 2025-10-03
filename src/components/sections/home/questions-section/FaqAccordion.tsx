import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQAccordion() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What types of clients do you usually work with?',
      answer:
        "I work with startups, scale-ups, and established businesses that need design delivered quickly and at a high standard. Whether you're validating an idea or scaling a product, I adapt my process to match your pace, helping you move forward faster than a traditional agency."
    },
    {
      id: 'item-2',
      question: 'How long does a typical project take?',
      answer:
        'I deliver faster than traditional agencies while maintaining a high-quality experience. By leveraging modern design tools and streamlined workflows, I complete projects in days or weeks, not months, depending on complexity.'
    },
    {
      id: 'item-3',
      question: 'What deliverables will I receive?',
      answer:
        'You’ll receive launch-ready deliverables designed for speed and clarity: research insights, UX flows, clickable prototypes, polished UI systems, brand guidelines, motion assets, and developer-ready files with clean documentation. Everything is packaged so your team can test, iterate, and ship quickly, often 2–3x faster than agencies.'
    },
    {
      id: 'item-4',
      question: 'What are your rates and engagement models?',
      answer: (
        <>
          I keep things flexible. You can engage me on a project basis, hourly, or through sprints/retainers, depending on what works best for your team. Because I work faster than agencies, you pay
          for results delivered sooner, not bloated overhead. For details, you can check <span className="text-emerald-300">my rate card</span> or reach out if you’d like a custom quote tailored to
          your project.
        </>
      )
    },
    {
      id: 'item-5',
      question: 'How do we get started?',
      answer: (
        <>
          Getting started is simple: <span className="text-emerald-300">email me, book a 30-minute intro</span>, or <span className="text-emerald-300">send me a quick WhatsApp message</span>. Share
          your goals and timelines, and I can usually begin within a few days. The sooner we connect, the sooner you’ll have results in hand.
        </>
      )
    }
  ];

  return (
    <div className="w-[602px]">
      <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
        {faqItems.map(item => (
          <AccordionItem key={item.id} value={item.id} className="bg-neutral-900 rounded-xl border-white/10">
            <AccordionTrigger className="p-4 cursor-pointer text-left text-white text-sm sm:text-lg font-light leading-[20px] hover:no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="p-4 text-stone-500 text-base font-normal leading-[24px]">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
