import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="shadow-gray-400 p-4 shadow">
        <div className="flex items-center justify-center">
          <div className="flex basis-2/3 flex-col sm:basis-1/3 lg:basis-5/12">
            <div className="flex flex-row items-center gap-1">
              <div className="flex basis-1/6 flex-col sm:basis-1/6 lg:basis-1/12">
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      width={70}
                      height={70}
                      src="/dummy.png"
                      alt="logo"
                      style={{ borderRadius: "50%" }}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <a>
                    <span className="text-3xl font-bold">Reviews</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex basis-0 sm:basis-1/2">
            <ul className="m-0 flex list-none items-center gap-2 p-0 text-2xl">
              <li>
                <NavLink exact href="/restaurants">
                  Restaurants
                </NavLink>
              </li>
              <li>
                <NavLink exact href="/dishes">
                  Dishes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex basis-0 flex-col sm:basis-1/6">
            <div className="flex flex-row justify-end">
              <button className="text-white bg-main-500">Log In</button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
