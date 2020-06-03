import { NgModule } from "@angular/core";
import { AlertProvider } from "./alert/alert.provider";
import { AuthProvider } from "./auth-provider/auth.provider";
import { FormsValidatorProvider } from "./forms-validator/forms-validator.provider";
import { LoaderProvider } from "./loader/loader.provider";
import { SessionProvider } from "./session/session.provider";
import { CacheProvider } from "./cache/cache.provider";
import { ExerciseProvider } from "./exercise/exercise.provider";
import { CategoryProvider } from "./category/category.provider";
import { GymSheetCreatorProvider } from "./gym-sheet-creator/gym-sheet-creator.provider";
import { ToastProvider } from "./toast/toast.provider";

@NgModule({
  declarations: [
  ],
  providers: [
    AlertProvider,
    AuthProvider,
    FormsValidatorProvider,
    LoaderProvider,
    SessionProvider,
    CacheProvider,
    ExerciseProvider,
    CategoryProvider,
    GymSheetCreatorProvider,
    ToastProvider
  ],
  exports: [
  ]
})
export class ProvidersModule { }
