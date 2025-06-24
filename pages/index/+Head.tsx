export const Head = () => {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "株式会社サンプル",
        url: "https://yoursite.com",
        description: "株式会社サンプルの公式企業サイトです。",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://yoursite.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "ホーム",
                item: "https://yoursite.com",
            },
        ],
    };
    return (
        <>
            <title>トップページ - 株式会社サンプル</title>
            <meta
                name="description"
                content="株式会社サンプルのトップページです。企業情報やサービス内容をご紹介します。"
            />
            <meta
                property="og:title"
                content="トップページ - 株式会社サンプル"
            />
            <meta
                property="og:description"
                content="株式会社サンプルのトップページです。企業情報やサービス内容をご紹介します。"
            />
            <meta property="og:url" content="https://yoursite.com/" />
            {/* WebSite構造化データ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
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
