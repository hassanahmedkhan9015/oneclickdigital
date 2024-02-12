// import React from "react";

// function SideMenu() {
//   return (
//     <>
//       <div className="flex h-screen flex-col justify-between border-e bg-white">
//         <div className="px-4 py-6">
//           <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
//             Logo
//           </span>

//           <ul className="mt-6 space-y-1">
//             <li>
//               <a
//                 href="/dashboard/invoice"
//                 className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
//               >
//                 General
//               </a>
//             </li>

//             <li>
//               <details className="group [&_summary::-webkit-details-marker]:hidden">
//                 <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
//                   <span className="text-sm font-medium"> Teams </span>

//                   <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </summary>

//                 <ul className="mt-2 space-y-1 px-4">
//                   <li>
//                     <a
//                       href="#"
//                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                     >
//                       Banned Users
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       href="#"
//                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                     >
//                       Calendar
//                     </a>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Billing
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 Invoices
//               </a>
//             </li>

//             <li>
//               <details className="group [&_summary::-webkit-details-marker]:hidden">
//                 <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
//                   <span className="text-sm font-medium"> Account </span>

//                   <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </summary>

//                 <ul className="mt-2 space-y-1 px-4">
//                   <li>
//                     <a
//                       href="#"
//                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                     >
//                       Details
//                     </a>
//                   </li>

//                   <li>
//                     <a
//                       href="#"
//                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                     >
//                       Security
//                     </a>
//                   </li>

//                   <li>
//                     <form action="#">
//                       <button
//                         type="submit"
//                         className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
//                       >
//                         Logout
//                       </button>
//                     </form>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>

//         <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
//           <a
//             href="#"
//             className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
//           >
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//               className="size-10 rounded-full object-cover"
//             />

//             <div>
//               <p className="text-xs">
//                 <strong className="block font-medium">Eric Frusciante</strong>

//                 <span> eric@frusciante.com </span>
//               </p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideMenu;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupIcon from "@mui/icons-material/Group";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Logo from "@public/assets/Logo/main-logo.svg";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ key }) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-64 flex-col overflow-y-hidden bg-blue-400 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-8 py-3 lg:py-3">
        <Link href="/">
          <Image width={150} height={32} src={Logo} alt="Logo" priority />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <ArrowBackOutlinedIcon />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear text-white">
        <nav className="mt-0 px-4 py-4 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href={"/dashboard/invoice"}
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <PeopleOutlineIcon sx={{ width: "20px" }} />
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <AutoAwesomeMosaicOutlinedIcon sx={{ width: "20px" }} />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/sales"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <AssessmentOutlinedIcon />
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/claim"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <VolunteerActivismOutlinedIcon />
                  Claim
                </Link>
              </li>
              <li>
                <Link
                  href="/mis"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <AutoAwesomeMosaicOutlinedIcon />
                  MIS
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <GroupIcon />
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group relative flex items-center gap-2  px-2 py-2 text-md "
                >
                  <CalculateIcon />
                  Premium Calculator
                </Link>
              </li>

              {/* <!-- Menu Item Forms --> */}

              <li>
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/forms" || pathname.includes("forms")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <>
                        <Link
                          href="#"
                          className="group relative flex items-center gap-2  px-2 py-2 text-md "
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          Dropdown
                          <ArrowForwardIosOutlinedIcon />
                        </Link>
                        {/* <!-- Dropdown Menu Start --> */}
                        <div
                          className={`translate transform overflow-hidden ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                            <li>
                              <Link
                                href="/"
                                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                  pathname === "/forms/form-elements" &&
                                  "text-white"
                                }`}
                              >
                                Link 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                  pathname === "/forms/form-layout" &&
                                  "text-white"
                                } `}
                              >
                                Link 2
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Dropdown Menu End --> */}
                      </>
                    );
                  }}
                </SidebarLinkGroup>
                {/* <!-- Menu Item Forms --> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
