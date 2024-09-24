import { github, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigMouse1, bigMouse2, bigMouse3, bigMouse4, customer1, customer2, mouse5, mouse6, mouse7, mouse8, thumbnailMouse1, thumbnailMouse2, thumbnailMouse3, thumbnailMouse4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const mouses = [
    {
        thumbnail: thumbnailMouse1,
        bigMouse: bigMouse1,
    },
    {
        thumbnail: thumbnailMouse2,
        bigMouse: bigMouse2,
    },
    {
        thumbnail: thumbnailMouse3,
        bigMouse: bigMouse3,
    },
    {
        thumbnail: thumbnailMouse4,
        bigMouse: bigMouse4,
    },
];

export const statistics = [
    { value: '100+', label: 'Models' },
    { value: '10+', label: 'Brands' },
    { value: '10K+', label: 'Customers' },
];

export const products = [
    {
        imgURL: mouse5,
        name: "SteelSeries Aerox 9 Wireless",
        price: "$149",
    },
    {
        imgURL: mouse6,
        name: "Logitech G502 X Plus",
        price: "$139",
    },
    {
        imgURL: mouse7,
        name: "MSI Clutch GM51",
        price: "$89",
    },
    {
        imgURL: mouse8,
        name: "HyperX Pulsefire Haste",
        price: "$49",
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
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Brands",
        links: [
            { name: "LogiTech   ", link: "/" },
            { name: "Corsair", link: "/" },
            { name: "Razer", link: "/" },
            { name: "Glorious", link: "/" },
            { name: "Hyper X", link: "/" },
            { name: "MSI", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
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
    { src: github, alt: "githib logo", link: "https://github.com/karo-yousefi"},
    { src: twitter, alt: "twitter logo", link: "https://x.com/karo_yousefi_"},
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/karo_yousefi_"},
];