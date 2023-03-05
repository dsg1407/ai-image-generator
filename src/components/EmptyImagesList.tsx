import { Image } from "phosphor-react"

import styles from "./EmptyImagesList.module.css"

export function EmptyImagesList() {
  return (
    <div className={styles.wrapper}>
      <Image size={56} />
      <div>
        <strong>No images to display</strong>
        <p>Write what you would like to see and click 'Create'</p>
      </div>
    </div>
  )
}
