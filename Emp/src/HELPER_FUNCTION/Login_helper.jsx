

//remove select style or arrow

const customDropdownIndicator = () => null;

const customStyles = {
    control: (provided) => ({
        ...provided,
        maxHeight: '100px',
        maxWidth: '100%',
        borderBottom: 'none',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
};

// ---------------------------------------------------------------------------------

//data

const options1 = [
    { value: "Education", label: "Education" },
    { value: "Sales", label: "Sales" },
    { value: "Science & Technology", label: "Science & Technology" },
    { value: "Cunstruction", label: "Cunstruction" },
    { value: "Accounting", label: "Accounting" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Markiting", label: "Markiting" }
];

const Current_CTC = [
    { value: "< $ 5K", label: "< $ 5K " },
    { value: "$ 10K", label: "$ 10K" },
    { value: "$ 15K", label: "$ 15K" },
    { value: "$ 20K", label: "$ 20K" },
    { value: "$ 25k", label: "$ 25k" },
    { value: "$ 30K", label: "$ 30K" },
    { value: "$ 35K", label: "$ 35K" },
    { value: "> $ 40k", label: "> $ 40k" }
];

const Expected_CTC = [
    { value: "< $ 5K", label: "< $ 5K " },
    { value: "$ 10K", label: "$ 10K" },
    { value: "$ 15K", label: "$ 15K" },
    { value: "$ 20K", label: "$ 20K" },
    { value: "$ 25k", label: "$ 25k" },
    { value: "$ 30K", label: "$ 30K" },
    { value: "$ 35K", label: "$ 35K" },
    { value: "> $ 40k", label: "> $ 40k" }
];

// -------------------------------------------------------------------------------------------------------------------- 

// Validation function for email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// -------------------------------------------------------------------------------------------------------------------- 

function isStrongPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if the password meets all criteria
    const isStrong =
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;

    return isStrong;
}

// ------------------------------------------------------------


// sending mail for forgot password 

const send_forgotPassword_email = async (forgotPassword, user_email, dispatch, set_forgot_password, toast, set_React_loader) => {




    try {

        dispatch(set_React_loader(true))

        const res = await forgotPassword(user_email)

        dispatch(set_React_loader(false))

        if (res.data) {

            toast.success('Password Reset link sended to Registerd Email')
            set_forgot_password(false)

        }

        else if (res.error) { toast.error(res.error.data.val) }

    }

    catch (error) {
        console.log('error', error)
        dispatch(set_React_loader(false))
        toast.error('Something went wrong.')
    }

}


// -------------------------------------------------------------------------------------------------------------------- 

//reset password

const reset_password = async (value, path, restPassword, toast, set_React_loader, dispatch) => {

    try {

        dispatch(set_React_loader(true))
        const res = await restPassword({ value: value, path: path })
        dispatch(set_React_loader(false))


        if (res.data) { toast.success('Password changed successfully.') }

        else if (res.error) { toast.error(res.error.data.val) }

    } catch (error) {

        dispatch(set_React_loader(false))
        toast.error('Something went wrong.')
    }

}

// ---------------------------------------------------------------------------------------------- 

// exporting functions 

export {

    customDropdownIndicator,

    customStyles, options1, Current_CTC, Expected_CTC,

    isStrongPassword, isValidEmail,

    send_forgotPassword_email, reset_password

}