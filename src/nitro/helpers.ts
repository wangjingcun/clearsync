import { Allocation, AllocationType } from '@statechannels/exit-format';
import { BigNumber, BigNumberish, ethers } from 'ethers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isBigNumberish } from '@ethersproject/bignumber/lib/bignumber';

import type { Outcome } from './contract/outcome';

/**
 * A mapping from destination to BigNumberish. E.g. {ALICE:2, BOB:3}. Only used in testing.
 */
export type AssetOutcomeShortHand = Record<string, BigNumberish>;

/**
 * A mapping from asset to AssetOutcomeShorthand. E.g. {ETH: {ALICE:2, BOB:3}, DAI: {ALICE:1, BOB:4}}. Only used in testing.
 */
export type OutcomeShortHand = Record<string, AssetOutcomeShortHand>;

export type AddressesLookup = Record<string, string | undefined>;

/**
 * Recursively replaces any key in a copy of the supplied object with the value of that key in the supplied addresses object. Also BigNumberifies all numbers.
 * Used in testing only.
 * @param object Object to be copied and modified
 * @param addresses Key-value address lookup
 * @returns suitably modified copy of object
 */
export function replaceAddressesAndBigNumberify(
  object: AssetOutcomeShortHand | OutcomeShortHand | BigNumberish,
  addresses: AddressesLookup,
): AssetOutcomeShortHand | OutcomeShortHand | BigNumberish {
  if (isBigNumberish(object)) {
    return BigNumber.from(object);
  }
  const newObject: AssetOutcomeShortHand | OutcomeShortHand = {};
  for (const key of Object.keys(object)) {
    if (isBigNumberish(object[key])) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newObject[addresses[key]!] = BigNumber.from(object[key]);
    } else if (typeof object[key] === 'object') {
      // Recurse
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newObject[addresses[key]!] = replaceAddressesAndBigNumberify(object[key], addresses) as
        | AssetOutcomeShortHand
        | BigNumberish;
    }
  }
  return newObject;
}

/** Computes an Outcome from a shorthand description */
export function computeOutcome(outcomeShortHand: OutcomeShortHand): Outcome {
  const outcome: Outcome = [];
  for (const asset of Object.keys(outcomeShortHand)) {
    const allocations: Allocation[] = [];
    for (const destination of Object.keys(outcomeShortHand[asset]))
      allocations.push({
        destination,
        amount: BigNumber.from(outcomeShortHand[asset][destination]).toHexString(),
        metadata: '0x',
        allocationType: AllocationType.simple,
      });
    outcome.push({ asset, assetMetadata: { assetType: 0, metadata: '0x' }, allocations });
  }
  return outcome;
}

export function getRandomNonce(seed: string): string {
  // Returns a hex string representing a 64 bit integer
  return ethers.utils.id(seed).slice(0, 18); // '0x' plus [16 hexits is 8 bytes is 64 bits]
}
