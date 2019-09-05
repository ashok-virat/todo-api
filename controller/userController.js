
const userpath=require('./../models/usermodel');
const shortid=require('shortid');
const mongoose=require('mongoose');
const passwordhashing=require('./../libs/passwordhassing');
const response=require('./../libs/responseLib');
const logger=require('./../libs/loggerLib');
const check=require('./../libs/checkLib');
const validation=require('./../libs/paramsvalidation');
const todopath=require('./../models/todo');
const friendrequestpath=require('./../models/firend-request');
const friendspath=require('./../models/friends');
const hitorypath=require('./../models/history');
const historyModel=mongoose.model('history');
const userModel=mongoose.model('User');
const todoModel=mongoose.model('Todo');
const friendreqModel=mongoose.model('friendrequest');
const friendsModel=mongoose.model('friends');
const nodemailer=require('nodemailer');


//signup function is start

let signup=(req,res)=>{

    let validateuseremail=()=>{
        return new Promise((resolve,reject)=>{
      
            if(req.body.email){
               
            if(!validation.Email(req.body.email)){
                 logger.captureError('email does not meet requirement','email validation',8);
                 let apiResponse=response.response(true,'email does not meet requirement',404,null);
                 reject(apiResponse);
            }
            else if(check.isEmpty(req.body.email)){
                logger.captureError('email is not there','email validation',5);
                let apiResponse=response.response(true,'email is not there',400,null);
                reject(apiResponse);
            }
            else{
               
                resolve(req);
            }
            }
            else {
                logger.captureError('email parameter is missing','email validation',10);
                let apiResponse=response.response(true,'email parameter is missing',403,null);
                reject(apiResponse);
            }
        })
    }
    let validateuserpassword=()=>{
        return new Promise((resolve,reject)=>{
         
            if(req.body.password){
               
            if(!validation.Password(req.body.password)){
                 logger.captureError('password not meet requirement','email validation',8);
                 let apiResponse=response.response(true,'password does not meet requirement',404,null);
                 reject(apiResponse);
            }
            else if(check.isEmpty(req.body.password)){
                logger.captureError('password is not there','email validation',5);
                let apiResponse=response.response(true,'password is not there',400,null);
                reject(apiResponse);
            }
            else{
               
                resolve(req);
            }
            }
            else {
                logger.captureError('password parameter is missing','email validation',10);
                let apiResponse=response.response(true,'password parameter is missing',403,null);
                reject(apiResponse);
            }
        })
    }

    
  
   let createUser=()=>{
    console.log('create user is called')
    console.log(req.body)
       return new Promise((resolve,reject)=>{
           userModel.findOne({email:req.body.email})
           .exec((err,emailDeatils)=>{
               if(err){
                logger.captureError('some error occured','createuser',10);
                   let apiResponse=response.response(true,err.message,400,null);
                   reject(apiResponse);
               }
               else if(check.isEmpty(emailDeatils)){
                   let createuser=new userModel({
                            userId:shortid.generate(),
                            firstName:req.body.firstName,
                            lastName:req.body.lastName,
                            mobileNumber:req.body.mobileNumber,
                            countryCode:req.body.countryCode,
                            email:req.body.email,
                            password:passwordhashing.hashpassword(req.body.password),
                            createdOn:Date.now()
                   })
                   createuser.save((err,createuser)=>{
                       if(err){
                        logger.captureError('error','createuser',10);
                           let apiResponse=response.response(true,err.message,403,null)
                           reject(apiResponse)
                       }
                       else{
                           let object=createuser.toObject();
                       
                           resolve(object);
                           
                       }
                   })
               }
               else {
                logger.captureError('email is already present','createuser',10);
                   let apiResponse=response.response(true,'email is already present',500,null);
                   reject(apiResponse);
               }
           })
       })
   }

       validateuseremail(req,res)
        .then(validateuserpassword)
       .then(createUser)
       .then((resolve)=>{

           delete resolve.password;
           logger.captureInfo('signup succesfully','signup',10);
           let apiResponse=response.response(false,'signup succesfully',200,resolve);
           res.send(apiResponse);
       })
       .catch((reject)=>{
           res.send(reject);
       })
}
//signin function is end



//signin function is start

