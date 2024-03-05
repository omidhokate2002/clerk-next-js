import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const { userId } = auth();
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-up">Sign Up</Link>
              <Link href="/sign-in">Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
