import { PREMISE, QUESTIONS } from '../data';

export default function Page() {
  return (
    <>
      {PREMISE}
      <form action="/quiz/result">
        {QUESTIONS.map(({ id: questionID, question, answers }) => (
          <fieldset key={questionID} className="mt-5">
            <legend>{`${questionID}) ${question}`}</legend>

            {answers.map(({ id: answerID, answer, type }) => (
              <div key={answerID}>
                <input
                  id={answerID}
                  type="radio"
                  name={questionID}
                  value={type}
                  required
                />
                <label htmlFor={answerID}> {answer}</label>
              </div>
            ))}
          </fieldset>
        ))}
        <div className="flex justify-center mt-5">
          <button className="bg-blue-700 text-white p-2">
            Submit and get my gift
          </button>
        </div>
      </form>
    </>
  );
}
