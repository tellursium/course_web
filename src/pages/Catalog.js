import React from 'react';
import "./styles/Catalog.css"

class Catalog extends React.Component{

    constructor(props) {
        super(props);
        this.state = {listOfPackages: [], search: ""}
        this.handler = this.handler.bind(this);

        let url = "/api/getCatalog";
        let body = {search: ""};
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(response => this.setList(response))
            .catch(error => console.log(error));
    }

    setList(response){
        this.setState({listOfPackages: response.content});
    }

    getCatalog(){
        let counter = 0;
        return this.state.listOfPackages.map((pkg) => {
            let row = <React.Fragment>
                <td>{pkg.version}</td>
                <td><a href={"/package/" + pkg.id}>{pkg.name}</a></td>
                <td>{pkg.description}</td>
                <td>{pkg.id}</td>
            </React.Fragment>
            if (counter % 2 === 0) {
                counter += 1;
                return (
                    <tr key={pkg.id} className="odd">
                        {row}
                    </tr>
                )
            }
            else {
                counter += 1;
                return (
                    <tr key={pkg.id}>
                        {row}
                    </tr>
                )
            }
        })
    }

    handler(event){
        this.setState({[event.target.name]: event.target.value});
        let url = "/api/getCatalog";
        let body = {search: event.target.value};
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(response => this.setList(response))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <div className="catalog">
                    <input className="form-control inputSearch" placeholder={"search"} name={"search"} value={this.state.search}
                           onChange={this.handler}/>
                    <table className="catalog">
                        <thead>
                            <tr>
                                <th className="colVers">version</th>
                                <th className="colName">name</th>
                                <th className="colDesc">description</th>
                                <th className="colNum">number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getCatalog()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Catalog;
