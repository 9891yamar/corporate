export const Head = () => {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '株式会社サンプル',
        url: 'https://yoursite.com',
        logo: 'https://yoursite.com/logo.png',
        description: '株式会社サンプルの公式企業サイトです。',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '東京都渋谷区サンプル1-2-3',
            addressLocality: '渋谷区',
            addressRegion: '東京都',
            postalCode: '150-0000',
            addressCountry: 'JP',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+81-3-1234-5678',
            contactType: 'customer service',
        },
    };
    return (
        <>
            <title>株式会社サンプル - 企業サイト</title>
            <meta
                name="description"
                content="株式会社サンプルの公式企業サイトです。"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta charSet="UTF-8" />
            <meta name="keywords" content="企業,サンプル,会社" />
            <meta property="og:title" content="株式会社サンプル" />
            <meta
                property="og:description"
                content="株式会社サンプルの公式企業サイトです。"
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <link rel="icon" href="/favicon.ico" />
            {/* JSON-LD構造化データ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
        </>
    );
};
