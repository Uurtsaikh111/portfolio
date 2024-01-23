import { useTheme } from "@/context/ChangeTheme";

export function Header() {
  const {theme,setTheme}=useTheme();
  const changeThemeHandler = ()=>{
    setTheme(theme==="light" ? "dark" : "light");
  }
  const buttonClassName =
  theme=="light" ? " text-white bg-black rounded-xl py-[6px] px-[16px]" : " text-black bg-white rounded-xl py-[6px] px-[16px]"

  const divClassName =
  theme=="light" ? " text-black bg-white font-medium flex justify-between py-[16px] px-[30px] mx-[80px] my-[16px]" : 
  " text-Gray/Dark/600 font-medium bg-black flex justify-between py-[16px] px-[30px] mx-[80px] my-[16px]"

  const containerClassName =
  theme == "light" ? "max-w-[1440px] mx-auto bg-white " : 
  " max-w-[1440px] mx-auto bg-black";

  return (
    <div className={containerClassName}>
      <div className={divClassName}>
        <img src="_.svg" alt="" />
        <div className="flex gap-[24px] items-center justify-center">
          <h6>About</h6>
          <h6>Work</h6>
          <h6>Testimonials</h6>
          <h6>Contact</h6>
          <div className="flex gap-[16px] ">
            <button onClick={changeThemeHandler}>
              <img src="Icon.svg" alt="" />
            </button>
            <button className={buttonClassName}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
