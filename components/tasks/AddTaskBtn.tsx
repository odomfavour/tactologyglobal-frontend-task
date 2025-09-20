import { Button } from '@chakra-ui/react';
import { Add } from 'iconsax-react';

const AddTaskBtn = () => (
  <Button
    bg="#ffffff"
    w="100%"
    h="50px"
    borderRadius="12px"
    border="2px dashed #E5E7EB"
    display="flex"
    justifyContent="start"
    px="14px"
    py="10px"
    color="#6B7280"
    fontSize="14px"
    fontWeight="500"
    _hover={{
      border: '2px dashed #9CA3AF',
      bg: '#F9FAFB',
    }}
  >
    <Add size="16" style={{ marginRight: '8px' }} color="#464B50" />
    Add Task
  </Button>
);

export default AddTaskBtn;
