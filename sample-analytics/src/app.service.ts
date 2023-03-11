import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './createUser.event';

@Injectable()
export class AppService {
	private readonly analytics = [];

	getHello(): string {
		return 'Hello World!';
	}

	handleUserCreated(dto: CreateUserEvent) {
		console.log('handleUserCreated - ANALYTICS', dto);
		this.analytics.push({ email: dto.email, timestamp: new Date() });
	}

	handleGetAnalytics() {
		return this.analytics;
	}
}
