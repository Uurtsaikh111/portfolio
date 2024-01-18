import { Location, Point } from "./icons/icon";

export function Hero() {
  return (
    <div className="container">
      <div className="  [flex flex-col gap-[48px] px-[32px] mx-[80px] my-[96px] ">
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
        <div>
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
      <div></div>
    </div>
  );
}
