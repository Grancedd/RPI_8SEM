import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "1",
    title: "Wooo and store place",
    type: "apartment",
    price: 120,
    previewImage: "../public/img/apartament-premium-Paris_01.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.8546,
        longitude: 2.5673,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.8546,
      longitude: 2.5673,
      zoom: 16,
    },
    isFavorite: true,
    isPrimium: false,
    rating: 4.5,
  },
  {
    id: "2",
    title: "Wooo and store place",
    type: "apartment",
    price: 140,
    previewImage: "../public/img/apartament-premium-Madrid_02.jpg",
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
  },
  {
    id: "3",
    title: "Wooo and store place",
    type: "apartment",
    price: 120,
    previewImage: "../public/img/apartament-premium-Humburg_01.jpg",
    city: {
      name: "Humburg",
      location: {
        latitude: 68.8546,
        longitude: 6.5673,
        zoom: 13,
      },
    },
    location: {
      latitude: 68.8546,
      longitude: 6.5673,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
  },
  {
    id: "4",
    title: "Wooo and store place",
    type: "apartment",
    price: 160,
    previewImage: "../public/img/apartament-premium-Brussels_01.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 18.8546,
        longitude: 8.5673,
        zoom: 13,
      },
    },
    location: {
      latitude: 18.8546,
      longitude: 8.5673,
      zoom: 16,
    },
    isFavorite: false,
    isPrimium: true,
    rating: 4.4,
  },

];