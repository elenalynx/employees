import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

function App() {
    const data = [
        {name: 'John C.1', salary: 800, increase: false, like: false, id:1},
        {name: 'John C.2', salary: 2800, increase: true, like: false, id:2},
        {name: 'John C.3', salary: 1800, increase: false, like: false, id:3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;