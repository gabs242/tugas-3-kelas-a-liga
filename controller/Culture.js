import Budaya from "../model/CultureModel";

export const getBudaya = async (req, res) => {
    try {
        const response = await Budaya.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
} 

export const getBudayaById = async (req, res) => {
    try {
        const response = await Budaya.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const createBudaya = async (req, res) => {
    try {
        await Budaya.create(req.body);
        res.status(201).json({ msg: 'Budaya Created'})
    } catch (error) {
        console.log(error.messagge);
    }
}

export const updateBudaya = async (req, res) => {
    try {
        await Budaya.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Budaya Updated'});
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteBudaya = async (req, res) => {
    try {
        await Budaya.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Budaya Deleted'})
    } catch (error) {
        console.log(error.messagge);
    }
}