'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  HStack,
  VStack,
  Table,
  IconButton,
  Badge,
  Portal,
  Switch,
  NativeSelect,
} from '@chakra-ui/react';
import { Field } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react';
import { NativeSelectField, NativeSelectRoot } from '@chakra-ui/react';
import {
  SearchNormal1,
  More,
  Calendar,
  AddCircle,
  RowHorizontal,
  RowVertical,
  MenuBoard,
  ArrowCircleLeft2,
  ExportCurve,
  Sort,
  TaskSquare,
  Status,
  TickCircle,
  Flag,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-react';
import TasksTable from '@/components/tasks/TasksTable';
import TasksGrid from '@/components/tasks/TasksGrid';
import TabsBar from '@/components/tasks/TabsBar';

export default function TaskManagement() {
  const [activeTab, setActiveTab] = useState('todo');

  const tasks = [
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
    },
  ];

  const tabs = [
    {
      id: 'todo',
      label: 'To Do',
      count: 20,
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
      count: 23,
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
      count: 18,
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

  return (
    <Box bg="white" minH="100vh" p={6} borderRadius="10px">
      <VStack gap="20px" align="stretch">
        <Flex align="center" justify="space-between">
          <HStack gap={4}>
            <Button
              aria-label="Go back"
              h="46px"
              w="46px"
              variant="outline"
              borderRadius="full"
              bg="white"
              border="1px solid #CDD6E9"
            >
              <ArrowCircleLeft2 size="32" color="#464B50" />
            </Button>
            <Text fontSize="30px" fontWeight="bold" color="#1A1C1E">
              Afdeling Kwaliteit
            </Text>
          </HStack>

          <HStack gap={3}>
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

        {/* Search Bar */}
        <Box
          bg="#E9F5F7"
          borderRadius="6px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <Box position="relative" maxW="400px">
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
              pr="100px"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              bg="white"
              h="40px"
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
              tasks={tasks}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
            />
          </>
        ) : (
          <TasksGrid tabs={tabs} tasks={tasks} />
        )}
      </VStack>
    </Box>
  );
}
