import * as React from "react";
import styled from "styled-components";

const ContactCon = styled.div`
  width: 50%;
  height: 100%;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 12rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  height: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  width: 36rem;
  margin-top: 1rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 3.5rem;
  letter-spacing: 0.5rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  padding: 1rem;
  border-radius: 1rem;
  width: 36rem;
`;

const NameInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 1rem;
  font-family: "Montserrat";
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

const EmailInput = styled.input`
  width: 88.5%;
  padding: 1rem;
  margin: 1rem 1rem;
  font-family: "Montserrat";
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

const Message = styled.textarea`
  width: 88.5%;
  padding: 1rem;
  margin: 1rem 1rem;
  height: 40%;
  font-family: "Montserrat";
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background: rgb(81, 120, 130);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.25rem;
  color: white;
  transition: 0.5s;
  :hover {
    background: rgb(54, 80, 87);
  }
  font-family: "Montserrat";
`;

export const Contact = () => {
  return (
    <ContactCon>
      <Title>CONTACT US</Title>
      <Form>
        <NameInputs>
          <NameInput type="text" placeholder="First Name" />
          <NameInput type="text" placeholder="Last Name" />
        </NameInputs>
        <EmailInput type="email" placeholder="Email Address" />
        <Message placeholder="Your Message..." />
        <Button>Submit</Button>
      </Form>
    </ContactCon>
  );
};
