import { useState, useEffect } from 'react';
import { getNewsItem, type NewsItem } from '../../../lib/microcms';
import { usePageContext } from 'vike-react/usePageContext';

export const Head = () => {
    const { routeParams } = usePageContext();
    const newsId = routeParams.id as string;

    // 個別ニュース記事のメタデータ取得用
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

    useEffect(() => {
        if (newsId) {
            getNewsItem(newsId)
                .then(setNewsItem)
                .catch(() => {
                    // エラーの場合はデフォルト値を使用
                    setNewsItem(null);
                });
        }
    }, [newsId]);

    // ニュース記事がまだロードされていない場合のデフォルトメタタグ
    const defaultTitle = 'ニュース記事 - 株式会社サンプル';
    const defaultDescription = '株式会社サンプルのニュース記事をご覧ください。';

    // ニュース記事が取得できた場合の動的メタタグ
    const title = newsItem
        ? `${newsItem.title} - 株式会社サンプル`
        : defaultTitle;

    const description = newsItem
        ? newsItem.excerpt || newsItem.content.slice(0, 120) + '...'
        : defaultDescription;

    const publishedDate = newsItem?.publishedAt || new Date().toISOString();

    // 構造化データ - Article
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: newsItem?.title || 'ニュース記事',
        description: description,
        datePublished: publishedDate,
        dateModified: newsItem?.updatedAt || publishedDate,
        author: {
            '@type': 'Organization',
            name: '株式会社サンプル',
            url: 'https://yoursite.com',
        },
        publisher: {
            '@type': 'Organization',
            name: '株式会社サンプル',
            url: 'https://yoursite.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://yoursite.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://yoursite.com/news/${newsId}`,
        },
        image: newsItem?.thumbnail?.url || 'https://yoursite.com/logo.png',
    };

    // パンくずリスト構造化データ
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://yoursite.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'ニュース・お知らせ',
                item: 'https://yoursite.com/news',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: newsItem?.title || 'ニュース記事',
                item: `https://yoursite.com/news/${newsId}`,
            },
        ],
    };

    return (
        <>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
            <meta
                name="keywords"
                content={`ニュース,お知らせ,株式会社サンプル,${
                    newsItem?.category?.name || ''
                }`}
            />

            {/* OGP設定 */}
            <meta
                property="og:title"
                content={title}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:url"
                content={`https://yoursite.com/news/${newsId}`}
            />
            <meta
                property="og:type"
                content="article"
            />
            {newsItem?.thumbnail && (
                <>
                    <meta
                        property="og:image"
                        content={newsItem.thumbnail.url}
                    />
                    <meta
                        property="og:image:width"
                        content={newsItem.thumbnail.width.toString()}
                    />
                    <meta
                        property="og:image:height"
                        content={newsItem.thumbnail.height.toString()}
                    />
                </>
            )}

            {/* Twitter Card設定 */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                name="twitter:title"
                content={title}
            />
            <meta
                name="twitter:description"
                content={description}
            />
            {newsItem?.thumbnail && (
                <meta
                    name="twitter:image"
                    content={newsItem.thumbnail.url}
                />
            )}

            {/* 記事固有のメタタグ */}
            <meta
                property="article:published_time"
                content={publishedDate}
            />
            {newsItem?.updatedAt && (
                <meta
                    property="article:modified_time"
                    content={newsItem.updatedAt}
                />
            )}
            {newsItem?.category && (
                <meta
                    property="article:section"
                    content={newsItem.category.name}
                />
            )}
            {newsItem?.tags &&
                newsItem.tags.map((tag, index) => (
                    <meta
                        key={index}
                        property="article:tag"
                        content={tag}
                    />
                ))}

            {/* 構造化データ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
};
