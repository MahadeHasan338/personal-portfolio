"use client";
import TestimonialImg01 from "/public/testimonials/shohel.webp";
import TestimonialImg02 from "/public/testimonials/eahiya.jpeg";
import TestimonialImg03 from "/public/testimonials/rakib.webp";
import TestimonialsSlider from "./TestimonialCards";
import SectionWrapper from "../SectionWrapper";

export default function Testimonials() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "I had the privilege of directly managing Md Mahade Hasan, a software developer with exceptional dedication and drive. His commitment to excellence, coupled with a natural talent for problem-solving, consistently stood out. Mahade's collaborative nature and eagerness to contribute positively to projects made a lasting impact. I confidently recommend Md Mahade Hasan for any role, confident in his ability to bring enthusiasm and valuable insights to your team.",
      name: "Shohel Rana",
      role: "Principal Software Engineer",
    },
    {
      img: TestimonialImg02,
      quote:
        "I highly recommend Md. Mahade Hasan as a Vue Frontend Developer. His integral role within our DEVxHUB team has given me the opportunity to closely collaborate with him. With a true passion for crafting innovative and user-friendly web apps, Md. Mahade consistently delivers high-quality work that often exceeds project requirements. His proficiency in tackling complex interfaces, optimizing performance, and resolving issues showcases his deep understanding of Vue and its ecosystem. His dedication to excellence and invaluable contributions make him a remarkable asset. Without a doubt, Md. Mahade would greatly enhance any team in search of a skilled and dedicated Vue Frontend Developer.",
      name: "Eahiya Khan",
      role: "Lead Fullstack Developer",
    },
    {
      img: TestimonialImg03,
      quote:
        "I wholeheartedly recommend Md. Mahade Hasan as a Vue Frontend Developer. He's been an integral part of our DEVxHUB team, and I've had the pleasure of closely collaborating with him. Md. Mahade Hasan is an exceptional Vue developer, deeply passionate about crafting innovative, user-friendly web apps. His technical prowess consistently delivers high-quality, often surpassing project requirements. Whether tackling complex interfaces, optimizing performance, or resolving issues, he demonstrates a profound understanding of Vue and its ecosystem. His contributions are invaluable, and his dedication to excellence is remarkable. I'm confident he'd be a valuable asset to any team seeking a skilled and devoted Vue Frontend Developer.",
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
