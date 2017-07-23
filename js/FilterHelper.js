// Filter Helper Start
//...Example 1
const channel = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
];
const premium = channel.filter(function(channel){
    return channel.premium;
});
console.log(premium);
//...Example 2
const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
];

const user = {
    name:'Zia',
    premium:'true',
    premiumChannels:function(){
        const $this = this;
        return channels.filter(function(channel){
            return channel.premium && $this.premium;
        })
    },
    channels:function(){
        return channels.filter(function(channel){
            return channel.premium === false;
        })
    }
}

console.log(user.premiumChannels());
console.log(user.channels());



// Filter Helper End