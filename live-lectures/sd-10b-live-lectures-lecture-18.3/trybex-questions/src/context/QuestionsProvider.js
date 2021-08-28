import React, { useState } from 'react';
import QuestionsContext from './QuestionsContext';

import { getQuestions, createQuestion as createQuestionService } from '../services/api';

function QuestionsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    // setar loading true
    // fazer a chamada da api
    // guardar os dados da api no contexto
    // setar o loading pra false
    setIsLoading(true);
    const questionsAPI = await getQuestions();
    setQuestions(questionsAPI);
    setIsLoading(false);
  }

  const createQuestion = async (newQuestion) => {
    setIsLoading(true);
    await createQuestionService(newQuestion);
    setQuestions([ ...questions, newQuestion ]);
    setIsLoading(false);
  }

  return(
    <QuestionsContext.Provider value={ { isLoading, questions, fetchQuestions, createQuestion } }>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;