const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

const animal = Object.create(Animal);
animal.image = "image.jpg";

console.log(animal.image);