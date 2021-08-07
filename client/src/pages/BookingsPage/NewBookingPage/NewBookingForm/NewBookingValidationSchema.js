import * as Yup from "yup";
const NewBookingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please Provide the booking name."),
  noOfPeople: Yup.string()
    // .email('Invalid email')
    .required("No. of people is required"),
  contactNumber: Yup.string().required("Please provide your contact information."),
  date: Yup.string().required("Please provide Date and time."),
});
export default NewBookingValidationSchema;
