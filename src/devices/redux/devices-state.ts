export interface DevicesState {
    loading: boolean;
    succeed: boolean;
    error?: any;
    devices?: Device[];
}

export interface Device {
    id?: number;
    name?: string;
}