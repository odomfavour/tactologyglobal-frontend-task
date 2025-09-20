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

  return (
    <Box bg="white" minH="100vh" p={6} borderRadius="10px">
      <VStack gap={6} align="stretch">
        {/* Header */}
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
                bg="#F7F7F7"
                borderRadius="4px"
                h="28px"
                w="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <RowHorizontal size="16" color="white" />
              </Button>
              <Button
                aria-label="List view"
                bg="#75C5C1"
                borderRadius="4px"
                h="28px"
                w="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <RowVertical size="16" color="white" />
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Status Tabs */}
        <Box
          bg="#F7F7F7"
          borderRadius="6px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <HStack gap={4}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                p="8px"
                bg={activeTab === tab.id ? `${tab.activeColor}` : 'white'}
                color={activeTab === tab.id ? `${tab.color}` : 'gray.600'}
                border="1px solid"
                borderColor={
                  activeTab === tab.id ? `${tab.color}.200` : 'gray.200'
                }
                borderRadius="md"
                onClick={() => setActiveTab(tab.id)}
                _hover={{
                  bg: `${tab.color}.50`,
                  color: `${tab.color}.600`,
                }}
              >
                <Box mr={2}>{tab.icon}</Box>
                {tab.label}
                <Badge
                  bg={activeTab === tab.id ? `${tab.color}` : 'gray.100'}
                  color={activeTab === tab.id ? `#000000` : 'gray.600'}
                  borderRadius="full"
                  px={2}
                  py={1}
                  fontSize="12px"
                  ml={2}
                >
                  {tab.count}
                </Badge>
              </Button>
            ))}
          </HStack>
        </Box>

        {/* Task Table */}
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
                        <Avatar.Root
                          key={assignee.id}
                          height="20px"
                          width="20px"
                        >
                          <Avatar.Fallback
                            name="Segun Adebayo"
                            fontSize="10px"
                          />
                          <Avatar.Image src="https://bit.ly/sage-adebayo" />
                        </Avatar.Root>

                        // <Avatar
                        //   key={assignee.id}
                        //   size="sm"
                        //   src={assignee.avatar}
                        //   name={assignee.name}
                        //   style={{ zIndex: task.assignees.length - i }}
                        //   border="2px solid white"
                        // />
                      ))}
                      {task.extraCount > 0 && (
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

          {/* Pagination */}
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
              <Button
                aria-label="First page"
                size="sm"
                variant="ghost"
                disabled
              >
                <ArrowLeft2 size="32" color="#1A1C1E" variant="Outline" />
                {/* <ArrowLeft2 size="32" color="#1A1C1E" variant="Outline" /> */}
                {/* <Text fontSize="16px" color="#1A1C1E">⟪</Text> */}
              </Button>
              <Button
                aria-label="Previous page"
                size="sm"
                variant="ghost"
                disabled
              >
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
      </VStack>
    </Box>
  );
}
