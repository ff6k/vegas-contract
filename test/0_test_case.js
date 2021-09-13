var VegasCoin = artifacts.require("TokenMintERC20MintableToken");

contract('vegascoin', function(accounts) {
    
    let vcoin
    const name = "VegasCoins.io"
    const symbol = 'VCoins'
    const decimals = 18
    const initialSupply = 1000000000
    const feeReceiver = '0x5807c6ecb0AB413816f7C90f0e5C2974bDF89fc3'
    const tokenOwnerAddress = '0xD084e8bBCE0853f0ef57FAC2Ea7964F7a57E788b'

    
    /*
    *   Contract initiation  
    *   
    */
    it("Create Vegas Coin Instance", async() => {
        vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
        assert(vcoin !== undefined, 'No Vegas Coin instance');
    }).timeout(100000);

    /*
    * Verify contract identifier
    */
   it("Confirmed Token Identifier", async() => {
        vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
        console.log(`${name} :: ${symbol} :: ${decimals} :: ${initialSupply} :: ${feeReceiver} :: ${tokenOwnerAddress}`)
   })

   //transferMinterRole(address newMinter)
   it("Contract Owner should be initial balance", async() => {
    vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
    let balance = await vcoin.balanceOf(tokenOwnerAddress);
    console.log(`Initial Balance of Minter ${balance}`)
   })

   it("Must be able to burn certain amount", async() => {
    vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
    await vcoin.burn(5000);
    let balance = await vcoin.balanceOf(tokenOwnerAddress);
    console.log(`Balance after burn ${balance}`)
   })

   //mint
   it("Must add to supply after minting", async() => {
    vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
    await vcoin.mint(tokenOwnerAddress, 5000)
    let balance = await vcoin.balanceOf(tokenOwnerAddress);
    console.log(`Balance after minting ${balance}`)
   })

   //Step one random value
   it("Must have 3 random numbers", async() => {
    vcoin = await VegasCoin.deployed(name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress);
    let results = await vcoin.spinSlotMachine();
    console.log(`Slot Machine Random Numbers ${results[0]}::${results[1]}::${results[2]}`)
   })

   //Step two random value
   //Step three generate percentage of distribution
   //Step four air drop


});