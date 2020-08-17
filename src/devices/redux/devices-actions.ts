import { Device } from "./devices-state";
import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/root-reducer";
import { Action } from "redux";
import devicesService from "devices/services/devices-service";
import { v4 as uuidv4 } from "uuid";

export enum DevicesActionType {
  LOADING = "DEVICES_LOADING",
  FAILED = "DEVICES_FAILED",
  CHANGE_DEVICES = "DEVICES_CHANGE_DEVICES",
}

export interface DevicesLoadingAction {
  type: DevicesActionType.LOADING;
}

export interface DevicesFailedAction {
  type: DevicesActionType.FAILED;
  error: any;
}

export interface DevicesChangedAction {
  type: DevicesActionType.CHANGE_DEVICES;
  devices: Device[];
}

export type DevicesAction = DevicesLoadingAction | DevicesFailedAction | DevicesChangedAction;

function loading(): DevicesLoadingAction {
  return {
    type: DevicesActionType.LOADING,
  };
}

function failed(error: any): DevicesFailedAction {
  return {
    type: DevicesActionType.FAILED,
    error
  };
}

function changeDevices(devices: Device[]): DevicesChangedAction {
  return {
    type: DevicesActionType.CHANGE_DEVICES,
    devices
  };
}

type DevicesThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  Action<DevicesActionType>
>;

const loadDevices = (): DevicesThunkAction => async (dispatch, getState) => {
  dispatch(loading());

  try {
    const devices: Device[] = await devicesService.devices();

    dispatch(changeDevices(devices));
  } catch (e) {
    dispatch(failed(e));
  }
};

const createDevice = (
  name: string,
): DevicesThunkAction => async (dispatch, getState) => {
  dispatch(loading());

  try {
    const devices: Device[] = await devicesService.create(name);

    dispatch(changeDevices(devices));
  } catch (e) {
    dispatch(failed(e));
  }
};


export const actions = {
  loadDevices,
  createDevice,
};
