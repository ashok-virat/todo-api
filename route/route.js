const appConfig=require('./../Config/apiConfig')
const controller=require('./../controller/userController')

let setRouter=(app)=>{
let baseUrl=`${appConfig.apiVersion}/users`

app.post(`${baseUrl}/signup`,controller.signup);
app.post(`${baseUrl}/signin`,controller.signin);
app.post(`${baseUrl}/createtodo`,controller.createtodo);
app.get(`${baseUrl}/gettodo/:userId`,controller.getevent);
app.post(`${baseUrl}/delete`,controller.deleteevent);
app.post(`${baseUrl}/update`,controller.updateevent);
app.get(`${baseUrl}/getevent/:statusId`,controller.geteventbystatusId);
app.get(`${baseUrl}/getusers`,controller.getusers);
app.post(`${baseUrl}/sendrequest`,controller.sendrequest);
app.get(`${baseUrl}/getrequest/:userId`,controller.getrequest);
app.post(`${baseUrl}/acceptrequest`,controller.acceptrequest);
app.get(`${baseUrl}/getfriends/:userId`,controller.getfriends);
app.post(`${baseUrl}/deletefriendrequest`,controller.deletefrndreq);
app.post(`${baseUrl}/unfriend`,controller.unfriend);
app.post(`${baseUrl}/resetcode`,controller.resetcode);
app.post(`${baseUrl}/resetpassword`,controller.resetpassword);
app.post(`${baseUrl}/undo`,controller.undofunction);
app.post(`${baseUrl}/savehistory`,controller.savedeletehistory);
}

module.exports={
    setRouter:setRouter
}