System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemComponent = (function () {
                function ItemComponent() {
                    this.itemList = [
                        { name: 'Apple' },
                        { name: 'Grape' },
                        { name: 'Orange' },
                        { name: 'Kiwi' },
                        { name: 'Mango' },
                    ];
                    this.clickedItem = { name: "" };
                }
                ItemComponent.prototype.onItemClicked = function (Item) {
                    this.clickedItem = Item;
                };
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        template: "<h2>List of Fruits</h2>\n\t\t\t\t\t\t <ul>\n\t\t\t\t\t\t \t<li *ngFor=\"#item of itemList\" (click)=\"onItemClicked(item)\">\n\t\t\t\t\t\t \t\t{{item.name}}\n\t\t\t\t\t\t \t</li>\n\t\t\t\t\t\t </ul>\n\t\t\t\t\t\t <input type=\"text\" [(ngModel)]=\"clickedItem.name\">\n\t\t\t  \t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_1("ItemComponent", ItemComponent);
        }
    }
});
//# sourceMappingURL=item-list.component.js.map