import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ColorLogo from "./Images/ColorLogo.png";
import {CloseIcon, HamburgerIcon, SearchIcon} from "@chakra-ui/icons";
import {Brands} from "./NavbarDropDowns";
import {RxPerson} from "react-icons/rx";
import {CgShoppingCart} from "react-icons/cg";

export default function Navbar2() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Box
      w="100vw"
      pos="sticky"
      boxShadow={"md"}
      pb={2}
      zIndex={100}
      bg="#1a487a"
      top={0}
      color="white"
    >
      <Box display={{base: "none", md: "none", lg: "block"}}>
        <Flex justifyContent={"space-between"} alignItems="center" px={20}>
          <Box>
            <Image
              ml={"24"}
              src="/admin_images/Colorlogowithbackground.svg"
              w={20}
            />
          </Box>
          <Box>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search for a product or brand..."
                w="600px"
                outline="1px solid"
              />
              <InputRightElement>
                <Button variant="ghost">
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Flex gap={20}>
            <Button colorScheme={"white"} variant="ghost">
              <Icon as={RxPerson} mr={2} />
              Account
            </Button>
            <Button colorScheme={"white"} variant="ghost">
              <Icon as={CgShoppingCart} mr={2} />
              Cart
            </Button>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-around"}
          alignItems="center"
          px={20}
          mt={2}
          fontWeight={"semibold"}
          fontSize={"md"}
          // gap={8}
        >
          {/* <Brands /> */}
          <Text
            // border={"1px solid white"}
            p={4}
            borderWidth={3}
            borderRadius={"1.5rem"}
          >
            Holiday Shop
          </Text>

          <Text>Bestsellers</Text>
          <Text>Skin Care</Text>
          <Text>Makeup</Text>
          <Text>Hair Care</Text>
          <Text>Bath & Body</Text>
          <Text>Fragrance Shop</Text>
        </Flex>
      </Box>
      <Box w="100vw" display={{lg: "none"}}>
        <Flex
          w="100%"
          gap={10}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{lg: "none"}}
            size="md"
            onClick={isOpen ? onClose : onOpen}
          />
          <SearchIcon />
          <Box>
            <Image
              src={ColorLogo}
              alt="website-logo"
              w="80px"
              h="50px"
              borderRadius="full"
            />
          </Box>
          <Flex gap={20}>
            <Button size="xs" variant="ghost">
              <Icon as={RxPerson} mr={2} />
              Account
            </Button>
            <Button size="xs" variant="ghost">
              <Icon as={CgShoppingCart} mr={2} />
              Cart
            </Button>
          </Flex>
        </Flex>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{lg: "none"}}>
          <VStack
            justifyContent="start"
            alignItems="flex-start"
            mx={10}
            wrap="wrap"
          >
            <Brands />
            <Text>Holiday Shop</Text>
            <Text>Browse By</Text>
            <Text>Bestsellers</Text>
            <Text>Skin Care</Text>
            <Text>Makeup</Text>
            <Text>Hair Care</Text>
            <Text>Bath & Body</Text>
            <Text>Fragrance Shop</Text>
            <Text>Tools & Devices</Text>
            <Text>Gift & Sets</Text>
            <Text>BeautyFIX</Text>
            <Text>Offers</Text>
            <Text>New</Text>
            <Text>Skin 101</Text>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}