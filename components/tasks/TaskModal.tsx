import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  HStack,
  VStack,
  Textarea,
  Avatar,
} from '@chakra-ui/react';
import {
  Calendar1,
  Calendar,
  Flag,
  TaskSquare,
  Status,
  TickCircle,
  ArrowDown2,
  SearchNormal1,
  ProfileCircle,
  Stickynote,
} from 'iconsax-react';
import CalendarComponent from '../general/CalendarComponent';

interface Assignee {
  id: number;
  name: string;
  avatar: string;
}

interface TaskData {
  name: string;
  status: string;
  date: string;
  assignees: Assignee[];
  priority: string;
  description: string;
}

interface TaskModalProps {
  mode: 'create' | 'edit';
  task?: TaskData;
  onSave: (taskData: TaskData) => void;
  onCancel: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  mode,
  task,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<TaskData>({
    name: task?.name || 'MKV Intranet V2',
    status: task?.status || 'To Do',
    date: task?.date || '',
    assignees: task?.assignees || [],
    priority: task?.priority || '',
    description: task?.description || '',
  });

  const [uiState, setUiState] = useState({
    showStatusDropdown: false,
    showPriorityDropdown: false,
    showAssigneeDropdown: false,
    showDatePicker: false,
    currentMonth: new Date(),
    selectedDate: null as number | null,
    showQuickOptions: false,
  });

