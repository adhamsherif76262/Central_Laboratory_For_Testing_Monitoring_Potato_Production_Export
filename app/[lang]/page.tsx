"use client";
import Heading from "../../components/Heading";
import ParagraphSection from "../../components/ParagraphSection";
import ParagraphStickyImage from "../../components/ParagraphStickyImage";
import Image from "next/image";
import enHome from '../../locales/en/home_En.json';
import arHome from '../../locales/ar/home_Ar.json';
import { useParams, useRouter } from "next/navigation";
import { CardGridList } from "../../components/Card-Grid-Layout";
import { ModernIconList } from "../../components/ModernIconList";
import { CardUnorderedList } from "../../components/CardUnorderedList";
import { Droplets, Leaf, Shield, Zap, Microscope } from "lucide-react";
// import PrelineCarousel from "@/components/PrelineCarousel";
import { GradientCarousel } from "../../components/GradientCarousel";
import { AccentHighlightList } from "../../components/AccentHighlightList";
export default function Home() {
  const {lang} = useParams();
  const t = arHome;
  const isRTL = lang === 'ar';
  const router = useRouter();
  // const t = lang === 'ar' ? arHome : enHome;
// const cardItems = [
// {
//   id: '1',
//   title: 'Card Title 1',
//   description: 'This is a description for card 1.',
//   color: 'primary' as const,
//   stats: '01',
//   // onClick: () => alert('Card 1 clicked'),
//   onClick: () => router.push(`/${lang}/about_Us`),
//   icon: <Image src="/images/Gear_Gif.gif" alt="Icon 1" width={50} height={50} />
// },
// {
//   id: '2',
//   title: 'Card Title 2',
//   description: 'This is a description for card 2.',
//   color: 'secondary' as const,
//   stats: 'Stats 2',
//   onClick: () => alert('Card 2 clicked'),
//   // icon: <Image src="/icons/icon2.svg" alt="Icon 2" width={24} height={24} />
// },
// {
//   id: '3',
//   title: 'Card Title 3',
//   description: 'This is a description for card 3.',
//   color: 'accent' as const,
//   stats: 'Stats 3',
//   onClick: () => alert('Card 3 clicked'),
//   // icon: <Image src="/icons/icon3.svg" alt="Icon 3" width={24} height={24} />  
// }
// ]
  // const englishTasks = [
  //   {
  //     id: '1',
  //     text: 'Establishing and maintaining **disease-free zones** for potato production',
  //   },
  //   {
  //     id: '2',
  //     text: 'Inspecting **imported potato seeds** to ensure they are free from brown rot and ring rot diseases',
  //   },
  //   {
  //     id: '3',
  //     text: 'Examining **processing potatoes** imported for cultivation in disease-free areas',
  //   },
  //   {
  //     id: '4',
  //     text: 'Inspecting **stored seed potatoes** in cold storage facilities (local multiplication)',
  //   },
  //   {
  //     id: '5',
  //     text: 'Testing **table potatoes** exported to various countries worldwide',
  //   },
  //   {
  //     id: '6',
  //     text: 'Supervising **potato production phases** in disease-free areas during summer and winter seasons',
  //   },
  //   {
  //     id: '7',
  //     text: 'Preparing **annual disease-free zone reports** with farm names and regional codes',
  //   },
  //   {
  //     id: '8',
  //     text: 'Examining **artificial growing media** (peatmoss) for quality and safety',
  //   },
  //   {
  //     id: '9',
  //     text: 'Training **university graduates** on modern laboratory technology and techniques',
  //   },
  // ];
//   const cardItems = [
//   {
//     id: 'c-1',
//     text: 'Disease Prevention',
//     subtitle: '',
//     badge: 's',
//     icon: "s",
//   },
//   {
//     id: 'c-2',
//     text: 'Seed Inspection',
//     subtitle: 'Quality checks for imported potato seeds',
//     badge: 'Critical',
//     icon: <Leaf className="w-5 h-5" />,
//   },
//   {
//     id: 'c-3',
//     text: 'Soil Management',
//     subtitle: 'Testing and substrate quality analysis',
//     icon: <Zap className="w-5 h-5" />,
//   },
//   {
//     id: 'c-4',
//     text: 'Production Control',
//     subtitle: 'Oversight from planting to harvest',
//     badge: 'Active',
//     icon: <Droplets className="w-5 h-5" />,
//   },
// ];

// const sampleGradientItems = [
//   {
//     id: '1',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (2).png",
//   },
//   {
//     id: '2',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (3).png",
//   },
//   {
//     id: '3',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (4).png",
//   },
//   {
//     id: '4',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (5).png",
//   },
//   { 
//     id: '5',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (6).png",
//   },
//   {
//     id: '6',
//     title: "",
//     description: "",
//     gradient: "",
//     icon: "",
//     image: "/images/Statistics (7).png",
//   },
// ];
  const labTasks = [
    {
      id: '1',
      text: 'تأسيس و **صيانة المناطق** الخالية من المرض',
    },
  ];
  return (
    <main className="max-ws-8xl mx-10 my-0 p-0 ">

      <Heading>
        {/* {"المعمل المركزي لفحص ومراقبة انتاج وتصدير البطاطس"} */}
        {t.Title}
      </Heading>

        <Heading>
          {t.Services_Title}
        </Heading>

          <div className="px-0 bg-[#FAFAF0] border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
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

    {/* <PrelineCarousel></PrelineCarousel> */}

        <Heading>
          {t.Statistics_Title}
        </Heading>

    <GradientCarousel items={t.Statistics} />

        {/* Card List */}
        <div className="px-0 bg-[#FAFAF0] border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
          <CardUnorderedList
            title={t.B3_Title}
            items={t.B3}
            isRTL={lang === 'ar'}
            columns={4}
            variant="bordered"
          />
        </div>
        
      <div className="border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
              <ModernIconList
                // items={englishTasks.slice(0, 4)}
                items={t.B2}
                title={t.B2_Title}
                variant="check"
                animateOnHover
              />
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

      <div className="border border-border/40 bg-card/50 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
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

    </main>
  );
}
