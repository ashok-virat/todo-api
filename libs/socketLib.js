const socketio=require('socket.io');
const mongoose=require('mongoose');
const userModel=mongoose.model('User');
const check=require('./checkLib');
const userpath=require('./../models/usermodel');
const friendreqpath=require('./../models/firend-request');
const frinedpath=require('./../models/friends');
const todopath=require('./../models/todo');
const hitorypath=require('./../models/history');
const historyModel=mongoose.model('history');
const friendreqModel=mongoose.model('friendrequest');
const friendsModel=mongoose.model('friends');
const todoModel=mongoose.model('Todo');
const redisLib=require('./../libs/redisLib');
const events=require('events');
const eventEmitter=new events.EventEmitter();


let setServer=(server)=>{
   
    let io=socketio.listen(server);
    let myio=io.of('');

    myio.on('connection',(socket)=>{
       

        socket.emit('verifyUser','');
        //coder to verify the user and make him online
           

        //setuser code is start
        socket.on('set-user',(userId)=>{
                userModel.findOne({userId:userId},(err,result)=>{
                    if(err){
                        socket.emit('user-error',{status:403,message:'user is not found'})
                    }
                    else if(check.isEmpty(result)) {
                        socket.emit('user-error',{status:403,message:'user is not found'})
                    }
                    else {
                        let currentUser=result;
    
                        socket.userId=currentUser.userId;
                             
                        let fullName=`${currentUser.firstName} ${currentUser.lastName}`;
    
                        let key=currentUser.userId;
                         let value=fullName;
                         let setUserOnline=redisLib.setNewOnlineUserInHash('onlineUsers',key,value,(err,result)=>{
                             if(err){
                                 console.log(err)
                             }
                             
                             else {
                                 redisLib.getAllUsersInHash('onlineUsers',(err,result)=>{
                                     if(err){
                                         console.log(err)
                                     }
                                     else {
                                         socket.room='Todo';
                                         socket.join(socket.room)
                                         socket.to(socket.room).broadcast.emit('online-user-list',result);
                                     }
                                 })
                             }
                         })
                    }
                })
        })
          //setuser code is end


         //getreqmessage code start
         socket.on('friendrequest',(data)=>{
              myio.emit(`${data.receiverId} getreq`,data);
         })
         //geteqemessage code end

         
         //accept and delete request code start
          socket.on('acceptrequest',(data)=>{
              myio.emit(`${data.senderId} acceptreq`,data)
          })
          socket.on('deleterequest',(friendreqId)=>{
            friendreqModel.findOne({friendreqId:friendreqId},(err,result)=>{
                if(err){
                    console.log(err)
                }
                else {
             
                    myio.emit(`${result.senderId} deletereq`,result);
                }
            })
        })
         //accept and delete request code end
         

         //unfriend code start
            socket.on("unfriendmsg",(friendId)=>{
                friendsModel.findOne({friendId:friendId},(err,result)=>{
                    if(err){
                        console.log(err)
                    }
                    else {
                 
                        myio.emit(`${result.receiverId} unfriendreq`,result);
                    }
                })
            })
         //unfriend code end
          

        //friendtododelete code is start
           socket.on('friendtododelete',(senderId,receiverId)=>{
                 friendsModel.findOne({senderId:senderId,receiverId:receiverId},(err,result)=>{
                     if(err){
                         console.log(err)
                     }
                     else {
                         myio.emit(`${result.receiverId} gettododeletemsg`,result);
                     }
                 })
           })
        //friendtododelete code is end
 

        //socet disconnect code start
        socket.on('disconnect',()=>{
            console.log('is called');
            if(socket.userId){
            redisLib.deleteUserFromHash('onlineUsers',socket.userId);
            redisLib.getAllUsersInHash('onlineUsers',(err,result)=>{
                if(err){
                    console.log(err)
                }
                else {
                    socket.leave(socket.room)
                    socket.to(socket.room).broadcast.emit('online-user-list',result)
                }
            })
            console.log('user is disconnect');
            console.log(socket.userId);
        }
           })
        //socket disconnect code end
        })
      

    
}


module.exports={
    setServer:setServer
}