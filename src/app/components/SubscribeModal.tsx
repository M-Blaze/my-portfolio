import React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'


const SubscribeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button size='md' variant='outline' className='border-2 uppercase border-primary rounded-full px-8 text-primary hover:text-yellow-400 transition-colors duration-200' onClick={onOpen}>Get notified</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className='py-4'>
          <ModalCloseButton />
          <ModalBody className='text-center pt-8'>
            <div className="block-header mb-6">
              <h3 className='text-xl'>Subscribe to my Newsletter</h3>
            </div>
            <form>
              <div className="input-group mb-4">
                <Input placeholder='Email*' required />
              </div>
              <div className="btn-group">
                <Button leftIcon={<EmailIcon />} colorScheme='twitter' variant='solid'>Subscribe</Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubscribeModal