const defaultValidator = {
    isValid: true,
    message: '',
};

const validations = {
    email: (name, value) => {
        let re = /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validator = Object.assign({}, defaultValidator);

        if (!re.test(value)) {
            validator.isValid = false;
            validator.message = `${name} is not a valid email address`;
        }

        return validator;
    },
};

export const ruleNames = Object.keys(validations);

export const validate = (rule, name, value) => {
    return validations[rule](name, value);
};