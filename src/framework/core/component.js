export class FrameworkComponent {
    constructor(config) {
        this.selector = config.selector;
        this.template = config.template;
        this.element = null;
    }

    render() {
        this.element = document.querySelector(this.selector);

        if (this.element === null) {
            throw new Error(`The component with selector ${this.selector} wasn't found`);
        }

        this.element.innerHTML = this.template;
    }
}