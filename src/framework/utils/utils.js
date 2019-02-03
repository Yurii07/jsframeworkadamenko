import {bootstrap} from "../core/bootstrap";
import {appModule} from "../../app/app.module";

export let utils = {
    delay(ms = 1000) {
        return new Promise(function (resolve, reject) {
            setTimeout(function() {
                resolve();
            }, ms);
        });
    }
};