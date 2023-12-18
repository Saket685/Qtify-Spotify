import React from 'react'
import styles from "./Button.module.css"

export default function Navbar({children}) {
  return <div className={styles.btn}>{children}</div>;
}
