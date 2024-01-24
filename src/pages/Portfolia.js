import { About, ContactMe, Experience, Header, Hero, Skills, Work } from "@/components";


import { useTheme } from "@/context/ChangeTheme";

export default function Portfolia() {
  const { theme } = useTheme();
  const containerClassName =
    theme == "light" ? "  bg-white bg-contain" : " bg-black bg-contain";
  return (
    <div className={containerClassName}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work/>
      <ContactMe/>
    </div>
  );
}
