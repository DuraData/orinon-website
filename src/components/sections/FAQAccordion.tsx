import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';

import type { FaqItem } from '../../types';
import { Card } from '../ui/Card';

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <Card key={item.question} className="overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="font-display text-lg font-semibold text-ink">{item.question}</span>
              <HiOutlinePlus
                className={`shrink-0 text-2xl text-brand-700 transition ${
                  open ? 'rotate-45' : ''
                }`}
              />
            </button>
            <div className={`${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid transition-all duration-300`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-muted">{item.answer}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
