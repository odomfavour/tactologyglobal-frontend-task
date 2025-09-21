import { Task } from '@/types/Task';
import {
  VStack,
  HStack,
  Avatar,
  Flex,
  Text,
  Box,
  Portal,
  Menu,
  Button,
} from '@chakra-ui/react';
import { Calendar1, Profile2User, Flag, More } from 'iconsax-react';

const TaskCard = ({
  task,
  onUpdateStatus,
}: {
  task: Task;
  onUpdateStatus: (
    taskId: number,
    newStatus: 'To Do' | 'In Progress' | 'Complete'
  ) => void;
}) => (
  <Box
    bg="white"
    borderRadius="12px"
    p={4}
    mb={4}
    _hover={{ boxShadow: '2px' }}
  >
    <VStack align="stretch" gap={3}>
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
              {onUpdateStatus && (
                <>
                  <Menu.Item
                    value="to-do"
                    onSelect={() => onUpdateStatus(task.id, 'To Do')}
                    color="black"
                  >
                    Mark as To Do
                  </Menu.Item>
                  <Menu.Item
                    value="in-progress"
                    onSelect={() => onUpdateStatus(task.id, 'In Progress')}
                    color="black"
                  >
                    Mark as In Progress
                  </Menu.Item>
                  <Menu.Item
                    value="complete"
                    onSelect={() => onUpdateStatus(task.id, 'Complete')}
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
      <Text fontSize="16px" fontWeight="600" color="#1A1C1E" lineHeight="1.4">
        {task.name}
      </Text>

      <HStack gap={2} color="#6B7280">
        <Calendar1 size="16" color="#9CA3AF" />
        <Text fontSize="12px">{task.date}</Text>
      </HStack>

      <HStack gap={2} color="#6B7280">
        <Profile2User size="16" color="#9CA3AF" />
        <HStack gap={-1}>
          {task.assignees.map((assignee, i) => (
            <Avatar.Root
              key={assignee.id}
              height="24px"
              width="24px"
              style={{ zIndex: task.assignees.length - i }}
            >
              <Avatar.Fallback name={assignee.name} fontSize="10px" />
              <Avatar.Image src={assignee.avatar} />
            </Avatar.Root>
          ))}
          {task.extraCount > 0 && (
            <Flex
              align="center"
              justify="center"
              w="24px"
              h="24px"
              bg="#F3F4F6"
              borderRadius="full"
              fontSize="10px"
              color="#6B7280"
              fontWeight="500"
              ml={1}
            >
              +{task.extraCount}
            </Flex>
          )}
        </HStack>
      </HStack>

      <HStack gap={2}>
        <Flag size="16" color={task.priorityColor} variant="Bold" />
        <Text fontSize="12px" color="#6B7280">
          {task.priority}
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default TaskCard;
