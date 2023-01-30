function requiredTextField(controlId, errorMessage, validationType = "all") {
    var Id = "#txt" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId

    var txtVal = $(Id).val()
    if (txtVal == "" || txtVal == undefined || txtVal == "null") {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please Enter " + errorMessage)

        return false
    }
    else {
        if (!getValidationType(validationType).test(txtVal)) {
            $(formGroup).addClass("error-control")
            $(errorField).addClass("error-control")
            $(errorField).html("Please Enter valid " + errorMessage)

            return false
        }
        else {
            $(formGroup).removeClass("error-control")
            $(errorField).removeClass("error-control")
            $(errorField).html("")
            return true
        }
    }
}

function requiredSelectField(controlId, errorMessage) {
    var Id = "#ddl" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId

    var ddlVal = $(Id).val()
    if (ddlVal == "-1" || ddlVal == undefined || ddlVal == null || ddlVal == 0) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please select " + errorMessage)
        return false

    }
    else {
        $(formGroup).removeClass("error-control")
        $(errorField).removeClass("error-control")
        $(errorField).html("")
        return true
    }
}


function getValidationType(validationType) {
    var rgx = ""
    switch (validationType) {

        case "email":
            rgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            break;

        case "mobile":
            regx = /^(\+\d{1,3}[- ]?)?\d{10}$/
            break;


        default:
            regx = /.*/
            break;
    }
    return rgx
}