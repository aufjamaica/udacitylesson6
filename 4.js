/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Batman",
    friends: 2000,
    messages: ["Welcome","to","Gotham","city"],
    postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage(index){
    facebookProfile.messages.splice(index,1);
    },
    addFriend() {
    facebookProfile.friends ++;
    },
    removeFriend() {
    facebookProfile.friends --;
    },
};
