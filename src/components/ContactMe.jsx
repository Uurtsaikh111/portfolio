import { useTheme } from "@/context/ChangeTheme";

export function ContactMe() {
    const { theme } = useTheme();

    const hClassName =
      theme == "light"
        ? "px-[20px] py-[4px] bg-gray-200 rounded-xl"
        : " px-[20px] py-[4px] bg-gray-700 text-white rounded-xl";
return (
      <div className="container px-[80px] py-[96px] ">
        <div className="flex flex-col px-[32px] gap-[48px]">
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className={hClassName}>Get in touch</h2>
            <p className="w-[556px] flex text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
          </div>
        </div>
      </div>
    );
  }
  