let signin=(req,res)=>{
    
    let checkemail=()=>{
        return new Promise((resolve,reject)=>{
             if(req.body.email){
                 userModel.findOne({email:req.body.email},(err,result)=>{
                     if(err){
                        logger.captureError(err.message,'checkmail',8);
                         let apiResponse=response.response(true,err.message,404,null)
                         reject(apiResponse)
                     }
                     else if(check.isEmpty(result)){
                        logger.captureError('user not found','checkmail',8);
                         let apiResponse=response.response(true,'user not found',400,null)
                         reject(apiResponse)
                     }
                     else {
                         resolve(result)
                     }
                 })
             }
             else {
                logger.captureError('Email parameter is missing','checkmail',8);
                 let apiResponse=response.response(true,'Email parameter is missing',500,null)
                 reject(apiResponse)
             }
        })
    }
    let checkpassword=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            if(req.body.password){
                passwordhashing.comparepassword(req.body.password,userDetails.password,(err,result)=>{
                    if(err){
                        logger.captureError("password is not match",'checkpassword',8);
                        let apiResponse=response.response(true,"password is not match",404,null)
                        reject(apiResponse)
                    }
                    else if(result){
                        let newuserDetails=userDetails.toObject();
                        delete newuserDetails.password;
                        delete newuserDetails.__v;
                        delete newuserDetails._id;
                        resolve(newuserDetails);
                    }
                    else {
                        logger.captureError('Log In Failed.Wrong Password','checkpassword',8);
                        let apiResponse=response.response(true,'Log In Failed.Wrong Password',400,null)
                        reject(apiResponse)
                    }
                })
            }
            else {
                logger.captureError('passeord parrameter is missing','checkpassword',8);
                let apiResponse=response.response(true,'passeord parrameter is missing',404,null)
                reject(apiResponse)
            }
        })
    }
       
    checkemail(req,res)
    .then(checkpassword)
    .then((resolve)=>{
        
        let apiResponse=response.response(false,'signin successfully',200,resolve);
        res.send(apiResponse)
    })
    .catch((reject)=>{
  
    res.send(reject)
   
    })
}
//sign in function end



//create todo function is start
let createtodo=(req,res)=>{
    userModel.findOne({userId:req.body.userId},(err,result)=>{
        if(err){
            logger.captureError('user in Not Found','create Todo',8)
            let apiResponse=response.response(true,'user is not found',500,null);
            res.send(apiResponse)
        }
        else if(result){
           
             let createuser=new todoModel({
                 firstName:result.firstName,
                 lastName:result.lastName,
                 userId:result.userId,
                 statusId:shortid.generate(),
                 event:req.body.event,
                 Done:req.body.Done
             })
             createuser.save((err,createuser)=>{
                if(err){
                    logger.captureError('some error occured','create Todo',9)
                    let apiResponse=response.response(true,'some error occured',403,null)
                    res.send(apiResponse)
                }
                else{
                    let object=createuser.toObject();
                    delete object._id;
                    delete object.__v;
                    let apiResponse=response.response(false,200,'event is created',object);
                     res.send(apiResponse)
                }
            })
        }
    })
}

let getevent=(req,res)=>{
   todoModel.find({userId:req.params.userId},(err,result)=>{
       if(err){
        logger.captureError('some error occured','get todo',9)
        let apiResponse=response.response(true,'some error occured',403,null)
        res.send(apiResponse)
       }
       else {
           let apiResponse=response.response(false,"events are listed this userId",200,result);
           res.send(apiResponse)
       }
   })
}


let deleteevent=(req,res)=>{
    todoModel.deleteOne({statusId:req.body.statusId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','deleteb event',7)
        let apiResponse=response.response(true,'some error occured',500,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"events is Deleted Successfully",200,result);
            res.send(apiResponse)
        }
    })
}
let updateevent=(req,res)=>{
    let options=req.body;
    todoModel.update({statusId:req.body.statusId},options,{multi:true}).exec((err,result)=>{
        if(err){
            logger.captureError('some error occured','update event',6)
        let apiResponse=response.response(true,'some error occured',403,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"events is updated Successfully",200,result);
            res.send(apiResponse)
        }
    })
}


