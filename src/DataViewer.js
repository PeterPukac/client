function DataViewer(props) {
    const data = props.data;
    const group = props.group;

    const getSortedByGroup = (data) => {
        let helpSortedArrayAccounts = [];
        for (let account of data) {
            if (account.group == group) {
                helpSortedArrayAccounts.push(account);
            }
        }
        return helpSortedArrayAccounts;
    }

    const sortedAccountArray = getSortedByGroup(data);

    return (
        <div className="dataViewer">
            <h1 className="headingTable">Toto sú heslá zamestnancov skupiny: {group}</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Login</th>
                        <th scope="col">Heslo</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAccountArray.map(account => {
                        return (
                            <tr key={account.id}>
                                <td >{account.name}</td>
                                <td>{account.password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default DataViewer;