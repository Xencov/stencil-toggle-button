/*! Built with http://stenciljs.com */
ToggleButton.loadBundle("vhhvmbef",["exports"],function(e){var t=window.ToggleButton.h,c=function(){function e(){this.type="round",this.checkedColor="#2196F3",this.uncheckedColor="#ccc",this.checked=!1}return e.prototype.componentDidLoad=function(){this.background.style.setProperty("background",this.checked?this.checkedColor:this.uncheckedColor)},e.prototype.toggleSwitch=function(){this.checked=this.checkbox.checked,this.background.style.setProperty("background",this.checked?this.checkedColor:this.uncheckedColor)},e.prototype.render=function(){var e=this,c="slider "+this.type;return t("div",null,t("label",{onClick:this.toggleSwitch.bind(this),class:"switch"},t("input",{type:"checkbox",ref:function(t){return e.checkbox=t},checked:this.checked}),t("span",{class:c,ref:function(t){return e.background=t}}," ")))},Object.defineProperty(e,"is",{get:function(){return"x-toggle-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0},checkedColor:{type:String,attr:"checked-color"},type:{type:String,attr:"type"},uncheckedColor:{type:String,attr:"unchecked-color"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".switch{position:relative;display:inline-block;width:60px;height:34px}.switch input{display:none}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input:focus+.slider{-webkit-box-shadow:0 0 1px #2196f3;box-shadow:0 0 1px #2196f3}input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}"},enumerable:!0,configurable:!0}),e}();e.XToggleButton=c,Object.defineProperty(e,"__esModule",{value:!0})});