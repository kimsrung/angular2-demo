System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shopItems = [
                        { name: "Shirt" },
                        { name: "Pant" },
                        { name: "Sarees" },
                        { name: "Jeans" },
                        { name: "T-Shirt" }
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shopItem) {
                    this.selectedItem = shopItem;
                };
                ShoppingListComponent.prototype.setStyle = function (item) {
                    var styles = {
                        'font-size': item ? '24px' : 'none',
                        'visibility': item ? 'hidden' : 'visible'
                    };
                    return styles;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping",
                        template: "\n\t\t\t\t\t\t\t<h2>Shopping Items</h2>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li *ngFor=\"#shopItem of shopItems\" (click)=\"onItemClicked(shopItem)\">{{shopItem.name}}</li>\n\t\t\t\t\t\t\t<ul>\n\n\t\t\t\t\t\t\t<span [ngSwitch]=selectedItem.name>\n\t\t\t\t\t\t\t\t<p>You selected\n\t\t\t\t\t\t\t\t\t<span *ngSwitchWhen=\"'Shirt'\">Shirt</span>\n\t\t\t\t\t\t\t\t\t<span *ngSwitchWhen=\"'Pant'\">Pant</span>\n\t\t\t\t\t\t\t\t\t<span *ngSwitchWhen=\"'Sarees'\">Sarees</span>\n\t\t\t\t\t\t\t\t\t<span *ngSwitchWhen=\"'Jeans'\">Jeans</span>\n\t\t\t\t\t\t\t\t\t<span *ngSwitchWhen=\"'T-Shirt'\">T-Shirt</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t<div [ngStyle]=\"setStyle(selectedItem.name)\" class=\"text-success\">\n\t\t\t\t\t\t\t\tThank You for Selecting an item!\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<button [ngClass]=\"{active: isActive}\" (click)=\"isActive = !isActive\">Buy Items</button>\n\t\t\t\t\t\t",
                        styles: ["\n\t\t\t\t\t\t.button {\n\t\t\t\t\t\t\twidth: 120px;\n\t\t\t\t\t\t\tborder: medium solid black;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.active {\n\t\t\t\t\t\t\tbackground-color: red;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tp{\n\t\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\t}\n\t\t\t\t\t"],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});
//# sourceMappingURL=shopping-item.component.js.map