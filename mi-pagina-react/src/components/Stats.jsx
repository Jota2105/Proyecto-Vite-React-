function Stats({ likes, setLikes }) {
  return (
    <div className="stats">
      <h3>Estadísticas</h3>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 Me gusta</button>
    </div>
  );
}

export default Stats;