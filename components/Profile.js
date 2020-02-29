import React from 'react';
import { Flex, Image, Heading, Text } from '@chakra-ui/core';

const Profile = ({ profile }) => {
  return (
    <Flex direction="column" align="center" justify="center">
      {profile.photoUrl ? (
        <Image
          src={profile && profile.photoUrl}
          alt="Profile image"
          rounded="full"
          size={['100px', '150px']}
        />
      ) : null}
      <div>
        <Heading as="h3">{profile && profile.name}</Heading>
        <Text>{profile && profile.email}</Text>
      </div>
    </Flex>
  );
};

export default Profile;
