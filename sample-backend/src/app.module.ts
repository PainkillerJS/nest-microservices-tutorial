import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'COMMUNICATION',
				transport: Transport.TCP,
				options: { port: 5000 },
			},
			{
				name: 'ANALYTICS',
				transport: Transport.TCP,
				options: { port: 5002 },
			},
		]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
