'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Grid2X2, Search, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type GalleryImage = {
  id: number
  category: string
  title: { en: string; ar: string }
  tags: { en: string[]; ar: string[] }
  src: string
  featured?: boolean
}

interface ImageGalleryProps {
  language?: "en" | "ar"
}

const subjects = ['Laboratory' , 'Field']
const arabicSubjects = ['المعمل' , "الحقل"]
// const titles = [
//   ['Quiet geometry', 'هندسة هادئة'], ['Morning study', 'دراسة صباحية'], ['Soft structure', 'هيكل ناعم'], ['A place to pause', 'مكان للتوقف'],
//   ['Material memory', 'ذاكرة المادة'], ['Open horizon', 'أفق مفتوح'], ['Collected light', 'ضوء متجمع'], ['The long view', 'نظرة بعيدة'],
// ]

// const galleryImages: GalleryImage[] = [
//   {
//     id: 1,
//     category: "Laboratories",
//     title: {
//       en: "Central Laboratory",
//       ar: "المعمل المركزي",
//     },
//     tags: {
//       en: ["Laboratory"],
//       ar: [""],
//        en: ["Laboratory", "Research", "FCRI"],
//        ar: ["معمل", "بحث علمي", "المعمل المركزي"],
//     },
//     src: "/Images/Gallery/Gallery_112.avif",
//     featured: true,
//   },
// ]

const excludedIds = [ 58 , 77, 78 , 81 , 85 ,89]

const galleryImages: GalleryImage[] = Array.from(
  { length: 112 },
  (_, index) => {
    const imageNumber = 112 - index
    const isLaboratory = imageNumber >= 41

    const category = isLaboratory ? "Laboratory" : "Field"

    return {
      id: index + 1,
      category,
      title: {
        en: "",
        ar: "",
      },
      tags: {
        en: [category],
        ar: [isLaboratory ? "المعمل" : "الحقل"],
      },
      src: `/Images/Gallery/Gallery_${imageNumber}.avif`,
      featured: index % 11 === 0,
    }
  }
)  // Remove excluded images
  .filter((image) => !excludedIds.includes(image.id))
  // Re-number and calculate featured AFTER filtering
  .map((image, index) => ({
    ...image,
    id: index + 1,
    featured: index % 11 === 0,
  }))

