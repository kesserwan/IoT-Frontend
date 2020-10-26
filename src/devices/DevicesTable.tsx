import React from "react";

import {
    Table, Button,
} from "reactstrap";
import { Device } from "./redux/devices-state";

interface DevicesTableProps {
    devices?: Device[];
}

export function DevicesTable({ devices }: DevicesTableProps): JSX.Element {
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name"].map((name) => (
                    <th scope="col">{name}</th>
                ))}

                {["Delete Device"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {devices?.map((device) => {
                return (
                    <tr key={device.id}>
                        <th scope="row">
                            {device.name}
                        </th>

                        <th scope="row">
                        <Button outline color="danger" onClick={ (e) => console.log("checkbox '" + device.name + "' is checked")}>Delete</Button>
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}