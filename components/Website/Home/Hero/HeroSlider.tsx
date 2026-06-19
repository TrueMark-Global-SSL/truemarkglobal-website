'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { CheckCircle, Globe, Shield, ArrowRight } from "lucide-react";

const slides = [
    {
    id: 2,
    image: "/images/slide/Slide-2.jpg",
    headline: "Get ISO Certified From Anywhere",
    subHeadline: "Scale your professional credibility with our internationally recognized online certification programs.",
    highlight: "Empowering",
    typedWords: ["Quality Experts", "Remote Learners", "Compliance Officers"],
    primaryBtn: "Explore Courses",
    secondaryBtn: "Accreditations",
  },
  {
    id: 1,
    image: "/images/slide/Slide-1.jpg",
    headline: "Become an Endorsed Training Partner",
    subHeadline: "Join a global network of accredited professionals. We provide the framework, you provide the expertise.",
    highlight: "ISO 9001 Training for",
    typedWords: ["Auditors", "Consultants", "Partners"],
    primaryBtn: "Partner With Us",
    secondaryBtn: "Contact Support",
  },

];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200, // Slightly slower for a more luxurious feel
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Custom styles for Slick dots to make them look modern */}
      <style jsx global>{`
        .slick-dots { bottom: 30px; z-index: 30; }
        .slick-dots li button:before { color: white; font-size: 12px; opacity: 0.5; }
        .slick-dots li.slick-active button:before { color: #387467; opacity: 1; }
      `}</style>

      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none focus:outline-none">
            <div
              className="relative w-full flex items-center justify-start min-h-[90vh] md:min-h-[95vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Refined Overlays: Subtle vignette rather than heavy blackout */}
              <div className="absolute inset-0 bg-black/30 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10 w-full md:w-3/4" />

              <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl"
                >
                  {/* Authority Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
                    <Shield className="text-[#387467] w-4 h-4" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Global Standards
                    </span>
                  </div>

                  {/* Typography: Switched from all-caps to Title Case for better readability */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                    {slide.headline}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed mb-8 max-w-xl">
                    {slide.subHeadline}
                  </p>

                  {/* Typed Text Section */}
                  <div className="flex flex-wrap items-center gap-3 mb-10">
                    <span className="text-white text-xl md:text-2xl font-semibold">
                      {slide.highlight}
                    </span>
                    <span className="text-[#387467] font-bold bg-white px-4 py-2 rounded-xl text-xl md:text-2xl shadow-inner">
                      <ReactTyped
                        strings={slide.typedWords}
                        typeSpeed={60}
                        backSpeed={40}
                        backDelay={2500}
                        loop
                      />
                    </span>
                  </div>

                  {/* Modern Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <button className="group relative flex items-center justify-center gap-3 bg-[#387467] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide overflow-hidden transition-all hover:bg-[#2c5c52] hover:shadow-lg hover:shadow-[#387467]/30">
                      {slide.primaryBtn}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm text-white uppercase tracking-wide border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm">
                      {slide.secondaryBtn}
                    </button>
                  </div>

                  {/* Trust Indicators: Pill style */}
                  <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/20">
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Shield className="text-[#387467] w-4 h-4" />
                      <span className="text-[11px] text-gray-200 font-bold uppercase tracking-wider">Accredited</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Globe className="text-[#387467] w-4 h-4" />
                      <span className="text-[11px] text-gray-200 font-bold uppercase tracking-wider">Worldwide</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <CheckCircle className="text-[#387467] w-4 h-4" />
                      <span className="text-[11px] text-gray-200 font-bold uppercase tracking-wider">ISO Compliant</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
