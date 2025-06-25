import type { Story } from '@ladle/react';
import { Button, type ButtonProps } from './Button';

// デフォルトエクスポート（メタデータ）
export default {
    title: 'UI/Button',
};

// 基本的なバリアント
export const Primary: Story<ButtonProps> = () => (
    <Button variant="primary">プライマリボタン</Button>
);

export const Secondary: Story<ButtonProps> = () => (
    <Button variant="secondary">セカンダリボタン</Button>
);

export const Outline: Story<ButtonProps> = () => (
    <Button variant="outline">アウトラインボタン</Button>
);

export const Ghost: Story<ButtonProps> = () => (
    <Button variant="ghost">ゴーストボタン</Button>
);

// サイズ比較
export const AllSizes: Story = () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="primary" size="sm">
            小サイズ
        </Button>
        <Button variant="primary" size="md">
            中サイズ
        </Button>
        <Button variant="primary" size="lg">
            大サイズ
        </Button>
    </div>
);

// 状態デモ
export const States: Story = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '300px',
        }}
    >
        <Button variant="primary">通常状態</Button>
        <Button variant="primary" disabled>
            無効状態
        </Button>
        <Button variant="primary" loading>
            読み込み中
        </Button>
        <Button variant="primary" fullWidth>
            全幅ボタン
        </Button>
    </div>
);

// アイコン付きボタン
export const WithIcons: Story = () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" leftIcon={<span>📧</span>}>
            メール送信
        </Button>
        <Button variant="secondary" rightIcon={<span>→</span>}>
            次へ進む
        </Button>
        <Button
            variant="outline"
            leftIcon={<span>⬇️</span>}
            rightIcon={<span>📄</span>}
        >
            ダウンロード
        </Button>
    </div>
);

// インタラクティブコントロール付きストーリー
export const Interactive: Story<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
}) => (
    <Button
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        fullWidth={fullWidth}
    >
        インタラクティブボタン
    </Button>
);

Interactive.args = {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
};

// カスタムスタイル例
export const CustomStyling: Story = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Button
            variant="primary"
            style={{ backgroundColor: '#ff6b6b', borderColor: '#ff6b6b' }}
        >
            カスタムカラー
        </Button>
        <Button
            variant="outline"
            style={{ borderColor: '#4ecdc4', color: '#4ecdc4' }}
        >
            カスタムアウトライン
        </Button>
    </div>
);
