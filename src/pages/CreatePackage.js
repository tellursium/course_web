import React from 'react';
import PackageBlock from "./styles/Package.css";
import { Button } from 'react-bootstrap';
import "./styles/CreatePackage.css"

class CreatePackage extends React.Component{
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {name: "", description: "", link: "", version: ""}
    }

    createNewPackage(){
        if (this.state.name !== "" && this.state.description !== "" && this.state.link !== "" && this.state.version !== "") {
            let url = "/api/newPkg/";
            let body = {
                name: this.state.name,
                description: this.state.description,
                link: this.state.link,
                version: this.state.version
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(response => this.setNewPkg(response))
                .catch(error => console.log(error));
        }
        else{
            alert("there are blank fields")
        }
    }

    setNewPkg(response){
        alert("New package created successfully");
        window.location.href = "/catalog"
    }

    handler(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className={"CreatePackage"}>
                <input class="inputCreate form-control" placeholder={"name"} name={"name"} value={this.state.name} onChange={this.handler}/>
                <textarea class="inputCreate form-control" placeholder={"description"} name={"description"} value={this.state.description} onChange={this.handler}/>
                <input class="inputCreate form-control" placeholder={"link"} name={"link"} value={this.state.link} onChange={this.handler}/>
                <input class="inputCreate form-control" placeholder={"version"} name={"version"} value={this.state.version} onChange={this.handler}/>
                <Button className="btn btn-secondary" onClick={this.createNewPackage.bind(this)}>Добавить пакет</Button>
            </div>
        )
    }
}

export default CreatePackage;
