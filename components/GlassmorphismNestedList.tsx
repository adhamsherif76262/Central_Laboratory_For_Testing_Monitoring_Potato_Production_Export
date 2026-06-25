// 'use client';

// import React, { JSX, useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// interface NestedItem {
//   id: string;
//   label: string;
//   labelAr?: string;
//   children?: NestedItem[];
// }

// interface GlassmorphismNestedListProps {
//   items: NestedItem[];
//   isRTL?: boolean;
// }

// export function GlassmorphismNestedList({ items, isRTL = false }: GlassmorphismNestedListProps) {
//   const [expanded, setExpanded] = useState<Set<string>>(new Set(items.map(item => item.id)));
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   const toggleExpand = (id: string) => {
//     const newExpanded = new Set(expanded);
//     if (newExpanded.has(id)) {
//       newExpanded.delete(id);
//     } else {
//       newExpanded.add(id);
//     }
//     setExpanded(newExpanded);
//   };

//   const getLevelColors = (level: number) => {
//     const colors = [
//       { gradient: 'from-blue-500/40 to-purple-500/40', border: 'border-blue-400/50', blur: 'backdrop-blur-md' },
//       { gradient: 'from-purple-500/30 to-pink-500/30', border: 'border-purple-400/40', blur: 'backdrop-blur-lg' },
//       { gradient: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-400/30', blur: 'backdrop-blur-xl' },
//     ];
//     return colors[Math.min(level, 2)];
//   };

//   const renderItems = (items: NestedItem[] | undefined, level: number = 0): JSX.Element => {
//     const colors = getLevelColors(level);
//     const paddingClass = level === 0 ? 'p-0' : isRTL ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8';

//     return (
//       <div className={`space-y-4 ${paddingClass}`}>
//         {items?.map((item) => {
//           const isExpanded = expanded.has(item.id);
//           const hasChildren = item.children && item.children.length > 0;
//           const isHovered = hoveredId === item.id;

//           return (
//             <div
//               key={item.id}
//               className="space-y-3"
//               onMouseEnter={() => setHoveredId(item.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Glassmorphic Card */}
//               <button
//                 onClick={() => hasChildren && toggleExpand(item.id)}
//                 className={`w-full group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-default
//                   ${colors.blur} ${colors.border} ${colors.gradient}
//                   hover:shadow-xl hover:border-opacity-100
//                   ${isHovered ? 'shadow-2xl scale-105' : 'scale-100'}
//                   ${isExpanded && hasChildren ? 'shadow-lg' : ''}
//                 `}
//                 disabled={!hasChildren}
//                 style={{
//                   background: `linear-gradient(135deg, ${level === 0 ? 'rgba(59, 130, 246, 0.4)' : level === 1 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(236, 72, 153, 0.2)'}, ${level === 0 ? 'rgba(147, 51, 234, 0.4)' : level === 1 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(244, 63, 94, 0.2)'})`,
//                 }}
//               >
//                 {/* Animated Background Glow */}
//                 <div
//                   className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
//                     bg-gradient-to-r from-transparent via-white/10 to-transparent
//                   `}
//                 />

//                 {/* Content */}
//                 <div className={`relative p-4 md:p-6 flex items-center justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
//                   <div className={`flex-1 text-left ${isRTL ? 'text-right' : ''}`}>
//                     <p className={`font-bold text-sm md:text-base text-white drop-shadow-lg transition-all duration-300
//                       ${isHovered ? 'text-lg' : ''}
//                     `}>
//                       {isRTL && item.labelAr ? item.labelAr : item.label}
//                     </p>
//                     {hasChildren && (
//                       <p className="text-xs md:text-sm text-white/70 mt-1.5 drop-shadow transition-all duration-300">
//                         {item.children?.length} nested {item.children?.length === 1 ? 'item' : 'items'}
//                       </p>
//                     )}
//                   </div>

//                   {/* Interactive Badge & Icon */}
//                   {hasChildren && (
//                     <div className="flex items-center gap-3 flex-shrink-0">
//                       <span className="text-xs md:text-sm font-bold rounded-full px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 hover:bg-white/30">
//                         {item.children?.length}
//                       </span>
//                       <ChevronDown
//                         className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-500 drop-shadow
//                           ${isExpanded ? 'rotate-180' : ''}
//                           ${isHovered ? 'scale-125' : ''}
//                         `}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* Shine Effect */}
//                 <div className="absolute inset-0 -top-2 -left-1 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
//               </button>

//               {/* Expanded Children with Staggered Animation */}
//               {hasChildren && isExpanded && (
//                 <div
//                   className={`space-y-3 transition-all duration-500 ease-out overflow-hidden`}
//                   style={{
//                     animation: 'slideDown 0.5s ease-out',
//                   }}
//                 >
//                   {renderItems(item.children, level + 1)}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={`w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'}`}>
//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//       <div className="max-w-4xl mx-auto">
//         {renderItems(items)}
//       </div>
//     </div>
//   );
// }

// export default GlassmorphismNestedList;




'use client';

import React, { JSX, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NestedItem {
  id: string;
  label: string;
  labelAr?: string;
  children?: NestedItem[];
}

interface GlassmorphismNestedListProps {
  items: NestedItem[];
  isRTL?: boolean;
}

export function GlassmorphismNestedList({ items, isRTL = false }: GlassmorphismNestedListProps) {
//   const [expanded, setExpanded] = useState<Set<string>>(new Set(items.map(item => item.id)));

// Expand all items by default
// const [expanded, setExpanded] = useState<Set<string>>(() => 
//     new Set(items.map(item => item.id))
// ); 

// COLLAPSE all items by default
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  const getLevelColors = (level: number) => {
    const colors = [
      {
        gradient: 'from-blue-400 to-cyan-500',
        border: 'border-blue-500',
        text: 'text-blue-900',
        bg: 'bg-blue-50',
        badge: 'bg-blue-200 text-blue-900 border-blue-500',
      },
      {
        gradient: 'from-teal-400 to-emerald-500',
        border: 'border-teal-500',
        text: 'text-teal-900',
        bg: 'bg-teal-50',
        badge: 'bg-teal-200 text-teal-900 border-teal-500',
      },
      {
        gradient: 'from-indigo-400 to-purple-500',
        border: 'border-indigo-500',
        text: 'text-indigo-900',
        bg: 'bg-indigo-50',
        badge: 'bg-indigo-200 text-indigo-900 border-indigo-500',
      },
    ];
    return colors[Math.min(level, 2)];
  };

  const renderItems = (items: NestedItem[] | undefined, level: number = 0): JSX.Element => {
    const colors = getLevelColors(level);
    const paddingClass = level === 0 ? 'p-0' : isRTL ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8';

    return (
      <div className={`space-y-4 ${paddingClass}`}>
        {items?.map((item) => {
          const isExpanded = expanded.has(item.id);
          const hasChildren = item.children && item.children.length > 0;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="space-y-3"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glassmorphic Card */}
              <button
                onClick={() => hasChildren && toggleExpand(item.id)}
                className={`w-full group relative overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg} transition-all duration-500 disabled:opacitsy-50 disabled:cursor-default
                  hover:shadow-xl hover:border-opacity-100
                  ${isHovered ? 'shadow-2xl scale-105' : 'scale-100'}
                  ${isExpanded && hasChildren ? 'shadow-lg' : ''}
                `}
                disabled={!hasChildren}
              >
                {/* Animated Gradient Border */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                    bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none
                  `}
                />

                {/* Content */}
                <div className={`relative p-4 md:p-6 flex items-center justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-1 text-left ${isRTL ? 'text-right' : ''}`}>
                    <p className={`font-bold text-sm md:text-base ${colors.text} transition-all duration-300
                      ${isHovered ? 'text-lg' : ''}
                    `}>
                      {isRTL && item.labelAr ? item.labelAr : item.label}
                    </p>
                    {hasChildren && (
                      <p className={`text-xs md:text-sm mt-1.5 font-medium transition-all duration-300`}
                        style={{ color: colors.text }}
                      >
                        {item.children?.length} nested {item.children?.length === 1 ? 'item' : 'items'}
                      </p>
                    )}
                  </div>

                  {/* Interactive Badge & Icon */}
                  {hasChildren && (
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs md:text-sm font-bold rounded-full px-3 py-1.5 border-2 transition-all duration-300 ${colors.badge}`}>
                        {item.children?.length}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500
                          ${isExpanded ? 'rotate-180' : ''}
                          ${isHovered ? 'scale-125' : ''}
                        `}
                        style={{ color: colors.text }}
                      />
                    </div>
                  )}
                </div>
              </button>

              {/* Expanded Children with Animation */}
              {hasChildren && (
                <div
                  className={`space-y-3 overflow-hidden relative`}
                  style={{
                    maxHeight: isExpanded ? '2000px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    pointerEvents: isExpanded ? 'auto' : 'none',
                    transition: 'max-height 0.4s ease-out, opacity 0.4s ease-out',
                  }}
                >
                  {renderItems(item.children, level + 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`w-full min-h-screen p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'} bg-[#FAFAF0] bg-gray-300`} 
    // style={{ backgroundColor: 'rgb(255, 245, 204)' }}
    >
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        {renderItems(items)}
      </div>
    </div>
  );
}

export default GlassmorphismNestedList;
