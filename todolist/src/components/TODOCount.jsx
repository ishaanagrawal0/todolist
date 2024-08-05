function TODOCount({ todos_completed, total_todos }) {
  return (
    <section>
      <div>
        <p> Task Done</p>
        <p> Keep it up</p>
      </div>
      <div>
        <p>
          {" "}
          {todos_completed} / {total_todos}{" "}
        </p>
      </div>
    </section>
  );
}

export default TODOCount;
