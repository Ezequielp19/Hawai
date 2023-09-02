const Producto = require("../models/Producto")


exports.crearProducto = async  (req, res) => {
    
    let producto;
    // creamos nuestro producto
    producto = new Producto(req.body);

    await producto.save();
    res.send(producto);
}

exports.obtenerProducto = async(req,res)=>{
    const productos = await Producto.find();
    res.json(productos)
}

exports.actualizarProducto = async(req,res)=>{
    const {nombre, categoria, ubicacion, precio} = req.body;
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({ msg:'No existe el producto'})
    }

    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate({_id: req.params.id},producto,{new: true})
    res.json(producto);
    
}

exports.obtenerProducto = async(req,res)=>{
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({ msg:'No existe el producto'})
    }

    res.json(producto);
}

exports.eliminarProducto = async(req,res)=>{
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({ msg:'No existe el producto'})
    }
    
    await Producto.findOneAndRemove({ _id: req.params.id})
    res.json({msg: "Producto eliminado con exito"});
}