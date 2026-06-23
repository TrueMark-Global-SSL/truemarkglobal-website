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
    id: 1,
    image: "/images/about/cert1.jpg",
    bgPosition: "center center",
    headline: "Get ISO Certified From Anywhere",
    subHeadline: "Scale your professional credibility with our internationally recognised online certification programs.",
    highlight: "Empowering",
    typedWords: ["Quality Experts", "Remote Learners", "Compliance Officers"],
    primaryBtn: "Explore Courses",
    primaryHref: "/courses",
    secondaryBtn: "Accreditations",
    secondaryHref: "/who_we_are",
  },
  {
    id: 2,
    image: "/images/sectors/industry1.jpg",
    bgPosition: "center center",
    headline: "World-Class Conformity Assessment",
    subHeadline: "Nigeria's leading certification body delivering auditing, inspection, and verification services that meet global standards.",
    highlight: "Trusted by",
    typedWords: ["Manufacturers", "Healthcare Providers", "Energy Companies"],
    primaryBtn: "Our Services",
    primaryHref: "/certification",
    secondaryBtn: "Learn More",
    secondaryHref: "/who_we_are",
  },
  {
    id: 3,
    image: "/images/about/photo1.jpg",
    bgPosition: "center top",
    headline: "Become an Endorsed Training Partner",
    subHeadline: "Join a global network of accredited professionals. We provide the framework, you provide the expertise.",
    highlight: "ISO 9001 Training for",
    typedWords: ["Auditors", "Consultants", "Partners"],
    primaryBtn: "Partner With Us",
    primaryHref: "/support",
    secondaryBtn: "Contact Support",
    secondaryHref: "/support",
  },
  {
    id: 4,
    image: "/images/sectors/industry5.jpg",
    bgPosition: "center center",
    headline: "Where Infrastructure Meets Intelligence",
    subHeadline: "Our platforms are engineered to handle complexity at scale — combining adaptive assessments, precision workflows, and real-time insight to keep your organisation ahead.",
    highlight: "Engineered for",
    typedWords: ["Intelligent Operations", "Connected Enterprises", "Data-Led Teams"],
    primaryBtn: "Explore Services",
    primaryHref: "/certification",
    secondaryBtn: "About Us",
    secondaryHref: "/who_we_are",
  },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6500,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative overflow-hidden bg-slate-900">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none">
            <div
              className="relative w-full flex items-center min-h-[88vh] sm:min-h-[92vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: slide.bgPosition,
              }}
            >
              {/* Layered gradients for depth — no card box */}
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

              <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-0">
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  {/* Authority Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                    <Shield className="text-[#4aaf97] w-3.5 h-3.5 shrink-0" />
                    <span className="text-white text-[11px] font-bold uppercase tracking-widest">
                      Global Standards
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                    {slide.headline}
                  </h1>

                  {/* Subheadline */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 max-w-lg">
                    {slide.subHeadline}
                  </p>

                  {/* Typed section */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
                      {slide.highlight}
                    </span>
                    <span className="text-[#387467] font-bold bg-white px-3 py-1 rounded-lg text-base sm:text-lg md:text-xl shadow-inner">
                      <ReactTyped
                        strings={slide.typedWords}
                        typeSpeed={65}
                        backSpeed={42}
                        backDelay={2800}
                        loop
                      />
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-10">
                    <a
                      href={slide.primaryHref}
                      className="group inline-flex items-center justify-center gap-2.5 bg-[#387467] text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-[#2c5c52] hover:shadow-lg hover:shadow-[#387467]/30 transition-all"
                    >
                      {slide.primaryBtn}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={slide.secondaryHref}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm text-white uppercase tracking-wide border border-white/40 hover:bg-white/10 hover:border-white/60 transition-all"
                    >
                      {slide.secondaryBtn}
                    </a>
                  </div>

                  {/* Trust pills */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/15">
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Shield className="text-[#4aaf97] w-3.5 h-3.5" />
                      <span className="text-[11px] text-gray-200 font-bold uppercase tracking-wider">Accredited</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Globe className="text-[#4aaf97] w-3.5 h-3.5" />
                      <span className="text-[11px] text-gray-200 font-bold uppercase tracking-wider">Worldwide</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <CheckCircle className="text-[#4aaf97] w-3.5 h-3.5" />
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
