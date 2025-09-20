import { Task } from '@/types/Task';
import {
  Table,
  HStack,
  Avatar,
  Flex,
  MenuRoot,
  MenuTrigger,
  Button,
  Portal,
  MenuContent,
  MenuItem,
  NativeSelectRoot,
  NativeSelectField,
  NativeSelect,
  Text,
  Box,
} from '@chakra-ui/react';
import { Flag, More, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import React from 'react';

interface TasksTableProps {
  tasks: Task[];
  rowsPerPage: string;
  setRowsPerPage: (value: string) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
  onDuplicate?: (task: Task) => void;
}

const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  rowsPerPage,
  setRowsPerPage,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  return (
    <Box bg="white">
      <Table.Root
        variant="simple"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        style={{ border: '1px solid #CDD6E9' }}
      >
        <Table.Header
          bg="#F7F7F7"
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          border="1px solid #CDD6E9"
        >
          <Table.Row
            border="1px solid #CDD6E9"
            borderTopLeftRadius="10px"
            borderTopRightRadius="10px"
          >
            <Table.ColumnHeader
              color="gray.600"
              fontWeight="medium"
              fontSize="14px"
              py="20px"
              px="40px"
            >
              Name
            </Table.ColumnHeader>
            <Table.ColumnHeader
              color="gray.600"
              fontWeight="medium"
              fontSize="14px"
              py="20px"
            >
              Date
            </Table.ColumnHeader>
            <Table.ColumnHeader
              color="gray.600"
              fontWeight="medium"
              fontSize="14px"
              py="20px"
            >
              Assignee
            </Table.ColumnHeader>
            <Table.ColumnHeader
              color="gray.600"
              fontWeight="medium"
              fontSize="14px"
              py="20px"
            >
              Priority
            </Table.ColumnHeader>
            <Table.ColumnHeader></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task) => (
            <Table.Row key={task.id} borderTop="1px solid #CDD6E9">
              <Table.Cell py="20px" px="40px">
                <Text fontWeight="medium" color="gray.800">
                  {task.name}
                </Text>
              </Table.Cell>
              <Table.Cell py={4}>
                <Text color="gray.600" fontSize="14px">
                  {task.date}
                </Text>
              </Table.Cell>
              <Table.Cell py={4}>
                <HStack gap={-2}>
                  {task.assignees.map((assignee, i) => (
                    <Avatar.Root key={assignee.id} height="20px" width="20px">
                      <Avatar.Fallback name="Segun Adebayo" fontSize="10px" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                  ))}
                  {task && task.extraCount && task.extraCount > 0 && (
                    <Flex
                      align="center"
                      justify="center"
                      w="20px"
                      h="20px"
                      bg="gray.100"
                      borderRadius="full"
                      fontSize="10px"
                      color="#464B50"
                      fontWeight="medium"
                      ml={2}
                    >
                      +{task.extraCount}
                    </Flex>
                  )}
                </HStack>
              </Table.Cell>
              <Table.Cell py={4}>
                <HStack gap={2}>
                  <Box borderRadius="sm">
                    <Flag
                      size="18"
                      color={`${task.priorityColor}`}
                      variant="Bold"
                    />
                  </Box>

                  <Text color="gray.700" fontSize="14px">
                    {task.priority}
                  </Text>
                </HStack>
              </Table.Cell>
              <Table.Cell py={4}>
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button
                      aria-label="More options"
                      size="sm"
                      w="40px"
                      h="30px"
                      borderRadius="md"
                      bg="#F7F7F7"
                    >
                      <More size="16" color="#6C7278" />
                    </Button>
                  </MenuTrigger>
                  <Portal>
                    <MenuContent>
                      <MenuItem value="edit">Edit</MenuItem>
                      <MenuItem value="delete">Delete</MenuItem>
                      <MenuItem value="duplicate">Duplicate</MenuItem>
                    </MenuContent>
                  </Portal>
                </MenuRoot>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex
        justify="space-between"
        align="center"
        p={4}
        borderTop="1px solid"
        borderColor="gray.200"
      >
        <HStack
          gap={2}
          alignItems="center"
          bg="#F7F7F7"
          borderRadius="20px"
          px="10px"
          py="10px"
          height="40px"
        >
          <Button aria-label="First page" size="sm" variant="ghost" disabled>
            <ArrowLeft2 size="32" color="#1A1C1E" variant="Outline" />
          </Button>
          <Button aria-label="Previous page" size="sm" variant="ghost" disabled>
            <ArrowLeft2 size="32" color="#1A1C1E" variant="Outline" />
          </Button>

          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              size="sm"
              variant={page === 1 ? 'solid' : 'ghost'}
              bg={page === 1 ? '#75C5C1' : 'transparent'}
              color={page === 1 ? 'white' : '#75C5C1'}
              border="1px solid"
              borderRadius="full"
              minW="30px"
              h="30px"
            >
              {page}
            </Button>
          ))}

          <Text color="gray.400" fontSize="13px">
            ...
          </Text>

          <Button
            size="sm"
            color="#75C5C1"
            borderRadius="full"
            minW="30px"
            h="30px"
          >
            100
          </Button>

          <Button
            aria-label="Next page"
            size="sm"
            borderRadius="full"
            minW="30px"
            h="30px"
          >
            <ArrowRight2 size="13" color="#1A1C1E" variant="Outline" />
          </Button>
          <Button
            aria-label="Last page"
            size="sm"
            borderRadius="full"
            minW="30px"
            h="30px"
          >
            <ArrowRight2 size="13" color="#1A1C1E" variant="Outline" />
          </Button>
        </HStack>

        <HStack gap={2}>
          <Text fontSize="16px" color="#1A1C1E" fontWeight="600">
            Rows Per page:
          </Text>
          <NativeSelectRoot size="sm" width="80px" color="#545464">
            <NativeSelectField
              border="1px solid #75C5C1"
              bg="#F7F7F7"
              borderRadius="20px"
              px="14px"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </NativeSelectField>
            <NativeSelect.Indicator />
          </NativeSelectRoot>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TasksTable;
