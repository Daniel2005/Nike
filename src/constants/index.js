import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, bigShoe4, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, bigShoeCard1, bigShoeCard2, bigShoeCard3, bigShoeCard4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        id: "Nike Dunk Low",
        imgURL: shoe4,
        imgCard: bigShoeCard1,
        name: "Nike Dunk Low",
        price: "$300",
    },
    {
        id: "Off White Dunk",
        imgURL: shoe5,
        imgCard: bigShoeCard2,
        name: "Off White Dunk",
        price: "$649",
    },
    {
        id: "Jordan 1 Retro",
        imgURL: shoe6,
        imgCard: bigShoeCard3,
        name: "Jordan 1 Retro",
        price: "$950",
    },
    {
        id: "Jordan 1 Low",
        imgURL: shoe7,
        imgCard: bigShoeCard4,
        name: "Jordan 1 Low",
        price: "$173",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer2,
        customerName: 'Sophie Anderson',
        rating: 4.8,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer1,
        customerName: 'Elijah Johnson',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Nike Dunk Low", href: "#products" },
            { name: "Jordan 1 Retro", href: "#products" },
            { name: "Jordan 1 Retro Low", href: "#products" },
            { name: "Jordan 1 Low", href: "#products" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Terms of Use", href: "https://agreementservice.svs.nike.com/bg/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike.unite&country=BG&language=en&requestType=redirect" },
            { name: "Terms of Sale", href: "https://www.eshopworld.com/terms-and-conditions-of-sale-en/" },
            { name: "Privacy & policy", href: "https://agreementservice.svs.nike.com/bg/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.commerce.nikedotcom.web&country=bg&language=en&requestType=redirect" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, link: "https://www.facebook.com/nike/", alt: "facebook logo" },
    { src: twitter, link: "https://twitter.com/Nike", alt: "twitter logo" },
    { src: instagram,link: "https://www.instagram.com/nike/", alt: "instagram logo" },
];