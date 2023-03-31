const { ethers } = require('hardhat')

const main = async () => {
  const MiniMeTokenFactory = await ethers.getContractFactory('MiniMeTokenFactory')
  const miniMeTokenFactory = await MiniMeTokenFactory.deploy()
  console.log("MiniMeTokenFactory:", miniMeTokenFactory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
