import React from "react";
import styles from "./style.module.css";
import { Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.container}>
          <div className={styles.item}>
            <p className={styles.text}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p className={styles.text}>binarcarrental@gmail.com </p>
            <p className={styles.text}>081-233-334-808</p>
          </div>

          <div className={styles.item}>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Our Services
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Why Us
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Testimonial
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              FAQ
            </Nav.Link>
          </div>

          <div className={styles.item}>
            <p className={styles.text}>Connect with us</p>
            <div>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_facebook.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_instagram.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_twitter.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_mail.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_twitch.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
            </div>
          </div>

          <div className={styles.item}>
            <p className={styles.text}>Copyright Binar 2022</p>
            <a href="index.html">
              <img
                src="assets/img/logo.png"
                alt="logo"
                className={styles.logo}
              />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
