const url: string = 'http://localhost:3007/api/'

export const productsApi = {
    async getProducts() {
        const response = await fetch(url + 'products')
        const res = await (response).json()
        return res
    },
    async getCategory() {
        const response = await fetch(url + 'product/categories')
        const res = await (response).json()
        return res
    }
}
