//first smart contract
//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;//any version above 0.8.7 is okay for this contract

contract SimpleContract{
    //boolean,uint,int,address,bytes
    bool hasFavouriteNumber =true;
uint256 public favouriteNumber;
bytes32 favouriteBytes ="Lion";
mapping(string=>uint256) public nameToFavouriteNumber;//mapping string to uint

function store(uint256 _favouriteNumber) public
 {
    favouriteNumber = _favouriteNumber;
}

struct People 
{
    uint256 favouriteNumber;
    string name;
}
People[] public people;
function addPerson(string memory _name, uint256 _favouriteNumber)public 
{
    people.push(People(_favouriteNumber,_name));
    nameToFavouriteNumber[_name] = _favouriteNumber;

}


}
//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4