declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// Viteの環境変数用の型定義
interface ImportMetaEnv {
    readonly VITE_MICROCMS_API_KEY: string;
    readonly VITE_MICROCMS_SERVICE_DOMAIN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Node.js環境変数の型定義（SSR用）
declare namespace NodeJS {
    interface ProcessEnv {
        readonly VITE_MICROCMS_API_KEY: string;
        readonly VITE_MICROCMS_SERVICE_DOMAIN: string;
    }
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

// Viteの環境変数用の型定義
interface ImportMetaEnv {
    readonly VITE_MICROCMS_API_KEY: string;
    readonly VITE_MICROCMS_SERVICE_DOMAIN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
