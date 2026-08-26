// import React, { ReactNode } from "react";

// interface MarqueeProps {
//   children: ReactNode;
//   direction?: "left" | "right";
//   pauseOnHover?: boolean;
//   reverse?: boolean;
// }

// export default function Marquee({
//   children,
//   direction = "left",
//   pauseOnHover = true,
//   reverse = false,
// }: MarqueeProps) {
//   return (
//     <div className="group flex overflow-hidden p-2 select-none mask-gradient">
//       <div
//         className={`flex min-w-full shrink-0 items-center justify-around gap-4 [animation-play-state:running] ${
//           pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
//         } ${direction === "right" || reverse ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"}`}
//       >
//         {/* Render children twice to eliminate blank gap artifacts */}
//         <div className="flex shrink-0 items-center justify-around gap-4 min-w-full">
//           {children}
//         </div>
//         <div className="flex shrink-0 items-center justify-around gap-4 min-w-full" aria-hidden="true">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { ReactNode } from "react";

// interface MarqueeProps {
//   children: ReactNode;
//   direction?: "left" | "right";
//   pauseOnHover?: boolean;
// }

// export default function Marquee({
//   children,
//   direction = "left",
//   pauseOnHover = true,
// }: MarqueeProps) {
//   return (
//     <div className="group flex overflow-hidden p-2 select-none mask-gradient w-full">
//       {/* Container tracking row */}
//       <div
//         className={`flex w-max shrink-0 items-center gap-12 [animation-play-state:running] ${
//           pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
//         } ${direction === "right" ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"}`}
//       >
//         {/* Set 1: True content elements */}
//         <div className="flex shrink-0 items-center gap-12">
//           {children}
//         </div>
//         {/* Set 2: Identical twin layout to complete the infinite cycle loop */}
//         <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
}

export default function ArabicMarquee({
  children,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div 
      dir="rtl" 
      className=" rounded-xl group flex overflow-hidden p-3 select-none mask-gradient-rtl w-full border-y border-[#FAFAF0] bg-[#FAFAF0]"
    >
      {/* Moving track timeline optimized for right-to-left overflow rendering */}
      <div
        className={`flex w-max shrink-0 items-center gap-6 pl-6 [animation-play-state:running] animate-marquee-rtl ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {/* Track Segment A */}
        <div className="flex shrink-0 items-center gap-6">
          {children}
        </div>
        {/* Track Segment B - Perfect Twin Mirror */}
        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
