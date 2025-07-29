import generateStylesheetsObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import ClientFooter from "@/components/common/ClientFooter";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import ClientOnly from "@/components/common/ClientOnly";
import HashHandler from "@/components/common/HashHandler";
import Script from "next/script";
import Blog from "@/components/home/Blog";
import Header from "@/components/home/Header";
import Services from "@/components/home/Services";
import Intro from "@/components/home/Intro";
import Numbers from "@/components/home/Numbers";
import Portfolio from "@/components/home/Portfolio";
import Feat from "@/components/home/Feat";
import Clients from "@/components/common/Clients";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "adolfolimonc — Designer & Web Developer",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetsObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
    ]),
  },
};

export default function Home() {
  return (
    <>
      <HashHandler />
      <LoadingScreen />
      <ClientOnly>
        <Cursor />
        <ProgressScroll />
      </ClientOnly>
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Services />
            <Intro />
            <Numbers />
            <Portfolio />
            <Feat />
            <Team />
            <Testimonials />
            <Clients />
            {/* <Blog /> */}
            <Marq2 />
          </main>
          <ClientFooter />
        </div>
      </div>
      
      {/* Fallback script to ensure page becomes visible */}
      <Script id="fallback-loader" strategy="afterInteractive">
        {`
          // Fallback to ensure page becomes visible after 10 seconds
          setTimeout(() => {
            if (!document.body.classList.contains('loaded')) {
              document.body.classList.add('loaded');
              const loader = document.querySelector('.loader-wrap');
              if (loader) {
                loader.style.display = 'none';
              }
            }
          }, 10000);
        `}
      </Script>
      
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}
      <Script src="/assets/js/scripts.js"></Script>
    </>
  );
}
