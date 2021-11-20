import slugify from "slugify";
import Category from "../model/category";



export const list = async (req, res) => {
    const category = await Category.find({}).exec();
    res.json(category);

}
export const read = async (req, res) => {
    
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category)
}
export const create = async (req, res) => {
    const { name } = req.body;
    
    try {
        const { name } = req.body;
        const category = await new Category({ name, slug: slugify(name) }).save();
        res.json(category);

    } catch (error) {
        res.status(400).json({
            message: "Tao danh muc khong thanh cong"
        })
    }
}
export const update = async (req, res) => {
    const {name} = req.body;
    const category = await Category.findOneAndUpdate(
        {slug: req.params.slug},
        {name, slug: slugify(name)},
        {new: true}
    );
    res.json(category)
}
export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({slug: req.params.slug})
        res.json(category)
    } catch (error) {
        console.log("errrr");
        
    }

}