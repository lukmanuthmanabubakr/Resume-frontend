import React from "react";
import Title from "./Title";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "This resume builder completely changed how I apply for jobs. Clean templates and AI suggestions made everything easier.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Product Designer, Creatify",
      content:
        "The templates are beautiful and ATS-friendly. I received callbacks faster than before!",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Software Engineer, NextDev",
      content:
        "Super easy to use. The AI suggestions helped me improve my resume content instantly.",
      rating: 4,
    },
  ];

  return (
    <div
      id="testimonials"
      className="px-4 sm:px-20 xl:px-32 py-24 items-center bg-slate-100/70"
    >
      <Title
        title="Don't just take our words"
        description="Explore authentic success stories from users who turned their resumes into career-launching tools with our platform."
      />

      <div className="flex flex-wrap mt-10 justify-center gap-6">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 max-w-xs sm:max-w-sm rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="#16A34A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                  </svg>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm sm:text-base my-5 leading-relaxed">
              "{testimonial.content}"
            </p>
            <hr className="mb-5 border-gray-200" />

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 rounded-full object-cover"
                alt={`${testimonial.name}`}
              />
              <div className="text-sm text-gray-700">
                <h3 className="font-medium text-slate-800">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
