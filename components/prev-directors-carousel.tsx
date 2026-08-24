// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { ArrowLeft, ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'

// type Director = {
//   name: string
//   period: string
//   image: string
//   isCurrent?: boolean
// }

// const directors: Director[] = [
//   { name: 'أ.د. أحمد محمد عبد الله', period: '٢٠٢١ – حتى الآن', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_1-GW1shF1dyKqtqk2AZDw0ZZIDSTIK7I.avif', isCurrent: true },
//   { name: 'أ.د. منى السيد إبراهيم', period: '٢٠١٨ – ٢٠٢١', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_2-E2GouOKLnojJNNzcgSketAt2GJKe9U.avif' },
//   { name: 'أ.د. محمود حسن علي', period: '٢٠١٥ – ٢٠١٨', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_3-dtFHrF3S11cysnZujaOzm7gJGS9cZR.avif' },
//   { name: 'د. خالد عبد المنعم', period: '٢٠١٢ – ٢٠١٥', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_4-sjfrlzVnpYMtJmfWkEbEMIBmjNn27y.avif' },
//   { name: 'أ.د. سعاد فوزي', period: '٢٠٠٩ – ٢٠١٢', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_5-wsdtqzHFBLbOP23hNyNc4Vnp3yErSn.avif' },
//   { name: 'د. ياسر مصطفى', period: '٢٠٠٦ – ٢٠٠٩', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_6-JtfKPd2qORei7n5vVr8khJDNb6SAgz.avif' },
//   { name: 'أ.د. سامح كمال الدين', period: '٢٠٠٣ – ٢٠٠٦', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_7-YGBDLauYQlps94wW4Gw164cfqm3a6y.avif' },
//   { name: 'د. نجلاء حسن', period: '٢٠٠٠ – ٢٠٠٣', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.Naglaa-Enhanced-cropped-yiOb7267WNM0rQ2M0F1dtA8P2lqAb7.jpg', },
// ]

// export function PrevDirectorsCarousel() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const viewportRef = useRef<HTMLDivElement>(null)
//   const [revealed, setRevealed] = useState(false)
//   const [activeIndex, setActiveIndex] = useState(7)

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setRevealed(true)
//         observer.disconnect()
//       }
//     }, { threshold: 0.18 })
//     if (sectionRef.current) observer.observe(sectionRef.current)
//     return () => observer.disconnect()
//   }, [])

//   const goTo = (index: number) => {
//     const nextIndex = (index + directors.length) % directors.length
//     setActiveIndex(nextIndex)
//     viewportRef.current?.querySelector<HTMLElement>(`[data-index="${nextIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
//   }

//   return (
//     <section ref={sectionRef} className={`directors-section ${revealed ? 'is-revealed' : ''}`} aria-labelledby="directors-title" dir="rtl">
//       <div className="section-container">
//         <div className="section-kicker"><span /> سجل القيادة <span /></div>
//         <h1 id="directors-title">مديرو المعمل عبر السنوات</h1>
//         <p className="section-intro">مسيرة من العطاء العلمي والريادة في حماية المحاصيل الزراعية</p>

//         <div className="carousel-shell">
//           <button className="carousel-button carousel-button-right" onClick={() => goTo(activeIndex - 1)} aria-label="المدير السابق"><ChevronRight /></button>
//           <div className="carousel-viewport" ref={viewportRef} role="region" aria-label="قائمة مديري المعمل السابقين" tabIndex={0}>
//             <div className="carousel-track">
//               {directors.map((director, index) => (
//                 <article className="director-card" data-index={index} key={director.name}>
//                   <div className="portrait-wrap">
//                     <img src={director.image} alt={`صورة ${director.name}`} />
//                     {director.isCurrent && <span className="current-badge">المدير الحالي</span>}
//                   </div>
//                   <div className="card-copy">
//                     <h2>{director.name}</h2>
//                     <div className="period"><CalendarDays aria-hidden="true" /><span>{director.period}</span></div>
//                     <p>مدير المعمل المركزي للعفن البني</p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//           <button className="carousel-button carousel-button-left" onClick={() => goTo(activeIndex + 1)} aria-label="المدير التالي"><ChevronLeft /></button>
//         </div>

//         <div className="carousel-footer">
//           <div className="pagination" aria-label="التنقل بين المديرين">
//             {directors.map((director, index) => <button key={director.name} className={index === activeIndex ? 'active' : ''} onClick={() => goTo(index)} aria-label={`عرض ${director.name}`} aria-current={index === activeIndex ? 'true' : undefined} />)}
//           </div>
//           <div className="swipe-hint"><ArrowRight aria-hidden="true" /> اسحب للتنقل بين القيادات <ArrowLeft aria-hidden="true" /></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PrevDirectorsCarousel




'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type Director = {
  name: string
  period: string
  image: string
  isCurrent?: boolean
}

