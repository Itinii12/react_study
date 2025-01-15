export default function MyButton({ count, addCountFunction }) {
    function handleClick() {
        alert('Button clicked!' + count);
        addCountFunction();
    }

    return (
      <button onClick={handleClick}>
        I'm a button
      </button>
    );
}