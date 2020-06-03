import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';

@Component({
  selector: 'common-navbar',
  templateUrl: 'common-navbar.html'
})
export class CommonNavbarComponent {

  @Input() title: string;
  @Input() hasCloseButton: boolean;
  @Input() hasSettingsButton: boolean;
  @Input() hasLogoutButton: boolean;

  @Output() closeButtonClicked: EventEmitter<void>;

  constructor(
    private readonly authProvider: AuthProvider,
    private readonly loaderProvider: LoaderProvider
  ) {
    this.closeButtonClicked = new EventEmitter;
  }

  async onLogoutClicked() {
    await this.loaderProvider.showLoader();
    await this.authProvider.logout();
    await this.loaderProvider.hideLoader();
  }

  onCloseButtonClicked() {
    this.closeButtonClicked.emit();
  }

}
