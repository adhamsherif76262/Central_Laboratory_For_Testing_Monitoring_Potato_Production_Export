"use client";

import AccentHighlightList from '@/components/AccentHighlightList';
import Heading from '@/components/Heading';
import ImageGallery from '@/components/ImageGallery';
import { useParams } from 'next/navigation';
import arHome from '../../../locales/ar/aboutUs_Ar.json';
import CardUnorderedList from '@/components/CardUnorderedList';
import { GradientCarousel } from '@/components/GradientCarousel';
import CinematicVideoGallery from '@/components/CinematicVideoGallery';
import ClientPDFSection from '@/components/ClientPDFSection';
import { ImageCarousel } from '@/components/ShadCN-Carousel';

export default function About_UsPage() {
  
  const {lang} = useParams();
  const t = arHome;
  const isRTL = lang === 'ar';

  return (
    <main className="max-ws-8xl mx-10 my-0 p-0 ">

        <Heading>
          {t.Statistics_Title}
        </Heading>
        <ImageGallery language={isRTL ? "ar" : "en"}/>
        
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
