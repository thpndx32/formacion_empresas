export const json = {
    "title": "Completar Perfil",
    "logoHeight": "100px",
    "logoFit": "cover",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "personal-info",
        "elements": [
         {
          "type": "text",
          "name": "first-name",
          "title": "Nombre",
          "isRequired": true
         },
         {
          "type": "text",
          "name": "last-name",
          "startWithNewLine": false,
          "title": "Apellidos",
          "isRequired": true
         },
         {
          "type": "text",
          "name": "birthdate",
          "title": "Date of birth",
          "isRequired": true,
          "inputType": "date"
         }
        ],
        "title": "Información Básica"
       },
       {
        "type": "text",
        "name": "email",
        "title": "Email",
        "inputType": "email",
        "placeholder": "mail@example.com"
       },
       {
        "type": "comment",
        "name": "question1",
        "title": "Acerca de Mi"
       },
       {
        "type": "panel",
        "name": "location",
        "elements": [
         {
          "type": "dropdown",
          "name": "country",
          "title": "País",
          "choicesByUrl": {
           "url": "https://surveyjs.io/api/CountriesExample"
          }
         }
        ],
        "title": "Ubicación"
       },
       {
        "type": "text",
        "name": "salary",
        "title": "Tarifa por Hora",
        "validators": [
         {
          "type": "numeric"
         }
        ],
        "inputType": "number"
       },
       {
        "type": "file",
        "name": "resume",
        "title": "Upload your resume",
        "acceptedTypes": "application/pdf"
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "completeText": "Send",
    "widthMode": "static",
    "width": "800px"
   }