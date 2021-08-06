import React from "react";
import PropTypes from "prop-types";
//import { Test } from './InputField.styles';
import { Field } from "formik";
import { Form as BSForm } from "react-bootstrap";

const InputField = ({ name, type, placeholder, label, extraText }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }) => (
      <div>
        <BSForm.Group className="mb-3" controlId={`control-${name}`}>
          <BSForm.Label>{label}</BSForm.Label>
          <BSForm.Control type={type} placeholder={placeholder} {...field} />
          {extraText && (
            <BSForm.Text className="text-muted">
              We'll never share your email with anyone else.
            </BSForm.Text>
          )}
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </BSForm.Group>
      </div>
    )}
  </Field>
);

InputField.propTypes = {};

InputField.defaultProps = {};

export default InputField;
