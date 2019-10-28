import { Injectable } from '@angular/core';
import { SessionCycleVariablesModel } from '../../models/session.cycle.variables.model';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';
import { ClientModel } from '../../models/client.model';

@Injectable()
export class SessionProvider {

  private sessionCycleVariables: SessionCycleVariablesModel;

  constructor() {
    this.sessionCycleVariables = new SessionCycleVariablesModel();
  }

  clearSessionCycleVariables() {
    this.sessionCycleVariables = undefined;
    this.sessionCycleVariables = new SessionCycleVariablesModel();
  }

  get loggedClient(): ClientModel {
    return this.sessionCycleVariables.loggedClient;
  }
  set loggedClient(val: ClientModel) {
    this.sessionCycleVariables.loggedClient = val;
  }

}
