import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import clsx from "clsx"

import HomepageFeatures from "../components/HomepageFeatures"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Resembli UI Home Page, react-virtualized-window Home Page">
      <HomepageHeader />
      <main className={styles.section}>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}