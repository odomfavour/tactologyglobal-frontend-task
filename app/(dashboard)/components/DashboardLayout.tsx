'use client';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Flex h="100vh" w="100%">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Section */}
      <Flex
        direction="column"
        flex="1"
        ml={isCollapsed ? '60px' : '250px'}
        transition="margin-left 0.2s"
      >
        <Header />
        <Box p={6} overflowY="auto" flex="1" bg="gray.50">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
export default DashboardLayout;
