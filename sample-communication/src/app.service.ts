import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './createUser.event';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	handleUserCreated(data: CreateUserEvent) {
		console.log('handleUserCreated - communication', data);
	}
}
