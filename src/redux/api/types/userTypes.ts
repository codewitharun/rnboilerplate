export interface CreateUserRequest {
  email: string;
  fullName: string;
  photo: string;
  googleSignIn: boolean;
  id?: string;
  statusId?: string;
}

export interface CreateUserResponse {
  id: string;
  fullName: string;
  email: string;
  photo: string;
  role?: {
    title: string;
  };
  status: {
    title: string;
  };
  title: string;
  googleSignIn: boolean;
  statusId?: string;
  createdAt: any;
  skills?: string[];
  phone?: string;
  experience?: string;
}
export interface UpdateUserRequest {
  id?: string;
  fullName?: string;
  email?: string;
  roleId?: string;
  googleSignIn?: boolean;
  phone?: string;
  photo?: string;
  skills?: string[];
  experience?: string;
  hourlyRate?: 0;
  location?: string;
  idProofType?: string;
  idProofNumber?: string;
  statusId?: string;
  otp?: string;
  createdAt?: any;
  updatedAt?: any;
}
export interface UpdateStatusRequest {
  userId: string;
}
export interface ananlytics {
  totalWorkers: number;
  totalAmount: string;
}
