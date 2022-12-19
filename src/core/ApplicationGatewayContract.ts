import Application from './Application';

export interface ApplicationGatewayContract {
  init(application: Application): Promise<void>;
  start(): Promise<void>;
}
