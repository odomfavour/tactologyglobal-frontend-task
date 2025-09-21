import React from 'react';
import { Portal, Dialog, CloseButton, Flex } from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  bg?: string;
  borderRadius?: string;
  backdropBg?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  title,
  bg = 'white',
  borderRadius = '16px',
}) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => e.open || onClose()}
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            w={{ base: '90vw', sm: '80vw', md: '50vw' }}
            maxW={
              size === 'sm'
                ? '400px'
                : size === 'md'
                ? '500px'
                : size === 'lg'
                ? '600px'
                : '800px'
            }
            bg={bg}
            borderRadius={borderRadius}
          >
            {title && (
              <Dialog.Header>
                <Dialog.Title fontSize="24px" fontWeight="600" color="#1A1C1E">
                  {title}
                </Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body p={title ? 4 : 6}>{children}</Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <Flex justifyContent="end" mb="4px">
                <CloseButton
                  size="sm"
                  borderRadius="full"
                  h="45px"
                  w="45px"
                  bg="#F6F6FA"
                  color="#252A41"
                  _hover={{ bg: 'transparent' }}
                />
              </Flex>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
