import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { sequelize } from '../database/database';

async function bootstrap() {

  // Create Nest Instance
  const app = await NestFactory.create(AppModule);

  // Database Connection
  try {
    await sequelize.authenticate();
    console.log('database connected successfully');

    await sequelize.sync();
    console.log('database synchronized successfully');

    console.log('Server Open');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // App Port
  await app.listen(3000);

}
bootstrap();
