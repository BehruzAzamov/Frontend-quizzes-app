import { Link, useRouteError } from "react-router-dom"

function ErrrorPage() {
  const error = useRouteError()

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <h1>Lost in Space⭐🌑</h1>
          <h2>The page you are looking for is not here.</h2>
          <Link className="btn" to="/">Go to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="error-container container">
      <h1>Uh-oh! Something's Not Right❌</h1>
    </div>
  )
}

export default ErrrorPage