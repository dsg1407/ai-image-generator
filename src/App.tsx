import { Header } from "./components/Header"
import { NewImageForm } from "./components/NewImageForm"
import { Gallery } from "./components/Gallery"
import { EmptyImagesList } from "./components/EmptyImagesList"

import "./styles/global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewImageForm />
        <section className={styles.imagesSection}>
          <section className={styles.imagesListSection}>
            <Gallery />
            {/* <EmptyImagesList /> */}
          </section>
        </section>
      </main>
      <footer className={styles.coffee}>
        <a
          href="https://www.buymeacoffee.com/dsg1407"
          target="_blank"
          title="Buy me a Coffee!!"
        >
          <img src="./buy-coffee-qr.png" />
        </a>
      </footer>
    </>
  )
}
