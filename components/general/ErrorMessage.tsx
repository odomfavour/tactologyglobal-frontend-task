import React from 'react';
import { Flex, VStack, Text, Button } from '@chakra-ui/react';
import { Warning2 } from 'iconsax-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="white">
      <VStack gap={4}>
        <Warning2 size="30" color="red.500" />
        <Text color="red.600" fontSize="lg" fontWeight="semibold">
          {message}
        </Text>
        {onRetry && (
          <Button colorScheme="red" onClick={onRetry}>
            Retry
          </Button>
        )}
      </VStack>
    </Flex>
  );
};

export default ErrorMessage;
