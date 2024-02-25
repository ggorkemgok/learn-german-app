  "use client";
  import { useState } from "react";
  import { themes } from "../../topicsData/grammarThemes";
  import styles from "./quizComponent.module.css";

  const Quiz = ({ quizTopic }) => {
    const foundTheme = themes.find(
      (theme) => theme.topic === decodeURIComponent(quizTopic)
    );

    const Options = ({ answerText, isCorrect }) => {
      const [showMessage, setShowMessage] = useState(null);

      const handleClick = () => {
        console.log(isCorrect);
        if (isCorrect) {
          setShowMessage("Korrekt!");
        } else {
          setShowMessage("Falsch!");
        }
      };
      return (
        <>
          <div className="flex gap-2">
            <button className={styles.choiceButton} onClick={handleClick}>
              {answerText}
            </button>
            {showMessage === "Korrekt!" && (
              <p className={styles.answerCorrect}>Korrekt!</p>
            )}
            {showMessage === "Falsch!" && <p className={styles.answerFalse}>Falsch!</p>}
          </div>
        </>
      );
    };

    return (
      <>
        <div className="p-10">
          {foundTheme && <p>{foundTheme.description}</p>}
        </div>
        <div className="p-10">
          {foundTheme &&
            foundTheme.questions.map((question, questionIndex) => (
              <div key={questionIndex} className="mb-4">
                <p>{question.questionText}</p>
                <div className="p-5">
                  {question.answerOptions.sort(() => Math.random() - 0.5).map((option, optionIndex) => (
                    <Options
                      key={optionIndex}
                      answerText={option.answerText}
                      isCorrect={option.isCorrect}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };

  export default Quiz;