let geteventbystatusId=(req,res)=>{
    todoModel.findOne({statusId:req.params.statusId},(err,result)=>{
            if(err){
                logger.captureError('some error occured','get event',7)
            let apiResponse=response.response(true,'some error occured',400,null)
            res.send(apiResponse)
            }
            else {
                let apiResponse=response.response(false,"event are listed this statusId",200,result);
                res.send(apiResponse)
            }
    })
}


let getusers=(req,res)=>{
     userModel.find()
     .lean()
     .exec((err,result)=>{
        if(err){
            logger.captureError('some error occured','get users',5)
        let apiResponse=response.response(true,'some error occured',500,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"users are listed",200,result);
            res.send(apiResponse)
        }
     })
}

let getrequest=(req,res)=>{
    friendreqModel.find({receiverId:req.params.userId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','getrequest',9)
        let apiResponse=response.response(true,'some error occured',500,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"requests are listed",200,result);
            res.send(apiResponse)
        }
})
}

let acceptrequest=(req,res)=>{
    friendreqModel.findOne({friendreqId:req.body.friendreqId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','acceptrequest',4)
            let apiResponse=response.response(true,'some error occured',400,null)
            res.send(apiResponse)
        }
        else if(result){
            let createUser=new friendsModel({
                friendId:result.friendreqId,
                senderId:result.senderId,
                receiverId:result.receiverId,
                receiverfirstName:result.receiverfirstName,
                receiverlastname:result.receiverlastname,
                senderfirstName:result.senderfirstName,
                senderlastName:result.senderlastName,
                acceptDate:Date.now()
            })
            deletereq(result.friendreqId);
            createUser.save((err,result)=>{
                if(err){
                    logger.captureError('some error occured','acceptrequest',8)
            let apiResponse=response.response(true,'some error occured',403,null)
            res.send(apiResponse)
                }
                else{
                    
                    let apiResponse=response.response(false,"Request are accepted",200,result);
                    res.send(apiResponse);
                }
               
            })
        }
    })
    
}

let deletereq=(friendreqId)=>{
    friendreqModel.deleteOne({friendreqId:friendreqId},(err,result)=>{
    })

}
let deletefrndreq=(req,res)=>{
    friendreqModel.deleteOne({friendreqId:req.body.friendreqId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','deletefrndrequest',6)
    let apiResponse=response.response(true,'some error occured',500,null)
    res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"Request is deleted successfully",200,result);
            res.send(apiResponse);
        }
    })
}


let getfriends=(req,res)=>{
    friendsModel.find({senderId:req.params.userId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','get friends',5)
    let apiResponse=response.response(true,'some error occured',500,null)
    res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"Friends are listed",200,result);
            res.send(apiResponse);
        }
    })
}
let unfriend=(req,res)=>{
    friendsModel.deleteOne({friendId:req.body.friendId},(err,result)=>{
        if(err){
            logger.captureError('some error occured','un friend',5)
    let apiResponse=response.response(true,'some error occured',500,null)
    res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"Unfriend successfully",200,result);
            res.send(apiResponse);
        }
    })
}
let sendrequest=(req,res)=>{

    let findfriendreq=()=>{
        return new Promise((resolve,reject)=>{
            friendreqModel.findOne({receiverId:req.body.receiverId,senderId:req.body.senderId},(err,result)=>{
                if(err){
                    logger.captureError('some error occured','findfriendreq',5)
            let apiResponse=response.response(true,'some error occured',500,null)
            reject(apiResponse)
                }
                else if(check.isEmpty(result)){
                    resolve(req);
                }
                else {
                    logger.captureError('some error occured','findfriendreq',8)
                    let apiResponse=response.response(true,'Request is send already',403,null)
                    reject(apiResponse)
                }
            })
        })
    }
    let friendsId=()=>{
        return new Promise((resolve,reject)=>{
         friendsModel.findOne({receiverId:req.body.receiverId,senderId:req.body.senderId},(err,result)=>{
            if(err){
                logger.captureError('some error occured','friendsId',8)
        let apiResponse=response.response(true,'some error occured',400,null)
        reject(apiResponse)
            }
            else if(check.isEmpty(result)){
                resolve(req);
            }
            else {
                logger.captureError('some error occured','friendsId',5)
                let apiResponse=response.response(true,'already friends',500,null)
                reject(apiResponse)
            }
         })
        })
    }
  
    let sendrequest=()=>{
        return new Promise((resolve,reject)=>{
            userModel.findOne({userId:req.body.receiverId},(err,result)=>{
                if(err){
                    logger.captureError('some error occured','sendrequest',6)
                    let apiResponse=response.response(true,'some error occured',500,null)
                    reject(apiResponse)
                }
                else {
                    let createrequest=new friendreqModel({
                        friendreqId:shortid.generate(),
                        senderId:req.body.senderId,
                        receiverId:req.body.receiverId,
                        receiverfirstName:result.firstName,
                        receiverlastname:result.lastName,
                        senderfirstName:req.body.firstName,
                        senderlastName:req.body.lastName,
                        requestDate:Date.now()
                    })
                    createrequest.save((err,result)=>{
                        if(err){
                          logger.captureError('some error occured','send request',7)
                          let apiResponse=response.response(true,'some error occured',400,null)
                          reject(apiResponse)
                        }
                        else {
                          resolve(result)
                      }
                    })
                }
            })
        })
    }


    findfriendreq(req,res)
    .then( friendsId)
   .then(sendrequest)
   .then((resolve)=>{
       let apiResponse=response.response(false,'Request send succesfully',200,resolve);
       res.send(apiResponse);
   })
   .catch((reject)=>{
       res.send(reject);
   })
}

