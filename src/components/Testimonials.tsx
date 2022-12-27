import { TestimonialsItem } from "./TestimonialsItem";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src="images/bg-quotes.png"
            alt=""
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          <TestimonialsItem
            testimonial="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled
          collaboration machine."
            author={{
              img: "images/profile-1.jpg",
              name: "Satish Patel",
              about: "Founder & CEO. Huddle",
            }}
          />
          <TestimonialsItem
            testimonial="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled
          collaboration machine."
            author={{
              img: "images/profile-2.jpg",
              name: "Bruce McKenzie",
              about: "Founder & CEO. Huddle 2",
            }}
          />
          <TestimonialsItem
            testimonial="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled
          collaboration machine."
            author={{
              img: "images/profile-3.jpg",
              name: "Bruce McKenzie",
              about: "Founder & CEO. Huddle 3",
            }}
          />
        </div>
      </div>
    </section>
  );
};
