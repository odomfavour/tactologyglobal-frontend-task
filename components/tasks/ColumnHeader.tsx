import { Tab } from '@/types/Tab';
import { Flex, HStack, Button, Box, Text } from '@chakra-ui/react';
import { Add } from 'iconsax-react';

const ColumnHeader: React.FC<{ tab: Tab; taskCount: number }> = ({
  tab,
  taskCount,
}) => (
  <Flex
    align="center"
    justify="space-between"
    bg={tab.color}
    borderRadius="8px"
    p={3}
    border="1px solid #E5E7EB"
  >
    <HStack gap={3}>
      <Box>{tab.icon}</Box>
      <Text fontSize="14px" fontWeight="600" color="#1A1C1E">
        {tab.label}
      </Text>
      <Box
        bg="#ffffff"
        borderRadius="full"
        px={2}
        py={1}
        minW="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="12px" fontWeight="500" color="#1A1C1E">
          ({taskCount})
        </Text>
      </Box>
    </HStack>
    <Button
      size="sm"
      bg="#ffffff"
      p={1}
      minW="auto"
      h="auto"
      _hover={{ bg: tab.color }}
    >
      <Add size="16" color="#6B7280" />
    </Button>
  </Flex>
);

export default ColumnHeader;
