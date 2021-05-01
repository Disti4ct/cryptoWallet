export const WalletItem = (props) => {
  const { ticker, address, balance, shortAddress } = props;

  const partOfTheAddress =
    address.substr(0, 4) + // 4 chars
    '...' +
    address.substr(address.length - 3, address.length); // 3 chars

  const fixBalance = () => {
    let strBalance = String(balance);
    const hasDecimals = strBalance.split('.').length > 1;
    const tooLong = hasDecimals && strBalance.split('.')[1].length > 6; // six just for display

    if (tooLong) {
      strBalance = Number.parseFloat(strBalance).toFixed(5).toString() + '...';
    }

    return strBalance;
  };

  return (
    <div className="wallet-item">
      <p className="wallet-item__header">
        <span className="wallet-item__ticker">{ticker.toUpperCase()}</span>{' '}
        <div className="wallet-item__balance-wrapper">
          <span className="wallet-item__crypto">{fixBalance()}</span>
          <span className="wallet-item__fiat">{fixBalance()}</span>
        </div>
      </p>

      <span className="wallet-item__address">
        {shortAddress ? partOfTheAddress : address}
      </span>
    </div>
  );
};
