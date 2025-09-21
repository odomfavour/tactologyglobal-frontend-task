import React from 'react';
import { Box, Stack, Button, Badge, BoxProps } from '@chakra-ui/react';

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
  color: string;
  activeColor?: string;
}

interface TabsBarProps extends BoxProps {
  tabs: TabItem[];
  activeTab: string | number;
  setActiveTab: (id: string) => void;
}

const TabsBar: React.FC<TabsBarProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  ...boxProps
}) => {
  return (
    <Box bg="#F7F7F7" borderRadius="6px" p="10px" {...boxProps}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        align={{ base: 'stretch', md: 'center' }}
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            w={{ base: '100%', md: 'auto' }}
            p="8px"
            bg={activeTab === tab.id ? tab.activeColor ?? 'white' : 'white'}
            color={activeTab === tab.id ? tab.color : 'gray.600'}
            border="1px solid"
            borderColor={activeTab === tab.id ? `${tab.color}.200` : 'gray.200'}
            borderRadius="md"
            justifyContent="flex-start"
            onClick={() => setActiveTab(tab.id)}
            _hover={{
              bg: `${tab.color}.50`,
              color: `${tab.color}.600`,
            }}
          >
            {tab.icon && <Box mr={2}>{tab.icon}</Box>}
            {tab.label}
            {typeof tab.count !== 'undefined' && (
              <Badge
                bg={activeTab === tab.id ? tab.color : 'gray.100'}
                color={activeTab === tab.id ? '#000000' : 'gray.600'}
                borderRadius="full"
                px={2}
                py={1}
                fontSize="12px"
                ml={2}
              >
                {tab.count}
              </Badge>
            )}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default TabsBar;
