import { useState, useEffect } from 'react';
import DataViewer from './DataViewer';
function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/accounts")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
    }, []);

    return (
        <div className="dataLoader">
            {data && <DataViewer data = {data}/>}
        </div>
    );
}
export default DataLoader;