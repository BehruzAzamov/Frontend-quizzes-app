import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function MenuLink() {
  const { data, isPending, error } = useFetch("https://online-json-server-api.up.railway.app/project/66aba2191d2cd3eb1145dd45/quizzes");

  const quizzes = (data && data.data) ? data.data : []; 

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <Link to={`/quiz/${quiz.title}`} key={quiz.id} className="menu-item header-logo">
              <figure style={{backgroundColor:quiz.color}}>
                <img src={quiz.icon} alt={quiz.title} />
              </figure>
              <span>{quiz.title}</span>
            </Link>
          ))
        ) : (
          <p>No quizzes available.</p>
        )}
      </div>
    </div>
  );
}

export default MenuLink;
