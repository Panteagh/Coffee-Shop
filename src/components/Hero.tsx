
  import Image from "next/image";
  import React from "react";
  import ShowMenuButton from "./ShowMenuButton";

  function Hero() {
    return (
      <section className="h-96 max-md:h-64 w-full relative">
        <Image
          className="-z-1 "
          src="/assets/HeroImage.jpg"
          alt="coffee"
          priority={true}
          fill={true}
        />
        <div className="top-26 text-center relative">
          <div className="text-amber-950 font-bold text-4xl mb-11">
         
          Taste the real taste of coffee
          <br /> with us!
          </div>
          <ShowMenuButton />
        </div>
      </section>
    );
  }

  export default Hero;
