import { NgModule } from "@angular/core";
import { AlertProvider } from "./alert/alert.provider";
import { AuthProvider } from "./auth-provider/auth.provider";
import { FormsValidatorProvider } from "./forms-validator/forms-validator.provider";
import { LoaderProvider } from "./loader/loader.provider";
import { SessionProvider } from "./session/session.provider";


@NgModule({
  declarations: [
  ],
  providers: [
    AlertProvider,
    AuthProvider,
    FormsValidatorProvider,
    LoaderProvider,
    SessionProvider
  ],
  exports: [
  ]
})
export class ProvidersModule { }
