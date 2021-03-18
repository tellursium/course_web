import React from 'react';
import PackageBlock from "./styles/Package.css";

class Package extends React.Component{
    constructor(props) {
        super(props);

        this.state = {pkg: {}}

        let number = null
        let re = new RegExp("http://localhost:8000/package/(.+)");
        if (re.exec(window.location.href) !== null)
            number = re.exec(window.location.href)[1]
        if (number !== null) {
            let url = "/api/getPkg/" + number;
            //let body = {pkgId: number};
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(body)
            }).then(res => res.json())
                .then(response => this.setPkg(response))
                .catch(error => console.log(error));
        }
    }

    setPkg(response){
        this.setState({pkg: response})
    }

    render() {
        if (this.state.pkg !== {}) {
            return (
                <div>
                    <table className="PackageBlock">
                        <tbody>
                            <tr>
                                <th className="Package"><a href={"/package/" + this.state.pkg.id}>Name</a></th>
                                <td>{this.state.pkg.name}</td>
                            </tr>
                            <tr>
                                <th className="Package">npm command:</th>
                                <td>npm install {this.state.pkg.link}</td>
                            </tr>
                            <tr>
                                <th className="Package">Description</th>
                                <td>{this.state.pkg.description}</td>
                            </tr>
                            <tr>
                                <th className="Package">Version</th>
                                <td>{this.state.pkg.version}</td>
                            </tr>
                            <tr>
                                <th className="Package">Number of package</th>
                                <td>{this.state.pkg.id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}

export default Package;
