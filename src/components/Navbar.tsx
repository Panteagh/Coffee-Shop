"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/Store/CartStore";

function Navbar() {
  const totalQty = useCartStore((state)=> state.getTotalItems())
  const pathname = usePathname();

  const nav = [
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
    <nav className="w-full h-14 mx-auto rounded-3xl border px-5 py-1.5 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            className="rounded-full"
            src="/assets/Logo.png"
            alt="Coffee Land"
            width={40}
            height={40}
            priority={true}
          />
        </Link>
      </div>
      <div className="flex gap-3">
        {nav.map((item) => (
          <Link
            className={`max-md:text-sm max-sm:text-xs ${pathname == item.href ? "text-amber-950 font-bold text-shadow-2xs" : "text-amber-950"}`}
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1.5">
        <button>
          <Search color="#461901" size={22} />
        </button>
        <Link href={'/cart'}>
        <button className="relative">
          <ShoppingBasket color="#461901" size={23} />
          {totalQty > 0 && (
              <span className="absolute -top-1.5 -right-2.5 text-sm bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full">
                {totalQty}
              </span>
            )}
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
