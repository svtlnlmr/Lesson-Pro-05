function taskLight() {
    // task 01
    console.log('-----------------task 1------------------')
    const creativeMyArr = (length, max) => ([...new Array(length)].map(() => Math.round(Math.random() * max)));
    const myArrMain = creativeMyArr(15, 20);
    console.log(myArrMain);

    // task - 02
    console.log('-----------------task 2------------------')
    myArrMain.forEach(function (element) {
        if (element % 3 === 0 && element !== 0) {
            console.log(element);
        }
    });

    // task - 03
    console.log('-----------------task 3------------------')
    function searchElement(element) { // функция поиска в массиве
        if (element > 7) return true;
    }
    let elementInArr = myArrMain.find(searchElement);
    if (elementInArr === undefined) {
        console.log('There are no elements > 7');
    } else {
        console.log(elementInArr);
    }
    
    // task - 04
    console.log('-----------------task 4------------------')
    let newArr = Object.assign([], myArrMain).map((element) => element * 2);
    console.log(newArr);

    // task - 05
    console.log('-----------------task 5------------------')
    let sum = myArrMain.reduce((prev, current) => prev += current % 2 ? 0 : current, 0);
    console.log('Sum of even elements:', sum);

    // task - 06
    console.log('-----------------task 6------------------')
    let newArrDeleteEl = Object.assign([], myArrMain);
    newArrDeleteEl.shift();
    console.log(newArrDeleteEl);
    newArrDeleteEl.pop();
    console.log(newArrDeleteEl);
}

function taskHard() {
    const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
    const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

    let arrayResult = arrayOne.filter(x => arrayTwo.includes(x));

    console.log(arrayResult);
}