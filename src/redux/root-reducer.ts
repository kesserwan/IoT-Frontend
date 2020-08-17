import { combineReducers } from "redux";
import { systemReducer } from "./system-reducer";
import { devicesReducer } from "../devices/redux/devices-reducer";

const rootReducer = combineReducers({
  devices: devicesReducer,
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
