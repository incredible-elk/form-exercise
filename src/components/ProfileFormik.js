import React from 'react';
import { Formik } from 'formik';

export default function ProfileFormik() {
  return (
    <div>
      <h1>Create Profile</h1>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          gender: '',
          toc: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
            />
            {errors.text && touched.firstname && errors.firstname}
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
            {errors.text && touched.lastname && errors.lastname}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <select
              type="text"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
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
            </select>
            {errors.text && touched.gender && errors.gender}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
