import {
    Box,
    Flex,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
    import { Link } from "react-router-dom";
  
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <div>
        <Box h={"20 0px"} bgColor={"#F5F5F8"}>
          <Flex>
            <Box w={"50%"} m={"16px 60px"}>
              <Link to={"/"}>
                <Box w={'20%'}>Chronicles</Box>
              </Link>
              <Stack direction={"row"} spacing={8} mt={"32px"}>
                <Link to={"https://twitter.com/"}>
                  <FaTwitter size={"24px"} color="#1A202C" />
                </Link>
                <Link to={"https://www.youtube.com/"}>
                  <FaYoutube size={"24px"} color="#1A202C" />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <FaInstagram size={"24px"} color="#1A202C" />
                </Link>
              </Stack>
              <Text fontSize={"sm"} mt={"54px"} color={"gray.500"}>
                © 2023 Chronicles. All rights reserved
              </Text>
            </Box>
            <Box w={"50%"} m={"16px 60px"}>
              
            </Box>
          </Flex>
        </Box>
      </div>
    );
  };
  
  export default Footer;