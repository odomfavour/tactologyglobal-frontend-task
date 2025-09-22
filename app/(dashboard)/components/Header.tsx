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
  useBreakpointValue,
} from '@chakra-ui/react';
import { Notification, SearchNormal1, ArrowDown2, Link1 } from 'iconsax-react';
import { HamburgerMenu } from 'iconsax-reactjs';
import Image from 'next/image';

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 6 }}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      h="70px"
      gap={3}
    >
      {isMobile && (
        <Button
          onClick={onToggleSidebar}
          display={{ base: 'block', md: 'none' }}
          bg="white"
          border="1px solid #cccccc"
          borderRadius="md"
          fontSize="20px"
          px={2}
        >
          <HamburgerMenu color="#000000" size="20" />
        </Button>
      )}

      <Box
        position="relative"
        flex={{ base: 1, md: 'unset' }}
        maxW={{ base: '100%', md: '300px' }}
        minW={{ base: '100px', md: '250px' }}
      >
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
          _placeholder={{ color: 'gray.500' }}
          w="100%"
        />
      </Box>

      <HStack gap={3} display={{ base: 'none', md: 'flex' }} flexShrink={0}>
        {[1, 2, 3, 4].map((n) => (
          <IconButton
            key={n}
            aria-label={`brand-${n}`}
            h="46px"
            w="46px"
            borderRadius="10px"
            border="1px solid #EEF1F9"
            bg="white"
          >
            <Box position="relative" h="25px" w="25px">
              <Image
                src={`/images/btn-${n}.png`}
                alt={`brand-${n}`}
                fill
                sizes="25px"
              />
            </Box>
          </IconButton>
        ))}

        <Box
          bg="#EEF1F9"
          p="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          borderRadius="10px"
          border="1px solid #EEF1F9"
        >
          <Button
            bg="#41245F"
            color="white"
            size="sm"
            borderRadius="full"
            px={4}
            fontSize="13px"
            fontWeight="medium"
            _hover={{ bg: 'purple.700' }}
          >
            Melding maken
          </Button>

          <HStack gap="10px">
            {['VIM', 'LMS', 'BHV', 'DataLek'].map((label) => (
              <IconButton
                key={label}
                aria-label={label}
                bg="#75C5C1"
                color="#ffffff"
                borderRadius="10px"
                fontSize="14px"
                fontWeight="bold"
                minW="50px"
                h="38px"
                _hover={{ bg: 'teal.500' }}
              >
                {label}
              </IconButton>
            ))}
          </HStack>
        </Box>

        <IconButton
          aria-label="Link"
          bg="#F7F7F7"
          borderRadius="10px"
          border="1px solid #EEF1F9"
          minW="50px"
          h="38px"
        >
          <Link1 size="18px" variant="Outline" color="#464B50" />
        </IconButton>
      </HStack>

      <HStack gap="10px" ml={{ base: 0, md: '10px' }}>
        <Box display={{ base: 'none', md: 'block' }}>
          <IconButton
            aria-label="Notifications"
            bg="#F7F7F7"
            borderRadius="10px"
            border="1px solid #EEF1F9"
            minW="40px"
            h="38px"
          >
            <Notification size="18" variant="Outline" color="#464B50" />
          </IconButton>
        </Box>

        <Button bg="#F7F7F7" p="3px" borderRadius="full">
          <HStack gap={2}>
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Paul" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Text
              fontSize="14px"
              fontWeight="600"
              color="#1A1C1E"
              display={{ base: 'none', md: 'block' }}
            >
              Hi Paul
            </Text>
            <ArrowDown2 variant="Bold" size="14" color="#6C7278" />
          </HStack>
        </Button>
      </HStack>
    </Flex>
  );
}
