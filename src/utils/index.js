import toast from "react-hot-toast";

// get a product ro local storage
const getAllCartFavorites = () =>{
    const all = localStorage.getItem('cartFavorites')
    if(all){
        const cartFavorites =JSON.parse(all)
        return cartFavorites;
    }else{
        return []
    }
}
// 
// add all product ro local storage
const addToCart= product =>{
    const cartFavorites = getAllCartFavorites()
    const isExist = cartFavorites.find(item => item.product_id == product.product_id)
    if(isExist) return toast.error('This product already exist')
    cartFavorites.push(product)
    localStorage.setItem('cartFavorites', JSON.stringify(cartFavorites))
    toast.success('Successfully added this product in cart.')
}
const getAllWish = ()=>{
    const allWish = localStorage.getItem('wishlists')
    if(allWish){
        const wishlists =JSON.parse(allWish)
        return wishlists;
    }else{
        return []
    }
}
const addWish = (product) =>{
   const wishlists = getAllWish()
   const isWishExist = wishlists.find(item => item.product_id == product.product_id)
   if(isWishExist) return toast.error('This product is already exist in wishlist.')
   wishlists.push(product)
   localStorage.setItem('wishlists', JSON.stringify(wishlists))
   toast.success('Successfully added your wish item in wishlist.')
}

export {addToCart , getAllCartFavorites, addWish, getAllWish}

