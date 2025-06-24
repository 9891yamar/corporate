import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>株式会社サンプル</h1>
                <nav className={styles.nav}>
                    <a
                        href="/"
                        className={styles.navLink}
                    >
                        トップ
                    </a>
                    <a
                        href="/about"
                        className={styles.navLink}
                    >
                        会社概要
                    </a>
                    <a
                        href="/news"
                        className={styles.navLink}
                    >
                        ニュース
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
