// 1
function Employee(firstName, lastName) {
	return `${firstName} ${lastName}`
}
console.log(Employee('object','edge'))

// 2
for(let i=1; i<=10; i++){
    console.log(i)
}

// 3
let a = [ 2 , 4, 8, 9, 10, 2, 5, 10, 12, 89]
console.log(...new Set(a))

// 4
let a = [ 2 , 4, 8, 9, 10, 2, 5, 10, 12, 89]
let date = new Date()
while(true){
    console.log(date.toLocaleTimeString())
    date = new Date()
}
