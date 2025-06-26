# 画像ディレクトリ

このディレクトリは画像アセットを整理して管理するためのものです。

## 📁 ディレクトリ構造

```
images/
├── hero/          # ヒーローセクション用画像
├── gallery/       # ギャラリー・プロダクト画像
├── logos/         # ロゴ・ブランド画像
├── icons/         # アイコン画像
└── team/          # チーム・人物画像
```

## 📝 命名規則

### 基本的な命名パターン

```
[category]-[description]-[variant].[ext]

例:
hero-main-desktop.jpg
logo-company-white.svg
icon-service-outline.svg
team-member-tanaka.jpg
```

### 詳細な規則

1. **小文字とハイフンを使用**
    - ✅ `hero-main-image.jpg`
    - ❌ `Hero_Main_Image.jpg`

2. **カテゴリ別にディレクトリを分ける**
    - `hero/` - ヒーロー画像
    - `gallery/` - ギャラリー画像
    - `logos/` - ロゴ画像
    - `icons/` - アイコン画像
    - `team/` - チーム画像

3. **レスポンシブ対応の画像**

    ```
    hero/
    ├── hero-main-desktop.jpg    # デスクトップ用
    ├── hero-main-tablet.jpg     # タブレット用
    └── hero-main-mobile.jpg     # モバイル用
    ```

4. **バリアント指定**
    ```
    logos/
    ├── logo-company-primary.svg   # プライマリ色
    ├── logo-company-white.svg     # 白色
    └── logo-company-dark.svg      # ダーク色
    ```

## 🎨 使用例

### HTMLでの使用

```html
<img src="/images/hero/hero-main-desktop.jpg" alt="メインヒーロー画像" />
```

### CSSでの使用

```css
.hero {
    background-image: url('/images/hero/hero-main-desktop.jpg');
}
```

### Reactでの使用

```tsx
import heroImage from '/images/hero/hero-main-desktop.jpg';

<img src={heroImage} alt="メインヒーロー画像" />;
```

## 📊 推奨画像形式

- **写真**: `.jpg`, `.webp`
- **イラスト/ロゴ**: `.svg`, `.png`
- **アイコン**: `.svg` (推奨), `.png`

## 🔧 最適化

- **サイズ**: 適切な解像度で配信
- **圧縮**: 品質と容量のバランス
- **WebP**: 可能な限りWebP形式を使用
- **lazy loading**: 必要に応じて遅延読み込み
