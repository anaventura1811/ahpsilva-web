import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './styles';
import logo from '../../assets/logo/AntonioPereira-01.png';

type Props = {};

const SignIn = (props: Props) => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"><img src={logo} alt={'Logo do site AHP Silva'}/></Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Acesse a sua conta</FormH1>
              <FormLabel htmlFor='for'>
                Email
              </FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor='for'>
                Senha
              </FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">
                  Continuar
                </FormButton>
                <Text>Esqueci minha senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;