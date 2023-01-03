// 1
var arr = [10, 12, 15, 21];
for (var i = 1; i <= arr.length; i++) {
    console.log('The index of this number is: ', i)
}

// 2
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['mango', 'Apple', 'Strawberry'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        (function(index) {
            document.getElementById('btn-' + index).onclick = function() {
                alert(prizes[index]);
            };
        })(btnNum);
    }
</script>
