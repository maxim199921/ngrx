import {IConfig} from '../../models/config';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
