'use client';

import React, { useState } from 'react';
import { ArrowBigRight , ArrowBigLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { clsx } from 'clsx';

export interface CardListItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'destructive' | string;
  onClick?: () => void;
  stats?: string;
}

interface CardGridListProps {
  items: CardListItem[];
  title?: string;
  RTL?: boolean;
  subtitle?: string;
  columns?: 1 | 2 | 3;
}

export function CardGridList({ items, title, subtitle, columns = 2 , RTL }: CardGridListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  const colsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  }[columns];

//   const colorClasses = {
//     primary: 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40',
//     secondary: 'bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40',
//     accent: 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40',
//     destructive: 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20 hover:border-destructive/40',
//   };


const colorClasses = {
  primary: 'bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40',
  secondary: 'bg-linear-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40',
  accent: 'bg-linear-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40',
  destructive: 'bg-linear-to-br from-destructive/10 to-destructive/5 border-destructive/20 hover:border-destructive/40',
};

  return (
    <div className="min-w-full mx-auto p-6 bg-[#FAFAF0] rounded-3xl" dir={RTL ? 'rtl' : 'ltr'}>
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black bg_Gray">
            {title}
          </h2>
          {subtitle && (
            <p className="text-2xl text-muted-foreground font-black p-4">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={`grid sm:grid-cols-2 ${colsClass} gap-4`}>
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            // onClick={item.onClick}
            onClick={() => router.push(`/${RTL ? "ar" : "en"}/about_Us`)}
            className={`group relative p-6 rounded-lg border transition-all duration-300 cursor-pointer
              ${hoveredId === item.id ? 'shadow-lg -translate-y-1' : 'shadow-md'}
              ${colorClasses[(item.color || 'primary') as keyof typeof colorClasses]}
            `}
          >
            <div className="flex items-start justify-between mb-4">
              {item.icon && (
                <div className="rounded-full bg-background flex items-center justify-center">
                  {/* {item.icon} */}
                    <Image src="/Images/Gear_Gif.gif" alt="Icon 1" width={70} height={70}  
                      unoptimized={true} // 👈 Forces Next.js to treat it like a regular img tag
                     className="rounded-full" />
                    <Image src="/Images/Statistics (1).png" alt="Icon 1" width={70} height={70}  className="rounded-full" />
                </div>
              )}
              {item.stats && (
                <span className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-gray-500/20 to-gray-500/10 flex items-center justify-center font-black text-xl text-primary group-hover:scale-110 transition-transform duration-300 mr-0">
                  {item.stats}
                </span>
              )}
            </div>

            <h3 className="text-xl font-black mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {item.description}
            </p>

              <div className={clsx(
                "absolute bottom-4 right-4 text-xl font-black flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                RTL ? "flex-row-reverse" : "flex-row"
              )}>
                {RTL ? "المزيد" : "Learn More"}
                {RTL ? <ArrowBigLeft size={16} /> : <ArrowBigRight size={16} />}
              </div>
            {/* {item.onClick && (
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
