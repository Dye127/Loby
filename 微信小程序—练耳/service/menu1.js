//menu1音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/36Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/38Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/40Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/41Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/45Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/47Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/48Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/50Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/52Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/53Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/55Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/57Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/59Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/60Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/62Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/64Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/65Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/67Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/69Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/71Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/72Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/74Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/76Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/77Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/79Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/81Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/83Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/84Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/86Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/88Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/89Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/91Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  }, {
    question: { title: 'https://ranh941.com/daiqt/Major/93Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/93Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/93Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Lydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Major.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "warn", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/Major/95Mixolydian.mp3' },
    answer: [
      { id: 0, title: '自然大调', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Mixolydian', answerType: "primary", resultFlag: false },
      { id: 2, title: 'Lydian', answerType: "warn", resultFlag: false }
    ]
  }
];

module.exports = {
  getAnswer: data
}