import Image from 'next/image'
import Menu from './Menu'

import logo from '../public/logo.png'
import styles from '../styles/Header.module.css'

export default function Header() {
    const titre = 'Laboratoire Next-React';

    return <header className={styles.header}>
        <Image src={logo} alt="Logo" />
        <h1 className={styles.titre}>{titre}</h1>
        <Menu />
    </header>
}
