import { notifications } from "../index";

export function handleNotifications() {
  for (let i = 0; i < notifications.length; i++) {
    notifications[i].update();
    notifications[i].draw();

    if (notifications[i].duration >= 50) {
      notifications.splice(i, 1);
      i--;
    }
  }
}
