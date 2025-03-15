module.exports = {

    /**
     * @param {string} response Respuesta obtenida de la api de google.
     * Las respuestas a veces poseen tabulaciones o saltos de lineas que pueden llegar a dar malos entendidos por esos se quitan
     * @returns string response sin \n o \t
     */
    replaceCharacters: function (response) {
        return response.replace(/\n|\t/g, "");
    }

}