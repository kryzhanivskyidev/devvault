export default function PostCard({ post }) {
  const { slug, data } = post;
  return (
    <article className="post-card">
      <div className="post-card-meta">
        <span className="post-tag">{data.category}</span>
        <span className="post-date">{new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
      <h2 className="post-card-title">
        <a href={`/posts/${slug}`}>{data.title}</a>
      </h2>
      <p className="post-card-excerpt">{data.excerpt}</p>
      <div className="post-card-footer">
        <span className="read-time">{data.readTime} min read</span>
        <a href={`/posts/${slug}`} className="read-more">Read article →</a>
      </div>
    </article>
  );
}
