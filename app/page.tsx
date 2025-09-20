'use client';

import { Button, HStack, Box, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="" p={8} m={6} borderRadius="lg" shadow="sm">
      <VStack gap={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to MKV Dashboard
        </Text>

        <Text color="gray.600">
          Select a section from the sidebar to get started, or use the buttons
          below for quick actions.
        </Text>

        <HStack gap={4}>
          <Button colorScheme="teal" size="lg" p={2}>
            View Tasks
          </Button>
          <Button variant="outline" size="lg" p={2}>
            Manage Documents
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
