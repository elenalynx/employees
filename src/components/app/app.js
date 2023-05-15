import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.1', salary: 800, increase: false, like: false, id:1},
                {name: 'John C.2', salary: 2800, increase: true, like: false, id:2},
                {name: 'John C.3', salary: 1800, increase: false, like: false, id:3},
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // 1)
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            //
            // const newArr = [...before, ...after];

            return {
                // 2)
                data: data.filter(item => item.id !== id)
            }
        })
        // console.log(id)
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId+=1
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;