import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from './createUser.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Post()
	createUser(@Body() dto: CreateUserDto) {
		this.appService.createUserDto(dto);
	}

	@Get('analytics')
	getAnalytics() {
		return this.appService.getAnalytics();
	}
}
