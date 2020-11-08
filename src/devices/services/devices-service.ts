import axios, { AxiosInstance } from "axios";
import { Device } from "devices/redux/devices-state";

class DevicesService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string, macAddress: string, ip: string, isGateway: boolean): Promise<Device[]> {
        console.log("name: "+name+" isGateway"+isGateway);
     
        
       
        axios.post("http://localhost:3000/devices", {
            "name": name,
            "macAddress": macAddress,
            "ip": ip,
            "gateway": isGateway
          });

        return await this.devices();
    }
    

    /*async delete(name: any,): Promise<Device[]> {
        await this.http.delete(
            "/"+name,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin",
                    Accept: "application/json",
                },
            }
        );
        return await this.devices();
    }*/
    delete(id: any) {
        axios.delete("http://localhost:3000/devices/delete/"+id);
        return id;
    }

    async devices(): Promise<Device[]> {
      
        const result = axios.get("http://localhost:3000/devices/test");
        const data = (await result).data;

        if (data === undefined) {
            return Promise.resolve([]);
        }

        return data.map((device: any) => {
            return {
                id: device.id,
                name: device.name,
                macAddress: device.macAddress,
                ip: device.ip,
                isGateway: device.gateway
            };
        });
    }

}

const devicesService = new DevicesService(
    "http://localhost:8080/devices"
);
export default devicesService;
