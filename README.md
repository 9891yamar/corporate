# Vike SSR 企業サイト

Vite + TypeScript + Vike(React) V1 を使用したモダンな SSR 企業サイトテンプレートです。

## 🚀 技術スタック

-   **Vike V1** - フルスタック React フレームワーク（SSR 対応）
-   **React 19** - 最新の React バージョン
-   **TypeScript** - 型安全な JavaScript
-   **Vite** - 高速ビルドツール
-   **CSS Modules** - スコープ化された CSS
-   **modern-normalize** - モダンな CSS リセット
-   **vike-react** - Vike 用 React 統合
-   **Prettier** - コードフォーマッター
-   **microCMS** - ヘッドレス CMS（ニュース管理）

## 📁 ディレクトリ構造

```
vike-ssr-corporate/
├── public/                       # 静的ファイル
│   └── images/                  # 画像ファイル
│       ├── logo/
│       ├── hero/
│       ├── company/
│       └── icons/
├── pages/                       # Vikeページディレクトリ
│   ├── +config.ts              # Vike設定ファイル
│   ├── +Layout.tsx             # 共通レイアウトコンポーネント
│   ├── +Head.tsx               # 共通HEAD設定
│   ├── global.css              # グローバルスタイル
│   ├── index/
│   │   ├── +Page.tsx           # トップページ (/)
│   │   └── +Head.tsx           # トップページ用HEAD
│   ├── about/
│   │   ├── +Page.tsx           # 会社概要ページ (/about)
│   │   └── +Head.tsx           # 会社概要ページ用HEAD
│   ├── news/
│   │   ├── +Page.tsx           # ニュース一覧ページ (/news)
│   │   ├── +Head.tsx           # ニュース一覧用HEAD
│   │   └── @id/                # 個別ニュース記事 (/news/[id])
│   │       ├── +Page.tsx
│   │       └── +Head.tsx
│   └── _error/
│       └── +Page.tsx           # エラーページ
├── components/                  # 再利用可能コンポーネント
│   ├── layout/                 # レイアウト関連コンポーネント
│   │   └── Header/
│   │       ├── Header.tsx
│   │       ├── Header.module.css
│   │       └── index.ts
│   ├── ui/                     # UIコンポーネント
│   └── common/                 # 共通コンポーネント
├── lib/                        # ライブラリ・ユーティリティ
│   └── microcms.ts            # microCMS設定・API関数
├── types/                      # TypeScript型定義
│   └── css-modules.d.ts        # CSS Modules型定義
├── .env                        # 環境変数（Git除外）
├── vite.config.ts              # Vite設定（SSR対応）
├── package.json
├── tsconfig.json               # TypeScript設定
└── tsconfig.node.json          # Node.js用TypeScript設定
```

## ✨ 特徴

-   ✅ **SSR 対応** - サーバーサイドレンダリング（prerender: false）
-   ✅ **Vike V1 設計** - 最新の Vike 設計パターンを採用
-   ✅ **TypeScript 完全対応** - 型安全な開発環境
-   ✅ **CSS Modules** - スコープ化されたスタイル管理
-   ✅ **モダン CSS** - modern-normalize によるブラウザ差異の解消
-   ✅ **SEO 最適化** - 構造化データ(JSON-LD)とメタタグ対応
-   ✅ **コンポーネント分離** - 再利用可能なコンポーネント構造
-   ✅ **アロー関数** - モダンな React 記法
-   ✅ **パフォーマンス最適化** - Vite による高速開発・ビルド

## 🛠️ セットアップ手順

### 1. 依存関係をインストール

```bash
pnpm install
```

### 2. microCMS の設定

#### 2-1. microCMS でプロジェクトを作成

