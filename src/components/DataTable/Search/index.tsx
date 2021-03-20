import {FormEventHandler} from "react";

type Props = {
    value: string;
    onSearch: FormEventHandler
}

function Index({value, onSearch}: Props) {
    return (
        <div className="p-b-1">
            <input
                type="search"
                value={value}
                className="form-control"
                placeholder="Søg brugere"
                onChange={onSearch}/>
        </div>
    )
}

export default Index