const directors: Director[] = [
    { name: 'أ.د نجلاء موسى بلابل', period: '٢٠١٦ – حتى الآن', image: '/Images/Previous Directors/prev_directors_8.avif', isCurrent: true },
  { name: 'أ.د ابو سريع محمود اسماعيل', period: '٢٠١٢ - ٢٠١٦', image: '/Images/Previous Directors/prev_directors_1.avif' },
  { name: 'أ.د على سليمان', period: '٢٠١٢', image: '/Images/Previous Directors/prev_directors_2.avif' },
  { name: ' أ.د صلاح يوسف', period: '٢٠١٠ – ٢٠١٢', image: '/Images/Previous Directors/prev_directors_3.avif' },
  { name: 'أ.د صفوت الحداد', period: '٢٠٠٣ – ٢٠١٠', image: '/Images/Previous Directors/prev_directors_4.avif' },
//   { name: 'أ.د. سعاد فوزي', period: '٢٠٠٩ – ٢٠١٢', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prev_directors_5-wsdtqzHFBLbOP23hNyNc4Vnp3yErSn.avif' },
  { name: ' أ.د يوسف الداودي', period: '١٩٩٨ – ٢٠٠٣', image: '/Images/Previous Directors/prev_directors_5.avif' },
  { name: 'أ.د نبيل صبحي', period: '١٩٩٦ – ١٩٩٨', image: '/Images/Previous Directors/prev_directors_9.avif' },
  { name: 'أ.د كامل يعقوب', period: '١٩٧٤ – ١٩٩٦', image: '/Images/Previous Directors/prev_directors_7.avif' },
]

export function PrevDirectorsCarousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true)
        observer.disconnect()
      }
    }, { threshold: 0.18 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

//   const goTo = (index: number) => {
//     const nextIndex = (index + directors.length) % directors.length
//     setActiveIndex(nextIndex)
//     viewportRef.current?.querySelector<HTMLElement>(`[data-index="${nextIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
//   }


const getVisibleCards = () => {
  if (typeof window === "undefined") return 1

  if (window.innerWidth >= 1024) return 4 // lg
  if (window.innerWidth >= 768) return 3  // md
  if (window.innerWidth >= 480) return 2  // xs
  return 1
}

const goTo = (direction: "next" | "prev") => {
  const visibleCards = getVisibleCards()

  const nextIndex =
    direction === "next"
      ? Math.min(
          activeIndex + visibleCards,
          directors.length - 1
        )
      : Math.max(
          activeIndex - visibleCards,
          0
        )

  setActiveIndex(nextIndex)

  viewportRef.current
    ?.querySelector<HTMLElement>(`[data-index="${nextIndex}"]`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
}

  return (
    <section ref={sectionRef} className={`directors-secstion mt-0 bg-linear-to-br rounded-3xl sshadow-2xl text-black font-black bg-[#FAFAF0s] bg-none py-2 px-0 ${revealed ? 'is-revealed' : ''}`} aria-labelledby="directors-title" dir="ltr">
      <div className="section-container">
        {/* <div className="section-kicker"><span /> سجل القيادة <span /></div>
        <h1 id="directors-title">مديرو المعمل عبر السنوات</h1>
        <p className="section-intro">مسيرة من العطاء العلمي والريادة في حماية المحاصيل الزراعية</p> */}

        <div className="carousel-shell">
            {/* <button className="carousel-button carousel-button-left" onClick={() => goTo(activeIndex - 1)} aria-label="المدير الأحدث"><ChevronLeft /></button> */}
            <button
              className="carousel-button carousel-button-left"
              onClick={() => goTo("prev")}
              aria-label="المدير الأحدث"
            >
              <ChevronLeft />
            </button>
            <div className="carousel-viewport" ref={viewportRef} role="region" aria-label="قائمة مديري المعمل السابقين" tabIndex={0}>
            <div className="flex gap-6 md:gap-3 lg:gap-2" dir="ltr">
              {directors.map((director, index) => (
                <article className="director-card hover:cursor-pointer shrink-0 grow-0 basis-full lg:basis-[calc((100%-2rem)/4)] md:basis-[calc((100%-2rem)/3)] xs:basis-[calc((100%-2rem)/2)]" data-index={index} dir="rtl" key={director.name}>
                  <div className="portrait-wrap relative">
                    {/* <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={director.image} alt={`صورة ${director.name}`} /> */}
                    <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} src={director.image} alt={`صورة ${director.name}`} />
                    {director.isCurrent && <span className="current-badge">المدير الحالي</span>}
                  </div>
                  <div className="card-copy">
                    <h2>{director.name}</h2>
                    <div className="period"><CalendarDays aria-hidden="true" /><span>{director.period}</span></div>
                    {/* <p>مدير المعمل المركزي للعفن البني</p> */}
                  </div>
                </article>
              ))}
            </div>
            </div>
            <button
              className="carousel-button carousel-button-right"
              onClick={() => goTo("next")}
              aria-label="المدير الأقدم"
            >
              <ChevronRight />
            </button>
            {/* <button className="carousel-button carousel-button-right" onClick={() => goTo(activeIndex + 1)} aria-label="المدير الأقدم"><ChevronRight /></button> */}
        </div>

        {/* <div className="carousel-footer">
          <div className="pagination" aria-label="التنقل بين المديرين">
            {directors.map((director, index) => <button key={director.name} className={index === activeIndex ? 'active' : ''} onClick={() => goTo(index)} aria-label={`عرض ${director.name}`} aria-current={index === activeIndex ? 'true' : undefined} />)}
          </div>
          <div className="swipe-hint"><ArrowRight aria-hidden="true" /> اسحب للتنقل بين القيادات <ArrowLeft aria-hidden="true" /></div>
        </div>
         */}
      </div>
    </section>
  )
}

export default PrevDirectorsCarousel
