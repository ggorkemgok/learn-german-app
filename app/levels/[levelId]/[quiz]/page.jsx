import QuizComponent from "../../../components/quiz/QuizComponent";

const QuizRoute = ({ params }) => {
    const quizTopic = params.quiz;
  return (
    <div>
      <QuizComponent quizTopic = {params.quiz} />
    </div>
  );
};

export default QuizRoute;

// Here we are going to render the Quiz.jsx component. DONE
// We will pass the params.quiz value inside the Quiz component. DONE
// We check if the params.quiz exists in our quiz materials.
// Quiz materials should be designed to be able to mapped over easily.
// It may include a description paragraph, question array, and choices and answer.
