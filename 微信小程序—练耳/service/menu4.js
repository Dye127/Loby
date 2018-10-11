//大调音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/36Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/36Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/36Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/36Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/38Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/38Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/38Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/38Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/40Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/40Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/40Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/40Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/41Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/41Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/41Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/41Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/43Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/43Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/43Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/43Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/45Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/45Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/45Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/45Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/47Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/47Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/47Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/47Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/48Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/48Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/48Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/48Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/50Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/50Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/50Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/50Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/52Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/52Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/52Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/52Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/53Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/53Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/53Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/53Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/55Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/55Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/55Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/55Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/57Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/57Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/57Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/57Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/59Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/59Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/59Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/59Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/60Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/60Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/60Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/60Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/62Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/62Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/62Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/62Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/64Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/64Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/64Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/64Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/65Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/65Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/65Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/65Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/67Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/67Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/67Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/67Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/69Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/69Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/69Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/69Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/71Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/71Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/71Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/71Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/72Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/72Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/72Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/72Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/74Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/74Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/74Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/74Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/76Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/76Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/76Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/76Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/77Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/77Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/77Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/77Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/79Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/79Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/79Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/79Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/81Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/81Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/81Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/81Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/83Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/83Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/83Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/83Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/84Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/84Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/84Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/84Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/86Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/86Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/86Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/86Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/88Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/88Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/88Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/88Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/89Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/89Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/89Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/89Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/91Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/91Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/91Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/91Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/93Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/93Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/93Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/93Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Dorian/95Dorian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Harmonic/95Harmonic.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "primary", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Melody/95Melody.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Minor/Natural/95Minor.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/36Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/36Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/38Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/38Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/40Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/40Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/41Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/41Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/43Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/43Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/45Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/45Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/47Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/47Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/48Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/48Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/50Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/50Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/52Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/52Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/53Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/53Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/55Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/55Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/57Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/57Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/59Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/59Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/60Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/60Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/62Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/62Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/64Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/64Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/65Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/65Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/67Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/67Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/69Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/69Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/71Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/71Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/72Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/72Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/74Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/74Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/76Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/76Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/77Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/77Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/79Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/79Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/81Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/81Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/83Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/83Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/84Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/84Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/86Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/86Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/88Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/88Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/89Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/89Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/91Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/91Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/93Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/93Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Locrian/95Locrian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/PH/Phrygian/95Phrygian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  }, {
    question: { title: 'https://ranh941.com/daiqt/Major/93Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/93Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/93Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Lydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Major.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Mixolydian.mp3' },
    answer: [
      { id: 0, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 1, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 2, title: '和声小调', answerType: "warn", resultFlag: false },
      { id: 3, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 4, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Locrian', answerType: "warn", resultFlag: false }
    ]
  }
];

module.exports = {
  getAnswer: data
}