const { GoogleGenerativeAI } = require("@google/generative-ai");
const formatResponse = require("../utils/formatResponse");
require('dotenv').config();

const google_key = process.env.GOOGLE_API_KEY;
const ia_model = process.env.IA_MODEL;
const instructions = process.env.SYSTEM_INSTRUCTIONS;

const genAI = new GoogleGenerativeAI(google_key);
const model = genAI.getGenerativeModel({
    model: ia_model,
    systemInstruction: instructions,
});

module.exports = {

    askGetResponse: async function (question) {

        const contents = {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: question }],
                }
            ],
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.5,
            }
        };

        return await this.getResponse(contents);

    },

    getResponse: async function (contents) {

        try {

            const result = await model.generateContent(contents);
            const response = result.response;
            return formatResponse.replaceCharacters(response.text());

        } catch (error) {

            console.error('SERVER ERROR:', error);
            return null;

        }

    }

};