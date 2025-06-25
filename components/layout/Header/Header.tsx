import styles from './Header.module.css';

export interface HeaderProps {
    className?: string;
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={`${styles.header} ${className || ''}`}>
            <div className={styles.container}>
                <h1 className={styles.logo}>株式会社サンプル</h1>
                <nav
                    className={styles.nav}
                    role="navigation"
                    aria-label="メインナビゲーション"
                >
                    <a
                        href="/"
                        className={`${styles.navLink} ${styles.navLinkActive}`}
                    >
                        トップ
                    </a>
                    <a href="/about" className={styles.navLink}>
                        会社概要
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
