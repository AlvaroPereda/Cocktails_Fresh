import { PageProps } from "$fresh/server.ts";

export default (props:PageProps) => {
    const Component = props.Component
    return (
        <div class="layout">
            <header>
                <h1><a href="/">Cocktails</a></h1>
                <nav>
                    <button type="submit"><a href="/random">Random</a></button>
                    <button type="submit"><a href="/search">Search</a></button>
                </nav>
            </header>
            <Component/>
        </div>
    )
}