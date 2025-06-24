import { getNewsList } from '../lib/microcms';

// デバッグ用のテストスクリプト
async function testMicroCMS() {
    console.log('🧪 [test-microcms.ts] microCMS接続テスト開始...');

    try {
        console.log('📡 [test-microcms.ts] getNewsList呼び出し...');
        const result = await getNewsList(5, 0);

        console.log('✅ [test-microcms.ts] 成功!', {
            取得件数: result.contents?.length || 0,
            総件数: result.totalCount || 0,
            最初のアイテム: result.contents?.[0]?.title || 'なし',
        });

        return result;
    } catch (error) {
        console.error('❌ [test-microcms.ts] エラー:', error);
        throw error;
    }
}

// この関数をエクスポートして+data.tsから呼び出せるようにする
export { testMicroCMS };
