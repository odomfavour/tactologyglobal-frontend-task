'use client';

import { Box, VStack, Text, Flex, HStack } from '@chakra-ui/react';
import {
  Home,
  User,
  DocumentText,
  Profile2User,
  Calendar,
  Building,
  Sms,
  People,
  TaskSquare,
  Note,
  Calendar2,
  Setting2,
  Call,
  ClipboardText,
  Notification,
  Book,
  SecurityUser,
  UserEdit,
  Global,
  ArrowDown2,
  Flag,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  icon: any;
  label: string;
  href: string;
  hasSubmenu?: boolean;
  isCategory?: boolean;
  isSubItem?: boolean;
  isSwitch?: boolean;
  isHighlighted?: boolean;
}

const Sidebar = () => {
  const pathname = usePathname();
  const bgColor = 'white';
  const textColor = 'gray.700';
  const activeColor = 'teal.600';
  const activeBg = 'teal.50';
  const categoryColor = 'gray.400';

  const sidebarItems: SidebarItem[] = [
    { icon: <Home size={20} color="#9CA3AF" />, label: 'Home', href: '/' },
    {
      icon: <User size={20} color="#9CA3AF" />,
      label: 'MKVanBinnen',
      href: '/profile',
    },
    {
      icon: <DocumentText size={20} color="#9CA3AF" />,
      label: 'Document Management',
      href: '/documents',
    },
    {
      icon: <Profile2User size={20} color="#9CA3AF" />,
      label: 'Patient Information',
      href: '/patients',
    },
    {
      icon: <Calendar size={20} color="#9CA3AF" />,
      label: 'Agenda',
      href: '/agenda',
    },
    {
      icon: <Building size={20} color="#9CA3AF" />,
      label: 'My Department',
      href: '/department',
      hasSubmenu: true,
    },
    {
      icon: '',
      label: 'News',
      href: '/news',
      isSubItem: true,
    },
    {
      icon: '',
      label: 'Members',
      href: '/members',
      isSubItem: true,
    },
    {
      icon: '',
      label: 'To - Do',
      href: '/tasks',
      isSubItem: true,
    },
    {
      icon: '',
      label: 'Form Task',
      href: '/forms',

      isSubItem: true,
    },
    {
      icon: '',
      label: 'Agenda',
      href: '/calendar',

      isSubItem: true,
    },
    {
      icon: '',
      label: 'Follow up system',
      href: '/followup',

      isSubItem: true,
    },
    {
      icon: '',
      label: 'Group Settings',
      href: '/settings/groups',
      hasSubmenu: true,
      isSubItem: true,
    },
    {
      icon: <Call size={20} color="#9CA3AF" />,
      label: 'Phone numbers',
      href: '/phones',
    },
    {
      icon: <ClipboardText size={20} color="#9CA3AF" />,
      label: 'My to do Protocols',
      href: '/protocols',
    },
    {
      icon: <Notification size={20} color="#9CA3AF" />,
      label: 'My Notifications',
      href: '/notifications',
    },
    {
      icon: <Book size={20} color="#9CA3AF" />,
      label: 'Knowledge Base',
      href: '/knowledge',
    },
    {
      icon: <SecurityUser size={20} color="#9CA3AF" />,
      label: 'Super Admin',
      href: '/admin/super',
    },
    {
      icon: <UserEdit size={20} color="#9CA3AF" />,
      label: 'Admin',
      href: '/admin',
      hasSubmenu: true,
    },
    {
      icon: <Calendar2 size={20} color="#9CA3AF" />,
      label: 'Agenda',
      href: '/agenda2',
      isSubItem: true,
    },
    {
      icon: <Sms size={20} color="#9CA3AF" />,
      label: 'News',
      href: '/news2',
      isSubItem: true,
    },
    {
      icon: <People size={20} color="#9CA3AF" />,
      label: 'Poll',
      href: '/polls',
      isSubItem: true,
    },
    {
      icon: <DocumentText size={20} color="#9CA3AF" />,
      label: 'Department Rules',
      href: '/rules',
      isSubItem: true,
    },
    {
      icon: <Setting2 size={20} color="#9CA3AF" />,
      label: 'Follow up system',
      href: '/followup2',
      isSubItem: true,
    },
  ];

  const SidebarItem = ({
    icon: IconComponent,
    label,
    href,
    isSubItem,
    hasSubmenu,
    isHighlighted,
  }: SidebarItem) => {
    const isActive = pathname === href;

    return (
      <Link href={href} style={{ width: '100%' }}>
        <Flex
          align="center"
          p={3}
          pl={isSubItem ? 8 : 3}
          cursor="pointer"
          borderRadius="md"
          bg={isActive ? activeBg : isHighlighted ? 'green.100' : 'transparent'}
          color={isActive ? activeColor : textColor}
          _hover={{
            bg: isActive ? activeBg : isHighlighted ? 'green.200' : 'gray.50',
          }}
          w="full"
          transition="all 0.2s"
          fontSize="sm"
          border={isHighlighted ? '2px solid' : 'none'}
          borderColor={isHighlighted ? 'green.400' : 'transparent'}
        >
          {IconComponent && <Box mr="3">{IconComponent}</Box>}
          <Text fontSize="14px" flex={1}>
            {label}
          </Text>
          {hasSubmenu && <ArrowDown2 size="16" color="#9CA3AF" />}
        </Flex>
      </Link>
    );
  };

  return (
    <Flex
      direction="column"
      h="100vh"
      w="250px"
      bg={bgColor}
      border="1px solid #CDD6E9"
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      {/* Fixed Header */}
      <Box p={2} borderColor="gray.100">
        <Flex align="center" justify="space-between" mb={4}>
          <Box position="relative" w="153px" h="62px">
            <Image
              src="/logo.png"
              alt="Description of image"
              fill // makes it responsive inside the Box
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
          <Box as="button" p={2}>
            <Text fontSize="lg" color="gray.400">
              ←
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Scrollable Content */}
      <Box flex={1} overflowY="auto" p={4}>
        <VStack gap={1} align="stretch">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </VStack>
      </Box>

      {/* Fixed Bottom Section */}
      <Box p={4} borderTop="1px solid" borderColor="gray.100">
        <VStack
          gap={3}
          align="stretch"
          border="1px solid #CDD6E9"
          borderRadius="10px"
          py="10px"
          px="14px"
        >
          <Flex
            align="center"
            justify="space-between"
            p={3}
            cursor="pointer"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            _hover={{ bg: 'gray.50' }}
          >
            <HStack gap={3}>
              <Box
                w="20px"
                h="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="lg">🇬🇧</Text>
              </Box>
              <Text fontSize="sm" color={textColor}>
                English
              </Text>
            </HStack>
            <ArrowDown2 size="16" color="#9CA3AF" />
          </Flex>

          {/* Dark Mode Toggle */}
          <Flex align="center" justify="space-between" p={3}>
            <Text fontSize="sm" color={textColor}>
              Dark mode
            </Text>
            <Box
              w="44px"
              h="24px"
              bg="gray.200"
              borderRadius="full"
              position="relative"
              cursor="pointer"
              _hover={{ bg: 'gray.300' }}
            >
              <Box
                w="20px"
                h="20px"
                bg="white"
                borderRadius="full"
                position="absolute"
                top="2px"
                left="2px"
                transition="all 0.2s"
                shadow="sm"
              />
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Sidebar;
