//menu5服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/36Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/36LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/36Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/36Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/38Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/38LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/38Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/38Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/40Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/40LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/40Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/40Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/41Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/41LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/41Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/41Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/43Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/43LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/43Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/43Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/45Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/45LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/45Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/45Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/47Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/47LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/47Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/47Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/48Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/48LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/48Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/48Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/50Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/50LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/50Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/50Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/52Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/52LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/52Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/52Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/53Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/53LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/53Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/53Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/55Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/55LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/55Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/55Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/57Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/57LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/57Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/57Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/59Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/59LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/59Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/59Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/60Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/60LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/60Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/60Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/62Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/62LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/62Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/62Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/64Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/64LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/64Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/64Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/65Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/65LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/65Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/65Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/67Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/67LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/67Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/67Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/69Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/69LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/69Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/69Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/71Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/71LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/71Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/71Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/72Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/72LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/72Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/72Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/74Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/74LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/74Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/74Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/76Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/76LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/76Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/76Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/77Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/77LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/77Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/77Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/79Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/79LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/79Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/79Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/81Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/81LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/81Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/81Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/83Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/83LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/83Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/83Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/84Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/84LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/84Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/84Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/86Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/86LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/86Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/86Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/88Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/88LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/88Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/88Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/89Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/89LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/89Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/89Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/91Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/91LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/91Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/91Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/93Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/93LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/93Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/93Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydianb7/95Lydianb7.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/LydianU5/95LydianU5.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Lydian/95Lydian.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu5/Mixolydianb13/95Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
    ]
  },
];

module.exports = {
  getAnswer: data
}