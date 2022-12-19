import { ApplicationGatewayContract } from './ApplicationGatewayContract';

export default class Application {
  appGateway: ApplicationGatewayContract;

  constructor(appGateway: ApplicationGatewayContract) {
    this.appGateway = appGateway;
  }

  setApplicationGateWay(appGateway: ApplicationGatewayContract): any {
    this.appGateway = appGateway;
  }

  getApplicationGateWay(): any {
    return this.appGateway;
  }

  async start() {
    // eslint-disable-next-line no-console
    console.log('Init App ...');
    await this.init();
    // eslint-disable-next-line no-console
    console.log('Starting App ...');
    return this.appGateway.start();
  }

  async init() {
    await this.appGateway.init(this);
  }
}
