import axios, { AxiosInstance } from "axios";

interface Device {
    name: string;
    id: string;
}

class HelloService {

    private http: AxiosInstance;

    constructor(baseUrl: string){
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async getName(): Promise<string> {

        const response = await this.http.get(
            "/get-name"
        );
        
        return response.data;

    }

    async changeName(name: string): Promise<string> {
        const response = await this.http.put(
            "/change-name/"+name
        );
        
        return response.data;
    }

}

const helloService = new HelloService(
    "http://localhost:8080/devices"
)

export default helloService;