"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const session = useSession();
  const { status } = session;
  if (status === "loading") {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center">
          <ClipLoader color="rgb(59 130 246)" speedMultiplier={1.5} />
        </div>
      </>
    );
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  console.log("dashboard:", status);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Link href={"/dashboard"}>
          <h1>Side bar</h1>
        </Link>
        <Link href={"/dashboard/invoice"}>Incoice</Link>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}