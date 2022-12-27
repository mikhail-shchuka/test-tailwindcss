import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  return (
    <header className="container mx-auto h-40 px-6 pt-10 text-center md:h-20">
      <div className="top-10 left-10 mx-auto h-20 w-48 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode md:absolute md:mx-0"></div>
      <nav className="top-12 right-10 flex items-center justify-center space-x-4 md:absolute md:space-x-10">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>
        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
};
