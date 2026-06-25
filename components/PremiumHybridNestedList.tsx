// 'use client';

// import React, { JSX, useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// interface NestedItem {
//   id: string;
//   label: string;
//   labelAr?: string;
//   children?: NestedItem[];
// }

// interface PremiumHybridNestedListProps {
//   items: NestedItem[];
//   isRTL?: boolean;
// }

// export function PremiumHybridNestedList({ items, isRTL = false }: PremiumHybridNestedListProps) {
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

//   const getStylesByLevel = (level: number) => {
//     const styles = [
//       {
//         bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
//         border: 'border-blue-300',
//         accent: 'bg-gradient-to-r from-blue-500 to-blue-600',
//         text: 'text-blue-700',
//         badge: 'bg-blue-100 text-blue-700 border-blue-300',
//         hoverBg: 'hover:from-blue-100 hover:to-blue-200/60',
//       },
//       {
//         bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
//         border: 'border-purple-300',
//         accent: 'bg-gradient-to-r from-purple-500 to-purple-600',
//         text: 'text-purple-700',
//         badge: 'bg-purple-100 text-purple-700 border-purple-300',
//         hoverBg: 'hover:from-purple-100 hover:to-purple-200/60',
//       },
//       {
//         bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50',
//         border: 'border-emerald-300',
//         accent: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
//         text: 'text-emerald-700',
//         badge: 'bg-emerald-100 text-emerald-700 border-emerald-300',
//         hoverBg: 'hover:from-emerald-100 hover:to-emerald-200/60',
//       },
//     ];
//     return styles[Math.min(level, 2)];
//   };

//   const renderItems = (items: NestedItem[] | undefined, level: number = 0): JSX.Element => {
//     const styles = getStylesByLevel(level);

//     return (
//       <div className="space-y-4">
//         {items?.map((item, index) => {
//           const isExpanded = expanded.has(item.id);
//           const hasChildren = item.children && item.children.length > 0;
//           const isHovered = hoveredId === item.id;

//           return (
//             <div
//               key={item.id}
//               className="space-y-3 transition-all duration-300"
//               style={{
//                 animation: isExpanded ? 'slideDown 0.4s ease-out' : undefined,
//                 animationDelay: `${index * 0.05}s`,
//               }}
//               onMouseEnter={() => setHoveredId(item.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Card with Indicator */}
//               <button
//                 onClick={() => hasChildren && toggleExpand(item.id)}
//                 className={`w-full group relative overflow-hidden rounded-2xl border-2 ${styles.border} transition-all duration-400 disabled:opacity-50 disabled:cursor-default
//                   ${styles.bg} ${styles.hoverBg}
//                   ${isHovered ? 'shadow-xl scale-102 border-opacity-100' : 'shadow-md'}
//                   ${isExpanded && hasChildren ? 'shadow-lg ring-2 ring-opacity-50' : 'ring-0'}
//                   ${isHovered && hasChildren ? `ring-2 ring-opacity-50` : ''}
//                   `}
//                 //   ring-2 transition-all ${isHovered ? getStylesByLevel(level).accent : 'ring-transparent'}
//                 // style={{
//                 //   ringColor: isHovered ? getStylesByLevel(level).accent : undefined,
//                 // }}
//                 disabled={!hasChildren}
//               >
//                 {/* Left Accent Bar - Animated */}
//                 <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full bg-gradient-to-b transition-all duration-400 ${styles.accent}
//                   ${isHovered && hasChildren ? 'w-2' : 'w-1.5'}
//                   ${isExpanded ? 'w-2' : 'w-1.5'}
//                 `} />

