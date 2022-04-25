export class Enfants {
    nomEnfant: string;
    nomParent: string;
    telephone : number;
    cin : number;
    email: string
    gouvernat: string;
    ecole: string;
    date: string;
    password: string;
    id: number;
    situation: string;
    codePostal: number;

    
        
    constructor(telephone: number,codePostal : number, email: string ,gouvernat: string ,cin : number, ecole: string, password: string,   nomEnfant : string, id : number, nomParent:string, date: string, situation: string){
      this.date = date;
      this.telephone = telephone;
      this.situation = situation;
        this.email = email;
        this.nomEnfant = nomEnfant;
        this. ecole =  ecole;
        this.password = password;
        this.nomParent = nomParent;
        this.id = id;
        this.gouvernat = gouvernat;
        this.codePostal = codePostal;
        this.cin = cin;
    }
}