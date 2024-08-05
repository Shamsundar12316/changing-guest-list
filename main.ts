// part11/ question 15/ changing guest list// 

let guest_list: string[] = ["washo dev", "sham", "kiran", "kailash", "usman"];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]} \n\nyou are invited for a dinner tomorrow,\n\nThank you,\n`);

}
let not_coming: string = "washo dev";
let new_guest: string = "ravi";
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]} \n\nyou are invited for a dinner tomorrow,\n\nThank you,\n`);

}
console.log(`Mr ${not_coming}, is not coming for dinner tomorrow,`)