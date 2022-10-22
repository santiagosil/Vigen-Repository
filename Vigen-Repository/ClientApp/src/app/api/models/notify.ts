/* tslint:disable */
/* eslint-disable */
import { State } from './state';
import { User } from './user';
export interface Notify {
  description?: null | string;
  id?: number;
  organizationTypeId?: null | string;
  state?: State;
  stateId?: null | string;
  title?: null | string;
  user?: User;
  userId?: null | string;
}
