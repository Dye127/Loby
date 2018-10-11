//音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/36Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/36LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/36IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/36DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/36Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/36LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/36Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/38Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/38LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/38IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/38DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/38Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/38LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/38Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/40Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/40LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/40IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/40DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/40Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/40LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/40Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/41Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/41LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/41IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/41DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/41Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/41LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/41Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/43Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/43LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/43IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/43DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/43Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/43LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/43Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/45Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/45LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/45IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/45DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/45Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/45LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/45Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/47Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/47LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/47IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/47DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/47Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/47LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/47Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/48Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/48LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/48IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/48DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/48Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/48LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/48Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/50Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/50LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/50IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/50DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/50Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/50LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/50Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/52Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/52LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/52IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/52DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/52Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/52LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/52Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/53Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/53LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/53IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/53DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/53Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/53LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/53Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/55Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/55LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/55IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/55DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/55Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/55LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/55Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/57Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/57LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/57IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/57DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/57Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/57LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/57Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/59Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/59LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/59IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/59DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/59Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/59LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/59Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/60Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/60LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/60IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/60DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/60Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/60LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/60Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/62Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/62LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/62IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/62DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/62Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/62LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/62Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/64Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/64LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/64IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/64DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/64Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/64LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/64Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/65Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/65LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/65IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/65DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/65Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/65LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/65Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/67Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/67LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/67IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/67DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/67Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/67LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/67Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/69Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/69LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/69IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/69DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/69Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/69LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/69Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/71Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/71LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/71IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/71DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/71Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/71LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/71Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/72Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/72LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/72IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/72DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/72Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/72LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/72Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/74Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/74LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/74IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/74DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/74Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/74LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/74Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/76Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/76LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/76IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/76DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/76Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/76LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/76Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/77Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/77LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/77IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/77DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/77Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/77LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/77Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/79Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/79LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/79IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/79DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/79Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/79LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/79Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/81Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/81LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/81IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/81DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/81Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/81LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/81Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/83Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/83LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/83IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/83DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/83Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/83LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/83Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/84Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/84LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/84IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/84DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/84Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/84LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/84Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/86Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/86LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/86IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/86DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/86Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/86LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/86Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/88Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/88LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/88IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/88DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/88Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/88LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/88Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/89Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/89LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/89IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/89DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/89Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/89LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/89Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/91Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/91LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/91IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/91DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/91Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/91LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/91Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/93Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/93LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/93IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/93DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/93Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/93LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/93Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Harmonic/95Harmonic.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LocrianU6/95LocrianU6.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/IonianU5/95IonianU5.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/DorianU4/95DorianU4.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Mixolydian/95Mixolydianb9b13.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/LydianU2/95LydianU2.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu10/Alteredb7/95Alteredb7.mp3' },
    answer: [
      { id: 0, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Ionian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Dorian(#4)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b9、b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Lydian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered(b7)', answerType: "warn", resultFlag: false },
    ]
  },
];

module.exports = {
  getAnswer: data
}