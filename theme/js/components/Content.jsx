export default function Content( { children } ){
    return (
        <div id="page-wrap">
            <div id="content-wrapper">
                <div id="content">
                    { children }
                </div>
            </div>
        </div>
    );
}
