//音阶服务的js

var data = [
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
  }
];

module.exports = {
  getAnswer: data
}