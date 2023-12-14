import React from "react";
import Hero from "./Hero.js/page";
import Image from "next/image";
import DishMenu from "./DishMenu/page";
import Strength from "./Strength/page";
import Testimonials from "./Testimonials/page";

const page = () => {
  return (
    <section>
      <Hero />
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-[10rem] items-center px-6 ">
        <Image
          src="/Images/pizza-cut.png"
          alt="ginger"
          width={400}
          height={400}
        />
        <div>
          <div>
            <h1 className="text-3xl font-bold max-w-[70%] xl:max-w-[35%] mb-6">
              Daily fresh and always tasty
            </h1>
            <div className="flex flex-row gap-6 items-center xl: gap-20">
              <p className="md:max-w-full lg:max-w-[50%] text-myBlack leading-8 text-lg ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have
              </p>
              <Image
                src="/Images/pizza-ginger.png"
                alt="pizza"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 mt-12 py-8">
          <h3 className="text-myRed text-xl font-[600]">Popular Dishes</h3>
          <h2 className="font-bold text-3xl">Browse our Menu</h2>
        </div>
        <DishMenu />
      </div>
      <Strength />
      <Testimonials />
      
    </section>
  );
};

export default page;
