function TODOList() {
  return (
    <ol className="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <li className="todo-item">No items, get working.</li>
      )}
    </ol>
  );
}
export default TODOList;

function Item({ item }) {
  return (
    <li id={item?.id} className="todo-item">
      <button className="todo_items_left">
        <svg>
          <circle cx="12" cy="12" r="10" fillRule="nonzero" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}
