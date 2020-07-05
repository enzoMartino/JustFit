import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertButton } from 'ionic-angular';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { GymSheetCreatorProvider } from '../../providers/gym-sheet-creator/gym-sheet-creator.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { ClientProvider } from '../../providers/client/client.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ClientModel } from '../../models/client.model';

@IonicPage()
@Component({
  selector: 'page-create-gym-sheet',
  templateUrl: 'create-gym-sheet.html',
})

export class CreateGymSheetPage {

  readonly daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]

  private hasGymSheetBeenModified: boolean;
  private client: ClientModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly gymSheetCreatorProvider: GymSheetCreatorProvider,
    private readonly alertProvider: AlertProvider,
    private readonly clientProvider: ClientProvider,
    private readonly loaderProvider: LoaderProvider
  ) {
    this.client = this.navParams.data.client;
    this.initSubscriptions();
  }

  onDayOfWeekClicked(dayOfWeek: string) {
    this.navCtrl.push(EnumNavigationMain.DayOfWeekDetailPage, { dayOfWeek });
  }

  async onSaveGymSheetButtonClicked() {
    await this.loaderProvider.showLoader();
    await this.clientProvider.saveClientGymSheet(this.client,
      this.gymSheetCreatorProvider.getGymSheet());
    await this.loaderProvider.hideLoader();
    const buttons: AlertButton[] = [{
      text: "OK",
      handler: () => {
        this.gymSheetCreatorProvider.clearGymSheet();
        this.navCtrl.pop();
      }
    }];
    this.alertProvider.presentInfoAlert("The Gym Sheet has been saved", buttons);
  }

  isSaveGymSheetButtonDisabled() {
    return this.hasGymSheetBeenModified;
  }

  initSubscriptions() {
    this.gymSheetCreatorProvider.onGymSheetChange.subscribe(x => this.hasGymSheetBeenModified = x);
  }

  backButtonClicked() {
    if (this.hasGymSheetBeenModified) {
      const buttons: AlertButton[] = [{
        text: "Cancel"
      }, {
        text: "OK",
        handler: () => {
          this.gymSheetCreatorProvider.clearGymSheet();
          this.navCtrl.pop();
        }
      }];
      this.alertProvider.presentWarningAlert("If you exit from this page all the unsaved changes will be lost. Do you want to exit anyway?",
        buttons);
    } else {
      this.gymSheetCreatorProvider.clearGymSheet();
      this.navCtrl.pop();
    }
  }

}