let resetcode=(req,res)=>{
     
    let findmaildetails=()=>{
        return new Promise((resolve,reject)=>{
            if(req.body.email){
                
                userModel.findOne({email:req.body.email},(err,result)=>{
                    if(err){
                        logger.captureError('some error occured','findemaildetails',9)
                        let apiResponse=response.response(true,'some error occured',400,null)
                        reject(apiResponse)
                    }
                    else if(check.isEmpty(result)){
                        let apiResponse=response.response(true,'User is not found',403,null)
                        res.send(apiResponse)
                    }
                    else  {
                            
                             result.resetId=shortid.generate();
                                result.save((err,result)=>{
                                    if(err){
                                        logger.captureError('some error occured','fimdemaildetails',5)
                                        let apiResponse=response.response(true,'some error occured',500,null)
                                        reject(apiResponse)
                                    }
                                    else {
                                        resolve(req)
                                    }
                                })
                            }
                        })
            }
          else {
            logger.captureError('some error occured','findemaildetails',7)
            let apiResponse=response.response(true,'Email parameter is missing',500,null)
            reject(apiResponse)
          }
        })
    }
   
  let sendmail=()=>{
      return new Promise((resolve,reject)=>{
          userModel.findOne({email:req.body.email},(err,result)=>{
              if(err){
                logger.captureError('some error occured','sendmail',8)
                let apiResponse=response.response(true,'some error occured',400,null)
                reject(apiResponse)
              }
              else if(check.isEmpty(result)){
                let apiResponse=response.response(true,'Code is not found',500,null)
                res.send(apiResponse)
            }
              else {
                  
                let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'ashokbejo01@gmail.com',
                        pass:'ashokbejo01@10@97'
                    }
                });
                let mailOptions={
                    from:'"Ashok TODO APP"',
                    to:result.email,
                    subject:'"Welcome to Ak-TODO app"',
                    html:`<p>YOUR RESET PASSWORD CODE IS</p> <h1>${result.resetId}</h1>`
                }
                transporter.sendMail(mailOptions,function(err,data){
                    if(err){
                        console.log(err)
                        logger.captureError('some error occured','sendmail',9)
                        let apiResponse=response.response(true,'some error occured',500,null)
                        reject(apiResponse)
                    }
                    else {
                        resolve('Reset Code send successfully')
                    }
                })
              }
          })
      })
  }

 

     findmaildetails(req,res)
     .then(sendmail)
   .then((resolve)=>{
       let apiResponse=response.response(false,'Reset code send your Email',200,resolve);
       res.send(apiResponse);
   })
   .catch((reject)=>{
       res.send(reject);
   })
}

