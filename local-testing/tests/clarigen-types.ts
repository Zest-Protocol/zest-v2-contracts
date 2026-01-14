
import type { TypedAbiArg, TypedAbiFunction, TypedAbiMap, TypedAbiVariable, Response } from '@clarigen/core';

export const contracts = {
  assets: {
  "functions": {
    callGetDecimals: {"name":"call-get-decimals","access":"private","args":[{"name":"ft","type":"trait_reference"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">], bigint>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    increment: {"name":"increment","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    iterUintToListU64: {"name":"iter-uint-to-list-u64","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"result","type":{"list":{"type":"uint128","length":64}}},{"name":"val","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"list":{"type":"uint128","length":64}}},{"name":"val","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "result": number | bigint[];
  "val": number | bigint;
}, "acc">], {
  "result": bigint[];
  "val": bigint;
}>,
    maskPos: {"name":"mask-pos","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"collateral","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, collateral: TypedAbiArg<boolean, "collateral">], bigint>,
    status: {"name":"status","access":"private","args":[{"name":"id","type":"uint128"},{"name":"enabled-mask","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">], Response<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    subset: {"name":"subset","access":"private","args":[{"name":"sub","type":"uint128"},{"name":"super","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[sub: TypedAbiArg<number | bigint, "sub">, _super: TypedAbiArg<number | bigint, "_super">], boolean>,
    uintToBuff1: {"name":"uint-to-buff1","access":"private","args":[{"name":"v","type":"uint128"}],"outputs":{"type":{"buffer":{"length":1}}}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], Uint8Array>,
    uintToListU64: {"name":"uint-to-list-u64","access":"private","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], bigint[]>,
    unwrapStatus: {"name":"unwrap-status","access":"private","args":[{"name":"id","type":"uint128"},{"name":"enabled-mask","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}>,
    disable: {"name":"disable","access":"public","args":[{"name":"asset","type":"principal"},{"name":"collateral","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">, collateral: TypedAbiArg<boolean, "collateral">], Response<boolean, bigint>>,
    enable: {"name":"enable","access":"public","args":[{"name":"asset","type":"principal"},{"name":"collateral","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">, collateral: TypedAbiArg<boolean, "collateral">], Response<boolean, bigint>>,
    insert: {"name":"insert","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"oracle-data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, oracleData: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "oracleData">], Response<bigint, bigint>>,
    update: {"name":"update","access":"public","args":[{"name":"asset","type":"principal"},{"name":"oracle-data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">, oracleData: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "oracleData">], Response<boolean, bigint>>,
    enabled: {"name":"enabled","access":"read_only","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], boolean>,
    find: {"name":"find","access":"read_only","args":[{"name":"asset","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"decimals","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">], Response<{
  "addr": string;
  "decimals": bigint;
  "id": Uint8Array;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    getAssetStatus: {"name":"get-asset-status","access":"read_only","args":[{"name":"address","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[address: TypedAbiArg<string, "address">], Response<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    getBitmap: {"name":"get-bitmap","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getNonce: {"name":"get-nonce","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getReverse: {"name":"get-reverse","access":"read_only","args":[{"name":"asset","type":"principal"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":1}},"error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">], Response<Uint8Array, bigint>>,
    getStatus: {"name":"get-status","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    lookup: {"name":"lookup","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"decimals","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<{
  "addr": string;
  "decimals": bigint;
  "id": Uint8Array;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    statusMulti: {"name":"status-multi","access":"read_only","args":[{"name":"ids","type":{"list":{"type":"uint128","length":64}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"length":64}}}} as TypedAbiFunction<[ids: TypedAbiArg<number | bigint[], "ids">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}[]>
  },
  "maps": {
    registry: {"name":"registry","key":{"buffer":{"length":1}},"value":{"tuple":[{"name":"addr","type":"principal"},{"name":"decimals","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}} as TypedAbiMap<Uint8Array, {
  "addr": string;
  "decimals": bigint;
  "id": Uint8Array;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}>,
    reverse: {"name":"reverse","key":"principal","value":{"buffer":{"length":1}}} as TypedAbiMap<string, Uint8Array>
  },
  "variables": {
    DEBT_OFFSET: {
  name: 'DEBT-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_ENABLED: {
  name: 'ERR-ALREADY-ENABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ALREADY_REGISTERED: {
  name: 'ERR-ALREADY-REGISTERED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ASSET: {
  name: 'ERR-INVALID-ASSET',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ID: {
  name: 'ERR-INVALID-ID',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_STALENESS: {
  name: 'ERR-INVALID-STALENESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LIMIT_REACHED: {
  name: 'ERR-LIMIT-REACHED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_ENABLED: {
  name: 'ERR-NOT-ENABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    iTERUINT64: {
  name: 'ITER-UINT-64',
  type: {
    list: {
      type: 'uint128',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    MAX_ASSETS: {
  name: 'MAX-ASSETS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u128BUFFLEN: {
  name: 'U128-BUFF-LEN',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u32BUFFOFFSET: {
  name: 'U32-BUFF-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u8BUFFOFFSET: {
  name: 'U8-BUFF-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    bitmap: {
  name: 'bitmap',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    nonce: {
  name: 'nonce',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  dEBTOFFSET: 64n,
  eRRALREADYENABLED: {
    isOk: false,
    value: 710_004n
  },
  eRRALREADYREGISTERED: {
    isOk: false,
    value: 710_003n
  },
  eRRAUTH: {
    isOk: false,
    value: 710_001n
  },
  eRRINVALIDASSET: {
    isOk: false,
    value: 710_007n
  },
  eRRINVALIDID: {
    isOk: false,
    value: 710_008n
  },
  eRRINVALIDSTALENESS: {
    isOk: false,
    value: 710_006n
  },
  eRRLIMITREACHED: {
    isOk: false,
    value: 710_002n
  },
  eRRNOTENABLED: {
    isOk: false,
    value: 710_005n
  },
  iTERUINT64: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    9n,
    10n,
    11n,
    12n,
    13n,
    14n,
    15n,
    16n,
    17n,
    18n,
    19n,
    20n,
    21n,
    22n,
    23n,
    24n,
    25n,
    26n,
    27n,
    28n,
    29n,
    30n,
    31n,
    32n,
    33n,
    34n,
    35n,
    36n,
    37n,
    38n,
    39n,
    40n,
    41n,
    42n,
    43n,
    44n,
    45n,
    46n,
    47n,
    48n,
    49n,
    50n,
    51n,
    52n,
    53n,
    54n,
    55n,
    56n,
    57n,
    58n,
    59n,
    60n,
    61n,
    62n,
    63n
  ],
  mAXASSETS: 64n,
  u128BUFFLEN: 17n,
  u32BUFFOFFSET: 13n,
  u8BUFFOFFSET: 16n,
  bitmap: 0n,
  nonce: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'assets',
  },
daoExecutor: {
  "functions": {
    checkImplAuth: {"name":"check-impl-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    executeProposal: {"name":"execute-proposal","access":"public","args":[{"name":"script","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[script: TypedAbiArg<string, "script">], Response<boolean, bigint>>,
    init: {"name":"init","access":"public","args":[{"name":"new-impl","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newImpl: TypedAbiArg<string, "newImpl">], Response<boolean, bigint>>,
    setImpl: {"name":"set-impl","access":"public","args":[{"name":"new-impl","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newImpl: TypedAbiArg<string, "newImpl">], Response<boolean, bigint>>,
    getImpl: {"name":"get-impl","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":"principal"},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>
  },
  "maps": {
    
  },
  "variables": {
    DEPLOYER: {
  name: 'DEPLOYER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    impl: {
  name: 'impl',
  type: {
    optional: 'principal'
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  DEPLOYER: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  eRRAUTH: {
    isOk: false,
    value: 200_001n
  },
  eRRINIT: {
    isOk: false,
    value: 200_002n
  },
  impl: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'dao-executor',
  },
daoMultisig: {
  "functions": {
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkSignerAuth: {"name":"check-signer-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    setSigner: {"name":"set-signer","access":"private","args":[{"name":"signer","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[signer: TypedAbiArg<string, "signer">], boolean>,
    addSigner: {"name":"add-signer","access":"public","args":[{"name":"addr","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[addr: TypedAbiArg<string, "addr">], Response<boolean, bigint>>,
    approve: {"name":"approve","access":"public","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<boolean, bigint>>,
    cancelImplUpdate: {"name":"cancel-impl-update","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    execute: {"name":"execute","access":"public","args":[{"name":"id","type":"uint128"},{"name":"script","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, script: TypedAbiArg<string, "script">], Response<boolean, bigint>>,
    executeImplUpdate: {"name":"execute-impl-update","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    init: {"name":"init","access":"public","args":[{"name":"signer-list","type":{"list":{"type":"principal","length":20}}},{"name":"new-threshold","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[signerList: TypedAbiArg<string[], "signerList">, newThreshold: TypedAbiArg<number | bigint, "newThreshold">], Response<boolean, bigint>>,
    propose: {"name":"propose","access":"public","args":[{"name":"script","type":"principal"},{"name":"urgent","type":"bool"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[script: TypedAbiArg<string, "script">, urgent: TypedAbiArg<boolean, "urgent">], Response<bigint, bigint>>,
    removeSigner: {"name":"remove-signer","access":"public","args":[{"name":"addr","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[addr: TypedAbiArg<string, "addr">], Response<boolean, bigint>>,
    scheduleImplUpdate: {"name":"schedule-impl-update","access":"public","args":[{"name":"new-impl","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newImpl: TypedAbiArg<string, "newImpl">], Response<boolean, bigint>>,
    setDefaultExpiryDuration: {"name":"set-default-expiry-duration","access":"public","args":[{"name":"duration","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[duration: TypedAbiArg<number | bigint, "duration">], Response<boolean, bigint>>,
    setThreshold: {"name":"set-threshold","access":"public","args":[{"name":"new-threshold","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newThreshold: TypedAbiArg<number | bigint, "newThreshold">], Response<boolean, bigint>>,
    getApprovalCount: {"name":"get-approval-count","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], bigint | null>,
    getNonce: {"name":"get-nonce","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getPendingImplUpdate: {"name":"get-pending-impl-update","access":"read_only","args":[],"outputs":{"type":{"optional":{"tuple":[{"name":"new-impl","type":"principal"},{"name":"scheduled-at","type":"uint128"}]}}}} as TypedAbiFunction<[], {
  "newImpl": string;
  "scheduledAt": bigint;
} | null>,
    getProposal: {"name":"get-proposal","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"approvals","type":{"list":{"type":"principal","length":20}}},{"name":"created-at","type":"uint128"},{"name":"executed","type":"bool"},{"name":"expires-at","type":"uint128"},{"name":"script","type":"principal"},{"name":"urgent","type":"bool"}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "approvals": string[];
  "createdAt": bigint;
  "executed": boolean;
  "expiresAt": bigint;
  "script": string;
  "urgent": boolean;
} | null>,
    getSignerCount: {"name":"get-signer-count","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getThreshold: {"name":"get-threshold","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    hasApproved: {"name":"has-approved","access":"read_only","args":[{"name":"signer","type":"principal"},{"name":"id","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[signer: TypedAbiArg<string, "signer">, id: TypedAbiArg<number | bigint, "id">], boolean>,
    isSigner: {"name":"is-signer","access":"read_only","args":[{"name":"addr","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[addr: TypedAbiArg<string, "addr">], boolean>
  },
  "maps": {
    proposals: {"name":"proposals","key":"uint128","value":{"tuple":[{"name":"approvals","type":{"list":{"type":"principal","length":20}}},{"name":"created-at","type":"uint128"},{"name":"executed","type":"bool"},{"name":"expires-at","type":"uint128"},{"name":"script","type":"principal"},{"name":"urgent","type":"bool"}]}} as TypedAbiMap<number | bigint, {
  "approvals": string[];
  "createdAt": bigint;
  "executed": boolean;
  "expiresAt": bigint;
  "script": string;
  "urgent": boolean;
}>,
    signers: {"name":"signers","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    DEPLOYER: {
  name: 'DEPLOYER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_DAO: {
  name: 'ERR-DAO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_IMPL_UPDATE_NOT_READY: {
  name: 'ERR-IMPL-UPDATE-NOT-READY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_IMPL_UPDATE_PENDING: {
  name: 'ERR-IMPL-UPDATE-PENDING',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PROPOSAL_EXPIRED: {
  name: 'ERR-PROPOSAL-EXPIRED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SANITY_PROPOSAL: {
  name: 'ERR-SANITY-PROPOSAL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SANITY_SIGNER: {
  name: 'ERR-SANITY-SIGNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER: {
  name: 'ERR-SIGNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    IMPL_UPDATE_TIMELOCK: {
  name: 'IMPL-UPDATE-TIMELOCK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_SIGNERS: {
  name: 'MAX-SIGNERS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TIMELOCK: {
  name: 'TIMELOCK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    defaultExpiryDuration: {
  name: 'default-expiry-duration',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    nonce: {
  name: 'nonce',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pendingImplUpdate: {
  name: 'pending-impl-update',
  type: {
    optional: {
      tuple: [
        {
          name: 'new-impl',
          type: 'principal'
        },
        {
          name: 'scheduled-at',
          type: 'uint128'
        }
      ]
    }
  },
  access: 'variable'
} as TypedAbiVariable<{
  "newImpl": string;
  "scheduledAt": bigint;
} | null>,
    signerCount: {
  name: 'signer-count',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    threshold: {
  name: 'threshold',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  DEPLOYER: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  eRRDAO: {
    isOk: false,
    value: 100_001n
  },
  eRRIMPLUPDATENOTREADY: {
    isOk: false,
    value: 100_007n
  },
  eRRIMPLUPDATEPENDING: {
    isOk: false,
    value: 100_006n
  },
  eRRPROPOSALEXPIRED: {
    isOk: false,
    value: 100_005n
  },
  eRRSANITYPROPOSAL: {
    isOk: false,
    value: 100_004n
  },
  eRRSANITYSIGNER: {
    isOk: false,
    value: 100_003n
  },
  eRRSIGNER: {
    isOk: false,
    value: 100_002n
  },
  iMPLUPDATETIMELOCK: 604_800n,
  mAXSIGNERS: 20n,
  TIMELOCK: 86_400n,
  defaultExpiryDuration: 2_592_000n,
  nonce: 0n,
  pendingImplUpdate: null,
  signerCount: 0n,
  threshold: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'dao-multisig',
  },
daoTraits: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'dao-traits',
  },
daoTreasury: {
  "functions": {
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    withdraw: {"name":"withdraw","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ZEST_STX_WRAPPER_CONTRACT: {
  name: 'ZEST-STX-WRAPPER-CONTRACT',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>
  },
  constants: {
  eRRAUTH: {
    isOk: false,
    value: 300_001n
  },
  zESTSTXWRAPPERCONTRACT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'dao-treasury',
  },
diaOracle: {
  "functions": {
    checkIsOracleUpdater: {"name":"check-is-oracle-updater","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    updateValue: {"name":"update-value","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"key","type":{"string-ascii":{"length":32}}},{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"action","type":{"string-ascii":{"length":7}}},{"name":"data","type":{"tuple":[{"name":"key","type":{"string-ascii":{"length":32}}},{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "key": string;
  "timestamp": number | bigint;
  "value": number | bigint;
}, "entry">], {
  "action": string;
  "data": {
  "key": string;
  "timestamp": bigint;
  "value": bigint;
};
}>,
    changeOracleUpdater: {"name":"change-oracle-updater","access":"public","args":[{"name":"new-oracle-updater","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newOracleUpdater: TypedAbiArg<string, "newOracleUpdater">], Response<boolean, bigint>>,
    setMultipleValues: {"name":"set-multiple-values","access":"public","args":[{"name":"entries","type":{"list":{"type":{"tuple":[{"name":"key","type":{"string-ascii":{"length":32}}},{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"length":10}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[entries: TypedAbiArg<{
  "key": string;
  "timestamp": number | bigint;
  "value": number | bigint;
}[], "entries">], Response<boolean, bigint>>,
    setValue: {"name":"set-value","access":"public","args":[{"name":"key","type":{"string-ascii":{"length":32}}},{"name":"value","type":"uint128"},{"name":"timestamp","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">, value: TypedAbiArg<number | bigint, "value">, timestamp: TypedAbiArg<number | bigint, "timestamp">], Response<boolean, bigint>>,
    getOracleUpdater: {"name":"get-oracle-updater","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getValue: {"name":"get-value","access":"read_only","args":[{"name":"key","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, null>>
  },
  "maps": {
    values: {"name":"values","key":{"string-ascii":{"length":32}},"value":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]}} as TypedAbiMap<string, {
  "timestamp": bigint;
  "value": bigint;
}>
  },
  "variables": {
    errUnauthorized: {
  name: 'err-unauthorized',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    oracleUpdater: {
  name: 'oracle-updater',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'dia-oracle',
  },
egroup: {
  "functions": {
    active: {"name":"active","access":"private","args":[{"name":"min","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":128}}}} as TypedAbiFunction<[min: TypedAbiArg<number | bigint, "min">], bigint[]>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkEgroupInvariant: {"name":"check-egroup-invariant","access":"private","args":[{"name":"id","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"exclude-id","type":{"optional":"uint128"}},{"name":"max-id","type":"uint128"},{"name":"new-ltv-borrow","type":"uint128"},{"name":"new-ltv-liq-full","type":"uint128"},{"name":"new-ltv-liq-partial","type":"uint128"},{"name":"new-mask","type":"uint128"},{"name":"valid","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"exclude-id","type":{"optional":"uint128"}},{"name":"max-id","type":"uint128"},{"name":"new-ltv-borrow","type":"uint128"},{"name":"new-ltv-liq-full","type":"uint128"},{"name":"new-ltv-liq-partial","type":"uint128"},{"name":"new-mask","type":"uint128"},{"name":"valid","type":"bool"}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, acc: TypedAbiArg<{
  "excludeId": number | bigint | null;
  "maxId": number | bigint;
  "newLtvBorrow": number | bigint;
  "newLtvLiqFull": number | bigint;
  "newLtvLiqPartial": number | bigint;
  "newMask": number | bigint;
  "valid": boolean;
}, "acc">], {
  "excludeId": bigint | null;
  "maxId": bigint;
  "newLtvBorrow": bigint;
  "newLtvLiqFull": bigint;
  "newLtvLiqPartial": bigint;
  "newMask": bigint;
  "valid": boolean;
}>,
    filterU128: {"name":"filter-u128","access":"private","args":[{"name":"target","type":"uint128"},{"name":"seq","type":{"list":{"type":"uint128","length":128}}}],"outputs":{"type":{"list":{"type":"uint128","length":128}}}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, seq: TypedAbiArg<number | bigint[], "seq">], bigint[]>,
    findSuperset: {"name":"find-superset","access":"private","args":[{"name":"target","type":"uint128"},{"name":"masks","type":{"list":{"type":"uint128","length":128}}}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, masks: TypedAbiArg<number | bigint[], "masks">], bigint | null>,
    increment: {"name":"increment","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    insertBucket: {"name":"insert-bucket","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], boolean>,
    iterActive: {"name":"iter-active","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"bitmap","type":"uint128"},{"name":"min","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":128}}}]}}],"outputs":{"type":{"tuple":[{"name":"bitmap","type":"uint128"},{"name":"min","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":128}}}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "bitmap": number | bigint;
  "min": number | bigint;
  "result": number | bigint[];
}, "acc">], {
  "bitmap": bigint;
  "min": bigint;
  "result": bigint[];
}>,
    iterFilterU128: {"name":"iter-filter-u128","access":"private","args":[{"name":"id","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"result","type":{"list":{"type":"uint128","length":128}}},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"list":{"type":"uint128","length":128}}},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, acc: TypedAbiArg<{
  "result": number | bigint[];
  "target": number | bigint;
}, "acc">], {
  "result": bigint[];
  "target": bigint;
}>,
    iterFind: {"name":"iter-find","access":"private","args":[{"name":"pop","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"result","type":{"optional":"uint128"}},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"optional":"uint128"}},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[pop: TypedAbiArg<number | bigint, "pop">, acc: TypedAbiArg<{
  "result": number | bigint | null;
  "target": number | bigint;
}, "acc">], {
  "result": bigint | null;
  "target": bigint;
}>,
    iterFindSuperset: {"name":"iter-find-superset","access":"private","args":[{"name":"mask","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"result","type":{"optional":"uint128"}},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"optional":"uint128"}},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">, acc: TypedAbiArg<{
  "result": number | bigint | null;
  "target": number | bigint;
}, "acc">], {
  "result": bigint | null;
  "target": bigint;
}>,
    iterPopulation: {"name":"iter-population","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"c","type":"uint128"},{"name":"v","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"c","type":"uint128"},{"name":"v","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, acc: TypedAbiArg<{
  "c": number | bigint;
  "v": number | bigint;
}, "acc">], {
  "c": bigint;
  "v": bigint;
}>,
    population: {"name":"population","access":"private","args":[{"name":"v","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], bigint>,
    removeBucket: {"name":"remove-bucket","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], boolean>,
    subset: {"name":"subset","access":"private","args":[{"name":"sub","type":"uint128"},{"name":"super","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[sub: TypedAbiArg<number | bigint, "sub">, _super: TypedAbiArg<number | bigint, "_super">], boolean>,
    uintToBuff1: {"name":"uint-to-buff1","access":"private","args":[{"name":"v","type":"uint128"}],"outputs":{"type":{"buffer":{"length":1}}}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], Uint8Array>,
    uintToBuff2: {"name":"uint-to-buff2","access":"private","args":[{"name":"v","type":"uint128"}],"outputs":{"type":{"buffer":{"length":2}}}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], Uint8Array>,
    validateSupersetInvariant: {"name":"validate-superset-invariant","access":"private","args":[{"name":"new-mask","type":"uint128"},{"name":"new-ltv-borrow","type":"uint128"},{"name":"new-ltv-liq-partial","type":"uint128"},{"name":"new-ltv-liq-full","type":"uint128"},{"name":"max-id","type":"uint128"},{"name":"exclude-id","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newMask: TypedAbiArg<number | bigint, "newMask">, newLtvBorrow: TypedAbiArg<number | bigint, "newLtvBorrow">, newLtvLiqPartial: TypedAbiArg<number | bigint, "newLtvLiqPartial">, newLtvLiqFull: TypedAbiArg<number | bigint, "newLtvLiqFull">, maxId: TypedAbiArg<number | bigint, "maxId">, excludeId: TypedAbiArg<number | bigint | null, "excludeId">], Response<boolean, bigint>>,
    insert: {"name":"insert","access":"public","args":[{"name":"args","type":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":"uint128"},{"name":"LIQ-PENALTY-MAX","type":"uint128"},{"name":"LIQ-PENALTY-MIN","type":"uint128"},{"name":"LTV-BORROW","type":"uint128"},{"name":"LTV-LIQ-FULL","type":"uint128"},{"name":"LTV-LIQ-PARTIAL","type":"uint128"},{"name":"MASK","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[args: TypedAbiArg<{
  "bORROWDISABLEDMASK": number | bigint;
  "lIQCURVEEXP": number | bigint;
  "lIQPENALTYMAX": number | bigint;
  "lIQPENALTYMIN": number | bigint;
  "lTVBORROW": number | bigint;
  "lTVLIQFULL": number | bigint;
  "lTVLIQPARTIAL": number | bigint;
  "MASK": number | bigint;
}, "args">], Response<bigint, bigint>>,
    update: {"name":"update","access":"public","args":[{"name":"this","type":"uint128"},{"name":"params","type":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":"uint128"},{"name":"LIQ-PENALTY-MAX","type":"uint128"},{"name":"LIQ-PENALTY-MIN","type":"uint128"},{"name":"LTV-BORROW","type":"uint128"},{"name":"LTV-LIQ-FULL","type":"uint128"},{"name":"LTV-LIQ-PARTIAL","type":"uint128"},{"name":"MASK","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[_this: TypedAbiArg<number | bigint, "_this">, params: TypedAbiArg<{
  "bORROWDISABLEDMASK": number | bigint;
  "lIQCURVEEXP": number | bigint;
  "lIQPENALTYMAX": number | bigint;
  "lIQPENALTYMIN": number | bigint;
  "lTVBORROW": number | bigint;
  "lTVLIQFULL": number | bigint;
  "lTVLIQPARTIAL": number | bigint;
  "MASK": number | bigint;
}, "params">], Response<boolean, bigint>>,
    find: {"name":"find","access":"read_only","args":[{"name":"target","type":"uint128"}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">], bigint | null>,
    getBucket: {"name":"get-bucket","access":"read_only","args":[{"name":"pop-b1","type":{"buffer":{"length":1}}}],"outputs":{"type":{"optional":{"list":{"type":"uint128","length":128}}}}} as TypedAbiFunction<[popB1: TypedAbiArg<Uint8Array, "popB1">], bigint[] | null>,
    getNonce: {"name":"get-nonce","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPopbucket: {"name":"get-popbucket","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getReverse: {"name":"get-reverse","access":"read_only","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"optional":{"buffer":{"length":1}}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], Uint8Array | null>,
    lookup: {"name":"lookup","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MAX","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MIN","type":{"buffer":{"length":2}}},{"name":"LTV-BORROW","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-FULL","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-PARTIAL","type":{"buffer":{"length":2}}},{"name":"MASK","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "bORROWDISABLEDMASK": bigint;
  "lIQCURVEEXP": Uint8Array;
  "lIQPENALTYMAX": Uint8Array;
  "lIQPENALTYMIN": Uint8Array;
  "lTVBORROW": Uint8Array;
  "lTVLIQFULL": Uint8Array;
  "lTVLIQPARTIAL": Uint8Array;
  "MASK": bigint;
  "id": Uint8Array;
}>,
    resolve: {"name":"resolve","access":"read_only","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MAX","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MIN","type":{"buffer":{"length":2}}},{"name":"LTV-BORROW","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-FULL","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-PARTIAL","type":{"buffer":{"length":2}}},{"name":"MASK","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}}]},"error":"uint128"}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], Response<{
  "bORROWDISABLEDMASK": bigint;
  "lIQCURVEEXP": Uint8Array;
  "lIQPENALTYMAX": Uint8Array;
  "lIQPENALTYMIN": Uint8Array;
  "lTVBORROW": Uint8Array;
  "lTVLIQFULL": Uint8Array;
  "lTVLIQPARTIAL": Uint8Array;
  "MASK": bigint;
  "id": Uint8Array;
}, bigint>>,
    serializeAndValidateInput: {"name":"serialize-and-validate-input","access":"read_only","args":[{"name":"this","type":"uint128"},{"name":"args","type":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":"uint128"},{"name":"LIQ-PENALTY-MAX","type":"uint128"},{"name":"LIQ-PENALTY-MIN","type":"uint128"},{"name":"LTV-BORROW","type":"uint128"},{"name":"LTV-LIQ-FULL","type":"uint128"},{"name":"LTV-LIQ-PARTIAL","type":"uint128"},{"name":"MASK","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MAX","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MIN","type":{"buffer":{"length":2}}},{"name":"LTV-BORROW","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-FULL","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-PARTIAL","type":{"buffer":{"length":2}}},{"name":"MASK","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}}]},"error":"uint128"}}}} as TypedAbiFunction<[_this: TypedAbiArg<number | bigint, "_this">, args: TypedAbiArg<{
  "bORROWDISABLEDMASK": number | bigint;
  "lIQCURVEEXP": number | bigint;
  "lIQPENALTYMAX": number | bigint;
  "lIQPENALTYMIN": number | bigint;
  "lTVBORROW": number | bigint;
  "lTVLIQFULL": number | bigint;
  "lTVLIQPARTIAL": number | bigint;
  "MASK": number | bigint;
}, "args">], Response<{
  "bORROWDISABLEDMASK": bigint;
  "lIQCURVEEXP": Uint8Array;
  "lIQPENALTYMAX": Uint8Array;
  "lIQPENALTYMIN": Uint8Array;
  "lTVBORROW": Uint8Array;
  "lTVLIQFULL": Uint8Array;
  "lTVLIQPARTIAL": Uint8Array;
  "MASK": bigint;
  "id": Uint8Array;
}, bigint>>
  },
  "maps": {
    buckets: {"name":"buckets","key":{"buffer":{"length":1}},"value":{"list":{"type":"uint128","length":128}}} as TypedAbiMap<Uint8Array, bigint[]>,
    registry: {"name":"registry","key":{"buffer":{"length":1}},"value":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MAX","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MIN","type":{"buffer":{"length":2}}},{"name":"LTV-BORROW","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-FULL","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-PARTIAL","type":{"buffer":{"length":2}}},{"name":"MASK","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}}]}} as TypedAbiMap<Uint8Array, {
  "bORROWDISABLEDMASK": bigint;
  "lIQCURVEEXP": Uint8Array;
  "lIQPENALTYMAX": Uint8Array;
  "lIQPENALTYMIN": Uint8Array;
  "lTVBORROW": Uint8Array;
  "lTVLIQFULL": Uint8Array;
  "lTVLIQPARTIAL": Uint8Array;
  "MASK": bigint;
  "id": Uint8Array;
}>,
    reverse: {"name":"reverse","key":"uint128","value":{"buffer":{"length":1}}} as TypedAbiMap<number | bigint, Uint8Array>
  },
  "variables": {
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_REGISTERED: {
  name: 'ERR-ALREADY-REGISTERED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LIMIT_REACHED: {
  name: 'ERR-LIMIT-REACHED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LIQ_PARAMS_INVALID: {
  name: 'ERR-LIQ-PARAMS-INVALID',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_MASK_UPDATE_FAILED: {
  name: 'ERR-MASK-UPDATE-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_EGROUP_FOUND: {
  name: 'ERR-NO-EGROUP-FOUND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPERSET_INVARIANT_VIOLATION: {
  name: 'ERR-SUPERSET-INVARIANT-VIOLATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    iTERUINT128: {
  name: 'ITER-UINT-128',
  type: {
    list: {
      type: 'uint128',
      length: 128
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    MAX: {
  name: 'MAX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_FACTOR_DENOM: {
  name: 'MAX-FACTOR-DENOM',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_FACTOR_MUL: {
  name: 'MAX-FACTOR-MUL',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u128BUFFLEN: {
  name: 'U128-BUFF-LEN',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u16BUFFOFFSET: {
  name: 'U16-BUFF-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    u8BUFFOFFSET: {
  name: 'U8-BUFF-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    nonce: {
  name: 'nonce',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    popbucket: {
  name: 'popbucket',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  BPS: 10_000n,
  eRRALREADYREGISTERED: {
    isOk: false,
    value: 720_002n
  },
  eRRAUTH: {
    isOk: false,
    value: 720_001n
  },
  eRRLIMITREACHED: {
    isOk: false,
    value: 720_004n
  },
  eRRLIQPARAMSINVALID: {
    isOk: false,
    value: 720_003n
  },
  eRRMASKUPDATEFAILED: {
    isOk: false,
    value: 720_005n
  },
  eRRNOEGROUPFOUND: {
    isOk: false,
    value: 720_007n
  },
  eRRSUPERSETINVARIANTVIOLATION: {
    isOk: false,
    value: 720_006n
  },
  iTERUINT128: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    9n,
    10n,
    11n,
    12n,
    13n,
    14n,
    15n,
    16n,
    17n,
    18n,
    19n,
    20n,
    21n,
    22n,
    23n,
    24n,
    25n,
    26n,
    27n,
    28n,
    29n,
    30n,
    31n,
    32n,
    33n,
    34n,
    35n,
    36n,
    37n,
    38n,
    39n,
    40n,
    41n,
    42n,
    43n,
    44n,
    45n,
    46n,
    47n,
    48n,
    49n,
    50n,
    51n,
    52n,
    53n,
    54n,
    55n,
    56n,
    57n,
    58n,
    59n,
    60n,
    61n,
    62n,
    63n,
    64n,
    65n,
    66n,
    67n,
    68n,
    69n,
    70n,
    71n,
    72n,
    73n,
    74n,
    75n,
    76n,
    77n,
    78n,
    79n,
    80n,
    81n,
    82n,
    83n,
    84n,
    85n,
    86n,
    87n,
    88n,
    89n,
    90n,
    91n,
    92n,
    93n,
    94n,
    95n,
    96n,
    97n,
    98n,
    99n,
    100n,
    101n,
    102n,
    103n,
    104n,
    105n,
    106n,
    107n,
    108n,
    109n,
    110n,
    111n,
    112n,
    113n,
    114n,
    115n,
    116n,
    117n,
    118n,
    119n,
    120n,
    121n,
    122n,
    123n,
    124n,
    125n,
    126n,
    127n
  ],
  MAX: 128n,
  mAXFACTORDENOM: 40_000n,
  mAXFACTORMUL: 5_000n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  u128BUFFLEN: 17n,
  u16BUFFOFFSET: 15n,
  u8BUFFOFFSET: 16n,
  nonce: 0n,
  popbucket: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'egroup',
  },
ftTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'ft-trait',
  },
market: {
  "functions": {
    accrueAndCache: {"name":"accrue-and-cache","access":"private","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    accrueCollateralAsset: {"name":"accrue-collateral-asset","access":"private","args":[{"name":"coll-entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"success","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"success","type":"bool"}]}}} as TypedAbiFunction<[collEntry: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}, "collEntry">, acc: TypedAbiArg<{
  "success": boolean;
}, "acc">], {
  "success": boolean;
}>,
    accrueDebtAsset: {"name":"accrue-debt-asset","access":"private","args":[{"name":"debt-entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"success","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"success","type":"bool"}]}}} as TypedAbiFunction<[debtEntry: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "debtEntry">, acc: TypedAbiArg<{
  "success": boolean;
}, "acc">], {
  "success": boolean;
}>,
    accrueUserCollateral: {"name":"accrue-user-collateral","access":"private","args":[{"name":"coll-list","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"tuple":[{"name":"success","type":"bool"}]}}} as TypedAbiFunction<[collList: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}[], "collList">], {
  "success": boolean;
}>,
    accrueUserDebts: {"name":"accrue-user-debts","access":"private","args":[{"name":"debt-list","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"tuple":[{"name":"success","type":"bool"}]}}} as TypedAbiFunction<[debtList: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}[], "debtList">], {
  "success": boolean;
}>,
    calcFinalLiquidationAmounts: {"name":"calc-final-liquidation-amounts","access":"private","args":[{"name":"debt-actual-usd","type":"uint128"},{"name":"coll-actual","type":"uint128"},{"name":"coll-expected","type":"uint128"},{"name":"coll-price","type":"uint128"},{"name":"coll-decimals","type":"uint128"},{"name":"debt-price","type":"uint128"},{"name":"debt-decimals","type":"uint128"},{"name":"liq-penalty","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"debt-final","type":"uint128"},{"name":"debt-final-usd","type":"uint128"}]}}} as TypedAbiFunction<[debtActualUsd: TypedAbiArg<number | bigint, "debtActualUsd">, collActual: TypedAbiArg<number | bigint, "collActual">, collExpected: TypedAbiArg<number | bigint, "collExpected">, collPrice: TypedAbiArg<number | bigint, "collPrice">, collDecimals: TypedAbiArg<number | bigint, "collDecimals">, debtPrice: TypedAbiArg<number | bigint, "debtPrice">, debtDecimals: TypedAbiArg<number | bigint, "debtDecimals">, liqPenalty: TypedAbiArg<number | bigint, "liqPenalty">], {
  "debtFinal": bigint;
  "debtFinalUsd": bigint;
}>,
    calcLiqCollateralRepay: {"name":"calc-liq-collateral-repay","access":"private","args":[{"name":"debt-repay","type":"uint128"},{"name":"liq-penalty","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[debtRepay: TypedAbiArg<number | bigint, "debtRepay">, liqPenalty: TypedAbiArg<number | bigint, "liqPenalty">], bigint>,
    calcLiqDebtRepay: {"name":"calc-liq-debt-repay","access":"private","args":[{"name":"debt","type":"uint128"},{"name":"liq-factor","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[debt: TypedAbiArg<number | bigint, "debt">, liqFactor: TypedAbiArg<number | bigint, "liqFactor">], bigint>,
    calcLiqDebtRepayReal: {"name":"calc-liq-debt-repay-real","access":"private","args":[{"name":"collateral-amount-usd","type":"uint128"},{"name":"liq-penalty","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[collateralAmountUsd: TypedAbiArg<number | bigint, "collateralAmountUsd">, liqPenalty: TypedAbiArg<number | bigint, "liqPenalty">], bigint>,
    calcLiqFactor: {"name":"calc-liq-factor","access":"private","args":[{"name":"ltv-curr","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[ltvCurr: TypedAbiArg<number | bigint, "ltvCurr">, ltvLiqPartial: TypedAbiArg<number | bigint, "ltvLiqPartial">, ltvLiqFull: TypedAbiArg<number | bigint, "ltvLiqFull">], bigint>,
    calcLiqFactorBound: {"name":"calc-liq-factor-bound","access":"private","args":[{"name":"liq-factor","type":"uint128"},{"name":"bound-min","type":"uint128"},{"name":"bound-max","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[liqFactor: TypedAbiArg<number | bigint, "liqFactor">, boundMin: TypedAbiArg<number | bigint, "boundMin">, boundMax: TypedAbiArg<number | bigint, "boundMax">], bigint>,
    calcLiqFactorExp: {"name":"calc-liq-factor-exp","access":"private","args":[{"name":"factor","type":"uint128"},{"name":"exp","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[factor: TypedAbiArg<number | bigint, "factor">, exp: TypedAbiArg<number | bigint, "exp">], bigint>,
    calcLiquidationParams: {"name":"calc-liquidation-params","access":"private","args":[{"name":"current-ltv","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"},{"name":"liq-penalty-min","type":"uint128"},{"name":"liq-penalty-max","type":"uint128"},{"name":"curve-exponent","type":"uint128"},{"name":"total-debt-usd","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"liq-pct-scaled","type":"uint128"},{"name":"liq-penalty","type":"uint128"},{"name":"max-debt-usd","type":"uint128"}]}}} as TypedAbiFunction<[currentLtv: TypedAbiArg<number | bigint, "currentLtv">, ltvLiqPartial: TypedAbiArg<number | bigint, "ltvLiqPartial">, ltvLiqFull: TypedAbiArg<number | bigint, "ltvLiqFull">, liqPenaltyMin: TypedAbiArg<number | bigint, "liqPenaltyMin">, liqPenaltyMax: TypedAbiArg<number | bigint, "liqPenaltyMax">, curveExponent: TypedAbiArg<number | bigint, "curveExponent">, totalDebtUsd: TypedAbiArg<number | bigint, "totalDebtUsd">], {
  "liqPctScaled": bigint;
  "liqPenalty": bigint;
  "maxDebtUsd": bigint;
}>,
    calculateAssetNotionalValue: {"name":"calculate-asset-notional-value","access":"private","args":[{"name":"asset-entry","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"clist","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"coll-total","type":"uint128"},{"name":"debt-total","type":"uint128"},{"name":"dlist","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}]}}],"outputs":{"type":{"tuple":[{"name":"clist","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"coll-total","type":"uint128"},{"name":"debt-total","type":"uint128"},{"name":"dlist","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}]}}} as TypedAbiFunction<[assetEntry: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}, "assetEntry">, acc: TypedAbiArg<{
  "clist": {
  "aid": number | bigint;
  "amount": number | bigint;
}[];
  "collTotal": number | bigint;
  "debtTotal": number | bigint;
  "dlist": {
  "aid": number | bigint;
  "scaled": number | bigint;
}[];
}, "acc">], {
  "clist": {
  "aid": bigint;
  "amount": bigint;
}[];
  "collTotal": bigint;
  "debtTotal": bigint;
  "dlist": {
  "aid": bigint;
  "scaled": bigint;
}[];
}>,
    callDia: {"name":"call-dia","access":"private","args":[{"name":"key","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    callLiquidate: {"name":"call-liquidate","access":"private","args":[{"name":"position","type":{"tuple":[{"name":"borrower","type":"principal"},{"name":"collateral-ft","type":"trait_reference"},{"name":"debt-amount","type":"uint128"},{"name":"debt-ft","type":"trait_reference"},{"name":"min-collateral-expected","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"collateral","type":"uint128"},{"name":"debt","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[position: TypedAbiArg<{
  "borrower": string;
  "collateralFt": string;
  "debtAmount": number | bigint;
  "debtFt": string;
  "minCollateralExpected": number | bigint;
}, "position">], Response<{
  "collateral": bigint;
  "debt": bigint;
}, bigint>>,
    callMock: {"name":"call-mock","access":"private","args":[{"name":"key","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    callPyth: {"name":"call-pyth","access":"private","args":[{"name":"ident","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ident: TypedAbiArg<Uint8Array, "ident">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>,
    checkConfidence: {"name":"check-confidence","access":"private","args":[{"name":"price","type":"int128"},{"name":"confidence","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[price: TypedAbiArg<number | bigint, "price">, confidence: TypedAbiArg<number | bigint, "confidence">], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    convertToScaledDebt: {"name":"convert-to-scaled-debt","access":"private","args":[{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    divBpsDown: {"name":"div-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    divDown: {"name":"div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    divUp: {"name":"div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    filterOutDebtAsset: {"name":"filter-out-debt-asset","access":"private","args":[{"name":"debt-asset-list","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"asset-id","type":"uint128"}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}} as TypedAbiFunction<[debtAssetList: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}[], "debtAssetList">, assetId: TypedAbiArg<number | bigint, "assetId">], {
  "aid": bigint;
  "scaled": bigint;
}[]>,
    findAndResolveAssetValue: {"name":"find-and-resolve-asset-value","access":"private","args":[{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}},{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[assets: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}[], "assets">, assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    findAsset: {"name":"find-asset","access":"private","args":[{"name":"target","type":"uint128"},{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}}}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, assets: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}[], "assets">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
  "price": bigint;
} | null>,
    findCollateralAmount: {"name":"find-collateral-amount","access":"private","args":[{"name":"collateral-list","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"target-asset-id","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[collateralList: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}[], "collateralList">, targetAssetId: TypedAbiArg<number | bigint, "targetAssetId">], bigint>,
    findDebtScaled: {"name":"find-debt-scaled","access":"private","args":[{"name":"debt-list","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"target-asset-id","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[debtList: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}[], "debtList">, targetAssetId: TypedAbiArg<number | bigint, "targetAssetId">], bigint>,
    getAccountScaledDebt: {"name":"get-account-scaled-debt","access":"private","args":[{"name":"account","type":"principal"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, assetId: TypedAbiArg<number | bigint, "assetId">], bigint>,
    getAsset: {"name":"get-asset","access":"private","args":[{"name":"asset","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">], Response<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}, bigint>>,
    getAssetId: {"name":"get-asset-id","access":"private","args":[{"name":"asset-entry","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[assetEntry: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
}, "assetEntry">], bigint>,
    getAssetValue: {"name":"get-asset-value","access":"private","args":[{"name":"asset","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}},{"name":"amount","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
}, "asset">, amount: TypedAbiArg<number | bigint, "amount">, roundUp: TypedAbiArg<boolean, "roundUp">], Response<bigint, bigint>>,
    getAssets: {"name":"get-assets","access":"private","args":[{"name":"mask-user","type":"uint128"}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}}} as TypedAbiFunction<[maskUser: TypedAbiArg<number | bigint, "maskUser">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
  "price": bigint;
}[]>,
    getEgroup: {"name":"get-egroup","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"BORROW-DISABLED-MASK","type":"uint128"},{"name":"LIQ-CURVE-EXP","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MAX","type":{"buffer":{"length":2}}},{"name":"LIQ-PENALTY-MIN","type":{"buffer":{"length":2}}},{"name":"LTV-BORROW","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-FULL","type":{"buffer":{"length":2}}},{"name":"LTV-LIQ-PARTIAL","type":{"buffer":{"length":2}}},{"name":"MASK","type":"uint128"},{"name":"id","type":{"buffer":{"length":1}}}]},"error":"uint128"}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], Response<{
  "bORROWDISABLEDMASK": bigint;
  "lIQCURVEEXP": Uint8Array;
  "lIQPENALTYMAX": Uint8Array;
  "lIQPENALTYMIN": Uint8Array;
  "lTVBORROW": Uint8Array;
  "lTVLIQFULL": Uint8Array;
  "lTVLIQPARTIAL": Uint8Array;
  "MASK": bigint;
  "id": Uint8Array;
}, bigint>>,
    getEnabledBitmap: {"name":"get-enabled-bitmap","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getFullPosition: {"name":"get-full-position","access":"private","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "collateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "debt": {
  "aid": bigint;
  "scaled": bigint;
}[];
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}, bigint>>,
    getLiquidationPosition: {"name":"get-liquidation-position","access":"private","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "collateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "debt": {
  "aid": bigint;
  "scaled": bigint;
}[];
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}, bigint>>,
    getNotionalEvaluation: {"name":"get-notional-evaluation","access":"private","args":[{"name":"context","type":{"tuple":[{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}},{"name":"position","type":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}]}}],"outputs":{"type":{"tuple":[{"name":"collateral","type":"uint128"},{"name":"debt","type":"uint128"}]}}} as TypedAbiFunction<[context: TypedAbiArg<{
  "assets": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}[];
  "position": {
  "account": string;
  "collateral": {
  "aid": number | bigint;
  "amount": number | bigint;
}[];
  "debt": {
  "aid": number | bigint;
  "scaled": number | bigint;
}[];
  "id": number | bigint;
  "lastBorrowBlock": number | bigint;
  "lastUpdate": number | bigint;
  "mask": number | bigint;
};
}, "context">], {
  "collateral": bigint;
  "debt": bigint;
}>,
    getOracle: {"name":"get-oracle","access":"private","args":[{"name":"asset-entry","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}}],"outputs":{"type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}} as TypedAbiFunction<[assetEntry: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
}, "assetEntry">], {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
}>,
    getPosition: {"name":"get-position","access":"private","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "collateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "debt": {
  "aid": bigint;
  "scaled": bigint;
}[];
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}, bigint>>,
    getStatusMulti: {"name":"get-status-multi","access":"private","args":[{"name":"ids","type":{"list":{"type":"uint128","length":64}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]},"length":64}}}} as TypedAbiFunction<[ids: TypedAbiArg<number | bigint[], "ids">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
}[]>,
    isHealthy: {"name":"is-healthy","access":"private","args":[{"name":"collateral-usd","type":"uint128"},{"name":"debt-usd","type":"uint128"},{"name":"ltv","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[collateralUsd: TypedAbiArg<number | bigint, "collateralUsd">, debtUsd: TypedAbiArg<number | bigint, "debtUsd">, ltv: TypedAbiArg<number | bigint, "ltv">], boolean>,
    isHealthyWithMask: {"name":"is-healthy-with-mask","access":"private","args":[{"name":"collateral-usd","type":"uint128"},{"name":"debt-usd","type":"uint128"},{"name":"mask","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[collateralUsd: TypedAbiArg<number | bigint, "collateralUsd">, debtUsd: TypedAbiArg<number | bigint, "debtUsd">, mask: TypedAbiArg<number | bigint, "mask">], Response<boolean, bigint>>,
    isLiquidationPaused: {"name":"is-liquidation-paused","access":"private","args":[{"name":"asset-id","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[assetId: TypedAbiArg<number | bigint, "assetId">], boolean>,
    isZtoken: {"name":"is-ztoken","access":"private","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], boolean>,
    iterFindAsset: {"name":"iter-find-asset","access":"private","args":[{"name":"asset-entry","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"result","type":{"optional":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}}},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"optional":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}}},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[assetEntry: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}, "assetEntry">, acc: TypedAbiArg<{
  "result": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
} | null;
  "target": number | bigint;
}, "acc">], {
  "result": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
  "price": bigint;
} | null;
  "target": bigint;
}>,
    iterFindCollateral: {"name":"iter-find-collateral","access":"private","args":[{"name":"item","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[item: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}, "item">, acc: TypedAbiArg<{
  "amount": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "amount": bigint;
  "target": bigint;
}>,
    iterFindDebt: {"name":"iter-find-debt","access":"private","args":[{"name":"item","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"scaled","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"scaled","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[item: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "item">, acc: TypedAbiArg<{
  "scaled": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "scaled": bigint;
  "target": bigint;
}>,
    iterPriceMulti: {"name":"iter-price-multi","access":"private","args":[{"name":"oracle-data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"acc","type":{"tuple":[{"name":"aids","type":{"list":{"type":"uint128","length":64}}},{"name":"idx","type":"uint128"},{"name":"output","type":{"list":{"type":"uint128","length":64}}},{"name":"valid","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"aids","type":{"list":{"type":"uint128","length":64}}},{"name":"idx","type":"uint128"},{"name":"output","type":{"list":{"type":"uint128","length":64}}},{"name":"valid","type":"bool"}]}}} as TypedAbiFunction<[oracleData: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "oracleData">, acc: TypedAbiArg<{
  "aids": number | bigint[];
  "idx": number | bigint;
  "output": number | bigint[];
  "valid": boolean;
}, "acc">], {
  "aids": bigint[];
  "idx": bigint;
  "output": bigint[];
  "valid": boolean;
}>,
    maskShiftCombine: {"name":"mask-shift-combine","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], bigint>,
    maskToListCollateral: {"name":"mask-to-list-collateral","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], bigint[]>,
    maskToListInternal: {"name":"mask-to-list-internal","access":"private","args":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"iter-list","type":{"list":{"type":"uint128","length":64}}}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">, offset: TypedAbiArg<number | bigint, "offset">, iterList: TypedAbiArg<number | bigint[], "iterList">], bigint[]>,
    maskToListIter: {"name":"mask-to-list-iter","access":"private","args":[{"name":"p","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":64}}}]}}],"outputs":{"type":{"tuple":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":64}}}]}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">, acc: TypedAbiArg<{
  "mask": number | bigint;
  "offset": number | bigint;
  "result": number | bigint[];
}, "acc">], {
  "mask": bigint;
  "offset": bigint;
  "result": bigint[];
}>,
    mergePrice: {"name":"merge-price","access":"private","args":[{"name":"asset-entry","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}},{"name":"price","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]}}} as TypedAbiFunction<[assetEntry: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
}, "assetEntry">, price: TypedAbiArg<number | bigint, "price">], {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": bigint;
  "type": Uint8Array;
};
  "price": bigint;
}>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    normalize: {"name":"normalize","access":"private","args":[{"name":"value","type":"uint128"},{"name":"decimals","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[value: TypedAbiArg<number | bigint, "value">, decimals: TypedAbiArg<number | bigint, "decimals">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    normalizePyth: {"name":"normalize-pyth","access":"private","args":[{"name":"p","type":"int128"},{"name":"expo","type":"int128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">, expo: TypedAbiArg<number | bigint, "expo">], bigint>,
    oraclePriceLegal: {"name":"oracle-price-legal","access":"private","args":[{"name":"p","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">], boolean>,
    oracleTimestampFresh: {"name":"oracle-timestamp-fresh","access":"private","args":[{"name":"ts","type":"uint128"},{"name":"prev","type":"uint128"},{"name":"max-staleness","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[ts: TypedAbiArg<number | bigint, "ts">, prev: TypedAbiArg<number | bigint, "prev">, maxStaleness: TypedAbiArg<number | bigint, "maxStaleness">], boolean>,
    priceMultiResolve: {"name":"price-multi-resolve","access":"private","args":[{"name":"data","type":{"list":{"type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]},"length":64}}},{"name":"aids","type":{"list":{"type":"uint128","length":64}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":64}},"error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}[], "data">, aids: TypedAbiArg<number | bigint[], "aids">], Response<bigint[], bigint>>,
    priceResolve: {"name":"price-resolve","access":"private","args":[{"name":"data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "data">], Response<bigint, bigint>>,
    processCollateralAsset: {"name":"process-collateral-asset","access":"private","args":[{"name":"coll-aid","type":"uint128"},{"name":"debt-actual-usd","type":"uint128"},{"name":"liq-penalty","type":"uint128"},{"name":"user-coll-balance","type":"uint128"},{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}},{"name":"coll-asset","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}}],"outputs":{"type":{"tuple":[{"name":"coll-actual","type":"uint128"},{"name":"coll-decimals","type":"uint128"},{"name":"coll-expected","type":"uint128"},{"name":"coll-price","type":"uint128"}]}}} as TypedAbiFunction<[collAid: TypedAbiArg<number | bigint, "collAid">, debtActualUsd: TypedAbiArg<number | bigint, "debtActualUsd">, liqPenalty: TypedAbiArg<number | bigint, "liqPenalty">, userCollBalance: TypedAbiArg<number | bigint, "userCollBalance">, assets: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}[], "assets">, collAsset: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
}, "collAsset">], {
  "collActual": bigint;
  "collDecimals": bigint;
  "collExpected": bigint;
  "collPrice": bigint;
}>,
    processDebtAsset: {"name":"process-debt-asset","access":"private","args":[{"name":"debt-amount","type":"uint128"},{"name":"debt-aid","type":"uint128"},{"name":"max-debt-usd","type":"uint128"},{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"tuple":[{"name":"debt-actual","type":"uint128"},{"name":"debt-actual-usd","type":"uint128"},{"name":"debt-decimals","type":"uint128"},{"name":"debt-price","type":"uint128"}]}}} as TypedAbiFunction<[debtAmount: TypedAbiArg<number | bigint, "debtAmount">, debtAid: TypedAbiArg<number | bigint, "debtAid">, maxDebtUsd: TypedAbiArg<number | bigint, "maxDebtUsd">, assets: TypedAbiArg<{
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "oracle": {
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
};
  "price": number | bigint;
}[], "assets">], {
  "debtActual": bigint;
  "debtActualUsd": bigint;
  "debtDecimals": bigint;
  "debtPrice": bigint;
}>,
    removeIfMatch: {"name":"remove-if-match","access":"private","args":[{"name":"item","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"target-asset-id","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"target-asset-id","type":"uint128"}]}}} as TypedAbiFunction<[item: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "item">, acc: TypedAbiArg<{
  "result": {
  "aid": number | bigint;
  "scaled": number | bigint;
}[];
  "targetAssetId": number | bigint;
}, "acc">], {
  "result": {
  "aid": bigint;
  "scaled": bigint;
}[];
  "targetAssetId": bigint;
}>,
    resolveCallcode: {"name":"resolve-callcode","access":"private","args":[{"name":"p","type":"uint128"},{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">, callcode: TypedAbiArg<Uint8Array | null, "callcode">], Response<bigint, bigint>>,
    resolveDia: {"name":"resolve-dia","access":"private","args":[{"name":"ident","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ident: TypedAbiArg<Uint8Array, "ident">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolveMock: {"name":"resolve-mock","access":"private","args":[{"name":"ident","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ident: TypedAbiArg<Uint8Array, "ident">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolvePriceFeed: {"name":"resolve-price-feed","access":"private","args":[{"name":"type","type":{"buffer":{"length":1}}},{"name":"ident","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[type: TypedAbiArg<Uint8Array, "type">, ident: TypedAbiArg<Uint8Array, "ident">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolvePyth: {"name":"resolve-pyth","access":"private","args":[{"name":"ident","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ident: TypedAbiArg<Uint8Array, "ident">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolveStstx: {"name":"resolve-ststx","access":"private","args":[{"name":"p","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">], Response<bigint, bigint>>,
    resolveZtoken: {"name":"resolve-ztoken","access":"private","args":[{"name":"p","type":"uint128"},{"name":"aid","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">, aid: TypedAbiArg<number | bigint, "aid">], Response<bigint, bigint>>,
    scaleDebtForLiquidation: {"name":"scale-debt-for-liquidation","access":"private","args":[{"name":"debt-final","type":"uint128"},{"name":"coll-actual","type":"uint128"},{"name":"curr-scaled","type":"uint128"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"coll-final","type":"uint128"},{"name":"debt-to-repay","type":"uint128"},{"name":"scaled-to-remove","type":"uint128"}]}}} as TypedAbiFunction<[debtFinal: TypedAbiArg<number | bigint, "debtFinal">, collActual: TypedAbiArg<number | bigint, "collActual">, currScaled: TypedAbiArg<number | bigint, "currScaled">, assetId: TypedAbiArg<number | bigint, "assetId">], {
  "collFinal": bigint;
  "debtToRepay": bigint;
  "scaledToRemove": bigint;
}>,
    socializeDebtAsset: {"name":"socialize-debt-asset","access":"private","args":[{"name":"debt-entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"borrower","type":"principal"},{"name":"success","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"borrower","type":"principal"},{"name":"success","type":"bool"}]}}} as TypedAbiFunction<[debtEntry: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "debtEntry">, acc: TypedAbiArg<{
  "borrower": string;
  "success": boolean;
}, "acc">], {
  "borrower": string;
  "success": boolean;
}>,
    userSafeMask: {"name":"user-safe-mask","access":"private","args":[{"name":"mask-user","type":"uint128"},{"name":"mask-enabled","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[maskUser: TypedAbiArg<number | bigint, "maskUser">, maskEnabled: TypedAbiArg<number | bigint, "maskEnabled">], bigint>,
    vaultAccrue: {"name":"vault-accrue","access":"private","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    vaultDeposit: {"name":"vault-deposit","access":"private","args":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">, amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    vaultRedeem: {"name":"vault-redeem","access":"private","args":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">, amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    vaultSocializeDebt: {"name":"vault-socialize-debt","access":"private","args":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    vaultSystemBorrow: {"name":"vault-system-borrow","access":"private","args":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">, amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    vaultSystemRepay: {"name":"vault-system-repay","access":"private","args":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"ft","type":"trait_reference"},{"name":"ft-address","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">, amount: TypedAbiArg<number | bigint, "amount">, ft: TypedAbiArg<string, "ft">, ftAddress: TypedAbiArg<string, "ftAddress">], Response<boolean, bigint>>,
    writeFeed: {"name":"write-feed","access":"private","args":[{"name":"feed","type":{"buffer":{"length":8192}}},{"name":"status","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[feed: TypedAbiArg<Uint8Array, "feed">, status: TypedAbiArg<Response<boolean, number | bigint>, "status">], Response<boolean, bigint>>,
    writeFeeds: {"name":"write-feeds","access":"private","args":[{"name":"feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[feeds: TypedAbiArg<Uint8Array[] | null, "feeds">], Response<boolean, bigint>>,
    borrow: {"name":"borrow","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string | null, "receiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    callStstxRatio: {"name":"call-ststx-ratio","access":"public","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    collateralAdd: {"name":"collateral-add","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<bigint, bigint>>,
    collateralRemove: {"name":"collateral-remove","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string | null, "receiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<bigint, bigint>>,
    collateralRemoveRedeem: {"name":"collateral-remove-redeem","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"min-underlying","type":"uint128"},{"name":"receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, minUnderlying: TypedAbiArg<number | bigint, "minUnderlying">, receiver: TypedAbiArg<string | null, "receiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<bigint, bigint>>,
    liquidate: {"name":"liquidate","access":"public","args":[{"name":"borrower","type":"principal"},{"name":"collateral-ft","type":"trait_reference"},{"name":"debt-ft","type":"trait_reference"},{"name":"debt-amount","type":"uint128"},{"name":"min-collateral-expected","type":"uint128"},{"name":"collateral-receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"collateral","type":"uint128"},{"name":"debt","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[borrower: TypedAbiArg<string, "borrower">, collateralFt: TypedAbiArg<string, "collateralFt">, debtFt: TypedAbiArg<string, "debtFt">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">, minCollateralExpected: TypedAbiArg<number | bigint, "minCollateralExpected">, collateralReceiver: TypedAbiArg<string | null, "collateralReceiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<{
  "collateral": bigint;
  "debt": bigint;
}, bigint>>,
    liquidateMulti: {"name":"liquidate-multi","access":"public","args":[{"name":"positions","type":{"list":{"type":{"tuple":[{"name":"borrower","type":"principal"},{"name":"collateral-ft","type":"trait_reference"},{"name":"debt-amount","type":"uint128"},{"name":"debt-ft","type":"trait_reference"},{"name":"min-collateral-expected","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"response":{"ok":{"tuple":[{"name":"collateral","type":"uint128"},{"name":"debt","type":"uint128"}]},"error":"uint128"}},"length":64}},"error":"none"}}}} as TypedAbiFunction<[positions: TypedAbiArg<{
  "borrower": string;
  "collateralFt": string;
  "debtAmount": number | bigint;
  "debtFt": string;
  "minCollateralExpected": number | bigint;
}[], "positions">], Response<Response<{
  "collateral": bigint;
  "debt": bigint;
}, bigint>[], null>>,
    liquidateRedeem: {"name":"liquidate-redeem","access":"public","args":[{"name":"borrower","type":"principal"},{"name":"collateral-ft","type":"trait_reference"},{"name":"debt-ft","type":"trait_reference"},{"name":"debt-amount","type":"uint128"},{"name":"min-collateral-expected","type":"uint128"},{"name":"min-underlying","type":"uint128"},{"name":"receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"debt","type":"uint128"},{"name":"underlying","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[borrower: TypedAbiArg<string, "borrower">, collateralFt: TypedAbiArg<string, "collateralFt">, debtFt: TypedAbiArg<string, "debtFt">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">, minCollateralExpected: TypedAbiArg<number | bigint, "minCollateralExpected">, minUnderlying: TypedAbiArg<number | bigint, "minUnderlying">, receiver: TypedAbiArg<string | null, "receiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<{
  "debt": bigint;
  "underlying": bigint;
}, bigint>>,
    repay: {"name":"repay","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"on-behalf-of","type":{"optional":"principal"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, onBehalfOf: TypedAbiArg<string | null, "onBehalfOf">], Response<bigint, bigint>>,
    setLiquidationGracePeriod: {"name":"set-liquidation-grace-period","access":"public","args":[{"name":"id","type":"uint128"},{"name":"grace-period","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, gracePeriod: TypedAbiArg<number | bigint, "gracePeriod">], Response<boolean, bigint>>,
    setMaxConfidenceRatio: {"name":"set-max-confidence-ratio","access":"public","args":[{"name":"ratio","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[ratio: TypedAbiArg<number | bigint, "ratio">], Response<boolean, bigint>>,
    setPauseLiquidation: {"name":"set-pause-liquidation","access":"public","args":[{"name":"paused","type":"bool"},{"name":"grace-period","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[paused: TypedAbiArg<boolean, "paused">, gracePeriod: TypedAbiArg<number | bigint, "gracePeriod">], Response<boolean, bigint>>,
    supplyCollateralAdd: {"name":"supply-collateral-add","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"min-shares","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, minShares: TypedAbiArg<number | bigint, "minShares">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<bigint, bigint>>,
    getCachedIndexes: {"name":"get-cached-indexes","access":"read_only","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], {
  "index": bigint;
  "lindex": bigint;
} | null>,
    getLiquidationGraceEnd: {"name":"get-liquidation-grace-end","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidationGracePeriodAsset: {"name":"get-liquidation-grace-period-asset","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<bigint, null>>,
    getMaxConfidenceRatio: {"name":"get-max-confidence-ratio","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseLiquidation: {"name":"get-pause-liquidation","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[], Response<boolean, null>>,
    oracleLastUpdate: {"name":"oracle-last-update","access":"read_only","args":[{"name":"f","type":{"tuple":[{"name":"ident","type":{"buffer":{"length":32}}},{"name":"type","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[f: TypedAbiArg<{
  "ident": Uint8Array;
  "type": Uint8Array;
}, "f">], bigint>
  },
  "maps": {
    indexCache: {"name":"index-cache","key":{"tuple":[{"name":"aid","type":"uint128"},{"name":"timestamp","type":"uint128"}]},"value":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]}} as TypedAbiMap<{
  "aid": number | bigint;
  "timestamp": number | bigint;
}, {
  "index": bigint;
  "lindex": bigint;
}>,
    lastUpdate: {"name":"last-update","key":{"tuple":[{"name":"ident","type":{"buffer":{"length":32}}},{"name":"type","type":{"buffer":{"length":1}}}]},"value":"uint128"} as TypedAbiMap<{
  "ident": Uint8Array;
  "type": Uint8Array;
}, bigint>,
    liquidationGracePeriods: {"name":"liquidation-grace-periods","key":"uint128","value":"uint128"} as TypedAbiMap<number | bigint, bigint>
  },
  "variables": {
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CALLCODE_STSTX: {
  name: 'CALLCODE-STSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSBTC: {
  name: 'CALLCODE-ZSBTC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTSTX: {
  name: 'CALLCODE-ZSTSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTSTXBTC: {
  name: 'CALLCODE-ZSTSTXBTC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTX: {
  name: 'CALLCODE-ZSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDC: {
  name: 'CALLCODE-ZUSDC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDH: {
  name: 'CALLCODE-ZUSDH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    DEBT_MASK: {
  name: 'DEBT-MASK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DEBT_OFFSET: {
  name: 'DEBT-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTHORIZATION: {
  name: 'ERR-AUTHORIZATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_BAD_DEBT_SOCIALIZATION_FAILED: {
  name: 'ERR-BAD-DEBT-SOCIALIZATION-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_BORROW_DISABLED: {
  name: 'ERR-BORROW-DISABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_COLLATERAL_DISABLED: {
  name: 'ERR-COLLATERAL-DISABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DISABLED_COLLATERAL_PRICE_FAILED: {
  name: 'ERR-DISABLED-COLLATERAL-PRICE-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_EGROUP_ASSET_BORROW_DISABLED: {
  name: 'ERR-EGROUP-ASSET-BORROW-DISABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_HEALTHY: {
  name: 'ERR-HEALTHY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_COLLATERAL: {
  name: 'ERR-INSUFFICIENT-COLLATERAL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_SCALED_DEBT: {
  name: 'ERR-INSUFFICIENT-SCALED-DEBT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LIQUIDATION_BORROW_SAME_BLOCK: {
  name: 'ERR-LIQUIDATION-BORROW-SAME-BLOCK',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LIQUIDATION_PAUSED: {
  name: 'ERR-LIQUIDATION-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_CALLCODE: {
  name: 'ERR-ORACLE-CALLCODE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_DIA: {
  name: 'ERR-ORACLE-DIA',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_INVARIANT: {
  name: 'ERR-ORACLE-INVARIANT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_MOCK: {
  name: 'ERR-ORACLE-MOCK',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_MULTI: {
  name: 'ERR-ORACLE-MULTI',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_PYTH: {
  name: 'ERR-ORACLE-PYTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ORACLE_TYPE: {
  name: 'ERR-ORACLE-TYPE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PRICE_CONFIDENCE_LOW: {
  name: 'ERR-PRICE-CONFIDENCE-LOW',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PRICE_FEED_UPDATE_FAILED: {
  name: 'ERR-PRICE-FEED-UPDATE-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNHEALTHY: {
  name: 'ERR-UNHEALTHY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNKNOWN_VAULT: {
  name: 'ERR-UNKNOWN-VAULT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ZERO_LIQUIDATION_AMOUNTS: {
  name: 'ERR-ZERO-LIQUIDATION-AMOUNTS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    GLOBAL_LIQUIDATION_GRACE_ID: {
  name: 'GLOBAL-LIQUIDATION-GRACE-ID',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT64: {
  name: 'ITER-UINT-64',
  type: {
    list: {
      type: 'uint128',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    MAX_LIQUIDATION_AMOUNT: {
  name: 'MAX-LIQUIDATION-AMOUNT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU64: {
  name: 'MAX-U64',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STSTX_RATIO_DECIMALS: {
  name: 'STSTX-RATIO-DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STX: {
  name: 'STX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TYPE_DIA: {
  name: 'TYPE-DIA',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    TYPE_MOCK: {
  name: 'TYPE-MOCK',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    TYPE_PYTH: {
  name: 'TYPE-PYTH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    USDC: {
  name: 'USDC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    USDH: {
  name: 'USDH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ZEST_STX_WRAPPER_CONTRACT: {
  name: 'ZEST-STX-WRAPPER-CONTRACT',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    sBTC: {
  name: 'sBTC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    stSTX: {
  name: 'stSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    stSTXbtc: {
  name: 'stSTXbtc',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zSTX: {
  name: 'zSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zUSDC: {
  name: 'zUSDC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zUSDH: {
  name: 'zUSDH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zsBTC: {
  name: 'zsBTC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zstSTX: {
  name: 'zstSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zstSTXbtc: {
  name: 'zstSTXbtc',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ztokens: {
  name: 'ztokens',
  type: {
    list: {
      type: 'uint128',
      length: 6
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    maxConfidenceRatio: {
  name: 'max-confidence-ratio',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseLiquidation: {
  name: 'pause-liquidation',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>
  },
  constants: {
  BPS: 10_000n,
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTSTXBTC: Uint8Array.from([6]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  dEBTMASK: 340_282_366_920_938_463_444_927_863_358_058_659_840n,
  dEBTOFFSET: 64n,
  eRRAMOUNTZERO: {
    isOk: false,
    value: 400_002n
  },
  eRRAUTH: {
    isOk: false,
    value: 400_001n
  },
  eRRAUTHORIZATION: {
    isOk: false,
    value: 400_025n
  },
  eRRBADDEBTSOCIALIZATIONFAILED: {
    isOk: false,
    value: 400_021n
  },
  eRRBORROWDISABLED: {
    isOk: false,
    value: 400_004n
  },
  eRRCOLLATERALDISABLED: {
    isOk: false,
    value: 400_003n
  },
  eRRDISABLEDCOLLATERALPRICEFAILED: {
    isOk: false,
    value: 400_020n
  },
  eRREGROUPASSETBORROWDISABLED: {
    isOk: false,
    value: 400_023n
  },
  eRRHEALTHY: {
    isOk: false,
    value: 400_018n
  },
  eRRINSUFFICIENTCOLLATERAL: {
    isOk: false,
    value: 400_007n
  },
  eRRINSUFFICIENTSCALEDDEBT: {
    isOk: false,
    value: 400_006n
  },
  eRRLIQUIDATIONBORROWSAMEBLOCK: {
    isOk: false,
    value: 400_024n
  },
  eRRLIQUIDATIONPAUSED: {
    isOk: false,
    value: 400_016n
  },
  eRRORACLECALLCODE: {
    isOk: false,
    value: 400_011n
  },
  eRRORACLEDIA: {
    isOk: false,
    value: 400_013n
  },
  eRRORACLEINVARIANT: {
    isOk: false,
    value: 400_014n
  },
  eRRORACLEMOCK: {
    isOk: false,
    value: 400_019n
  },
  eRRORACLEMULTI: {
    isOk: false,
    value: 400_015n
  },
  eRRORACLEPYTH: {
    isOk: false,
    value: 400_012n
  },
  eRRORACLETYPE: {
    isOk: false,
    value: 400_010n
  },
  eRRPRICECONFIDENCELOW: {
    isOk: false,
    value: 400_017n
  },
  eRRPRICEFEEDUPDATEFAILED: {
    isOk: false,
    value: 400_022n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 400_019n
  },
  eRRUNHEALTHY: {
    isOk: false,
    value: 400_005n
  },
  eRRUNKNOWNVAULT: {
    isOk: false,
    value: 400_009n
  },
  eRRZEROLIQUIDATIONAMOUNTS: {
    isOk: false,
    value: 400_008n
  },
  gLOBALLIQUIDATIONGRACEID: 100n,
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT64: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    9n,
    10n,
    11n,
    12n,
    13n,
    14n,
    15n,
    16n,
    17n,
    18n,
    19n,
    20n,
    21n,
    22n,
    23n,
    24n,
    25n,
    26n,
    27n,
    28n,
    29n,
    30n,
    31n,
    32n,
    33n,
    34n,
    35n,
    36n,
    37n,
    38n,
    39n,
    40n,
    41n,
    42n,
    43n,
    44n,
    45n,
    46n,
    47n,
    48n,
    49n,
    50n,
    51n,
    52n,
    53n,
    54n,
    55n,
    56n,
    57n,
    58n,
    59n,
    60n,
    61n,
    62n,
    63n
  ],
  mAXLIQUIDATIONAMOUNT: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU64: 18_446_744_073_709_551_615n,
  sTSTXRATIODECIMALS: 1_000_000n,
  STX: 0n,
  tYPEDIA: Uint8Array.from([1]),
  tYPEMOCK: Uint8Array.from([2]),
  tYPEPYTH: Uint8Array.from([0]),
  USDC: 6n,
  USDH: 8n,
  zESTSTXWRAPPERCONTRACT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  maxConfidenceRatio: 1_000n,
  pauseLiquidation: false,
  sBTC: 2n,
  stSTX: 4n,
  stSTXbtc: 10n,
  zSTX: 1n,
  zUSDC: 7n,
  zUSDH: 9n,
  zsBTC: 3n,
  zstSTX: 5n,
  zstSTXbtc: 11n,
  ztokens: [
    1n,
    3n,
    5n,
    7n,
    9n,
    11n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'market',
  },
marketTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'market-trait',
  },
marketVault: {
  "functions": {
    addUserCollateral: {"name":"add-user-collateral","access":"private","args":[{"name":"user-id","type":"uint128"},{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[userId: TypedAbiArg<number | bigint, "userId">, assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    addUserScaledDebt: {"name":"add-user-scaled-debt","access":"private","args":[{"name":"user-id","type":"uint128"},{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[userId: TypedAbiArg<number | bigint, "userId">, assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkImplAuth: {"name":"check-impl-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    create: {"name":"create","access":"private","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    increment: {"name":"increment","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    insert: {"name":"insert","access":"private","args":[{"name":"params","type":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[params: TypedAbiArg<{
  "account": string;
  "id": number | bigint;
  "lastBorrowBlock": number | bigint;
  "lastUpdate": number | bigint;
  "mask": number | bigint;
}, "params">], boolean>,
    iterLookupCollateral: {"name":"iter-lookup-collateral","access":"private","args":[{"name":"asset","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"enabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}}]}}],"outputs":{"type":{"tuple":[{"name":"enabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}}]}}} as TypedAbiFunction<[asset: TypedAbiArg<number | bigint, "asset">, acc: TypedAbiArg<{
  "enabledMask": number | bigint;
  "id": number | bigint;
  "result": {
  "aid": number | bigint;
  "amount": number | bigint;
}[];
}, "acc">], {
  "enabledMask": bigint;
  "id": bigint;
  "result": {
  "aid": bigint;
  "amount": bigint;
}[];
}>,
    iterLookupDebt: {"name":"iter-lookup-debt","access":"private","args":[{"name":"asset","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"enabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}]}}],"outputs":{"type":{"tuple":[{"name":"enabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}]}}} as TypedAbiFunction<[asset: TypedAbiArg<number | bigint, "asset">, acc: TypedAbiArg<{
  "enabledMask": number | bigint;
  "id": number | bigint;
  "result": {
  "aid": number | bigint;
  "scaled": number | bigint;
}[];
}, "acc">], {
  "enabledMask": bigint;
  "id": bigint;
  "result": {
  "aid": bigint;
  "scaled": bigint;
}[];
}>,
    maskPos: {"name":"mask-pos","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"is-collateral","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, isCollateral: TypedAbiArg<boolean, "isCollateral">], bigint>,
    maskToListCollateral: {"name":"mask-to-list-collateral","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], bigint[]>,
    maskToListDebt: {"name":"mask-to-list-debt","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], bigint[]>,
    maskToListInternal: {"name":"mask-to-list-internal","access":"private","args":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"iter-list","type":{"list":{"type":"uint128","length":64}}}],"outputs":{"type":{"list":{"type":"uint128","length":64}}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">, offset: TypedAbiArg<number | bigint, "offset">, iterList: TypedAbiArg<number | bigint[], "iterList">], bigint[]>,
    maskToListIter: {"name":"mask-to-list-iter","access":"private","args":[{"name":"p","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":64}}}]}}],"outputs":{"type":{"tuple":[{"name":"mask","type":"uint128"},{"name":"offset","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":64}}}]}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">, acc: TypedAbiArg<{
  "mask": number | bigint;
  "offset": number | bigint;
  "result": number | bigint[];
}, "acc">], {
  "mask": bigint;
  "offset": bigint;
  "result": bigint[];
}>,
    maskUpdate: {"name":"mask-update","access":"private","args":[{"name":"base","type":"uint128"},{"name":"pos","type":"uint128"},{"name":"is-collateral","type":"bool"},{"name":"is-insert","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[base: TypedAbiArg<number | bigint, "base">, pos: TypedAbiArg<number | bigint, "pos">, isCollateral: TypedAbiArg<boolean, "isCollateral">, isInsert: TypedAbiArg<boolean, "isInsert">], bigint>,
    receiveTokens: {"name":"receive-tokens","access":"private","args":[{"name":"asset","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">, amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    refresh: {"name":"refresh","access":"private","args":[{"name":"mask","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}} as TypedAbiFunction<[mask: TypedAbiArg<number | bigint, "mask">], {
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    relevant: {"name":"relevant","access":"private","args":[{"name":"asset","type":"uint128"},{"name":"enabled-mask","type":"uint128"},{"name":"c","type":"bool"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[asset: TypedAbiArg<number | bigint, "asset">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">, c: TypedAbiArg<boolean, "c">], boolean>,
    removeUserCollateral: {"name":"remove-user-collateral","access":"private","args":[{"name":"user-id","type":"uint128"},{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[userId: TypedAbiArg<number | bigint, "userId">, assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, bigint>>,
    removeUserScaledDebt: {"name":"remove-user-scaled-debt","access":"private","args":[{"name":"user-id","type":"uint128"},{"name":"asset-id","type":"uint128"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[userId: TypedAbiArg<number | bigint, "userId">, assetId: TypedAbiArg<number | bigint, "assetId">, amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, bigint>>,
    resolveOrCreate: {"name":"resolve-or-create","access":"private","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    sendTokens: {"name":"send-tokens","access":"private","args":[{"name":"asset","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<string, "asset">, amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    subset: {"name":"subset","access":"private","args":[{"name":"sub","type":"uint128"},{"name":"super","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[sub: TypedAbiArg<number | bigint, "sub">, _super: TypedAbiArg<number | bigint, "_super">], boolean>,
    collateralAdd: {"name":"collateral-add","access":"public","args":[{"name":"account","type":"principal"},{"name":"amount","type":"uint128"},{"name":"ft","type":"trait_reference"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, amount: TypedAbiArg<number | bigint, "amount">, ft: TypedAbiArg<string, "ft">, assetId: TypedAbiArg<number | bigint, "assetId">], Response<bigint, bigint>>,
    collateralRemove: {"name":"collateral-remove","access":"public","args":[{"name":"account","type":"principal"},{"name":"amount","type":"uint128"},{"name":"ft","type":"trait_reference"},{"name":"asset-id","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, amount: TypedAbiArg<number | bigint, "amount">, ft: TypedAbiArg<string, "ft">, assetId: TypedAbiArg<number | bigint, "assetId">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    debtAddScaled: {"name":"debt-add-scaled","access":"public","args":[{"name":"account","type":"principal"},{"name":"scaled-amount","type":"uint128"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">, assetId: TypedAbiArg<number | bigint, "assetId">], Response<bigint, bigint>>,
    debtRemoveScaled: {"name":"debt-remove-scaled","access":"public","args":[{"name":"account","type":"principal"},{"name":"scaled-amount","type":"uint128"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">, assetId: TypedAbiArg<number | bigint, "assetId">], Response<bigint, bigint>>,
    setImpl: {"name":"set-impl","access":"public","args":[{"name":"new","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[_new: TypedAbiArg<string, "_new">], Response<boolean, bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"collateral-add","type":"bool"},{"name":"collateral-remove","type":"bool"},{"name":"debt-add","type":"bool"},{"name":"debt-remove","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "collateralAdd": boolean;
  "collateralRemove": boolean;
  "debtAdd": boolean;
  "debtRemove": boolean;
}, "states">], Response<boolean, bigint>>,
    debtScaled: {"name":"debt-scaled","access":"read_only","args":[{"name":"id","type":"uint128"},{"name":"asset","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, asset: TypedAbiArg<number | bigint, "asset">], bigint>,
    getAccountScaledDebt: {"name":"get-account-scaled-debt","access":"read_only","args":[{"name":"account","type":"principal"},{"name":"asset-id","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, assetId: TypedAbiArg<number | bigint, "assetId">], bigint>,
    getCollateral: {"name":"get-collateral","access":"read_only","args":[{"name":"id","type":"uint128"},{"name":"asset","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, asset: TypedAbiArg<number | bigint, "asset">], bigint>,
    getDebt: {"name":"get-debt","access":"read_only","args":[{"name":"id","type":"uint128"},{"name":"asset","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"scaled","type":"uint128"}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, asset: TypedAbiArg<number | bigint, "asset">], {
  "scaled": bigint;
}>,
    getImpl: {"name":"get-impl","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getNr: {"name":"get-nr","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"collateral-add","type":"bool"},{"name":"collateral-remove","type":"bool"},{"name":"debt-add","type":"bool"},{"name":"debt-remove","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "collateralAdd": boolean;
  "collateralRemove": boolean;
  "debtAdd": boolean;
  "debtRemove": boolean;
}, null>>,
    getPosition: {"name":"get-position","access":"read_only","args":[{"name":"account","type":"principal"},{"name":"enabled-mask","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">], Response<{
  "account": string;
  "collateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "debt": {
  "aid": bigint;
  "scaled": bigint;
}[];
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}, bigint>>,
    lookup: {"name":"lookup","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    lookupCollateral: {"name":"lookup-collateral","access":"read_only","args":[{"name":"id","type":"uint128"},{"name":"mask","type":"uint128"},{"name":"enabled-mask","type":"uint128"}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, mask: TypedAbiArg<number | bigint, "mask">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">], {
  "aid": bigint;
  "amount": bigint;
}[]>,
    lookupDebt: {"name":"lookup-debt","access":"read_only","args":[{"name":"id","type":"uint128"},{"name":"mask","type":"uint128"},{"name":"enabled-mask","type":"uint128"}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]},"length":64}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, mask: TypedAbiArg<number | bigint, "mask">, enabledMask: TypedAbiArg<number | bigint, "enabledMask">], {
  "aid": bigint;
  "scaled": bigint;
}[]>,
    resolve: {"name":"resolve","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    resolveSafe: {"name":"resolve-safe","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}, bigint>>
  },
  "maps": {
    collateral: {"name":"collateral","key":{"tuple":[{"name":"asset","type":"uint128"},{"name":"id","type":"uint128"}]},"value":"uint128"} as TypedAbiMap<{
  "asset": number | bigint;
  "id": number | bigint;
}, bigint>,
    debt: {"name":"debt","key":{"tuple":[{"name":"asset","type":"uint128"},{"name":"id","type":"uint128"}]},"value":{"tuple":[{"name":"scaled","type":"uint128"}]}} as TypedAbiMap<{
  "asset": number | bigint;
  "id": number | bigint;
}, {
  "scaled": bigint;
}>,
    registry: {"name":"registry","key":"uint128","value":{"tuple":[{"name":"account","type":"principal"},{"name":"id","type":"uint128"},{"name":"last-borrow-block","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"mask","type":"uint128"}]}} as TypedAbiMap<number | bigint, {
  "account": string;
  "id": bigint;
  "lastBorrowBlock": bigint;
  "lastUpdate": bigint;
  "mask": bigint;
}>,
    reverse: {"name":"reverse","key":"principal","value":"uint128"} as TypedAbiMap<string, bigint>
  },
  "variables": {
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DEBT_OFFSET: {
  name: 'DEBT-OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_COLLATERAL_TRANSFER_FAILED: {
  name: 'ERR-COLLATERAL-TRANSFER-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_COLLATERAL: {
  name: 'ERR-INSUFFICIENT-COLLATERAL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_DEBT: {
  name: 'ERR-INSUFFICIENT-DEBT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNTRACKED_ACCOUNT: {
  name: 'ERR-UNTRACKED-ACCOUNT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    iTERUINT64: {
  name: 'ITER-UINT-64',
  type: {
    list: {
      type: 'uint128',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    iTERUINT64OFFSET64: {
  name: 'ITER-UINT-64-OFFSET-64',
  type: {
    list: {
      type: 'uint128',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ZEST_STX_WRAPPER_CONTRACT: {
  name: 'ZEST-STX-WRAPPER-CONTRACT',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    impl: {
  name: 'impl',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    nonce: {
  name: 'nonce',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'collateral-add',
        type: 'bool'
      },
      {
        name: 'collateral-remove',
        type: 'bool'
      },
      {
        name: 'debt-add',
        type: 'bool'
      },
      {
        name: 'debt-remove',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "collateralAdd": boolean;
  "collateralRemove": boolean;
  "debtAdd": boolean;
  "debtRemove": boolean;
}>
  },
  constants: {
  BPS: 10_000n,
  dEBTOFFSET: 64n,
  eRRAMOUNTZERO: {
    isOk: false,
    value: 600_003n
  },
  eRRAUTH: {
    isOk: false,
    value: 600_001n
  },
  eRRCOLLATERALTRANSFERFAILED: {
    isOk: false,
    value: 600_007n
  },
  eRRINSUFFICIENTCOLLATERAL: {
    isOk: false,
    value: 600_004n
  },
  eRRINSUFFICIENTDEBT: {
    isOk: false,
    value: 600_005n
  },
  eRRPAUSED: {
    isOk: false,
    value: 600_002n
  },
  eRRUNTRACKEDACCOUNT: {
    isOk: false,
    value: 600_006n
  },
  iTERUINT64: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    9n,
    10n,
    11n,
    12n,
    13n,
    14n,
    15n,
    16n,
    17n,
    18n,
    19n,
    20n,
    21n,
    22n,
    23n,
    24n,
    25n,
    26n,
    27n,
    28n,
    29n,
    30n,
    31n,
    32n,
    33n,
    34n,
    35n,
    36n,
    37n,
    38n,
    39n,
    40n,
    41n,
    42n,
    43n,
    44n,
    45n,
    46n,
    47n,
    48n,
    49n,
    50n,
    51n,
    52n,
    53n,
    54n,
    55n,
    56n,
    57n,
    58n,
    59n,
    60n,
    61n,
    62n,
    63n
  ],
  iTERUINT64OFFSET64: [
    64n,
    65n,
    66n,
    67n,
    68n,
    69n,
    70n,
    71n,
    72n,
    73n,
    74n,
    75n,
    76n,
    77n,
    78n,
    79n,
    80n,
    81n,
    82n,
    83n,
    84n,
    85n,
    86n,
    87n,
    88n,
    89n,
    90n,
    91n,
    92n,
    93n,
    94n,
    95n,
    96n,
    97n,
    98n,
    99n,
    100n,
    101n,
    102n,
    103n,
    104n,
    105n,
    106n,
    107n,
    108n,
    109n,
    110n,
    111n,
    112n,
    113n,
    114n,
    115n,
    116n,
    117n,
    118n,
    119n,
    120n,
    121n,
    122n,
    123n,
    124n,
    125n,
    126n,
    127n
  ],
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  PRECISION: 100_000_000n,
  zESTSTXWRAPPERCONTRACT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  impl: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  nonce: 0n,
  pauseStates: {
    collateralAdd: false,
    collateralRemove: false,
    debtAdd: false,
    debtRemove: false
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'market-vault',
  },
mockOracle: {
  "functions": {
    setDeployer: {"name":"set-deployer","access":"public","args":[{"name":"new-deployer","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newDeployer: TypedAbiArg<string, "newDeployer">], Response<boolean, bigint>>,
    setPrice: {"name":"set-price","access":"public","args":[{"name":"key","type":{"string-ascii":{"length":32}}},{"name":"value","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">, value: TypedAbiArg<number | bigint, "value">], Response<boolean, bigint>>,
    getDeployer: {"name":"get-deployer","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getValue: {"name":"get-value","access":"read_only","args":[{"name":"key","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>
  },
  "maps": {
    prices: {"name":"prices","key":{"string-ascii":{"length":32}},"value":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]}} as TypedAbiMap<string, {
  "timestamp": bigint;
  "value": bigint;
}>
  },
  "variables": {
    ERR_KEY_NOT_FOUND: {
  name: 'ERR-KEY-NOT-FOUND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_AUTHORIZED: {
  name: 'ERR-NOT-AUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>
  },
  constants: {
  eRRKEYNOTFOUND: {
    isOk: false,
    value: 1_001n
  },
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 1_000n
  },
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'mock-oracle',
  },
proposalCreateEgroupSbtcUsdc: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-create-egroup-sbtc-usdc',
  },
proposalCreateMultipleEgroups: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-create-multiple-egroups',
  },
proposalInitAssets: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BTC_FEED_ID: {
  name: 'BTC-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_STSTX: {
  name: 'CALLCODE-STSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSBTC: {
  name: 'CALLCODE-ZSBTC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTSTX: {
  name: 'CALLCODE-ZSTSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTX: {
  name: 'CALLCODE-ZSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDC: {
  name: 'CALLCODE-ZUSDC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDH: {
  name: 'CALLCODE-ZUSDH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    STX_FEED_ID: {
  name: 'STX-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    TYPE_PYTH: {
  name: 'TYPE-PYTH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    USDC_FEED_ID: {
  name: 'USDC-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    USDH_FEED_ID: {
  name: 'USDH-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>
  },
  constants: {
  bTCFEEDID: Uint8Array.from([230,45,246,200,180,168,95,225,166,125,180,77,193,45,229,219,51,15,122,198,107,114,220,101,138,254,223,15,74,65,91,67]),
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  sTXFEEDID: Uint8Array.from([236,122,119,95,70,55,155,94,148,60,53,38,177,200,213,76,212,151,73,23,107,11,152,224,45,222,104,209,189,51,92,23]),
  tYPEPYTH: Uint8Array.from([0]),
  uSDCFEEDID: Uint8Array.from([234,160,32,198,28,196,121,113,40,19,70,28,225,83,137,74,150,166,192,11,33,237,12,252,39,152,209,249,169,233,201,74]),
  uSDHFEEDID: Uint8Array.from([234,160,32,198,28,196,121,113,40,19,70,28,225,83,137,74,150,166,192,11,33,237,12,252,39,152,209,249,169,233,201,74])
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-init-assets',
  },
proposalInitMarketVault: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-init-market-vault',
  },
proposalInitVaults: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    CAP: {
  name: 'CAP',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  CAP: 10_000_000_000_000n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-init-vaults',
  },
proposalProtocolInit: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BTC_FEED_ID: {
  name: 'BTC-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_STSTX: {
  name: 'CALLCODE-STSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSBTC: {
  name: 'CALLCODE-ZSBTC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTSTX: {
  name: 'CALLCODE-ZSTSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTSTXBTC: {
  name: 'CALLCODE-ZSTSTXBTC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZSTX: {
  name: 'CALLCODE-ZSTX',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDC: {
  name: 'CALLCODE-ZUSDC',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CALLCODE_ZUSDH: {
  name: 'CALLCODE-ZUSDH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    CAP_SBTC_DEBT: {
  name: 'CAP-SBTC-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_SBTC_SUPPLY: {
  name: 'CAP-SBTC-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STSTX_DEBT: {
  name: 'CAP-STSTX-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STSTX_SUPPLY: {
  name: 'CAP-STSTX-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STSTXBTC_DEBT: {
  name: 'CAP-STSTXBTC-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STSTXBTC_SUPPLY: {
  name: 'CAP-STSTXBTC-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STX_DEBT: {
  name: 'CAP-STX-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_STX_SUPPLY: {
  name: 'CAP-STX-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_USDC_DEBT: {
  name: 'CAP-USDC-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_USDC_SUPPLY: {
  name: 'CAP-USDC-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_USDH_DEBT: {
  name: 'CAP-USDH-DEBT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CAP_USDH_SUPPLY: {
  name: 'CAP-USDH-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_STALENESS: {
  name: 'MAX-STALENESS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    RATE_POINTS_SBTC: {
  name: 'RATE-POINTS-SBTC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RATE_POINTS_STSTX: {
  name: 'RATE-POINTS-STSTX',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RATE_POINTS_STSTXBTC: {
  name: 'RATE-POINTS-STSTXBTC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RATE_POINTS_STX: {
  name: 'RATE-POINTS-STX',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RATE_POINTS_USDC: {
  name: 'RATE-POINTS-USDC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RATE_POINTS_USDH: {
  name: 'RATE-POINTS-USDH',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RESERVE_FACTOR: {
  name: 'RESERVE-FACTOR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SBTC_TOKEN: {
  name: 'SBTC-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    STSTX_TOKEN: {
  name: 'STSTX-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    STSTXBTC_TOKEN: {
  name: 'STSTXBTC-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    STX_FEED_ID: {
  name: 'STX-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    TYPE_DIA: {
  name: 'TYPE-DIA',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    TYPE_PYTH: {
  name: 'TYPE-PYTH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    USDC_FEED_ID: {
  name: 'USDC-FEED-ID',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    USDC_TOKEN: {
  name: 'USDC-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    USDH_DIA_KEY: {
  name: 'USDH-DIA-KEY',
  type: {
    'string-ascii': {
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    USDH_TOKEN: {
  name: 'USDH-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UTIL_POINTS_SBTC: {
  name: 'UTIL-POINTS-SBTC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    UTIL_POINTS_STSTX: {
  name: 'UTIL-POINTS-STSTX',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    UTIL_POINTS_STSTXBTC: {
  name: 'UTIL-POINTS-STSTXBTC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    UTIL_POINTS_STX: {
  name: 'UTIL-POINTS-STX',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    UTIL_POINTS_USDC: {
  name: 'UTIL-POINTS-USDC',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    UTIL_POINTS_USDH: {
  name: 'UTIL-POINTS-USDH',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>
  },
  constants: {
  bTCFEEDID: Uint8Array.from([230,45,246,200,180,168,95,225,166,125,180,77,193,45,229,219,51,15,122,198,107,114,220,101,138,254,223,15,74,65,91,67]),
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTSTXBTC: Uint8Array.from([6]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  cAPSBTCDEBT: 10_000_000_000n,
  cAPSBTCSUPPLY: 10_000_000_000n,
  cAPSTSTXDEBT: 10_000_000_000_000n,
  cAPSTSTXSUPPLY: 10_000_000_000_000n,
  cAPSTSTXBTCDEBT: 0n,
  cAPSTSTXBTCSUPPLY: 10_000_000_000_000n,
  cAPSTXDEBT: 10_000_000_000_000n,
  cAPSTXSUPPLY: 10_000_000_000_000n,
  cAPUSDCDEBT: 10_000_000_000_000n,
  cAPUSDCSUPPLY: 10_000_000_000_000n,
  cAPUSDHDEBT: 1_000_000_000_000_000n,
  cAPUSDHSUPPLY: 1_000_000_000_000_000n,
  mAXSTALENESS: 120n,
  rATEPOINTSSBTC: [
    500n,
    600n,
    700n,
    800n,
    900n,
    8_400n,
    15_900n,
    30_900n
  ],
  rATEPOINTSSTSTX: [
    4n,
    160n,
    315n,
    471n,
    704n,
    6_159n,
    14_340n,
    30_704n
  ],
  rATEPOINTSSTSTXBTC: [
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n,
    0n
  ],
  rATEPOINTSSTX: [
    0n,
    176n,
    353n,
    529n,
    706n,
    750n,
    4_750n,
    8_750n
  ],
  rATEPOINTSUSDC: [
    0n,
    118n,
    235n,
    353n,
    471n,
    500n,
    4_850n,
    9_200n
  ],
  rATEPOINTSUSDH: [
    0n,
    235n,
    471n,
    706n,
    941n,
    1_000n,
    5_350n,
    9_700n
  ],
  rESERVEFACTOR: 1_000n,
  sBTCTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc',
  sTSTXTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx',
  sTSTXBTCTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc',
  sTXFEEDID: Uint8Array.from([236,122,119,95,70,55,155,94,148,60,53,38,177,200,213,76,212,151,73,23,107,11,152,224,45,222,104,209,189,51,92,23]),
  tYPEDIA: Uint8Array.from([1]),
  tYPEPYTH: Uint8Array.from([0]),
  uSDCFEEDID: Uint8Array.from([234,160,32,198,28,196,121,113,40,19,70,28,225,83,137,74,150,166,192,11,33,237,12,252,39,152,209,249,169,233,201,74]),
  uSDCTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc',
  uSDHDIAKEY: 'USDh/USD',
  uSDHTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh',
  uTILPOINTSSBTC: [
    0n,
    2_000n,
    4_000n,
    6_000n,
    8_000n,
    8_500n,
    9_000n,
    10_000n
  ],
  uTILPOINTSSTSTX: [
    0n,
    1_000n,
    2_000n,
    3_000n,
    4_500n,
    5_500n,
    7_000n,
    10_000n
  ],
  uTILPOINTSSTSTXBTC: [
    0n,
    1_500n,
    3_000n,
    4_500n,
    6_000n,
    7_500n,
    9_000n,
    10_000n
  ],
  uTILPOINTSSTX: [
    0n,
    2_000n,
    4_000n,
    6_000n,
    8_000n,
    8_500n,
    9_250n,
    10_000n
  ],
  uTILPOINTSUSDC: [
    0n,
    2_000n,
    4_000n,
    6_000n,
    8_000n,
    8_500n,
    9_250n,
    10_000n
  ],
  uTILPOINTSUSDH: [
    0n,
    2_000n,
    4_000n,
    6_000n,
    8_000n,
    8_500n,
    9_250n,
    10_000n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-protocol-init',
  },
proposalSetPriceStaleness: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[], Response<boolean, null>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-set-price-staleness',
  },
proposalSetSbtcInterestRates: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    RATE_POINTS: {
  name: 'RATE-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RESERVE_FACTOR: {
  name: 'RESERVE-FACTOR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    UTIL_POINTS: {
  name: 'UTIL-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>
  },
  constants: {
  rATEPOINTS: [
    200n,
    250n,
    400n,
    600n,
    800n,
    1_800n,
    2_500n,
    10_000n
  ],
  rESERVEFACTOR: 1_000n,
  uTILPOINTS: [
    0n,
    2_500n,
    5_000n,
    7_000n,
    7_500n,
    8_500n,
    9_000n,
    10_000n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-set-sbtc-interest-rates',
  },
proposalSetStxInterestRates: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    RATE_POINTS: {
  name: 'RATE-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RESERVE_FACTOR: {
  name: 'RESERVE-FACTOR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    UTIL_POINTS: {
  name: 'UTIL-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>
  },
  constants: {
  rATEPOINTS: [
    150n,
    200n,
    350n,
    550n,
    700n,
    2_000n,
    3_000n,
    10_000n
  ],
  rESERVEFACTOR: 1_000n,
  uTILPOINTS: [
    0n,
    3_000n,
    5_500n,
    7_000n,
    8_000n,
    8_800n,
    9_300n,
    10_000n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-set-stx-interest-rates',
  },
proposalSetUsdcInterestRates: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    RATE_POINTS: {
  name: 'RATE-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    RESERVE_FACTOR: {
  name: 'RESERVE-FACTOR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    UTIL_POINTS: {
  name: 'UTIL-POINTS',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>
  },
  constants: {
  rATEPOINTS: [
    200n,
    250n,
    400n,
    600n,
    800n,
    1_800n,
    2_500n,
    10_000n
  ],
  rESERVEFACTOR: 1_000n,
  uTILPOINTS: [
    0n,
    2_500n,
    5_000n,
    7_000n,
    7_500n,
    8_500n,
    9_000n,
    10_000n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'proposal-set-usdc-interest-rates',
  },
protocolData: {
  "functions": {
    buildDebtEntry: {"name":"build-debt-entry","access":"private","args":[{"name":"debt-entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"actual-debt","type":"uint128"},{"name":"asset-addr","type":"principal"},{"name":"asset-id","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"interest-accrued","type":"uint128"},{"name":"scaled-debt","type":"uint128"},{"name":"underlying","type":"principal"}]}}} as TypedAbiFunction<[debtEntry: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "debtEntry">], {
  "actualDebt": bigint;
  "assetAddr": string;
  "assetId": bigint;
  "borrowIndex": bigint;
  "interestAccrued": bigint;
  "scaledDebt": bigint;
  "underlying": string;
}>,
    buildInterestCurve: {"name":"build-interest-curve","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
}>,
    buildReserveData: {"name":"build-reserve-data","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
}>,
    calcSupplyApy: {"name":"calc-supply-apy","access":"private","args":[{"name":"borrow-rate","type":"uint128"},{"name":"utilization","type":"uint128"},{"name":"reserve-fee","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[borrowRate: TypedAbiArg<number | bigint, "borrowRate">, utilization: TypedAbiArg<number | bigint, "utilization">, reserveFee: TypedAbiArg<number | bigint, "reserveFee">], bigint>,
    findCollateralAmountIter: {"name":"find-collateral-amount-iter","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}, "entry">, acc: TypedAbiArg<{
  "amount": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "amount": bigint;
  "target": bigint;
}>,
    getAssetPrice: {"name":"get-asset-price","access":"private","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], bigint>,
    getDiaPrice: {"name":"get-dia-price","access":"private","args":[{"name":"key","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[key: TypedAbiArg<string, "key">], bigint | null>,
    getPythPrice: {"name":"get-pyth-price","access":"private","args":[{"name":"feed-id","type":{"buffer":{"length":32}}}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[feedId: TypedAbiArg<Uint8Array, "feedId">], bigint | null>,
    getStstxRatio: {"name":"get-ststx-ratio","access":"private","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getVaultAvailableLiquidity: {"name":"get-vault-available-liquidity","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultBorrowIndex: {"name":"get-vault-borrow-index","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultCapDebt: {"name":"get-vault-cap-debt","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultCapSupply: {"name":"get-vault-cap-supply","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultDebt: {"name":"get-vault-debt","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultFeeReserve: {"name":"get-vault-fee-reserve","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultInterestRate: {"name":"get-vault-interest-rate","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultLastUpdate: {"name":"get-vault-last-update","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultLiquidityIndex: {"name":"get-vault-liquidity-index","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultPointsRate: {"name":"get-vault-points-rate","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint[]>,
    getVaultPointsUtil: {"name":"get-vault-points-util","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint[]>,
    getVaultTotalAssets: {"name":"get-vault-total-assets","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultTotalSupply: {"name":"get-vault-total-supply","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    getVaultUnderlying: {"name":"get-vault-underlying","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"principal"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], string>,
    getVaultUnderlyingBalance: {"name":"get-vault-underlying-balance","access":"private","args":[{"name":"vid","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">, account: TypedAbiArg<string, "account">], bigint>,
    getVaultUtilization: {"name":"get-vault-utilization","access":"private","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], bigint>,
    iterBuildAsset: {"name":"iter-build-asset","access":"private","args":[{"name":"id","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"max-id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"max-staleness","type":"uint128"},{"name":"oracle-callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"oracle-ident","type":{"buffer":{"length":32}}},{"name":"oracle-type","type":{"buffer":{"length":1}}}]},"length":128}}}]}}],"outputs":{"type":{"tuple":[{"name":"max-id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"max-staleness","type":"uint128"},{"name":"oracle-callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"oracle-ident","type":{"buffer":{"length":32}}},{"name":"oracle-type","type":{"buffer":{"length":1}}}]},"length":128}}}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, acc: TypedAbiArg<{
  "maxId": number | bigint;
  "result": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": number | bigint;
  "id": number | bigint;
  "maxStaleness": number | bigint;
  "oracleCallcode": Uint8Array | null;
  "oracleIdent": Uint8Array;
  "oracleType": Uint8Array;
}[];
}, "acc">], {
  "maxId": bigint;
  "result": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "maxStaleness": bigint;
  "oracleCallcode": Uint8Array | null;
  "oracleIdent": Uint8Array;
  "oracleType": Uint8Array;
}[];
}>,
    iterBuildEgroup: {"name":"iter-build-egroup","access":"private","args":[{"name":"id","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"max-id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"borrow-disabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"liq-curve-exp","type":"uint128"},{"name":"liq-penalty-max","type":"uint128"},{"name":"liq-penalty-min","type":"uint128"},{"name":"ltv-borrow","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"mask","type":"uint128"}]},"length":128}}}]}}],"outputs":{"type":{"tuple":[{"name":"max-id","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"borrow-disabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"liq-curve-exp","type":"uint128"},{"name":"liq-penalty-max","type":"uint128"},{"name":"liq-penalty-min","type":"uint128"},{"name":"ltv-borrow","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"mask","type":"uint128"}]},"length":128}}}]}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, acc: TypedAbiArg<{
  "maxId": number | bigint;
  "result": {
  "borrowDisabledMask": number | bigint;
  "id": number | bigint;
  "liqCurveExp": number | bigint;
  "liqPenaltyMax": number | bigint;
  "liqPenaltyMin": number | bigint;
  "ltvBorrow": number | bigint;
  "ltvLiqFull": number | bigint;
  "ltvLiqPartial": number | bigint;
  "mask": number | bigint;
}[];
}, "acc">], {
  "maxId": bigint;
  "result": {
  "borrowDisabledMask": bigint;
  "id": bigint;
  "liqCurveExp": bigint;
  "liqPenaltyMax": bigint;
  "liqPenaltyMin": bigint;
  "ltvBorrow": bigint;
  "ltvLiqFull": bigint;
  "ltvLiqPartial": bigint;
  "mask": bigint;
}[];
}>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    normalizePyth: {"name":"normalize-pyth","access":"private","args":[{"name":"price","type":"int128"},{"name":"expo","type":"int128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[price: TypedAbiArg<number | bigint, "price">, expo: TypedAbiArg<number | bigint, "expo">], bigint>,
    sumCollateralUsd: {"name":"sum-collateral-usd","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]}},{"name":"acc","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}, "entry">, acc: TypedAbiArg<number | bigint, "acc">], bigint>,
    sumDebtUsd: {"name":"sum-debt-usd","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "entry">, acc: TypedAbiArg<number | bigint, "acc">], bigint>,
    underlyingToVaultId: {"name":"underlying-to-vault-id","access":"private","args":[{"name":"underlying","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[underlying: TypedAbiArg<string, "underlying">], Response<bigint, bigint>>,
    getAllAssets: {"name":"get-all-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"max-staleness","type":"uint128"},{"name":"oracle-callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"oracle-ident","type":{"buffer":{"length":32}}},{"name":"oracle-type","type":{"buffer":{"length":1}}}]},"length":128}}},{"name":"count","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "assets": {
  "addr": string;
  "collateral": boolean;
  "debt": boolean;
  "decimals": bigint;
  "id": bigint;
  "maxStaleness": bigint;
  "oracleCallcode": Uint8Array | null;
  "oracleIdent": Uint8Array;
  "oracleType": Uint8Array;
}[];
  "count": bigint;
}, null>>,
    getAllEgroups: {"name":"get-all-egroups","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"count","type":"uint128"},{"name":"egroups","type":{"list":{"type":{"tuple":[{"name":"borrow-disabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"liq-curve-exp","type":"uint128"},{"name":"liq-penalty-max","type":"uint128"},{"name":"liq-penalty-min","type":"uint128"},{"name":"ltv-borrow","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"mask","type":"uint128"}]},"length":128}}}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "count": bigint;
  "egroups": {
  "borrowDisabledMask": bigint;
  "id": bigint;
  "liqCurveExp": bigint;
  "liqPenaltyMax": bigint;
  "liqPenaltyMin": bigint;
  "ltvBorrow": bigint;
  "ltvLiqFull": bigint;
  "ltvLiqPartial": bigint;
  "mask": bigint;
}[];
}, null>>,
    getAllInterestCurves: {"name":"get-all-interest-curves","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"sbtc","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststx","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststxbtc","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"stx","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdc","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdh","type":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "sbtc": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
  "ststx": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
  "ststxbtc": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
  "stx": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
  "usdc": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
  "usdh": {
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
};
}, null>>,
    getAllReserves: {"name":"get-all-reserves","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"sbtc","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststx","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststxbtc","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}},{"name":"stx","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdc","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdh","type":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "sbtc": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
  "ststx": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
  "ststxbtc": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
  "stx": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
  "usdc": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
  "usdh": {
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
};
}, null>>,
    getAllVaultRatios: {"name":"get-all-vault-ratios","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"sbtc","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststx","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"ststxbtc","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"stx","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdc","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}},{"name":"usdh","type":{"tuple":[{"name":"shares-to-assets","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "sbtc": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
  "ststx": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
  "ststxbtc": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
  "stx": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
  "usdc": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
  "usdh": {
  "sharesToAssets": bigint;
  "underlying": string;
  "vaultId": bigint;
};
}, null>>,
    getAssetApys: {"name":"get-asset-apys","access":"read_only","args":[{"name":"underlying","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"borrow-apy","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[underlying: TypedAbiArg<string, "underlying">], Response<{
  "borrowApy": bigint;
  "feeReserve": bigint;
  "supplyApy": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
}, bigint>>,
    getEgroup: {"name":"get-egroup","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"borrow-disabled-mask","type":"uint128"},{"name":"id","type":"uint128"},{"name":"liq-curve-exp","type":"uint128"},{"name":"liq-penalty-max","type":"uint128"},{"name":"liq-penalty-min","type":"uint128"},{"name":"ltv-borrow","type":"uint128"},{"name":"ltv-liq-full","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"mask","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<{
  "borrowDisabledMask": bigint;
  "id": bigint;
  "liqCurveExp": bigint;
  "liqPenaltyMax": bigint;
  "liqPenaltyMin": bigint;
  "ltvBorrow": bigint;
  "ltvLiqFull": bigint;
  "ltvLiqPartial": bigint;
  "mask": bigint;
}, null>>,
    getInterestCurve: {"name":"get-interest-curve","access":"read_only","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"current-rate","type":"uint128"},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"underlying","type":"principal"},{"name":"vault-id","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], Response<{
  "currentRate": bigint;
  "pointsRate": bigint[];
  "pointsUtil": bigint[];
  "underlying": string;
  "vaultId": bigint;
}, bigint>>,
    getMarketVaultBalances: {"name":"get-market-vault-balances","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"underlying","type":{"tuple":[{"name":"sbtc","type":"uint128"},{"name":"ststx","type":"uint128"},{"name":"ststxbtc","type":"uint128"},{"name":"usdc","type":"uint128"},{"name":"usdh","type":"uint128"},{"name":"wstx","type":"uint128"}]}},{"name":"ztokens","type":{"tuple":[{"name":"vault-sbtc","type":"uint128"},{"name":"vault-ststx","type":"uint128"},{"name":"vault-ststxbtc","type":"uint128"},{"name":"vault-stx","type":"uint128"},{"name":"vault-usdc","type":"uint128"},{"name":"vault-usdh","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "underlying": {
  "sbtc": bigint;
  "ststx": bigint;
  "ststxbtc": bigint;
  "usdc": bigint;
  "usdh": bigint;
  "wstx": bigint;
};
  "ztokens": {
  "vaultSbtc": bigint;
  "vaultStstx": bigint;
  "vaultStstxbtc": bigint;
  "vaultStx": bigint;
  "vaultUsdc": bigint;
  "vaultUsdh": bigint;
};
}, null>>,
    getMarketVaultBalancesUser: {"name":"get-market-vault-balances-user","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"market-vault-collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"vault-balances","type":{"tuple":[{"name":"sbtc","type":"uint128"},{"name":"ststx","type":"uint128"},{"name":"ststxbtc","type":"uint128"},{"name":"stx","type":"uint128"},{"name":"usdc","type":"uint128"},{"name":"usdh","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "marketVaultCollateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "vaultBalances": {
  "sbtc": bigint;
  "ststx": bigint;
  "ststxbtc": bigint;
  "stx": bigint;
  "usdc": bigint;
  "usdh": bigint;
};
}, null>>,
    getProtocolSummary: {"name":"get-protocol-summary","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"asset-count","type":"uint128"},{"name":"egroup-count","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supplied","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "assetCount": bigint;
  "egroupCount": bigint;
  "totalBorrowed": bigint;
  "totalSupplied": bigint;
}, null>>,
    getReserve: {"name":"get-reserve","access":"read_only","args":[{"name":"vid","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"available-liquidity","type":"uint128"},{"name":"available-to-borrow","type":"uint128"},{"name":"borrow-apy","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"cap-debt","type":"uint128"},{"name":"cap-supply","type":"uint128"},{"name":"fee-reserve","type":"uint128"},{"name":"last-update","type":"uint128"},{"name":"liquidity-index","type":"uint128"},{"name":"supply-apy","type":"uint128"},{"name":"total-assets","type":"uint128"},{"name":"total-borrowed","type":"uint128"},{"name":"total-supply","type":"uint128"},{"name":"underlying","type":"principal"},{"name":"utilization","type":"uint128"},{"name":"vault-id","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[vid: TypedAbiArg<number | bigint, "vid">], Response<{
  "availableLiquidity": bigint;
  "availableToBorrow": bigint;
  "borrowApy": bigint;
  "borrowIndex": bigint;
  "capDebt": bigint;
  "capSupply": bigint;
  "feeReserve": bigint;
  "lastUpdate": bigint;
  "liquidityIndex": bigint;
  "supplyApy": bigint;
  "totalAssets": bigint;
  "totalBorrowed": bigint;
  "totalSupply": bigint;
  "underlying": string;
  "utilization": bigint;
  "vaultId": bigint;
}, bigint>>,
    getSuppliesUser: {"name":"get-supplies-user","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"market-collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"vault-shares","type":{"tuple":[{"name":"sbtc","type":"uint128"},{"name":"ststx","type":"uint128"},{"name":"ststxbtc","type":"uint128"},{"name":"stx","type":"uint128"},{"name":"usdc","type":"uint128"},{"name":"usdh","type":"uint128"}]}},{"name":"vault-underlying","type":{"tuple":[{"name":"sbtc","type":"uint128"},{"name":"ststx","type":"uint128"},{"name":"ststxbtc","type":"uint128"},{"name":"stx","type":"uint128"},{"name":"usdc","type":"uint128"},{"name":"usdh","type":"uint128"}]}}]},"error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "marketCollateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "vaultShares": {
  "sbtc": bigint;
  "ststx": bigint;
  "ststxbtc": bigint;
  "stx": bigint;
  "usdc": bigint;
  "usdh": bigint;
};
  "vaultUnderlying": {
  "sbtc": bigint;
  "ststx": bigint;
  "ststxbtc": bigint;
  "stx": bigint;
  "usdc": bigint;
  "usdh": bigint;
};
}, null>>,
    getUserBorrows: {"name":"get-user-borrows","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"borrows","type":{"list":{"type":{"tuple":[{"name":"actual-debt","type":"uint128"},{"name":"asset-addr","type":"principal"},{"name":"asset-id","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"interest-accrued","type":"uint128"},{"name":"scaled-debt","type":"uint128"},{"name":"underlying","type":"principal"}]},"length":64}}}]},"error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "borrows": {
  "actualDebt": bigint;
  "assetAddr": string;
  "assetId": bigint;
  "borrowIndex": bigint;
  "interestAccrued": bigint;
  "scaledDebt": bigint;
  "underlying": string;
}[];
}, null>>,
    getUserPosition: {"name":"get-user-position","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"account","type":"principal"},{"name":"collateral","type":{"list":{"type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]},"length":64}}},{"name":"current-ltv","type":"uint128"},{"name":"debt","type":{"list":{"type":{"tuple":[{"name":"actual-debt","type":"uint128"},{"name":"asset-addr","type":"principal"},{"name":"asset-id","type":"uint128"},{"name":"borrow-index","type":"uint128"},{"name":"interest-accrued","type":"uint128"},{"name":"scaled-debt","type":"uint128"},{"name":"underlying","type":"principal"}]},"length":64}}},{"name":"health-factor","type":"uint128"},{"name":"is-liquidatable","type":"bool"},{"name":"ltv-borrow","type":"uint128"},{"name":"ltv-liq-partial","type":"uint128"},{"name":"mask","type":"uint128"},{"name":"total-collateral-usd","type":"uint128"},{"name":"total-debt-usd","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "account": string;
  "collateral": {
  "aid": bigint;
  "amount": bigint;
}[];
  "currentLtv": bigint;
  "debt": {
  "actualDebt": bigint;
  "assetAddr": string;
  "assetId": bigint;
  "borrowIndex": bigint;
  "interestAccrued": bigint;
  "scaledDebt": bigint;
  "underlying": string;
}[];
  "healthFactor": bigint;
  "isLiquidatable": boolean;
  "ltvBorrow": bigint;
  "ltvLiqPartial": bigint;
  "mask": bigint;
  "totalCollateralUsd": bigint;
  "totalDebtUsd": bigint;
}, bigint>>,
    getUserSbtcBalances: {"name":"get-user-sbtc-balances","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"market-collateral","type":"uint128"},{"name":"total","type":"uint128"},{"name":"vault-underlying","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<{
  "marketCollateral": bigint;
  "total": bigint;
  "vaultUnderlying": bigint;
}, null>>
  },
  "maps": {
    
  },
  "variables": {
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DIA_USDH: {
  name: 'DIA-USDH',
  type: {
    'string-ascii': {
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_NO_POSITION: {
  name: 'ERR-NO-POSITION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNKNOWN_UNDERLYING: {
  name: 'ERR-UNKNOWN-UNDERLYING',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNKNOWN_VAULT: {
  name: 'ERR-UNKNOWN-VAULT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT128: {
  name: 'ITER-UINT-128',
  type: {
    list: {
      type: 'uint128',
      length: 128
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    PYTH_BTC: {
  name: 'PYTH-BTC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PYTH_STX: {
  name: 'PYTH-STX',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PYTH_USDC: {
  name: 'PYTH-USDC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    STSTX_RATIO_DECIMALS: {
  name: 'STSTX-RATIO-DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STX: {
  name: 'STX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    UNDERLYING_SBTC: {
  name: 'UNDERLYING-SBTC',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING_STSTX: {
  name: 'UNDERLYING-STSTX',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING_STSTXBTC: {
  name: 'UNDERLYING-STSTXBTC',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING_STX: {
  name: 'UNDERLYING-STX',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING_USDC: {
  name: 'UNDERLYING-USDC',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING_USDH: {
  name: 'UNDERLYING-USDH',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    USDC: {
  name: 'USDC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    USDH: {
  name: 'USDH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    VAULT_IDS: {
  name: 'VAULT-IDS',
  type: {
    list: {
      type: 'uint128',
      length: 6
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    sBTC: {
  name: 'sBTC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    stSTX: {
  name: 'stSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    stSTXbtc: {
  name: 'stSTXbtc',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zSTX: {
  name: 'zSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zUSDC: {
  name: 'zUSDC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zUSDH: {
  name: 'zUSDH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zsBTC: {
  name: 'zsBTC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zstSTX: {
  name: 'zstSTX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    zstSTXbtc: {
  name: 'zstSTXbtc',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  BPS: 10_000n,
  dIAUSDH: 'USDh/USD',
  eRRNOPOSITION: {
    isOk: false,
    value: 900_003n
  },
  eRRUNKNOWNUNDERLYING: {
    isOk: false,
    value: 900_002n
  },
  eRRUNKNOWNVAULT: {
    isOk: false,
    value: 900_001n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT128: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n,
    8n,
    9n,
    10n,
    11n,
    12n,
    13n,
    14n,
    15n,
    16n,
    17n,
    18n,
    19n,
    20n,
    21n,
    22n,
    23n,
    24n,
    25n,
    26n,
    27n,
    28n,
    29n,
    30n,
    31n,
    32n,
    33n,
    34n,
    35n,
    36n,
    37n,
    38n,
    39n,
    40n,
    41n,
    42n,
    43n,
    44n,
    45n,
    46n,
    47n,
    48n,
    49n,
    50n,
    51n,
    52n,
    53n,
    54n,
    55n,
    56n,
    57n,
    58n,
    59n,
    60n,
    61n,
    62n,
    63n,
    64n,
    65n,
    66n,
    67n,
    68n,
    69n,
    70n,
    71n,
    72n,
    73n,
    74n,
    75n,
    76n,
    77n,
    78n,
    79n,
    80n,
    81n,
    82n,
    83n,
    84n,
    85n,
    86n,
    87n,
    88n,
    89n,
    90n,
    91n,
    92n,
    93n,
    94n,
    95n,
    96n,
    97n,
    98n,
    99n,
    100n,
    101n,
    102n,
    103n,
    104n,
    105n,
    106n,
    107n,
    108n,
    109n,
    110n,
    111n,
    112n,
    113n,
    114n,
    115n,
    116n,
    117n,
    118n,
    119n,
    120n,
    121n,
    122n,
    123n,
    124n,
    125n,
    126n,
    127n
  ],
  pYTHBTC: Uint8Array.from([230,45,246,200,180,168,95,225,166,125,180,77,193,45,229,219,51,15,122,198,107,114,220,101,138,254,223,15,74,65,91,67]),
  pYTHSTX: Uint8Array.from([236,122,119,95,70,55,155,94,148,60,53,38,177,200,213,76,212,151,73,23,107,11,152,224,45,222,104,209,189,51,92,23]),
  pYTHUSDC: Uint8Array.from([234,160,32,198,28,196,121,113,40,19,70,28,225,83,137,74,150,166,192,11,33,237,12,252,39,152,209,249,169,233,201,74]),
  sTSTXRATIODECIMALS: 1_000_000n,
  STX: 0n,
  uNDERLYINGSBTC: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc',
  uNDERLYINGSTSTX: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx',
  uNDERLYINGSTSTXBTC: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc',
  uNDERLYINGSTX: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  uNDERLYINGUSDC: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc',
  uNDERLYINGUSDH: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh',
  USDC: 6n,
  USDH: 8n,
  vAULTIDS: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n
  ],
  sBTC: 2n,
  stSTX: 4n,
  stSTXbtc: 10n,
  zSTX: 1n,
  zUSDC: 7n,
  zUSDH: 9n,
  zsBTC: 3n,
  zstSTX: 5n,
  zstSTXbtc: 11n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'protocol-data',
  },
pythGovernanceV3: {
  "functions": {
    checkUpdateSource: {"name":"check-update-source","access":"private","args":[{"name":"emitter-chain","type":"uint128"},{"name":"emitter-address","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[emitterChain: TypedAbiArg<number | bigint, "emitterChain">, emitterAddress: TypedAbiArg<Uint8Array, "emitterAddress">], Response<boolean, bigint>>,
    expectActiveDecoderContract: {"name":"expect-active-decoder-contract","access":"private","args":[{"name":"decoder-contract","type":"trait_reference"},{"name":"expected-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"principal"},{"name":"pyth-oracle-contract","type":"principal"},{"name":"pyth-storage-contract","type":"principal"},{"name":"wormhole-core-contract","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[decoderContract: TypedAbiArg<string, "decoderContract">, expectedPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "expectedPlan">], Response<boolean, bigint>>,
    expectActiveStorageContract: {"name":"expect-active-storage-contract","access":"private","args":[{"name":"storage-contract","type":"trait_reference"},{"name":"expected-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"principal"},{"name":"pyth-oracle-contract","type":"principal"},{"name":"pyth-storage-contract","type":"principal"},{"name":"wormhole-core-contract","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[storageContract: TypedAbiArg<string, "storageContract">, expectedPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "expectedPlan">], Response<boolean, bigint>>,
    expectActiveWormholeContract: {"name":"expect-active-wormhole-contract","access":"private","args":[{"name":"wormhole-contract","type":"trait_reference"},{"name":"expected-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"principal"},{"name":"pyth-oracle-contract","type":"principal"},{"name":"pyth-storage-contract","type":"principal"},{"name":"wormhole-core-contract","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[wormholeContract: TypedAbiArg<string, "wormholeContract">, expectedPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "expectedPlan">], Response<boolean, bigint>>,
    expectContractCallPerformedByExpectedOracleContract: {"name":"expect-contract-call-performed-by-expected-oracle-contract","access":"private","args":[{"name":"former-contract-caller","type":"principal"},{"name":"expected-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"principal"},{"name":"pyth-oracle-contract","type":"principal"},{"name":"pyth-storage-contract","type":"principal"},{"name":"wormhole-core-contract","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[formerContractCaller: TypedAbiArg<string, "formerContractCaller">, expectedPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "expectedPlan">], Response<boolean, bigint>>,
    parseAndVerifyFeeValue: {"name":"parse-and-verify-fee-value","access":"private","args":[{"name":"ptgm-body","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"exponent","type":"uint128"},{"name":"mantissa","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ptgmBody: TypedAbiArg<Uint8Array, "ptgmBody">], Response<{
  "exponent": bigint;
  "mantissa": bigint;
}, bigint>>,
    parseAndVerifyGovernanceDataSource: {"name":"parse-and-verify-governance-data-source","access":"private","args":[{"name":"ptgm-body","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"},{"name":"emitter-sequence","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ptgmBody: TypedAbiArg<Uint8Array, "ptgmBody">], Response<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
  "emitterSequence": bigint;
}, bigint>>,
    parseAndVerifyPricesDataSources: {"name":"parse-and-verify-prices-data-sources","access":"private","args":[{"name":"ptgm-body","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"}]},"length":255}},"error":"uint128"}}}} as TypedAbiFunction<[ptgmBody: TypedAbiArg<Uint8Array, "ptgmBody">], Response<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}[], bigint>>,
    parseAndVerifyPtgm: {"name":"parse-and-verify-ptgm","access":"private","args":[{"name":"ptgm-bytes","type":{"buffer":{"length":8192}}},{"name":"sequence","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"action","type":{"buffer":{"length":1}}},{"name":"body","type":{"buffer":{"length":8192}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ptgmBytes: TypedAbiArg<Uint8Array, "ptgmBytes">, sequence: TypedAbiArg<number | bigint, "sequence">], Response<{
  "action": Uint8Array;
  "body": Uint8Array;
}, bigint>>,
    parseAndVerifyStalePriceThreshold: {"name":"parse-and-verify-stale-price-threshold","access":"private","args":[{"name":"ptgm-body","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ptgmBody: TypedAbiArg<Uint8Array, "ptgmBody">], Response<bigint, bigint>>,
    parseDataSource: {"name":"parse-data-source","access":"private","args":[{"name":"entry","type":{"buffer":{"length":1}}},{"name":"acc","type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"cursor","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"next-update-index","type":"uint128"}]}},{"name":"limit","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"}]},"length":255}}}]}}],"outputs":{"type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"cursor","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"next-update-index","type":"uint128"}]}},{"name":"limit","type":"uint128"},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"}]},"length":255}}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<Uint8Array, "entry">, acc: TypedAbiArg<{
  "bytes": Uint8Array;
  "cursor": {
  "index": number | bigint;
  "nextUpdateIndex": number | bigint;
};
  "limit": number | bigint;
  "result": {
  "emitterAddress": Uint8Array;
  "emitterChain": number | bigint;
}[];
}, "acc">], {
  "bytes": Uint8Array;
  "cursor": {
  "index": bigint;
  "nextUpdateIndex": bigint;
};
  "limit": bigint;
  "result": {
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}[];
}>,
    parsePrincipal: {"name":"parse-principal","access":"private","args":[{"name":"ptgm-body","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[ptgmBody: TypedAbiArg<Uint8Array, "ptgmBody">], Response<string, bigint>>,
    readBuff: {"name":"read-buff","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"length","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":8192}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, length: TypedAbiArg<number | bigint, "length">], Response<Uint8Array, bigint>>,
    readBuff1: {"name":"read-buff-1","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":1}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff2: {"name":"read-buff-2","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":2}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff32: {"name":"read-buff-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":32}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff4: {"name":"read-buff-4","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":4}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readUint16: {"name":"read-uint-16","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint64: {"name":"read-uint-64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint8: {"name":"read-uint-8","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    slice: {"name":"slice","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"size","type":{"optional":"uint128"}}],"outputs":{"type":{"buffer":{"length":8192}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, size: TypedAbiArg<number | bigint | null, "size">], Uint8Array>,
    updateFeeRecipientAddress: {"name":"update-fee-recipient-address","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<string, bigint>>,
    updateFeeValue: {"name":"update-fee-value","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"exponent","type":"uint128"},{"name":"mantissa","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<{
  "exponent": bigint;
  "mantissa": bigint;
}, bigint>>,
    updateGovernanceDataSource: {"name":"update-governance-data-source","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"},{"name":"emitter-sequence","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
  "emitterSequence": bigint;
}, bigint>>,
    updatePricesDataSources: {"name":"update-prices-data-sources","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"}]},"length":255}},"error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}[], bigint>>,
    updatePythDecoderContract: {"name":"update-pyth-decoder-contract","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<string, bigint>>,
    updatePythOracleContract: {"name":"update-pyth-oracle-contract","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<string, bigint>>,
    updatePythStorageContract: {"name":"update-pyth-storage-contract","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<string, bigint>>,
    updateStalePriceThreshold: {"name":"update-stale-price-threshold","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<bigint, bigint>>,
    updateWormholeCoreContract: {"name":"update-wormhole-core-contract","access":"public","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">, wormholeCoreContract: TypedAbiArg<string, "wormholeCoreContract">], Response<string, bigint>>,
    checkExecutionFlow: {"name":"check-execution-flow","access":"read_only","args":[{"name":"former-contract-caller","type":"principal"},{"name":"execution-plan-opt","type":{"optional":{"tuple":[{"name":"pyth-decoder-contract","type":"trait_reference"},{"name":"pyth-storage-contract","type":"trait_reference"},{"name":"wormhole-core-contract","type":"trait_reference"}]}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[formerContractCaller: TypedAbiArg<string, "formerContractCaller">, executionPlanOpt: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
} | null, "executionPlanOpt">], Response<boolean, bigint>>,
    checkStorageContract: {"name":"check-storage-contract","access":"read_only","args":[{"name":"storage-contract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[storageContract: TypedAbiArg<string, "storageContract">], Response<boolean, bigint>>,
    getAuthorizedPricesDataSources: {"name":"get-authorized-prices-data-sources","access":"read_only","args":[],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"}]},"length":255}}}} as TypedAbiFunction<[], {
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}[]>,
    getCurrentExecutionPlan: {"name":"get-current-execution-plan","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"pyth-decoder-contract","type":"principal"},{"name":"pyth-oracle-contract","type":"principal"},{"name":"pyth-storage-contract","type":"principal"},{"name":"wormhole-core-contract","type":"principal"}]}}} as TypedAbiFunction<[], {
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}>,
    getFeeInfo: {"name":"get-fee-info","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"address","type":"principal"},{"name":"exponent","type":"uint128"},{"name":"mantissa","type":"uint128"}]}}} as TypedAbiFunction<[], {
  "address": string;
  "exponent": bigint;
  "mantissa": bigint;
}>,
    getStalePriceThreshold: {"name":"get-stale-price-threshold","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>
  },
  "maps": {
    
  },
  "variables": {
    ERR_INVALID_ACTION_PAYLOAD: {
  name: 'ERR_INVALID_ACTION_PAYLOAD',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_PRICE_DATA_SOURCES: {
  name: 'ERR_INVALID_PRICE_DATA_SOURCES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_PTGM: {
  name: 'ERR_INVALID_PTGM',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_STANDARD_PRINCIPAL: {
  name: 'ERR_NOT_STANDARD_PRINCIPAL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTDATED: {
  name: 'ERR_OUTDATED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PTGM_CHECK_OVERLAY: {
  name: 'ERR_PTGM_CHECK_OVERLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED_ACCESS: {
  name: 'ERR_UNAUTHORIZED_ACCESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED_UPDATE: {
  name: 'ERR_UNAUTHORIZED_UPDATE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNEXPECTED_ACTION: {
  name: 'ERR_UNEXPECTED_ACTION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    EXPECTED_CHAIN_ID: {
  name: 'EXPECTED_CHAIN_ID',
  type: {
    buffer: {
      length: 2
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    EXPECTED_MODULE: {
  name: 'EXPECTED_MODULE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_MAGIC: {
  name: 'PTGM_MAGIC',
  type: {
    buffer: {
      length: 4
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_STALE_PRICE_THRESHOLD: {
  name: 'PTGM_STALE_PRICE_THRESHOLD',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_FEE: {
  name: 'PTGM_UPDATE_FEE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_GOVERNANCE_DATA_SOURCE: {
  name: 'PTGM_UPDATE_GOVERNANCE_DATA_SOURCE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_PRICES_DATA_SOURCES: {
  name: 'PTGM_UPDATE_PRICES_DATA_SOURCES',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_PYTH_DECODER_ADDRESS: {
  name: 'PTGM_UPDATE_PYTH_DECODER_ADDRESS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_PYTH_ORACLE_ADDRESS: {
  name: 'PTGM_UPDATE_PYTH_ORACLE_ADDRESS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_PYTH_STORAGE_ADDRESS: {
  name: 'PTGM_UPDATE_PYTH_STORAGE_ADDRESS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_RECIPIENT_ADDRESS: {
  name: 'PTGM_UPDATE_RECIPIENT_ADDRESS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PTGM_UPDATE_WORMHOLE_CORE_ADDRESS: {
  name: 'PTGM_UPDATE_WORMHOLE_CORE_ADDRESS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    SIZE_OF_EMITTER_DATA: {
  name: 'SIZE_OF_EMITTER_DATA',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    currentExecutionPlan: {
  name: 'current-execution-plan',
  type: {
    tuple: [
      {
        name: 'pyth-decoder-contract',
        type: 'principal'
      },
      {
        name: 'pyth-oracle-contract',
        type: 'principal'
      },
      {
        name: 'pyth-storage-contract',
        type: 'principal'
      },
      {
        name: 'wormhole-core-contract',
        type: 'principal'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "pythDecoderContract": string;
  "pythOracleContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}>,
    feeRecipientAddress: {
  name: 'fee-recipient-address',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    feeValue: {
  name: 'fee-value',
  type: {
    tuple: [
      {
        name: 'exponent',
        type: 'uint128'
      },
      {
        name: 'mantissa',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "exponent": bigint;
  "mantissa": bigint;
}>,
    governanceDataSource: {
  name: 'governance-data-source',
  type: {
    tuple: [
      {
        name: 'emitter-address',
        type: {
          buffer: {
            length: 32
          }
        }
      },
      {
        name: 'emitter-chain',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}>,
    lastSequenceProcessed: {
  name: 'last-sequence-processed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pricesDataSources: {
  name: 'prices-data-sources',
  type: {
    list: {
      type: {
        tuple: [
          {
            name: 'emitter-address',
            type: {
              buffer: {
                length: 32
              }
            }
          },
          {
            name: 'emitter-chain',
            type: 'uint128'
          }
        ]
      },
      length: 255
    }
  },
  access: 'variable'
} as TypedAbiVariable<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
}[]>,
    stalePriceThreshold: {
  name: 'stale-price-threshold',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  ERR_INVALID_ACTION_PAYLOAD: {
    isOk: false,
    value: 4_002n
  },
  ERR_INVALID_PRICE_DATA_SOURCES: {
    isOk: false,
    value: 4_009n
  },
  ERR_INVALID_PTGM: {
    isOk: false,
    value: 4_006n
  },
  ERR_NOT_STANDARD_PRINCIPAL: {
    isOk: false,
    value: 4_007n
  },
  ERR_OUTDATED: {
    isOk: false,
    value: 4_004n
  },
  ERR_PTGM_CHECK_OVERLAY: {
    isOk: false,
    value: 4_008n
  },
  ERR_UNAUTHORIZED_ACCESS: {
    isOk: false,
    value: 4_003n
  },
  ERR_UNAUTHORIZED_UPDATE: {
    isOk: false,
    value: 4_005n
  },
  ERR_UNEXPECTED_ACTION: {
    isOk: false,
    value: 4_001n
  },
  EXPECTED_CHAIN_ID: Uint8Array.from([195,119]),
  EXPECTED_MODULE: Uint8Array.from([3]),
  PTGM_MAGIC: Uint8Array.from([80,84,71,77]),
  PTGM_STALE_PRICE_THRESHOLD: Uint8Array.from([4]),
  PTGM_UPDATE_FEE: Uint8Array.from([3]),
  PTGM_UPDATE_GOVERNANCE_DATA_SOURCE: Uint8Array.from([1]),
  PTGM_UPDATE_PRICES_DATA_SOURCES: Uint8Array.from([2]),
  PTGM_UPDATE_PYTH_DECODER_ADDRESS: Uint8Array.from([162]),
  PTGM_UPDATE_PYTH_ORACLE_ADDRESS: Uint8Array.from([0]),
  PTGM_UPDATE_PYTH_STORAGE_ADDRESS: Uint8Array.from([161]),
  PTGM_UPDATE_RECIPIENT_ADDRESS: Uint8Array.from([160]),
  PTGM_UPDATE_WORMHOLE_CORE_ADDRESS: Uint8Array.from([6]),
  SIZE_OF_EMITTER_DATA: 34n,
  currentExecutionPlan: {
    pythDecoderContract: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-pnau-decoder-v3',
    pythOracleContract: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-oracle-v4',
    pythStorageContract: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-storage-v4',
    wormholeCoreContract: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-core-v4'
  },
  feeRecipientAddress: 'ST3CRXBDXQ2N5P7E25Q39MEX1HSMRDSEAP1JST19D',
  feeValue: {
    exponent: 0n,
    mantissa: 1n
  },
  governanceDataSource: {
    emitterAddress: Uint8Array.from([86,53,151,154,34,28,52,147,30,50,98,11,146,147,164,99,6,85,85,234,113,254,151,205,98,55,173,232,117,177,46,158]),
    emitterChain: 1n
  },
  lastSequenceProcessed: 0n,
  pricesDataSources: [
    {
      emitterAddress: Uint8Array.from([107,177,69,9,166,18,240,31,187,196,207,254,235,212,187,251,73,42,134,223,113,126,190,146,235,109,244,50,163,240,10,37]),
      emitterChain: 1n
    },
    {
      emitterAddress: Uint8Array.from([248,205,35,194,171,145,35,119,48,119,11,190,160,141,97,0,92,221,160,152,67,72,243,246,238,203,85,150,56,192,187,160]),
      emitterChain: 26n
    },
    {
      emitterAddress: Uint8Array.from([225,1,250,237,172,88,81,227,43,155,35,181,249,65,26,140,43,172,74,174,62,212,221,123,129,29,209,167,46,164,170,113]),
      emitterChain: 26n
    }
  ],
  stalePriceThreshold: 157_680_000n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pyth-governance-v3',
  },
pythOracleV4: {
  "functions": {
    decodePriceFeeds: {"name":"decode-price-feeds","access":"public","args":[{"name":"price-feed-bytes","type":{"buffer":{"length":8192}}},{"name":"execution-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"trait_reference"},{"name":"pyth-storage-contract","type":"trait_reference"},{"name":"wormhole-core-contract","type":"trait_reference"}]}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"length":64}},"error":"uint128"}}}} as TypedAbiFunction<[priceFeedBytes: TypedAbiArg<Uint8Array, "priceFeedBytes">, executionPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "executionPlan">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}[], bigint>>,
    getPrice: {"name":"get-price","access":"public","args":[{"name":"price-feed-id","type":{"buffer":{"length":32}}},{"name":"pyth-storage-address","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[priceFeedId: TypedAbiArg<Uint8Array, "priceFeedId">, pythStorageAddress: TypedAbiArg<string, "pythStorageAddress">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>,
    readPriceFeed: {"name":"read-price-feed","access":"public","args":[{"name":"price-feed-id","type":{"buffer":{"length":32}}},{"name":"pyth-storage-address","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[priceFeedId: TypedAbiArg<Uint8Array, "priceFeedId">, pythStorageAddress: TypedAbiArg<string, "pythStorageAddress">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>,
    verifyAndUpdatePriceFeeds: {"name":"verify-and-update-price-feeds","access":"public","args":[{"name":"price-feed-bytes","type":{"buffer":{"length":8192}}},{"name":"execution-plan","type":{"tuple":[{"name":"pyth-decoder-contract","type":"trait_reference"},{"name":"pyth-storage-contract","type":"trait_reference"},{"name":"wormhole-core-contract","type":"trait_reference"}]}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"length":64}},"error":"uint128"}}}} as TypedAbiFunction<[priceFeedBytes: TypedAbiArg<Uint8Array, "priceFeedBytes">, executionPlan: TypedAbiArg<{
  "pythDecoderContract": string;
  "pythStorageContract": string;
  "wormholeCoreContract": string;
}, "executionPlan">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}[], bigint>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_BALANCE_INSUFFICIENT: {
  name: 'ERR_BALANCE_INSUFFICIENT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  ERR_BALANCE_INSUFFICIENT: {
    isOk: false,
    value: 3_001n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pyth-oracle-v4',
  },
pythPnauDecoderV3: {
  "functions": {
    buff20ToUint: {"name":"buff-20-to-uint","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":20}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">], bigint>,
    castDecodedPrice: {"name":"cast-decoded-price","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"leaf-bytes","type":{"buffer":{"length":255}}},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"proof","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}},{"name":"publish-time","type":"uint128"},{"name":"update-size","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "leafBytes": Uint8Array;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "proof": Uint8Array[];
  "publishTime": number | bigint;
  "updateSize": number | bigint;
}, "entry">], {
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}>,
    checkMerkleProof: {"name":"check-merkle-proof","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"leaf-bytes","type":{"buffer":{"length":255}}},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"proof","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}},{"name":"publish-time","type":"uint128"},{"name":"update-size","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"merkle-root-hash","type":{"buffer":{"length":20}}},{"name":"result","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"merkle-root-hash","type":{"buffer":{"length":20}}},{"name":"result","type":"bool"}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "leafBytes": Uint8Array;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "proof": Uint8Array[];
  "publishTime": number | bigint;
  "updateSize": number | bigint;
}, "entry">, acc: TypedAbiArg<{
  "merkleRootHash": Uint8Array;
  "result": boolean;
}, "acc">], {
  "merkleRootHash": Uint8Array;
  "result": boolean;
}>,
    checkProof: {"name":"check-proof","access":"private","args":[{"name":"root-hash","type":{"buffer":{"length":20}}},{"name":"leaf","type":{"buffer":{"length":255}}},{"name":"path","type":{"list":{"type":{"buffer":{"length":20}},"length":255}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[rootHash: TypedAbiArg<Uint8Array, "rootHash">, leaf: TypedAbiArg<Uint8Array, "leaf">, path: TypedAbiArg<Uint8Array[], "path">], boolean>,
    hashLeaf: {"name":"hash-leaf","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":255}}}],"outputs":{"type":{"buffer":{"length":20}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">], Uint8Array>,
    hashNodes: {"name":"hash-nodes","access":"private","args":[{"name":"node-1","type":{"buffer":{"length":20}}},{"name":"node-2","type":{"buffer":{"length":20}}}],"outputs":{"type":{"buffer":{"length":20}}}} as TypedAbiFunction<[node1: TypedAbiArg<Uint8Array, "node1">, node2: TypedAbiArg<Uint8Array, "node2">], Uint8Array>,
    hashPath: {"name":"hash-path","access":"private","args":[{"name":"entry","type":{"buffer":{"length":20}}},{"name":"acc","type":{"buffer":{"length":20}}}],"outputs":{"type":{"buffer":{"length":20}}}} as TypedAbiFunction<[entry: TypedAbiArg<Uint8Array, "entry">, acc: TypedAbiArg<Uint8Array, "acc">], Uint8Array>,
    keccak160: {"name":"keccak160","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":20}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">], Uint8Array>,
    parseAndVerifyPricesUpdates: {"name":"parse-and-verify-prices-updates","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"merkle-root-hash","type":{"buffer":{"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"leaf-bytes","type":{"buffer":{"length":255}}},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"proof","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}},{"name":"publish-time","type":"uint128"},{"name":"update-size","type":"uint128"}]},"length":6}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, merkleRootHash: TypedAbiArg<Uint8Array, "merkleRootHash">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "leafBytes": Uint8Array;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "proof": Uint8Array[];
  "publishTime": bigint;
  "updateSize": bigint;
}[], bigint>>,
    parseMerkleRootDataFromVaaPayload: {"name":"parse-merkle-root-data-from-vaa-payload","access":"private","args":[{"name":"payload-vaa-bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":20}},"error":"uint128"}}}} as TypedAbiFunction<[payloadVaaBytes: TypedAbiArg<Uint8Array, "payloadVaaBytes">], Response<Uint8Array, bigint>>,
    parsePnauHeader: {"name":"parse-pnau-header","access":"private","args":[{"name":"pf-bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[pfBytes: TypedAbiArg<Uint8Array, "pfBytes">], Response<bigint, bigint>>,
    parsePriceInfoAndProof: {"name":"parse-price-info-and-proof","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"entries","type":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"leaf-bytes","type":{"buffer":{"length":255}}},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"proof","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}},{"name":"publish-time","type":"uint128"},{"name":"update-size","type":"uint128"}]},"length":6}}},{"name":"offset","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">], Response<{
  "entries": {
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "leafBytes": Uint8Array;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "proof": Uint8Array[];
  "publishTime": bigint;
  "updateSize": bigint;
}[];
  "offset": bigint;
}, bigint>>,
    parseProof: {"name":"parse-proof","access":"private","args":[{"name":"entry","type":{"buffer":{"length":1}}},{"name":"acc","type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"cursor","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"next-update-index","type":"uint128"}]}},{"name":"limit","type":"uint128"},{"name":"result","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}}]}}],"outputs":{"type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"cursor","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"next-update-index","type":"uint128"}]}},{"name":"limit","type":"uint128"},{"name":"result","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<Uint8Array, "entry">, acc: TypedAbiArg<{
  "bytes": Uint8Array;
  "cursor": {
  "index": number | bigint;
  "nextUpdateIndex": number | bigint;
};
  "limit": number | bigint;
  "result": Uint8Array[];
}, "acc">], {
  "bytes": Uint8Array;
  "cursor": {
  "index": bigint;
  "nextUpdateIndex": bigint;
};
  "limit": bigint;
  "result": Uint8Array[];
}>,
    readAndVerifyUpdate: {"name":"read-and-verify-update","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"offset","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"leaf-bytes","type":{"buffer":{"length":255}}},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"proof","type":{"list":{"type":{"buffer":{"length":20}},"length":128}}},{"name":"publish-time","type":"uint128"},{"name":"update-size","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, offset: TypedAbiArg<number | bigint, "offset">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "leafBytes": Uint8Array;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "proof": Uint8Array[];
  "publishTime": bigint;
  "updateSize": bigint;
}, bigint>>,
    readBuff: {"name":"read-buff","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"length","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":8192}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, length: TypedAbiArg<number | bigint, "length">], Response<Uint8Array, bigint>>,
    readBuff20: {"name":"read-buff-20","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":20}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff32: {"name":"read-buff-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":32}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff4: {"name":"read-buff-4","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":4}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readInt32: {"name":"read-int-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"int128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readInt64: {"name":"read-int-64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"int128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint16: {"name":"read-uint-16","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint32: {"name":"read-uint-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint64: {"name":"read-uint-64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint8: {"name":"read-uint-8","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    decodeAndVerifyPriceFeeds: {"name":"decode-and-verify-price-feeds","access":"public","args":[{"name":"pnau-bytes","type":{"buffer":{"length":8192}}},{"name":"wormhole-core-address","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"length":6}},"error":"uint128"}}}} as TypedAbiFunction<[pnauBytes: TypedAbiArg<Uint8Array, "pnauBytes">, wormholeCoreAddress: TypedAbiArg<string, "wormholeCoreAddress">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}[], bigint>>
  },
  "maps": {
    
  },
  "variables": {
    AUWV_MAGIC: {
  name: 'AUWV_MAGIC',
  type: {
    buffer: {
      length: 4
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    ERR_HEADER_TRAILING_SIZE: {
  name: 'ERR_HEADER_TRAILING_SIZE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INCORRECT_AUWV_PAYLOAD: {
  name: 'ERR_INCORRECT_AUWV_PAYLOAD',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_AUWV: {
  name: 'ERR_INVALID_AUWV',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_PNAU_BYTES: {
  name: 'ERR_INVALID_PNAU_BYTES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_MAGIC_BYTES: {
  name: 'ERR_MAGIC_BYTES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_MAXIMUM_UPDATES: {
  name: 'ERR_MAXIMUM_UPDATES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_MERKLE_ROOT_MISMATCH: {
  name: 'ERR_MERKLE_ROOT_MISMATCH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OVERLAY_PRESENT: {
  name: 'ERR_OVERLAY_PRESENT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PROOF_TYPE: {
  name: 'ERR_PROOF_TYPE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED_PRICE_UPDATE: {
  name: 'ERR_UNAUTHORIZED_PRICE_UPDATE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UPDATE_TYPE: {
  name: 'ERR_UPDATE_TYPE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VERSION_MAJ: {
  name: 'ERR_VERSION_MAJ',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VERSION_MIN: {
  name: 'ERR_VERSION_MIN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    MAXIMUM_UPDATES: {
  name: 'MAXIMUM_UPDATES',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MERKLE_PROOF_HASH_SIZE: {
  name: 'MERKLE_PROOF_HASH_SIZE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MESSAGE_TYPE_PRICE_FEED: {
  name: 'MESSAGE_TYPE_PRICE_FEED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PNAU_MAGIC: {
  name: 'PNAU_MAGIC',
  type: {
    buffer: {
      length: 4
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    PYTHNET_MAJOR_VERSION: {
  name: 'PYTHNET_MAJOR_VERSION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PYTHNET_MINOR_VERSION: {
  name: 'PYTHNET_MINOR_VERSION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    UPDATE_TYPE_WORMHOLE_MERKLE: {
  name: 'UPDATE_TYPE_WORMHOLE_MERKLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  AUWV_MAGIC: Uint8Array.from([65,85,87,86]),
  ERR_HEADER_TRAILING_SIZE: {
    isOk: false,
    value: 2_004n
  },
  ERR_INCORRECT_AUWV_PAYLOAD: {
    isOk: false,
    value: 2_009n
  },
  ERR_INVALID_AUWV: {
    isOk: false,
    value: 2_007n
  },
  ERR_INVALID_PNAU_BYTES: {
    isOk: false,
    value: 2_404n
  },
  ERR_MAGIC_BYTES: {
    isOk: false,
    value: 2_001n
  },
  ERR_MAXIMUM_UPDATES: {
    isOk: false,
    value: 2_403n
  },
  ERR_MERKLE_ROOT_MISMATCH: {
    isOk: false,
    value: 2_008n
  },
  ERR_OVERLAY_PRESENT: {
    isOk: false,
    value: 2_402n
  },
  ERR_PROOF_TYPE: {
    isOk: false,
    value: 2_005n
  },
  ERR_UNAUTHORIZED_PRICE_UPDATE: {
    isOk: false,
    value: 2_401n
  },
  ERR_UPDATE_TYPE: {
    isOk: false,
    value: 2_006n
  },
  ERR_VERSION_MAJ: {
    isOk: false,
    value: 2_002n
  },
  ERR_VERSION_MIN: {
    isOk: false,
    value: 2_003n
  },
  MAXIMUM_UPDATES: 6n,
  MERKLE_PROOF_HASH_SIZE: 20n,
  MESSAGE_TYPE_PRICE_FEED: 0n,
  PNAU_MAGIC: Uint8Array.from([80,78,65,85]),
  PYTHNET_MAJOR_VERSION: 1n,
  PYTHNET_MINOR_VERSION: 0n,
  UPDATE_TYPE_WORMHOLE_MERKLE: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pyth-pnau-decoder-v3',
  },
pythStorageV4: {
  "functions": {
    isPriceUpdateMoreRecent: {"name":"is-price-update-more-recent","access":"private","args":[{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[priceIdentifier: TypedAbiArg<Uint8Array, "priceIdentifier">, publishTime: TypedAbiArg<number | bigint, "publishTime">], boolean>,
    onlyOkEntry: {"name":"only-ok-entry","access":"private","args":[{"name":"entry","type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[entry: TypedAbiArg<Response<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": number | bigint;
}, number | bigint>, "entry">], boolean>,
    unwrappedEntry: {"name":"unwrapped-entry","access":"private","args":[{"name":"entry","type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}],"outputs":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]}}} as TypedAbiFunction<[entry: TypedAbiArg<Response<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": number | bigint;
}, number | bigint>, "entry">], {
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}>,
    writeBatchEntry: {"name":"write-batch-entry","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": number | bigint;
}, "entry">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}, bigint>>,
    read: {"name":"read","access":"public","args":[{"name":"price-identifier","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[priceIdentifier: TypedAbiArg<Uint8Array, "priceIdentifier">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>,
    setPriceTestnet: {"name":"set-price-testnet","access":"public","args":[{"name":"data","type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}},"error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": number | bigint;
}, "data">], Response<Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}, bigint>, bigint>>,
    write: {"name":"write","access":"public","args":[{"name":"batch-updates","type":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"length":64}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"price-identifier","type":{"buffer":{"length":32}}},{"name":"publish-time","type":"uint128"}]},"length":64}},"error":"uint128"}}}} as TypedAbiFunction<[batchUpdates: TypedAbiArg<{
  "conf": number | bigint;
  "emaConf": number | bigint;
  "emaPrice": number | bigint;
  "expo": number | bigint;
  "prevPublishTime": number | bigint;
  "price": number | bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": number | bigint;
}[], "batchUpdates">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "priceIdentifier": Uint8Array;
  "publishTime": bigint;
}[], bigint>>,
    getPrice: {"name":"get-price","access":"read_only","args":[{"name":"price-identifier","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[priceIdentifier: TypedAbiArg<Uint8Array, "priceIdentifier">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>,
    readPriceWithStalenessCheck: {"name":"read-price-with-staleness-check","access":"read_only","args":[{"name":"price-identifier","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[priceIdentifier: TypedAbiArg<Uint8Array, "priceIdentifier">], Response<{
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}, bigint>>
  },
  "maps": {
    prices: {"name":"prices","key":{"buffer":{"length":32}},"value":{"tuple":[{"name":"conf","type":"uint128"},{"name":"ema-conf","type":"uint128"},{"name":"ema-price","type":"int128"},{"name":"expo","type":"int128"},{"name":"prev-publish-time","type":"uint128"},{"name":"price","type":"int128"},{"name":"publish-time","type":"uint128"}]}} as TypedAbiMap<Uint8Array, {
  "conf": bigint;
  "emaConf": bigint;
  "emaPrice": bigint;
  "expo": bigint;
  "prevPublishTime": bigint;
  "price": bigint;
  "publishTime": bigint;
}>,
    timestamps: {"name":"timestamps","key":{"buffer":{"length":32}},"value":"uint128"} as TypedAbiMap<Uint8Array, bigint>
  },
  "variables": {
    ERR_NEWER_PRICE_AVAILABLE: {
  name: 'ERR_NEWER_PRICE_AVAILABLE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PRICE_FEED_NOT_FOUND: {
  name: 'ERR_PRICE_FEED_NOT_FOUND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESTRICTED_TO_TESTNET: {
  name: 'ERR_RESTRICTED_TO_TESTNET',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_STALE_PRICE: {
  name: 'ERR_STALE_PRICE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    STACKS_BLOCK_TIME: {
  name: 'STACKS_BLOCK_TIME',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  ERR_NEWER_PRICE_AVAILABLE: {
    isOk: false,
    value: 5_001n
  },
  ERR_PRICE_FEED_NOT_FOUND: {
    isOk: false,
    value: 5_004n
  },
  ERR_RESTRICTED_TO_TESTNET: {
    isOk: false,
    value: 5_003n
  },
  ERR_STALE_PRICE: {
    isOk: false,
    value: 5_002n
  },
  STACKS_BLOCK_TIME: 5n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pyth-storage-v4',
  },
pythTraitsV2: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pyth-traits-v2',
  },
sbtc: {
  "functions": {
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getBalanceAvailable: {"name":"get-balance-available","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errNotTokenOwner: {
  name: 'err-not-token-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  errNotTokenOwner: {
    isOk: false,
    value: 4n
  },
  errUnauthorised: {
    isOk: false,
    value: 3_000n
  },
  tokenDecimals: 8n,
  tokenName: 'sbtc',
  tokenSymbol: 'sbtc',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"sBTC-locked"},{"name":"sbtc"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'sbtc',
  },
ststx: {
  "functions": {
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errNotTokenOwner: {
  name: 'err-not-token-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  errNotTokenOwner: {
    isOk: false,
    value: 4n
  },
  errUnauthorised: {
    isOk: false,
    value: 3_000n
  },
  tokenDecimals: 6n,
  tokenName: 'stSTX',
  tokenSymbol: 'stSTX',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"ststx"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'ststx',
  },
ststxbtc: {
  "functions": {
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errNotTokenOwner: {
  name: 'err-not-token-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  errNotTokenOwner: {
    isOk: false,
    value: 4n
  },
  errUnauthorised: {
    isOk: false,
    value: 3_000n
  },
  tokenDecimals: 6n,
  tokenName: 'ststxbtc',
  tokenSymbol: 'ststxbtc',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"ststxbtc"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'ststxbtc',
  },
traitDiaOracle: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'trait-dia-oracle',
  },
usdc: {
  "functions": {
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errNotTokenOwner: {
  name: 'err-not-token-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  errNotTokenOwner: {
    isOk: false,
    value: 4n
  },
  errUnauthorised: {
    isOk: false,
    value: 3_000n
  },
  tokenDecimals: 6n,
  tokenName: 'usdc',
  tokenSymbol: 'usdc',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"usdc"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'usdc',
  },
usdh: {
  "functions": {
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errNotTokenOwner: {
  name: 'err-not-token-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  errNotTokenOwner: {
    isOk: false,
    value: 4n
  },
  errUnauthorised: {
    isOk: false,
    value: 3_000n
  },
  tokenDecimals: 8n,
  tokenName: 'USDH',
  tokenSymbol: 'USDH',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"usdh"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'usdh',
  },
vaultSbtc: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":9}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 9
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 5
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 8n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 801_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 801_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 801_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 801_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 801_023n
  },
  eRRINIT: {
    isOk: false,
    value: 801_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 801_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 801_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 801_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 801_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 801_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 801_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 801_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 801_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 801_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 801_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 801_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 801_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 801_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 801_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 801_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 801_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 801_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest sBTC',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zsBTC',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_313_915n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-sbtc',
  },
vaultStstx: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":6}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 6
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 6n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 802_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 802_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 802_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 802_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 802_024n
  },
  eRRINIT: {
    isOk: false,
    value: 802_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 802_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 802_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 802_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 802_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 802_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 802_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 802_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 802_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 802_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 802_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 802_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 802_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 802_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 802_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 802_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 802_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 802_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest stSTX',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zstSTX',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_313_935n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-ststx',
  },
vaultStstxbtc: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":13}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":9}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 13
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 9
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 6n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 810_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 810_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 810_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 810_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 810_024n
  },
  eRRINIT: {
    isOk: false,
    value: 810_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 810_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 810_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 810_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 810_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 810_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 810_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 810_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 810_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 810_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 810_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 810_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 810_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 810_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 810_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 810_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 810_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 810_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest stSTXbtc',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zstSTXbtc',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_313_855n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-ststxbtc',
  },
vaultStx: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amt","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amt: TypedAbiArg<number | bigint, "amt">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":4}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 4
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 6n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 800_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 800_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 800_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 800_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 800_024n
  },
  eRRINIT: {
    isOk: false,
    value: 800_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 800_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 800_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 800_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 800_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 800_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 800_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 800_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 800_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 800_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 800_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 800_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 800_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 800_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 800_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 800_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 800_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 800_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest STX',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zSTX',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_313_905n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-stx',
  },
vaultTraits: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-traits',
  },
vaultUsdc: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":9}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 9
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 5
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 6n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 803_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 803_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 803_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 803_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 803_024n
  },
  eRRINIT: {
    isOk: false,
    value: 803_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 803_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 803_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 803_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 803_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 803_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 803_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 803_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 803_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 803_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 803_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 803_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 803_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 803_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 803_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 803_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 803_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 803_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest USDC',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zUSDC',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_313_885n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-usdc',
  },
vaultUsdh: {
  "functions": {
    calcCumulativeDebt: {"name":"calc-cumulative-debt","access":"private","args":[{"name":"principal-amount","type":"uint128"},{"name":"idx","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[principalAmount: TypedAbiArg<number | bigint, "principalAmount">, idx: TypedAbiArg<number | bigint, "idx">], bigint>,
    calcIndexNext: {"name":"calc-index-next","access":"private","args":[{"name":"index-curr","type":"uint128"},{"name":"multiplier","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[indexCurr: TypedAbiArg<number | bigint, "indexCurr">, multiplier: TypedAbiArg<number | bigint, "multiplier">], bigint>,
    calcLiquidityRate: {"name":"calc-liquidity-rate","access":"private","args":[{"name":"var-borrow-rate","type":"uint128"},{"name":"util-pct","type":"uint128"},{"name":"reserve-factor-bps","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[varBorrowRate: TypedAbiArg<number | bigint, "varBorrowRate">, utilPct: TypedAbiArg<number | bigint, "utilPct">, reserveFactorBps: TypedAbiArg<number | bigint, "reserveFactorBps">], bigint>,
    calcMultiplierDelta: {"name":"calc-multiplier-delta","access":"private","args":[{"name":"rate","type":"uint128"},{"name":"time-delta","type":"uint128"},{"name":"round-up","type":"bool"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[rate: TypedAbiArg<number | bigint, "rate">, timeDelta: TypedAbiArg<number | bigint, "timeDelta">, roundUp: TypedAbiArg<boolean, "roundUp">], bigint>,
    calcPrincipalRatioReduction: {"name":"calc-principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"scaled-principal","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, scaledPrincipal: TypedAbiArg<number | bigint, "scaledPrincipal">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    calcTreasuryLpPreview: {"name":"calc-treasury-lp-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    calcUtilization: {"name":"calc-utilization","access":"private","args":[{"name":"available-liquidity","type":"uint128"},{"name":"debt-amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[availableLiquidity: TypedAbiArg<number | bigint, "availableLiquidity">, debtAmount: TypedAbiArg<number | bigint, "debtAmount">], bigint>,
    checkCallerAuth: {"name":"check-caller-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    combineElements: {"name":"combine-elements","access":"private","args":[{"name":"iter","type":"uint128"},{"name":"util","type":"uint128"},{"name":"rate","type":"uint128"}],"outputs":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}}} as TypedAbiFunction<[iter: TypedAbiArg<number | bigint, "iter">, util: TypedAbiArg<number | bigint, "util">, rate: TypedAbiArg<number | bigint, "rate">], {
  "rate": bigint;
  "util": bigint;
}>,
    convertToAssetsPreview: {"name":"convert-to-assets-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    convertToSharesPreview: {"name":"convert-to-shares-preview","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    debtPreview: {"name":"debt-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalanceInternal: {"name":"get-balance-internal","access":"private","args":[{"name":"acc","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[acc: TypedAbiArg<string, "acc">], bigint>,
    interestRate: {"name":"interest-rate","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    interpolateRate: {"name":"interpolate-rate","access":"private","args":[{"name":"util","type":"uint128"},{"name":"points-util","type":{"list":{"type":"uint128","length":8}}},{"name":"points-rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint, "util">, pointsUtil: TypedAbiArg<number | bigint[], "pointsUtil">, pointsRate: TypedAbiArg<number | bigint[], "pointsRate">], bigint>,
    iterPackU16: {"name":"iter-pack-u16","access":"private","args":[{"name":"i","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"max","type":"uint128"},{"name":"valid","type":"bool"},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[i: TypedAbiArg<number | bigint, "i">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "max": number | bigint;
  "valid": boolean;
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "max": bigint;
  "valid": boolean;
  "word": bigint;
}>,
    iterUnpackU16: {"name":"iter-unpack-u16","access":"private","args":[{"name":"pos","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"word","type":"uint128"}]}}} as TypedAbiFunction<[pos: TypedAbiArg<number | bigint, "pos">, acc: TypedAbiArg<{
  "fields": number | bigint[];
  "word": number | bigint;
}, "acc">], {
  "fields": bigint[];
  "word": bigint;
}>,
    linearInterpolate: {"name":"linear-interpolate","access":"private","args":[{"name":"x","type":"uint128"},{"name":"x1","type":"uint128"},{"name":"y1","type":"uint128"},{"name":"x2","type":"uint128"},{"name":"y2","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, x1: TypedAbiArg<number | bigint, "x1">, y1: TypedAbiArg<number | bigint, "y1">, x2: TypedAbiArg<number | bigint, "x2">, y2: TypedAbiArg<number | bigint, "y2">], bigint>,
    max: {"name":"max","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    min: {"name":"min","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">], bigint>,
    mulBpsDown: {"name":"mul-bps-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">], bigint>,
    mulDivDown: {"name":"mul-div-down","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"x","type":"uint128"},{"name":"y","type":"uint128"},{"name":"z","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[x: TypedAbiArg<number | bigint, "x">, y: TypedAbiArg<number | bigint, "y">, z: TypedAbiArg<number | bigint, "z">], bigint>,
    nextIndex: {"name":"next-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    nextLiquidityIndex: {"name":"next-liquidity-index","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    packU16: {"name":"pack-u16","access":"private","args":[{"name":"fields","type":{"list":{"type":"uint128","length":8}}},{"name":"upper","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[fields: TypedAbiArg<number | bigint[], "fields">, upper: TypedAbiArg<number | bigint | null, "upper">], Response<bigint, bigint>>,
    principalRatioReduction: {"name":"principal-ratio-reduction","access":"private","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], bigint>,
    receiveUnderlying: {"name":"receive-underlying","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    resolveAndInterpolate: {"name":"resolve-and-interpolate","access":"private","args":[{"name":"target","type":"uint128"},{"name":"utils","type":{"list":{"type":"uint128","length":8}}},{"name":"rates","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[target: TypedAbiArg<number | bigint, "target">, utils: TypedAbiArg<number | bigint[], "utils">, rates: TypedAbiArg<number | bigint[], "rates">], bigint>,
    resolveInterpolationPoints: {"name":"resolve-interpolation-points","access":"private","args":[{"name":"point","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"found","type":"bool"},{"name":"prev","type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]}},{"name":"result","type":"uint128"},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[point: TypedAbiArg<{
  "rate": number | bigint;
  "util": number | bigint;
}, "point">, acc: TypedAbiArg<{
  "found": boolean;
  "prev": {
  "rate": number | bigint;
  "util": number | bigint;
};
  "result": number | bigint;
  "target": number | bigint;
}, "acc">], {
  "found": boolean;
  "prev": {
  "rate": bigint;
  "util": bigint;
};
  "result": bigint;
  "target": bigint;
}>,
    sendUnderlying: {"name":"send-underlying","access":"private","args":[{"name":"amt","type":"uint128"},{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amt: TypedAbiArg<number | bigint, "amt">, account: TypedAbiArg<string, "account">], Response<boolean, bigint>>,
    setPermissionSingle: {"name":"set-permission-single","access":"private","args":[{"name":"update","type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[update: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, "update">], boolean>,
    totalAssets: {"name":"total-assets","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalAssetsPreview: {"name":"total-assets-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalDebt: {"name":"total-debt","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupply: {"name":"total-supply","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    totalSupplyPreview: {"name":"total-supply-preview","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    ubalance: {"name":"ubalance","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    unpackU16: {"name":"unpack-u16","access":"private","args":[{"name":"word","type":"uint128"}],"outputs":{"type":{"list":{"type":"uint128","length":8}}}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">], bigint[]>,
    unpackU16At: {"name":"unpack-u16-at","access":"private","args":[{"name":"word","type":"uint128"},{"name":"pos","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<number | bigint, "word">, pos: TypedAbiArg<number | bigint, "pos">], bigint>,
    utilization: {"name":"utilization","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    zip: {"name":"zip","access":"private","args":[{"name":"util","type":{"list":{"type":"uint128","length":8}}},{"name":"rate","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"rate","type":"uint128"},{"name":"util","type":"uint128"}]},"length":8}}}} as TypedAbiFunction<[util: TypedAbiArg<number | bigint[], "util">, rate: TypedAbiArg<number | bigint[], "rate">], {
  "rate": bigint;
  "util": bigint;
}[]>,
    accrue: {"name":"accrue","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "index": bigint;
  "lindex": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    flashloan: {"name":"flashloan","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"funds-receiver","type":{"optional":"principal"}},{"name":"fc","type":"trait_reference"},{"name":"data","type":{"optional":{"buffer":{"length":4096}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, fundsReceiver: TypedAbiArg<string | null, "fundsReceiver">, fc: TypedAbiArg<string, "fc">, data: TypedAbiArg<Uint8Array | null, "data">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-out","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minOut: TypedAbiArg<number | bigint, "minOut">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setCapDebt: {"name":"set-cap-debt","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setCapSupply: {"name":"set-cap-supply","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setDefaultFlashloanPermissions: {"name":"set-default-flashloan-permissions","access":"public","args":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFeeFlash: {"name":"set-fee-flash","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFeeReserve: {"name":"set-fee-reserve","access":"public","args":[{"name":"val","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">], Response<boolean, bigint>>,
    setFlashloanPermissions: {"name":"set-flashloan-permissions","access":"public","args":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, canFlashloan: TypedAbiArg<boolean, "canFlashloan">, feeExempt: TypedAbiArg<boolean, "feeExempt">], Response<boolean, bigint>>,
    setFlashloanPermissionsMany: {"name":"set-flashloan-permissions-many","access":"public","args":[{"name":"updates","type":{"list":{"type":{"tuple":[{"name":"account","type":"principal"},{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"length":20}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"bool","length":20}},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<{
  "account": string;
  "canFlashloan": boolean;
  "feeExempt": boolean;
}[], "updates">], Response<boolean[], bigint>>,
    setPauseStates: {"name":"set-pause-states","access":"public","args":[{"name":"states","type":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[states: TypedAbiArg<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, "states">], Response<boolean, bigint>>,
    setPointsRate: {"name":"set-points-rate","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setPointsUtil: {"name":"set-points-util","access":"public","args":[{"name":"points","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[points: TypedAbiArg<number | bigint[], "points">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    socializeDebt: {"name":"socialize-debt","access":"public","args":[{"name":"scaled-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[scaledAmount: TypedAbiArg<number | bigint, "scaledAmount">], Response<boolean, bigint>>,
    systemBorrow: {"name":"system-borrow","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"receiver","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string, "receiver">], Response<boolean, bigint>>,
    systemRepay: {"name":"system-repay","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getAssets: {"name":"get-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getAvailableAssets: {"name":"get-available-assets","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getCapDebt: {"name":"get-cap-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getCapSupply: {"name":"get-cap-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDebt: {"name":"get-debt","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getDefaultFlashloanPermissions: {"name":"get-default-flashloan-permissions","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}, null>>,
    getFeeFlash: {"name":"get-fee-flash","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFeeReserve: {"name":"get-fee-reserve","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getFlashloanPermissions: {"name":"get-flashloan-permissions","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    getIndex: {"name":"get-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getInterestRate: {"name":"get-interest-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLastUpdate: {"name":"get-last-update","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidityIndex: {"name":"get-liquidity-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":9}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getNextIndex: {"name":"get-next-index","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseStates: {"name":"get-pause-states","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"accrue","type":"bool"},{"name":"borrow","type":"bool"},{"name":"deposit","type":"bool"},{"name":"flashloan","type":"bool"},{"name":"redeem","type":"bool"},{"name":"repay","type":"bool"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}, null>>,
    getPointsRate: {"name":"get-points-rate","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPointsUtil: {"name":"get-points-util","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":8}},"error":"none"}}}} as TypedAbiFunction<[], Response<bigint[], null>>,
    getPrincipalRatioReduction: {"name":"get-principal-ratio-reduction","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, null>>,
    getPrincipalScaled: {"name":"get-principal-scaled","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalAssets: {"name":"get-total-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getUnderlying: {"name":"get-underlying","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getUtilization: {"name":"get-utilization","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isAuthorizedContract: {"name":"is-authorized-contract","access":"read_only","args":[{"name":"contract","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">], boolean>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    flashloanPermissions: {"name":"flashloan-permissions","key":"principal","value":{"tuple":[{"name":"can-flashloan","type":"bool"},{"name":"fee-exempt","type":"bool"}]}} as TypedAbiMap<string, {
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>
  },
  "variables": {
    bITU16: {
  name: 'BIT-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_INITIALIZED: {
  name: 'ERR-ALREADY-INITIALIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AMOUNT_ZERO: {
  name: 'ERR-AMOUNT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_AUTH: {
  name: 'ERR-AUTH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_CAP_EXCEEDED: {
  name: 'ERR-DEBT-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FLASHLOAN_UNAUTHORIZED: {
  name: 'ERR-FLASHLOAN-UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INIT: {
  name: 'ERR-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_ASSETS: {
  name: 'ERR-INSUFFICIENT-ASSETS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_BALANCE: {
  name: 'ERR-INSUFFICIENT-BALANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FLASHLOAN_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_VAULT_LIQUIDITY: {
  name: 'ERR-INSUFFICIENT-VAULT-LIQUIDITY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ADDRESS: {
  name: 'ERR-INVALID-ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    eRRINVALIDU16: {
  name: 'ERR-INVALID-U16',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_POSTCONDITIONS: {
  name: 'ERR-LENDING-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LENDING_PRECONDITIONS: {
  name: 'ERR-LENDING-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_RESERVES: {
  name: 'ERR-NO-RESERVES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OUTPUT_ZERO: {
  name: 'ERR-OUTPUT-ZERO',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR-PAUSED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_REENTRANCY: {
  name: 'ERR-REENTRANCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_RESERVE_VALIDATION: {
  name: 'ERR-RESERVE-VALIDATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SLIPPAGE: {
  name: 'ERR-SLIPPAGE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SUPPLY_CAP_EXCEEDED: {
  name: 'ERR-SUPPLY-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_POSTCONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-POSTCONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOKENIZED_VAULT_PRECONDITIONS: {
  name: 'ERR-TOKENIZED-VAULT-PRECONDITIONS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    INDEX_PRECISION: {
  name: 'INDEX-PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    iTERUINT8: {
  name: 'ITER-UINT-8',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    mASKU16: {
  name: 'MASK-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU16: {
  name: 'MAX-U16',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINIMUM_LIQUIDITY: {
  name: 'MINIMUM-LIQUIDITY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 9
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    PRECISION: {
  name: 'PRECISION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR_BPS: {
  name: 'SECONDS-PER-YEAR-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 5
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    UNDERLYING: {
  name: 'UNDERLYING',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    assets: {
  name: 'assets',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capDebt: {
  name: 'cap-debt',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    capSupply: {
  name: 'cap-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    defaultFlashloanPermissions: {
  name: 'default-flashloan-permissions',
  type: {
    tuple: [
      {
        name: 'can-flashloan',
        type: 'bool'
      },
      {
        name: 'fee-exempt',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "canFlashloan": boolean;
  "feeExempt": boolean;
}>,
    feeFlash: {
  name: 'fee-flash',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeReserve: {
  name: 'fee-reserve',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    inFlashloan: {
  name: 'in-flashloan',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    index: {
  name: 'index',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastUpdate: {
  name: 'last-update',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lindex: {
  name: 'lindex',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseStates: {
  name: 'pause-states',
  type: {
    tuple: [
      {
        name: 'accrue',
        type: 'bool'
      },
      {
        name: 'borrow',
        type: 'bool'
      },
      {
        name: 'deposit',
        type: 'bool'
      },
      {
        name: 'flashloan',
        type: 'bool'
      },
      {
        name: 'redeem',
        type: 'bool'
      },
      {
        name: 'repay',
        type: 'bool'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "accrue": boolean;
  "borrow": boolean;
  "deposit": boolean;
  "flashloan": boolean;
  "redeem": boolean;
  "repay": boolean;
}>,
    pointsIr: {
  name: 'points-ir',
  type: {
    tuple: [
      {
        name: 'rate',
        type: 'uint128'
      },
      {
        name: 'util',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "rate": bigint;
  "util": bigint;
}>,
    principalScaled: {
  name: 'principal-scaled',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    totalBorrowed: {
  name: 'total-borrowed',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bITU16: 16n,
  BPS: 10_000n,
  DECIMALS: 8n,
  eRRALREADYINITIALIZED: {
    isOk: false,
    value: 804_003n
  },
  eRRAMOUNTZERO: {
    isOk: false,
    value: 804_009n
  },
  eRRAUTH: {
    isOk: false,
    value: 804_001n
  },
  eRRDEBTCAPEXCEEDED: {
    isOk: false,
    value: 804_019n
  },
  eRRFLASHLOANUNAUTHORIZED: {
    isOk: false,
    value: 804_024n
  },
  eRRINIT: {
    isOk: false,
    value: 804_002n
  },
  eRRINSUFFICIENTASSETS: {
    isOk: false,
    value: 804_020n
  },
  eRRINSUFFICIENTBALANCE: {
    isOk: false,
    value: 804_013n
  },
  eRRINSUFFICIENTFLASHLOANLIQUIDITY: {
    isOk: false,
    value: 804_022n
  },
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 804_014n
  },
  eRRINSUFFICIENTVAULTLIQUIDITY: {
    isOk: false,
    value: 804_018n
  },
  eRRINVALIDADDRESS: {
    isOk: false,
    value: 804_021n
  },
  eRRINVALIDU16: {
    isOk: false,
    value: 700_001n
  },
  eRRLENDINGPOSTCONDITIONS: {
    isOk: false,
    value: 804_016n
  },
  eRRLENDINGPRECONDITIONS: {
    isOk: false,
    value: 804_015n
  },
  eRRNORESERVES: {
    isOk: false,
    value: 804_017n
  },
  eRROUTPUTZERO: {
    isOk: false,
    value: 804_012n
  },
  eRRPAUSED: {
    isOk: false,
    value: 804_006n
  },
  eRRREENTRANCY: {
    isOk: false,
    value: 804_004n
  },
  eRRRESERVEVALIDATION: {
    isOk: false,
    value: 804_005n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 804_010n
  },
  eRRSUPPLYCAPEXCEEDED: {
    isOk: false,
    value: 804_011n
  },
  eRRTOKENIZEDVAULTPOSTCONDITIONS: {
    isOk: false,
    value: 804_008n
  },
  eRRTOKENIZEDVAULTPRECONDITIONS: {
    isOk: false,
    value: 804_007n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  iTERUINT8: [
    0n,
    1n,
    2n,
    3n,
    4n,
    5n,
    6n,
    7n
  ],
  mASKU16: 65_536n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mAXU16: 65_535n,
  mINIMUMLIQUIDITY: 1_000n,
  NAME: 'Zest USDH',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zUSDH',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh',
  assets: 0n,
  capDebt: 0n,
  capSupply: 0n,
  defaultFlashloanPermissions: {
    canFlashloan: false,
    feeExempt: false
  },
  feeFlash: 0n,
  feeReserve: 0n,
  inFlashloan: false,
  index: 1_000_000_000_000n,
  initialized: false,
  lastUpdate: 1_768_314_075n,
  lindex: 1_000_000_000_000n,
  pauseStates: {
    accrue: false,
    borrow: false,
    deposit: false,
    flashloan: false,
    redeem: false,
    repay: false
  },
  pointsIr: {
    rate: 0n,
    util: 0n
  },
  principalScaled: 0n,
  tokenUri: null,
  totalBorrowed: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'vault-usdh',
  },
wormholeCoreV4: {
  "functions": {
    batchCheckActivePublicKeys: {"name":"batch-check-active-public-keys","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"recovered-compressed-public-key","type":{"buffer":{"length":33}}}]}},{"name":"acc","type":{"tuple":[{"name":"active-guardians","type":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}},{"name":"result","type":{"list":{"type":{"buffer":{"length":33}},"length":19}}}]}}],"outputs":{"type":{"tuple":[{"name":"active-guardians","type":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}},{"name":"result","type":{"list":{"type":{"buffer":{"length":33}},"length":19}}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "guardianId": number | bigint;
  "recoveredCompressedPublicKey": Uint8Array;
}, "entry">, acc: TypedAbiArg<{
  "activeGuardians": {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[];
  "result": Uint8Array[];
}, "acc">], {
  "activeGuardians": {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[];
  "result": Uint8Array[];
}>,
    checkAndConsolidatePublicKeys: {"name":"check-and-consolidate-public-keys","access":"private","args":[{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}},{"name":"acc","type":{"tuple":[{"name":"cursor","type":"uint128"},{"name":"eth-addresses","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}}]}}],"outputs":{"type":{"tuple":[{"name":"cursor","type":"uint128"},{"name":"eth-addresses","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}},{"name":"result","type":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}}]}}} as TypedAbiFunction<[uncompressedPublicKey: TypedAbiArg<Uint8Array, "uncompressedPublicKey">, acc: TypedAbiArg<{
  "cursor": number | bigint;
  "ethAddresses": Uint8Array[];
  "result": {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[];
}, "acc">], {
  "cursor": bigint;
  "ethAddresses": Uint8Array[];
  "result": {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[];
}>,
    compressPublicKey: {"name":"compress-public-key","access":"private","args":[{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}],"outputs":{"type":{"buffer":{"length":33}}}} as TypedAbiFunction<[uncompressedPublicKey: TypedAbiArg<Uint8Array, "uncompressedPublicKey">], Uint8Array>,
    emptyKey: {"name":"empty-key","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"recovered-compressed-public-key","type":{"buffer":{"length":33}}}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "guardianId": number | bigint;
  "recoveredCompressedPublicKey": Uint8Array;
}, "entry">], boolean>,
    getQuorum: {"name":"get-quorum","access":"private","args":[{"name":"guardian-set-size","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[guardianSetSize: TypedAbiArg<number | bigint, "guardianSetSize">], bigint>,
    isEthAddressMatchingPublicKey: {"name":"is-eth-address-matching-public-key","access":"private","args":[{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}},{"name":"eth-address","type":{"buffer":{"length":20}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[uncompressedPublicKey: TypedAbiArg<Uint8Array, "uncompressedPublicKey">, ethAddress: TypedAbiArg<Uint8Array, "ethAddress">], boolean>,
    isGuardianCue: {"name":"is-guardian-cue","access":"private","args":[{"name":"byte","type":{"buffer":{"length":1}}},{"name":"acc","type":{"tuple":[{"name":"cursor","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":19}}}]}}],"outputs":{"type":{"tuple":[{"name":"cursor","type":"uint128"},{"name":"result","type":{"list":{"type":"uint128","length":19}}}]}}} as TypedAbiFunction<[byte: TypedAbiArg<Uint8Array, "byte">, acc: TypedAbiArg<{
  "cursor": number | bigint;
  "result": number | bigint[];
}, "acc">], {
  "cursor": bigint;
  "result": bigint[];
}>,
    isValidGuardianEntry: {"name":"is-valid-guardian-entry","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]}},{"name":"prev-res","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}, "entry">, prevRes: TypedAbiArg<Response<boolean, number | bigint>, "prevRes">], Response<boolean, bigint>>,
    isValidGuardianSet: {"name":"is-valid-guardian-set","access":"private","args":[{"name":"set-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[setId: TypedAbiArg<number | bigint, "setId">], Response<boolean, bigint>>,
    parseAndVerifyGuardiansSet: {"name":"parse-and-verify-guardians-set","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"action","type":"uint128"},{"name":"chain","type":"uint128"},{"name":"guardians-eth-addresses","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}},{"name":"module","type":{"buffer":{"length":32}}},{"name":"new-index","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">], Response<{
  "action": bigint;
  "chain": bigint;
  "guardiansEthAddresses": Uint8Array[];
  "module": Uint8Array;
  "newIndex": bigint;
}, bigint>>,
    parseGuardian: {"name":"parse-guardian","access":"private","args":[{"name":"cue-position","type":"uint128"},{"name":"acc","type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"result","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}}]}}],"outputs":{"type":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"result","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}}]}}} as TypedAbiFunction<[cuePosition: TypedAbiArg<number | bigint, "cuePosition">, acc: TypedAbiArg<{
  "bytes": Uint8Array;
  "result": Uint8Array[];
}, "acc">], {
  "bytes": Uint8Array;
  "result": Uint8Array[];
}>,
    readBuff: {"name":"read-buff","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"length","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":8192}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, length: TypedAbiArg<number | bigint, "length">], Response<Uint8Array, bigint>>,
    readBuff20: {"name":"read-buff-20","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":20}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readBuff32: {"name":"read-buff-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":32}},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<Uint8Array, bigint>>,
    readOneSignature: {"name":"read-one-signature","access":"private","args":[{"name":"input","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"signature","type":{"buffer":{"length":65}}}]}}} as TypedAbiFunction<[input: TypedAbiArg<Uint8Array, "input">], {
  "guardianId": bigint;
  "signature": Uint8Array;
}>,
    readUint16: {"name":"read-uint-16","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint32: {"name":"read-uint-32","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint64: {"name":"read-uint-64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    readUint8: {"name":"read-uint-8","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">], Response<bigint, bigint>>,
    recoverPublicKey: {"name":"recover-public-key","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"signature","type":{"buffer":{"length":65}}}]}},{"name":"message-hash","type":{"buffer":{"length":32}}}],"outputs":{"type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"recovered-compressed-public-key","type":{"buffer":{"length":33}}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "guardianId": number | bigint;
  "signature": Uint8Array;
}, "entry">, messageHash: TypedAbiArg<Uint8Array, "messageHash">], {
  "guardianId": bigint;
  "recoveredCompressedPublicKey": Uint8Array;
}>,
    setNewGuardianSetId: {"name":"set-new-guardian-set-id","access":"private","args":[{"name":"new-set-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newSetId: TypedAbiArg<number | bigint, "newSetId">], Response<boolean, bigint>>,
    updateGuardiansSet: {"name":"update-guardians-set","access":"public","args":[{"name":"guardian-set-vaa","type":{"buffer":{"length":2048}}},{"name":"uncompressed-public-keys","type":{"list":{"type":{"buffer":{"length":64}},"length":19}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"result","type":{"tuple":[{"name":"guardians-eth-addresses","type":{"list":{"type":{"buffer":{"length":20}},"length":19}}},{"name":"guardians-public-keys","type":{"list":{"type":{"buffer":{"length":64}},"length":19}}}]}},{"name":"vaa","type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"},{"name":"guardian-set-id","type":"uint128"},{"name":"payload","type":{"buffer":{"length":8192}}},{"name":"sequence","type":"uint128"},{"name":"version","type":"uint128"}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[guardianSetVaa: TypedAbiArg<Uint8Array, "guardianSetVaa">, uncompressedPublicKeys: TypedAbiArg<Uint8Array[], "uncompressedPublicKeys">], Response<{
  "result": {
  "guardiansEthAddresses": Uint8Array[];
  "guardiansPublicKeys": Uint8Array[];
};
  "vaa": {
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
  "guardianSetId": bigint;
  "payload": Uint8Array;
  "sequence": bigint;
  "version": bigint;
};
}, bigint>>,
    getActiveGuardianSet: {"name":"get-active-guardian-set","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"guardians","type":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}},{"name":"set-id","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "guardians": {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[];
  "setId": bigint;
}, null>>,
    parseAndVerifyVaa: {"name":"parse-and-verify-vaa","access":"read_only","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"},{"name":"guardian-set-id","type":"uint128"},{"name":"payload","type":{"buffer":{"length":8192}}},{"name":"sequence","type":"uint128"},{"name":"version","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">], Response<{
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
  "guardianSetId": bigint;
  "payload": Uint8Array;
  "sequence": bigint;
  "version": bigint;
}, bigint>>,
    parseVaa: {"name":"parse-vaa","access":"read_only","args":[{"name":"vaa-bytes","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"recovered-public-keys","type":{"list":{"type":{"tuple":[{"name":"guardian-id","type":"uint128"},{"name":"recovered-compressed-public-key","type":{"buffer":{"length":33}}}]},"length":19}}},{"name":"vaa","type":{"tuple":[{"name":"emitter-address","type":{"buffer":{"length":32}}},{"name":"emitter-chain","type":"uint128"},{"name":"guardian-set-id","type":"uint128"},{"name":"payload","type":{"buffer":{"length":8192}}},{"name":"sequence","type":"uint128"},{"name":"version","type":"uint128"}]}}]},"error":"uint128"}}}} as TypedAbiFunction<[vaaBytes: TypedAbiArg<Uint8Array, "vaaBytes">], Response<{
  "recoveredPublicKeys": {
  "guardianId": bigint;
  "recoveredCompressedPublicKey": Uint8Array;
}[];
  "vaa": {
  "emitterAddress": Uint8Array;
  "emitterChain": bigint;
  "guardianSetId": bigint;
  "payload": Uint8Array;
  "sequence": bigint;
  "version": bigint;
};
}, bigint>>
  },
  "maps": {
    guardianSets: {"name":"guardian-sets","key":"uint128","value":{"list":{"type":{"tuple":[{"name":"compressed-public-key","type":{"buffer":{"length":33}}},{"name":"uncompressed-public-key","type":{"buffer":{"length":64}}}]},"length":19}}} as TypedAbiMap<number | bigint, {
  "compressedPublicKey": Uint8Array;
  "uncompressedPublicKey": Uint8Array;
}[]>
  },
  "variables": {
    ACTION_GUARDIAN_SET_UPDATE: {
  name: 'ACTION_GUARDIAN_SET_UPDATE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CORE_CHAIN_ID: {
  name: 'CORE_CHAIN_ID',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    CORE_STRING_MODULE: {
  name: 'CORE_STRING_MODULE',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    ERR_DUPLICATED_GUARDIAN_ADDRESSES: {
  name: 'ERR_DUPLICATED_GUARDIAN_ADDRESSES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_EMPTY_GUARDIAN_SET: {
  name: 'ERR_EMPTY_GUARDIAN_SET',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_ACTION: {
  name: 'ERR_GSU_CHECK_ACTION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_CHAIN: {
  name: 'ERR_GSU_CHECK_CHAIN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_EMITTER: {
  name: 'ERR_GSU_CHECK_EMITTER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_INDEX: {
  name: 'ERR_GSU_CHECK_INDEX',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_MODULE: {
  name: 'ERR_GSU_CHECK_MODULE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_CHECK_OVERLAY: {
  name: 'ERR_GSU_CHECK_OVERLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_ACTION: {
  name: 'ERR_GSU_PARSING_ACTION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_CHAIN: {
  name: 'ERR_GSU_PARSING_CHAIN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_GUARDIANS_BYTES: {
  name: 'ERR_GSU_PARSING_GUARDIANS_BYTES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_GUARDIAN_LEN: {
  name: 'ERR_GSU_PARSING_GUARDIAN_LEN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_INDEX: {
  name: 'ERR_GSU_PARSING_INDEX',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_PARSING_MODULE: {
  name: 'ERR_GSU_PARSING_MODULE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS: {
  name: 'ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_DEPLOYER: {
  name: 'ERR_NOT_DEPLOYER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_STACKS_TIMESTAMP: {
  name: 'ERR_STACKS_TIMESTAMP',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY: {
  name: 'ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_CHECKS_THRESHOLD_SIGNATURE: {
  name: 'ERR_VAA_CHECKS_THRESHOLD_SIGNATURE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_CHECKS_VERSION_UNSUPPORTED: {
  name: 'ERR_VAA_CHECKS_VERSION_UNSUPPORTED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_HASHING_BODY: {
  name: 'ERR_VAA_HASHING_BODY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_CONSISTENCY_LEVEL: {
  name: 'ERR_VAA_PARSING_CONSISTENCY_LEVEL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_EMITTER_ADDRESS: {
  name: 'ERR_VAA_PARSING_EMITTER_ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_EMITTER_CHAIN: {
  name: 'ERR_VAA_PARSING_EMITTER_CHAIN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_GUARDIAN_SET: {
  name: 'ERR_VAA_PARSING_GUARDIAN_SET',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_NONCE: {
  name: 'ERR_VAA_PARSING_NONCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_PAYLOAD: {
  name: 'ERR_VAA_PARSING_PAYLOAD',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_SEQUENCE: {
  name: 'ERR_VAA_PARSING_SEQUENCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_SIGNATURES: {
  name: 'ERR_VAA_PARSING_SIGNATURES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_SIGNATURES_LEN: {
  name: 'ERR_VAA_PARSING_SIGNATURES_LEN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_TIMESTAMP: {
  name: 'ERR_VAA_PARSING_TIMESTAMP',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VAA_PARSING_VERSION: {
  name: 'ERR_VAA_PARSING_VERSION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    EXPECTED_CHAIN_ID: {
  name: 'EXPECTED_CHAIN_ID',
  type: {
    buffer: {
      length: 2
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    GSU_EMITTING_ADDRESS: {
  name: 'GSU-EMITTING-ADDRESS',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    GSU_EMITTING_CHAIN: {
  name: 'GSU-EMITTING-CHAIN',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    GUARDIAN_ETH_ADDRESS_SIZE: {
  name: 'GUARDIAN_ETH_ADDRESS_SIZE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SIGNATURE_DATA_SIZE: {
  name: 'SIGNATURE_DATA_SIZE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TWENTY_FOUR_HOURS: {
  name: 'TWENTY_FOUR_HOURS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    deployer: {
  name: 'deployer',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    activeGuardianSetId: {
  name: 'active-guardian-set-id',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    guardianSetInitialized: {
  name: 'guardian-set-initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    previousGuardianSet: {
  name: 'previous-guardian-set',
  type: {
    tuple: [
      {
        name: 'expires-at',
        type: 'uint128'
      },
      {
        name: 'set-id',
        type: 'uint128'
      }
    ]
  },
  access: 'variable'
} as TypedAbiVariable<{
  "expiresAt": bigint;
  "setId": bigint;
}>
  },
  constants: {
  ACTION_GUARDIAN_SET_UPDATE: 2n,
  CORE_CHAIN_ID: 0n,
  CORE_STRING_MODULE: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,111,114,101]),
  ERR_DUPLICATED_GUARDIAN_ADDRESSES: {
    isOk: false,
    value: 1_309n
  },
  ERR_EMPTY_GUARDIAN_SET: {
    isOk: false,
    value: 1_308n
  },
  ERR_GSU_CHECK_ACTION: {
    isOk: false,
    value: 1_302n
  },
  ERR_GSU_CHECK_CHAIN: {
    isOk: false,
    value: 1_303n
  },
  ERR_GSU_CHECK_EMITTER: {
    isOk: false,
    value: 1_305n
  },
  ERR_GSU_CHECK_INDEX: {
    isOk: false,
    value: 1_304n
  },
  ERR_GSU_CHECK_MODULE: {
    isOk: false,
    value: 1_301n
  },
  ERR_GSU_CHECK_OVERLAY: {
    isOk: false,
    value: 1_307n
  },
  ERR_GSU_PARSING_ACTION: {
    isOk: false,
    value: 1_202n
  },
  ERR_GSU_PARSING_CHAIN: {
    isOk: false,
    value: 1_203n
  },
  ERR_GSU_PARSING_GUARDIANS_BYTES: {
    isOk: false,
    value: 1_206n
  },
  ERR_GSU_PARSING_GUARDIAN_LEN: {
    isOk: false,
    value: 1_205n
  },
  ERR_GSU_PARSING_INDEX: {
    isOk: false,
    value: 1_204n
  },
  ERR_GSU_PARSING_MODULE: {
    isOk: false,
    value: 1_201n
  },
  ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS: {
    isOk: false,
    value: 1_207n
  },
  ERR_NOT_DEPLOYER: {
    isOk: false,
    value: 1_306n
  },
  ERR_STACKS_TIMESTAMP: {
    isOk: false,
    value: 1_310n
  },
  ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY: {
    isOk: false,
    value: 1_103n
  },
  ERR_VAA_CHECKS_THRESHOLD_SIGNATURE: {
    isOk: false,
    value: 1_102n
  },
  ERR_VAA_CHECKS_VERSION_UNSUPPORTED: {
    isOk: false,
    value: 1_101n
  },
  ERR_VAA_HASHING_BODY: {
    isOk: false,
    value: 1_012n
  },
  ERR_VAA_PARSING_CONSISTENCY_LEVEL: {
    isOk: false,
    value: 1_010n
  },
  ERR_VAA_PARSING_EMITTER_ADDRESS: {
    isOk: false,
    value: 1_008n
  },
  ERR_VAA_PARSING_EMITTER_CHAIN: {
    isOk: false,
    value: 1_007n
  },
  ERR_VAA_PARSING_GUARDIAN_SET: {
    isOk: false,
    value: 1_002n
  },
  ERR_VAA_PARSING_NONCE: {
    isOk: false,
    value: 1_006n
  },
  ERR_VAA_PARSING_PAYLOAD: {
    isOk: false,
    value: 1_011n
  },
  ERR_VAA_PARSING_SEQUENCE: {
    isOk: false,
    value: 1_009n
  },
  ERR_VAA_PARSING_SIGNATURES: {
    isOk: false,
    value: 1_004n
  },
  ERR_VAA_PARSING_SIGNATURES_LEN: {
    isOk: false,
    value: 1_003n
  },
  ERR_VAA_PARSING_TIMESTAMP: {
    isOk: false,
    value: 1_005n
  },
  ERR_VAA_PARSING_VERSION: {
    isOk: false,
    value: 1_001n
  },
  EXPECTED_CHAIN_ID: Uint8Array.from([195,119]),
  gSUEMITTINGADDRESS: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]),
  gSUEMITTINGCHAIN: 1n,
  GUARDIAN_ETH_ADDRESS_SIZE: 20n,
  SIGNATURE_DATA_SIZE: 66n,
  TWENTY_FOUR_HOURS: 86_400n,
  activeGuardianSetId: 0n,
  deployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  guardianSetInitialized: false,
  previousGuardianSet: {
    expiresAt: 0n,
    setId: 0n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'wormhole-core-v4',
  },
wormholeTraitsV2: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'wormhole-traits-v2',
  },
wstx: {
  "functions": {
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":11}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":4}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":"none"},"error":"none"}}}} as TypedAbiFunction<[], Response<null | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 11
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 4
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: 'none'
  },
  access: 'constant'
} as TypedAbiVariable<null | null>
  },
  constants: {
  tokenDecimals: 6n,
  tokenName: 'Wrapped STX',
  tokenSymbol: 'wSTX',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'wstx',
  }
} as const;

export const accounts = {"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"100000000000000"},"faucet":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"}} as const;

export const identifiers = {"assets":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","daoExecutor":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","daoMultisig":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","daoTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","daoTreasury":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","diaOracle":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle","egroup":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","ftTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","market":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","marketTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","marketVault":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","mockOracle":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","proposalCreateEgroupSbtcUsdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","proposalCreateMultipleEgroups":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","proposalInitAssets":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","proposalInitMarketVault":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","proposalInitVaults":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","proposalProtocolInit":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","proposalSetPriceStaleness":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","proposalSetSbtcInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","proposalSetStxInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","proposalSetUsdcInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","protocolData":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","pythGovernanceV3":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-governance-v3","pythOracleV4":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-oracle-v4","pythPnauDecoderV3":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-pnau-decoder-v3","pythStorageV4":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-storage-v4","pythTraitsV2":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-traits-v2","sbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","ststx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","ststxbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","traitDiaOracle":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","usdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","usdh":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","vaultSbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","vaultStstx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","vaultStstxbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","vaultStx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","vaultTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","vaultUsdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","vaultUsdh":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","wormholeCoreV4":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-core-v4","wormholeTraitsV2":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-traits-v2","wstx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"assets":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","testnet":null,"mainnet":null},"daoExecutor":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","testnet":null,"mainnet":null},"daoMultisig":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","testnet":null,"mainnet":null},"daoTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","testnet":null,"mainnet":null},"daoTreasury":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","testnet":null,"mainnet":null},"diaOracle":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dia-oracle","simnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle","testnet":null,"mainnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle"},"egroup":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","testnet":null,"mainnet":null},"ftTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","testnet":null,"mainnet":null},"market":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","testnet":null,"mainnet":null},"marketTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","testnet":null,"mainnet":null},"marketVault":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","testnet":null,"mainnet":null},"mockOracle":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","testnet":null,"mainnet":null},"proposalCreateEgroupSbtcUsdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","testnet":null,"mainnet":null},"proposalCreateMultipleEgroups":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","testnet":null,"mainnet":null},"proposalInitAssets":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","testnet":null,"mainnet":null},"proposalInitMarketVault":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","testnet":null,"mainnet":null},"proposalInitVaults":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","testnet":null,"mainnet":null},"proposalProtocolInit":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","testnet":null,"mainnet":null},"proposalSetPriceStaleness":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","testnet":null,"mainnet":null},"proposalSetSbtcInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","testnet":null,"mainnet":null},"proposalSetStxInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","testnet":null,"mainnet":null},"proposalSetUsdcInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","testnet":null,"mainnet":null},"protocolData":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","testnet":null,"mainnet":null},"pythGovernanceV3":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-governance-v3","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-governance-v3","testnet":null,"mainnet":null},"pythOracleV4":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-oracle-v4","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-oracle-v4","testnet":null,"mainnet":null},"pythPnauDecoderV3":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-pnau-decoder-v3","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-pnau-decoder-v3","testnet":null,"mainnet":null},"pythStorageV4":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-storage-v4","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-storage-v4","testnet":null,"mainnet":null},"pythTraitsV2":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-traits-v2","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-traits-v2","testnet":null,"mainnet":null},"sbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","testnet":null,"mainnet":null},"ststx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","testnet":null,"mainnet":null},"ststxbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","testnet":null,"mainnet":null},"traitDiaOracle":{"devnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","simnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","testnet":null,"mainnet":null},"usdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","testnet":null,"mainnet":null},"usdh":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","testnet":null,"mainnet":null},"vaultSbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","testnet":null,"mainnet":null},"vaultStstx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","testnet":null,"mainnet":null},"vaultStstxbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","testnet":null,"mainnet":null},"vaultStx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","testnet":null,"mainnet":null},"vaultTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","testnet":null,"mainnet":null},"vaultUsdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","testnet":null,"mainnet":null},"vaultUsdh":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","testnet":null,"mainnet":null},"wormholeCoreV4":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-core-v4","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-core-v4","testnet":null,"mainnet":null},"wormholeTraitsV2":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-traits-v2","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wormhole-traits-v2","testnet":null,"mainnet":null},"wstx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx","testnet":null,"mainnet":null}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  