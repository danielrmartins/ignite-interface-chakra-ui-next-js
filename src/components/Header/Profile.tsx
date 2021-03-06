import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Daniel Martins</Text>
          <Text color="gray.300" fontSize="small">daniel@gmail.com</Text>
        </Box>
      }


      <Avatar size="md" name="Daniel Martins" src="https://github.com/danielrmartins.png" />
    </Flex>
  );
}