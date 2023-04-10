import { writable } from 'svelte/store';

export const contactsInfo = writable([
    { userName : 'Rohit', userEmail : 'Rohit11@gmail.com' , userContactNo : '9874563211' },
    { userName : 'Amit', userEmail : 'Amit12@gmail.com' , userContactNo : '9874563212' },
    { userName : 'Rohan', userEmail : 'Rohan13@gmail.com' , userContactNo : '9874563213' },
    { userName : 'Krishna', userEmail : 'Krishna14@gmail.com' , userContactNo : '9874563214' },
    { userName : 'Meet', userEmail : 'Meet15@gmail.com' , userContactNo : '9874563215' },
    { userName : 'Mohit', userEmail : 'Mohit16@gmail.com' , userContactNo : '9874563216' },
    { userName : 'Vivek', userEmail : 'Vivek17@gmail.com' , userContactNo : '9874563217' },
    { userName : 'Amarjeet', userEmail : 'Amarjeet18@gmail.com' , userContactNo : '9874563218' },
    { userName : 'Palak', userEmail : 'Palak19@gmail.com' , userContactNo : '9874563219' },
    { userName : 'Jayesh', userEmail : 'Jayesh110@gmail.com' , userContactNo : '8080563210' },
    { userName : 'Ramesh', userEmail : 'Ramesh111@gmail.com' , userContactNo : '8181563211' },
    { userName : 'Ajay', userEmail : 'Ajay112@gmail.com' , userContactNo : '8282563212' },
    { userName : 'Vijay', userEmail : 'Vijay113@gmail.com' , userContactNo : '8383563213' },
    { userName : 'Pavan', userEmail : 'Pavan114@gmail.com' , userContactNo : '8484563214' },
    { userName : 'Sanjay', userEmail : 'Sanjay115@gmail.com' , userContactNo : '8585563215' }
]);

export const productInfo = writable([
     { productId : 1, productName : 'Smartphone', productDescription : 'Description of Smartphone', productPrice : '1000' },
     { productId : 2, productName : 'Tablet', productDescription : 'Description of Tablet', productPrice : '2000' },
     { productId : 3, productName : 'Laptop', productDescription : 'Description of Laptop', productPrice : '3000' },
     { productId : 4, productName : 'Desktop computer', productDescription : 'Description of Desktop computer', productPrice : '4000' },
     { productId : 5, productName : 'Smartwatch', productDescription : 'Description of Smartwatch', productPrice : '5000' },
     { productId : 6, productName : 'Fitness tracker', productDescription : 'Description of Fitness tracker', productPrice : '6000' },
     { productId : 7, productName : 'Bluetooth headphones', productDescription : 'Description of Bluetooth headphones', productPrice : '7000' },
     { productId : 8, productName : 'Wireless earbuds', productDescription : 'Description of Wireless earbuds', productPrice : '8000' },
     { productId : 9, productName : 'Portable charger', productDescription : 'Description of Portable charger', productPrice : '9000' },
    { productId : 10, productName : 'Digital camera', productDescription : 'Description of Digital camera', productPrice : '1000' },
    { productId : 11, productName : 'Gaming console', productDescription : 'Description of Gaming console', productPrice : '1100' },
    { productId : 12, productName : 'Virtual reality headset', productDescription : 'Description of Virtual reality headset', productPrice : '1200' },
    { productId : 13, productName : 'Smart home assistant', productDescription : 'Description of Smart home assistant', productPrice : '1300' },
    { productId : 14, productName : 'Wireless router', productDescription : 'Description of Wireless router', productPrice : '1400' },
    { productId : 15, productName : 'Wi-Fi extender', productDescription : 'Description of Wi-Fi extender', productPrice : '1500' },
    { productId : 16, productName : 'Computer monitor', productDescription : 'Description of Computer monitor', productPrice : '1600' },
    { productId : 17, productName : 'Keyboard', productDescription : 'Description of Keyboard', productPrice : '1700' },
    { productId : 18, productName : 'Mouse', productDescription : 'Description of Mouse', productPrice : '1800' },
    { productId : 19, productName : 'Printer', productDescription : 'Description of Printer', productPrice : '1900' },
    { productId : 20, productName : 'External hard drive', productDescription : 'Description of External hard drive', productPrice : '2000' },
    { productId : 21, productName : 'Gaming mouse pad', productDescription : 'Description of Gaming mouse pad', productPrice : '2100' },
    { productId : 22, productName : 'Graphics card', productDescription : 'Description of Graphics card', productPrice : '2200' },
    { productId : 23, productName : 'Mechanical keyboard', productDescription : 'Description of Mechanical keyboard', productPrice : '2300' },
    { productId : 24, productName : 'Computer speakers', productDescription : 'Description of Computer speakers', productPrice : '2400' },
    { productId : 25, productName : 'Smart TV', productDescription : 'Description of Smart TV', productPrice : '2500' },
]);

export let totalProducts
productInfo.subscribe(value => {
    totalProducts = Object.keys(value).length;
});

export let totalContacts
contactsInfo.subscribe(value => {
    totalContacts = Object.keys(value).length;
});
