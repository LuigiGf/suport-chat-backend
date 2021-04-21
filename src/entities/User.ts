import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

//Decorators
//“Um Decorator é um tipo especial de declaração que pode ser anexada 
//a uma declaração de classe, método, acessador, propriedade ou parâmetro.” 
//-> Basicamente adiciona funcionalidades extras a essas coisas aí
@Entity("users")
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  email: string;
  @CreateDateColumn()
  created_at: Date;
  
  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {User}