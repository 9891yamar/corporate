import React from "react";
import "modern-normalize";
import "./global.css";
import Header from "../components/layout/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div id="app">
            <Header />

            <main className="main">
                <div className="container">{children}</div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 株式会社サンプル. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default Layout;
