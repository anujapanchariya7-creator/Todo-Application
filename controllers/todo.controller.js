import { readTodos, writeTodos } from "../models/todo.model.js";

/* GET all todos */
export const getTodos = async (req, res) => {
  try {
    const todos = await readTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

/* CREATE todo */
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = await readTodos();

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    todos.push(newTodo);
    await writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

/* UPDATE todo */
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await readTodos();

    const index = todos.findIndex(t => t.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    await writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

/* DELETE todo */
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await readTodos();

    const filteredTodos = todos.filter(t => t.id != id);

    if (todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await writeTodos(filteredTodos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
