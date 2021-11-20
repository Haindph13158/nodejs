import slugify from "slugify";
import Product from "../model/product";

export const listProduct = async (req, res) => {
    const product = await Product.find({}).limit(+req.query.limit).exec();
    res.json(product);

}
export const readProduct = async (req, res) => {

    const product = await Product.findOne({ slug: req.params.slug }).exec();
    res.json(product)
}
export const createProduct = async (req, res) => {

    req.body.slug = slugify(req.body.name);


    try {

        const product = await new Product(req.body).save();
        res.json(product);

    } catch (error) {
        res.status(400).json({
            message: "Tao danh muc khong thanh cong"
        })
    }
}
export const updateProduct = async (req, res) => {
    const { name } = req.body;
    const product = await Product.findOneAndUpdate(
        { slug: req.params.slug },
        { name, slug: slugify(name) },
        { new: true }
    );
    res.json(product)
}
export const removeProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ slug: req.params.slug })
        res.json(product)
    } catch (error) {
        console.log("errrr");

    }

}