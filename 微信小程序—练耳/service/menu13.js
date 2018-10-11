//音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/36Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/38Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/40Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/41Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/43Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/45Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/47Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/48Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/50Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/52Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/53Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/55Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/57Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/59Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/60Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/62Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/64Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/65Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/67Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/69Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/71Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/72Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/74Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/76Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/77Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/79Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/81Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/83Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/84Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/86Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/88Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/89Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/91Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/93Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95Alteredb7D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95DorianU4D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95HarmonicD.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95IonianU5D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95LocrianU6D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95LydianU2D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu13/95Mixolydianb9b13D.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9,b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false }
    ]
  },
];

module.exports = {
  getAnswer: data
}