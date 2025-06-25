# モダン企業サイト

Vite + TypeScript + Vike(React) V1 を使用したモダンなSSR企業サイトテンプレートです。
CSS Variables、CSS Modules、PostCSSを使用したスケーラブルなCSS設計を採用しています。

## 🚀 技術スタック

### Core

- **Vike V1** - フルスタック React フレームワーク（SSR 対応）
- **React 19** - 最新の React バージョン
- **TypeScript** - 型安全な JavaScript
- **Vite 6.3.5** - 最新の高速ビルドツール

### Styling & UI

- **CSS Variables** - 一貫したデザインシステム
- **CSS Modules** - スコープ化された CSS
- **PostCSS** - CSS変換とプラグイン
- **Autoprefixer** - ベンダープレフィックス自動付与
- **modern-normalize** - モダンな CSS リセット

### Development Tools

- **Prettier** - コードフォーマッター
- **Stylelint** - CSS リンティング
- **vike-react** - Vike 用 React 統合
- **pnpm 8.9.2** - 高速パッケージマネージャー

### Container & Deployment

- **Docker** - マルチステージビルド対応
- **Docker Compose** - 開発・本番環境の統一

## 📁 ディレクトリ構造

```
corporate/
├── .vscode/                     # VSCode設定
│   └── settings.json           # フォーマット設定
├── docs/                       # プロジェクトドキュメント
│   ├── CSS_GUIDELINES.md       # CSS運用ガイドライン
│   └── LADLE_GUIDE.md         # Ladleストーリーブック用ガイド
├── public/                     # 静的ファイル
│   ├── images/                # 画像ファイル
│   ├── icons/                 # アイコンファイル
│   └── assets/                # その他静的アセット
├── stories/                    # Storybookストーリーファイル
│   ├── *.stories.tsx          # コンポーネントストーリー
│   └── examples/              # サンプルストーリー
├── styles/                     # CSS設計
│   └── globals/                # グローバルスタイル
│       ├── index.css          # エントリーポイント
│       ├── variables.css      # CSS Variables
│       ├── reset.css          # CSSリセット
│       ├── typography.css     # タイポグラフィ
│       └── utilities.css      # ユーティリティクラス
├── components/                 # コンポーネント
│   ├── ui/                    # 基本UIコンポーネント
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   └── Card/
│   │       ├── Card.tsx
│   │       ├── Card.module.css
│   │       └── index.ts
│   ├── layout/                # レイアウト関連
│   │   └── Header/
│   │       ├── Header.tsx
│   │       ├── Header.module.css
│   │       └── index.ts
│   └── index.ts               # 統合エクスポート
├── pages/                     # Vikeページディレクトリ
│   ├── +config.ts            # Vike設定ファイル
│   ├── +Layout.tsx           # 共通レイアウト
│   ├── +Head.tsx             # 共通HEAD設定
│   ├── index/
│   │   ├── +Page.tsx         # トップページ (/)
│   │   ├── +config.ts        # ページ設定
│   │   └── +Head.tsx         # ページ用HEAD
│   ├── about/
│   │   └── +Page.tsx         # 会社概要ページ (/about)
│   └── _error/
│       └── +Page.tsx         # エラーページ
├── types/                    # TypeScript型定義
│   └── css-modules.d.ts      # CSS Modules型定義
├── .prettierrc.json          # Prettier設定
├── .stylelintrc.json         # Stylelint設定
├── postcss.config.js         # PostCSS設定
├── docs/                     # プロジェクトドキュメント
│   ├── CSS_GUIDELINES.md     # CSS運用ガイドライン
│   └── LADLE_GUIDE.md       # Ladleストーリーブック用ガイド
├── vite.config.ts            # Vite設定（SSR対応）
├── package.json
└── tsconfig.json             # TypeScript設定
```

## ✨ 特徴

### 🎨 モダンCSS設計

- ✅ **CSS Variables** - 一貫したデザインシステム
- ✅ **CSS Modules** - コンポーネント単位のスタイル管理
- ✅ **ユーティリティクラス** - 効率的なレイアウト構築
- ✅ **PostCSS** - 変数、ネスト、自動プレフィックス
- ✅ **モバイルファースト** - レスポンシブデザイン
- ✅ **CSS整理完了** - 重複ファイル削除、現代的設計への移行完了

