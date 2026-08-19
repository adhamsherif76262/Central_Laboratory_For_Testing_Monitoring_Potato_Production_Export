'use client'; // This forces the dynamic import evaluation to happen on the client side

import dynamic from "next/dynamic";
import type { PdfMeta } from '@/lib/pdf-meta';

interface PDFCardProps {
  pdf: string;
  animation: string;
  isArabic: boolean;
  title: string;
  preMeta?: PdfMeta;
}
// Dynamically import your target component with SSR disabled
const ClientPDFSection = dynamic(
  () => import("@/components/ClientPDFSection"),
  { ssr: false } 
);

export default function PDFWrapper({ pdf, isArabic, title, animation, preMeta }: PDFCardProps) {
  return    <ClientPDFSection
              title={title}
              pdf={pdf}
              isArabic={isArabic}
              animation={animation}
              preMeta={preMeta}
            />;
}
