import { Injectable } from '@angular/core';
import { Question } from '../models/question';


 const questionsArray: Question[] = [
  {
    caption: 'What is ido\'s favorite animal?',
    answers: ["Dog", "Snake", "Hamster", "Panda"],
    correctAnswer: 1,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite dog breed?',
    answers: ["Huski", "Corgi", "Golden retriever", "Gernan Shepard"],
    correctAnswer: 2,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite culinary culture?',
    answers: ["Indie", "Korean", "Middle Eastern", "Japanese"],
    correctAnswer: 4,
    userAnswer: 0,
  },
  {
    caption: 'What is ido\'s favorite colour?',
    answers: ["Yellow", "Purple", "Red", "Blue"],
    correctAnswer: 2,
    userAnswer: 0,
  }
]

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  
  getQuestionsArray() : Question[]{
    return questionsArray;
  }
}
