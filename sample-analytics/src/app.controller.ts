import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserEvent } from './createUser.event';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@EventPattern('user_created')
	hadnleUserCreated(dto: CreateUserEvent) {
		this.appService.handleUserCreated(dto);
	}

	@MessagePattern({ cmd: 'get_analytics' })
	handleGetAnalytics() {
		return this.appService.handleGetAnalytics();
	}
}
