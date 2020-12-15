import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Device } from "./redux/devices-state";
import DropDown from "./Tables/DropDown"
import devicesService from "devices/services/devices-service";

interface DevicesTableProps {
    devices?: Device[];
}

interface FormInput {
    name: string;
    macAddress: string;
    ip: string;
    isGateway: boolean;
}

interface DevicesFormProps {
    loading: boolean;
    onCreateDevice: (name: string, macAddress: string, ip: string, isGateway: boolean, deviceType: string) => void;
}

function findGateways( devices: any ) {
    console.log(devices)
    let Gateways: any[] = [];
    function isGateway(device: any) {
        console.log('result of isGateway: '+device.isGateway)
        if(device.isGateway) {
            Gateways.push(device)
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
    return Gateways;
}

export default function DevicesForm({ loading, onCreateDevice, }: DevicesFormProps, { devices }: DevicesTableProps): JSX.Element {
    const { errors, control, handleSubmit } = useForm<FormInput>();
    var [state, setState] = React.useState(false);
    var [deviceType, setDeviceType] = React.useState('Select Device Type');

    const handleClick = (event: React.SetStateAction<boolean>) => {
        setState(event)
    }

    const onSubmitDevice = (data: FormInput) => {
        window.location.reload()
        onCreateDevice(data.name, data.macAddress, data.ip, false, deviceType);
    };

    function deviceTypeError(){
        if(deviceType == "Select Device Type") {
            return <div className="alert alert-danger" role="alert">
                    <strong>Device Type</strong> is required
                </div>
        }
    }
    /*
    export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
        const { register, errors, control, handleSubmit } useForm<FormInput>();
        const onSubmit = (data: FormInput) => {
            onCreateDevice(data.name, data.macAddress, data.conName);
            let value = data.macAddress;
            let regMac = new RegMac("^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$");
            if(!regEx.test(value)){
                console.log("Not Good");
            }
        };
    }*/

    /*
    export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
        const { register, errors, control, handleSubmit } useForm<FormInput>();
        const onSubmit = (data: FormInput) => {
            onCreateDevice(data.name, data.ip, data.conName);
            let value = data.ip;
            let regIp = new RegIp("^([0-9]{1-3}[.]){3}([0-9]{1-3})$");
            if(!regEx.test(value)){
                console.log("Not Good");
            }
        };
    }*/
    
    
    return <Card className="col-lg-6">
        
        {/*DEVICE ENROLLMENT*/}
        <CardHeader>
            <h3 className="mb-0">DEVICE ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
            <Form onSubmit={handleSubmit(onSubmitDevice)}>
                
                <FormGroup>
                    <Label for="device-name">Name</Label>
                    <Controller
                        as={Input}
                        name="name"
                        control={control}
                        defaultValue=""
                        placeholder="Name"
                        id="device-name"
                        rules={{ required: true }}
                    />
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Device name</strong> is required
                                </div>}
                </FormGroup>

                <FormGroup>            
                    <Controller
                        as={Input}
                        name="macAddress"
                        control={control}
                        defaultValue=""
                        placeholder="Mac Address"
                        id="macAddress"
                        rules={{ required: true }}
                    />
                    {errors.macAddress &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Mac Address</strong> is required
                                </div>}
                </FormGroup>

                <FormGroup>            
                    <Controller
                        as={Input}
                        name="ip"
                        control={control}
                        defaultValue=""
                        placeholder="IP Address"
                        id="ip"
                        rules={{ required: true }}
                    />
                    {errors.ip &&
                        <div className="alert alert-danger" role="alert">
                            <strong>IP Address</strong> is required
                                </div>}
                </FormGroup>
                
                <FormGroup>  
                    <Dropdown isOpen={state} toggle={() => handleClick(!state)}>
                        <DropdownToggle caret>{deviceType}</DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem onClick={() =>  setDeviceType("WiFi") } dropDownValue="Prod A">
                            WiFi
                        </DropdownItem>
                        <DropdownItem onClick={() => setDeviceType("Zigbee")} dropDownValue="Prod B">
                            Zigbee
                        </DropdownItem>
                        <DropdownItem onClick={() => setDeviceType("Z-Wave")} dropDownValue="Prod C">
                            Z-Wave
                        </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Device Type</strong> is required
                                </div>}
                </FormGroup>

                <DropDown />

                <br />
    
                <Button
                    type="submit"
                    color="success"
                    disabled={loading}
                >
                    Add Device
                </Button>
            </Form>
        </CardBody>
        
    </Card>;
    
}
