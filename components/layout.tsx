import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './navlink';
import styles from '../styles/layout.module.css';
import { Button, Col, Row, Typography } from 'antd';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <Row justify="center" align="middle">
          <Col xs={18} sm={9} lg={10}>
            <Row align="middle" gutter={2}>
              <Col xs={4} sm={3} lg={2}>
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      width={70}
                      height={70}
                      src="/dummy.png"
                      alt="logo"
                      style={{ borderRadius: '50%' }}
                    />
                  </a>
                </Link>
              </Col>
              <Col flex="auto">
                <Link href="/">
                  <a>
                    <span className={styles.name}>Reviews</span>
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={12} lg={11}>
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
          </Col>
          <Col xs={0} sm={3}>
            <Row justify="end">
              <Button type="primary">Log In</Button>
            </Row>
          </Col>
          <Col xs={6} sm={0}>
            <Row justify="end">
              <Typography>Menu</Typography>
            </Row>
          </Col>
        </Row>
      </nav>
      {children}
    </>
  );
}
