var app = new Vue({
    el: '#app',
    data: {
        image: '',
        link: '', 
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Fender-neutral"],
        varients: [
            {
                varientID: 01,
                varientColor: "blue"
            },
            {
                varientID: 02,
                varientColor: "green"
            }
        ],
        sizes: ["Large", "Medium", "Small"]
    }
})