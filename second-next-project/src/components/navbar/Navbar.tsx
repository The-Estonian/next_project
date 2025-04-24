"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./Navbar.module.scss"

const Navbar = () => {
    const pathname = usePathname();
    return <div className={styles.navbar}>
        <Link href="/" className={pathname === '/' ? `${styles.navbar_button} ${styles.active}` : styles.navbar_button}>Home</Link>
        <Link href="/portfolio" className={pathname === '/portfolio' ? `${styles.navbar_button} ${styles.active}` : styles.navbar_button}>Portfolio</Link>
        <Link href="/users" className={pathname === '/users' ? `${styles.navbar_button} ${styles.active}` : styles.navbar_button}>Users</Link>
        <Link href="/search" className={pathname === '/search' ? `${styles.navbar_button} ${styles.active}` : styles.navbar_button}>Search</Link>
    </div>
}

export default Navbar