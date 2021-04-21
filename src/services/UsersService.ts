import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  private usersRepository : Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string){
    //verificar se usuario existe
    const userExists = await this.usersRepository.findOne({
      email
    });

    //se existir, retornar user
    if(userExists){
      return userExists;
    }
    //senao existir, retornar user
    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);
    
    return user;
  }
}

export { UsersService }