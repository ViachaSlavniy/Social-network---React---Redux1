import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../../../redux/users-reducer";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

const UsersFormikSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {
    return (
        <Formik
            initialValues={{
                term: '',
                friend: 'null',
            }}
            validate={(values) => {
                const errors = {};
                return errors;
            }
            }
            onSubmit={(values: FormType, { setSubmitting }:{setSubmitting: (isSubmitting: boolean) => void}) => {
               const filter:FilterType = {
                   term: values.term,
                   friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
               }
                onFilterChanged(filter);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="text" name="term" />
                    </div>
                    <div>
                        <Field as="select" name="friend">
                            <option value="null">All users</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
})

export default UsersFormikSearchForm;