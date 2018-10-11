//音阶服务的js

var data = [
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/36Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/36Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/38Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/38Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/40Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/40Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/41Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/41Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/43Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/43Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/45Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/45Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/47Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/47Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/48Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/48Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/50Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/50Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/52Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/52Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/53Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/53Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/55Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/55Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/57Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/57Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/59Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/59Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/60Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/60Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/62Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/62Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/64Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/64Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/65Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/65Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/67Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/67Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/69Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/69Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/71Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/71Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/72Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/72Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/74Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/74Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/76Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/76Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/77Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/77Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/79Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/79Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/81Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/81Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/83Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/83Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/84Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/84Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/86Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/86Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/88Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/88Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/89Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/89Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/91Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/91Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/93Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/93Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Minorpentatonic/95Minorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "primary", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "warn", resultFlag: false }
    ]
  },
  {
    question: { title: 'https://ranh941.com/daiqt/menu11/Majorpentatonic/95Majorpentatonic.mp3' },
    answer: [
      { id: 0, title: 'Minor pentatonic', answerType: "warn", resultFlag: false },
      { id: 1, title: 'Major pentatonic', answerType: "primary", resultFlag: false }
    ]
  },
];

module.exports = {
  getAnswer: data
}