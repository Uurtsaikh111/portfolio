import { Javascript } from "./icons/icon";

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
            <Javascript />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
