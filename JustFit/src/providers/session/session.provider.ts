import { Injectable } from '@angular/core';
import { SessionCycleVariablesModel } from '../../models/session.cycle.variables.model';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';

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

  get loggedPersonaltrainer(): PersonalTrainerModel {
    return this.sessionCycleVariables.loggedPersosnalTrainer;
  }
  set loggedPersonaltrainer(val: PersonalTrainerModel) {
    this.sessionCycleVariables.loggedPersosnalTrainer = val;
  }

}
