import { ImgHTMLAttributes, useState } from "react"

import { Header } from "./components/Header"
import { NewImageForm } from "./components/NewImageForm"
import { Gallery } from "./components/Gallery"
import { Loading } from "./components/Loading"
import { EmptyImagesList } from "./components/EmptyImagesList"

import "./styles/global.css"
import styles from "./App.module.css"

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  source: string
}

export function App() {
  const [imagesList, setImagesList] = useState<ImageProps[]>([])
  const [loading, setLoading] = useState(false)

  function createNewImageList(newImagesList: ImageProps[]) {
    setImagesList(newImagesList)
  }

  function changeLoadingStatus(status: boolean) {
    setLoading(status)
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewImageForm
          createNewImageList={createNewImageList}
          changeLoadingStatus={changeLoadingStatus}
        />
        <section className={styles.imagesSection}>
          <section className={styles.imagesListSection}>
            {imagesList.length > 0 &&
              (loading ? <Loading /> : <Gallery imagesList={imagesList} />)}

            {imagesList.length == 0 &&
              (loading ? <Loading /> : <EmptyImagesList />)}
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
