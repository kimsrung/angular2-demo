import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>Hello {{name}} !!</h2>'
})

export class MyHelloWorldClass {
	name: 'Kimsrung'
}