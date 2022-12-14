import { Divider, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md'
import { GiBuyCard } from 'react-icons/gi'
import Image from 'next/image'

const links = [
  {
    text: 'Statistics',
    href: '/admin/home',
    icon: MdSpaceDashboard,
    location: 'Admin__home',
  },
  {
    text: 'Orders',
    href: '/admin/orders',
    icon: GiBuyCard,
    location: 'Admin__orders',
  },
]

const AdminSidebar = ({ location, bg }) => {
  return (
    <VStack
      h="100vh"
      bg={bg ? bg : 'var(--admin_sidebar_color2)'}
      boxShadow="xl"
      spacing={'20px'}
      py="5px"
      px={0}
      pos="fixed"
      left={-4}
      top={0}
      zIndex={10}
    >
      <HStack w="full" justify="center">
        <Image
          src="/admin_images/Admin Logo.jpg"
          width={70}
          height={60}
          alt={'admin_logo'}
        />
      </HStack>
      <Divider />
      <VStack w="full" px="0px" alignItems={'flex-start'}>
        {links.map((ele, ind) => (
          <HStack
            key={`${new Date().getMilliseconds()}_${ind}`}
            w="96%"
            justifyContent="flex-start"
            px="60px"
            py="15px"
            borderRightRadius="10px"
            cursor={'pointer'}
            _hover={{ bg: bg ? 'grey' : 'white', color: bg ? 'white' : 'grey' }}
            bg={location === ele.location && 'white'}
            transition="all 0.3s ease-in-out"
          >
            <Icon fontSize={23} as={ele.icon} />
            <Text
              fontSize={20}
              _hover={{ color: bg ? 'white' : 'grey' }}
              color={'grey'}
              fontWeight="600"
            >
              {ele.text}
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default AdminSidebar