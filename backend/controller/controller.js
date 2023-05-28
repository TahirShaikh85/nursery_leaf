const NurserySchema = require('../model/Nursery');
const fs = require('fs')

// create new nursery
// POST: /api/newNersery
exports.newNersery = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        if (!req.body) {
            return res.status(401).send("Please fill all the fields");
        }

        const image = req.file;

        if (!image) {
            return res.status(401).send("Please choose image");
        }

        let img = fs.readFileSync(image.path);  // return buffer data of the image

        const supportedFormats = ['image/jpeg', 'image/png']; // only support this file format to upload

        // validate file formats
        if (!supportedFormats.includes(image.mimetype)) {
            return res.status(400).send("Unsupported file format")
        }
        // validate file size
        const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
        if (image.length > maxSizeInBytes) {
            return res.status(400).send("Maximum allowed size is 5MB");
        }

        // save the data in the DB
        const newNersery = new NurserySchema({
            name,
            address,
            latitude,
            longitude,
            image: {
                data: img,
                contentType: image.mimetype
            }
        })

        const savedNersery = await newNersery.save();

        // return response
        res.status(200).send("New Nursery Added successfully...!")

    } catch (error) {
        res.status(500).send("Error while creating new Nersey");
    }
}


// get the nursery by 'Nursery name' & 'address'
// GET: /api/nursery
exports.getNursery = async (req, res) => {
    try {
        const search = req.query.nursery;

        let nurseries = [];

        if (search) {
            nurseries = await NurserySchema.find({
                $or: [
                    { name: { $regex: new RegExp(search, "i") } },
                    { address: { $regex: new RegExp(search, "i") } }
                ]
            });
        }

        if (nurseries.length > 0) {

            const nurseryData = nurseries.map(nursery => {

                const { name, address, latitude, longitude, image } = nursery;

                // Convert the image data to a base64-encoded string
                const base64Image = Buffer.from(image.data, 'binary').toString('base64');

                return {
                    name,
                    address,
                    latitude,
                    longitude,
                    image: base64Image
                };
            })

            res.status(200).send(nurseryData);
        } else {
            res.status(200).send("No nurseries found");
        }
    } catch (error) {
        res.status(500).send("Error while fetching nursery information");
    }
};
