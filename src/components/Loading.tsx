import { Spinner } from "phosphor-react"

import styles from "./Loading.module.css"

export function Loading() {
  return (
    <div className={styles.wrapper}>
      <Spinner size={40} />
    </div>
  )
}
