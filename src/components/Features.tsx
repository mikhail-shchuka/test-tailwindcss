import { FeaturesItem } from "./FeaturesItem";

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gray-50 pt-12 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <FeaturesItem
            img="images/icon-access-anywhere.svg"
            title="Access your file from anywhere"
            description="The ability to use a smartphone, tablet, or computer to access
            your account means your files follow you everywhere."
          />
          <FeaturesItem
            img="images/icon-security.svg"
            title="Security you can trust"
            description="2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your
            files."
          />
        </div>

        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <FeaturesItem
            img="images/icon-collaboration.svg"
            title="Access your file from anywhere"
            description="The ability to use a smartphone, tablet, or computer to access
            your account means your files follow you everywhere."
          />
          <FeaturesItem
            img="images/icon-any-file.svg"
            title="Security you can trust"
            description=" 2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your
            files."
          />
        </div>
      </div>
    </section>
  );
};
