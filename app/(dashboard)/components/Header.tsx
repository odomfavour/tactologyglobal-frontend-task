'use client';
import {
  Flex,
  IconButton,
  Avatar,
  HStack,
  Text,
  Box,
  Input,
  Button,
} from '@chakra-ui/react';
import { Notification, SearchNormal1, ArrowDown2 } from 'iconsax-react';

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={6}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      h="70px"
    >
      {/* Search */}
      <Box position="relative" maxW="300px" minW="250px">
        <Box
          position="absolute"
          left="12px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          pointerEvents="none"
        >
          <SearchNormal1 size="16" color="#9CA3AF" />
        </Box>
        <Input
          placeholder="M91"
          pl="40px"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="full"
          bg="gray.50"
          fontSize="14px"
          h="40px"
          _focus={{
            borderColor: 'gray.400',
            boxShadow: 'none',
            bg: 'white',
          }}
          _placeholder={{
            color: 'gray.500',
          }}
        />
      </Box>

      {/* Center - App Icons */}
      <HStack gap={3}>
        {/* Left icons - yellow and blue circles */}
        <IconButton
          aria-label="Yellow circle"
          size="sm"
          bg="yellow.400"
          color="white"
          borderRadius="full"
          minW="32px"
          h="32px"
          _hover={{
            bg: 'yellow.500',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </IconButton>

        <IconButton
          aria-label="Blue circle"
          size="sm"
          bg="blue.500"
          color="white"
          borderRadius="full"
          minW="32px"
          h="32px"
          _hover={{
            bg: 'blue.600',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </IconButton>

        {/* 3CX button */}
        <Button
          bg="gray.700"
          color="white"
          size="sm"
          borderRadius="md"
          px={3}
          fontSize="12px"
          fontWeight="bold"
          h="32px"
          _hover={{
            bg: 'gray.800',
          }}
        >
          3CX
        </Button>

        {/* Red circle with E */}
        <IconButton
          aria-label="Emergency"
          size="sm"
          bg="red.500"
          color="white"
          borderRadius="full"
          minW="32px"
          h="32px"
          fontSize="14px"
          fontWeight="bold"
          _hover={{
            bg: 'red.600',
          }}
        >
          E
        </IconButton>

        {/* Melding maken button */}
        <Button
          bg="purple.600"
          color="white"
          size="sm"
          borderRadius="full"
          px={4}
          fontSize="13px"
          fontWeight="medium"
          _hover={{
            bg: 'purple.700',
          }}
        >
          Melding maken
        </Button>

        {/* App icons */}
        <HStack gap={2}>
          <IconButton
            aria-label="VIM"
            size="sm"
            bg="teal.400"
            color="white"
            borderRadius="md"
            fontSize="12px"
            fontWeight="bold"
            minW="40px"
            h="32px"
            _hover={{
              bg: 'teal.500',
            }}
          >
            VIM
          </IconButton>

          <IconButton
            aria-label="LMS"
            size="sm"
            bg="teal.400"
            color="white"
            borderRadius="md"
            fontSize="12px"
            fontWeight="bold"
            minW="40px"
            h="32px"
            _hover={{
              bg: 'teal.500',
            }}
          >
            LMS
          </IconButton>

          <IconButton
            aria-label="BHV"
            size="sm"
            bg="teal.400"
            color="white"
            borderRadius="md"
            fontSize="12px"
            fontWeight="bold"
            minW="40px"
            h="32px"
            _hover={{
              bg: 'teal.500',
            }}
          >
            BHV
          </IconButton>

          <IconButton
            aria-label="DataLek"
            size="sm"
            bg="teal.400"
            color="white"
            borderRadius="md"
            fontSize="11px"
            fontWeight="bold"
            minW="55px"
            h="32px"
            _hover={{
              bg: 'teal.500',
            }}
          >
            DataLek
          </IconButton>
        </HStack>

        {/* Link icon */}
        <IconButton
          aria-label="Link"
          size="sm"
          variant="ghost"
          borderRadius="md"
          color="gray.500"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </IconButton>
      </HStack>

      {/* Right side - Notification and User */}
      <HStack gap={3}>
        <IconButton
          aria-label="Notifications"
          size="sm"
          variant="ghost"
          borderRadius="md"
          color="gray.600"
        >
          <Notification size="18" />
        </IconButton>

        <Button variant="ghost" p={2} borderRadius="md">
          <HStack gap={2}>
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Paul" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Text fontSize="14px" fontWeight="medium" color="gray.700">
              Hi Paul
            </Text>
            <ArrowDown2 size="14" color="#9CA3AF" />
          </HStack>
        </Button>
      </HStack>
    </Flex>
  );
}
