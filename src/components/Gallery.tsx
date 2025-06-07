import styles from "./Gallery.module.css"
import { Image } from "./Image"

import { ImageProps } from "../App"

interface GalleryProps {
  imagesList: ImageProps[]
}

export function Gallery({ imagesList }: GalleryProps) {
  return (
    <div className={styles.wrapper}>
      {imagesList.map((image) => {
        return <Image key={image.source} source={`${image.source}`} />
      })}
    </div>
  )
}
