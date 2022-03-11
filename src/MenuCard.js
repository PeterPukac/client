const ManuCard = (props)=> {
    const object = props.object;
    //nazov, podnadpis,ikona, colorOne,ColorTwo
    return (
        <div className="App">
            <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                    <h2 className="display-5">{object.name}</h2>
                    <p className="lead">{object.paragraph}</p>
                </div>
                <div className="bg-danger shadow-sm mx-auto cards">
                    {object.icon}
                </div>

            </div>
        </div>
    );
}

export default ManuCard;