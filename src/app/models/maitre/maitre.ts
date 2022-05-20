export class Maitre {

    telephone: number;
    email: string;
    addedBy : number;
    gouvernat: string;
    loginNumber: number
    password: string;
    nom : string;
    prenom: string;
    id: number;
    codePostal : number;
    image: string;
    typerUser : string;
   confirm : boolean;
   ecole : string;
    

    constructor(telephone: number,codePostal : number, email: string ,gouvernat: string ,loginNumber : number, password: string, nom : string, prenom : string, id : number, image: string, addedBy : number , typerUser :string,ecole : string, confirm : boolean ){
        this.telephone = telephone;
        this.email = email;
        this.loginNumber = loginNumber;
        this.password = password;
        this.nom = nom;
        this.id = id;
        this.gouvernat = gouvernat;
        this.codePostal = codePostal;
        this.image = image;
        this.ecole = ecole;
        
        this.addedBy = addedBy; 
        this.typerUser = typerUser;
        this.prenom = prenom;
        this.confirm = confirm;
    }
}