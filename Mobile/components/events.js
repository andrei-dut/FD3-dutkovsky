import {EventEmitter} from 'events';

let tableEvents=new EventEmitter(); 
// в потоке tableEvents будут все события, связанные с голосованием
// событие "EAnswerClicked" - кликнут вариант ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// событие "EFreeAnswerTextChanged" - изменён текст свободного ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями:
// const EAnswerClicked="EAnswerClicked";

export {tableEvents};
