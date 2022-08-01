import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import profile from "../../assets/custom/apple-touch-icon.png";


function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Avatar src={profile} size="md" />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                href={"#home"}
              >
                Home
              </Button>

              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                href={"#aboutme"}
              >
                About me
              </Button>

              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                href={"#projects"}
              >
                Projects
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                href={"#social"}
              >
                Social
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