  const updateFormData = (field: keyof TaskData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateUiState = (field: string, value: any) => {
    setUiState((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: number) => {
    const month = uiState.currentMonth.getMonth() + 1;
    const year = uiState.currentMonth.getFullYear();
    const formattedDate = `${date.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;
    updateFormData('date', formattedDate);
    updateUiState('selectedDate', date);
    updateUiState('showDatePicker', false);
  };

  const getQuickDateValue = (option: string) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    switch (option) {
      case 'today':
        return today;
      case 'tomorrow':
        return tomorrow;
      case 'weekend':
        const weekend = new Date(today);
        const daysUntilSaturday = (6 - today.getDay()) % 7;
        weekend.setDate(today.getDate() + daysUntilSaturday);
        return weekend;
      case 'next-week':
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        return nextWeek;
      case 'next-weekend':
        const nextWeekend = new Date(today);
        const daysUntilNextSaturday = ((6 - today.getDay()) % 7) + 7;
        nextWeekend.setDate(today.getDate() + daysUntilNextSaturday);
        return nextWeekend;
      case '2-weeks':
        const twoWeeks = new Date(today);
        twoWeeks.setDate(today.getDate() + 14);
        return twoWeeks;
      case '4-weeks':
        const fourWeeks = new Date(today);
        fourWeeks.setDate(today.getDate() + 28);
        return fourWeeks;
      default:
        return today;
    }
  };

  const getQuickDateRightLabel = (option: string) => {
    const selectedDate = getQuickDateValue(option);

    switch (option) {
      case 'today':
        return selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
      case 'tomorrow':
        return selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
      case 'weekend':
        return selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
      case 'next-week':
        return selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
      case 'next-weekend':
        return `${selectedDate.getDate()} ${selectedDate.toLocaleDateString(
          'en-US',
          { month: 'short' }
        )}`;
      case '2-weeks':
        return `${selectedDate.getDate()} ${selectedDate.toLocaleDateString(
          'en-US',
          { month: 'short' }
        )}`;
      case '4-weeks':
        return `${selectedDate.getDate()} ${selectedDate.toLocaleDateString(
          'en-US',
          { month: 'short' }
        )}`;
      default:
        return '';
    }
  };

  const quickDateOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Tomorrow', value: 'tomorrow' },
    { label: 'This Weekend', value: 'weekend' },
    { label: 'Next Week', value: 'next-week' },
    { label: 'Next Weekend', value: 'next-weekend' },
    { label: '2 Week', value: '2-weeks' },
    { label: '4 Week', value: '4-weeks' },
  ];

  const statusOptions = [
    {
      id: 'todo',
      label: 'To Do',
      color: '#c298eb',
      icon: <TaskSquare size="20" color="#c298eb" variant="Bold" />,
    },
    {
      id: 'progress',
      label: 'In Progress',
      color: '#F6BE38',
      icon: <Status size="20" color="#F6BE38" variant="Bold" />,
    },
    {
      id: 'complete',
      label: 'Complete',
      color: '#75C5C1',
      icon: <TickCircle size="20" color="#75C5C1" variant="Bold" />,
    },
  ];

  const priorityOptions = [
    { id: 'urgent', label: 'Urgent', color: '#FF515D' },
    { id: 'important', label: 'Important', color: '#F6BE38' },
    { id: 'normal', label: 'Normal', color: '#75C5C1' },
    { id: 'medium', label: 'Medium', color: '#75C5C1' },
    { id: 'low', label: 'Low', color: '#9CA3AF' },
  ];

  const availableAssignees = [
    { id: 1, name: 'Maria Vetrovs', avatar: 'https://bit.ly/sage-adebayo' },
    { id: 2, name: 'Adison Mango', avatar: 'https://bit.ly/kent-c-dodds' },
    { id: 3, name: 'Gustavo Culhane', avatar: 'https://bit.ly/ryan-florence' },
    { id: 4, name: 'Adison Bator', avatar: 'https://bit.ly/code-beast' },
    { id: 5, name: 'Zaire George', avatar: 'https://bit.ly/prosper-baba' },
  ];

  const handleSave = () => {
    console.log('Task Data:', formData);
    onSave(formData);
  };

  return (
    <Box py="15px">
      <VStack align="stretch" gap={6}>
        <Box>
          {mode === 'edit' && (
            <Text fontSize="20px" fontWeight="600" color="#111827" mb={4}>
              {formData.name}
            </Text>
          )}
          {mode === 'create' && (
            <Text fontSize="14px" color="#6B7280" mb={2}>
              Task Name
            </Text>
          )}
          {mode === 'create' && (
            <Input
              placeholder="Enter task name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              border="1px solid #E5E7EB"
              borderRadius="8px"
              fontSize="14px"
              color="black"
              px="12px"
              py="8px"
              h="40px"
            />
          )}
        </Box>

        <Box position="relative">
          <HStack gap={3} align="center">
            <Status size="24" color="#9CA3AF" />
            <Text fontSize="14px" color="#6B7280" minW="80px">
              Status
            </Text>
            <Button
              variant="outline"
              bg="#F3E8FF"
              border="none"
              borderRadius="20px"
              px={3}
              py={1}
              h="32px"
              color="#7C3AED"
              fontWeight="500"
              onClick={() =>
                updateUiState('showStatusDropdown', !uiState.showStatusDropdown)
              }
            >
              <HStack gap={2}>
                <TaskSquare size="16" color="#7C3AED" variant="Bold" />
                <Text fontSize="14px">{formData.status}</Text>
                <ArrowDown2 size="12" />
              </HStack>
            </Button>
          </HStack>

          {uiState.showStatusDropdown && (
            <Box
              position="absolute"
              top="100%"
              left="107px"
              mt={1}
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="8px"
              zIndex={1002}
              w="190px"
              py="6px"
            >
              {statusOptions.map((option) => (
                <Button
                  key={option.id}
                  w="100%"
                  justifyContent="flex-start"
                  px={3}
                  py={2}
                  onClick={() => {
                    updateFormData('status', option.label);
                    updateUiState('showStatusDropdown', false);
                  }}
                  _hover={{ bg: '#F9FAFB', color: '#111827' }}
                  _active={{ bg: '#F3F4F6' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  <HStack gap={2}>
                    {option.icon}
                    <Text fontSize="14px">{option.label}</Text>
                  </HStack>
                </Button>
              ))}
            </Box>
          )}
        </Box>

        <Box position="relative">
          <HStack gap={3} align="center">
            <Calendar size="24" color="#9CA3AF" />
            <Text fontSize="14px" color="#6B7280" minW="80px">
              Dates
            </Text>
            <Button
              variant="outline"
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="8px"
              px={3}
              py={2}
              h="40px"
              onClick={() =>
                updateUiState('showDatePicker', !uiState.showDatePicker)
              }
            >
              <HStack gap={2}>
                <Calendar1 size="16" color="#9CA3AF" />
                <Text fontSize="14px" color="#9CA3AF">
                  {formData.date || '00/00/0000'}
                </Text>
              </HStack>
            </Button>
          </HStack>

          {uiState.showDatePicker && (
            <CalendarComponent
              uiState={uiState}
              quickDateOptions={quickDateOptions}
              updateFormData={updateFormData}
              updateUiState={updateUiState}
              handleDateSelect={handleDateSelect}
              getQuickDateValue={getQuickDateValue}
              getQuickDateRightLabel={getQuickDateRightLabel}
            />
          )}
        </Box>

        <Box position="relative">
          <HStack gap={3} align="center">
            <ProfileCircle size="24" color="#9CA3AF" />
            <Text fontSize="14px" color="#6B7280" minW="80px">
              Assignees
            </Text>
            <Button
              variant="outline"
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="8px"
              px={3}
              py={2}
              h="40px"
              onClick={() =>
                updateUiState(
                  'showAssigneeDropdown',
                  !uiState.showAssigneeDropdown
                )
              }
            >
              <HStack gap={2}>
                <ProfileCircle size="16" color="#9CA3AF" />
                {formData.assignees.length > 0 ? (
                  <HStack gap={-1}>
                    {formData.assignees.slice(0, 3).map((assignee, i) => (
                      <Avatar.Root
                        key={assignee.id}
                        size="sm"
                        name={assignee.name}
                        src={assignee.avatar}
                        w="24px"
                        h="24px"
                        fontSize="10px"
                        zIndex={formData.assignees.length - i}
                      >
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                      </Avatar.Root>
                    ))}
                    {formData.assignees.length > 3 && (
                      <Box
                        w="24px"
                        h="24px"
                        bg="#F3F4F6"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="10px"
                        color="#6B7280"
                        fontWeight="500"
                      >
                        +{formData.assignees.length - 3}
                      </Box>
                    )}
                  </HStack>
                ) : (
                  <Text fontSize="14px" color="#9CA3AF">
                    Select Assignee
                  </Text>
                )}
              </HStack>
            </Button>
          </HStack>

          {uiState.showAssigneeDropdown && (
            <Box
              position="absolute"
              top="100%"
              left="107px"
              mt={1}
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="12px"
              zIndex={1002}
              w="280px"
              p={3}
            >
              <Box position="relative" mb={3}>
                <SearchNormal1
                  size="16"
                  color="#9CA3AF"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                  }}
                />
                <Input
                  placeholder="Search users"
                  pl="36px"
                  border="1px solid #E5E7EB"
                  borderRadius="8px"
                  fontSize="14px"
                  h="36px"
                />
              </Box>

              {availableAssignees.map((assignee) => (
                <Button
                  key={assignee.id}
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  px={2}
                  py={2}
                  mb={1}
                  onClick={() => {
                    const isSelected = formData.assignees.some(
                      (a) => a.id === assignee.id
                    );
                    if (isSelected) {
                      updateFormData(
                        'assignees',
                        formData.assignees.filter((a) => a.id !== assignee.id)
                      );
                    } else {
                      updateFormData('assignees', [
                        ...formData.assignees,
                        assignee,
                      ]);
                    }
                  }}
                  bg={
                    formData.assignees.some((a) => a.id === assignee.id)
                      ? '#F0F9FF'
                      : 'transparent'
                  }
                >
                  <HStack gap={3} w="100%">
                    <Avatar.Root
                      size="sm"
                      name={assignee.name}
                      src={assignee.avatar}
                      w="32px"
                      h="32px"
                      fontSize="12px"
                    >
                      <Avatar.Fallback name="Segun Adebayo" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>

                    <Text fontSize="14px" color="#1A1C1E">
                      {assignee.name}
                    </Text>
                  </HStack>
                </Button>
              ))}
            </Box>
          )}
        </Box>

        <Box position="relative">
          <HStack gap={3} align="center">
            <Flag size="24" color="#9CA3AF" />
            <Text fontSize="14px" color="#6B7280" minW="80px">
              Priority
            </Text>
            <Button
              variant="outline"
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="8px"
              px={3}
              py={2}
              h="40px"
              onClick={() =>
                updateUiState(
                  'showPriorityDropdown',
                  !uiState.showPriorityDropdown
                )
              }
            >
              <HStack gap={2}>
                <Flag size="16" color="#9CA3AF" />
                <Text fontSize="14px" color="#9CA3AF">
                  {formData.priority || 'Select Priority'}
                </Text>
              </HStack>
            </Button>
          </HStack>

          {uiState.showPriorityDropdown && (
            <Box
              position="absolute"
              top="100%"
              left="107px"
              mt={1}
              bg="white"
              border="1px solid #E5E7EB"
              borderRadius="8px"
              boxShadow="lg"
              zIndex={1002}
              w="190px"
            >
              {priorityOptions.map((option) => (
                <Button
                  key={option.id}
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  px={3}
                  py={2}
                  onClick={() => {
                    updateFormData('priority', option.label);
                    updateUiState('showPriorityDropdown', false);
                  }}
                >
                  <HStack gap={2}>
                    <Flag size="16" color={option.color} variant="Bold" />
                    <Text fontSize="14px">{option.label}</Text>
                  </HStack>
                </Button>
              ))}
              <Box borderTop="1px solid #F3F4F6" mt={1} pt={1}>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  px={3}
                  py={2}
                  onClick={() => {
                    updateFormData('priority', '');
                    updateUiState('showPriorityDropdown', false);
                  }}
                >
                  <HStack gap={2}>
                    <Box
                      w="16px"
                      h="16px"
                      border="1px solid #D1D5DB"
                      borderRadius="2px"
                    />
                    <Box
                      bg="#FB923C"
                      color="white"
                      px={2}
                      py={0.5}
                      borderRadius="4px"
                      fontSize="12px"
                    >
                      Clear
                    </Box>
                  </HStack>
                </Button>
              </Box>
            </Box>
          )}
        </Box>

        {/* Description */}
        <Box>
          <HStack gap={3} mb={3}>
            <Stickynote size="24" color="#9CA3AF" />
            <Text fontSize="14px" color="#6B7280">
              Description
            </Text>
          </HStack>
          <Textarea
            placeholder="Write something or type"
            value={formData.description}
            onChange={(e) => updateFormData('description', e.target.value)}
            border="1px solid #EEF1F9"
            borderRadius="8px"
            color="black"
            bg="#F7F7F7"
            fontSize="14px"
            p="20px"
            resize="vertical"
            minH="80px"
          />
        </Box>

        {/* Action Buttons */}
        <Flex justify="flex-end" pt={4}>
          <Button
            bg="#75C5C1"
            color="white"
            borderRadius="8px"
            px={6}
            py={2}
            fontSize="14px"
            fontWeight="500"
            _hover={{ bg: '#68B2AE' }}
            onClick={handleSave}
          >
            {mode === 'create' ? 'Create Task' : 'Save Changes'}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default TaskModal;