let resetpassword=(req,res)=>{
    if(req.body.resetId){
        userModel.findOne({resetId:req.body.resetId},(err,result)=>{
            if(err){
                logger.captureError('some error occured','Reset password',5)
                let apiResponse=response.response(true,'Reset code is Wrong',403,null)
                res.send(apiResponse)
            }
            else if(check.isEmpty(result)){
                let apiResponse=response.response(true,'Reset code is Wrong',500,null)
                res.send(apiResponse)
            }
            else {
                 result.password=passwordhashing.hashpassword(req.body.password);
                 result.resetId=shortid.generate();
                        result.save((err,result)=>{
                            if(err){
                                logger.captureError('some error occured','Reset password',5)
                                let apiResponse=response.response(true,'Reset code is Wrong',500,null)
                                res.send(apiResponse)
                            }
                            else {
                                let apiResponse=response.response(false,'Your Password Is Reset Successfully',200,result)
                                res.send(apiResponse)
                            }
                        })
            }
        })
    }
       else {
        let apiResponse=response.response(true,'Reset code is Missing',403,null)
        res.send(apiResponse)
       }
}



let savedeletehistory=(req,res)=>{
    todoModel.findOne({statusId:req.body.statusId},(err,data)=>{
        if(err){
            logger.captureError('some error occured','save delete history',7)
            let apiResponse=response.response(true,'some error occured',400,null)
            res.send(apiResponse)
        }
        else if(check.isEmpty(data)){
            logger.captureError('some error occured','save delete history',5)
            let apiResponse=response.response(true,'some error occured',400,null)
            res.send(apiResponse)
        }
        else {
            let createtodo=new historyModel({
               firstName:data.firstName,
               lastName:data.lastName,
               userId:data.userId,
               statusId:data.statusId,
               event:data.event,
               Done:data.Done,
               actionOn:Date.now()
            })
            createtodo.save((err,result)=>{
                if(err){
                    logger.captureError('some error occured','save delete history',8)
                    let apiResponse=response.response(true,'some error occured',500,null)
                    res.send(apiResponse)
                }
                else {
                   
                    let apiResponse=response.response(false,'delete history is successfully saved',200,result);
                    res.send(apiResponse)
                }
            })
        }
    })
 }


 
let undofunction=(req,res)=>{
    if(req.body.statusId){
        historyModel.findOne({statusId:req.body.statusId},(err,result)=>{
            if(err){
                logger.captureError('some error occured','undofunction',8)
                let apiResponse=response.response(true,'some error occured',500,null)
                res.send(apiResponse)
            }
            else if(check.isEmpty(result)){
                logger.captureError('some error occured','undofunction',7)
                let apiResponse=response.response(true,'some error occured',403,null)
                res.send(apiResponse)
            }
            else {
              
                let createuser=new todoModel({
                    firstName:result.firstName,
                    lastName:result.lastName,
                    userId:result.userId,
                    statusId:shortid.generate(),
                    event:result.event,
                    Done:result.Done
                })
                createuser.save((err,result)=>{
                    if(err){
                        logger.captureError('some error occured','undofunction',6)
                        let apiResponse=response.response(true,'some error occured',400,null)
                        res.send(apiResponse)
                    }
                    else {
                        deletetodohistory(req);
                        let apiResponse=response.response(false,'undo is successfull',200,result);
                        res.send(apiResponse)
                    }
                })
            }
        })
    }
    else {
        logger.captureError('some error occured','undofunction',7)
        let apiResponse=response.response(true,'statusId is missing',500,null)
        res.send(apiResponse)
    }
}
let deletetodohistory=(req)=>{
        historyModel.deleteOne({statusId:req.body.statusId},(err,result)=>{
        })
}

module.exports={
    signup:signup,
    signin:signin,
    createtodo:createtodo,
    getevent:getevent,
    deleteevent:deleteevent,
    updateevent:updateevent,
    geteventbystatusId:geteventbystatusId,
    getusers:getusers,
    sendrequest:sendrequest,
    getrequest:getrequest,
    acceptrequest:acceptrequest,
    getfriends:getfriends,
    deletefrndreq:deletefrndreq,
    unfriend:unfriend,
    resetpassword:resetpassword,
    resetcode:resetcode,
    undofunction:undofunction,
    savedeletehistory:savedeletehistory
}