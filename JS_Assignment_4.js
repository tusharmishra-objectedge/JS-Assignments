// 1
Array.prototype.sum = function() {
    return this.reduce((sum, num) => sum + num);
}
arr = [1, 2, 3, 4, 5]
console.log(arr.sum())

// 2
function Rectangle(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Rectangle.prototype.isRectangle = function() {
    return this.x1 === this.x2 && this.y1 === this.y2;
}
rect = new Rectangle(1, 2, 1, 2)
console.log(rect.isRectangle())
