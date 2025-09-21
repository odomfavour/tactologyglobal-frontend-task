'use client';

import {
  Box,
  VStack,
  Text,
  Flex,
  NativeSelectRoot,
  NativeSelectField,
  Switch,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  Home,
  User,
  DocumentText,
  Profile2User,
  Calendar,
  Building,
  Sms,
  People,
  Calendar2,
  Setting2,
  Call,
  ClipboardText,
  Notification,
  Book,
  SecurityUser,
  UserEdit,
  ArrowDown2,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

interface SidebarItemType {
  icon?: ReactNode;
  label: string;
  href?: string;
  children?: SidebarItemType[];
}

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isMobileOpen: boolean;
}

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
}: SidebarProps) => {
  const pathname = usePathname();
  const bgColor = 'white';
  const textColor = 'gray.700';
  const activeColor = 'teal.600';
  const activeBg = 'teal.50';

  const sidebarItems: SidebarItemType[] = [
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
      children: [
        { label: 'News', href: '/news' },
        { label: 'Members', href: '/members' },
        { label: 'To - Do', href: '/tasks' },
        { label: 'Form Task', href: '/forms' },
        { label: 'Agenda', href: '/calendar' },
        { label: 'Follow up system', href: '/followup' },
        {
          label: 'Group Settings',
          children: [
            { label: 'Sub Setting A', href: '/settings/a' },
            { label: 'Sub Setting B', href: '/settings/b' },
          ],
        },
      ],
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
      children: [
        { label: 'Agenda', href: '/agenda2' },
        { label: 'News', href: '/news2' },
        { label: 'Poll', href: '/polls' },
        { label: 'Department Rules', href: '/rules' },
        { label: 'Follow up system', href: '/followup2' },
      ],
    },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const [selectedLang, setSelectedLang] = useState('en');
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSubmenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const SidebarItem = ({
    item,
    level = 0,
  }: {
    item: SidebarItemType;
    level?: number;
  }) => {
    const isActive = pathname === item.href;
    const isExpanded = expandedMenus[item.label] || false;
    const hasChildren = !!item.children?.length;

    return (
      <Box w="full">
        <Flex
          align="center"
          p={3}
          pl={isCollapsed ? 3 : 3 + level * 12}
          cursor="pointer"
          borderRadius="md"
          bg={isActive ? activeBg : 'transparent'}
          color={isActive ? activeColor : textColor}
          _hover={{ bg: isActive ? activeBg : 'gray.50' }}
          w="full"
          transition="all 0.2s"
          fontSize="sm"
          onClick={() => hasChildren && toggleSubmenu(item.label)}
        >
          {item.icon && <Box mr={isCollapsed ? 0 : 3}>{item.icon}</Box>}
          <Text
            fontSize="14px"
            flex={1}
            display={isCollapsed ? 'none' : 'block'}
            pl={level > 0 ? 5 : 0}
          >
            {item.label}
          </Text>
          {hasChildren && !isCollapsed && (
            <ArrowDown2
              size="16"
              color="#9CA3AF"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          )}
        </Flex>

        {/* Children */}
        {hasChildren && isExpanded && !isCollapsed && (
          <VStack align="stretch" gap={0}>
            {item.children?.map((child, i) => (
              <SidebarItem key={i} item={child} level={level + 1} />
            ))}
          </VStack>
        )}
      </Box>
    );
  };

  return (
    <Flex
      direction="column"
      h="100vh"
      w={{ base: '250px', md: isCollapsed ? '60px' : '250px' }}
      bg={bgColor}
      border="1px solid #CDD6E9"
      position="fixed"
      left={0}
      top={0}
      zIndex={20}
      transition="transform 0.3s ease, width 0.2s ease"
      transform={{
        base: isMobileOpen ? 'translateX(0)' : 'translateX(-100%)', // Use isMobileOpen prop
        md: 'translateX(0)',
      }}
    >
      <Box p={2} borderColor="gray.100">
        <Flex align="center" justify="space-between" mb={4}>
          <Box position="relative" w={isCollapsed ? '40px' : '153px'} h="62px">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
          <Button p={2} onClick={() => setIsCollapsed(!isCollapsed)}>
            <Text fontSize="lg" color="gray.400">
              {isCollapsed ? '→' : '←'}
            </Text>
          </Button>
        </Flex>
      </Box>

      {/* Scrollable Content */}
      <Box flex={1} overflowY="auto" p={2}>
        <VStack gap={1} align="stretch">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </VStack>
      </Box>

      {/* Bottom Section */}
      {!isCollapsed && (
        <Box p={4} borderTop="1px solid" borderColor="gray.100">
          <VStack
            gap={2}
            align="stretch"
            border="1px solid #CDD6E9"
            bg="#F7F7F7"
            borderRadius="10px"
            py="10px"
            px="14px"
          >
            <NativeSelectRoot size="sm" color="#6C7278">
              <NativeSelectField
                border="1px solid #FFFFFF"
                bg="#ffffff"
                borderRadius="6px"
                px="14px"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.label}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>

            <Flex align="center" justify="space-between" p={3}>
              <Text fontSize="sm" color={textColor}>
                Dark mode
              </Text>
              <Box>
                <Switch.Root size="sm">
                  <Switch.HiddenInput />
                  <Switch.Control />
                  <Switch.Label />
                </Switch.Root>
              </Box>
            </Flex>
          </VStack>
        </Box>
      )}
    </Flex>
  );
};

export default Sidebar;
