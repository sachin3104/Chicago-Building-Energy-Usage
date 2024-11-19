// src/app/components/Breadcrumb.js
"use client";

import Link from "next/link";
import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <nav className="text-sm text-[#E0E0E0] mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-[#66FCF1]">/</span>}
            {link.href ? (
              <Link href={link.href} className="text-[#66FCF1] hover:underline">
                {link.label}
              </Link>
            ) : (
              <span className="text-[#999999]">{link.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
