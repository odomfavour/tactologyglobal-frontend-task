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
} from '@chakra-ui/react';
import { Calendar1, Calendar, ArrowLeft2, ArrowRight2 } from 'iconsax-react';

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
  updateFormData: (field: string, value: string) => void;
  updateUiState: (field: string, value: any) => void;
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

  // Today
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;
  const todayDate = today.getDate();

  // Adjust for Monday start
  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  // Build days
  const days: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      mt={2}
      bg="white"
      border="1px solid #E5E7EB"
      borderRadius="12px"
      p={4}
      boxShadow="lg"
      zIndex={1002}
      minW="680px"
    >
      <Flex>
        <Box w="256px" pr={4} borderRight="1px solid #E5E7EB">
          <VStack
            gap="6px"
            align="stretch"
            border="1px solid #EEF1F9"
            bg="#F7F7F7"
            p="15px"
            borderRadius="10px"
          >
            {quickDateOptions.map((option) => (
              <Flex
                key={option.value}
                justify="space-between"
                align="center"
                bg="#ffffff"
                py="5px"
                px="10px"
                borderRadius="10px"
              >
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  px={0}
                  py={0}
                  fontSize="14px"
                  color="#374151"
                  _hover={{ bg: '#F9FAFB' }}
                  flex={1}
                  onClick={() => {
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
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        1
                      )
                    );
                    updateUiState('showDatePicker', false);
                  }}
                >
                  {option.label}
                </Button>
                <Text fontSize="14px" color="#6B7280" px={0}>
                  {getQuickDateRightLabel(option.value)}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box flex={1} pl={4}>
          <Flex
            justify="space-between"
            gap="6px"
            align="center"
            mb={4}
            bg="#EEF1F9"
            p="6px"
            borderRadius="10px"
          >
            <HStack
              gap={2}
              bg="white"
              py="12px"
              px="14px"
              w="100%"
              borderRadius="10px"
            >
              <Calendar1 size="16" color="#9CA3AF" />
              <Text fontSize="14px" color="#6B7280">
                DD/MM/YYYY
              </Text>
            </HStack>
            <HStack
              gap={2}
              bg="white"
              py="12px"
              px="14px"
              w="100%"
              borderRadius="10px"
            >
              <Calendar size="16" color="#9CA3AF" />
              <Text fontSize="14px" color="#6B7280">
                00:00
              </Text>
            </HStack>
          </Flex>

          <Flex justify="space-between" align="center" mb={4}>
            <IconButton
              aria-label="Previous month"
              onClick={() =>
                updateUiState('currentMonth', new Date(year, month - 1, 1))
              }
              size="sm"
              h="34px"
              w="34px"
              bg="#F7F7F7"
              borderRadius="full"
              _hover={{ bg: '#E5E7EB' }}
            >
              <ArrowLeft2 size="16" color="#292D32" />
            </IconButton>

            <Text fontWeight="700" fontSize="18px" color="#464B50">
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
              size="sm"
              h="34px"
              w="34px"
              bg="#F7F7F7"
              borderRadius="full"
              _hover={{ bg: '#E5E7EB' }}
            >
              <ArrowRight2 size="16" color="#292D32" />
            </IconButton>
          </Flex>

          <Grid templateColumns="repeat(7, 1fr)" gap={1} mb={2}>
            {daysOfWeek.map((day) => (
              <Text
                key={day}
                fontSize="12px"
                color="#6B7280"
                textAlign="center"
                fontWeight="500"
                p={2}
              >
                {day}
              </Text>
            ))}
          </Grid>

          <Grid templateColumns="repeat(7, 1fr)" gap={1}>
            {days.map((day, index) => {
              const isToday = isCurrentMonth && day === todayDate;
              const isSelected = day === uiState.selectedDate && day !== null;

              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  fontSize="14px"
                  h="40px"
                  w="40px"
                  borderRadius="lg"
                  isDisabled={!day}
                  visibility={!day ? 'hidden' : 'visible'}
                  bg={
                    isSelected ? '#75C5C1' : isToday ? '#DBEAFE' : 'transparent'
                  }
                  color={isSelected ? 'white' : isToday ? '#75C5C1' : '#374151'}
                  fontWeight={isToday ? '600' : '500'}
                  _hover={
                    !isSelected && !isToday ? { bg: '#F3F4F6' } : undefined
                  }
                  onClick={() => day && handleDateSelect(day)}
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
