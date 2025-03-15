
# API NODEJS GEMINI - Curso de IA Educación IT

La aplicación es un backend en NodeJS conectada a la IA de Google "Gemini" para poder responder consultas.
Se encuentra dockerizada para ser utilizada en cualquier sistema operativo.
El apartado para procesar archivos no se encuentra disponible al momento.





## API Referencias

#### Responder preguntas

```http
  POST /api/chat-response
```

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `question` | `string` | Recibe una pregunta en texto que no puede estar vacío ni ser distinto de string  |

#### Responder Preguntas devuelve

*status*: boolean - Correcta ejecución de la operación

*message*: string - Breve mensaje del servidor

*responseData*: string - Respuesta





## Variables de entorno

Para correr el proyecto deberá agregar las siguientes variables de entorno a su archivo env ubicado en la raiz del proyecto.

`GOOGLE_API_KEY` | string : La clave de la API : [IA STUDIO GOOGLE](https://aistudio.google.com/apikey)

`IA_MODEL` | string : Modelo a utilizar para responder [DOCUMENTACION](https://ai.google.dev/gemini-api/docs/models/gemini?hl=es-419)

`SYSTEM_INSTRUCTIONS` | string : Instrucciones de alto nivel para delimitar el formato de las respuestas (Ej.: "Responde como un veterinario")

`PORT` | number - Opcional: Por defecto es el 4000, en caso de usar otro adaptar el archivo docker-compose.yml


## Instalación

```bash
git clone <URL_REPO>

cd <Carpeta con proyecto>
npm i 
```

Completar archivo .env con los datos detallados anteriormente.
```bash
Opcion 1) npm start
Opcion 2) docker compose up --build

```


    
## Autor

- [@LERV1993](https://github.com/LERV1993)


## Agradecimientos

Muchas gracias a la gente que es parte del aprendizaje como docentes y facilitadores del conocimiento.
A educación IT por el [Curso de IA para programadores](https://www.educacionit.com/curso-de-ia-para-programadores) y al profesor [Martín Paladino](https://github.com/martin-paladino) por todo lo que aprendimos y su ayuda en cada paso de este curso.
