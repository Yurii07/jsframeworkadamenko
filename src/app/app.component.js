import { FrameworkComponent } from "../framework/core/component";

class AppComponent extends FrameworkComponent{
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <div class="row">
        <div class="col s6 offset-s3" style="margin-top: 20px">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Главная</span>
              <p>Какой-то контент будет здесь</p>
            </div>
            <div class="card-action">
              <a href="#">Переход на другую страницу</a>
            </div>
          </div>
        </div>
      </div>
    `
});


