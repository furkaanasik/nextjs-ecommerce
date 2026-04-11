import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={36} height={36} />
        <p className="hidden md:block text-md font-bold tracking-tighter">
          Ecommerce
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-6 h-6 text-gray-600" />
        </Link>
        <Bell className="w-6 h-6 text-gray-600" />
        <ShoppingCart className="w-6 h-6 text-gray-600" />
        <Link href="/login" className="text-sm font-medium text-gray-600">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
