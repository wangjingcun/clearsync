import type { Outcome } from '../../nitro';

type DestinationAmount = [string, number];

export function singleAssetOutcome(asset: string, allocations: DestinationAmount[]): Outcome {
  return [
    {
      asset,
      assetMetadata: {
        assetType: 0,
        metadata: '0x',
      },
      allocations: allocations.map((alloc) => ({
        destination: alloc[0],
        amount: alloc[1].toString(),
        allocationType: 0,
        metadata: '0x',
      })),
    },
  ];
}
