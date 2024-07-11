import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Company",
    content:
      "This product is amazing! It has completely transformed our business.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director",
    content:
      "I can't recommend this product enough. Our sales have increased by 50% since we started using it.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sam Wilson",
    title: "Product Manager",
    content:
      "The best investment we've made. The return on investment has been phenomenal.",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-textColorLarge">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:bg-buttonPrimaryColor hover:text-white"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    className="object-cover h-full w-full"
                    src={testimonial.image}
                    alt="Avatar"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="leading-relaxed mb-4">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
