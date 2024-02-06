"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/globals.css";
import { Drawer } from "@mui/joy";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "@public/assets/Logo/logo-white.svg";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";

import Mail from "@public/assets/mail.svg";
import Phone from "@public/assets/phone.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const status = session?.status;
  console.log(status);
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  } else if (userName?.includes("@gmail.com")) {
    userName = userName.replace("@gmail.com", "");
  }

  const openDrawer = () => {
    setOpen("success");
  };
  return (
    <>
      <Navbar />
      <header className=" bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 ">
        <div className="m-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className=" md:items-center md:gap-12 md:hidden">
              <Link className="block text-teal-600" href={"/"}>
                <Image src={Logo} alt="" width={75} />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <Link
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    Home
                  </Link>
                  <Link
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    Takaful & Insurance
                  </Link>
                  <Link
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    Contact
                  </Link>
                  <Link
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    About
                  </Link>
                  <Link
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    FAQs
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 flex items-center">
                {status === "authenticated" && (
                  <>
                    <div className="gap-3 flex items-center">
                      <Link
                        href={"/profile"}
                        className="text-white transition hover:text-slate-300 whitespace-nowrap "
                      >
                        Hello,{userName}
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                        }}
                        className="inline-block rounded-md text-sm bg-white px-5 py-2.5 text-sm font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-blue-600 hover:text-white"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}

                {status === "unauthenticated" && (
                  <>
                    <Link
                      href={"/login"}
                      className="rounded-md bg-blue-600  hover:bg-white hover:text-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    >
                      SignIn
                    </Link>

                    <div className="hidden sm:flex">
                      <Link
                        href={"/register"}
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        Register
                      </Link>
                    </div>
                  </>
                )}
              </div>
              {/* Toggle-Btn  */}
              <div className="block md:hidden">
                <button
                  onClick={openDrawer}
                  type="button"
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Drawer  */}
                {open === "success" && (
                  <>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                      <div className="flex h-screen flex-col justify-between border-e bg-white">
                        <div className="">
                          <Image
                            src={DrawerLogo}
                            alt="Logo"
                            width={100}
                            className="mx-2"
                          />

                          <ul className="mt-6 space-y-1 ">
                            <li>
                              <Link
                                href={"/"}
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 "
                              >
                                Home
                              </Link>
                            </li>
                            <li>
                              <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-700">
                                  <Link
                                    href={"/"}
                                    className=" font-medium text-sm"
                                  >
                                    Takaful & Insurance
                                  </Link>

                                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4 text-sm">
                                  <li>
                                    <Link
                                      href="/insurance/car"
                                      className=" text-sm block rounded-lg px-4 py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      Car Insurance
                                    </Link>
                                    <Link
                                      href="/insurance/car"
                                      className=" text-sm block rounded-lg px-4 py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      Bike Insurance
                                    </Link>
                                    <Link
                                      href="/insurance/car"
                                      className=" text-sm block rounded-lg px-4 py-2 font-medium hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      Health Insurance
                                    </Link>
                                    <Link
                                      href="/insurance/car"
                                      className=" text-sm block rounded-lg px-4 py-2 font-medium hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      Travel Insurance
                                    </Link>
                                    <Link
                                      href="/insurance/car"
                                      className=" text-sm block rounded-lg px-4 py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
                                    >
                                      Life Insurance
                                    </Link>
                                  </li>
                                </ul>
                              </details>
                            </li>

                            <li>
                              <Link
                                href={"/"}
                                className=" text-sm block rounded-lg px-4 py-2  font-medium text-gray-700"
                              >
                                Contact Us
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={"/"}
                                className="text-sm block rounded-lg px-4 py-2  font-medium text-gray-700"
                              >
                                About Us
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={"/"}
                                className=" text-sm block rounded-lg px-4 py-2 font-medium text-gray-700"
                              >
                                FAQs Us
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 mb-5">
                          {/* Email  */}
                          <div className="flex items-center ">
                            <Link href={"/"}>
                              <Image
                                src={Mail}
                                className="  w-14 text-blue-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                              />
                            </Link>
                            <p className="text-xs font-sans font-semibold">
                              Email Us <br />
                              Info@theoneclickdigital.com
                            </p>
                          </div>

                          {/* COntact  */}
                          <div className="flex items-center">
                            <Link href={"/"}>
                              <Image
                                src={Phone}
                                className="w-14 text-blue-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                              />
                            </Link>
                            <p className="text-xs font-sans font-semibold">
                              Contact Us <br />
                              +92 333 242 5588
                              <br />
                              +92 333 828 7111
                            </p>
                          </div>
                        </div>
                      </div>
                    </Drawer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Test  */}
    </>
  );
}

export default Header;
