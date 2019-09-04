define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/users/getevent/:statusId",
    "title": "get users particular todo",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"event are listed this statusId\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGeteventStatusid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getfriends/:userId",
    "title": "get friends",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Friends are listed\",\n \"status\":200,\n \"data\": [\n            {\n                friendId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetfriendsUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getrequest/:userId",
    "title": "get friend rrequest",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"requests are listed\",\n \"status\":200,\n \"data\": [\n            {\n                friendreqId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetrequestUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/gettodo/:userId",
    "title": "get users todo",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events are listed this userId\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGettodoUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getuser",
    "title": "get users",
    "version": "0.0.1",
    "group": "get",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"users are listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              email:\"string\",\n              countryCode:\"number\",\n              mobileNumbernumber:\"number\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetuser"
  },
  {
    "type": "post",
    "url": "/api/v1/users/acceptrequest",
    "title": "accept friend rrequest",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendreqId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request are accepted\",\n \"status\":200,\n \"data\": [\n            {\n                friendId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersAcceptrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/cratetodo",
    "title": "create users event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Done",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"event is created\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersCratetodo"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "delete users todo",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events is Deleted Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/deletefriendrequest",
    "title": "delete friend request",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendreqId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request is deleted successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDeletefriendrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetcode",
    "title": "password reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Reset Code send successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetcode"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "password reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Newpassword",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Your Password Is Reset Successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/savehistory",
    "title": "save frieds deleted events",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"delete history is successfully saved\",\n \"status\":200,\n \"data\": [\n           {\n            firstName:\"string\",\n            lastName:\"string\",\n            userId:\"sring\",\n            statusId:\"string\",\n            event:\"string\",\n            Done:\"string\"\n           }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSavehistory"
  },
  {
    "type": "post",
    "url": "/api/v1/users/sendrequest",
    "title": "send friend request",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request send succesfully\",\n \"status\":200,\n \"data\": [\n            {\n                friendreqId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSendrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signin",
    "title": "signin",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signin successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              email:\"string\",\n              countryCode:\"number\",\n              mobileNumbernumber:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "signup",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signup successfully\",\n \"status\":200,\n \"data\": [\n           {\n           firstName:\"string\",\n           lastName:\"string\",\n           userId:\"string\",\n           countryCode:\"number\",\n           mobileNumber:\"number\"\n           }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/undo",
    "title": "undo friends deleted events",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"undo is successfull\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUndo"
  },
  {
    "type": "post",
    "url": "/api/v1/users/unfriend",
    "title": "delete friend",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Unfriend successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUnfriend"
  },
  {
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "edit users todo",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Done",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events is updated Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUpdate"
  }
] });
