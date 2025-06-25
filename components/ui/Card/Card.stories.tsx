import type { Story } from '@ladle/react';
import { Card, CardHeader, CardBody, CardFooter, type CardProps } from './Card';
import { Button } from '../Button/Button';

// デフォルトエクスポート（メタデータ）
export default {
    title: 'UI/Card',
};

// 基本的なバリアント
export const Default: Story<CardProps> = () => (
    <Card>
        <CardBody>
            これはデフォルトのカードです。シンプルで使いやすいデザインになっています。
        </CardBody>
    </Card>
);

export const Elevated: Story<CardProps> = () => (
    <Card variant="elevated">
        <CardBody>
            これは立体的なカードです。影が付いて浮き上がって見えます。
        </CardBody>
    </Card>
);

export const Outlined: Story<CardProps> = () => (
    <Card variant="outlined">
        <CardBody>
            これはアウトラインカードです。境界線がはっきりと表示されます。
        </CardBody>
    </Card>
);

// パディングサイズ
export const PaddingSizes: Story = () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Card padding="sm" style={{ width: '200px' }}>
            <CardBody>小さなパディング</CardBody>
        </Card>
        <Card padding="md" style={{ width: '200px' }}>
            <CardBody>標準パディング</CardBody>
        </Card>
        <Card padding="lg" style={{ width: '200px' }}>
            <CardBody>大きなパディング</CardBody>
        </Card>
    </div>
);

// ホバー効果
export const Hoverable: Story = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Card hoverable style={{ width: '250px' }}>
            <CardBody>
                マウスホバーで効果が変わります！カーソルを合わせてみてください。
            </CardBody>
        </Card>
        <Card hoverable variant="elevated" style={{ width: '250px' }}>
            <CardBody>こちらも同様にホバー効果があります。</CardBody>
        </Card>
    </div>
);

// 完全なカード構造
export const FullCard: Story = () => (
    <Card variant="elevated" style={{ maxWidth: '400px' }}>
        <CardHeader>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>
                カードタイトル
            </h3>
            <p
                style={{
                    margin: '0.5rem 0 0 0',
                    color: '#666',
                    fontSize: '0.875rem',
                }}
            >
                サブタイトルやメタ情報
            </p>
        </CardHeader>
        <CardBody>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
                これは完全なカードコンポーネントの例です。ヘッダー、ボディ、フッターを
                使って構造化されたコンテンツを表示できます。
            </p>
        </CardBody>
        <CardFooter>
            <div
                style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'flex-end',
                }}
            >
                <Button variant="ghost" size="sm">
                    キャンセル
                </Button>
                <Button variant="primary" size="sm">
                    確認
                </Button>
            </div>
        </CardFooter>
    </Card>
);

// レイアウト例
export const CardGrid: Story = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            maxWidth: '800px',
        }}
    >
        <Card variant="elevated" hoverable>
            <CardHeader>
                <h4 style={{ margin: 0 }}>📊 データ分析</h4>
            </CardHeader>
            <CardBody>最新のデータ分析結果を確認できます。</CardBody>
        </Card>

        <Card variant="elevated" hoverable>
            <CardHeader>
                <h4 style={{ margin: 0 }}>⚙️ 設定</h4>
            </CardHeader>
            <CardBody>アプリケーションの各種設定を変更。</CardBody>
        </Card>

        <Card variant="elevated" hoverable>
            <CardHeader>
                <h4 style={{ margin: 0 }}>📝 レポート</h4>
            </CardHeader>
            <CardBody>月次レポートをダウンロード可能。</CardBody>
        </Card>
    </div>
);

// インタラクティブコントロール
export const Interactive: Story<CardProps> = ({
    variant = 'default',
    padding = 'md',
    hoverable = false,
}) => (
    <Card
        variant={variant}
        padding={padding}
        hoverable={hoverable}
        style={{ maxWidth: '300px' }}
    >
        <CardHeader>
            <h4 style={{ margin: 0 }}>インタラクティブカード</h4>
        </CardHeader>
        <CardBody>
            左側のコントロールパネルでプロパティを変更して、
            カードの見た目がどう変わるか確認してください。
        </CardBody>
        <CardFooter>
            <Button variant="primary" size="sm" fullWidth>
                アクション
            </Button>
        </CardFooter>
    </Card>
);

Interactive.args = {
    variant: 'default',
    padding: 'md',
    hoverable: false,
};
