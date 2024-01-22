

import {
  Cypress,
  Express,
  Figma,
  Javascript,
  Git,
  Node,
  React,
  Sass,
  Socket,
  Storybook,
  Typescript,
  Nest,
  MongoDB,

} from "./icons/icon";

export function Skills() {
  const icons = [
{image:<Javascript />},
{image:<Figma />},
{image:    <Cypress />},
{image:<Express />},
{image:  <Git />},
{image:<MongoDB/>},
{image:<Node />},

];

const icons2 = [
  {image:<React />},
  {image:<Sass />},
  {image:<Socket />},
  {image:<Storybook />},
  {image:<Typescript />},
  {image:<Nest/>},
  {image:<Javascript />}, 
];



const iconList = icons.map((a)=>{
  return <>{a.image}</>
})

const iconList2 = icons2.map((a)=>{
  return <>{a.image}</>
})
  return (
    <div className="container px-[80px] py-[96px]   ">
      <div className="flex flex-col gap-[48px] px-[32px] py-[0px] justify-center">
        <div className="flex flex-col gap-[16px] items-center ">
          <h2 className="px-[20px] py-[4px] bg-gray-200 rounded-xl">Skills </h2>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="flex flex-col gap-[46px] ">
          <div className="flex justify-between">{iconList}</div>
          <div className="flex justify-between">{iconList2}</div>
          
        </div>
      </div>
    </div>
  );
}
