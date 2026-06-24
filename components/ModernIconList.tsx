'use client';

import React from 'react';
import { CheckCircle2, Square, Circle, Zap } from 'lucide-react';

export interface IconListItem {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

interface ModernIconListProps {
  items: IconListItem[];
  title?: string;
  RTL?: boolean;
  variant?: 'check' | 'square' | 'circle' | 'zap' | 'custom' | string;
  animateOnHover?: boolean;
}

export function ModernIconList({
  items,
  title,
  RTL = true,
  variant = 'check',
  animateOnHover = true,
}: ModernIconListProps) {
  const getIcon = (index: number, customIcon?: React.ReactNode) => {
    if (customIcon) return customIcon;

    const iconProps = 'h-5 w-5 flex-shrink-0';

    switch (variant) {
      case 'square':
        return <Square className={`${iconProps} text-primary`} strokeWidth={1.5} />;
      case 'circle':
        return <Circle className={`${iconProps} text-primary`} strokeWidth={1.5} />;
      case 'zap':
        return <Zap className={`${iconProps} text-primary`} strokeWidth={1.5} />;
      case 'check':
      default:
        return <CheckCircle2 className={`${iconProps} text-primary`} strokeWidth={1.5} />;
    }
  };

  return (
    <div dir={RTL ? "rtl" : "ltr"}  className={`bg-[#FAFAF0] rounded-3xl mx-auto p-8`}>
      {title && (
        <h2 className={`text-2xl xs:text-3xl font-black mb-10 text-center bg_Gray`}>
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 px-2 py-2 xs:rounded-full transition-all duration-300 ${
              animateOnHover ? 'hover:bg-primary/10 hover:cursor-pointer hover:translate-x-1 group' : ''
            }`}
          >
            <div className={`shrink-0 pt-2 ${animateOnHover ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
              {getIcon(index, item.icon)}
            </div>
            <p className="text-black font-black leading-relaxed text-xl flex-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernIconList;
