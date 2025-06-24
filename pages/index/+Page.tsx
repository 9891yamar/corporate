import { useData } from 'vike-react/useData';
import type { Data } from './+data';
import type { NewsItem } from '../../lib/microcms';
import './index.css';

const Page = () => {
    // SSRで取得したニュースデータを取得
    const data = useData<Data>();
    const { latestNews = [], totalNewsCount = 0, error = false } = data || {};

    // 日付をフォーマットする関数
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // HTMLタグを除去してプレーンテキストに変換する関数
    const stripHtmlTags = (html: string): string => {
        return html.replace(/<[^>]*>/g, '');
    };

    // 記事の抜粋を生成する関数
    const getExcerpt = (item: NewsItem, maxLength: number = 80): string => {
        if (item.excerpt) {
            return item.excerpt;
        }

        const plainText = stripHtmlTags(item.content);
        if (plainText.length <= maxLength) {
            return plainText;
        }

        return plainText.slice(0, maxLength) + '...';
    };

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
                    <div className="feature-item">
                        <h3>🚀 高速開発</h3>
                        <p>最新のツールと技術で効率的な開発を実現</p>
                    </div>
                    <div className="feature-item">
                        <h3>🤖 AI活用</h3>
                        <p>人工知能を活用した革新的なソリューション</p>
                    </div>
                    <div className="feature-item">
                        <h3>💼 企業支援</h3>
                        <p>お客様のビジネス成長をトータルサポート</p>
                    </div>
                </div>
            </div>

            {/* ニュースセクション */}
            <div className="news-section">
                <div className="news-header">
                    <h2>最新ニュース・お知らせ</h2>
                    <a
                        href="/news"
                        className="news-all-link"
                    >
                        すべてのニュースを見る →
                    </a>
                </div>

                {/* エラー時の表示 */}
                {error && (
                    <div className="news-error">
                        <p>⚠️ ニュースの取得でエラーが発生しました</p>
                    </div>
                )}

                {/* ニュース一覧 */}
                <div className="news-list">
                    {latestNews && latestNews.length > 0
                        ? latestNews.map((item: NewsItem) => (
                              <article
                                  key={item.id}
                                  className="news-item"
                              >
                                  <div className="news-meta">
                                      <time className="news-date">
                                          {formatDate(item.publishedAt)}
                                      </time>
                                      <span className="news-category">
                                          {item.category?.name || 'お知らせ'}
                                      </span>
                                  </div>
                                  <h3 className="news-title">
                                      <a href={`/news/${item.id}`}>
                                          {item.title}
                                      </a>
                                  </h3>
                                  <p className="news-excerpt">
                                      {getExcerpt(item)}
                                  </p>
                              </article>
                          ))
                        : !error && (
                              <div className="no-news">
                                  <p>現在、表示可能なニュースがありません。</p>
                              </div>
                          )}
                </div>

                {/* ニュース一覧への誘導（記事がある場合のみ） */}
                {totalNewsCount > 3 && (
                    <div className="news-more">
                        <p>他にも{totalNewsCount - 3}件のニュースがあります</p>
                        <a
                            href="/news"
                            className="news-more-link"
                        >
                            ニュース一覧ページを見る
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};
export default Page;
