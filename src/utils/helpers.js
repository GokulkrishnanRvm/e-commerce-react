export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'INR'
    }).format(number / 10)
}

export const getUniqueValues = (data,type) => {
    // const categories = getUniqueValues(all_products,'category');
    let unique = data.map((item)=>item[type])
    //colors is array of arrays 
    if(type === 'colors'){
        unique = unique.flat()
    }
    return ['all' , ...new Set(unique)]
}