export const data = [
  {
    id: "post-1",
    image: require("../assets/images/forest.jpg"),
    name: "Ліс",
    country: "Ukraine",
    likes: 153,
    location: { latitude: 48.757145658957424, longitude: 30.21229458146489 },
    comments: [
      {
        id: "some-uuid-0",
        text: "Great job",
        avatar: require("../assets/images/elipse.jpg"),
        time: "09 червня, 2020 | 09:20",
      },
      {
        id: "some-uuid-8",
        text: "\u2764",
        avatar: require("../assets/images/user-photo.jpg"),
        time: "09 червня, 2020 | 09:34",
      },
    ],
  },
  {
    id: "post-2",
    image: require("../assets/images/sunset.jpg"),
    name: "Захід на Чорному морі",
    country: "Ukraine",
    likes: 200,
    location: { latitude: 48.478145645129874, longitude: 30.24561238146489 },

    comments: [
      {
        id: "some-uuid-1",
        avatar: require("../assets/images/elipse.jpg"),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        time: "09 червня, 2020 | 08:40",
      },
      {
        id: "some-uuid-2",
        avatar: require("../assets/images/user-photo.jpg"),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        time: "09 червня, 2020 | 09:14",
      },
      {
        id: "some-uuid-3",
        text: "Thank you! That was very helpful!",
        avatar: require("../assets/images/elipse.jpg"),
        time: "09 червня, 2020 | 09:20",
      },
    ],
  },
  {
    id: "post-3",
    image: require("../assets/images/old-house.jpg"),
    name: "Старий будиночок у Венеції",
    country: "Italy",
    likes: 200,
    location: { latitude: 48.478145658957424, longitude: 30.21214758146489 },
    comments: [
      {
        id: "some-uuid-4",
        text: "Super",
        avatar: require("../assets/images/elipse.jpg"),
        time: "09 червня, 2020 | 09:20",
      },
      {
        id: "some-uuid-5",
        text: "Thanks !",
        avatar: require("../assets/images/user-photo.jpg"),
        time: "09 червня, 2020 | 10:20",
      },
      {
        id: "some-uuid-6",
        text: "Great job",
        avatar: require("../assets/images/elipse.jpg"),
        time: "09 червня, 2020 | 11:20",
      },
    ],
  },
];
