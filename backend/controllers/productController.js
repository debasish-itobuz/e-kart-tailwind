import productModel from "../models/productSchema.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    console.log(req.body)
    const createProduct = await productModel.create({
      title,
      description,
      price,
    });

    if (createProduct) {
      res.json({
        status: 200,
        success: true,
        message: "Product Created Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      success: false,
      message: "Failed to Create Product ",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const product = await productModel.find({});

    if (product) {
      res.json({
        data:product,
        status: 200,
        success: true, 
        message: "Product fetched Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      success: false,
      message: "Failed to fetch Product ",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (product) {
      res.json({
        status: 200,
        success: true,
        message: "Product fetched successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      success: false,
      message: "Failed to fetch product",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const product = await productModel.findById(id);

    if (product) {
      product.title = title;
      product.description = description;
      product.price = price;
      await product.save();
      res.json({
        status: 200,
        success: true,
        message: "Product updated Successfully",
        product,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      success: false,
      message: "Failed to update Product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (product) {
      res.json({
        status: 200,
        success: true,
        message: "Product deleted Successfully",
        product,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      success: false,
      message: "Failed to delete Product",
    });
  }
};
