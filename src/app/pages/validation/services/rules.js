const validations = {
    email: (name, value) => {
        let re = /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let validator = {
            isValid: true,
            message: '',
        };

        let valid = re.test(value);
        if (!valid) {
            validator.isValid = valid;
            validator.message = `${name}: Email format is not valid`;
        }

        return validator;
    },
};

export const ruleNames = Object.keys(validations);

export const validate = (rule, name, value) => {
    return validations[rule](name, value);
};