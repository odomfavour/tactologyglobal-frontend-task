'use client';
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Toaster } from '@/components/ui/toaster';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile drawer
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex h="100vh" w="100%">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isMobileOpen={isMobileOpen}
        />

        {/* Content area */}
        <Flex
          direction="column"
          flex="1"
          // Remove margin-left on mobile, only apply on desktop
          ml={{ base: '0', md: isCollapsed ? '60px' : '250px' }}
          transition="margin-left 0.2s ease"
          w={{ base: '100%', md: 'auto' }}
        >
          <Header
            onToggleSidebar={() =>
              isMobile
                ? setIsMobileOpen(!isMobileOpen)
                : setIsCollapsed(!isCollapsed)
            }
          />
          <Box p={{ base: 4, md: 6 }} overflowY="auto" flex="1" bg="gray.50">
            {children}
          </Box>
        </Flex>
      </Flex>

      {/* Toast notifications */}
      <Toaster />

      {/* Overlay for mobile */}
      {isMobile && isMobileOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="blackAlpha.400"
          zIndex={15}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default DashboardLayout;
