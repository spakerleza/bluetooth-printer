import { isEmail, isEmpty } from "validator";
// import axios from "axios";
import { filter } from "lodash";

export const emailValidator = async (email) => {
    try  {
        // if (isEmail(email)) {
        //     const res = await axios({
        //         method: "GET",
        //         url: "https://api.mailgun.net/v3/address/validate",
        //         params: { address: email, api_key: process.env.REACT_APP_MAILGUN_PUBLIC_VALIDATION_KEY, mailbox_verification: false }
        //     });
        //     if (res.data.is_valid) {
        //         return true;
        //     }
        //     throw new Error();
        // } else {
        //     throw new Error();
        // }
        if(!isEmail(email)) {
            throw new Error();
        }
        return true;
    } catch(e) {
        return false;
    }
};

export const emptyValidator= (data) => {
    return filter(data, emptyData => {
        return isEmpty(emptyData.trim());
    });
}