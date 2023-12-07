let balance = [50, 45, 2, 98, 56, 2, 10, 23];

for (const itemBalance of balance ) {
    let days = Math.ceil(itemBalance / 5);
    console.log(`Therer are ${itemBalance} items in the storage. Everything will be sold out in ${days} days`);
}
