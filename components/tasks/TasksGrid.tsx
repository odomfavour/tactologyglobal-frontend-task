import React from 'react';
import { Box, VStack, Grid, GridItem } from '@chakra-ui/react';
import AddTaskBtn from './AddTaskBtn';
import { Task } from '@/types/Task';
import { Tab } from '@/types/Tab';
import TaskCard from './TaskCard';
import ColumnHeader from './ColumnHeader';

interface TasksGridProps {
  tasks: Task[];
  tabs: Tab[];
  onUpdateStatus: (
    taskId: number,
    newStatus: 'To Do' | 'In Progress' | 'Complete'
  ) => void;
}

const TasksGrid: React.FC<TasksGridProps> = ({
  tasks,
  tabs,
  onUpdateStatus,
}) => {
  const statusMap: Record<string, 'To Do' | 'In Progress' | 'Complete'> = {
    todo: 'To Do',
    progress: 'In Progress',
    complete: 'Complete',
  };

  return (
    <Box minH="100vh" p={{ base: 0, md: 4 }}>
      <Grid
        templateColumns={{
          base: '1fr', // 1 column on mobile
          md: 'repeat(2, 1fr)', // 2 columns on tablets
          lg: 'repeat(3, 1fr)', // 3 columns on desktop
        }}
        gap={{ base: 4, md: 6 }}
      >
        {tabs.map((tab) => {
          const columnTasks = tasks.filter(
            (t) => t.status === statusMap[tab.id]
          );

          return (
            <GridItem key={tab.id}>
              <VStack
                align="stretch"
                gap={4}
                bg="#F7F7F7"
                p={{ base: 2, md: 3 }}
                borderRadius="md"
              >
                <ColumnHeader tab={tab} taskCount={columnTasks.length} />
                <Box>
                  {columnTasks.map((task: Task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onUpdateStatus={onUpdateStatus}
                    />
                  ))}
                  <AddTaskBtn />
                </Box>
              </VStack>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TasksGrid;
