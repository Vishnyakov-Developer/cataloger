const testProductsShow = async function (from, limit, catalogid, search = '', prepend = false) {

    // console.log(from, limit, catalogid);
    
    const products = (await axios({
        method: 'GET',
        url: URL + 'get_products',
        params: {
            from: from,
            limit: parseInt(limit),
            catalogid: catalogid,
            search: search
        }
    })).data;

    console.log(products);
}