export interface BaseResponse<T = any> {
  code: number;
  message: string;
  data?: T
};


export class ResponseEntity<T = any> implements BaseResponse<T> {
  public code: number = 200;
  public message: string = 'OK';
  public data: T | undefined = undefined;

  constructor(props: BaseResponse<T>) {
    const { code, message, data } = props;
    this.code = code;
    this.data = data;
    this.message = message;
  }
}