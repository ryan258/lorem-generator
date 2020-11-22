import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('moo');
  };

  return (
    <section className="section-center">
      <h3>tired of boring old lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          // make it a controlled component
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          voluptates dolores corporis animi vel officia repellat sapiente! Ipsa,
          nihil vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          voluptates dolores corporis animi vel officia repellat sapiente! Ipsa,
          nihil vel.
        </p>
      </article>
    </section>
  );
}

export default App;
