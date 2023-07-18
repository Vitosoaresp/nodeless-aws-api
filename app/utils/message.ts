import { ResponseVO } from "../model/vo/responseVo";

enum StatusCode {
  success = 200,
  error = 400,
}

interface Headers {
  [key: string]: string | boolean;
}

class Result {
  private statusCode: number;
  private code: number;
  private message: string;
  private data?: any;
  private headers: Headers;

  constructor(
    statusCode: number,
    code: number,
    message: string,
    data?: any,
    headers?: Headers
  ) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
    this.headers = headers || {};
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString() {
    return {
      statusCode: this.statusCode,
      headers: this.headers,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        data: this.data,
      }),
    };
  }
}

export class MessageUtil {
  static success(data: object): ResponseVO {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };
    const result = new Result(StatusCode.success, 0, "success", data, headers);
    return result.bodyToString();
  }

  static error(code: number = 400, message: string) {
    const result = new Result(StatusCode.error, code, message);

    console.log(result.bodyToString());
    return result.bodyToString();
  }
}
