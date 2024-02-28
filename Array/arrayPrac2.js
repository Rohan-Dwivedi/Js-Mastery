/* For a given array for 5 item >- [250, 645, 300, 900, 50]
All item have offer of 10% discount, change the array to reflect the discount..*/

let item = [250, 645, 300, 900, 50];
for (let i=0; i<item.length; i++) {
    let offer = item[i]/10;
    item[i] -= offer;
}

console.log(item);