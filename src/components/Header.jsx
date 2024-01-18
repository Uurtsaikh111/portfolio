export function Header() {
  return (
    <div className="container">
      <div className="flex justify-between py-[16px] px-[30px] mx-[80px] my-[16px] ">
        <img src="_.svg" alt="" />
        <div className="flex gap-[24px] items-center justify-center">
          <h6>About</h6>
          <h6>Work</h6>
          <h6>Testimonials</h6>
          <h6>Contact</h6>
          <div className="flex gap-[16px] ">
            <button>
              <img src="Icon.svg" alt="" />
            </button>
            <button className=" text-white bg-black rounded-xl py-[6px] px-[16px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
