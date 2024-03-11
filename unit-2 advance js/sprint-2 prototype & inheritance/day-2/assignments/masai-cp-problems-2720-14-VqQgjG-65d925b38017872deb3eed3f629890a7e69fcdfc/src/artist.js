
function Artist(name, skill, profession) {
    this.name = name;
    this.skill = skill;
    this.profession = profession;
}

Artist.prototype.getProfession = function () {
    return this.profession;
};

Artist.prototype.print = function () {
    return `I am ${this.name}`;
};

// Problem 2
var artists = new Artist('Rahul Dravid', 'Cricket', 'Cricketer');

var artistsObject = Object.create(artists);

// Do not change this
export { Artist, artistsObject };

