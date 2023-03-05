import { Header } from "./components/Header"
import { NewImageForm } from "./components/NewImageForm"
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
            <EmptyImagesList />
          </section>
        </section>
      </main>
    </>
  )
}
