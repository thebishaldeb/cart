"use strict";
export default function productsReducer(INIT_PRODUCTS) {
    INIT_PRODUCTS = [
        {
            id:1, 
            title: 'Nikon', 
            description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 
            refund: 3000,
            rent: 200
        },
        {
            id:2, 
            title: 'Canon', 
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.', 
            refund: 2500,
            rent: 100
        },
        {
            id:3, 
            title: 'Pentax', 
            description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"', 
            refund: 2000,
            rent: 210
        },
        {
            id:4, 
            title: 'Panasonic', 
            description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', 
            refund: 2110,
            rent: 120
        },
        {
            id:5, 
            title: 'Philips', 
            description: 'Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 
            refund: 3500,
            rent: 200
        },
        {
            id:6, 
            title: 'Sony', 
            description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ',
            refund: 1000,
            rent: 250
        }
    ];
    return INIT_PRODUCTS;
}
