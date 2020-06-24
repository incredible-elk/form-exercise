import React, { useState } from 'react';
import styled from 'styled-components/macro';

export default function ProfileForm() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    toc: false,
  });

  return (
    <main>
      <h1>Profil erstellen</h1>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*:</label>
        <InputStyled
          id="firstname"
          name="firstname"
          type="text"
          value={user.firstname}
          onChange={handleChange}
          placeholder="Your first name"
          required
        />
        <label htmlFor="lastname">Last Name*:</label>
        <InputStyled
          id="lastname"
          name="lastname"
          type="text"
          value={user.lastname}
          onChange={handleChange}
          placeholder="You last name"
          required
        />
        <label htmlFor="email">E-Mail*:</label>
        <InputStyled
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="e.g jane@doe.com"
          required
        />
        <label htmlFor="gender">Your gender*:</label>
        <SelectStyled
          id="gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Choose your gender
          </option>
          <option name="gender" value="female">
            female
          </option>
          <option name="gender" value="male">
            male
          </option>
          <option name="gender" value="diverse">
            diverse
          </option>
        </SelectStyled>
        <label htmlFor="toc">Accept our Terms of Contract*:</label>
        <CheckboxStyled
          id="toc"
          name="toc"
          type="checkbox"
          checked={user.toc}
          onChange={handleCheckbox}
          required
        ></CheckboxStyled>
        <SubmitButtonStyled>
          <ButtonStyled type="submit">Los geht's!</ButtonStyled>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
    </main>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    setUser({
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      toc: '',
    });
  }
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleCheckbox(event) {
    setUser({ ...user, [event.target.name]: event.target.checked });
  }
}

const FormStyled = styled.form`
  text-align: left;
  width: 360px;
  margin: 0 auto 0 auto;
`;

const InputStyled = styled.input`
  height: 32px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px 0 12px 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`;

const SelectStyled = styled.select`
  height: 32px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px 0 12px 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`;

const CheckboxStyled = styled.input`
  height: 10px;
  width: 10px;
`;

const TextStyled = styled.p`
  font-size: 12px;
`;

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
`;

const ButtonStyled = styled.button`
  color: #414756;
  font-size: 14px;
  height: 28px;
  width: 96px;
  background: #ff9a8d;
  border-radius: 8px;
  border: 28px;
`;
