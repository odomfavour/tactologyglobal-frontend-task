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
}
const TasksGrid: React.FC<TasksGridProps> = ({ tasks, tabs }) => {
  const groupTasksByStatus = () => {
    const todoTasks = tasks.filter((_, index) => index % 3 === 0);
    const progressTasks = tasks.filter((_, index) => index % 3 === 1);
    const completeTasks = tasks.filter((_, index) => index % 3 === 2);

    return {
      todo: todoTasks,
      progress: progressTasks,
      complete: completeTasks,
    };
  };

  const groupedTasks = groupTasksByStatus();

  return (
    <Box minH="100vh">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {tabs.map((tab) => {
          const columnTasks = groupedTasks[tab.id] || [];

          return (
            <GridItem key={tab.id}>
              <VStack align="stretch" gap={4} bg="#F7F7F7" p="3px">
                <ColumnHeader tab={tab} taskCount={columnTasks.length} />
                <Box>
                  {columnTasks.map((task: Task) => (
                    <TaskCard key={task.id} task={task} />
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
