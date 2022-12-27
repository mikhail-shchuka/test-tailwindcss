interface Props {
  testimonial: string;
  author: {
    img: string;
    name: string;
    about: string;
  };
}

export const TestimonialsItem: React.FC<Props> = ({
  testimonial,
  author: { img, name, about },
}) => {
  return (
    <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
      <p className="text-sm leading-5 md:text-lg">{testimonial}</p>
      <div className="flex space-x-4">
        <img src={img} alt="" className="h-10 w-10 rounded-full" />
        <div>
          <h5 className="text-sm font-semibold">{name}</h5>
          <p className="text-xs font-extralight">{about}</p>
        </div>
      </div>
    </div>
  );
};
