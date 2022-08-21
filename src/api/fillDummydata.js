const { saveData } = require('./database');
const moment = require('moment');

const posts = {
    1: {
        id: 1,
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        name: 'Basic Tee',
        description: 'Click for Details',
        createdAt: moment.utc().toISOString(),
        moreImages: [
            'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        likes: 249,
        views: 3665,
        downloads: 89,
        downloadable: true,
        downloadableLink: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        deleted: false,
        whatsapp: '+917999893361',
    },
    2: {
        id: 2,
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        name: 'Artwork Tee',
        description: 'Click for Details',
        createdAt: moment.utc().toISOString(),
        moreImages: [
            'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        likes: 954,
        views: 12547,
        downloads: 234,
        downloadable: true,
        downloadableLink: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        deleted: false,
        whatsapp: '+917999893361',
    }
};

const sampleSiteData = {
    admin: {
        name: 'Mohit Gupta',
        email: 'mohithelpservices@gmail.com',
    },
    maintainer: {
        name: 'Mohit Gupta',
        email: 'gotomohitsplace@gmail.com', // The person whome this site is gifted to
    },
    posts: posts,
    active: true,
};

const site = 'sample';
const path = `/${site}Dev`;

saveData(path, sampleSiteData);
console.log(`saving at ${path} : data :`, sampleSiteData);
// console.log(moment())
// const dateM = moment.utc().toISOString();
// console.log(dateM)
// console.log(new Date(dateM).toTimeString())
// console.log(moment(dateM))
const justImportThis = () => {
    // pass
};

export default justImportThis;
