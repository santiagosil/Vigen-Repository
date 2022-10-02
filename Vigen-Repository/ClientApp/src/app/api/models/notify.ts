/* tslint:disable */
/* eslint-disable */
import { OrganizationType } from './organization-type';
import { State } from './state';
import { User } from './user';
export interface Notify {
  description?: null | string;
  id?: number;
  organizationType?: OrganizationType;
  organizationTypeId?: null | string;
  state?: State;
  stateId?: null | string;
  title?: null | string;
  user?: User;
  userId?: null | string;
}
