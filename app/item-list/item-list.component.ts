import {Component} from "angular2/core";

@Component({
	selector: 'my-list',
	template: `<h2>List of Fruits</h2>
						 <ul>
						 	<li *ngFor="#item of itemList" (click)="onItemClicked(item)">
						 		{{item.name}}
						 	</li>
						 </ul>
						 <input type="text" [(ngModel)]="clickedItem.name">
			  		`
})

export class ItemComponent {
	
	public itemList =[
    {name: 'Apple'},
    {name: 'Grape'},
    {name: 'Orange'},
    {name: 'Kiwi'},
    {name: 'Mango'},

	];

	public clickedItem = {name: ""};
	onItemClicked(Item) {
		this.clickedItem	= Item;
	}

}