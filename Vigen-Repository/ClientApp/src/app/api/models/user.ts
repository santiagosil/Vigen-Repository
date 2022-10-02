/* tslint:disable */
/* eslint-disable */
import { Notify } from './notify';
export interface User {
  birthdate?: string;
  code?: null | string;
  countryCode?: null | string;
  email?: null | string;
  identification?: null | string;
  maritalStatus?: null | string;
  name?: null | string;
  notifies?: null | Array<Notify>;
  occupation?: null | string;
  password?: null | string;
  phone?: null | string;
  postalCode?: null | string;
  ubication?: null | string;
  verification?: boolean;
}
