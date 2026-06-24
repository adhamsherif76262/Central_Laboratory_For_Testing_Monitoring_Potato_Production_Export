'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export interface AccentListItem {
  id: string;
  text: string;
  accent?: string;
}

interface AccentHighlightListProps {
  items: AccentListItem[];
  title?: string;
  direction?: 'ltr' | 'rtl';
  accentColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'destructive';
  variant?: 'underline' | 'dot-prefix' | 'bold-accent' | 'gradient-accent';
}

export function AccentHighlightList({
  items,
  title,
  direction = 'ltr',
  accentColor = 'primary',
  variant = 'underline',
}: AccentHighlightListProps) {
  const accentColorMap = {
    primary: 'from-primary to-primary/80',
    secondary: 'from-secondary to-secondary/80',
    accent: 'from-accent to-accent/80',
    success: 'from-green-500 to-green-600',
    warning: 'from-yellow-500 to-yellow-600',
    destructive: 'from-destructive to-destructive/80',
  };

  const router = useRouter();
  const getHighlightedText = (text: string) => {
    const accentMatch = text.match(/\*\*(.*?)\*\*/);
    if (!accentMatch) return <span>{text}</span>;

    const beforeAccent = text.substring(0, accentMatch.index);
    const accentText = accentMatch[1];
    const afterAccent = text.substring(accentMatch.index! + accentMatch[0].length);

    return (
      <>
        <span>{beforeAccent}</span>
        <span className={`bg-gradient-to-r ${accentColorMap[accentColor]} bg-clip-text text-transparent font-black`}>
          {accentText}
        </span>
        <span>{afterAccent}</span>
      </>
    );
  };

  if (variant === 'dot-prefix') {
    return (
      <div className={`max-w-3xl mx-auto p-6 ${direction === 'rtl' ? 'text-right' : ''}`}>
        {title && (
          <h2 className={`text-3xl font-bold text-foreground mb-8 text-balance ${direction === 'rtl' ? 'text-right' : ''}`}>
            {title}
          </h2>
        )}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 group ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-3 bg-gradient-to-r ${accentColorMap[accentColor]} group-hover:scale-125 transition-transform duration-300`}></div>
              <p className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {getHighlightedText(item.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'bold-accent') {
    return (
      <div className={`max-w-3xl mx-auto p-6 ${direction === 'rtl' ? 'text-right' : ''}`}>
        {title && (
          <h2 className={`text-3xl font-bold text-foreground mb-8 text-balance ${direction === 'rtl' ? 'text-right' : ''}`}>
            {title}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-3 group ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex-shrink-0 mt-1 px-3 py-1.5 rounded-md bg-gradient-to-r ${accentColorMap[accentColor]} text-white text-xs font-bold`}>
                ✓
              </div>
              <p className="text-base leading-relaxed text-foreground pt-1">
                {getHighlightedText(item.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'gradient-accent') {
    return (
      <div className={`max-w-s3xl mx-auto p-8 ${direction === 'rtl' ? 'text-right' : ''}`}>
        {title && (
          <h2 className={`text-4xl font-black bg-gradient-to-r ${accentColorMap[accentColor]} bg-clip-text text-transparent mb-10 text-balance`}>
            {title}
          </h2>
        )}
        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative pl-6 pr-4 py-4 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group ${direction === 'rtl' ? 'pr-6 pl-4' : ''}`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full rounded-l-lg bg-gradient-to-b ${accentColorMap[accentColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${direction === 'rtl' ? 'left-auto right-0 rounded-l-none rounded-r-lg' : ''}`}></div>
              <p className="text-base leading-relaxed text-foreground">
                {getHighlightedText(item.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: underline variant
  return (
    <div className={`max-w-s3xl mx-auto p-10 ${direction === 'rtl' ? 'text-right' : ''}`}>
      {title && (
        <h2 className={`text-3xl font-bold text-foreground mb-8 text-balance ${direction === 'rtl' ? 'text-right' : ''}`}>
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {items.map((item , index) => (
          <div key={item.id} className={`group cursor-pointer ${direction === 'rtl' ? 'text-right' : ''}`}
            onClick={() => router.push(`/${direction ? "ar" : "en"}/services`)}>
            <p className={`text-xl font-black leading-relaxed relative inline-block hover:animate-pulse`}>
              {`${index+1} -`} {getHighlightedText(item.text)}
              <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${accentColorMap[accentColor]} w-0 group-hover:w-full transition-all duration-500 ease-out ${direction === 'rtl' ? 'left-auto right-0' : ''}`}></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccentHighlightList;
