'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  HStack,
  VStack,
  Switch,
} from '@chakra-ui/react';

import {
  SearchNormal1,
  Calendar,
  AddCircle,
  RowHorizontal,
  RowVertical,
  ArrowCircleLeft2,
  ExportCurve,
  Sort,
  TaskSquare,
  Status,
  TickCircle,
} from 'iconsax-react';
import TasksTable from '@/components/tasks/TasksTable';
import TasksGrid from '@/components/tasks/TasksGrid';
import TabsBar from '@/components/tasks/TabsBar';
import TaskModal from '@/components/tasks/TaskModal';
import Modal from '@/components/general/Modal';
import { Task } from '@/types/Task';
import Loader from '@/components/general/Loader';
import ErrorMessage from '@/components/general/ErrorMessage';
import { toaster } from '@/components/ui/toaster';

const TaskManagement = () => {
  const [activeTab, setActiveTab] = useState('todo');
  const [tasks, setTasks] = useState<Task[]>([]);

  const tabs = [
    {
      id: 'todo',
      label: 'To Do',
      count: tasks.filter((t) => t.status === 'To Do').length,
      color: '#F9F3FF',
      activeColor: '#c298ebff',
      icon: (
        <TaskSquare
          size="32"
          color={activeTab === 'todo' ? '#ffffff' : '#c298ebff'}
          variant="Bold"
        />
      ),
    },
    {
      id: 'progress',
      label: 'In Progress',
      count: tasks.filter((t) => t.status === 'In Progress').length,
      color: '#FBF4E4',
      activeColor: '#e1c17aff',
      icon: (
        <Status
          size="32"
          color={activeTab === 'progress' ? '#ffffff' : '#F6BE38'}
          variant="Bold"
        />
      ),
    },
    {
      id: 'complete',
      label: 'Complete',
      count: tasks.filter((t) => t.status === 'Complete').length,
      color: '#E9F5F7',
      activeColor: '#75C5C1',
      icon: (
        <TickCircle
          size="32"
          color={activeTab === 'complete' ? '#ffffff' : '#75C5C1'}
          variant="Bold"
        />
      ),
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState('10');
  const [selectedView, setSelectedView] = useState('list');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks([
          {
            id: 1,
            name: 'MKV Intranet V2',
            date: '04/06/2024 - 16/06/2014',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Medium',
            priorityColor: '#75C5C1',
            status: 'To Do',
          },
          {
            id: 2,
            name: 'Design System',
            date: '23/06/2024 - 24/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Important',
            priorityColor: '#F6BE38',
            status: 'In Progress',
          },
          {
            id: 3,
            name: 'Medical Appointment',
            date: '16/06/2024 - 18/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 0,
            priority: 'Urgent',
            priorityColor: '#FF515D',
            status: 'Complete',
          },
          {
            id: 4,
            name: 'MKV Intranet V2',
            date: '04/06/2024 - 16/06/2014',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Medium',
            priorityColor: '#75C5C1',
            status: 'To Do',
          },
          {
            id: 5,
            name: 'Design System',
            date: '23/06/2024 - 24/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Important',
            priorityColor: '#F6BE38',
            status: 'In Progress',
          },
          {
            id: 6,
            name: 'Medical Appointment',
            date: '16/06/2024 - 18/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 0,
            priority: 'Urgent',
            priorityColor: '#FF515D',
            status: 'Complete',
          },
          {
            id: 7,
            name: 'Medical Appointment',
            date: '16/06/2024 - 18/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 0,
            priority: 'Urgent',
            priorityColor: '#FF515D',
            status: 'To Do',
          },
          {
            id: 8,
            name: 'Design System',
            date: '23/06/2024 - 24/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Important',
            priorityColor: '#F6BE38',
            status: 'In Progress',
          },
          {
            id: 9,
            name: 'Medical Appointment',
            date: '16/06/2024 - 18/06/2024',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 0,
            priority: 'Urgent',
            priorityColor: '#FF515D',
            status: 'Complete',
          },
          {
            id: 10,
            name: 'MKV Intranet V2',
            date: '04/06/2024 - 16/06/2014',
            assignees: [
              { id: 1, name: 'User 1', avatar: 'https://bit.ly/sage-adebayo' },
              { id: 2, name: 'User 2', avatar: 'https://bit.ly/kent-c-dodds' },
            ],
            extraCount: 1,
            priority: 'Medium',
            priorityColor: '#75C5C1',
            status: 'To Do',
          },
        ]);
      }
    } catch (err) {
      setError(`Failed to load tasks. Please try again.${err}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading, error]);

  const handleSave = (taskData: Task) => {
    try {
      const assignees = taskData.assignees.length
        ? taskData.assignees
        : [
            {
              id: 99,
              name: 'Default User',
              avatar: 'https://bit.ly/prosper-baba',
            },
          ];

      const newTask = {
        ...taskData,
        id: tasks.length + 1,
        priorityColor:
          taskData.priority === 'Urgent'
            ? '#FF515D'
            : taskData.priority === 'Important'
            ? '#F6BE38'
            : '#75C5C1',
        assignees: assignees.slice(0, 3), // only keep first 3
        extraCount: assignees.length > 3 ? assignees.length - 3 : 0,
      };

      setTasks((prev) => [...prev, newTask]);
      setIsModalOpen(false);
      toaster.create({
        title: 'Task Created',
        description: `"${newTask.name}" has been added successfully`,
        type: 'success',
      });
    } catch {
      setError('Could not save task. Please try again.');
      toaster.create({
        title: 'Error',
        description: 'Could not save task. Please try again.',
        type: 'error',
      });
    }
  };

  const filteredTasks = tasks.filter((t) => {
    if (activeTab === 'todo') return t.status === 'To Do';
    if (activeTab === 'progress') return t.status === 'In Progress';
    if (activeTab === 'complete') return t.status === 'Complete';
    return true;
  });

  const handleUpdateStatus = (
    taskId: number,
    newStatus: 'To Do' | 'In Progress' | 'Complete'
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    toaster.create({
      title: 'Status Updated',
      description: `Task has been marked as "${newStatus}"`,
      type: 'success',
    });
  };

  if (loading) {
    return <Loader message="Loading tasks..." />;
  }

  if (error) {
    return (
      <ErrorMessage message={error} onRetry={() => window.location.reload()} />
    );
  }

  return (
    <Box
      bg="white"
      minH="70vh"
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius="10px"
    >
      <VStack gap="20px" align="stretch">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify="space-between"
          gap={{ base: 4, md: 0 }}
          w="100%"
        >
          <HStack gap={4} align="center">
            <Button
              aria-label="Go back"
              h="46px"
              w="46px"
              variant="outline"
              borderRadius="full"
              bg="white"
              border="1px solid #CDD6E9"
              flexShrink={0}
            >
              <ArrowCircleLeft2 size="32" color="#464B50" />
            </Button>
            <Text
              fontSize={{ base: '20px', md: '30px' }}
              fontWeight="bold"
              color="#1A1C1E"
            >
              Afdeling Kwaliteit
            </Text>
          </HStack>

          <HStack
            gap={3}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            justify={{ base: 'flex-start', md: 'flex-end' }}
            w={{ base: '100%', md: 'auto' }}
          >
            <Box
              bg="#CDD6E933"
              borderRadius="10px"
              pl="8px"
              h="50px"
              w="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #CDD6E933"
            >
              <Switch.Root colorPalette={'#E1E0E1'} size="sm">
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
              </Switch.Root>
            </Box>

            <Box
              bg="#CDD6E933"
              borderRadius="10px"
              h="50px"
              w="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #CDD6E933"
            >
              <Sort size="20" color="#292D32" />
            </Box>

            <Box
              bg="#CDD6E933"
              borderRadius="10px"
              h="50px"
              w="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #CDD6E933"
            >
              <Calendar size="20" color="#292D32" />
            </Box>

            <Button
              size="md"
              bg="#41245F"
              color="white"
              borderRadius="10px"
              p="13px"
              _hover={{ bg: 'purple.700' }}
            >
              <ExportCurve
                size="16"
                style={{ marginRight: '8px' }}
                color="white"
              />
              Export xlsx
            </Button>

            <Button
              size="md"
              bg="#75C5C1"
              color="white"
              borderRadius="10px"
              p="13px"
              _hover={{ bg: 'teal.500' }}
              onClick={() => {
                setIsModalOpen(true);
                console.log('clicked');
              }}
            >
              <AddCircle
                size="16"
                style={{ marginRight: '8px' }}
                color="white"
              />
              Add Task
            </Button>
          </HStack>
        </Flex>

        <Box
          bg="#E9F5F7"
          borderRadius="6px"
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'stretch', md: 'center' }}
          gap={{ base: 3, md: 0 }}
          p="10px"
        >
          <Box
            position="relative"
            flex="1"
            maxW={{ base: '100%', md: '400px' }}
            w="100%"
          >
            <Box
              position="absolute"
              left="12px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              pointerEvents="none"
            >
              <SearchNormal1 size="18" color="#9CA3AF" />
            </Box>
            <Input
              placeholder="Search for To-Do"
              pl="40px"
              pr={{ base: '40px', md: '100px' }}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              bg="white"
              h="40px"
              w="100%"
              _focus={{
                borderColor: 'teal.500',
                boxShadow: '0 0 0 1px teal.500',
              }}
            />
          </Box>

          <Box
            bg="white"
            p="6px"
            borderRadius="6px"
            display="flex"
            alignItems="center"
            h="40px"
            w={{ base: '100%', md: 'auto' }}
            justifyContent={{ base: 'flex-end', md: 'center' }}
          >
            <Box display="flex" gap={2}>
              <Button
                aria-label="Grid view"
                bg={selectedView === 'grid' ? '#75C5C1' : '#F7F7F7'}
                borderRadius="4px"
                h="28px"
                w="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={() => setSelectedView('grid')}
              >
                <RowHorizontal
                  size="16"
                  color={selectedView === 'grid' ? '#ffffff' : '#7988A9'}
                />
              </Button>
              <Button
                aria-label="List view"
                bg={selectedView === 'list' ? '#75C5C1' : '#F7F7F7'}
                borderRadius="4px"
                h="28px"
                w="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={() => setSelectedView('list')}
              >
                <RowVertical
                  size="16"
                  color={selectedView === 'list' ? '#ffffff' : '#7988A9'}
                />
              </Button>
            </Box>
          </Box>
        </Box>

        {selectedView === 'list' ? (
          <>
            <TabsBar
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TasksTable
              tasks={filteredTasks}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              onUpdateStatus={handleUpdateStatus}
            />
          </>
        ) : (
          <TasksGrid
            tabs={tabs}
            tasks={tasks}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="lg"
        >
          <TaskModal mode="create" onSave={handleSave} />
        </Modal>
      </VStack>
    </Box>
  );
};

export default TaskManagement;
