import { useTheme } from "@/context/ChangeTheme";
import { Location } from "./icons/icon";

export function Hero() {
  const {theme,} = useTheme();
  const divClassName =
  theme == "light" ? "flex justify-between w-[100%] px-[32px] mx-[80px] my-[96px] " : 
  "flex justify-between text-white bg-black w-[100%] px-[32px] mx-[80px] my-[96px] ";

  const containerClassName =
  theme == "light" ? "flex gap-[48] max-w-[1440px] mx-auto bg-white " : 
  "flex gap-[48] max-w-[1440px] mx-auto bg-black";


  return (
    <div className={containerClassName}>
      <div className={divClassName}>
        <div className="flex flex-col w-[768px] h-[360px] gap-[48px]">
          <div className="flex flex-col gap-[8px]">
            <h1>Hi, I’m Sagar 👋</h1>
            <p>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-[8px] self-stretch">
              <Location />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex gap-[15px] ">
              <img
                className="ml-[8px]"
                src="icon-dot-emerald-500point.svg"
                alt=""
              />
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-[6px] items-center">
            <img src="Iconcat.svg" alt="" />
            <img src="Icon Buttontwitter.svg" alt="" />
            <img src="Icon Buttonfigma.svg" alt="" />
          </div>
        </div>
        <img
          className="w-[260px] h-[290px] shadow-[30px_35px_0px_0px_#edf2f7]"
          src="Pichero_img.jpg"
          alt=""
        />
      </div>
    </div>
  );
}