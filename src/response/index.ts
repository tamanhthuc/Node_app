export interface BaseResponse<T = any> {
  code: number;
  message: string;
  result?: number;
  data?: T,
};


export class ResponseEntity<T = any> implements BaseResponse<T> {
  public code: number = 200;
  public message: string = 'OK';
  public data: T | undefined = undefined;
  public result: number | undefined = undefined;

  constructor(props: BaseResponse<T>) {
    const { code, message,result, data } = props;
    this.code = code;
    this.result = result
    this.data = data;
    this.message = message;
  }
} 