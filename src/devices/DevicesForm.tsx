import React, { createRef } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@material-ui/core";
//import { Checkbox } from "@material-ui/core";
//import { Device } from "./redux/devices-state";



interface FormInput {
    name: string;
    macAddress: string;
    ip: string;
    isGateway: boolean;
}

interface DevicesFormProps {
    loading: boolean;
    onCreateDevice: (name: string, macAddress: string, ip: string, isGateway: boolean) => void;
}



export default function DevicesForm({ loading, onCreateDevice }: DevicesFormProps): JSX.Element {
    var testBol = false;
    const { errors, control, handleSubmit } = useForm<FormInput>();
    var [state, setState] = React.useState(false);
    const onSubmit = (data: FormInput) => {
        console.log("name: "+data.name+" Mac: "+data.macAddress);
        //window.location.reload()
        //data.isGateway = testBol;
        
        onCreateDevice(data.name, data.macAddress, data.ip, state);
        var test = false;
        console.log("is gateway: "+state);
    };
    

    const handleClick = (event: React.SetStateAction<boolean>) => {
        setState(event)
    }
    
    return <Card className="col-lg-6">
        <CardHeader>
            <h3 className="mb-0">DEVICE ENROLLEMENT</h3>
        </CardHeader>
        <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
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
                    {errors.name &&
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
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            <strong>IP Address</strong> is required
                                </div>}
                </FormGroup>

                <FormGroup check>
                    
                    <Label check>
                        <Input type="checkbox" id="isGateway" name='isGateway'  onChange={() => handleClick(!state)} checked={state} />{' '}
                        Check me out
                    </Label>
                    
                </FormGroup>
                        
                    

                    {/* 
                    <Controller
                        name="checkBox"
                        control={control}
                        rules={{ required: true }}
                        // defaultValue={true}
                        // valueName="checked"
                        // onChange={data => data.checked}
                        as={<Form.Checkbox label="I agree to the Terms and Conditions" error={!!errors.checkBox} />}
                    /> */}
                
                

                <Button
                    type="submit"
                    color="success"
                    disabled={loading}
                >
                    Submit
                </Button>
            </Form>
        </CardBody>
    </Card>;
}
