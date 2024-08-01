import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { Test } from "../components";


function Quiz() {
  const { title } = useParams()
  const { data: quizzes, isPending, error } = useFetch(`https://online-json-server-api.up.railway.app/project/66aba2191d2cd3eb1145dd45/quizzes?title=${title}`)

  useEffect(() => {
    document.title = 'Quiz' + ' ' + title
  }, [title])
  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes.data[0]}/>}
    </section>
  )
}

export default Quiz