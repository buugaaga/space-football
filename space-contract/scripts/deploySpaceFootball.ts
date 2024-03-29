import { toNano } from '@ton/core';
import { SpaceFootball } from '../wrappers/SpaceFootball';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const spaceFootball = provider.open(await SpaceFootball.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await spaceFootball.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(spaceFootball.address);

    console.log('ID', await spaceFootball.getId());
}