//                 {/* Content */}
//                 <div className={`p-5 md:p-6 flex items-center justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
//                   <div className={`flex-1 text-left ${isRTL ? 'text-right' : ''}`}>
//                     <p className={`font-bold text-sm md:text-base ${styles.text} transition-all duration-300 ${isHovered ? 'text-lg' : ''}`}>
//                       {isRTL && item.labelAr ? item.labelAr : item.label}
//                     </p>
//                     {hasChildren && (
//                       <p className={`text-xs md:text-sm transition-all duration-300 ${isHovered ? 'text-opacity-100 font-medium' : 'text-opacity-60'}`}
//                         style={{ color: getStylesByLevel(level).text }}
//                       >
//                         {item.children?.length} {item.children?.length === 1 ? 'item' : 'items'}
//                       </p>
//                     )}
//                   </div>

//                   {/* Badge & Icon - Enhanced */}
//                   {hasChildren && (
//                     <div className="flex items-center gap-3 flex-shrink-0">
//                       <span className={`text-xs md:text-sm font-bold rounded-xl px-3 py-1.5 border-2 transition-all duration-300 ${styles.badge}
//                         ${isHovered ? 'shadow-md scale-110' : 'scale-100'}
//                       `}>
//                         {item.children?.length}
//                       </span>
//                       <ChevronDown
//                         className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-400 ${styles.text}
//                           ${isExpanded ? 'rotate-180' : 'rotate-0'}
//                           ${isHovered ? 'scale-125' : 'scale-100'}
//                         `}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* Shine Effect on Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-0" />
//               </button>

//               {/* Children with Enhanced Animation */}
//               {hasChildren && isExpanded && (
//                 <div
//                   className={`space-y-4 rounded-2xl p-5 md:p-6 backdrop-blur-xl border-2 border-opacity-30 transition-all duration-500 overflow-hidden
//                     ${styles.border} ${getStylesByLevel(level + 1).bg}
//                     ${isRTL ? 'mr-5 md:mr-8' : 'ml-5 md:ml-8'}
//                   `}
//                   style={{
//                     animation: 'slideDown 0.4s ease-out',
//                   }}
//                 >
//                   <style>{`
//                     @keyframes slideDown {
//                       from {
//                         opacity: 0;
//                         max-height: 0;
//                         transform: translateY(-10px);
//                       }
//                       to {
//                         opacity: 1;
//                         max-height: 1000px;
//                         transform: translateY(0);
//                       }
//                     }
//                   `}</style>
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
//     <div className={`w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'}`}>
//       <div className="max-w-4xl mx-auto">
//         {renderItems(items)}
//       </div>
//     </div>
//   );
// }

// export default PremiumHybridNestedList;




'use client';

