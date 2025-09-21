'use client';
import { Flex, Box } from '@chakra-ui/react';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Toaster } from '@/components/ui/toaster';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Flex h="100vh" w="100%">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

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
      <Toaster />
    </>
  );
};
export default DashboardLayout;
