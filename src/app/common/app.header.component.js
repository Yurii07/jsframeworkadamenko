import {FrameworkComponent} from "../../framework/core/component";

class AppHeaderComponent extends FrameworkComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeaderComponent = new AppHeaderComponent({
    selector: 'app-header',
    template: `
        <nav class="indigo">
            <div class="nav-wrapper">
            <a href="#" class="brand-logo" style="margin-left: 20px">JS Framework</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Табы</a></li>
            </ul>
            </div>
        </nav>
    `
});


