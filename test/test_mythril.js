const assert = require('assert');
const mythril = require('../lib/mythril');

describe('mythril', function() {
    it('should give convert truffle build/contract JSON to MP JSON', () =>  {
        const fs = require('fs');
        const buildPath = `${__dirname}/sample-truffle/build/` +
        'contracts/SimpleDAO.json';
        const data = fs.readFileSync(buildPath, 'utf8');
        let truffleJSON = JSON.parse(data);
        assert.ok(data, 'Have truffleJSON');
        let mythrilJSON = mythril.truffle2MythrilJSON(truffleJSON);

        const expected = {
            'contractName': 'SimpleDAO',
            'abi': [
                {
                    'constant': true,
                    'inputs': [
                        {
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'credit',
                    'outputs': [
                        {
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'payable': false,
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'constant': false,
                    'inputs': [
                        {
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'donate',
                    'outputs': [],
                    'payable': true,
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'constant': false,
                    'inputs': [
                        {
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdraw',
                    'outputs': [],
                    'payable': false,
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'constant': true,
                    'inputs': [
                        {
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'queryCredit',
                    'outputs': [
                        {
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'payable': false,
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ],
            'bytecode': '0x608060405234801561001057600080fd5b50610320806100206000396000f300608060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062362a95146100665780632e1a7d4d1461009c57806359f1286d146100c9578063d5d44d8014610120575b600080fd5b61009a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610177565b005b3480156100a857600080fd5b506100c7600480360381019080803590602001909291905050506101c6565b005b3480156100d557600080fd5b5061010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610294565b6040518082815260200191505060405180910390f35b34801561012c57600080fd5b50610161600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102dc565b6040518082815260200191505060405180910390f35b346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515610291573373ffffffffffffffffffffffffffffffffffffffff168160405160006040518083038185875af192505050151561024457600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060205280600052604060002060009150905054815600a165627a7a72305820995dd360cfe1e03c0dded401ac885f902c03677f72bdcce6d8d845db1f313dca0029',
            'deployedBytecode': '0x608060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062362a95146100665780632e1a7d4d1461009c57806359f1286d146100c9578063d5d44d8014610120575b600080fd5b61009a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610177565b005b3480156100a857600080fd5b506100c7600480360381019080803590602001909291905050506101c6565b005b3480156100d557600080fd5b5061010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610294565b6040518082815260200191505060405180910390f35b34801561012c57600080fd5b50610161600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102dc565b6040518082815260200191505060405180910390f35b346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515610291573373ffffffffffffffffffffffffffffffffffffffff168160405160006040518083038185875af192505050151561024457600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060205280600052604060002060009150905054815600a165627a7a72305820995dd360cfe1e03c0dded401ac885f902c03677f72bdcce6d8d845db1f313dca0029',
            'sourceMap': '195:408:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;195:408:1;;;;;;;',
            'deployedSourceMap': '195:408:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;262:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;342:169;;8:9:-1;5:2;;;30:1;27;20:12;5:2;342:169:1;;;;;;;;;;;;;;;;;;;;;;;;;;515:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;515:86:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;218:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;218:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;262:76;324:9;310:6;:10;317:2;310:10;;;;;;;;;;;;;;;;:23;;;;;;;;;;;262:76;:::o;342:169::-;410:6;389;:18;396:10;389:18;;;;;;;;;;;;;;;;:27;;385:122;;;434:10;:15;;456:6;434:31;;;;;;;;;;;;;;;;;426:40;;;;;;;;494:6;474;:18;481:10;474:18;;;;;;;;;;;;;;;;:26;;;;;;;;;;;385:122;342:169;:::o;515:86::-;568:4;586:6;:10;593:2;586:10;;;;;;;;;;;;;;;;579:17;;515:86;;;:::o;218:39::-;;;;;;;;;;;;;;;;;:::o',
            'sourceList': [
                'SimpleDAO'
            ],
            'sources': {
                'SimpleDAO': '/*\n * @source: http://blockchain.unica.it/projects/ethereum-survey/attacks.html#simpledao\n * @author: Atzei N., Bartoletti M., Cimoli T\n * Modified by Josselin Feist\n */\npragma solidity 0.4.25;\n\ncontract SimpleDAO {\n  mapping (address => uint) public credit;\n\n  function donate(address to) payable public{\n    credit[to] += msg.value;\n  }\n\n  function withdraw(uint amount) public{\n    if (credit[msg.sender]>= amount) {\n      require(msg.sender.call.value(amount)());\n      credit[msg.sender]-=amount;\n    }\n  }\n\n  function queryCredit(address to) view public returns(uint){\n    return credit[to];\n  }\n}\n'
            }
        };
        assert.deepEqual(mythrilJSON, expected);
    });
});
