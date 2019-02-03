import { bootstrap } from "./framework/core/bootstrap";
import { appModule } from "./app/app.module";
import { utils } from "./framework/utils/utils";

utils.delay(2000).then(() => {
    bootstrap(appModule);
});


