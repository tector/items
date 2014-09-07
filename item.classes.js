function Item() {
    this.name = null;
    this.size = 1; // needs one slot in container or inventory
    this.drop_chance = 0;
}
Item.prototype.test = function(){};

////////////////////////////////////////////////////////////////////////////////
// Resource                                                                   //
////////////////////////////////////////////////////////////////////////////////
function ResourceItem() {
    Item.call(this);
}
ResourceItem.prototype = Object.create(Item.prototype);
ResourceItem.prototype.constructor = ResourceItem;

////////////////////////////////////////////////////////////////////////////////
// Food                                                                       //
////////////////////////////////////////////////////////////////////////////////
function FoodItem() {
    Item.call(this);
}
FoodItem.prototype = Object.create(Item.prototype);
FoodItem.prototype.constructor = FoodItem;

////////////////////////////////////////////////////////////////////////////////
// Drug                                                                       //
////////////////////////////////////////////////////////////////////////////////
function DrugItem() {
    Item.call(this);
}
FoodItem.prototype = Object.create(Item.prototype);
FoodItem.prototype.constructor = DrugItem;

////////////////////////////////////////////////////////////////////////////////
// Object                                                                     //
////////////////////////////////////////////////////////////////////////////////
function ObjectItem() {
    Item.call(this);
}
ObjectItem.prototype = Object.create(Item.prototype);
ObjectItem.prototype.constructor = ObjectItem;

////////////////////////////////////////////////////////////////////////////////
// Container                                                                  //
////////////////////////////////////////////////////////////////////////////////
function ContainerItem() {
    Item.call(this);
    this.capacity = 0;
    this.items = [];
}
ContainerItem.prototype = Object.create(Item.prototype);
ContainerItem.prototype.constructor = ContainerItem;
ContainerItem.prototype.addItem = function(itemName) {
    // cant add container item to container item
    item = new ResourceItem();
    if (item instanceof ContainerItem) {
        return false;
    } else {
        this.items.push(item);
    }
};
ContainerItem.prototype.takeItem = function(itemName) {
    var idx = this.items.indexOf(itemName);
    if (idx > -1) {
        this.items.splice(idx, 1);
        return new ResourceItem();
    } else {
        return null;
    }
};