import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from "./NewBookingForm.styles";
import { Formik, Form, Field } from "formik";
import InputField from "../../../../components/InputField";
import { DatePicker } from "antd";
import { Button } from "react-bootstrap";

class NewBookingForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      initialValues: {
        name: "",
        noOfPeople: "",
        contactNumber: "",
        date: "",
        comment: "",
      },
    };
  }

  componentDidMount = () => {
    console.log("NewBookingForm mounted");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NewBookingFormWrapper">
        <Formik
          initialValues={this.state.initialValues}
          onSubmit={(values) => {
            this.props.handleCreateBooking(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <InputField name="name" label="Name" />
              <InputField name="noOfPeople" label="Number of People" />
              <InputField name="contactNumber" label="Contact Number" />
              <Field name="date">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <div>
                    <label for={`input-date`}>Date & Time</label>
                    <DatePicker
                      showTime
                      id={`input-date`}
                      className="form-control input mt-2 mb-3"
                      onChange={(value) =>
                        setFieldValue("date", value.toISOString())
                      }
                    />
                  </div>
                )}
              </Field>
              <InputField name="comment" label="Comments" />
              <Button type="submit" className="float-end">
                Confirm Booking
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

NewBookingForm.propTypes = {
  // bla: PropTypes.string,
};

NewBookingForm.defaultProps = {
  // bla: 'test',
};

export default NewBookingForm;
