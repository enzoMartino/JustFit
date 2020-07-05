import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { Navbar, NavController } from 'ionic-angular';

@Component({
  selector: 'common-navbar',
  templateUrl: 'common-navbar.html'
})
export class CommonNavbarComponent implements AfterViewInit {

  @ViewChild(Navbar) navBar: Navbar;

  @Input() title: string;
  @Input() hasCloseButton: boolean;
  @Input() hasSettingsButton: boolean;
  @Input() hasLogoutButton: boolean;

  @Output() closeButtonClicked: EventEmitter<void>;
  @Output() backButtonClicked: EventEmitter<void>;

  constructor(
    private readonly authProvider: AuthProvider,
    private readonly loaderProvider: LoaderProvider,
    public navCtrl: NavController
  ) {
    this.closeButtonClicked = new EventEmitter;
    this.backButtonClicked = new EventEmitter;
  }

  ngAfterViewInit(): void {
    this.overrideBackButtonClick();
  }

  async onLogoutClicked() {
    await this.loaderProvider.showLoader();
    await this.authProvider.logout();
    await this.loaderProvider.hideLoader();
  }

  onCloseButtonClicked() {
    this.closeButtonClicked.emit();
  }

  private overrideBackButtonClick() {
    this.navBar.backButtonClick = () => {
      if (this.backButtonClicked.observers.length > 0) {
        this.backButtonClicked.emit();
      } else {
        this.navCtrl.pop();
      }
    };
  }

}
