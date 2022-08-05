import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './navlink';
import styles from '../styles/layout.module.css';
import { Button } from 'antd';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                layout="responsive"
                width={70}
                height={70}
                src="https://via.placeholder.com/70"
                alt="logo"
                style={{ borderRadius: '50%' }}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <span className={styles.name}>Reviews</span>
            </a>
          </Link>
        </div>
        <ul className={styles.navlinks}>
          <li>
            <NavLink exact href="/restaurants">
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink exact href="/dishes">
              Dishes
            </NavLink>
          </li>
        </ul>
        <Button type="primary">Log In</Button>
      </nav>
      {children}
    </>
  );
}
