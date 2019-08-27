import {IGallery} from '../../models/gallery';

export interface IUserState {
  users: IGallery[];
  selectedUser: IGallery;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
};
