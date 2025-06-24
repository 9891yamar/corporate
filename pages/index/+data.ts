// トップページのデータ型定義
export interface Data {
    // 必要に応じて将来的にデータを追加
}

// トップページ用のSSRデータ取得関数
export default async function data(): Promise<Data> {
    // 現在は特別なデータ取得は不要
    return {};
}
