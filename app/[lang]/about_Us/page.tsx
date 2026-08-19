// "use client";

// import AccentHighlightList from '@/components/AccentHighlightList';
import Heading from '@/components/Heading';
import ImageGallery from '@/components/ImageGallery';
// import { useParams } from 'next/navigation';
import arHome from '../../../locales/ar/aboutUs_Ar.json';
// import CardUnorderedList from '@/components/CardUnorderedList';
import { GradientCarousel } from '@/components/GradientCarousel';
import CinematicVideoGallery from '@/components/CinematicVideoGallery';
// import ClientPDFSection from '@/components/ClientPDFSection';
// import { ImageCarousel } from '@/components/ShadCN-Carousel';
import { getPdfMetaSync } from '@/lib/pdf-meta';
import dynamic from "next/dynamic"
import PDFWrapper from "@/components/PDFWrapper";

interface PageProps {
  params: Promise<{ lang: string }>;
}

// Dynamically import the component and completely disable Server-Side Rendering for it
// const ClientPDFSection = dynamic(
//   () => import("@/components/ClientPDFSection"),
//   { ssr: false } 
// );

export default async function About_UsPage({ params }: PageProps) {
  
  // const {lang} = useParams();
    const { lang } = await params; // No hooks used!

  const t = arHome;
  const isRTL = lang === 'ar';

    const researchMeta = getPdfMetaSync("/PDFs/Researches.pdf");
const mastersMeta = getPdfMetaSync("/PDFs/Masters_and_Doctoral_Theses.pdf");

  return (
    <main className="max-ws-8xl mx-10 my-0 p-0 ">

        <Heading>
          {t.Statistics_Title}
        </Heading>
        <ImageGallery language={isRTL ? "ar" : "en"}/>
        
              <div className="space-y-10 py-6 xxxs:overflow-hiddesn xxs:overflow-visible">
                <PDFWrapper 
                  // title={isArabic ? 'ملف الأبحاث' : 'Researches File'}
                  title={'ملف الأبحاث'}
                  pdf={"/PDFs/Researches.pdf"}
                  isArabic={true}
                  animation="rotate-in-blur"
                  preMeta={researchMeta}
                />
        {/* <ClientPDFSection
          // title={isArabic ? 'ملف الأبحاث' : 'Researches File'}
          title={'ملف الأبحاث'}
          pdf={"/PDFs/Researches.pdf"}
          isArabic={true}
          animation="rotate-in-blur"
          preMeta={researchMeta}
        /> */}
      </div>

      <div className="space-y-10 py-6 xxxs:overflow-hiddesn xxs:overflow-visible">
        <PDFWrapper 
          title={"ملف رسائل الماجستير و الدكتوراه"}
          pdf={"/PDFs/Masters_and_Doctoral_Theses.pdf"}
          isArabic={true}
          animation="animate-bounceIn"
          preMeta={mastersMeta}
        />
        {/* <ClientPDFSection
          title={"ملف رسائل الماجستير و الدكتوراه"}
          pdf={"/PDFs/Masters_and_Doctoral_Theses.pdf"}
          isArabic={true}
          animation="animate-bounceIn"
          preMeta={mastersMeta}
        /> */}
      </div>

        <CinematicVideoGallery Title={t.Video_Gallery_Main_Title} Sub_Title={t.Video_Gallery_Sub_Title} videos={t.Video_Gallery_Array} language={isRTL ? "ar" : "en"}/>
        <GradientCarousel items={t.ISO} />

        {/* Card List */}
        {/* <div className="px-0 mb-12 mt-18 bg-[#FAFAF0] border border-border/40 backdrop-blur-sm rounded-3xl shadow-2xl border-cyan-700/40">
          <CardUnorderedList
            title={t.B3_Title}
            items={t.B3}
            isRTL={lang === 'ar'}
            columns={4}
            variant="bordered"
          />
        </div> */}

    </main>
  )
}
