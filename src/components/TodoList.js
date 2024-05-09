import {
  VStack,
  StackDivider,
  HStack,
  Text,
  Spacer,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";
function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="cyan" p="4" borderRadius="lg">
        No Todos!
      </Badge>
    );
  }

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderWidth="2px"
        borderColor="gray.100"
        borderRadius="lg"
        padding="4"
        width="100%"
        maxW={{ base: "90vw", sm: "90vw", lg: "50vw", xl: "40vw" }}
        alignItems={"stretch"}
      >
        {todos.map((todo) => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              onClick={() => deleteTodo(todo.id)}
              icon={<FaTrash />}
              isRound="true"
            />
          </HStack>
        ))}
        ;
      </VStack>
    </>
  );
}

export default TodoList;
