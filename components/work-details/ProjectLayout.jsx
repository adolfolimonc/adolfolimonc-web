import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/work-details/Header';
import Challenge from '@/components/work-details/Challenge';
import Works from '@/components/work-details/Works';
import Solution from '@/components/work-details/Solution';
import Works2 from '@/components/work-details/Works2';
import Next from '@/components/work-details/Next';

export default function ProjectLayout({ project }) {
  return (
    <div>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header project={project} />
            <Challenge project={project} />
            <Works project={project} />
            <Solution project={project} />
            <Works2 project={project} />
            <Next project={project} />
          </main>
          <Footer />
        </div>
      </div>
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>
      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}
      <Script src="/assets/js/scripts.js"></Script>
    </div>
  );
} 