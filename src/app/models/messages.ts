export interface Messages {
  id: number;
  author: string;
  to: string;
  message: string;
  time: string;
}
export interface ChatUser {
  id: number;
  author: string;
  to: string;
  messages: Messages;
}
