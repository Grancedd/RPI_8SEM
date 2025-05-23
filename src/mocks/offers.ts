// Необходимо описать 4 объекта недвижимости. Импортируем тип FullOffer,
// а затем создаем переменную, которая представляет собой массив из объектов FullOffer.
// Фотографии можете подобрать самостоятельно и поместить их в папку public/img.

import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: "1",
    title: "Wooo and store place",
    type: "apartment",
    price: 120,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8546,
        longitude: 2.3488,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.8546,
        longitude: 2.3488,
      zoom: 16,
    },
    isFavorite: true,
    isPrimium: true,
    rating: 4.5,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
    ],
    host: {
      name: "John Doe",
      avatarUrl: "../public/img/avatar_3-john-doe.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Paris_01.jpg",
      "../public/img/apartament-premium-Paris_02.jpg",
      "../public/img/apartament-premium-Paris_03.jpg",
      "../public/img/apartament-premium-Paris_01.jpg",
      "../public/img/apartament-premium-Paris_02.jpg",
      "../public/img/apartament-premium-Paris_03.jpg",
    ],
    maxAdults: 4,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "2",
    title: "Wooo and store place",
    type: "apartment",
    price: 140,
    city: {
      name: "Madrid",
      location: {
        latitude: 28.8546,
        longitude: 4.5673,
        zoom: 13,
      },
    },
    location: {
      latitude: 28.8546,
      longitude: 4.5673,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.7,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Agelina Joly",
      avatarUrl: "../public/img/avatar_1-angelina_joly.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Madrid_01.jpg",
      "../public/img/apartament-premium-Madrid_02.jpg",
      "../public/img/apartament-premium-Madrid_03.jpg",
      "../public/img/apartament-premium-Madrid_04.jpg",
      "../public/img/apartament-premium-Madrid_03.jpg",
      "../public/img/apartament-premium-Madrid_04.jpg",
    ],
    maxAdults: 4,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "3",
    title: "Wooo and store place",
    type: "apartment",
    price: 120,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.5753,
        longitude: 10.0153,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.5753,
        longitude: 10.0153,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Marya Sten",
      avatarUrl: "../public/img/avatar_2-marya-sten.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Humburg_01.jpg",
      "../public/img/apartament-premium-Humburg_02.jpg",
      "../public/img/apartament-premium-Humburg_03.jpg",
      "../public/img/apartament-premium-Humburg_04.jpg",
      "../public/img/apartament-premium-Humburg_03.jpg",
      "../public/img/apartament-premium-Humburg_04.jpg",
    ],
    maxAdults: 6,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "4",
    title: "Wooo and store place",
    type: "apartment",
    price: 160,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8504,
        longitude: 4.3487,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.8504,
        longitude: 4.3487,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 5,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "4a",
    title: "Wooo and store place",
    type: "apartment",
    price: 180,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8704,
        longitude: 4.3687,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.8704,
        longitude: 4.3687,
      zoom: 16,
    },
    isFavorite: true,
    isPrimium: true,
    rating: 4.6,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 5,
    previewImage: "../public/img/apartament-premium-Brussels_03.jpg",
  },
  {
    id: "5",
    title: "Wooo and store place",
    type: "apartment",
    price: 160,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: false,
    rating: 4.4,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 3,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "6",
    title: "Wooo and store place",
    type: "apartment",
    price: 160,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.360955394350,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.360955394350,
        longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Humburg_01.jpg",
      "../public/img/apartament-premium-Humburg_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 6,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "7",
    title: "Лучшее место в Амстердаме",
    type: "apartment",
    price: 160,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
        longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
    description: "A nice place in the heart of the city",
    bedrooms: 2,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Humburg_01.jpg",
      "../public/img/apartament-premium-Humburg_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 6,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
  {
    id: "8",
    title: "Лучшее место в Амстердаме",
    type: "apartment",
    price: 160,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
        longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.9,
    description: "A nice place in the heart of the city",
    bedrooms: 3,
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Baby seat",
      "Washer",
      "Coffee machine",
      "Diswasher",
      "Breakfast",
    ],
    host: {
      name: "Mark Gen",
      avatarUrl: "../public/img/avatar_4-mark-gen.jpg",
      isPro: true,
    },
    images: [
      "../public/img/apartament-premium-Brussels_01.jpg",
      "../public/img/apartament-premium-Brussels_02.jpg",
      "../public/img/apartament-premium-Humburg_01.jpg",
      "../public/img/apartament-premium-Humburg_02.jpg",
      "../public/img/apartament-premium-Brussels_03.jpg",
      "../public/img/apartament-premium-Brussels_04.jpg",
    ],
    maxAdults: 4,
    previewImage: "../public/img/apartament-premium-Paris_03.jpg",
  },
];
export { offers };
