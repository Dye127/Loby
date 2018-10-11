//menu2服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/36Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/36Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/36Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/36Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/38Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/38Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/38Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/38Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/40Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/40Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/40Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/40Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/41Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/41Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/41Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/41Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/43Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/43Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/43Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/43Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/45Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/45Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/45Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/45Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/47Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/47Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/47Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/47Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/48Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/48Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/48Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/48Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/50Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/50Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/50Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/50Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/52Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/52Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/52Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/52Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/53Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/53Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/53Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/53Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/55Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/55Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/55Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/55Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/57Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/57Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/57Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/57Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/59Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/59Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/59Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/59Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/60Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/60Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/60Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/60Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/62Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/62Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/62Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/62Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/64Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/64Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/64Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/64Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/65Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/65Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/65Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/65Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/67Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/67Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/67Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/67Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/69Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/69Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/69Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/69Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/71Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/71Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/71Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/71Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/72Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/72Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/72Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/72Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/74Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/74Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/74Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/74Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/76Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/76Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/76Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/76Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/77Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/77Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/77Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/77Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/79Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/79Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/79Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/79Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/81Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/81Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/81Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/81Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/83Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/83Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/83Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/83Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/84Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/84Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/84Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/84Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/86Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/86Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/86Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/86Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/88Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/88Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/88Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/88Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/89Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/89Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/89Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/89Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/91Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/91Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/91Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/91Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/93Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/93Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/93Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/93Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/95Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/95Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/95Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/95Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  }
];

module.exports = {
  getAnswer: data
}