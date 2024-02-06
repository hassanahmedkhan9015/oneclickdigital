import Image from "next/image";
import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import BankAlfalah from "@public/assets/PaymentIcon/bankalfalah.svg";
import MasterCard from "@public/assets/PaymentIcon/master-card.svg";
import Union from "@public/assets/PaymentIcon/unionpay.svg";
import Visa from "@public/assets/PaymentIcon/visa-logo.svg";
import Logo from "@public/assets/Logo/main-logo.svg";
import Secp from "@public/assets/Logo/secp.svg";
import "@/app/globals.css";
import Plains from "./Plain";
function Footer() {
  return (
    <>
    <Plains/>
    <hr class="h-px my-6 bg-gray-200 border-none mx-44" />
      <footer className="bg-image-two  mt-5">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <Link href={"/"}>
                  <Image src={Logo} className="w-28" />
                </Link>

                <p className="max-w-sm mt-2 text-black dark:text-gray-400">
                  OneClick Digital Offers customized insurance solutions to meet
                  your specific needs, whether it's for your home, car, health,
                  business, or life. We work with you to create a policy that
                  fits your unique situation.
                </p>

                <p className="max-w-sm mt-2 text-black dark:text-gray-400 flex  items-center">
                  Seal of Registrar of Company
                  <span>
                    <Image src={Secp} className="w-20" />
                  </span>
                </p>

                <div className="flex mt-6 -mx-2 items-center">
                  <Link href={"/"}>
                    <WhatsApp className="mx-2 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                  </Link>
                  <Link href={"/"}>
                    <Facebook className="mx-2 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                  </Link>
                  <Link href={"/"}>
                    <Instagram className="mx-2 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                  </Link>
                  <Link href={"/"}>
                    <LinkedIn className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                  </Link>
                  <Link href={"/"}>
                    <Twitter className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Logo & Main  */}
                <div>
                  <h3 className="text-black uppercase dark:text-white">
                    Quick Links
                  </h3>
                  <Link
                    href={"/"}
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    Car Insurance
                  </Link>
                  <Link
                    href={"/"}
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    Bike Insurance
                  </Link>
                  <Link
                    href={"/"}
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    Health Insurance
                  </Link>
                  <Link
                    href={"/"}
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    Travel Insurance
                  </Link>
                  <Link
                    href={"/"}
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    Life Insurance
                  </Link>
                </div>

                {/* Payment  */}
                <div className="">
                  <h3 class="text-gray-700 uppercase dark:text-white">
                    Payment Method
                  </h3>

                  <p class="block text-right text-sm text-black dark:text-gray-400 hover:underline">
                    <Image
                      src={Visa}
                      alt="Visa_Logo"
                      className="w-24 flex justify-center"
                    />
                  </p>
                  <p class="block text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    <Image
                      src={MasterCard}
                      alt="Master-Card"
                      className="w-20 mx-2"
                    />
                  </p>
                  <p class="block text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    <Image
                      src={BankAlfalah}
                      alt="Bank-Alf"
                      className="w-20 mx-2"
                    />
                  </p>
                  <p class=" mx-3 block text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    <Image src={Union} alt="Union_Pay" className="w-16" />
                  </p>
                </div>
                {/* Secured  */}
                <div>
                  <h3 class="text-black uppercase dark:text-white">
                    Secured By
                  </h3>
                  <span class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">
                    <img
                      className="w-24 h-7"
                      src="https://merakiui.com/images/full-logo.svg"
                      alt=""
                    />
                  </span>
                  <span class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">
                    <img
                      className="w-24 h-7"
                      src="https://merakiui.com/images/full-logo.svg"
                      alt=""
                    />
                  </span>
                </div>
                {/* ContactUs  */}
                <div>
                  <h3 class="text-black uppercase dark:text-white">
                    Contact Us
                  </h3>
                  <p
                    href="#"
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    +92 333 242 5588
                  </p>
                  <p
                    href="#"
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    +92 337 330 1864
                  </p>
                  <p
                    href="#"
                    class="block mt-2 text-sm text-black dark:text-gray-400 hover:underline"
                  >
                    info@theoneclickdigital.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr class="h-px my-6 bg-gray-400 border-none dark:bg-gray-700" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <p class=" text-black dark:text-gray-400">
              R-613, Block 15, Dastagir, FB Area, Karachi Pakistan
            </p>
            <p class=" text-black dark:text-gray-400">
              © OneClickDigital 2024 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
