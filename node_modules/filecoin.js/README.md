A JavaScript (and TypeScript) library for interacting with the [Filecoin's](https://filecoin.io) [Lotus](https://github.com/filecoin-project/lotus) node, with support for external signers.

:warning: The library is currently in ALPHA: things will not work or work incorectly, will break and the API will change! :warning:

## Installing

Node:

```bash
npm install --save filecoin.js
```

Browser:

```html
<script type="text/javascript" src="https://unpkg.com/filecoin.js"></script>
<!-- window.FilecoinJs object contains the library exports -->
```
## Using

Node JavaScript/TypeScript:

```javascript
import { HttpJsonRpcConnector, MnemonicWalletProvider } from 'filecoin.js';

(async () => {

  const connector = new HttpJsonRpcConnector({ url: __LOTUS_RPC_ENDPOINT__, token: __LOTUS_AUTH_TOKEN__ });

  const hdWalletMnemonic = 'equip ... young';
  const hdWalletPassword = '...';
  const hdDerivationPath = `m/44'/461'/0'/0/0`;

  const walletProvider = new MnemonicWalletProvider(
    connector,
    hdWalletMnemonic,
    hdWalletPassword,
    hdDerivationPath
  );

  const myAddress = await walletProvider.getDefaultAccount();
  console.log(myAddress);
  // f1zx43cf6qb6rd...

})().then().catch();
```

Browser:

```html
<script type="text/javascript" src="https://unpkg.com/filecoin.js"></script>
<script type="text/javascript">
(async () => {

  const connector = new FilecoinJs.HttpJsonRpcConnector({ url: __LOTUS_RPC_ENDPOINT__, token: __LOTUS_AUTH_TOKEN__ });

  const hdWalletMnemonic = 'equip ... young';
  const hdWalletPassword = async () => await window.prompt(),;
  const hdDerivationPath = `m/44'/461'/0'/0/0`;

  const walletProvider = new FilecoinJs.MnemonicWalletProvider(
    connector,
    hdWalletMnemonic,
    hdWalletPassword,
    hdDerivationPath
  );

  const myAddress = await walletProvider.getDefaultAccount();
  console.log(myAddress);
  // f1zx43cf6qb6rd...

})().then().catch();
</script>
```

## Examples

Sending some FIL to `someAddress`:

```javascript
    const message = await walletProvider.createMessage({
      From: myAddress,
      To: someAddress,
      Value: new BigNumber(42),
    });

    const msgCid = await walletProvider.sendSignedMessage(
      await walletProvider.signMessage(message)
    );
```

Check out the [tests](./tests/) or [examples](./documentation/examples) folders for more usage examples.

## Documentation

As with the rest of the library, the documentation is WIP. As it evolves the [documentation site](https://filecoin-shipyard.github.io/filecoin.js/) will be updated.

## Contributing

Feel free to join in. All welcome. [Open an issue!](https://github.com/Digital-MOB-Filecoin/filecoin.js/issues)

## License

Dual-licensed under [MIT](./LICENSE-MIT) + [Apache 2.0](./LICENSE-APACHE)
