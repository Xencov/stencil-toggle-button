import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'x-toggle-button',
  styleUrl: 'x-toggle-button.css',
  shadow: true
})
export class MyComponent {

  checkbox: HTMLInputElement;
  background: HTMLSpanElement;

  @Prop() type: string = "round";
  @Prop() checkedColor: string = "#2196F3";
  @Prop() uncheckedColor: string = "#ccc";
  @Prop({mutable: true}) checked: boolean = false;


  componentDidLoad() {
    this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor)
  }

  toggleSwitch() {
    this.checked = this.checkbox.checked;
    this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor)
  }

  render() {
    const typeClass = `slider ${this.type}`;


    return (
      <div>
        <label onClick={this.toggleSwitch.bind(this)} class="switch">
          <input type="checkbox" ref={(el: HTMLInputElement) => this.checkbox = el} checked={this.checked}/>
          <span class={typeClass} ref={(el: HTMLSpanElement) => this.background = el}>&nbsp;</span>
        </label>
      </div>
    );
  }
}
