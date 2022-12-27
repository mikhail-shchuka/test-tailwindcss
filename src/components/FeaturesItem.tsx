interface Props {
  img: string;
  title: string;
  description: string;
}

export const FeaturesItem: React.FC<Props> = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="mb-6 flex h-24 items-center justify-center">
        <img src={img} alt="" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md">{description}</p>
    </div>
  );
};
