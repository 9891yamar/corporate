import '../../styles/pages/index.css';
import { Card, CardBody, Button } from '../../components';

const Page = () => {
    return (
        <>
            <h1>最先端の技術で未来を創造する 株式会社サンプル</h1>

            {/* メインコンテンツセクション */}
            <div className="welcome-section">
                <h2>ようこそ</h2>
                <p>
                    私たちは最新のAI技術を活用し、お客様のビジネスを次のレベルへと導くソフトウェア開発支援を行っております。
                </p>
                <p>革新的なソリューションで、あなたの未来を創造します。</p>

                <div className="features">
                    <Card variant="elevated" hoverable>
                        <CardBody>
                            <h3>🚀 高速開発</h3>
                            <p>最新のツールと技術で効率的な開発を実現</p>
                        </CardBody>
                    </Card>
                    <Card variant="elevated" hoverable>
                        <CardBody>
                            <h3>🤖 AI活用</h3>
                            <p>人工知能を活用した革新的なソリューション</p>
                        </CardBody>
                    </Card>
                    <Card variant="elevated" hoverable>
                        <CardBody>
                            <h3>💼 企業支援</h3>
                            <p>お客様のビジネス成長をトータルサポート</p>
                        </CardBody>
                    </Card>
                </div>

                <div className="cta-section">
                    <Button variant="primary" size="lg">
                        お問い合わせ
                    </Button>
                    <Button variant="outline" size="lg">
                        サービス詳細
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Page;
