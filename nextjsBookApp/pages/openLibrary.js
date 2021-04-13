export async function getStaticProps() {
    const res = await fetch (`http://openlibrary.org/search.json?q=the+lord+of+the+rings`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {data},
    }
}