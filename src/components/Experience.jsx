import { useTheme } from "@/context/ChangeTheme";
import { Upwork } from "./icons/icon";

export function Experience() {
    const experienceCards = [
        {
          item:1,
            images: <Upwork/>,
          h1: "Sr. Frontend Developer",
          p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          p2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
          p3: "Sed quis justo ac magna.",
          p4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          dates: "Nov 2021 - Present",
        },
        {
            item:2,
          images: <Upwork />,
          h1: "Team Lead",
          p1: "Sed quis justo ac magna.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          p3: "Sed quis justo ac magna.",
          p4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          dates: "Jul 2017 - Oct 2021",
        },
        {
            item:3,
          images: <Upwork />,
          h1: "Full Stack Developer",
          p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          dates: "Dec 2015 - May 2017",
        },
      ];

      const elements = experienceCards.map((a) => {
        return (
         
          <p>{a.dates}</p>
       
         
        );
      });

   const {theme}=useTheme();

   const hClassName =
   theme == "light" ? "px-[20px] py-[4px] bg-gray-200 rounded-xl" : 
   " px-[20px] py-[4px] bg-gray-700 text-white rounded-xl";


    return (
      <div className="container px-[80px] py-[96px] ">
        <div className="flex flex-col gap-[48px] px-[32px] py-[0px] justify-center">
        <div className="flex flex-col gap-[16px] items-center ">
          <h2 className={hClassName}>Experience </h2>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div>
          {elements}
        </div>
        
        </div>
      </div>
    );
  }
  