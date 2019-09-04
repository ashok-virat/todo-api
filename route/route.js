const appConfig=require('./../Config/apiConfig')
const controller=require('./../controller/userController')

let setRouter=(app)=>{
let baseUrl=`${appConfig.apiVersion}/users`

app.post(`${baseUrl}/signup`,controller.signup);
    /**
     * @api {post} /api/v1/users/signup signup
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} firstName of the user passed as a body parameter
     * @apiParam {String} lastName of the user passed as a body parameter
     * @apiParam {String} email of the user passed as a body parameter
     * @apiParam {String} password of the user passed as a body parameter
     * @apiParam {Number} countryCode of the user passed as a body parameter
     * @apiParam {Number} mobileNumber of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"signup successfully",
     *   "status":200,
     *   "data": [
     *             {
     *             firstName:"string",
     *             lastName:"string",
     *             userId:"string",
     *             countryCode:"number",
     *             mobileNumber:"number"
     *             }
     *           ]  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */


app.post(`${baseUrl}/signin`,controller.signin);
 /**
     * @api {post} /api/v1/users/signin signin
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} email of the user passed as a body parameter
     * @apiParam {String} password of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"signin successfully",
     *   "status":200,
     *   "data": [
     *              {
     *                userId:"string",
     *                firstName:"string",
     *                lastName:"string",
     *                email:"string",
     *                countryCode:"number",
     *                mobileNumbernumber:"number"
     *              }
     *           ]  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */



app.post(`${baseUrl}/createtodo`,controller.createtodo);
 /**
     * @api {post} /api/v1/users/cratetodo create users event
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} userId of the user passed as a body parameter
     * @apiParam {String} event of the user passed as a body parameter
     * @apiParam {String} Done of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"event is created",
     *   "status":200,
     *   "data": [
     *              {
     *                userId:"string",
     *                firstName:"string",
     *                lastName:"string",
     *                statusId:"string",
     *                event:"string",
     *                Done:"string"
     *              }
     *           ]  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



app.get(`${baseUrl}/gettodo/:userId`,controller.getevent);
 /**
     * @api {get} /api/v1/users/gettodo/:userId get users todo
     * @apiVersion 0.0.1
     * @apiGroup get
     * 
     * @apiParam {String} userId of the user passed as a URL parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"events are listed this userId",
     *   "status":200,
     *   "data": [
     *              {
     *                userId:"string",
     *                firstName:"string",
     *                lastName:"string",
     *                statusId:"string",
     *                event:"string",
     *                Done:"string"
     *              }
     *           ]  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */




app.post(`${baseUrl}/delete`,controller.deleteevent);
 /**
     * @api {post} /api/v1/users/delete delete users todo
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} statusId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"events is Deleted Successfully",
     *   "status":200,
     *   "data": []  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */




app.post(`${baseUrl}/update`,controller.updateevent);
 /**
     * @api {post} /api/v1/users/update edit users todo
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} statusId of the user passed as a body parameter
     * @apiParam {String} event of the user passed as a body parameter
     * @apiParam {String} Done of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"events is updated Successfully",
     *   "status":200,
     *   "data": []  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



app.get(`${baseUrl}/getevent/:statusId`,controller.geteventbystatusId);
 /**
     * @api {get} /api/v1/users/getevent/:statusId get users particular todo
     * @apiVersion 0.0.1
     * @apiGroup get
     * 
     * @apiParam {String} statusId of the user passed as a URL parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"event are listed this statusId",
     *   "status":200,
    *   "data": [
     *              {
     *                userId:"string",
     *                firstName:"string",
     *                lastName:"string",
     *                statusId:"string",
     *                event:"string",
     *                Done:"string"
     *              }
     *           ]  
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */




app.get(`${baseUrl}/getusers`,controller.getusers);
 /**
     * @api {get} /api/v1/users/getuser get users 
     * @apiVersion 0.0.1
     * @apiGroup get
     * 
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"users are listed",
     *   "status":200,
      *   "data": [
     *              {
     *                userId:"string",
     *                firstName:"string",
     *                lastName:"string",
     *                email:"string",
     *                countryCode:"number",
     *                mobileNumbernumber:"number"
     *              }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/sendrequest`,controller.sendrequest);
 /**
     * @api {post} /api/v1/users/sendrequest send friend request 
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} senderId of the user passed as a body parameter
     * @apiParam {String} receiverId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Request send succesfully",
     *   "status":200,
      *   "data": [
     *              {
     *                  friendreqId:"string",
     *                  senderfirstName:"string",
     *                  senderlastName:"string",
     *                  receiverfirstName:"string",
     *                  receiverlastname:"string",
     *                  senderId:"string",
     *                  receiverId:"string"
     *              }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



     
app.get(`${baseUrl}/getrequest/:userId`,controller.getrequest);
 /**
     * @api {get} /api/v1/users/getrequest/:userId get friend rrequest 
     * @apiVersion 0.0.1
     * @apiGroup get
     * 
     * @apiParam {String} userId of the user passed as a URL parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"requests are listed",
     *   "status":200,
      *   "data": [
     *              {
     *                  friendreqId:"string",
     *                  senderfirstName:"string",
     *                  senderlastName:"string",
     *                  receiverfirstName:"string",
     *                  receiverlastname:"string",
     *                  senderId:"string",
     *                  receiverId:"string"
     *              }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/acceptrequest`,controller.acceptrequest);
 /**
     * @api {post} /api/v1/users/acceptrequest accept friend rrequest 
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} friendreqId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Request are accepted",
     *   "status":200,
      *   "data": [
     *              {
     *                  friendId:"string",
     *                  senderfirstName:"string",
     *                  senderlastName:"string",
     *                  receiverfirstName:"string",
     *                  receiverlastname:"string",
     *                  senderId:"string",
     *                  receiverId:"string"
     *              }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */



     
app.get(`${baseUrl}/getfriends/:userId`,controller.getfriends);
 /**
     * @api {get} /api/v1/users/getfriends/:userId get friends
     * @apiVersion 0.0.1
     * @apiGroup get
     * 
     * @apiParam {String} userId of the user passed as a URL parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Friends are listed",
     *   "status":200,
      *   "data": [
     *              {
     *                  friendId:"string",
     *                  senderfirstName:"string",
     *                  senderlastName:"string",
     *                  receiverfirstName:"string",
     *                  receiverlastname:"string",
     *                  senderId:"string",
     *                  receiverId:"string"
     *              }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/deletefriendrequest`,controller.deletefrndreq);
/**
     * @api {post} /api/v1/users/deletefriendrequest delete friend request
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} friendreqId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Request is deleted successfully",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/unfriend`,controller.unfriend);
/**
     * @api {post} /api/v1/users/unfriend delete friend 
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} friendId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Unfriend successfully",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/resetcode`,controller.resetcode);
/**
     * @api {post} /api/v1/users/resetcode password reset
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} email of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Reset Code send successfully",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/resetpassword`,controller.resetpassword);
/**
     * @api {post} /api/v1/users/resetpassword password reset
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} resetId of the user passed as a body parameter
     * @apiParam {String} Newpassword of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"Your Password Is Reset Successfully",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/undo`,controller.undofunction);
/**
     * @api {post} /api/v1/users/undo undo friends deleted events
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} statusId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"undo is successfull",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":500,
     *      "data":null
     *    }
     */



     
app.post(`${baseUrl}/savehistory`,controller.savedeletehistory);
/**
     * @api {post} /api/v1/users/savehistory save frieds deleted events
     * @apiVersion 0.0.1
     * @apiGroup post
     * 
     * @apiParam {String} statusId of the user passed as a body parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"delete history is successfully saved",
     *   "status":200,
     *   "data": [
     *             {
     *              firstName:"string",
     *              lastName:"string",
     *              userId:"sring",
     *              statusId:"string",
     *              event:"string",
     *              Done:"string"
     *             }
     *           ]
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":403,
     *      "data":null
     *    }
     */



     
}

module.exports={
    setRouter:setRouter
}