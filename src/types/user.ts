export interface IUser {
  id: number;
  username: string;
  password: string;
  api_token: string;
  api_token_expired_at: string;
  detail_type: string;
  detail_id: number;
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string;
  deleted_at: string | null;
  detail: {
    id: number;
    fullname: string;
    created_by: string | null;
    updated_by: string | null;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
  };
}

export interface IRole {
  id: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  pivot: {
    user_id: number;
    role_id: number;
  };
}
