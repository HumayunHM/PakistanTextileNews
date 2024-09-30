import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div>
      <hr className="border-t-4 mt-4 border-darkblue w-[92%] mx-auto" />
      <div className="flex justify-start space-x-6 py-3 pl-14 ml-8 bg-white">
        <Link href="/" className="font-inter text-sm text-darkblue hover:text-blue-900">
          HOME
        </Link>
        <Link href="/latest" className="font-inter text-sm text-red-700 hover:text-red-500">
          LATEST
        </Link>
        <Link href="/categories" className="font-inter text-sm text-darkblue hover:text-blue-900">
          LOCAL NEWS
        </Link>
        <Link href="/about" className="font-inter text-sm text-darkblue hover:text-blue-900">
          TECHNOLOGY
        </Link>
        <Link href="/contact" className="font-inter text-sm text-darkblue hover:text-blue-900">
          SUSTAINABILITY
        </Link>
      </div>
    </div>
  );
};

export default Categories;
