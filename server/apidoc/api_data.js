define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_apidoc_main_js",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_apidoc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/event",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"Id\": 29,\n     \"Title\": \"309 Meetings\",\n     \"OwnerId\": \"2\",\n     \"StartTime\": \"05:05:00\",\n     \"EndTime\": \"06:05:05\",\n     \"StartDate\": \"2018-03-20\",\n     \"EndDate\": \"2018-03-20\",\n     \"Location\": \"TLA\",\n     \"Notes\": null,\n     \"Members\": [\n         {\n             \"Id\": 1,\n             \"Email\": \"lexi@gmail.com\",\n             \"Name\": \"lexi\"\n         },\n         {\n             \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n           \"Name\": \"Trevin\"\n         },\n         {\n             \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n             \"Name\": \"Bailey\"\n         },\n         {\n             \"Id\": 6,\n             \"Email\": \"anngould@iastate.edu\",\n             \"Name\": \"Ann Gould\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"Id\": 29,\n     \"Title\": \"309 Meetings\",\n     \"OwnerId\": \"2\",\n     \"StartTime\": \"05:05:00\",\n     \"EndTime\": \"06:05:05\",\n     \"StartDate\": \"2018-03-20\",\n     \"EndDate\": \"2018-03-20\",\n     \"Location\": \"TLA\",\n     \"Notes\": null,\n     \"Members\": [\n         {\n             \"Id\": 1,\n             \"Email\": \"lexi@gmail.com\",\n             \"Name\": \"lexi\"\n         },\n         {\n             \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n           \"Name\": \"Trevin\"\n         },\n         {\n             \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n             \"Name\": \"Bailey\"\n         },\n         {\n             \"Id\": 6,\n             \"Email\": \"anngould@iastate.edu\",\n             \"Name\": \"Ann Gould\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "name": "DeleteEvent"
  },
  {
    "type": "get",
    "url": "/event",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   [\n  {\n      \"Id\": 29,\n      \"Title\": \"309 Meetings\",\n      \"OwnerId\": \"2\",\n      \"StartTime\": \"05:05:00\",\n      \"EndTime\": \"06:05:05\",\n      \"StartDate\": \"2018-03-20\",\n      \"EndDate\": \"2018-03-20\",\n      \"Location\": \"TLA\",\n      \"Notes\": null,\n      \"Members\": [\n          {\n              \"Id\": 1,\n              \"Email\": \"lexi@gmail.com\",\n              \"Name\": \"lexi\"\n          },\n          {\n              \"Id\": 3,\n              \"Email\": \"tlnance@iastate.edu\",\n              \"Name\": \"Trevin\"\n          },\n          {\n              \"Id\": 5,\n              \"Email\": \"bmjensen@iastate.edu\",\n              \"Name\": \"Bailey\"\n          },\n          {\n              \"Id\": 6,\n              \"Email\": \"anngould@iastate.edu\",\n              \"Name\": \"Ann Gould\"\n          }\n      ]\n   },\n    {\n        \n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "name": "GetEvent"
  },
  {
    "type": "post",
    "url": "/event",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"Id\": 29,\n     \"Title\": \"309 Meetings\",\n     \"OwnerId\": \"2\",\n     \"StartTime\": \"05:05:00\",\n     \"EndTime\": \"06:05:05\",\n     \"StartDate\": \"2018-03-20\",\n     \"EndDate\": \"2018-03-20\",\n     \"Location\": \"TLA\",\n     \"Notes\": null,\n     \"Members\": [\n         {\n             \"Id\": 1,\n             \"Email\": \"lexi@gmail.com\",\n             \"Name\": \"lexi\"\n         },\n         {\n             \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n           \"Name\": \"Trevin\"\n         },\n         {\n             \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n             \"Name\": \"Bailey\"\n         },\n         {\n             \"Id\": 6,\n             \"Email\": \"anngould@iastate.edu\",\n             \"Name\": \"Ann Gould\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"Id\": 29,\n    \"Title\": \"309 Meetings\",\n    \"OwnerId\": \"2\",\n    \"StartTime\": \"05:05:00\",\n    \"EndTime\": \"06:05:05\",\n    \"StartDate\": \"2018-03-20\",\n    \"EndDate\": \"2018-03-20\",\n    \"Location\": \"TLA\",\n    \"Notes\": null,\n    \"Members\": [\n        {\n            \"Id\": 1,\n            \"Email\": \"lexi@gmail.com\",\n            \"Name\": \"lexi\"\n        },\n        {\n            \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n            \"Name\": \"Trevin\"\n        },\n        {\n            \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n            \"Name\": \"Bailey\"\n        },\n        {\n            \"Id\": 6,\n            \"Email\": \"anngould@iastate.edu\",\n            \"Name\": \"Ann Gould\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "name": "PostEvent"
  },
  {
    "type": "put",
    "url": "/event",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"Id\": 29,\n     \"Title\": \"309 Meetings\",\n     \"OwnerId\": \"2\",\n     \"StartTime\": \"05:05:00\",\n     \"EndTime\": \"06:05:05\",\n     \"StartDate\": \"2018-03-20\",\n     \"EndDate\": \"2018-03-20\",\n     \"Location\": \"TLA\",\n     \"Notes\": null,\n     \"Members\": [\n         {\n             \"Id\": 1,\n             \"Email\": \"lexi@gmail.com\",\n             \"Name\": \"lexi\"\n         },\n         {\n             \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n           \"Name\": \"Trevin\"\n         },\n         {\n             \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n             \"Name\": \"Bailey\"\n         },\n         {\n             \"Id\": 6,\n             \"Email\": \"anngould@iastate.edu\",\n             \"Name\": \"Ann Gould\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"Id\": 29,\n     \"Title\": \"309 Meetings\",\n     \"OwnerId\": \"2\",\n     \"StartTime\": \"05:05:00\",\n     \"EndTime\": \"06:05:05\",\n     \"StartDate\": \"2018-03-20\",\n     \"EndDate\": \"2018-03-20\",\n     \"Location\": \"TLA\",\n     \"Notes\": null,\n     \"Members\": [\n         {\n             \"Id\": 1,\n             \"Email\": \"lexi@gmail.com\",\n             \"Name\": \"lexi\"\n         },\n         {\n             \"Id\": 3,\n            \"Email\": \"tlnance@iastate.edu\",\n           \"Name\": \"Trevin\"\n         },\n         {\n             \"Id\": 5,\n            \"Email\": \"bmjensen@iastate.edu\",\n             \"Name\": \"Bailey\"\n         },\n         {\n             \"Id\": 6,\n             \"Email\": \"anngould@iastate.edu\",\n             \"Name\": \"Ann Gould\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/events.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_events_php",
    "name": "PutEvent"
  },
  {
    "type": "delete",
    "url": "/todo",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"Title\" : \"task\",\n        \"Description\" : \"description\",\n        \"Date\" : \"2018-03-20\",\n       \"Done\": fasle\n    },\n    {\n\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/todo.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "name": "DeleteTodo"
  },
  {
    "type": "get",
    "url": "/todo",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"Title\" : \"task\",\n        \"Description\" : \"description\",\n        \"Date\" : \"2018-03-20\",\n       \"Done\": fasle\n    },\n    {\n\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/todo.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "name": "GetTodo"
  },
  {
    "type": "post",
    "url": "/todo",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"Title\" : \"task\",\n        \"Description\" : \"description\",\n        \"Date\" : \"2018-03-20\",\n       \"Done\": fasle\n    },\n    {\n\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/todo.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "name": "PostTodo"
  },
  {
    "type": "put",
    "url": "/todo",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": ":",
            "description": "<p>{string} authentication a users unique authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"Title\" : \"task\",\n        \"Description\" : \"description\",\n        \"Date\" : \"2018-03-20\",\n       \"Done\": fasle\n    },\n    {\n\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/todo.php",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_controllers_todo_php",
    "name": "PutTodo"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./template/main.js",
    "group": "_Users_leximarie_Desktop_Projects_meetandmanage_server_template_main_js",
    "groupTitle": "_Users_leximarie_Desktop_Projects_meetandmanage_server_template_main_js",
    "name": ""
  }
] });
