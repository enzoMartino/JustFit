import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonModel } from '../../models/person.model';
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

  get loggedUser(): PersonalTrainerModel | ClientModel {
    return this.sessionCycleVariables.loggedUser;
  }
  set loggedUser(val: PersonalTrainerModel | ClientModel) {
    this.sessionCycleVariables.loggedUser = val;
  }

}
