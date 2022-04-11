export class Medecins {
    typeUser!: string;
    telephone! : number;
    email!: string
    gouvernat!: string;
    loginNumber!: number
    speciality!: string;
    password!: string;
    nom!: string;
    id!: number

    constructor(telephone: number, email: string ,gouvernat: string ,cin : number, speciality : string, password: string, nom : string, id : number,typeUser:string ){
        this.typeUser=typeUser;
        this.telephone = telephone;
        this.email = email;
        this.loginNumber = this.loginNumber;
        this.speciality = speciality;
        this.password = password;
        this.nom = nom;
        this.id = id;
        this.gouvernat = gouvernat;
    }
}