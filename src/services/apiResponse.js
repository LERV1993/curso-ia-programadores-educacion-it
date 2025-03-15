module.exports = {

    successWithData: function (data) {

        return { status: true, message: "The request has been successfully processed", responseData: data };

    },

    successWithoutData: function () {

        return { status: true, message: "The request has been successfully processed", responseData: [] };

    },

    errorWithoutData: function (error) {

        return { status: false, message: 'Error: ' + error, responseData: [] };

    }


}