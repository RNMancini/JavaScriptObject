Var rainbow = { 
name: “Spot”;
legs: “4”;
ears: “2”;
hands: false;
paws: true;

rainbow.bark: function() { return this.ears +" "+ this.name;
}

rainbow.tailWag: function() { return this.name +" "+ this.paws;
}
}