import React, { JSX, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NestedItem {
  id: string;
  label: string;
  labelAr?: string;
  children?: NestedItem[];
}

interface PremiumHybridNestedListProps {
  items: NestedItem[];
  isRTL?: boolean;
}

export function PremiumHybridNestedList({ items, isRTL = false }: PremiumHybridNestedListProps) {
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

  const getStylesByLevel = (level: number) => {
    const styles = [
      {
        bg: 'bg-blue-50',
        border: 'border-blue-400',
        accent: 'bg-blue-800',
        // text: 'text-blue-900',
        text: 'bg_Gray',
        badge: 'bg-blue-200 text-blue-900 border-blue-500',
      },
      {
        bg: 'bg-teal-50',
        border: 'border-teal-400',
        accent: 'bg-teal-600',
        text: 'text-teal-900',
        badge: 'bg-teal-200 text-teal-900 border-teal-500',
      },
      {
        bg: 'bg-purple-50',
        border: 'border-purple-400',
        accent: 'bg-purple-600',
        text: 'text-purple-900',
        badge: 'bg-purple-200 text-purple-900 border-purple-500',
      },
      {
        bg: 'bg-yellow-50',
        border: 'border-yellow-400',
        accent: 'bg-yellow-600',
        text: 'text-yellow-900',
        badge: 'bg-yellow-200 text-yellow-900 border-yellow-500',
      },
    ];
    return styles[Math.min(level, 3)];
  };

  const renderItems = (items: NestedItem[] | undefined, level: number = 0): JSX.Element => {
    const styles = getStylesByLevel(level);
    // setExpanded(new Set(items?.map(item => item.id) || [])); // Ensure all items are expanded by default
    return (
      <div className="space-y-4">
        {items?.map((item, index) => {
          const isExpanded = expanded.has(item.id);
          const hasChildren = item.children && item.children.length > 0;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="space-y-3 transition-all duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card with Indicator */}
              <button
                onClick={() => hasChildren && toggleExpand(item.id)}
                className={`w-full group relative overflow-hidden rounded-2xl border-2 ${styles.border} ${styles.bg} transition-all duration-400 disabled:ospacity-50 disabled:cursor-default
                  ${isHovered ? 'shadow-xl scale-102 border-opacity-100' : 'shadow-md'}
                  ${isExpanded && hasChildren ? 'shadow-lg' : ''}
                `}
                disabled={!hasChildren}
              >
                {/* Left Accent Bar - Animated */}
                <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full ${styles.accent} transition-all duration-400
                  ${isHovered && hasChildren ? 'w-2' : 'w-1'}
                  ${isExpanded ? 'w-2' : 'w-1'}
                `} />

                {/* Content */}
                <div className={`p-5 md:p-6 flex items-center justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse xxxs:flex-col-reverse' : ''}`}>
                  <div className={`flex-1 text-left ${isRTL ? 'text-right' : ''}`}>
                    <p className={`font-black text-2xl leading-relaxed ${styles.text} transition-all duration-600 ${isHovered ? 'text-2xl' : ''}`}>
                      {isRTL && item.labelAr ? item.labelAr : item.label}
                    </p>
                    {hasChildren && (
                      <p className={`text-xs md:text-sm font-medium transition-all duration-300`}
                        style={{ color: getStylesByLevel(level).text }}
                      >
                        {item.children?.length}
                        <span className={`ml-2 text-xs md:text-sm font-medium transition-all duration-300`}></span>
                        {/* {item.children?.length === 1 && isRTL ? 'عنصر' : 'عناصر'} */}
                        {/* {item.children?.length === 1 && isRTL ? 'عنصر' : item.children.length > 1 && isRTL ? 'عناصر' : item.children?.length === 1 && !isRTL ? 'item' : item.children?.length === 1 && !isRTL ? 'items' : ""} */}
                        {item.children?.length === 1 ? (isRTL ? 'عنصر' : 'item') : (isRTL ? 'عناصر' : 'items')}
                      </p>
                    )}
                  </div>

                  {/* Badge & Icon - Enhanced */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs md:text-sm font-black rounded-xl px-3 py-1.5 border-2 transition-all duration-300 ${styles.badge}
                        ${isHovered ? 'shadow-md scale-110' : 'scale-100'}
                        `}>
                        {/* {item.children?.length} */}
                          {item.id}
                      </span>
                        {hasChildren && (
                            <ChevronDown
                            className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-400 ${styles.text}
                                ${isExpanded ? 'rotate-180' : 'rotate-0'}
                                ${isHovered ? 'scale-125' : 'scale-100'}
                                `}
                            />
                        )}
                    </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0  bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-0" />
              </button>

              {/* Children with Enhanced Animation */}
              {hasChildren && (
                <div
                  className={`space-y-4s rounded-2xl p-5 md:p-6 border-2 overflow-hidden absolute inset-x-0
                    ${styles.border} ${getStylesByLevel(level + 1).bg}
                    ${isRTL ? 'mr-5 md:mr-8' : 'ml-5 md:ml-8'}
                  `}
                  style={{
                    maxHeight: isExpanded ? '10000px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    display: isExpanded ? 'block' : 'none',
                    pointerEvents: isExpanded ? 'auto' : 'none',
                    transition: 'max-height 0.4s ease-out, opacity 0.4s ease-out',
                    position: 'relative',
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
    <div className={`w-full min-h-screen p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'}`} style={{ backgroundColor: 'rgb(255, 245, 204)' }}>
      <div className="max-w-full mx-auto">
        {renderItems(items)}
      </div>
    </div>
  );
}

export default PremiumHybridNestedList;
