import { Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { writeFile } from 'fs';
import { join } from 'path';

const pathToInfoLogFile = join(__dirname, '..', '..', 'logs', 'info.log');
const pathToErrorLogFile = join(__dirname, '..', '..', 'logs', 'error.log');

@Injectable()
export class Logger implements LoggerService {
  constructor(private configService: ConfigService) {}

  async log(message: string) {
    const logMessage = `[${new Date().toISOString()}] INFO: ${message}\n`;

    if (this.configService.get('WRITE_LOGS_TO_FILE') === 'true') {
      await this.writeToFile(logMessage, pathToInfoLogFile);
    }
    console.log(logMessage);
  }

  async error(message: string) {
    const errorMessage = `[${new Date().toISOString()}] ERROR: ${message}\n`;

    if (this.configService.get('WRITE_LOGS_TO_FILE') === 'true') {
      await this.writeToFile(errorMessage, pathToErrorLogFile);
    }
    console.error(errorMessage);
  }

  async warn(message: string) {
    await this.log(message);
  }

  async debug(message: string) {
    await this.log(message);
  }

  async verbose(message: string) {
    await this.log(message);
  }

  async writeToFile(message: string, filePath: string): Promise<void> {
    writeFile(
      filePath,
      message,
      {
        flag: 'a',
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  }
}
