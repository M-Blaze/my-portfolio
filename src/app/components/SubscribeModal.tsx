import React, { useState } from 'react'

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
  const [email, setEmail] = useState<string>('')
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const submitHandler = (e: React.FormEvent) => {
    setIsSubscribing(true)
    e.preventDefault()
    console.log(email)
  }

  return (
    <>
      <Button size='md' variant='outline' className='border-2 uppercase border-primary rounded-full px-8 text-primary hover:text-yellow-400 transition-colors duration-200' onClick={onOpen}>Get notified</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent className='py-4'>
          <ModalCloseButton />
          <ModalBody className='text-center py-8'>
            <div className="block-header mb-6">
              <h3 className='text-xl font-bold'>Subscribe to my Newsletter</h3>
            </div>
            <form onSubmit={submitHandler}>
              <div className="input-group mb-8">
                <Input type='email' placeholder='Email*' required value={email} onChange={changeHandler} />
              </div>
              <div className="btn-group">
                <Button type='submit' leftIcon={<EmailIcon fontSize='20px' />} colorScheme='twitter' variant='solid' className='bg-sky-600 text-white uppercase' size='md' isLoading={isSubscribing}>Subscribe</Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubscribeModal