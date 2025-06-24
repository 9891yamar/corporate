export const Head = () => {
    const newsPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'ニュース・お知らせ',
        url: 'https://yoursite.com/news',
        description:
            '株式会社サンプルの最新ニュースやお知らせ情報をお届けします。',
        publisher: {
            '@type': 'Organization',
            name: '株式会社サンプル',
            url: 'https://yoursite.com',
        },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        '@type': 'Article',
                        headline: '株式会社サンプル設立のお知らせ',
                        datePublished: '2025-06-23',
                        author: {
                            '@type': 'Organization',
                            name: '株式会社サンプル',
                        },
                    },
                },
            ],
        },
    };

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
        ],
    };

    return (
        <>
            <title>ニュース・お知らせ - 株式会社サンプル</title>
            <meta
                name="description"
                content="株式会社サンプルの最新ニュースやお知らせ情報をお届けします。会社の最新動向や技術情報をご確認ください。"
            />
            <meta
                name="keywords"
                content="ニュース,お知らせ,株式会社サンプル,最新情報,会社情報"
            />
            <meta
                property="og:title"
                content="ニュース・お知らせ - 株式会社サンプル"
            />
            <meta
                property="og:description"
                content="株式会社サンプルの最新ニュースやお知らせ情報をお届けします。"
            />
            <meta
                property="og:url"
                content="https://yoursite.com/news"
            />
            <meta
                property="og:type"
                content="website"
            />
            <meta
                name="twitter:card"
                content="summary"
            />
            <meta
                name="twitter:title"
                content="ニュース・お知らせ - 株式会社サンプル"
            />
            <meta
                name="twitter:description"
                content="株式会社サンプルの最新ニュースやお知らせ情報をお届けします。"
            />

            {/* CollectionPage構造化データ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(newsPageSchema),
                }}
            />

            {/* パンくずリスト構造化データ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
};
