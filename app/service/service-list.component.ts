import {Component, OnInit} from 'angular2/core';
import {CountryService} from './country.service';
import {Country} from "./country";
import {Contact} from '../form/contact';


@Component({
	selector: 'country-list',
	template: `List of Countries <br>
							<ul>
								<li *ngFor="#cntry of countries">{{cntry.name}}</li>
							</ul>
						`,
	providers: [CountryService]
})

export class MyListComponent {
	public countries: Country[];
	constructor(private _countryService: CountryService) {}

	getContacts(){
		this._countryService.getContacts().then((countries: Country[]) => this.countries = countries);
	}

	ngOnInit():any{
		this.getContacts();
	}
}