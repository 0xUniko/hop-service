import { Injectable } from '@nestjs/common';
import { Hop, Chain } from '@hop-protocol/sdk';
import { Wallet, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { ChainName, BridgeBody } from './types';

@Injectable()
export class AppService {
  provider: ethers.providers.JsonRpcProvider;
  hop: Hop;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.providers.JsonRpcProvider(
      configService.get<string>('rpc'),
    );

    this.hop = new Hop('mainnet');
  }

  async bridge({
    amount,
    fromChain,
    toChain,
    privateKey,
  }: BridgeBody): Promise<string> {
    const wallet = new Wallet(privateKey, this.provider);
    const bridge = await this.hop.connect(wallet).bridge('ETH');
    const tx = await bridge.send(
      String(amount),
      Chain[fromChain],
      Chain[toChain],
    );
    return tx.hash;
  }

  getHello(fromChain: string): string {
    console.log(Chain.Ethereum);
    console.log(Chain['Ethereum']);
    return Chain[fromChain];
  }
}
