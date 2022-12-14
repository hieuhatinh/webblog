function Validator(options) {
    let selectorRules = {};

    // hàm kiểm tra validate
    function validate(inputElement, rule) {
        let parrentElement = inputElement.closest(options.formGroupSelector)
        let errorElement = parrentElement.querySelector(options.formMessage)
        let errorMessage

        let ruleTests = selectorRules[rule.selector]
        let ruleTestsLength = ruleTests.length
        for (let i = 0; i < ruleTestsLength; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = ruleTests[i](formElement.querySelector(rule.selector + ':checked'))
                    break
                default:
                    errorMessage = ruleTests[i](inputElement.value.trim())
            }
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            parrentElement.classList.add('error')
        } else {
            errorElement.innerText = ''
            parrentElement.classList.remove('error')
        }
        return !errorMessage
    }

    let formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault()

            let isFormValid = true

            options.rules.forEach(rule => {
                let inputElement = formElement.querySelector(rule.selector)
                let isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            let enableInputs = formElement.querySelectorAll('[name]')

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]')

                    let formValues = Array.from(enableInputs).reduce((values, inputElement) => {
                        switch (inputElement.type) {
                            case 'radio':
                                break
                            case 'checkbox':
                                if (!inputElement.checked) {
                                    values[inputElement.name] = ''
                                    return values
                                }

                                if (!Array.isArray(values[inputElement.name])) {
                                    values[inputElement.name] = []
                                }

                                values[inputElement.name].push(inputElement.value)
                                break
                            default:
                                values[inputElement.name] = inputElement.value
                                break;
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                }
            }
        }

        // lặp qua các rule thực hiện onblur, oninput, ...
        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            let inputElement = formElement.querySelector(rule.selector)
            inputElement.onblur = () => {
                validate(inputElement, rule)
            }

            inputElement.oninput = () => {
                let parrentElement = inputElement.closest(options.formGroupSelector)
                let errorElement = parrentElement.querySelector(options.formMessage)
                errorElement.innerText = ''
                parrentElement.classList.remove('error')
            }
        })
    }
}

Validator.isRequired = (selector, message) => {
    return {
        selector,
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = (selector, message) => {
    return {
        selector,
        test: (value) => {
            let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = (selector, min, message) => {
    return {
        selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `Trường này phải có tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmPassword = (selector, getConfirmValue, message) => {
    return {
        selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập lại không chính xác'
        }
    }
}