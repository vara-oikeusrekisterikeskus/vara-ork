/**
 * Render 404 page.
 */
export default function NotFoundPage() {
  return (
    <div className="container error-page">
      <h2>404 | Not Found</h2>
      <p>The page could not be found.</p>
      <a href="/">To front page</a>
    </div>
  )
}