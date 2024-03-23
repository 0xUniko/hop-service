import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { BridgeBody } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('bridge')
  async bridge(@Body() bridgeBody: BridgeBody): Promise<string> {
    return await this.appService.bridge(bridgeBody);
  }

  @Get('getHello')
  getHello(@Query() fromChain): string {
    return this.appService.getHello(fromChain);
  }
}
