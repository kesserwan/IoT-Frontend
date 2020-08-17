import { DevicesState } from "./devices-state";
import { DevicesAction, DevicesActionType, DevicesFailedAction, DevicesChangedAction } from "./devices-actions";

const initialState: DevicesState = {
  loading: false,
  succeed: false,
};

export function devicesReducer(
  state: DevicesState = initialState,
  action: DevicesAction
): DevicesState {
  switch (action.type) {
    case DevicesActionType.LOADING:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case DevicesActionType.FAILED:
      return {
        ...state,
        error: (action as DevicesFailedAction).error,
        loading: false,
      };
    case DevicesActionType.CHANGE_DEVICES:
      return {
        ...state,
        devices: (action as DevicesChangedAction).devices,
        loading: false,
        error: undefined,
      };
    default:
      return state;
  }
}
