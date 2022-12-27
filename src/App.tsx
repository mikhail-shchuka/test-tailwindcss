import { EarlyAccess } from "./components/EarlyAccess";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Productive } from "./components/Productive";
import { Testimonials } from "./components/Testimonials";

export const App: React.FC = () => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="font-opensans dark:bg-darkBlue dark:text-white">
      <Header />
      <HeroBanner />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
};
