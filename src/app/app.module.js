import { FrameworkModule } from "../framework/core/module";
import { appComponent } from "./app.component";
import { appHeaderComponent} from "./common/app.header.component";

class AppModule extends FrameworkModule {
   constructor(config) {
       super(config);
   }
}

export const appModule = new AppModule({
    components: [
        appHeaderComponent,
    ],
    bootstrap: appComponent
});




