import { useData } from 'vike-react/useData';
import { type NewsItem } from '../../lib/microcms';
import type { Data } from './+data';
import './news.css';

// Vikeの標準的なPagePropsを使用
interface PageProps {
    // Vikeから渡されるデータ
}

export default function Page(_props: PageProps) {
    // useDataフックを使用してSSRデータを取得
    const data = useData<Data>();

    // データを分割代入
    const { newsItems = [], totalCount = 0, error = false } = data || {};

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

    // HTMLタグを除去してプレーンテキストに変換する関数
    // ニュース一覧では抜粋表示用にHTMLタグを除去する
    const stripHtmlTags = (html: string): string => {
        // HTMLタグを正規表現で除去
        return html.replace(/<[^>]*>/g, '');
    };

    // 記事の抜粋を生成する関数
    // excerptがあればそれを使用し、なければcontentから抜粋を作成
    const getExcerpt = (item: NewsItem, maxLength: number = 120): string => {
        if (item.excerpt) {
            return item.excerpt;
        }

        // HTMLタグを除去してからプレーンテキストとして切り取り
        const plainText = stripHtmlTags(item.content);
        if (plainText.length <= maxLength) {
            return plainText;
        }

        return plainText.slice(0, maxLength) + '...';
    };

    return (
        <>
            <h1>ニュース・お知らせ</h1>
            <div className="news-section">
                <p className="news-intro">
                    株式会社サンプルの最新ニュースやお知らせをご覧いただけます。
                    {totalCount > 0 && (
                        <span className="news-count">（全{totalCount}件）</span>
                    )}
                </p>

                {/* エラー状態の表示（SSRでのエラー時） */}
                {error && (
                    <div className="error-message">
                        <p>⚠️ ニュースの取得でエラーが発生しました</p>
                        <p>
                            フォールバック用のサンプルデータを表示しています。
                        </p>
                    </div>
                )}

                {/* ニュース一覧の表示 */}
                <div className="news-list">
                    {newsItems && newsItems.length > 0 ? (
                        newsItems.map((item: NewsItem, index: number) => (
                            <article
                                key={item.id || index}
                                className="news-item"
                            >
                                <div className="news-header">
                                    <time className="news-date">
                                        {formatDate(item.publishedAt)}
                                    </time>
                                    <span className="news-category">
                                        {item.category?.name || 'お知らせ'}
                                    </span>
                                </div>
                                <h2 className="news-title">{item.title}</h2>
                                <p className="news-content">
                                    {getExcerpt(item)}
                                </p>
                                <a
                                    href={`/news/${item.id}`}
                                    className="news-link"
                                >
                                    続きを読む →
                                </a>
                            </article>
                        ))
                    ) : (
                        <div className="no-news">
                            <p>現在、表示可能なニュースがありません。</p>
                        </div>
                    )}
                </div>

                {/* アーカイブセクション */}
                <div className="news-archive">
                    <h3>過去のニュース</h3>
                    <p>
                        過去のニュースについては、こちらからアーカイブをご覧ください。
                    </p>
                    <a
                        href="#"
                        className="archive-button"
                    >
                        ニュースアーカイブを見る
                    </a>
                </div>
            </div>
        </>
    );
}
