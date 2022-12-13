import Budaya from '../model/CultureModel.js';
import path from "path";
import fs from "fs";

export const getBudaya = async (req, res) => {
    // SELECT * FROM product
    try {
        const response = await Budaya.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
};

export const getBudayaById = async (req, res) => {
      // SELECT * FROM product WHER id = ?
    try {
        const response = await Budaya.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
};

export const createBudaya = async (req, res) => {
    // INSERT INTO product VALUES (...)
    if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
    const { nama_budaya, jenis_budaya, tempat_budaya, deskripsi } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
        await Budaya.create({
        nama_budaya:nama_budaya,
        jenis_budaya: jenis_budaya,
        tempat_budaya: tempat_budaya,
        deskripsi:deskripsi,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Budaya Created Successfuly" });
    } catch (error) {
        console.log(error.messagge);
    }
    });
}; 

export const updateBudaya = async (req, res) => {
    // UPDATE product SET (...) WHERE id = ?
    const budaya = await Budaya.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!budaya) return res.status(404).json({ msg: "No Data Found" });

      let fileName = "";
      if (req.files === null) {
        fileName = budaya.image;
      } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = [".png", ".jpg", ".jpeg"];

        if (!allowedType.includes(ext.toLowerCase()))
            return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000)
            return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        
        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const { nama_budaya, jenis_budaya, tempat_budaya, deskripsi} = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

        
    try {
        await Budaya.update(
            {nama_budaya:nama_budaya, jenis_budaya:jenis_budaya, tempat_budaya:tempat_budaya, deskripsi:deskripsi,image: fileName, url: url},
            {
            where: {
                id: req.params.id,
            },
        }
    );
    res.status(200).json({ msg: 'Budaya Updated Successfuly'});
    } catch (error) {
        console.log(error.messagge);
    }
};

export const deleteBudaya = async (req, res) => {
    // DELETE FROM product WHERE id = ?
    const budaya = await Budaya.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!budaya) return res.status(404).json({ msg: "No Data Found" });
      
      try {
        const filepath = `./public/images/${budaya.image}`;
        fs.unlinkSync(filepath);
        await Budaya.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Budaya Deleted'})
    } catch (error) {
        console.log(error.messagge);
    }
};

export const getCulture = async (req, res) => {
    try {
      const response = await Budaya.findAll({
        where: {
          id: 1,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  };