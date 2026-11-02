// 01 WHAT REACT IS
// React builds the screen from small reusable pieces called components.
// A component is just a function that returns what the screen should look like.

function Welcome() {
  return <h2>Hello, MERN</h2>;
}

export default function Ex01() {
  return (
    <div>
      {/* Use a component like an HTML tag. Component names start with a capital letter. */}
      <Welcome />
      <Welcome />
      <p>Change the text above and save: the browser updates instantly.</p>
    </div>
  );
}
