import { Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    @Get('me')
    @UseGuards(JwtGuard)
    getMe(@GetUser() user:User,@GetUser('email') email:string){
        console.log({'email':email})
        return user
    }

    
}
