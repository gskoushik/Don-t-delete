import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header id="header">
      <div className={clsx('d-flex ', 'flex-column')}>
        <div className={styles.profile}>
          <img src="../assets/img/profile-img.jpg" alt="" className={clsx('img-fluid', 'rounded-circle')}/>
          <h1 className={clsx('text-light ')}><a href="index.html">{siteConfig.title}</a></h1>
          <div class ="social-links mt-3 text-center">
          <a href="https://twitter.com/gskoushik" class ="twitter" target="_blank"><i class ="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/gandikotasaikoushik" target="_blank" class ="facebook"><i class ="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/gandikotasaikoushik" target="_blank" class ="instagram"><i class ="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/saikoushikgandikota" target="_blank" class ="linkedin"><i class ="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>

  );
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">
    //   {/* <HomepageHeader /> */}
    //   <main>
    //     {/* <HomepageFeatures /> */}
    //   </main>
    // </Layout>
    <HomepageHeader />
  );
}
