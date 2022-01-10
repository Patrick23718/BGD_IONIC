export interface Message {
  toId: string;
  fromId: string;
  message?: string;
  imageURL?: Date;
  isRead: boolean;
}