### 📁 CSS構成の最適化

**整理されたファイル構成:**

- **グローバルスタイル** (`styles/globals/`) - 最小限のベーススタイル
- **CSS Modules** (`components/*/*.module.css`) - コンポーネント固有のスタイル
- **削除された重複ファイル** - `pages/global.css`, `styles/pages/index.css`

**設計方針:**

- CSS Modules優先 - スタイルの局所化
- ユーティリティクラス活用 - 効率的なスタイリング
- BEM記法からの脱却 - 現代的なアプローチへの移行

### 🏗️ 開発体験

- ✅ **TypeScript完全対応** - 型安全な開発環境
- ✅ **Prettier** - 自動コードフォーマット
- ✅ **Stylelint** - CSS品質管理
- ✅ **コンポーネント分離** - 再利用可能な構造
- ✅ **VSCode統合** - 保存時自動フォーマット
- ✅ **ストーリーブック対応** - コンポーネント開発・テスト環境
- ✅ **静的ファイル管理** - 画像・アセットの最適化配置

### 📁 プロジェクト構造の最適化

**整理されたフォルダ構成:**

- **ドキュメント** (`docs/`) - プロジェクト関連ドキュメントを集約
- **静的ファイル** (`public/`) - 画像、アイコン、その他アセット
- **ストーリー** (`stories/`) - Storybookストーリーファイルを統一管理
- **コンポーネント** (`components/`) - 再利用可能なUIコンポーネント

### ⚡ パフォーマンス

- ✅ **SSR対応** - サーバーサイドレンダリング
- ✅ **Vite** - 高速開発・ビルド
- ✅ **CSS最適化** - 未使用CSS削除
- ✅ **TypeScript** - 型チェックと最適化

## 🛠️ セットアップ手順

### 1. 依存関係をインストール

```bash
pnpm install
```

### 2. 開発サーバーの起動

```bash
pnpm run dev
```

開発サーバーは http://localhost:3000 で起動します。

### 3. 利用可能なスクリプト

```bash
# 開発
pnpm run dev          # 開発サーバー起動

# ビルド
pnpm run build        # 本番用ビルド
pnpm run preview      # ビルド後プレビュー

# コード品質
pnpm run format       # Prettier実行
pnpm run format:check # Prettierチェック
pnpm run lint:css     # Stylelint実行
pnpm run lint:css:check # Stylelintチェック

# Docker
pnpm run docker:build # Dockerイメージをビルド
pnpm run docker:run   # 本番用コンテナを実行
pnpm run docker:dev   # 開発用コンテナを実行
pnpm run docker:prod  # 本番用コンテナをバックグラウンドで実行
pnpm run docker:stop  # Docker Composeコンテナを停止
pnpm run docker:clean # 未使用のDockerリソースを削除
```

## 🐳 Docker対応 ✅

このプロジェクトは完全にDockerコンテナ化に対応しており、**どの環境でもワンコマンドで開発環境が立ち上がります**。

### 🚀 クイックスタート

```bash
# 開発環境を即座に起動（推奨）
pnpm run docker:dev
```

**アクセス**: http://localhost:3001

### 📋 利用可能なDockerコマンド

```bash
# 開発用コンテナを実行（ポート3001、ホットリロード対応）
pnpm run docker:dev

# 本番用イメージをビルド
pnpm run docker:build

# 本番用コンテナを実行（ポート3000）
pnpm run docker:run

# 本番用コンテナをバックグラウンドで実行
pnpm run docker:prod

# コンテナを停止
pnpm run docker:stop
```

### ✅ 動作確認済み・環境不問

- **🎯 ワンコマンド起動**: `pnpm run docker:dev`だけで開発環境が立ち上がる
- **🌍 環境不問**: macOS、Windows、Linux どの環境でも同じように動作
- **⚡ 即座にアクセス**: http://localhost:3001 で開発サーバーに接続
- **🔄 ホットリロード**: ファイル変更時の自動リロード対応
- **📦 依存関係管理**: pnpm 8.9.2 による安定したパッケージ管理
- **🏗️ 本番対応**: マルチステージビルドによる最適化済み

