$(document).ready(function () {
    $("btnSignUp").click(function () {
        var isValid = true
        isValid = requiredTextField("FName", "Your name", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("LName", "Your name", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Email", "Your email", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Password", "Your password", null, 15)
        if (!isValid) { return isValid }
        
        isValid = requiredTextField("CPassword", "Your confirm password", null, 15)
        if (!isValid) { return isValid }


        isValid = requiredTextField("Mobile", "Your mobile number ", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Gender", "Your gender ", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Address1", "Your address1", null, 15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Address2", "Your address2", null, 15)
        if (!isValid) { return isValid }
    })
})