"use client";
import { useSession } from "next-auth/react";
import ClipLoader from "react-spinners/ClipLoader";
import { redirect } from "next/navigation";
import SideBar from "../components/dashboard/SideBar";

export default function Layout({ children }) {
  const session = useSession();
  const { status } = session;

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <ClipLoader color="rgb(59 130 246)" speedMultiplier={1.5} />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  console.log("dashboard:", status);


  return (
    <>
      <div className="flex ">
        <SideBar />
        <div className="h-32 rounded-lg bg-gray-200 mx-auto">{children}</div>
      </div>
    </>
  );
}
