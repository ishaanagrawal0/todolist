function TODOCount({ todos_completed, total_todos }) {
  return (
    <section className="todocount_section">
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}
export default TODOCount;
