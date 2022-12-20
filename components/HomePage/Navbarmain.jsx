import {EditIcon, UnlockIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Hide,
  Image,
  Link,
  ListItem,
  Show,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {HiShoppingCart} from "react-icons/hi";
import React, {useEffect, useState} from "react";
import MenuBar from "./Menu";
import axios from "axios";

export const Navbarmain = () => {
  return (
    <>
      <Box bg="#0e1823">
        <Box
          // border={"1px solid"}
          display="flex"
          w={{base: "100%", sm: "95%"}}
          m="auto"
          p={4}
          justifyContent="space-between"
          color="white"
          alignItems={"center"}
        >
          <Box
            display="flex"
            justifyContent="center"
            // border={"1px solid"}
            alignItems={"center"}
            w={"10%"}
          >
            <Link href="/">
              {" "}
              <Image
                ml={"24"}
                m={"auto"}
                src="/admin_images/Colorlogowithbackground.svg"
                w={20}
              />
            </Link>
          </Box>
          <Hide breakpoint="(max-width: 980px)">
            <Box w={"60%"}>
              <UnorderedList
                display={"flex"}
                justifyContent="space-around"
                textDecor="none"
                listStyleType={"none"}
                fontWeight="semibold"
              >
                <Link href="/category/bestseller">
                  {" "}
                  <ListItem>BestSeller</ListItem>
                </Link>
                <Link href="/category/skincare">
                  {" "}
                  <ListItem>SkinCare</ListItem>
                </Link>
                <Link href="/category/makeup">
                  <ListItem>Makeup</ListItem>
                </Link>
                <Link href="/category/haircare">
                  <ListItem>HairCare</ListItem>
                </Link>
                <Link href="/category/bathbody">
                  <ListItem>Bath&Body</ListItem>
                </Link>
                <Link href="/category/perfume">
                  <ListItem>Fragrance</ListItem>
                </Link>
              </UnorderedList>
            </Box>
          </Hide>

          <Box
            alignItems={"center"}
            display="flex"
            justifyContent={"space-between"}
            gap={5}
          >
            {/* //   <Show breakpoint="(max-width: 980px)">
          //     <Heading>Welcome</Heading>
          //   </Show> */}
            <Hide breakpoint="(max-width: 980px)">
              <Link href="/signup">
                <Button
                  color={"white"}
                  colorScheme="transparent"
                  outlineColor={"white"}
                  _hover={{border: "none"}}
                >
                  <EditIcon color={"white"} mr={2} />
                  Register
                </Button>
              </Link>
              <Link href="/login" _hover={{border: "none"}}>
                <Button
                  colorScheme="transparent"
                  color={"white"}
                  outlineColor={"white"}
                >
                  <UnlockIcon color={"white"} mr={2} />
                  Login
                </Button>
              </Link>
            </Hide>
          </Box>
          <Hide breakpoint="(max-width: 980px)">
            <Link href="/cart" _hover={{border: "none"}}>
              <Box
                fontSize={20}
                display="flex"
                color={"white"}
                outlineColor={"white"}
                alignItems="center"
                gap={2}
              >
                <HiShoppingCart color={"white"} mr={2} />
                <Text>Cart</Text>
              </Box>
            </Link>
          </Hide>
          <Show breakpoint="(max-width: 980px)">
            <Box display="flex" alignItems="center" gap={10}>
              <Link href="/cart">
                <Box
                  fontSize={24}
                  display="flex"
                  color={"white"}
                  outlineColor={"white"}
                  alignItems="center"
                  gap={2}
                >
                  <HiShoppingCart color={"white"} mr={2} />
                  {/* <span
                  style={{
                    position: "relative",
                    top: "-10px",
                    right: "15px",
                  }}
                >
                  {props.len.length}
                </span> */}
                </Box>
              </Link>
              <MenuBar />
            </Box>
          </Show>
        </Box>
      </Box>
    </>
  );
};
