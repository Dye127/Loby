//音阶服务的js

var data = [
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
  }
];

module.exports = {
  getAnswer: data
}