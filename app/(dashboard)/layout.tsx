'use client';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex h="100vh" w="100%">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <Flex direction="column" flex="1" ml="250px">
        <Header />
        <Box p={6} overflowY="auto" flex="1" bg="gray.50">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
