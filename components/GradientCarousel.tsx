'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface GradientItem {
  id: string;
  title: string;
  description: string;
  gradient: string;
  icon: string;
  image: string;
}

interface GradientCarouselProps {
  items: GradientItem[];
  sectionTitle?: string;
}

type AnimationType = 'slideUp' | 'fadeScale' | 'rotateIn' | 'flipSlide';

export function GradientCarousel({ items , sectionTitle = "" }: GradientCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState<AnimationType | string>('slideUp');

  // Autoplay with random animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      const animations: AnimationType[] = ['slideUp', 'fadeScale', 'rotateIn', 'flipSlide'];
      // let lastIndex: number = -1;

// function getUniqueAnimation(animationsArray: string[]): string {
//     const len: number = animationsArray.length;
    
//     if (len <= 1) {
//         return animationsArray[0] || "";
//     }

//     const poolSize: number = lastIndex === -1 ? len : len - 1;
//     let newIndex: number = Math.floor(Math.random() * poolSize);

//     if (lastIndex !== -1 && newIndex >= lastIndex) {
//         newIndex++;
//     }

//     lastIndex = newIndex;
//     return animationsArray[newIndex];
// }

// // Usage:
// setAnimationType(getUniqueAnimation(animations));

      setAnimationType(animations[Math.floor(Math.random() * animations.length)]);
      
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 500);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const animations: AnimationType[] = ['slideUp', 'fadeScale', 'rotateIn', 'flipSlide'];
    setAnimationType(animations[Math.floor(Math.random() * animations.length)]);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const animations: AnimationType[] = ['slideUp', 'fadeScale', 'rotateIn', 'flipSlide'];
    setAnimationType(animations[Math.floor(Math.random() * animations.length)]);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setIsAnimating(false);
    }, 500);
  };

  const getVisibleItems = (baseIndex: number) => {
    return [
      items[(baseIndex - 1 + items.length) % items.length],
      items[baseIndex],
      items[(baseIndex + 1) % items.length],
    ];
  };

  const visible = getVisibleItems(activeIndex);

  const getAnimationClass = () => {
    switch(animationType) {
      case 'slideUp':
        return 'transition-all duration-500 ease-out';
      case 'fadeScale':
        return 'transition-all duration-500 ease-in-out';
      case 'rotateIn':
        return 'transition-all duration-500 ease-out';
      case 'flipSlide':
        return 'transition-all duration-500 ease-in-out';
      default:
        return 'transition-all duration-500';
    }
  };

  const getAnimationStyle = () => {
    if (!isAnimating) {
      switch(animationType) {
        case 'slideUp':
          return { transform: 'translateY(0)', opacity: 1 };
        case 'fadeScale':
          return { transform: 'scale(1)', opacity: 1 };
        case 'rotateIn':
          return { transform: 'rotateY(0deg)', opacity: 1 };
        case 'flipSlide':
          return { transform: 'rotateX(0deg) translateY(0)', opacity: 1 };
        default:
          return { opacity: 1 };
      }
    }
    
    switch(animationType) {
      case 'slideUp':
        return { transform: 'translateY(40px)', opacity: 0 };
      case 'fadeScale':
        return { transform: 'scale(0.9)', opacity: 0 };
      case 'rotateIn':
        return { transform: 'rotateY(90deg)', opacity: 0 };
      case 'flipSlide':
        return { transform: 'rotateX(90deg) translateY(-20px)', opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className="w-full bg-[#FAFsAF0] mb-10 rounded-3xl flex flex-col items-center justify-center">
      <div className="sm:max-w-[550px] md:max-w-[600px] xlg:max-w-3xl lg:max-w-4xl xl:max-w-6xl w-full">
        {/* Header */}
        {
            sectionTitle && (
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    Gradient Carousel
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                </div>
            )
        }

        {/* Carousel */}
        <div className="relative w-full">
          <div className="hidden sm:flex flex-col items-center justify-center gap-4">
            {/* Top Item (small, desktop only) */}
            {
                visible[0].title && (
            <div className="w-full max-w-xs opacity-40 transform scale-75">
              <div className={`h-24 rounded-2xl bg-gradient-to-br ${visible[0].gradient} shadow-lg flex items-center justify-center text-white/60 text-sm font-medium`}>
                {visible[0].title}
              </div>
            </div>
                )
            }

            {/* Middle Item (large, active) */}
            <div className="w-full max-w-msd">
              <div
                className={`sm:min-h-[300px] md:min-h-[350px] xlg:min-h-[450px] lg:min-h-[500px] xl:min-h-[650px] rounded-3xl bg-cover bg-center shadow-2xl p-2  flex flex-col justify-between text-white ${getAnimationClass()}`}
                style={{
                //   backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${visible[1].image}')`,
                  backgroundImage: `url('${visible[1].image}')`,
                  ...getAnimationStyle(),
                }}
              >
                <div>
                  <div className="text-5xl md:text-6xl mb-4">{visible[1].icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{visible[1].title}</h2>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
                    {visible[1].description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-between items-end">
                  <div className="hidden sm:flex gap-2">
                    {items.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all ${
                          i === activeIndex ? 'w-8 bg-white' : 'w-2 bg-black'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-black font-black text-2xl bg-white/60 px-4 py-2 rounded-full">
                    {activeIndex + 1} / {items.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Item (small, desktop only) */}
            {
                visible[2].title && (
                    <div className="w-full max-w-xs opacity-40 transform scale-75">
                      <div className={`h-24 rounded-2xl bg-gradient-to-br ${visible[2].gradient} shadow-lg flex items-center justify-center text-white/60 text-sm font-medium`}>
                        {visible[2].title}
                      </div>
                    </div>
                )
            }
            </div>

          {/* Mobile View */}
          <div className="sm:hidden flex flex-col items-center justify-center gap-4">
            {/* Middle Item (full width on mobile) */}
            <div className="xxxs:min-w-[300px] xxs:min-w-[350px] xs:min-w-[450px]">
              <div
                className={`xxxs:min-h-[175px] xxs:min-h-[200px] xs:min-h-[250px] xxs:rounded-3xl bg-cover bg-center shadow-2xl p-6 flex flex-col justify-between text-white ${getAnimationClass()}`}
                style={{
                //   backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${visible[1].image}')`,
                  backgroundImage: `url('${visible[1].image}')`,
                  ...getAnimationStyle(),
                }}
              >
                <div>
                  <div className="text-4xl mb-3">{visible[1].icon}</div>
                  <h2 className="text-2xl font-bold mb-3">{visible[1].title}</h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {visible[1].description}
                  </p>
                </div>

                {/* Numerical Indicator (centered) */}
                <div className="flex justify-center items-center">
                  <div className="text-white/80 text-sm font-medium">
                    {activeIndex + 1} / {items.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="cursor-pointer hidden sm:block absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="cursor-pointer hidden sm:block absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white transition-all"
          >
            <ChevronDown className="w-6 h-6" />
          </button>

          {/* Navigation Buttons - Mobile (Bottom) */}
          <div className="sm:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={goToPrev}
              disabled={isAnimating}
              className="cursor-pointer p-2 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white transition-all"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="cursor-pointer p-2 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white transition-all"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Section */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
          <div>
            <div className="font-semibold text-foreground">Unique</div>
            <p>5 distinct gradient designs</p>
          </div>
          <div>
            <div className="font-semibold text-foreground">Responsive</div>
            <p>Works on all screen sizes</p>
          </div>
          <div>
            <div className="font-semibold text-foreground">Smooth</div>
            <p>Premium animations</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
