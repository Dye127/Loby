//音阶服务的js

var data = [
  {
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
  },
];

module.exports = {
  getAnswer: data
}