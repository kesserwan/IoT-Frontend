import { NotificationPayload } from "./system-state";

export enum SystemActionType {
  NOTIFY = "SYSTEM_NOTIFY",
  CLEAR_NOTIFICATION = "SYSTEM_CLEAR_NOTIFICATION",
}

export interface NotifyAction {
  type: SystemActionType;
  notification: NotificationPayload;
}

export interface ClearNotificationAction {
  type: SystemActionType;
}

function notify(title: string, message: string, type?: string): NotifyAction {
  return {
    type: SystemActionType.NOTIFY,
    notification: {
      title,
      message,
      type,
    },
  };
}

function clearNotification(): ClearNotificationAction {
  return {
    type: SystemActionType.CLEAR_NOTIFICATION,
  };
}

export type SystemAction = NotifyAction | ClearNotificationAction;

export const actions = {
  notify: notify,
  clearNotification: clearNotification,
};
