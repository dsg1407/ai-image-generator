import styles from "./Gallery.module.css"
import { Image } from "./Image"

export function Gallery() {
  return (
    <div className={styles.wrapper}>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  )
}
