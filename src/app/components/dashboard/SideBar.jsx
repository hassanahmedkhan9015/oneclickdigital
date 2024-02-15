"use client";
import React from "react";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import { Drawer, ModalClose } from "@mui/joy";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

function SideBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen("success");
  };

  const handleUsers = async (e) => {
    e.preventDefault();
    await axios.get("/api/users").then((res) => console.log(res));
    router.replace("/dashboard/invoice");
  };

  return (
    <>
      <div className=" py-6 hidden md:block bg-blue-400 px-10 h-screen">
        <div>Logo</div>

        <ul className="mt-6 space-y-1">
          <li>
            <Link
              onClick={handleUsers}
              href={""}
              className="block  px-4 py-2 text-sm font-medium text-gray-700"
            >
              User
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="block  px-4 py-2 text-sm font-medium text-gray-700"
            >
              General
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="block  px-4 py-2 text-sm font-medium text-gray-700"
            >
              General
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle-btn  */}
      <div className="block md:hidden">
        <button
          onClick={openDrawer}
          type="button"
          className="rounded bg-blue-400 p-2 text-white transition hover:text-gray-600/75 mx-5 mt-4"
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
            <Drawer open={open} onClose={() => setOpen(false)} size="sm">
              <ModalClose />
              <div className="flex h-screen flex-col justify-between border-e bg-blue-400 ">
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
                  </ul>
                </div>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </>
  );
}

export default SideBar;
