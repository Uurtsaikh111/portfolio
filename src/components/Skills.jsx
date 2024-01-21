import { Cypress, Express, Figma, Git, Javascript, Next, Node, React, Sass, Socket, Storybook, Tailwindcss, Typescript } from "./icons/icon";

export function Skills() {
  return (
    <div className="container px-[80px] py-[96px]   ">
      <div className="flex felx-col gap-[48px] px-[32px] py-[0px] justify-center">
        <div className="flex flex-col gap-[16px] items-center ">
          <h2 className="px-[20px] py-[4px] bg-gray-200 rounded-xl">Skills </h2>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="flex flex-col gap-[48px] self-stretch ">
          <div>
           
            <Javascript/>
         <Figma/>
         <Cypress/>
         <Express/>
         <Git/>
         <Javascript/>
         <Node/>
         <React/>
         <Sass/>
         <Socket/>
         <Storybook/>
         <Typescript/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
