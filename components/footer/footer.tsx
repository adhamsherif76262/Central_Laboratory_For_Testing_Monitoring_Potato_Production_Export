// components/FuturisticFooter.tsx
'use client';
import {
  Phone, Printer, Mail, MapPin, ArrowUp,
} from 'lucide-react';
// import { usePathname } from 'next/navigation';
import MorphingTypography from '../MorphingTypography'
import clsx from 'clsx';

type Props = {
  rtl?: boolean;
};

  function Handle_To_Top_Click(){
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }

export default function Footer( {rtl} : Props) {
    // const pathname = usePathname();
    // const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    // const departments = currentLang === 'ar' ? departmentsAr : departmentsEn;
    const currentLang =   rtl ? 'ar' : 'en';

    return (
    <footer
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
      className={clsx(
        "font-black mt-0 xxxs:text-center w-full px-4 sm:px-6 lg:px-12 py-6 relative bg-linear-to-r from-amber-950 via-slate-900 to-green-950 border-b-2 border-green-600/30 overflow-hidden p-0 text-white border-t",
        currentLang === 'ar' ? "md:text-right" : "md:text-left"
      )}
    >
              <svg className={`absolute inset-0 w-full h-full opacity-90 animate-marquee-scroll-seamless not-md:hidden`} viewBox="0 0 3000 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="rootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="100%" stopColor="rgba(120, 53, 15, 0.5)" />
          </linearGradient>
        </defs>
        <g>
          <path d="M 0,10 Q 50,30 100,50 T 200,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 200,5 Q 250,35 300,60 T 400,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 400,15 Q 450,30 500,55 T 600,110" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 600,8 Q 650,40 700,70 T 800,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 800,20 Q 850,35 900,60 T 1000,125" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1000,12 Q 1050,38 1100,65 T 1200,135" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1200,18 Q 1250,32 1300,55 T 1400,115" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1400,10 Q 1450,36 1500,62 T 1600,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1600,14 Q 1650,34 1700,58 T 1800,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 1800,8 Q 1850,37 1900,67 T 2000,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
        </g>
\        <g>
          <path d="M 2000,10 Q 2050,30 2100,50 T 2200,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2200,5 Q 2250,35 2300,60 T 2400,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2400,15 Q 2450,30 2500,55 T 2600,110" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2600,8 Q 2650,40 2700,70 T 2800,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 2800,20 Q 2850,35 2900,60 T 3000,125" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3000,12 Q 3050,38 3100,65 T 3200,135" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3200,18 Q 3250,32 3300,55 T 3400,115" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3400,10 Q 3450,36 3500,62 T 3600,130" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3600,14 Q 3650,34 3700,58 T 3800,120" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
          <path d="M 3800,8 Q 3850,37 3900,67 T 4000,140" stroke="url(#rootGradient)" strokeWidth="3" fill="none" />
        </g>
      </svg>

      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:Grid-Columns relative gap-8 z-10">
        {/* Contact Info */}
        <div className=''>
          <h3 className=" text-white xxxs:text-2xl md:T-Scale md:ml-10 xxxs:ml-0  mb-10">📡 {currentLang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h3>
          <ul className="space-y-2 xxxs:text-xl xxxs:mx-auto xxxs:w-fit md:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3">
              <Phone className="animate-bounce text-yellow-300 w-6 h-6 mt-1" />
              <span>{currentLang === 'ar' ? "٣٣٣٦٣٥٨٢ / ٣٧٤٩٨٦٧٣ /  ٣٣٣٦٨٣٩٨(٢٠٢)" : "(202) 33368398 / 37498673 / 33363582"}</span>
            </li>
                        <li className="flex items-center xxxs:justify-center md:justify-start gap-3 xxxs:text-2xl">
              <Mail className="animate-bounce text-yellow-300 w-6 h-6 mt-1" />
                <a
                  href="mailto:iu.fcri@yahoo.com?subject=Contact%20Request%20Concerning?body=Dear%20FCRI%20Team%3B"
                  className="hover:underline text-white break-all"
                >
                  gis.unit@pbrp.gov.eg
                </a>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3">
              <MapPin className="animate-bounce text-yellow-300 min-w-6 min-h-6 mt-1" />
              <span className=''>
                {currentLang === 'ar'
                  ? '٣ شارع الاميرة فاطمة اسماعيل متفرع من شارع البطل احمد عبد العزيز - الجيزة'
                  : '3 Princess Fatma Ismail Street, Off El Batal Ahmed Abdel Aziz Street, Giza'}
              </span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3 xxxs:text-2xl">
              <Mail className="animate-bounce text-yellow-300 w-6 h-6 mt-1" />
                <a
                  href="mailto:iu.fcri@yahoo.com?subject=Contact%20Request%20Concerning?body=Dear%20FCRI%20Team%3B"
                  className="hover:underline text-white break-all"
                >
                  pfa@pbrp.gov.eg
                </a>
            </li>
                    
            <li className="flex items-center xxxs:justify-center md:justify-start  gap-3">
              <Printer className="animate-bounce text-yellow-300 w-6 h-6 mt-1" />
              <span>{currentLang === 'ar' ? "٣٧٤٩٥٥٣٤" : "37495534"}</span>
            </li>
            <div className="xxxs:hidden md:block text-xl mx-autos mxS-10 mSy-10">
              <button
              onClick={Handle_To_Top_Click}
                className="flex items-center gap-2 text-white hover:cursor-pointer  hover:text-blue-950 mt-4 md:mt-0 border border-yellow-200 px-4 py-2 rounded-lg transition-all hover:bg-yellow-200 hover:shadow-yellow-200 shadow-sm"
              >
                <ArrowUp className="w-5 h-5 animate-bounce text-yellow-300" />
                {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
              </button>
              {/* <div className='xxxs:mt-10'>
                <MorphingTypography />
              </div> */}
            </div>
        {/* To Top */}
        <div className="md:hidden flex flex-col justify-between xxxs:items-center md:items-start text-center md:text-right text-xl">
          <button
          onClick={Handle_To_Top_Click}
            className="flex items-center gap-2 hover:cursor-pointer text-white hover:text-blue-600 mt-0 md:mt-0 border border-yellow-200 px-4 py-2 rounded-lg transition-all hover:bg-yellow-200 hover:shadow-yellow-200 shadow-sm"
          >
            <ArrowUp className="w-5 h-5 animate-bounce text-yellow-300" />
            {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
          </button>
          {/* <div className='xxxs:mt-10 mb-14'>
                <MorphingTypography />
          </div> */}
        </div>
          </ul>
                  {/* To Top */}
        </div>

      </div>
      <p className="text-2xl xxxs:mt-10 mb-0 pb-0 text-white xxxs:text-center">
            <span className="text-yellow-300">&copy;</span> {new Date().getFullYear()} {currentLang === 'ar' ? 'المعمل المركزي لفحص ومراقبة انتاج وتصدير البطاطس' : 'Central Laboratory for Testing and Monitoring Potato Production and Export'}
      </p>
    </footer>
  );
}