### ファイル構成

- `Dockerfile` - 本番用マルチステージビルド
- `Dockerfile.dev` - 開発用（ホットリロード対応）
- `docker-compose.yml` - 開発・本番両方の設定
- `.dockerignore` - Docker用除外ファイル

### Docker Composeでの実行

```bash
# 開発モード（ポート3001、ボリュームマウント）
docker-compose up corporate-dev

# 本番モード（ポート3000、最適化済み）
docker-compose up corporate-site -d

# 停止
docker-compose down
```

### Docker化のメリット

- **🔧 環境統一**: 開発・本番環境の完全一致
- **🚀 簡単セットアップ**: 新メンバーも即座に開発開始可能
- **🔒 依存関係固定**: Node.js、pnpmバージョンの一貫性
- **☁️ デプロイ準備**: Docker対応のクラウド環境で即座に展開可能
- **⚙️ 設定最適化**: Vite + Docker環境の最適化設定済み

### 🆕 新規開発者向けクイックスタート

```bash
# 1. プロジェクトをクローン
git clone <repository-url>
cd corporate

# 2. 開発環境を起動（これだけで完了！）
pnpm run docker:dev

# 3. ブラウザでアクセス
# http://localhost:3001
```

**必要なもの**: Docker Desktop のみ（Node.js インストール不要）

## 📄 ページ構成

### トップページ (`/`)

- 企業の紹介とサービス概要
- 特徴的な機能の紹介セクション
- ヒーローセクションとCTAボタン
- モダンなカードレイアウト

### 会社概要 (`/about`)

- 会社情報とプロフィール
- 企業理念セクション
- 事業内容の詳細

### エラーページ

- 404エラーページ
- 一般的なエラーページ

## 🎨 CSS設計

このプロジェクトでは**モダンなCSS設計手法**を採用し、保守性・拡張性・パフォーマンスを重視しています。

### 設計原則

- **CSS Variables** - 一貫したデザインシステム
- **CSS Modules** - コンポーネント単位のスタイル管理
- **ユーティリティクラス** - 効率的なレイアウト構築
- **PostCSS** - 変数、ネスト、自動プレフィックス
- **モバイルファースト** - レスポンシブデザイン

### 基本的な使用例

```tsx
// CSS Modules の基本的な使用方法
import styles from './Button.module.css';

export const Button = ({ variant, children }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`}>
            {children}
        </button>
    );
};
```

**詳細な運用ガイドラインは [`docs/CSS_GUIDELINES.md`](./docs/CSS_GUIDELINES.md) を参照してください。**

## 🏗️ コンポーネント設計

### UI Components

- **Button** - プライマリ、セカンダリ、アウトライン、ゴーストバリアント
- **Card** - デフォルト、エレベート、アウトラインバリアント
- **Icon** - アイコンコンポーネント（拡張予定）

### Layout Components

- **Header** - レスポンシブナビゲーション
- **Footer** - サイトフッター（実装予定）
- **Container** - レイアウトコンテナ（実装予定）

### コンポーネント使用例

```tsx
import { Button, Card, CardBody } from '../components';

<Card variant="elevated" hoverable>
    <CardBody>
        <h3>サービス名</h3>
        <p>サービス説明文</p>
        <Button variant="primary" size="lg">
            詳細を見る
        </Button>
    </CardBody>
</Card>;
```

## 🎯 開発規約

### TypeScript/React

- ✅ **React.FC禁止** - 関数宣言を使用
- ✅ **型安全性** - interface定義必須
- ✅ **Props継承** - HTML属性の適切な継承
- ✅ **Hooks使用** - モダンなReact記法

### CSS

- ✅ **CSS Variables** - グローバル値の一元管理
- ✅ **CSS Modules** - コンポーネントスコープ
- ✅ **命名規則** - camelCase（CSS Modules）、kebab-case（utilities）

### ファイル命名

- **コンポーネント**: PascalCase (`Button.tsx`)
- **CSS Modules**: `Component.module.css`
- **型定義**: `types.ts`、`interfaces.ts`

**詳細な規約は [`docs/CSS_GUIDELINES.md`](./docs/CSS_GUIDELINES.md) を参照してください。**

## 🚀 デプロイ

### 推奨デプロイ先

1. **Vercel** - SSR対応、簡単デプロイ
2. **Netlify** - 静的サイト向け
3. **Railway** - サーバーサイド重視

### Vercelでのデプロイ

```bash
# 1. GitHubにプッシュ
git add .
git commit -m "デプロイ準備完了"
git push origin main

