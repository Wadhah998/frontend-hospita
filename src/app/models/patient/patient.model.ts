export class message {
  id!:number;
  body!:string;
  time!:string;
  me!:boolean;
  constructor() {
      
  }
}
export class Patient {
  id: number;
  name: string;
  image: string;
  age: number;
  state: string;
  email: string;
  phone: number;
  messages:message;

  latestMessageRead : boolean;
  latestMessage : string;
  time : string;

  constructor(
    id: number,
    name: string,
    image: string,
    age: number,
    state: string,
    email: string,
    phone: number,
    messages:message,

    latestMessageRead : boolean,
    latestMessage : string,
    time : string,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.age = age;
    this.state = state;
    this.email = email;
    this.phone = phone;
    this.latestMessageRead = latestMessageRead;
     this.latestMessage = latestMessage;
        this.time = time 
        this.messages = messages;   
  }
}
