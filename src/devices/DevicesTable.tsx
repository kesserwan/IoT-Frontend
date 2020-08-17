import React from "react";

import {
    Table,
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
            </tr>
        </thead>
        <tbody>
            {devices?.map((device) => {
                return (
                    <tr key={device.id}>
                        <th scope="row">
                            {device.name}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}