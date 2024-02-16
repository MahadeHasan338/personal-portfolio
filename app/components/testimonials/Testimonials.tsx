"use client";
import TestimonialImg01 from "/public/testimonials/shohel.webp";
import TestimonialImg02 from "/public/testimonials/eahiya.jpeg";
import TestimonialImg03 from "/public/testimonials/rakib.webp";
import TestimonialImg04 from "/public/testimonials/halim.jpg";
import TestimonialsSlider from "./TestimonialCards";
import SectionWrapper from "../SectionWrapper";

export default function Testimonials() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "Md Mahade Hasan, an exceptional software developer, embodies dedication, problem-solving prowess, and collaborative spirit. His commitment to excellence leaves a lasting impact. I confidently endorse him for any role.",
      name: "Shohel Rana",
      role: "Principal Software Engineer",
    },
    {
      img: TestimonialImg04,
      quote:
        "Mahade Hasan, an outstanding Frontend Engineer, excels in TypeScript, NuxtJS, NextJS, and more. His dedication and collaboration enhance project outcomes. I wholeheartedly recommend him for any Frontend Engineering role.",
      name: "Md. Abdul Halim",
      role: "Lead Frontend Developer",
    },
    {
      img: TestimonialImg02,
      quote:
        "I highly recommend Md. Mahade Hasan for Vue Frontend Developer. His passion for crafting user-friendly web apps and proficiency in Vue make him a remarkable asset. His dedication and contributions greatly enhance any team.",
      name: "Eahiya Khan",
      role: "Lead Fullstack Developer",
    },
    {
      img: TestimonialImg03,
      quote:
        "I wholeheartedly recommend Md. Mahade Hasan as a Vue Frontend Developer. His exceptional skills and dedication shine in our DEVxHUB team. Md. Mahade excels in crafting innovative, user-friendly web apps, making him an invaluable asset to any team.",
      name: "Rakib Shanto",
      role: "QA Engineer",
    },
  ];

  return (
    <SectionWrapper
      id="testimonials"
      className="mx-4 md:mx-0 mb-28 lg:mb-40  flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-center">Testimonials</h2>

      <div className="mt-6 lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </SectionWrapper>
  );
}
