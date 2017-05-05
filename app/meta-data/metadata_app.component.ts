import {Component} from "angular2/core";
import {ItemComponent} from '../item-list/item-list.component';

@Component({
   selector: 'my-wraper',
   template: '<my-list></my-list>',
   directives: [ItemComponent]
})


export class AppComponent {
	name: 'Kimsrung'
}