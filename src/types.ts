// type ChainName =
//   | 'Ethereum'
//   | 'Optimism'
//   | 'Arbitrum'
//   | 'Polygon'
//   | 'Gnosis'
//   | 'Nova'
//   | 'zkSync'
//   | 'Linea'
//   | 'Scroll zkEVM'
//   | 'Base'
//   | 'Polygon zkEVM';

export type ChainName =
  | 'Ethereum'
  | 'Optimism'
  | 'Arbitrum'
  | 'Polygon'
  | 'Gnosis'
  | 'Nova'
  | 'ZkSync'
  | 'Linea'
  | 'ScrollZk'
  | 'Base'
  | 'PolygonZk';

export interface BridgeBody {
  amount: number;
  fromChain: ChainName;
  toChain: ChainName;
  privateKey: string;
}