1. [microCMS](https://microcms.io/) にアクセスしてアカウントを作成
2. 新しいサービスを作成
3. 以下の API を作成:

**ニュース API (news)**

```
エンドポイント: news
API の型: リスト形式
```

フィールド設定:

-   `title` (テキストフィールド) - 必須
-   `content` (リッチエディタ) - 必須
-   `category` (コンテンツ参照) - カテゴリ API 参照
-   `thumbnail` (画像) - 任意
-   `excerpt` (テキストエリア) - 任意
-   `tags` (複数テキスト) - 任意

**カテゴリ API (categories)**

```
エンドポイント: categories
API の型: リスト形式
```

フィールド設定:

-   `name` (テキストフィールド) - 必須
-   `slug` (テキストフィールド) - 必須

#### 2-2. 環境変数の設定

プロジェクトルートの `.env` ファイルを編集:

```bash
# microCMS設定
MICROCMS_API_KEY=your-api-key-here
MICROCMS_SERVICE_DOMAIN=your-service-id
```

**取得方法:**

-   `MICROCMS_API_KEY`: microCMS ダッシュボード → API キー → X-MICROCMS-API-KEY をコピー
-   `MICROCMS_SERVICE_DOMAIN`: microCMS の URL `https://your-service-id.microcms.io/` の `your-service-id` 部分

## 🚀 実行方法

### 開発サーバーの起動

```bash
pnpm run dev
```

開発サーバーは http://localhost:3000 で起動します。

### 本番用ビルド

```bash
pnpm run build
```

### 本番サーバーの起動（ビルド後）

```bash
pnpm run preview
```

## 📄 ページ構成

### トップページ (`/`)

-   企業の紹介とサービス概要
-   特徴的な機能の紹介セクション
-   ヒーローセクション

### 会社概要 (`/about`)

-   会社情報テーブル
-   企業理念セクション
-   会社の詳細情報

### ニュース・お知らせ (`/news`)

-   microCMS による動的ニュース一覧
-   カテゴリ別表示
-   個別記事詳細ページ (`/news/[id]`)
-   SEO 最適化済み

### エラーページ

-   404 エラーページ
-   一般的なエラーページ

## 🎨 コンポーネント設計

### Layout 構造

-   `+Layout.tsx` - 全ページ共通レイアウト
-   Header、Main、Footer の基本構造
-   CSS Modules によるスタイル管理

### HEAD 管理

-   `+Head.tsx` - ページごとのメタタグ管理
-   SEO 最適化と OGP 設定
-   JSON-LD 構造化データ対応

### コンポーネント分類

-   `components/layout/` - Header、Footer などのレイアウト
-   `components/ui/` - Button、Card、Modal などの UI コンポーネント
-   `components/common/` - Container、Section、Heading などの共通コンポーネント

## 🎯 開発のポイント

### TypeScript

-   完全な型安全性
-   CSS Modules 用の型定義
-   厳格な eslint 設定

### スタイル管理

-   **CSS Modules** - コンポーネント固有のスタイル
-   **グローバル CSS** - 全体共通のスタイル
-   **modern-normalize** - ブラウザ差異の統一

### パフォーマンス

-   **SSR** - 初回表示の高速化
-   **コード分割** - 必要なコードのみ読み込み
-   **画像最適化** - public/images/での静的ファイル管理

## 🚀 デプロイ

### 推奨デプロイ先

1. **Vercel** - SSR 対応、簡単デプロイ
2. **Netlify** - 静的サイト向け
3. **Railway** - サーバーサイド重視

### Vercel でのデプロイ手順

```bash
# GitHubにプッシュ
git add .
git commit -m "デプロイ準備完了"
git push origin main

# Vercelでインポート
# https://vercel.com → New Project → GitHub repo選択
```

## 🔧 カスタマイズ

### 新しいページの追加

```bash
# 新しいページディレクトリを作成
mkdir pages/contact
touch pages/contact/+Page.tsx
touch pages/contact/+Head.tsx
```

### 新しいコンポーネントの追加

```bash
# 新しいUIコンポーネントを作成
mkdir components/ui/Button
touch components/ui/Button/Button.tsx
touch components/ui/Button/Button.module.css
touch components/ui/Button/index.ts
```

### CMS 連携（オプション）

-   **microCMS** - 日本製ヘッドレス CMS
-   **Contentful** - 海外製ヘッドレス CMS
-   **Strapi** - オープンソース CMS

## 📝 今後の拡張予定

-   [ ] お問い合わせフォーム
-   [x] ニュース・お知らせ機能（microCMS 連携） ✅
-   [ ] サイトマップ自動生成
-   [ ] PWA 対応
-   [ ] 多言語対応（i18n）
-   [ ] ダークモード対応
-   [ ] ニュース記事の検索機能
-   [ ] RSS フィード生成

## 🤝 コントリビューション

1. フォークする
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
