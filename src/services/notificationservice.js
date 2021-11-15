import Wishlist from "../wishlist/wishlist";


export const NOTIF_WISHLIST_CHANGED ="notif_wishlist_changed";


let instance=null;
var observers={};
class Notificationservice{
    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }
   

    postnotif=(notifName,data)=>{
        let obs= observers[notifName];
        for (var x=0;x<obs.length;x++){
           var obj = obs[x];
           obj.callBack(data); 
        }
    };


    removeobserver=(observer,notifName)=>{
        var obs=observers[notifName];
        if(obs){
            for (var i=0;i<obs.length;i++){
                if(observer===obs[i].observer){
                    obs.splice(i,1);
                    observers[notifName]=obs;
                    break;
                }
            }
        }
    }

    adObserver=(notifName,observer,callBack)=>{
        let obs=observers[notifName];
        if (!obs){
            observers[notifName]=[];
        }
        let obj ={observer:observer,callBack:callBack};
        observers[notifName].push(obj);
    }
}
export default Notificationservice;