# モダン企業サイト

Vite + TypeScript + Vike(React) V1 を使用したモダンなSSR企業サイトテンプレートです。
CSS Variables、CSS Modules、PostCSSを使用したスケーラブルなCSS設計を採用しています。

## 🚀 技術スタック

### Core

- **Vike V1** - フルスタック React フレームワーク（SSR 対応）
- **React 19** - 最新の React バージョン
- **TypeScript** - 型安全な JavaScript
- **Vite** - 高速ビルドツール

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

## 📁 ディレクトリ構造

```
corporate/
├── .vscode/                     # VSCode設定
│   └── settings.json           # フォーマット設定
├── styles/                     # CSS設計
│   ├── globals/                # グローバルスタイル
│   │   ├── index.css          # エントリーポイント
│   │   ├── variables.css      # CSS Variables
│   │   ├── reset.css          # CSSリセット
│   │   ├── typography.css     # タイポグラフィ
│   │   └── utilities.css      # ユーティリティクラス
│   └── pages/                 # ページ固有スタイル
│       └── index.css          # トップページスタイル
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
├── CSS_GUIDELINES.md         # CSS運用ガイドライン
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

### 🏗️ 開発体験

- ✅ **TypeScript完全対応** - 型安全な開発環境
- ✅ **Prettier** - 自動コードフォーマット
- ✅ **Stylelint** - CSS品質管理
- ✅ **コンポーネント分離** - 再利用可能な構造
- ✅ **VSCode統合** - 保存時自動フォーマット

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
```

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

### デザインシステム

#### CSS Variables

```css
/* カラーパレット */
--color-primary: #667eea;
--color-secondary: #764ba2;
--color-accent: #3498db;

/* スペーシング */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;

/* タイポグラフィ */
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
```

#### 構造

```css
/* 読み込み順序 */
@import url('./variables.css'); /* 1. 変数定義 */
@import url('./reset.css'); /* 2. リセット */
@import url('./typography.css'); /* 3. タイポグラフィ */
@import url('./utilities.css'); /* 4. ユーティリティ */
```

### CSS Modules

```tsx
// コンポーネント固有スタイル
import styles from './Button.module.css';

export const Button = ({ variant, children }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`}>
            {children}
        </button>
    );
};
```

詳細は [`CSS_GUIDELINES.md`](./CSS_GUIDELINES.md) を参照してください。

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
- ✅ **BEM記法** - 必要に応じて使用

### ファイル命名

- **コンポーネント**: PascalCase (`Button.tsx`)
- **CSS Modules**: `Component.module.css`
- **型定義**: `types.ts`、`interfaces.ts`

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

### CSS Variablesの拡張

```css
/* styles/globals/variables.css */
:root {
    /* 新しいカラー */
    --color-info: #17a2b8;
    --color-dark: #343a40;

    /* 新しいスペーシング */
    --spacing-3xl: 5rem;
    --spacing-4xl: 6rem;
}
```

## 📋 TODO / 今後の拡張

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
3. [`CSS_GUIDELINES.md`](./CSS_GUIDELINES.md) に従って開発
4. コミット前にフォーマットを実行 (`pnpm run format`)
5. CSSをリント (`pnpm run lint:css`)
6. コミット (`git commit -m 'Add amazing feature'`)
7. プッシュ (`git push origin feature/amazing-feature`)
8. プルリクエストを作成

## 📚 ドキュメント

- [`CSS_GUIDELINES.md`](./CSS_GUIDELINES.md) - CSS運用ガイドライン
- [Vike Documentation](https://vike.dev/) - Vike公式ドキュメント
- [React 19 Documentation](https://react.dev/) - React公式ドキュメント

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

- `title` (テキストフィールド) - 必須
- `content` (リッチエディタ) - 必須
- `category` (コンテンツ参照) - カテゴリ API 参照
- `thumbnail` (画像) - 任意
- `excerpt` (テキストエリア) - 任意
- `tags` (複数テキスト) - 任意

**カテゴリ API (categories)**

```
エンドポイント: categories
API の型: リスト形式
```

フィールド設定:

- `name` (テキストフィールド) - 必須
- `slug` (テキストフィールド) - 必須

#### 2-2. 環境変数の設定

プロジェクトルートの `.env` ファイルを編集:

```bash
# microCMS設定
MICROCMS_API_KEY=your-api-key-here
MICROCMS_SERVICE_DOMAIN=your-service-id
```

**取得方法:**

- `MICROCMS_API_KEY`: microCMS ダッシュボード → API キー → X-MICROCMS-API-KEY をコピー
- `MICROCMS_SERVICE_DOMAIN`: microCMS の URL `https://your-service-id.microcms.io/` の `your-service-id` 部分

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

- 企業の紹介とサービス概要
- 特徴的な機能の紹介セクション
- ヒーローセクション

### 会社概要 (`/about`)

- 会社情報テーブル
- 企業理念セクション
- 会社の詳細情報

### ニュース・お知らせ (`/news`)

- microCMS による動的ニュース一覧
- カテゴリ別表示
- 個別記事詳細ページ (`/news/[id]`)
- SEO 最適化済み

### エラーページ

- 404 エラーページ
- 一般的なエラーページ

## 🎨 コンポーネント設計

### Layout 構造

- `+Layout.tsx` - 全ページ共通レイアウト
- Header、Main、Footer の基本構造
- CSS Modules によるスタイル管理

### HEAD 管理

- `+Head.tsx` - ページごとのメタタグ管理
- SEO 最適化と OGP 設定
- JSON-LD 構造化データ対応

### コンポーネント分類

- `components/layout/` - Header、Footer などのレイアウト
- `components/ui/` - Button、Card、Modal などの UI コンポーネント
- `components/common/` - Container、Section、Heading などの共通コンポーネント

## 🎯 開発のポイント

### TypeScript

- 完全な型安全性
- CSS Modules 用の型定義
- 厳格な eslint 設定

### スタイル管理

- **CSS Modules** - コンポーネント固有のスタイル
- **グローバル CSS** - 全体共通のスタイル
- **modern-normalize** - ブラウザ差異の統一

### パフォーマンス

- **SSR** - 初回表示の高速化
- **コード分割** - 必要なコードのみ読み込み
- **画像最適化** - public/images/での静的ファイル管理

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

- **microCMS** - 日本製ヘッドレス CMS
- **Contentful** - 海外製ヘッドレス CMS
- **Strapi** - オープンソース CMS

## 📝 今後の拡張予定

- [ ] お問い合わせフォーム
- [x] ニュース・お知らせ機能（microCMS 連携） ✅
- [ ] サイトマップ自動生成
- [ ] PWA 対応
- [ ] 多言語対応（i18n）
- [ ] ダークモード対応
- [ ] ニュース記事の検索機能
- [ ] RSS フィード生成

## 🤝 コントリビューション

1. フォークする
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
