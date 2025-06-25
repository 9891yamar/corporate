# Ladle 使い方ガイド

このプロジェクトでは、UIコンポーネントの開発とテストに **Ladle** を使用しています。LadleはStorybookの軽量な代替ツールで、Viteベースの高速なコンポーネント開発環境を提供します。

## 📋 目次

- [基本概念](#基本概念)
- [セットアップ](#セットアップ)
- [基本的な使い方](#基本的な使い方)
- [ストーリーファイルの作成](#ストーリーファイルの作成)
- [高度な機能](#高度な機能)
- [設定](#設定)
- [トラブルシューティング](#トラブルシューティング)

## 🎯 基本概念

### Ladleとは

- **軽量**: Storybookの1/10のサイズ
- **高速**: Viteベースで瞬時に起動
- **シンプル**: 複雑な設定が不要
- **TypeScript対応**: 完全な型安全性

### ストーリーとは

ストーリーは、コンポーネントの特定の状態や使用例を表すファイルです。各ストーリーは、コンポーネントがどのように動作するかを示すサンプルです。

## 🚀 セットアップ

### 1. 起動方法

```bash
# Ladle開発サーバーを起動
pnpm run storybook

# または
npx ladle serve
```

### 2. アクセス方法

ブラウザで以下のURLにアクセス：

- **開発サーバー**: http://localhost:61000

### 3. ビルド方法

```bash
# 本番用ビルド
pnpm run build-storybook
```

## 📝 基本的な使い方

### ディレクトリ構造

```
components/
├── ui/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── Button.stories.tsx    # ←ストーリーファイル
│   └── Card/
│       ├── Card.tsx
│       ├── Card.module.css
│       └── Card.stories.tsx      # ←ストーリーファイル
└── welcome.stories.tsx           # ←ウェルカムページ
```

### ブラウザでの操作

1. **コンポーネント選択**: 左サイドバーからコンポーネントを選択
2. **ストーリー閲覧**: 各コンポーネントの様々な状態を確認
3. **インタラクティブテスト**: プロパティを変更してリアルタイムで確認
4. **コード確認**: ソースコードタブでImplementationを確認

## 🛠️ ストーリーファイルの作成

### 基本的なストーリーファイル

```tsx
// Button.stories.tsx
import type { Story } from '@ladle/react';
import { Button, type ButtonProps } from './Button';

// デフォルトエクスポート（メタデータ）
export default {
    title: 'UI/Button',
};

// 基本的なストーリー
export const Primary: Story<ButtonProps> = () => (
    <Button variant="primary">プライマリボタン</Button>
);

export const Secondary: Story<ButtonProps> = () => (
    <Button variant="secondary">セカンダリボタン</Button>
);
```

### インタラクティブストーリー

```tsx
// プロパティを動的に変更できるストーリー
export const Interactive: Story<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    disabled = false,
}) => (
    <Button variant={variant} size={size} disabled={disabled}>
        インタラクティブボタン
    </Button>
);

// デフォルト値を設定
Interactive.args = {
    variant: 'primary',
    size: 'md',
    disabled: false,
};
```

### 複数のバリエーション

```tsx
// 全サイズを一度に表示
export const AllSizes: Story = () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="sm">小</Button>
        <Button size="md">中</Button>
        <Button size="lg">大</Button>
    </div>
);

// 状態のデモンストレーション
export const States: Story = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button>通常状態</Button>
        <Button disabled>無効状態</Button>
        <Button loading>読み込み中</Button>
    </div>
);
```

### CSS Modulesを使用する場合

```tsx
import { Button } from './Button';
import styles from './Button.module.css';

export const CustomStyled: Story = () => (
    <Button className={styles.customButton}>カスタムスタイル</Button>
);
```

## 🎨 高度な機能

### 1. テーマの切り替え

- 右上のテーマボタンでライト/ダークモードを切り替え

### 2. レスポンシブテスト

- 画面サイズボタンで異なるビューポートサイズをテスト

### 3. コンポーネント検索

- サイドバーの検索ボックスでコンポーネントを素早く検索

### 4. ホットリロード

- ファイルを編集すると自動的にブラウザに反映

### 5. アクセシビリティテスト

```tsx
export const AccessibilityDemo: Story = () => (
    <div>
        <Button aria-label="メニューを開く">☰</Button>
        <Button disabled aria-describedby="help-text">
            ヘルプが必要なボタン
        </Button>
        <div id="help-text">このボタンは現在使用できません</div>
    </div>
);
```

## ⚙️ 設定

### ladle.config.mjs

```javascript
/** @type {import('@ladle/react').UserConfig} */
export default {
    // ストーリーファイルの場所
    stories: 'components/**/*.stories.{js,jsx,ts,tsx}',

    // 開発サーバーのポート
    port: 61000,

    // デフォルトで表示するストーリー
    defaultStory: 'welcome',

    // テーマ設定
    addons: {
        theme: {
            default: 'light',
        },
    },

    // 出力ディレクトリ（ビルド時）
    outDir: 'dist-storybook',
};
```

### 高度な設定例

```javascript
export default {
    stories: 'components/**/*.stories.{js,jsx,ts,tsx}',
    port: 61000,

    // カスタムVite設定
    viteConfig: {
        resolve: {
            alias: {
                '@': '/src',
                '@components': '/components',
            },
        },
    },

    // レスポンシブテスト用のビューポート
    addons: {
        viewport: {
            default: '1200px',
            viewports: {
                mobile: { width: 375, height: 667 },
                tablet: { width: 768, height: 1024 },
                desktop: { width: 1200, height: 800 },
            },
        },
    },
};
```

## 📖 実践的な例

### Cardコンポーネントのストーリー

```tsx
import type { Story } from '@ladle/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button/Button';

export default {
    title: 'UI/Card',
};

// 基本的なカード
export const Basic: Story = () => (
    <Card>
        <CardBody>これは基本的なカードです。</CardBody>
    </Card>
);

// 完全なカード構造
export const FullCard: Story = () => (
    <Card variant="elevated" style={{ maxWidth: '400px' }}>
        <CardHeader>
            <h3>カードタイトル</h3>
            <p>サブタイトル</p>
        </CardHeader>
        <CardBody>
            <p>カードの内容がここに表示されます。</p>
        </CardBody>
        <CardFooter>
            <Button variant="ghost" size="sm">
                キャンセル
            </Button>
            <Button variant="primary" size="sm">
                確認
            </Button>
        </CardFooter>
    </Card>
);

// グリッドレイアウト
export const CardGrid: Story = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
        }}
    >
        {[1, 2, 3].map(i => (
            <Card key={i} hoverable>
                <CardBody>カード {i}</CardBody>
            </Card>
        ))}
    </div>
);
```

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### 1. ストーリーが表示されない

- ファイル名が `*.stories.{js,jsx,ts,tsx}` 形式になっているか確認
- `export` でストーリーをエクスポートしているか確認
- ストーリーファイルが `components/` ディレクトリ内にあるか確認

#### 2. TypeScriptエラー

```tsx
// ❌ 悪い例
export const MyStory = () => <Button>テスト</Button>;

// ✅ 良い例
export const MyStory: Story = () => <Button>テスト</Button>;
```

#### 3. CSS Modulesが効かない

```tsx
// CSS Modulesのインポートを確認
import styles from './Component.module.css';

export const StyledStory: Story = () => (
    <div className={styles.container}>
        <Button className={styles.button}>ボタン</Button>
    </div>
);
```

#### 4. パフォーマンスの問題

- 大量のストーリーがある場合は、ファイルを分割する
- 重いコンポーネントは `React.lazy()` を使用する

### デバッグのヒント

1. **ブラウザの開発者ツール**: エラーメッセージを確認
2. **ターミナル**: Ladleサーバーのログを確認
3. **ファイルウォッチャー**: ファイル変更が正しく検出されているか確認

## 📚 参考リンク

- [Ladle公式ドキュメント](https://ladle.dev/)
- [Ladle GitHub](https://github.com/tajo/ladle)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)

## 🎯 ベストプラクティス

### 1. ストーリーの命名規則

```tsx
// ✅ 推奨
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const AllSizes = () => {
    /* ... */
};

// ❌ 非推奨
export const story1 = () => <Button>Button</Button>;
export const test = () => <Button>Button</Button>;
```

### 2. ドキュメント化

```tsx
/**
 * プライマリボタンは主要なアクションに使用します。
 * ページ内で最も重要なアクションに使用してください。
 */
export const Primary: Story = () => (
    <Button variant="primary">重要なアクション</Button>
);
```

### 3. アクセシビリティの考慮

```tsx
export const AccessibleButton: Story = () => (
    <Button aria-label="メニューを開く" role="button" tabIndex={0}>
        ☰
    </Button>
);
```

### 4. レスポンシブデザイン

```tsx
export const ResponsiveCard: Story = () => (
    <Card
        style={{
            width: '100%',
            maxWidth: '400px',
            minWidth: '250px',
        }}
    >
        <CardBody>レスポンシブカード</CardBody>
    </Card>
);
```

---

## 🎉 まとめ

Ladleを使用することで、効率的にUIコンポーネントを開発・テスト・ドキュメント化できます。このガイドを参考に、質の高いコンポーネントライブラリを構築してください。

何か質問や問題がある場合は、開発チームまでお気軽にお声かけください！
