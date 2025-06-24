const Page = ({ is404 }: { is404: boolean }) => {
    if (is404) {
        return (
            <>
                <h1>404 - ページが見つかりません</h1>
                <p>お探しのページは存在しません。</p>
            </>
        );
    } else {
        return (
            <>
                <h1>エラーが発生しました</h1>
                <p>申し訳ございませんが、エラーが発生しました。</p>
            </>
        );
    }
};
export default Page;
