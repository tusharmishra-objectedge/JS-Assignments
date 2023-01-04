// 1
const checkDogs = (dogsJulia, dogsKate) => {
  const onlyDogsJulia = [...dogsJulia]
  onlyDogsJulia.splice(0,1);
  onlyDogsJulia.splice(-1, 1);
  const allDogs = [...onlyDogsJulia, ...dogsKate]
  allDogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// 2
const calcAverageHumanAge = ages => {
    const dogToHumanAge = ages.map(age => {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });
    const adultDogToHumanAge = dogToHumanAge.filter(age => age >= 18);
    let average = adultDogToHumanAge.reduce((a, b) => a + b, 0)
    average /= adultDogToHumanAge.length
    return average;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 21.3
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 22.5

// 3
const calcAverageHumanAge = ages => {
    const adultDogToHumanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18);
    const average = adultDogToHumanAge.reduce((a, b) => a + b, 0) / adultDogToHumanAge.length;
    return average;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// 4
const dogs = [{
        weight: 22,
        curFood: 250,
        owners: ['Alice', 'Bob']
    },
    {
        weight: 8,
        curFood: 200,
        owners: ['Matilda']
    },
    {
        weight: 13,
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    {
        weight: 32,
        curFood: 340,
        owners: ['Michael']
    }
];
dogs.forEach(dog => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
});
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
sarahDog.curFood > sarahDog.recommendedFood ? console.log(`Sarah's dog eats too much!`) : console.log(`Sarah's dog eats too little!`)
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
    dog.curFood > dog.recommendedFood ? ownersEatTooMuch.push(...dog.owners) : ownersEatTooLittle.push(...dog.owners)
});
console.log(`${ownersEatTooMuch.join(', ')}'s dogs eat too much`)
console.log(`${ownersEatTooLittle.join(', ')}'s dogs eat too little`)
let dogEatingExactFood;
dogs.forEach(dog => {
    dog.curFood === dog.recommendedFood ? dogEatingExactFood = true : dogEatingExactFood = false
});
console.log(dogEatingExactFood);
let dogEatingOkayFood = false;
const dogsEatingOkay = [];
dogs.forEach(dog => {
    if (dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1) {
        dogEatingOkayFood = true;
        dogsEatingOkay.push(dog);
    }
});
console.log(dogEatingOkayFood);
const dogsCopy = [...dogs];
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy)
