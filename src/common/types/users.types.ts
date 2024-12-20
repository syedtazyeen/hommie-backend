import { UserStatus } from '../enums';

export type JwtPayload = {
  sub: string;
  email: string;
  status: UserStatus;
};
