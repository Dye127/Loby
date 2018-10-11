//音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/36PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/38PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/40PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/41PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/43PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/45PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/47PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/48PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/50PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/52PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/53PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/55PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/57PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/59PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/60PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/62PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/64PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/65PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/67PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/69PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/71PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/72PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/74PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/76PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/77PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/79PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/81PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/83PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/84PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/86PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/88PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/89PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/91PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/93PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95DorianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95HarmonicD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "primary", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95LocrianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "primary", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95LydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "primary", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95MajorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95MelodyD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95MinorD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "primary", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95MixolydianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "warn", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu12/95PhrygianD.mp3' },
    answer: [
      { id: 0, title: '大调音阶', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Dorian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Phrygian', answerType: "primary", resultFlag: false },
      { id: 3, title: 'Lydian', answerType: "warn", resultFlag: false },
      { id: 4, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 5, title: '自然小调', answerType: "warn", resultFlag: false },
      { id: 6, title: 'Locrian', answerType: "warn", resultFlag: false },
      { id: 7, title: '和弦小调', answerType: "warn", resultFlag: false },
      { id: 8, title: '旋律小调', answerType: "warn", resultFlag: false }
    ]
  },
];

module.exports = {
  getAnswer: data
}