export interface NotificationPayload {
  title: string;
  message: string;
  type?: string;
}

export interface SystemState {
  notification?: NotificationPayload;
}
