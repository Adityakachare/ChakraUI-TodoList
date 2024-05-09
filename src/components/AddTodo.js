import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    if (!task) {
      toast({
        title: "No Task",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: task,
    };

    addTodo(todo);
    setTask("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            onChange={(e) => setTask(e.target.value)}
            variation="filled"
            placeholder="Ex: Eat Breakfast"
            value={task}
          />
          <Button type="submit" colorScheme="cyan" px="8">
            Add Todo
          </Button>
        </HStack>
      </form>
    </>
  );
}

export default AddTodo;
