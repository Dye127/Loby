//音阶服务的js

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
  },
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
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/36LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/36Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/36Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/38LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/38Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/38Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/40LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/40Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/40Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/41LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/41Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/41Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/43LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/43Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/43Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/45LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/45Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/45Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/47LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/47Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/47Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/48LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/48Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/48Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/50LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/50Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/50Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/52LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/52Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/52Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/53LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/53Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/53Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/55LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/55Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/55Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/57LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/57Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/57Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/59LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/59Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/59Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/60LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/60Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/60Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/62LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/62Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/62Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/64LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/64Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/64Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/65LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/65Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/65Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/67LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/67Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/67Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/69LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/69Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/69Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/71LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/71Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/71Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/72LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/72Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/72Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/74LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/74Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/74Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/76LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/76Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/76Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/77LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/77Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/77Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/79LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/79Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/79Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/81LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/81Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/81Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/83LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/83Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/83Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/84LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/84Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/84Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/86LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/86Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/86Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/88LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/88Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/88Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/89LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/89Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/89Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/91LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/91Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/91Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/93LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/93Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/93Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/LocrianU2/95LocrianU2.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Melody/95Melody.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu6/Diminished112/95Diminished112.mp3' },
    answer: [
      { id: 0, title: '旋律小调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/36Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/36PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/36Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/38Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/38PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/38Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/40Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/40PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/40Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/41Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/41PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/41Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/43Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/43PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/43Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/45Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/45PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/45Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/47Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/47PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/47Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/48Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/48PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/48Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/50Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/50PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/50Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/52Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/52PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/52Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/53Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/53PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/53Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/55Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/55PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/55Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/57Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/57PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/57Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/59Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/59PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/59Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/60Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/60PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/60Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/62Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/62PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/62Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/64Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/64PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/64Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/65Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/65PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/65Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/67Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/67PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/67Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/69Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/69PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/69Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/71Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/71PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/71Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/72Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/72PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/72Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/74Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/74PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/74Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/76Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/76PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/76Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/77Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/77PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/77Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/79Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/79PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/79Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/81Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/81PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/81Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/83Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/83PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/83Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/84Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/84PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/84Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/86Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/86PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/86Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/88Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/88PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/88Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/89Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/89PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/89Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/91Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/91PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/91Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/93Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/93PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/93Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Altered/95Altered.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/PhrygianU6/95PhrygianU6.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu7/Diminished121/95Diminished121.mp3' },
    answer: [
      { id: 0, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false }
    ]
  }, {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/36Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/36Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/36PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/36LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/36Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/36Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/36LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/36Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/36Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/36Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/38Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/38Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/38PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/38LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/38Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/38Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/38LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/38Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/38Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/38Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/40Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/40Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/40PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/40LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/40Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/40Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/40LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/40Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/40Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/40Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/41Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/41Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/41PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/41LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/41Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/41Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/41LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/41Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/41Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/41Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/43Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/43Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/43PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/43LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/43Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/43Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/43LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/43Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/43Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/43Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/45Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/45Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/45PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/45LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/45Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/45Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/45LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/45Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/45Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/45Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/47Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/47Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/47PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/47LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/47Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/47Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/47LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/47Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/47Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/47Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/48Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/48Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/48PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/48LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/48Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/48Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/48LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/48Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/48Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/48Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/50Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/50Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/50PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/50LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/50Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/50Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/50LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/50Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/50Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/50Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/52Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/52Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/52PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/52LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/52Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/52Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/52LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/52Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/52Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/52Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/52Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/52Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/52PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/52LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/52Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/52Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/52LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/52Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/52Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/52Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/53Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/53Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/53PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/53LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/53Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/53Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/53LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/53Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/53Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/53Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/55Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/55Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/55PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/55LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/55Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/55Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/55LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/55Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/55Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/55Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/57Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/57Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/57PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/57LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/57Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/57Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/57LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/57Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/57Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/57Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/59Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/59Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/59PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/59LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/59Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/59Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/59LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/59Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/59Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/59Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/60Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/60Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/60PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/60LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/60Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/60Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/60LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/60Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/60Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/60Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/62Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/62Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/62PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/62LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/62Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/62Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/62LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/62Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/62Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/62Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/64Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/64Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/64PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/64LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/64Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/64Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/64LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/64Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/64Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/64Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/65Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/65Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/65PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/65LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/65Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/65Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/65LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/65Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/65Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/65Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/67Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/67Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/67PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/67LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/67Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/67Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/67LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/67Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/67Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/67Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/69Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/69Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/69PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/69LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/69Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/69Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/69LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/69Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/69Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/69Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/71Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/71Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/71PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/71LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/71Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/71Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/71LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/71Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/71Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/71Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/72Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/72Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/72PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/72LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/72Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/72Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/72LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/72Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/72Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/72Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/74Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/74Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/74PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/74LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/74Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/74Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/74LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/74Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/74Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/74Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/76Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/76Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/76PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/76LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/76Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/76Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/76LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/76Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/76Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/76Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/77Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/77Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/77PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/77LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/77Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/77Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/77LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/77Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/77Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/77Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/79Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/79Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/79PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/79LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/79Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/79Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/79LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/79Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/79Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/79Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/81Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/81Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/81PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/81LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/81Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/81Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/81LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/81Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/81Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/81Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/83Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/83Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/83PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/83LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/83Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/83Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/83LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/83Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/83Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/83Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/84Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/84Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/84PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/84LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/84Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/84Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/84LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/84Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/84Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/84Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/86Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/86Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/86PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/86LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/86Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/86Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/86LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/86Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/86Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/86Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/88Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/88Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/88PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/88LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/88Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/88Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/88LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/88Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/88Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/88Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/89Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/89Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/89PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/89LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/89Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/89Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/89LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/89Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/89Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/89Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/91Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/91Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/91PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/91LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/91Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/91Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/91LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/91Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/91Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/91Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/93Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/93Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/93PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/93LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/93Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/93Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/93LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/93Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/93Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/93Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Melody/95Melody.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "primary", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diatonic/95Diatonic.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/PhrygianU6/95PhrygianU6.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LydianU5/95LydianU5.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Lydianb7/95Lydianb7.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Mixolydianb13/95Mixolydianb13.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "primary", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/LocrianU2/95LocrianU2.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Altered/95Altered.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "primary", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished112/95Diminished112.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "primary", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "warn", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu8/Diminished121/95Diminished121.mp3' },
    answer: [
      { id: 0, title: '全音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Phrygian(#6)', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian(#5)', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian(b7)', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian(b13)', answerType: "warn", resultFlag: false },
      { id: 5, title: 'Locrian(#2)', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Altered', answerType: "warn", resultFlag: false },
      { id: 7, title: 'Diminished(1-1/2)', answerType: "warn", resultFlag: false },
      { id: 8, title: 'Diminished(1/2-1)', answerType: "primary", resultFlag: false },
      { id: 9, title: '旋律小调', answerType: "warn", resultFlag: false },
    ]
  }
];

module.exports = {
  getAnswer: data
}