import { About, Experience, Header, Hero, Skills,  } from "@/components";
import { useTheme } from "@/context/ChangeTheme";

export default function Home() {
  const {theme} = useTheme();
  const containerClassName =
  theme == "light" ? "max-w-[1440px] mx-auto bg-white " : 
  " max-w-[1440px] mx-auto bg-black";
  return (
    <div className={containerClassName}>
      <Header />
      <Hero />
      <About />
   <Skills/>
   <Experience/>
   
    </div>
  );
}
