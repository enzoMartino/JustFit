import { Component, Input } from '@angular/core';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';

@Component({
  selector: 'common-navbar',
  templateUrl: 'common-navbar.html'
})
export class CommonNavbarComponent {

  @Input() title: string;

  constructor(
    private readonly authProvider: AuthProvider,
    private readonly loaderProvider: LoaderProvider
  ) { }

  async onLogoutClicked() {
    await this.loaderProvider.showLoader();
    await this.authProvider.logout();
    await this.loaderProvider.hideLoader();
  }
}
