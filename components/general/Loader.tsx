import React from 'react';
import { Flex, VStack, Text, Spinner } from '@chakra-ui/react';

interface LoaderProps {
  message?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Loading...',
  size = 'xl',
  color = 'blue.500',
  fullscreen = true,
}) => {
  if (fullscreen) {
    return (
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.6)"
        zIndex={9999}
        align="center"
        justify="center"
      >
        <VStack gap={3}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={color}
            size={size}
          />
          <Text fontSize="md" color="white">
            {message}
          </Text>
        </VStack>
      </Flex>
    );
  }

  // inline version (e.g. inside a card)
  return (
    <Flex align="center" justify="center" p={6}>
      <VStack gap={3}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={color}
          size={size}
        />
        <Text fontSize="md" color="gray.600">
          {message}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Loader;
