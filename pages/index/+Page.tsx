import { Card, CardBody, Button } from '../../components';

const Page = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6 text-gradient">
                最先端の技術で未来を創造する 株式会社サンプル
            </h1>

            {/* メインコンテンツセクション */}
            <section className="section text-center">
                <div className="container">
                    <h2 className="heading-2 mb-4">ようこそ</h2>
                    <p className="body-large mb-4 text-muted max-w-3xl mx-auto">
                        私たちは最新のAI技術を活用し、お客様のビジネスを次のレベルへと導くソフトウェア開発支援を行っております。
                    </p>
                    <p className="body-large mb-6 text-muted max-w-3xl mx-auto">
                        革新的なソリューションで、あなたの未来を創造します。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card variant="elevated" hoverable>
                            <CardBody className="text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="heading-4 mb-3">高速開発</h3>
                                <p className="text-muted">
                                    最新のツールと技術で効率的な開発を実現
                                </p>
                            </CardBody>
                        </Card>
                        <Card variant="elevated" hoverable>
                            <CardBody className="text-center">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="heading-4 mb-3">AI活用</h3>
                                <p className="text-muted">
                                    人工知能を活用した革新的なソリューション
                                </p>
                            </CardBody>
                        </Card>
                        <Card variant="elevated" hoverable>
                            <CardBody className="text-center">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="heading-4 mb-3">企業支援</h3>
                                <p className="text-muted">
                                    お客様のビジネス成長をトータルサポート
                                </p>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg">
                            お問い合わせ
                        </Button>
                        <Button variant="outline" size="lg">
                            サービス詳細
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Page;
