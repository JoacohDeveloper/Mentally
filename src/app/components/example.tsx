import Image from "next/image";
import { Be_Vietnam_Pro, Sorts_Mill_Goudy } from "next/font/google";

const titles = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
});

const texts = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function ExampleComponent() {
  return (
    <>
      <div className="bg-[#E8E9E8] w-[25rem] h-[12rem] rounded-[1.75rem] px-5 py-5 mt-10 mx-10">
        <h4 className={`${titles.className} text-[#202020] text-4xl`}>
          Lorem Ipsum
        </h4>
        <p className={`${texts.className} text-[#676767] text-sm`}>
          <span className="text-[#00B3EE]">Lorem ipsum</span>, dolor sit amet
          consectetur adipisicing elit. Aliquam officiis sequi incidunt{" "}
          <span className="text-[#00B3EE]">libero deserunt</span>, nam
          consequuntur voluptatibus{" "}
          <span className="text-[#00B3EE]">necessitatibus quibusdam</span>{" "}
          accusantium deleniti, architecto odio labore dolor quos ab eum
          molestias dolorem?
        </p>
      </div>
      <div className="bg-[#111111] w-[25rem] h-[12rem] rounded-[1.75rem] px-5 py-5 mt-10 mx-10">
        <h4 className={`${titles.className} text-[#FFFFFF] text-4xl`}>
          Lorem Ipsum
        </h4>
        <p className={`${texts.className} text-[#8B8D98] text-sm`}>
          <span className="text-[#00B3EE]">Lorem ipsum</span>, dolor sit amet
          consectetur adipisicing elit. Aliquam officiis sequi incidunt{" "}
          <span className="text-[#00B3EE]">libero deserunt</span>, nam
          consequuntur voluptatibus{" "}
          <span className="text-[#00B3EE]">necessitatibus quibusdam</span>{" "}
          accusantium deleniti, architecto odio labore dolor quos ab eum
          molestias dolorem?
        </p>
      </div>
    </>
  );
}
