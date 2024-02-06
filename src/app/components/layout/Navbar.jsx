import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@public/assets/Logo/main-logo.svg";
import Mail from "@public/assets/mail.svg";
import Phone from "@public/assets/phone.svg";

const Navbar = () => {
  return (
    <header className="bg-white md:block hidden  ">
      <div className="container-fluid mx-16 flex justify-between items-center">
        {/* Logo-Start-Start */}

        <Image src={Logo} alt="Logo" className="w-28 h-auto py-1" />

        {/* Logo-Start-End */}

        <div className="flex  space-x-11 ">
          {/* Email  */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={Mail}
                width={70}
                className=" text-blue-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              />
            </Link>
            <p className="text-sm font-sans font-semibold">
              Email Us <br />
              Info@theoneclickdigital.com
            </p>
          </div>
          {/* COntact  */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={Phone}
                width={70}
                className=" text-blue-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              />
            </Link>
            <p className="text-sm font-sans font-semibold ">
              Contact Us <br />
              +92 333 242 5588
              <br />
              +92 333 828 7111
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-20"></div> */}
    </header>
  );
};

export default Navbar;


