export interface CustomerProps{
  id: string;
  name: string;
  phone: string | null;
  email: string;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
}