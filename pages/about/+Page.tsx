const Page = () => {
    return (
        <>
            <h1>会社概要</h1>
            <div className="company-info">
                <table className="company-table">
                    <tbody>
                        <tr>
                            <th>会社名</th>
                            <td>株式会社サンプル</td>
                        </tr>
                        <tr>
                            <th>設立</th>
                            <td>2025年6月23日</td>
                        </tr>
                        <tr>
                            <th>代表者</th>
                            <td>代表取締役 コーディング パートナー</td>
                        </tr>
                        <tr>
                            <th>所在地</th>
                            <td>〒989-1201 宮城県柴田郡大河原町</td>
                        </tr>
                        <tr>
                            <th>事業内容</th>
                            <td>AIを活用したソフトウェア開発支援</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mission-section">
                    <h2>企業理念</h2>
                    <p>
                        テクノロジーの力で、お客様の課題を解決し、
                        より良い未来の創造に貢献することを使命としています。
                    </p>
                </div>
            </div>
        </>
    );
};
export default Page;
