import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserDto } from './createUser.dto';
import { CreateUserEvent } from './createUser.event';

@Injectable()
export class AppService {
	private readonly users = [];

	constructor(
		@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
		@Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
	) {}

	getHello(): string {
		return 'Hello World!';
	}

	createUserDto(dto: CreateUserDto) {
		this.users.push(dto);
		this.communicationClient.emit(
			'user_created',
			new CreateUserEvent(dto.email),
		);

		this.analyticsClient.emit('user_created', new CreateUserEvent(dto.email));
	}

	getAnalytics() {
		return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
	}
}
