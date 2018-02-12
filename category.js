class Category {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    // addItem(name, price) {
    //     var item = new Item(name, price);
    //     this.items.push(item);
    //     console.log(this.items);
    //     return item;
    // }

    addItem() {
        var itemDesc = document.getElementById('item-description').value
        var itemPrice = document.getElementById('item-price').value
        var item = new Item(itemDesc, itemPrice);
        this.items.push(item);
        console.log(this.items);
        return item;
    }

    total() {
        var sum = 0;
        this.items.forEach(item => {
        sum = sum + item.price;
        console.log(sum);
      });
      return sum;
    }





    // addItems() {
    //     for(var i = 0; i < this.items.length; i++) {

    //     }
    // }
}
