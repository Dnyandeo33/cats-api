import { v4 as newId } from "uuid";


let cats = [
    {
        id: '1',
        name: 'Sokoke Cat',
        description: "The Sokoke Cat is the rarest domestic cat breed in the world, according to the UK’s Governing Council of the Cat Fancy (GCCF). Originating from the forests of Sokoke in eastern Kenya, these cats were previously considered a hybrid breed of a cross between wild cats but DNA results have debunked this theory.",
        age: '3',
        img: 'https://www.gccfcats.org/wp-content/uploads/2021/09/Sokoke.jpg'
    },
    {
        id: '2',
        name: 'Devon Rex',
        description: "The Devon Rex cat earned its name from its place of origin, Devonshire, in the United Kingdom. “The Devon Rex is a breed of unique appearance. The breed’s large eyes, short muzzle, prominent cheekbones, and huge, low-set ears create a characteristic elfin look,” according to Petrine.",
        age: '10',
        img: 'https://www.omlet.co.uk/images/cache/380/512/Cat-Devon_Rex-A_black_faced_devon_rex_with_golden_eyes.jpg'
    },
    {
        id: '3',
        name: 'Kurilian Bobtail',
        description: "The Kurilian Bobtail cat is a super rare breed, with only around 100 cats in North America alone, according to TICA. While many breeds’ unique features are developed with human assistance and manipulation, the Kurilian Bobtail is a completely natural breed with no two tails that look alike. They’re known for having extremely short tails, a truly unique characteristic of the breed’s physical appearance.",
        age: '5',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/American_bobtail_2.jpg'
    },
    {
        id: '4',
        name: 'Norwegian',
        description: "Native to Norway, the Norwegian Forest is very playful and active and is well-known for its fun-loving spirit. This breed is very family-oriented and tend to bond to several people at once. Known for being very friendly towards other pets, these cats are very docile and intelligent, according to Petrine. This cat breed is quite rare, but can mainly be found in Europe.",
        age: '8',
        img: 'https://thumbs.dreamstime.com/b/norwegian-forest-cat-male-sitting-snow-outdoors-staring-photographer-norwegian-forest-cat-male-snow-131089136.jpg'
    },
    {
        id: '5',
        name: "Minskin",
        description: "With its short legs and stocky body, this feline has been compared to the Corgi dog. Outgoing and affectionate, these cats are ideal indoor companions. The Minikin cat is a result of crossbreeding between the Munchkin and Burmese cats with the addition of Devon Rex and the Sphinx",
        age: "7",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Minskin_Kitten_Female_blue_tabby_color-pattern.jpg"
    }
]


class Cat {
    constructor(name, description, age, img) {
        this.id = newId()
        this.name = name,
            this.description = description,
            this.age = age,
            this.img = img
    }

    static getCats = () => {
        return cats
    };

    static getCat = (id) => {
        return cats.find((cat) => cat.id === id)
    };

    addCat = () => {
        return cats.push(this)
    };

    static updateCat = (id, updateCat) => {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false
        } else {
            cats[index] = { id, ...updateCat };
            return true
        }
    }

    static deleteCat = (id) => {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false
        } else {
            cats.splice(index, 1);
            return true
        }
    };

}

export default Cat;