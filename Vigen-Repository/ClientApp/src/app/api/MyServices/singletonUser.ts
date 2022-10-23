export class SingletonUser{
    private static instance:SingletonUser;
    public name: String;
    public identification:String;
    public type:String; //0=usuario, 0!=typoOrg
    constructor(){
        this.identification="";
        this.type="";
        this.name="";
    }
    public static getInstance():SingletonUser{
        if(this.instance==null){
            this.instance=new SingletonUser();
        }
        return this.instance;
    }
}