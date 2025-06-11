import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import SocialMediasBottons from "./SocialMediasBottons";

function Footer() {
  const Links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Menu",
      href: "/menu",
    },
    {
      title: "AboutUs",
      href: "/about",
    },
    {
      title: "login",
      href: "/login",
    },
  ];
  return (
    <div className="bg-[#2f1e10] p-6 rounded-t-2xl mt-24">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
        <div className="flex justify-center items-center max-sm:order-3">
          <Image
          className="max-sm:w-[180px] max-sm:h-[180px]"
            src={"/assets/FooterImg.png"}
            alt="Coffee Land"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-[#FAE7C7] text-xl font-semibold">Quick Links</h2>
          {Links.map((item) => (
            <Link key={item.title} href={item.href}>
              <h4 className="font-bold text-[#FAE7C7] hover:text-amber-200">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
        <div className="justify-center items-center">
          <SocialMediasBottons />
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
}

export default Footer;
