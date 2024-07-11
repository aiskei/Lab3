"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                <Link href="/users">Products</Link>
                </li>
                <li>
                <Link href="/users/singleproduct">Get a Single Product</Link>
                </li>
                <li>
                <Link href="/users/lastchance">Last Chance</Link>
                </li>
                <li>
                <Link href="/users/electronics">Electronics</Link>
                </li>
                <li>
                <Link href="/users/jeweleries">Jewelery</Link>
                </li>
            </ul>
          </nav>

          <ProductCard />
     </main>
  );
}
