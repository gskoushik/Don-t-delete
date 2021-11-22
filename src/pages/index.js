import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import App from '../components/App';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Hello">
       <App />
    </Layout>
   
  );
}
