export interface ILogWsCall {
  id?: number;
  serviceName?: string;
  soapRequest?: any;
  soapResponse?: any;
  httpResponseHeader?: string;
  httpRequestHeader?: string;
}

export class LogWsCall implements ILogWsCall {
  constructor(
    public id?: number,
    public serviceName?: string,
    public soapRequest?: any,
    public soapResponse?: any,
    public httpResponseHeader?: string,
    public httpRequestHeader?: string
  ) {}
}
