import Banner from "../components/banner/banner";

export default function Banners(props: {
    query: string,
    currentPage: number
}) {
    const { query, currentPage } = props
    return (
        <div id="banners">
            <div>test</div>
            <Banner>Test</Banner>
            <Banner type="success">Test</Banner>
            <Banner type="warning">Test</Banner>
            <Banner type="error">Test</Banner>
            <Banner bannerStyle="multi" multiItems={['test', 'test']}>Title</Banner>
        </div>
    )
}