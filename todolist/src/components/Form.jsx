function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Enter a todo"
          required
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}
export default Form;
