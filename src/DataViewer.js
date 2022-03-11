function DataViewer(props) {
    const data = props.data;

    return (
        <div className="dataViwer">
            {data.map(account => {
                return (
                    <div className="blog-preview" key={account.id}>
                        <h2>Meno:{account.name}</h2>
                        <p>Heslo:{account.password}</p>
                        <p>------------------------------------</p>
                    </div>)
            })}
        </div>
    );
}
export default DataViewer;