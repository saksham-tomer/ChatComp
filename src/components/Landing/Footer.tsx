import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 mt-8 rounded-3xl shadow-xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <svg
                className="h-8 w-8 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">
                AIcreate
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All Rights are reserved under the name of Saksham Tomer. Contact
              the owner for more information and queries.All disputes will be
              solved with logic.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Service
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Investor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Press Release
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Subscribe
            </h3>
            <form className="mt-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your Email Here"
                  className="min-w-0 flex-1 rounded-3xl rounded-r-none border-r-0"
                />
                <Button
                  type="submit"
                  className="rounded-3xl rounded-l-none bg-orange-500 hover:bg-orange-600"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </form>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex justify-between items-center">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Privacy policy
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Terms of Use
              </Link>
            </div>
          </nav>
          <p className="text-base text-gray-400">
            &copy; Copyright Company 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
