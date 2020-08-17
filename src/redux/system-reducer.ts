import { SystemState } from "./system-state";
import { SystemAction, SystemActionType, NotifyAction } from "./system-actions";

const initialState: SystemState = {};

export function systemReducer(
  state: SystemState = initialState,
  action: SystemAction
): SystemState {
  switch (action.type) {
    case SystemActionType.NOTIFY:
      return {
        ...state,
        notification: (action as NotifyAction).notification,
      };
    case SystemActionType.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: undefined,
      };
    default:
      return state;
  }
}
