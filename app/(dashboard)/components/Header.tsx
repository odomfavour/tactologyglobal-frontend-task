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
import {
  Notification,
  SearchNormal1,
  ArrowDown2,
  Link,
  Link1,
  ArrowDown3,
} from 'iconsax-react';
import Image from 'next/image';

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

      <HStack gap={3}>
        <IconButton
          aria-label="brand one"
          h="46px"
          w="46px"
          color="#ffffff"
          borderRadius="10px"
          border="1px solid #EEF1F9"
          px="8px"
          py="10px"
        >
          <Box position="relative" h="25.4px" w="40px">
            <Image src="/images/btn-1.png" alt="brand one" fill />
          </Box>
        </IconButton>

        <IconButton
          aria-label="brand one"
          h="46px"
          w="46px"
          color="#ffffff"
          borderRadius="10px"
          border="1px solid #EEF1F9"
          px="8px"
          py="10px"
        >
          <Box position="relative" h="25px" w="25px">
            <Image src="/images/btn-2.png" alt="brand one" fill />
          </Box>
        </IconButton>

        <IconButton
          aria-label="brand one"
          h="46px"
          w="46px"
          color="#ffffff"
          borderRadius="10px"
          border="1px solid #EEF1F9"
          px="8px"
          py="10px"
        >
          <Box position="relative" h="12.2px" w="30px">
            <Image src="/images/btn-3.png" alt="brand one" fill />
          </Box>
        </IconButton>

        <IconButton
          aria-label="brand one"
          h="46px"
          w="46px"
          color="#ffffff"
          borderRadius="10px"
          border="1px solid #EEF1F9"
          px="8px"
          py="10px"
        >
          <Box position="relative" h="25px" w="25px">
            <Image src="/images/btn-4.png" alt="brand one" fill />
          </Box>
        </IconButton>

        <Box
          bg="#EEF1F9"
          p="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          borderRadius="10px"
        >
          <Box>
            <Button
              bg="#41245F"
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
          </Box>

          <HStack gap="10px">
            <IconButton
              aria-label="VIM"
              bg="#75C5C1"
              color="#ffffff"
              borderRadius="10px"
              fontSize="14px"
              fontWeight="bold"
              h="38px"
              _hover={{
                bg: 'teal.500',
              }}
            >
              VIM
            </IconButton>

            <IconButton
              aria-label="LMS"
              bg="#75C5C1"
              color="#ffffff"
              borderRadius="10px"
              fontSize="14px"
              fontWeight="bold"
              minW="50px"
              h="38px"
              _hover={{
                bg: 'teal.500',
              }}
            >
              LMS
            </IconButton>

            <IconButton
              aria-label="BHV"
              bg="#75C5C1"
              color="#ffffff"
              borderRadius="10px"
              fontSize="14px"
              fontWeight="bold"
              minW="50px"
              h="38px"
              _hover={{
                bg: 'teal.500',
              }}
            >
              BHV
            </IconButton>

            <IconButton
              aria-label="DataLek"
              bg="#75C5C1"
              color="#ffffff"
              borderRadius="10px"
              fontSize="14px"
              fontWeight="bold"
              minW="75px"
              h="38px"
              _hover={{
                bg: 'teal.500',
              }}
            >
              DataLek
            </IconButton>
          </HStack>
        </Box>

        <IconButton
          aria-label="Link"
          bg="#F7F7F7"
          color="#ffffff"
          borderRadius="10px"
          fontSize="14px"
          fontWeight="bold"
          border="1px solid #EEF1F9"
          minW="50px"
          h="38px"
        >
          <Link1 size="18px" variant="Outline" color="#464B50" />
        </IconButton>
      </HStack>

      <HStack gap="10px" ml="10px">
        <IconButton
          aria-label="Notifications"
          bg="#F7F7F7"
          color="#ffffff"
          borderRadius="10px"
          fontSize="14px"
          fontWeight="bold"
          border="1px solid #EEF1F9"
          minW="50px"
          h="38px"
        >
          <Notification size="18" variant="Outline" color="#464B50" />
        </IconButton>

        <Button bg="#F7F7F7" p="3px" borderRadius="50px">
          <HStack gap={2}>
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Paul" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Text fontSize="14px" fontWeight="600" color="#1A1C1E">
              Hi Paul
            </Text>
            <ArrowDown2 variant="Bold" size="14" color="#6C7278" />
          </HStack>
        </Button>
      </HStack>
    </Flex>
  );
}
