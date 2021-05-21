import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';

const urlRegExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const InputCustom = styled.input`
width:300px;
line-height:15px;
padding:8px;
border-radius:5px;
margin:24px 0;
`;
const SignForm = styled.form`
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Textarea = styled.textarea`
width:300px;
min-height:150px;
line-height:15px;
padding:8px;
border-radius:5px;
margin:24px 0;
resize:none;
`;
const Label = styled.span`
font-weight:bold;
`;

export const AnnouncmentForm = ({ onHandleSubmit, onClose, title = '', description = '', image = '', id }) => {
  const formik = useFormik({
    initialValues: {
      title,
      description,
      image,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(255, "Must be 15 characters or less")
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      description: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(255, "Must be 20 characters or less")
        .required("Required"),
      image: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required")
        .matches(urlRegExp)
    }),
    onSubmit: values => {
      onHandleSubmit({ ...values, id });
      onClose()
    },
  });
  return (
    <SignForm onSubmit={formik.handleSubmit}>
      <Label >Title:</Label>
      <Textarea
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder={'Write title'}
      />
      <Label >Tell us about your item:</Label>
      <Textarea
        id="description"
        name="description"
        type="textarea"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder={'Write description'}
      />
      <Label >Put image URL:</Label>
      <InputCustom
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
        placeholder={'Put item URL'}
      />
      <button type="submit" >Send</button>
    </SignForm>
  );
};