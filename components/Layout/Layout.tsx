import { ReactElement } from 'react'
import styles from '../../styles/Layout.module.css'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={styles.Layout}>
      {children}
      <div className={styles.Navbar} />
    </div>
  )
}
