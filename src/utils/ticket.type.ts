export interface TicketProps{
  id: string;
  name: string;
  status: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  customerId: string | null;
  userId: string | null;
}