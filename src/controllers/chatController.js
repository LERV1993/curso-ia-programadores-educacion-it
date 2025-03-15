const chatResponseServ = require("../services/chatResponse");
const apiResponseServ = require("../services/apiResponse");


module.exports = {


    askText: async function (req, res) {

        try {

            const { question } = req.body;

            // ---- La pregunta no puede estar vacía, ser simplemente espacios o no ser un string.
            if (!question || question.trim().length == 0 || typeof question != "string") {

                console.error('Invalid question:', question);
                const err = 'The question to be answered cannot be empty or in an invalid format.'
                return res.status(400).json(apiResponseServ.errorWithoutData(err));

            }

            const chatResponse = await chatResponseServ.askGetResponse(question);
            return res.status(200).json(apiResponseServ.successWithData(chatResponse));

        } catch (error) {

            return res.status(500).json(apiResponseServ.errorWithoutData(error));

        }


    },

    askFile: function (req, res) {
        /* TODO: logica para archivos como input */
    }

}