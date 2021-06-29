import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  getHome(): string {
    return 'Service is running!';
  }
}
