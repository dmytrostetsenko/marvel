import { useState } from "react";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import * as Yup from 'yup'

import ErrorMassage from "../errorMassage/ErrorMassage";
import MarvelService from "../../services/MarvelService";
import './charSearchForm.scss'

const CharSearchForm = ({onCharSelected}) => {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = MarvelService();

    const onCharLoaded = (char) => {
        setChar(char)
        if(char.length > 0){
            onCharSelected(char[0].id)
        }
    }

    const updateChar = (name) => {
        clearError();
        getCharacterByName(name).then(onCharLoaded)
    }

    const errorMassage = error ? <div className="char__search-critical-error"><ErrorMassage /></div> : null;
    const results = !char ? null : char.length > 0 ? null : 
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>;

    return ( 
        <div className="char__search-form">
            <Formik
                initialValues={{
                    charName : ''
                }}
                validationSchema={Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit={({charName}) => {
                    updateChar(charName)
                    
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field 
                            id="charName" 
                            name='charName' 
                            type='text' 
                            placeholder="Enter name"/>
                        <button 
                            type='submit' 
                            className="button button__main"
                            disabled={loading}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {results}
            {errorMassage}
        </div>
     );
}
 
export default CharSearchForm;