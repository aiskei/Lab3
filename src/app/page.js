"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
          <Link href="/users">Products</Link>
          <ProductCard />
     </main>
  );
}
