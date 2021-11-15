import Notificationservice ,{NOTIF_WISHLIST_CHANGED} from './notificationservice';
let instance=null;
var wishlist=[];
let ns = new Notificationservice();
class Dataservice{
    constructor (){
        if (!instance){
            instance=this;
        }
        return instance;
    }

    
    addwli=item =>{
        wishlist.push(item);
        ns.postnotif(NOTIF_WISHLIST_CHANGED, wishlist);
        }
    removewli=item =>{
        for (var x=0 ; x<wishlist.length;x++){
            if (wishlist[x]._id===item._id){
                wishlist.splice(x,1);
                ns.postnotif(NOTIF_WISHLIST_CHANGED, wishlist);
                break;
            }
        }
    }

}
export default Dataservice;