import React from 'react';
import {
  Container, User, UserName, UserAvatar,
} from './styles';

const CurrentUser = () => (
  <Container>
    <User>
      <UserName>viniciuspsw</UserName>
      <UserAvatar src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:1e661c6b-bd48-4d7e-b2c7-75d8dac475a4/fdcd4642-a699-4a79-8205-ea49ab0013bc/128" />
    </User>
  </Container>
);

export default CurrentUser;
