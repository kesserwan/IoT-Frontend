import axios, { AxiosInstance } from "axios";
import { Device } from "devices/redux/devices-state";

class DevicesService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string,): Promise<Device[]> {
        await this.http.post(
            "/",
            { name, },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        return await this.devices();
    }

    async devices(): Promise<Device[]> {
        const result = await this.http.get(
            "/",
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        const data = result.data;

        if (data === undefined) {
            return Promise.resolve([]);
        }

        return data.map((device: any) => {
            return {
                id: device.id,
                name: device.name,
            };
        });
    }

}

const devicesService = new DevicesService(
    "http://localhost:8080/devices"
);
export default devicesService;
