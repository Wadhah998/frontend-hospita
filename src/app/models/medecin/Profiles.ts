export class message {
    id!:number;
    body!:string;
    time!:string;
    me!:boolean;
    constructor() {
        
    }
}
export class Medecins {

    telephone: number;
    email: string;
    addedBy : number;
    gouvernat: string;
    loginNumber: number
    speciality: string;
    password: string;
    nom : string;
    prenom: string;
    id: number;
    codePostal : number;
    image: string;
    typerUser : string;

   messages:message;
   confirm : boolean;

    latestMessageRead : boolean;
    latestMessage : string;
    time : string;
    

    constructor(telephone: number,codePostal : number, email: string ,gouvernat: string ,loginNumber : number, speciality : string, password: string, nom : string, prenom : string, id : number, image: string, latestMessageRead :boolean, latestMessage : string, time : string, addedBy : number , messages:message , typerUser :string, confirm : boolean ){
        this.telephone = telephone;
        this.email = email;
        this.loginNumber = loginNumber;
        this.speciality = speciality;
        this.password = password;
        this.nom = nom;
        this.id = id;
        this.gouvernat = gouvernat;
        this.codePostal = codePostal;
        this.image = image;
        this.latestMessageRead = latestMessageRead;
        this.latestMessage = latestMessage;
        this.time = time
        this.addedBy = addedBy; 
        this.messages = messages;
        this.typerUser = typerUser;
        this.prenom = prenom;
        this.confirm = confirm;
    }
}