import { useTheme } from "@/context/ChangeTheme";
import { WorkIcon, WorkImg } from "./icons/icon";

export function Work() {

    const {theme} = useTheme();
  
    const hClassName =
    theme == "light" ? "px-[20px] py-[4px] bg-gray-200 rounded-xl w-fit" : 
    " px-[20px] py-[4px] bg-gray-700 text-white rounded-xl w-fit";
    const fiskil = [
 {
    image:<WorkImg/>,
    
    h1:"Fiskil",
    
     
p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      p2: "React",
      p3: "Next.js",
      p4: "Typescripy",
      p5: "Nest.js",
      p6: "PostgreSQL",
      p7: "Tailwindcss",
      p8: "Figma",
      p9: "Cypress",
      p10: "Storybook",
      p11: "Git",
images:<WorkIcon/>
    
 }
  
  ];
  
  
  
  const elements = fiskil.map((a)=>{
    return (<div className="flex">
        <div className="w-[50%] p-[48px]">{a.image}</div>
           <div className="w-[50%] p-[48px] flex flex-col gap-[24px] ">
            <h7>{a.h1}</h7>
           <p>{a.p1}</p>
           <div className="flex flex-wrap gap-[8px]">
           <h2 className={hClassName}>{a.p2}</h2>
           <h2 className={hClassName}>{a.p3}</h2>
           <h2 className={hClassName}>{a.p4}</h2>
           <h2 className={hClassName}>{a.p5}</h2>
           <h2 className={hClassName}>{a.p6}</h2>
           <h2 className={hClassName}>{a.p7}</h2>
           <h2 className={hClassName}>{a.p8}</h2>
           <h2 className={hClassName}>{a.p9}</h2>
           <h2 className={hClassName}>{a.p10}</h2>
           <h2 className={hClassName}>{a.p11}</h2>
           </div>
           <div>{a.images}</div>
           </div>
        </div>
    )
  })
  
 
  
  
  
  
    return (
      <div className="container px-[80px] py-[96px]   ">
        <div className="flex flex-col gap-[48px] px-[32px] py-[0px] justify-center">
          <div className="flex flex-col gap-[16px] items-center ">
            <h2 className={hClassName}>Work </h2>
            <p>Some of the noteworthy projects I have built:</p>
          </div>
          <div>
           <div className="flex gap-[46px] ">{elements}</div>
           <div className="flex flex-row gap-[46px] ">{elements}</div>
           <div className="flex gap-[46px] ">{elements}</div>

            
          </div>
        </div>
      </div>
    );
  }
  