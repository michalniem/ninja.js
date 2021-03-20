import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

function Table({children}: Props) {
    return (
        <table>
            <tbody>
            {children}
            </tbody>
        </table>
    )
}

export default Table;