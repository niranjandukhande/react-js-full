const Posts = () => {
  const posts = Array.from(
    { length: 1000000 },
    (_, index) => `Post ${index + 1}`
  )
  return (
    <div>
      {posts.map((post) => (
        <div key={post}>{post}</div>
      ))}
    </div>
  )
}

export default Posts
