import styles from "./Header.module.css"

import Logo from "../assets/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do site" />
      <p>An AI image generator from text</p>
    </header>
  )
}
