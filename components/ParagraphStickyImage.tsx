'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface ParagraphStickyImageProps {
  rtl?: boolean; // if true → rtl, else → ltr
  imageSrc: string;
  title: string;
  paragraphs: string[];
}

const ParagraphStickyImage: React.FC<ParagraphStickyImageProps> = ({ rtl = false, imageSrc, title , paragraphs}) => {
  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="p-6 bg-[#FAFAF0] rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width-sm mx-auto">
      <h2 className={clsx(
        "font-bold bg_Gray mb-6 text-center",
        rtl ? 'xs:text-3xl xxxs:text-2xl' : 'sm:text-3xl xs:text-2xl xxxs:text-xl'
      )}>{title}</h2>

      <div className="flex flex-col md:flex-row shadow-2xl items-center md:items-start">
        {/* Responsive Sticky/Top Image */}
        <div className="w-full md:w-auto md:sticky md:top-4 md:self-start p-0 ">
          <Image
            src={imageSrc}
            alt="Illustration"
            width={500}
            height={500}
            className="xxxs:w-96 xl:w-[800px] lg:w-[700px] md:w-[500px] mx-auto rounded border max-h-[550px]"
          />
        </div>

        {/* Scrollable Paragraph */}
        <div className={clsx(
            "overflow-y-auto max-h-[550px] p-4 text-justify leading-relaxed w-full bg-gray-50 font-black",
            rtl ? 'xxs:text-2xl xxxs:text-xl' : 'md:text-xl lg:text-2xl xs:text-xl xxxs:text-md'
        )}>
         {paragraphs.map((p,i)=>
         <p key={i} className='text-center mb-4 xs:leading-normal md:leading-relaxed hover:text-blue-950'>
            {p}
         </p>
        )}
        </div>
      </div>
    </section>
  );
};

export default ParagraphStickyImage;
