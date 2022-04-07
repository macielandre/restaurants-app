/* eslint-disable no-template-curly-in-string */
const yup = require('yup')

yup.setLocale({
    mixed: {
        required: "${path} it's a required field",
        oneOf: '${path} must be one of: ${values}',
        notType: '${path} must be ${type}',
        default: '${path} invalid'
    },
    number: {
        min: '${path} should be inside 0 to 9999'
    },
    string: {
        min: '${path} is invalid and must have at least ${min} characters',
        max: '${path} is invalid and must have at least ${max} characters'
    }
})

yup.validateSchema = async (schema, value) => {
    try {
        return await schema.validate(value, { abortEarly: true, stripUnknown: true })
    } catch (error) {
        const { message: yupErrorMessage = 'failure validating fields' } = error

        throw { statusCode: 400, message: message || yupErrorMessage }
    }
}

module.exports = yup
