'use client';

import { Microscope } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export interface CardListItem {
  id: string;
  text: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CardUnorderedListProps {
  items: CardListItem[];
  title?: string;
  isRTL?: boolean;
  columns?: 1 | 2 | 3 | 4;
  variant?: 'bordered' | 'shadow' | 'filled' | string;
}

export function CardUnorderedList({
  items,
  title,
  isRTL = false,
  columns = 1,
  variant = 'bordered',
}: CardUnorderedListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  const gridClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[columns];

  const variantClass = {
    bordered: 'border border-border bg-white',
    shadow: 'border-0 bg-white shadow-sm hover:shadow-md',
    filled: 'border-0 bg-muted/50',
  }[variant];

  return (
    <div
      className="min-w-full mx-auto p-6"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {title && (
        <h2
          className={`text-2xl xs:text-3xl font-black bg_Gray mb-10 text-balance text-center`}
        >
          {title}
        </h2>
      )}

      <div className={`grid sm:grid-cols-2 md:grid-cols-3 ${gridClass} gap-5`}>
        {items.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => router.push(`/${isRTL ? "ar" : "en"}/about_Us`)}
            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${variantClass} ${
              hoveredId === item.id
                ? 'ring-2 ring-primary/50 scale-105'
                : 'hover:ring-1 hover:ring-primary/30'
            }`}
          >
            {/* Header */}
            <div className={`flex items-start justify-between gap-3 mb-3 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Bullet */}
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                {/* Badge */}
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {/* {item.badge} */}
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                )}
              </div>
              {item.icon && (
                <div className="text-primary shrink-0">
                  {/* {item.icon} */}
                  <Microscope className="w-7 h-7 font-black " />
                </div>
              )}
            </div>

            {/* Content */}
            <h3
              className={`text-xl font-black text-black mb-1`}
            >
              {item.text}
            </h3>
            {item.subtitle && (
              <p
                className={`text-sm text-muted-foreground ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {item.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardUnorderedList;
