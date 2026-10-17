"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CatalogButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border border-[#DCE3E3] rounded-lg px-4 py-2"
      >
        Каталог
      </button>

      <div
        className={`absolute top-full left-0 mt-1 bg-white border border-[#DCE3E3] rounded-lg shadow-sm min-w-40 z-10 origin-top transition-all duration-150 ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        <Link
          href="/test-1"
          onClick={() => setOpen(false)}
          className="block px-4 py-2 hover:bg-[#F3F6F6]"
        >
          test 1
        </Link>
        <Link
          href="/test-2"
          onClick={() => setOpen(false)}
          className="block px-4 py-2 hover:bg-[#F3F6F6]"
        >
          test 2
        </Link>
        <Link
          href="/test-3"
          onClick={() => setOpen(false)}
          className="block px-4 py-2 hover:bg-[#F3F6F6]"
        >
          test 3
        </Link>
      </div>
    </div>
  );
}
