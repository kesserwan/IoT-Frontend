import React from "react";
import { Device } from "../redux/devices-state";
import { PieChart } from 'react-minimal-pie-chart';

interface DevicesTableProps {
    devices?: Device[];
}

function countDevicesGateways ( devices: any ){
    let totalDevicesGateways = 0;
    {devices?.map((device: any) => {        
        return (
            <br key={device.id}>
                {totalDevicesGateways++}
            </br>
        )
    })}
    return totalDevicesGateways
}

function countDevices ( devices: any ){
    let totalDevices = 0;
    function isGateway(device: any) {
        if(!device.isGateway) {
            totalDevices++
        }
        return ""
    }
    {devices?.map((device: any) => {        
        return (
            <br key={device.id}>
                {isGateway(device)}
            </br>
        )
    })}
    return totalDevices
}

function countGateways ( devices: any ){
    let totalGateways = 0;
    function isGateway(device: any) {
        if(device.isGateway) {
            totalGateways++
        }
        return ""
    }
    {devices?.map((device: any) => {        
        return (
            <br key={device.id}>
                {isGateway(device)}
            </br>
        )
    })}
    return totalGateways
}
    

export default function HomePageTable({ devices }: DevicesTableProps): JSX.Element {
    return <h5>
        Total Number of Devices/Gateways: { countDevicesGateways( devices ) }
        <br />
        Total Number of Devices: { countDevices( devices ) }
        <br />
        Total Number of Gateways: { countGateways( devices ) }
        <br />
        
        <PieChart  style={{maxWidth: 500}}
            label={(data) => data.dataEntry.title}
            labelStyle={{
                fontSize: "10px",
              }}
            data={[
                { title: 'WiFi', label: 'test', value: 25, color: '#E38627' },
                { title: 'Zigbee', value: 15, color: '#C13C37' },
                { title: 'Z-Wave', value: 20, color: '#6A2135' },
            ]}
        />

    </h5>;

    
}
