import {
  Box,
  Heading,
  IconButton,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
// import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  function AddTodofunc(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p="4">
      <IconButton
        icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Box>
        <Heading>React TODO Application</Heading>
        <TodoList deleteTodo={deleteTodo} todos={todos} />
        <AddTodo addTodo={AddTodofunc} />
      </Box>
    </VStack>
  );
}

export default App;
