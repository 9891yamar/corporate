import { useData } from 'vike-react/useData';
import type { Data } from './+data';
import './news-detail.css';

const Page = () => {
    // useDataフックを使用してSSRデータを取得
    const data = useData<Data>();

    // データを分割代入
    const { newsItem, error } = data || {};
    // 日付をフォーマットする関数
    // クライアントサイドでもサーバーサイドでも動作するユーティリティ関数
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // エラー表示またはニュース記事が見つからない場合
    if (error || !newsItem) {
        return (
            <div className="news-detail">
                <div className="error-message">
                    <h1>記事が見つかりません</h1>
                    <p>⚠️ {error || '指定された記事が見つかりませんでした'}</p>
                    <p>
                        <a
                            href="/news"
                            className="back-link"
                        >
                            ← ニュース一覧に戻る
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="news-detail">
            {/* パンくずナビ */}
            <nav className="breadcrumb">
                <a href="/">ホーム</a>
                <span className="separator"> &gt; </span>
                <a href="/news">ニュース・お知らせ</a>
                <span className="separator"> &gt; </span>
                <span className="current">{newsItem.title}</span>
            </nav>

            <article className="news-article">
                <header className="news-article-header">
                    <div className="news-meta">
                        <time className="news-date">
                            {formatDate(newsItem.publishedAt)}
                        </time>
                        {newsItem.category && (
                            <span className="news-category">
                                {newsItem.category.name}
                            </span>
                        )}
                    </div>
                    <h1 className="news-article-title">{newsItem.title}</h1>
                </header>

                {/* サムネイル画像があれば表示 */}
                {newsItem.thumbnail && (
                    <div className="news-thumbnail">
                        <img
                            src={newsItem.thumbnail.url}
                            alt={newsItem.title}
                            width={newsItem.thumbnail.width}
                            height={newsItem.thumbnail.height}
                        />
                    </div>
                )}

                <div
                    className="news-content"
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                {/* タグがあれば表示 */}
                {newsItem.tags && newsItem.tags.length > 0 && (
                    <div className="news-tags">
                        <h3>タグ</h3>
                        <ul className="tag-list">
                            {newsItem.tags.map((tag: string, index: number) => (
                                <li
                                    key={index}
                                    className="tag-item"
                                >
                                    #{tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <footer className="news-article-footer">
                    <div className="article-actions">
                        <a
                            href="/news"
                            className="back-to-list"
                        >
                            ← ニュース一覧に戻る
                        </a>
                    </div>
                </footer>
            </article>
        </div>
    );
};

export default Page;
