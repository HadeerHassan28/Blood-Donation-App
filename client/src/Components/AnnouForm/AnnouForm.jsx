import React, { useState } from 'react';
import styles from './AnnouForm.module.css'
import { useFormik } from 'formik'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useTranslation } from "react-i18next";

const AnnouForm = ({ TokenData }) => {
    const [orgnizationData, setorgnizationData] = useState(TokenData)
    const { t } = useTranslation();

    function handlePost(values) {
        axios.post("http://localhost:3005/announcements", values);
        toast.success("Announcement Added Successfully", {
            position: 'bottom-right'
        })


    }
    console.log(orgnizationData);


    function validate(values) {
        let errors = {};
        if (!values.bloodType) {
            errors.bloodType = "Please Select Blood Type";

        } else if (!values.quantity) {
            errors.quantity = "Please Enter Quantity Of Blood You Need";
        }

        else if (!values.message) {
            errors.message = "Please Enter Your Message";
        }
        return errors;
    }


    let formik = useFormik(
        {
            initialValues: {
                bloodType: '',
                quantity: '',
                message: '',
                orgData: orgnizationData,
            },
            validate,
            onSubmit: handlePost

        }
    )

    return <>
        <div className="container py-5">
            <div className="text-center p-2">
                <h2 className="text-danger">{t("Make an Announcement")}</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className='py-4'>

                <div className="form-group mb-4">
                    <label className='mb-2' htmlFor="bloodType">{t("Select Blood Type")} :</label>
                    <select value={formik.values.bloodType} onChange={formik.handleChange} onBlur={formik.handleBlur} name="bloodType" id="bloodType" className=' form-control'>
                        <option label={t("Select Blood Type")} hidden></option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    {formik.errors.bloodType && formik.touched.bloodType ? <div className="alert alert-danger mt-2 p-1">{formik.errors.bloodType}</div> : null}

                </div>

                <div className="form-group mb-4">
                    <label className='mb-2' htmlFor="quantity">{t("quantity")} :</label>
                    <input value={formik.values.quantity} onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name="quantity" id="quantity" className='form-control' placeholder='Enter Quantity of Blood' />
                    {formik.errors.quantity && formik.touched.quantity ? <div className="alert alert-danger mt-2 p-1">{formik.errors.quantity}</div> : null}

                </div>

                <div className="form-group mb-4">
                    <label className='mb-2' htmlFor="message">{t("Message")} :</label>
                    <textarea value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' name="message" id="message" cols="30" rows="10" placeholder={t('Enter Message')}></textarea>
                    {formik.errors.message && formik.touched.message ? <div className="alert alert-danger mt-2 p-1">{formik.errors.message}</div> : null}

                </div>

                <button type='submit' className='btn btn-danger'>{t("Announce")}</button>

            </form>

        </div>

    </>
}

export default AnnouForm;
