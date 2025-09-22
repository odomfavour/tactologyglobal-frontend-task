import { ArrowDLeft, ArrowDRight } from '@/helpers/Icons';
import { Task } from '@/types/Task';
import {
  Table,
  HStack,
  Avatar,
  Flex,
  Button,
  Portal,
  Menu,
  NativeSelectRoot,
  NativeSelectField,
  NativeSelect,
  Text,
  Box,
  EmptyState,
  VStack,
} from '@chakra-ui/react';
import { Flag, More, ArrowLeft2, ArrowRight2, Document } from 'iconsax-react';
import React, { useEffect, useMemo, useState } from 'react';

interface TasksTableProps {
  tasks: Task[];
  rowsPerPage: string;
  setRowsPerPage: (value: string) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
  onDuplicate?: (task: Task) => void;
  onUpdateStatus: (
    id: number,
    status: 'To Do' | 'In Progress' | 'Complete'
  ) => void;
}

const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  rowsPerPage,
  setRowsPerPage,
  onEdit,
  onDelete,
  onDuplicate,
  onUpdateStatus,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / Number(rowsPerPage));

  // slice tasks for current page
  const visibleTasks = useMemo(() => {
    const start = (currentPage - 1) * Number(rowsPerPage);
    return tasks.slice(start, start + Number(rowsPerPage));
  }, [tasks, currentPage, rowsPerPage]);

  // reset to page 1 if rowsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [rowsPerPage]);

  // generate visible page numbers
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };
  return (
    <Box bg="white" style={{ border: '1px solid #CDD6E9' }} borderRadius="10px">
      <Box overflowX="scroll">
        <Table.Root
          variant="outline"
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          style={{ border: '1px solid #CDD6E9' }}
          overflowX="hidden"
        >
          <Table.Header
            bg="#F7F7F7"
            borderTopRadius="10px"
            border="1px solid #CDD6E9"
            borderBottom="none"
          >
            <Table.Row
              borderBottom="1px solid #E5E7EB"
              _last={{ borderBottom: 'none' }}
            >
              <Table.ColumnHeader
                color="gray.600"
                fontWeight="medium"
                fontSize="14px"
                py="20px"
                px="40px"
                borderTopRadius="10px"
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
            {visibleTasks.length > 0 ? (
              visibleTasks.map((task) => (
                <Table.Row
                  key={task.id}
                  borderTop="1px solid #CDD6E9"
                  _last={{ borderBottom: 'none' }}
                >
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
                      {task.assignees.map((assignee) => (
                        <Avatar.Root
                          key={assignee.id}
                          height="20px"
                          width="20px"
                        >
                          <Avatar.Fallback
                            name={assignee.name}
                            fontSize="10px"
                          />
                          <Avatar.Image src={assignee.avatar} />
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
                          color={task.priorityColor}
                          variant="Bold"
                        />
                      </Box>
                      <Text color="gray.700" fontSize="14px">
                        {task.priority}
                      </Text>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell py={4}>
                    <Menu.Root>
                      <Menu.Trigger asChild>
                        <Button
                          size="sm"
                          w="40px"
                          h="30px"
                          borderRadius="md"
                          bg="#F7F7F7"
                          aria-label="More options"
                        >
                          <More size="16" color="#6C7278" />
                        </Button>
                      </Menu.Trigger>
                      <Portal>
                        <Menu.Positioner>
                          <Menu.Content bg="white" borderRadius="8px">
                            {onEdit && (
                              <Menu.Item
                                value="edit"
                                onSelect={() => onEdit(task)}
                                color="black"
                              >
                                Edit
                              </Menu.Item>
                            )}
                            {onDelete && (
                              <Menu.Item
                                value="delete"
                                onSelect={() => onDelete(task)}
                                color="black"
                              >
                                Delete
                              </Menu.Item>
                            )}
                            {onDuplicate && (
                              <Menu.Item
                                value="duplicate"
                                onSelect={() => onDuplicate(task)}
                                color="black"
                              >
                                Duplicate
                              </Menu.Item>
                            )}
                            {onUpdateStatus && (
                              <>
                                <Menu.Item
                                  value="to-do"
                                  onSelect={() =>
                                    task.id !== undefined &&
                                    onUpdateStatus(task.id, 'To Do')
                                  }
                                  color="black"
                                >
                                  Mark as To Do
                                </Menu.Item>
                                <Menu.Item
                                  value="in-progress"
                                  onSelect={() =>
                                    task.id !== undefined &&
                                    onUpdateStatus(task.id, 'In Progress')
                                  }
                                  color="black"
                                >
                                  Mark as In Progress
                                </Menu.Item>
                                <Menu.Item
                                  value="complete"
                                  onSelect={() =>
                                    task.id !== undefined &&
                                    onUpdateStatus(task.id, 'Complete')
                                  }
                                  color="black"
                                >
                                  Mark as Complete
                                </Menu.Item>
                              </>
                            )}
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                    </Menu.Root>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={5}>
                  <EmptyState.Root>
                    <EmptyState.Content>
                      <EmptyState.Indicator>
                        <Document size="40" color="#A0AEC0" variant="Bulk" />
                      </EmptyState.Indicator>
                      <VStack textAlign="center">
                        <EmptyState.Title>Your List is empty</EmptyState.Title>
                        <EmptyState.Description>
                          Create a new task to get started.
                        </EmptyState.Description>
                      </VStack>
                    </EmptyState.Content>
                  </EmptyState.Root>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Box>

      {visibleTasks.length > 0 && (
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'start', md: 'space-between' }}
          align={{ base: 'start', md: 'center' }}
          py={{ base: '10px', md: '10px' }}
          px={{ base: '10px', md: '10px' }}
          gap={4}
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <HStack
            gap={{ base: '5px', md: '10px' }}
            justify={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap"
            bg="#F7F7F7"
            borderRadius="20px"
            px="5px"
            py="10px"
            minH="40px"
          >
            <Button
              aria-label="First page"
              size="sm"
              borderRadius="full"
              h="30px"
              px="0px"
              bg="transparent"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ArrowDLeft />
            </Button>
            <Button
              aria-label="Previous page"
              size="sm"
              borderRadius="full"
              px="0px"
              h="30px"
              bg="transparent"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft2 size="16" color="#1A1C1E" variant="Outline" />
            </Button>

            {getPageNumbers().map((page, i) =>
              page === '...' ? (
                <Text key={`ellipsis-${i}`} color="gray.400" fontSize="13px">
                  ...
                </Text>
              ) : (
                <Button
                  key={page}
                  size="sm"
                  variant={page === currentPage ? 'solid' : 'ghost'}
                  bg={page === currentPage ? '#75C5C1' : 'transparent'}
                  color={page === currentPage ? 'white' : '#75C5C1'}
                  border="1px solid"
                  borderRadius="full"
                  minW="30px"
                  h="30px"
                  onClick={() => setCurrentPage(Number(page))}
                >
                  {page}
                </Button>
              )
            )}

            <Button
              aria-label="Next page"
              size="sm"
              borderRadius="full"
              px="0px"
              h="30px"
              bg="transparent"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ArrowRight2 size="16" color="#1A1C1E" variant="Outline" />
            </Button>
            <Button
              aria-label="Last page"
              size="sm"
              borderRadius="full"
              bg="transparent"
              h="30px"
              px="0px"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ArrowDRight />
            </Button>
          </HStack>

          <HStack
            gap={2}
            justify={{ base: 'center', md: 'flex-end' }}
            flexWrap="wrap"
          >
            <Text fontSize="16px" color="#1A1C1E" fontWeight="600">
              Rows Per page:
            </Text>
            <NativeSelectRoot
              size="sm"
              width={{ base: '100px', md: '80px' }}
              color="#545464"
            >
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
      )}
    </Box>
  );
};

export default TasksTable;
