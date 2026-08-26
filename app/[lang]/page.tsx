"use client";
import Heading from "../../components/Heading";
import ParagraphSection from "../../components/ParagraphSection";
import ParagraphStickyImage from "../../components/ParagraphStickyImage";
import Image from "next/image";
import clsx from "clsx";
import enHome from '../../locales/en/home_En.json';
import arHome from '../../locales/ar/home_Ar.json';
import { useParams, useRouter } from "next/navigation";
import { CardGridList } from "../../components/Card-Grid-Layout";
import { ModernIconList } from "../../components/ModernIconList";
import { CardUnorderedList } from "../../components/CardUnorderedList";
// import { Droplets, Leaf, Shield, Zap, Microscope } from "lucide-react";
// import PrelineCarousel from "@/components/PrelineCarousel";
// import { GradientCarousel } from "../../components/GradientCarousel";
import { AccentHighlightList } from "../../components/AccentHighlightList";
// import { PremiumHybridNestedList } from "@/components/PremiumHybridNestedList";
// import CinematicVideoGallery from "@/components/CinematicVideoGallery";
// import { ImageCarousel } from "@/components/ShadCN-Carousel";

import Marquee from "@/components/Marquee";
import ArabicMarquee from "@/components/Marquee";

const LOGOS = [
  { name: "Next.js", url: "/logos/nextjs.svg" },
  { name: "TypeScript", url: "/logos/typescript.svg" },
  { name: "Tailwind", url: "/logos/tailwind.svg" },
  { name: "Vercel", url: "/logos/vercel.svg" },
  { name: "React", url: "/logos/react.svg" },
];

  const arabicSentence = "يحدث الان فحص عينات تقاوي الكسر المحلي (الثلاجات) بالاضافة الي تأسيس واعتماد وصيانة اراضي المناطق الخالية من مرض العفن البني"

export default function Home() {
  const {lang} = useParams();
  const t = arHome;
  const isRTL = lang === 'ar';
  
  return (
    <main className=" xxxs:mx-2 xxs:mx-5 sm:mx-10 my-0 p-0 ">
      
      <Heading>
        {/* {"المعمل المركزي لفحص ومراقبة انتاج وتصدير البطاطس"} */}
        {t.Title}
      </Heading>
      {/* <PremiumHybridNestedList items={sampleData} isRTL={isRTL}></PremiumHybridNestedList> */}

        {/* <PrelineCarousel></PrelineCarousel> */}
        
      <div className="w-full max-w-4xsl space-y-4">
        {/* Clean News Ticker Display Header */}
        {/* <div className="flex items-center gap-3 justify-center dir-rtl w-full px-2">
          <span className="relative flex h-5 w-5 ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
          </span>
          <h2 className="text-2xl font-black text-red-500 text-center">آخر الأخبار</h2>
        </div> */}

        {/* Ticker implementation using your string configuration */}
        <ArabicMarquee pauseOnHover={true}>
          {/* We duplicate the item 3 times here to guarantee the layout track fills massive ultrawide monitors */}
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center gap-6 shrink-0">
              <p className="text-black xxxs:text-xl xxs:text-2xl lg:text-3xl font-black tracking-wide">
                {arabicSentence}
              </p>
              {/* Visual geometric separation break point indicator */}
              <span className="text-zinc-600 font-bold text-2xl">✦</span>
            </div>
          ))}
        </ArabicMarquee>
      </div>

      <ParagraphSection 
              title={t.P1_Title}
              paragraphs={t.P1}
              rtl={lang === 'ar'}            
              ></ParagraphSection>

        <ParagraphSection
          title={t.P3_Title}
          paragraphs={t.P3}
          rtl={lang === 'ar'}            
          ></ParagraphSection>
              
      <div className="mt-10 xxxs:min-w-[100%] mb-10">
        <ParagraphStickyImage
        rtl={lang === 'ar'}
        imageSrc={"/Images/Dr.Naglaa-Enhanced-cropped.jpg"}
        paragraphs={t.P2}
         title={t.P2_Title}
        // paragraphs={t.P5}
        //  title={t.P5_Title}
        //  rtl={isRTL}
         />
      </div>

      <div className="border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40 mb-12">
              <ModernIconList
                // items={englishTasks.slice(0, 4)}
                items={t.B2}
                title={t.B2_Title}
                variant="check"
                animateOnHover
              />
      </div>


      <div className="border border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40 mb-12">
          <CardGridList 
          items={t.B1}   
          // items={cardItems}   
           title={t.B1_Title}
           columns={3}
           subtitle={t.B1_Subtitle}
           RTL={isRTL}
           >
          </CardGridList>
      </div>

      <div className="mt-10 xxxs:min-w-[100%] mb-10">
        <ParagraphStickyImage
        rtl={lang === 'ar'}
        imageSrc={""}
        // paragraphs={t.P2}
        // title={t.P2_Title}
        paragraphs={[
          "حصل المعمل المركزي لفحص ومراقبه انتاج وتصدير البطاطس علي الاعتماد الدولي ISO 17025:2017 منذ أبريل 2020 والخاص بكفاءه اختبار المعامل ، وهو يمثل خطوة مهمة نحو تعزيز ثقة عملائنا ، ويؤكد حرصنا على تقديم نتائج دقيقة ومعتمدة تلبي احتياجاتهم وتدعم قراراتهم بجانب تعزيز الثقه للجهات الرقابية المحلية والدولية في كفاءه الاختبارات ومصداقية النتائج.",
          "خطواتنا للتعزيز المستمر للاعتماد:",
          "• تزويد المعمل باستمرار بأحدث الأجهزة والتقنيات المتطورة لضمان دقة الفحوصات.",
          "• تدريب العاملين بشكل مستمر على استخدام هذه الأجهزة وفق أحدث الممارسات العالمية.",
          "• تطبيق احدث بروتوكولات الفحص المعتمدة دوليًا لضمان موثوقية النتائج وتوافقها مع المعايير العالمية.",
          "نحن ملتزمون بالاستمرار في تطوير أنظمتنا وضمان التوافق مع أحدث المعايير العالمية، بما يضمن استدامة الجودة والشفافية في كل ما نقدمه.",
        ]}
        title={"معاير الجودة والكفاءة المعملية Iso 17025:2017"}
        type={false}
        Images={["/Images/ISO/Iso (2).jpeg", "/Images/ISO/Iso (1).jpeg"]}
        // paragraphs={t.P5}
        //  title={t.P5_Title}
        //  rtl={isRTL}
         />
      </div>

        <Heading>
          {t.Services_Title}
        </Heading>

          <div className="px-0 bg-[#FAFAF0] mb-12 border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
            <AccentHighlightList
              items={t.Services}
              // items={labTasks}
              title={""}
              direction={isRTL ? 'rtl' : 'ltr'}
              variant="underline"
              // variant="gradient-accent"
              // variant="bold-accent"
              // variant="dot-prefix"
              
              // accentColor="primary"
              // accentColor="secondary"
              // accentColor="accent"
              // accentColor="success"
              accentColor="warning"
              // accentColor="destructive"
            />
          </div>


        {/* Card List */}
        <div className="px-0 mb-12 mt-18 bg-[#FAFAF0] border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
          <CardUnorderedList
            title={t.B3_Title}
            items={t.B3}
            isRTL={lang === 'ar'}
            columns={4}
            variant="bordered"
          />
        </div>

    </main>
  );
}
