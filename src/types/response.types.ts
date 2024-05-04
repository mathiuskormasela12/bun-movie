
export interface IResponse {
  statusCode: number;
  message: string;
  errors: Record<string, string>[];
}

export interface IResponseWithData<T> extends IResponse {
  data: T;
}