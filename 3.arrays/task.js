function compareArrays(arr1, arr2) {
    // if (arr1.length === arr2.length) {
    //     for (let i = 0; i < arr1.length; i++) {
    //         if (arr1[i] !== arr2[i]) {
    //              return false;
    //         }
    //     }
    // } else {
    //     return false;
    //     }
    // return true;
return (arr1.length == arr2.length) && arr1.every(function(element, index) {
    return element === arr2[index]; 
    });
}

function getUsersNamesInAgeRange(users, gender) {

}

function advancedFilter(arr) {
    let result = arr.filter(element => element > 0).filter(element => element % 3 === 0).map(element => element * 10);
}
