import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserEvent } from './createUser.event';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@EventPattern('user_created')
	handleUserCreated(dto: CreateUserEvent) {
		this.appService.handleUserCreated(dto);
	}
}
