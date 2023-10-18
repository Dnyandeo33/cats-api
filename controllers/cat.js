import Cat from "../models/cat.js";

const catController = {
    getCats: (req, res) => {
        const cats = Cat.getCats()
        res.status(200).render('cats', { cats: cats })
    },
    getCat: (req, res) => {
        const { id } = req.params;
        const cat = Cat.getCat(id);

        if (cat) {
            res.status(200).render('cat', { cat: cat })
        } else {
            res.status(404).json({ message: `No cat with thi ${id}` })
        }
    },

    postCat: (req, res) => {
        const { name, description, age, img } = req.body;

        if (!name || !age || !description || !img) {
            res.status(400).json({ message: `Please file in all the fields` })
        } else {
            const newCat = new Cat(name, description, age, img);
            newCat.addCat()
            res.status(201).json(newCat)
        }
    },

    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, description, age, img } = req.body;

        const existedCat = Cat.updateCat(id, { name, description, age, img })
        if (existedCat) {
            res.status(201).json({ message: 'cat is updated' })
        } else {
            res.status(404).json({ message: `cat with id ${id} doesn't exist` });
        }
    },


    deleteCat: (req, res) => {
        const { id } = req.params;
        const catExist = Cat.deleteCat(id);
        if (catExist) {
            res.status(200).json({ message: `cat is deleted ${id}` })
        } else {
            res.status(404).json({ message: `cat is id with ${id} doesn't exits` })
        }
    }
}

export default catController