export function ImageGallery({ language = 'en' }: ImageGalleryProps) {
  // const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [visibleCount, setVisibleCount] = useState(11)
  const [activeCategory, setActiveCategory] = useState('All Images')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  const isArabic = language === 'ar'
  const filteredImages = useMemo(() => galleryImages.filter((image) => {
    const matchesCategory = activeCategory === 'All Images' || image.category === activeCategory
    const matchesQuery = `${image.title.en} ${image.title.ar} ${image.tags.en.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [activeCategory, query])
  const visibleImages = filteredImages.slice(0, visibleCount)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
  }, [isArabic, language])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selected) return
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex((image) => image.id === selected.id)
        const nextIndex = event.key === 'ArrowRight' ? currentIndex + 1 : currentIndex - 1
        setSelected(filteredImages[(nextIndex + filteredImages.length) % filteredImages.length])
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [filteredImages, selected])

  const currentIndex = selected ? filteredImages.findIndex((image) => image.id === selected.id) : -1

  return (
    <main className="min-h-screen bg-[#FAFAF0] bg-gradient-to-br rounded-3xl shadow-2xl text-black font-black">
      {/* <nav className="border-b border-border bg-background/95 px-4 py-4 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/image-gallery" className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">FIELD / 100</Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Language</span>
            <Button variant="ghost" size="sm" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label="Switch language">
              {isArabic ? 'EN' : 'عربي'}
            </Button>
          </div>
        </div>
      </nav> */}

      <div className="mx-auto max-w-8xl p-8 ">
        <header className="mb-4 flex flex-col gap-8 border-b border-border pb-2 flex-row items-center justify-center">
          <div className="max-w-full">
            {/* <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent-foreground">{isArabic ? 'أرشيف بصري · ٢٠٢٦' : 'Visual archive · 2026'}</p> */}
            <h1 className="text-center text-2xl font-black tracking-tight xxs:text-2xl">{isArabic ? 'مجموعة من صور المعمل و الحقول' : 'A collection of laboratory and field photos'}</h1>
            {/* <p className="mt-5 max-w-xl text-pretty leading-6 text-muted-foreground">{isArabic ? 'تصفح أرشيفًا حيًا من المساحات والأشخاص والأشياء والتفاصيل التي تستحق أن نتذكرها.' : 'Browse a living archive of spaces, people, objects, and the details that make them worth remembering.'}</p> */}
          </div>
        </header>

        <section aria-label="Gallery controls" className="mb-4 flex xxxs:flex-col xxxs:items-center xxxs:justify-between xs:flex-row-reverse xs:items-center xs:justify-between gap-4">
          {/* <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs"><Search aria-hidden="true" className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(25) }} placeholder={isArabic ? 'ابحث في الأرشيف' : 'Search the archive'} className="h-10 w-full rounded-md border border-input bg-background ps-10 pe-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" /></div>
            <Button variant="outline" size="sm" className="self-start"><SlidersHorizontal data-icon="inline-start" /> {isArabic ? 'تصفية وترتيب' : 'Filter & sort'} <ChevronDown data-icon="inline-end" /></Button>
            </div> */}
            <div className="flex items-baseline flex-row-reverse gap-3"><span className="font-mono text-2xl font-black">{filteredImages.length}</span><span className="text-xl text-muted-foreground">{isArabic ? "عدد الصور" : "Image Count"}</span></div>
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Image categories">
            {['All Images', ...subjects].map((category, index) => <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => { setActiveCategory(category); setVisibleCount(11) }} className={cn('whitespace-nowrap rounded-full border px-3 py-1.5 text-md transition-colors', activeCategory === category ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:cursor-pointer')}>{isArabic ? (index === 0 ? 'كل الصور' : arabicSubjects[index - 1]) : category}</button>)}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" aria-label="Image gallery">
          {visibleImages.map((image) => <button key={image.id} onClick={() => setSelected(image)} className={cn('group text-start', image.featured && 'min-[420px]:col-span-2 lg:col-span-2')} aria-label={`Open ${image.title[language]}`}>
            <div className={cn('relative overflow-hidden rounded-sm bg-muted', image.featured ? 'aspect-[16/10]' : 'aspect-[4/5]')}><Image width={500} height={500} src={image.src} alt={image.title[language]} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105 hover:cursor-pointer" /><span className="absolute end-3 top-3 rounded-full bg-background/80 px-2 py-1 font-mono text-[10px] text-foreground backdrop-blur">{String(image.id).padStart(2, '0')}</span></div>
            <div className="flex items-start justify-between gap-3 pt-3"><div><p className="text-sm font-medium">{image.title[language]}</p><p className="mt-1 text-xs text-muted-foreground">{isArabic ? arabicSubjects[subjects.indexOf(image.category)] : image.category}</p></div><Grid2X2 aria-hidden="true" className="mt-0.5 size-4 text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:cursor-pointer" /></div>
          </button>)}
        </section>
        {visibleCount < filteredImages.length && <div className="mt-12 flex justify-center hover:cursor-pointer"><Button className={"hover:cursor-pointer"} variant="outline" onClick={() => setVisibleCount((count) => count + 33)}>Load more <ArrowDownIcon /></Button></div>}
      </div>

      {selected && 
      <div dir={"ltr"}  className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-3 md:p-8" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setSelected(null)}>
        <div className="relative flex max-h-full w-full max-w-6xl flex-col gap-4" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between text-background">
            <span className="font-mono text-xs">{String(currentIndex + 1).padStart(2, '0')} / {filteredImages.length}</span>
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10 hover:cursor-pointer hover:text-background" onClick={() => setSelected(null)} aria-label="Close viewer"><X /></Button>
          </div>
          <div dir={"ltr"}  className="relative flex min-h-0 items-center justify-center">
            <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={selected.src} alt={selected.title[language]} className="max-h-[72vh] w-auto max-w-full object-contain" />
            {/* <img src={selected.src} alt={selected.title[language]} className="max-h-[72vh] w-auto max-w-full object-contain" /> */}
            <Button variant="ghost" size="icon" className="absolute start-2 text-background hover:cursor-pointer hover:bg-background/10 hover:text-background md:start-5" onClick={() => setSelected(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length])} aria-label="Previous image">
            <ArrowLeft />
            </Button>
            <Button variant="ghost" size="icon" className="absolute end-2 text-background hover:cursor-pointer hover:bg-background/10 hover:text-background md:end-5" onClick={() => setSelected(filteredImages[(currentIndex + 1) % filteredImages.length])} aria-label="Next image">
            <ArrowRight />
            </Button>
          </div>
          {/* <div className="flex items-center justify-between gap-4 text-background">
            <div>
              <h2 className="text-lg font-medium">{selected.title[language]}</h2>
              <p className="text-sm text-background/60">{isArabic ? arabicSubjects[subjects.indexOf(selected.category)] : selected.category}</p>
            </div>
            <div className="hidden gap-2 sm:flex">{selected.tags[language].map((tag) => <span key={tag} className="rounded-full border border-background/20 px-2 py-1 text-xs text-background/70">{tag}</span>)}</div>
          </div> */}
        </div>
      </div>}
    </main>
  )
}

function ArrowDownIcon() { return <ArrowRight data-icon="inline-end" className="rotate-90" /> }

export default ImageGallery
