import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        <div className="flex gap-4">
          <UserButton />
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
