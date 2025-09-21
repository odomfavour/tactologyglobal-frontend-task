import React from 'react';
import {
  Flex,
  VStack,
  Button,
  HStack,
  IconButton,
  Grid,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Calendar1, Calendar, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { UiState } from '@/types/uiState';
import { Task } from '@/types/Task';

interface QuickDateOption {
  label: string;
  value: string;
}

interface CalendarComponentProps {
  uiState: {
    currentMonth: Date;
    selectedDate: number | null;
  };
  quickDateOptions: QuickDateOption[];
  updateFormData: <K extends keyof Task>(field: K, value: Task[K]) => void;
  updateUiState: <K extends keyof UiState>(field: K, value: UiState[K]) => void;
  handleDateSelect: (date: number) => void;
  getQuickDateValue: (option: string) => Date;
  getQuickDateRightLabel: (option: string) => string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  uiState,
  quickDateOptions,
  updateFormData,
  updateUiState,
  handleDateSelect,
  getQuickDateValue,
  getQuickDateRightLabel,
}) => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const year = uiState.currentMonth.getFullYear();
  const month = uiState.currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const containerWidth = useBreakpointValue({
    base: '90vw',
    sm: '400px',
    md: '680px',
  });
  const containerMaxWidth = useBreakpointValue({
    base: '80vw',
    sm: '400px',
    md: '680px',
  });
  const flexDirection = useBreakpointValue({
    base: 'column',
    md: 'row',
  }) as 'column' | 'row';
  const quickOptionsWidth = useBreakpointValue({
    base: '100%',
    md: '256px',
  });

  const containerPadding = useBreakpointValue({
    base: '12px',
    md: '16px',
  });

  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;
  const todayDate = today.getDate();

  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  const days: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const handleQuickDateSelect = (option: QuickDateOption) => {
    const selectedDate = getQuickDateValue(option.value);
    const formattedDate = `${selectedDate
      .getDate()
      .toString()
      .padStart(2, '0')}/${(selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${selectedDate.getFullYear()}`;
    updateFormData('date', formattedDate);
    updateUiState('selectedDate', selectedDate.getDate());
    updateUiState(
      'currentMonth',
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    );
    updateUiState('showDatePicker', false);
  };

  return (
    <Box
      position="absolute"
      top="100%"
      left={{ base: '0', sm: 'auto' }}
      right={{ base: '0', sm: 'auto' }}
      mt={2}
      bg="white"
      border="1px solid #E5E7EB"
      borderRadius="12px"
      p={containerPadding}
      zIndex={1002}
      w={containerWidth}
      maxW={containerMaxWidth}
      boxShadow="xl"
      overflow="hidden"
    >
      <Flex direction={flexDirection} gap={{ base: 0, md: 0 }}>
        <Box
          w={quickOptionsWidth}
          pr={{ base: 0, md: 4 }}
          borderRight={{ base: 'none', md: '1px solid #E5E7EB' }}
          mb={{ base: 4, md: 0 }}
        >
          <VStack
            gap={{ base: '4px', md: '6px' }}
            align="stretch"
            border="1px solid #EEF1F9"
            bg="#F7F7F7"
            p={{ base: '12px', md: '15px' }}
            borderRadius="10px"
          >
            {quickDateOptions.map((option) => (
              <Flex
                key={option.value}
                justify="space-between"
                align="center"
                bg="#ffffff"
                py={{ base: '4px', md: '5px' }}
                px={{ base: '8px', md: '10px' }}
                borderRadius="10px"
                minH="36px"
              >
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  px={0}
                  py={0}
                  fontSize={{ base: '13px', md: '14px' }}
                  color="#374151"
                  _hover={{ bg: '#F9FAFB' }}
                  flex={1}
                  h="auto"
                  minH="28px"
                  onClick={() => handleQuickDateSelect(option)}
                >
                  {option.label}
                </Button>
                <Text
                  fontSize={{ base: '12px', md: '14px' }}
                  color="#6B7280"
                  px={0}
                  minW={{ base: '40px', md: 'auto' }}
                  textAlign="right"
                >
                  {getQuickDateRightLabel(option.value)}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box flex={1} pl={{ base: 0, md: 4 }}>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            gap={{ base: 2, md: 1 }}
            align="stretch"
            mb={4}
            bg="#EEF1F9"
            p={{ base: '4px', md: '6px' }}
            borderRadius="10px"
          >
            <HStack
              gap={2}
              bg="white"
              py={{ base: '10px', md: '12px' }}
              px={{ base: '12px', md: '14px' }}
              w="100%"
              borderRadius="10px"
              justify="center"
            >
              <Calendar1 size="16" color="#9CA3AF" />
              <Text fontSize={{ base: '13px', md: '14px' }} color="#6B7280">
                DD/MM/YYYY
              </Text>
            </HStack>
            <HStack
              gap={2}
              bg="white"
              py={{ base: '10px', md: '12px' }}
              px={{ base: '12px', md: '14px' }}
              w="100%"
              borderRadius="10px"
              justify="center"
            >
              <Calendar size="16" color="#9CA3AF" />
              <Text fontSize={{ base: '13px', md: '14px' }} color="#6B7280">
                00:00
              </Text>
            </HStack>
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            mb={4}
            px={{ base: 1, md: 0 }}
          >
            <IconButton
              aria-label="Previous month"
              onClick={() =>
                updateUiState('currentMonth', new Date(year, month - 1, 1))
              }
              size={{ base: 'sm', md: 'md' }}
              h={{ base: '32px', md: '34px' }}
              w={{ base: '32px', md: '34px' }}
              bg="#F7F7F7"
              borderRadius="full"
              _hover={{ bg: '#E5E7EB' }}
            >
              <ArrowLeft2 size="16" color="#292D32" />
            </IconButton>

            <Text
              fontWeight="700"
              fontSize={{ base: '16px', md: '18px' }}
              color="#464B50"
              textAlign="center"
              px={2}
            >
              {uiState.currentMonth.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </Text>

            <IconButton
              aria-label="Next month"
              onClick={() =>
                updateUiState('currentMonth', new Date(year, month + 1, 1))
              }
              size={{ base: 'sm', md: 'md' }}
              h={{ base: '32px', md: '34px' }}
              w={{ base: '32px', md: '34px' }}
              bg="#F7F7F7"
              borderRadius="full"
              _hover={{ bg: '#E5E7EB' }}
            >
              <ArrowRight2 size="16" color="#292D32" />
            </IconButton>
          </Flex>

          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={{ base: 0.5, md: 1 }}
            mb={2}
          >
            {daysOfWeek.map((day) => (
              <Text
                key={day}
                fontSize={{ base: '11px', md: '12px' }}
                color="#6B7280"
                textAlign="center"
                fontWeight="500"
                p={{ base: 1, md: 2 }}
              >
                {day}
              </Text>
            ))}
          </Grid>

          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={{ base: 0.5, md: 1 }}
            maxW="100%"
          >
            {days.map((day, index) => {
              const isToday = isCurrentMonth && day === todayDate;
              const isSelected = day === uiState.selectedDate && day !== null;

              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  fontSize={{ base: '12px', md: '14px' }}
                  h={{ base: '32px', md: '40px' }}
                  w={{ base: '32px', md: '40px' }}
                  minW={{ base: '32px', md: '40px' }}
                  borderRadius="lg"
                  disabled={!day}
                  visibility={!day ? 'hidden' : 'visible'}
                  bg={
                    isSelected ? '#75C5C1' : isToday ? '#DBEAFE' : 'transparent'
                  }
                  color={isSelected ? 'white' : isToday ? '#75C5C1' : '#374151'}
                  fontWeight={isToday ? '600' : '500'}
                  _hover={
                    !isSelected && !isToday ? { bg: '#F3F4F6' } : undefined
                  }
                  _active={
                    !isSelected && !isToday ? { bg: '#E5E7EB' } : undefined
                  }
                  onClick={() => day && handleDateSelect(day)}
                  p={0}
                >
                  {day}
                </Button>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default CalendarComponent;