# 2. Vercelでインポート
# https://vercel.com → New Project → GitHub repo選択
```

## 🔧 カスタマイズ

### 新しいページの追加

```bash
# 新しいページを作成
mkdir pages/contact
touch pages/contact/+Page.tsx
touch pages/contact/+Head.tsx
```

### 新しいUIコンポーネントの追加

```bash
# 新しいコンポーネントを作成
mkdir components/ui/Input
touch components/ui/Input/Input.tsx
touch components/ui/Input/Input.module.css
touch components/ui/Input/index.ts

# components/index.tsに追加
export * from './ui/Input';
```

### CSS Variables・スタイルの拡張

```css
/* styles/globals/variables.css */
:root {
    /* カスタムカラー */
    --color-info: #17a2b8;
    --color-dark: #343a40;
}
```

**詳細なカスタマイズ方法は [`docs/CSS_GUIDELINES.md`](./docs/CSS_GUIDELINES.md) を参照してください。**

## 📋 完了事項 & 今後の拡張

### ✅ 完了事項

- [x] **Docker完全対応** - ワンコマンドでの開発環境構築
- [x] **環境不問対応** - macOS/Windows/Linux対応
- [x] **Docker設定最適化** - Vite + Docker環境の最適化完了
- [x] **ホットリロード対応** - コンテナ環境でのファイル監視
- [x] **CSS設計の確立** - CSS Variables・Modules・ユーティリティクラス
- [x] **UIコンポーネント** - Button・Card・Headerの実装
- [x] **開発環境整備** - Prettier・Stylelint・VSCode統合
- [x] **TypeScript完全対応** - 型安全性とlintルール
- [x] **CSS運用ガイドライン** - 詳細な設計指針とチェックリスト
- [x] **レスポンシブデザイン** - モバイルファースト設計
- [x] **アクセシビリティ** - ARIA対応・キーボードナビゲーション
- [x] **プロジェクト構造最適化** - ドキュメント・ストーリー・静的ファイルの整理
- [x] **静的ファイル管理** - 画像・アイコン・アセット用フォルダ構成

### 短期的な改善

- [ ] お問い合わせフォーム
- [ ] Footerコンポーネント
- [ ] Loadingコンポーネント
- [ ] モーダルコンポーネント

### 中期的な機能

- [ ] PWA対応
- [ ] ダークモード
- [ ] アニメーション（Framer Motion）
- [ ] 画像最適化

### 長期的な拡張

- [ ] 多言語対応（i18n）
- [ ] CMS連携（microCMS/Contentful）
- [ ] 検索機能
- [ ] サイトマップ自動生成

## 🤝 コントリビューション

1. フォークする
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. [`docs/CSS_GUIDELINES.md`](./docs/CSS_GUIDELINES.md) に従って開発
4. コミット前にフォーマットを実行 (`pnpm run format`)
5. CSSをリント (`pnpm run lint:css`)
6. コミット (`git commit -m 'Add amazing feature'`)
7. プッシュ (`git push origin feature/amazing-feature`)
8. プルリクエストを作成

## 📚 ドキュメント

- [`docs/CSS_GUIDELINES.md`](./docs/CSS_GUIDELINES.md) - CSS運用ガイドライン
- [`docs/LADLE_GUIDE.md`](./docs/LADLE_GUIDE.md) - Ladleストーリーブック用ガイド
- [Vike Documentation](https://vike.dev/) - Vike公式ドキュメント
- [React 19 Documentation](https://react.dev/) - React公式ドキュメント

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
