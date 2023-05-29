import { ResponseModel } from './responseModel';

export interface ResponseDataModel<TData> extends ResponseModel {
  data: TData[];
}
