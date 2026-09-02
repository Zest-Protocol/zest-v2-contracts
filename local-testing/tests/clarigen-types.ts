
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
    checkConfidence: {"name":"check-confidence","access":"private","args":[{"name":"price","type":"int128"},{"name":"confidence","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[price: TypedAbiArg<number | bigint, "price">, confidence: TypedAbiArg<number | bigint, "confidence">], Response<boolean, bigint>>,
    checkDaoAuth: {"name":"check-dao-auth","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    collectLazerFeed: {"name":"collect-lazer-feed","access":"private","args":[{"name":"feed","type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]}},{"name":"acc","type":{"response":{"ok":{"tuple":[{"name":"envelope-timestamp","type":"uint128"},{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"envelope-timestamp","type":"uint128"},{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[feed: TypedAbiArg<{
  "bestAsk": number | bigint | null;
  "bestBid": number | bigint | null;
  "confidence": number | bigint | null;
  "emaConfidence": number | bigint | null;
  "emaPrice": number | bigint | null;
  "exponent": number | bigint | null;
  "feedId": number | bigint;
  "feedUpdateTimestamp": number | bigint | null;
  "fundingRate": number | bigint | null;
  "fundingRateInterval": number | bigint | null;
  "fundingTimestamp": number | bigint | null;
  "marketSession": number | bigint | null;
  "price": number | bigint | null;
  "publisherCount": number | bigint | null;
}, "feed">, acc: TypedAbiArg<Response<{
  "envelopeTimestamp": number | bigint;
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, number | bigint>, "acc">], Response<{
  "envelopeTimestamp": bigint;
  "feeds": {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
}[];
}, bigint>>,
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
    findCompactFeed: {"name":"find-compact-feed","access":"private","args":[{"name":"feed-id","type":"uint128"},{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]}}}} as TypedAbiFunction<[feedId: TypedAbiArg<number | bigint, "feedId">, feeds: TypedAbiArg<{
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[], "feeds">], {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
} | null>,
    findCompactFeedIter: {"name":"find-compact-feed-iter","access":"private","args":[{"name":"feed","type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"result","type":{"optional":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]}}},{"name":"target","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"result","type":{"optional":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]}}},{"name":"target","type":"uint128"}]}}} as TypedAbiFunction<[feed: TypedAbiArg<{
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}, "feed">, acc: TypedAbiArg<{
  "result": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
} | null;
  "target": number | bigint;
}, "acc">], {
  "result": {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
} | null;
  "target": bigint;
}>,
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
    getAssetValue: {"name":"get-asset-value","access":"private","args":[{"name":"asset","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}},{"name":"amount","type":"uint128"},{"name":"round-up","type":"bool"},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[asset: TypedAbiArg<{
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
}, "asset">, amount: TypedAbiArg<number | bigint, "amount">, roundUp: TypedAbiArg<boolean, "roundUp">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], Response<bigint, bigint>>,
    getAssets: {"name":"get-assets","access":"private","args":[{"name":"mask-user","type":"uint128"},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}}} as TypedAbiFunction<[maskUser: TypedAbiArg<number | bigint, "maskUser">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], {
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
    iterPriceMulti: {"name":"iter-price-multi","access":"private","args":[{"name":"oracle-data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"acc","type":{"tuple":[{"name":"aids","type":{"list":{"type":"uint128","length":64}}},{"name":"idx","type":"uint128"},{"name":"output","type":{"list":{"type":"uint128","length":64}}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}},{"name":"valid","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"aids","type":{"list":{"type":"uint128","length":64}}},{"name":"idx","type":"uint128"},{"name":"output","type":{"list":{"type":"uint128","length":64}}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}},{"name":"valid","type":"bool"}]}}} as TypedAbiFunction<[oracleData: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "oracleData">, acc: TypedAbiArg<{
  "aids": number | bigint[];
  "idx": number | bigint;
  "output": number | bigint[];
  "pythContext": {
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
};
  "valid": boolean;
}, "acc">], {
  "aids": bigint[];
  "idx": bigint;
  "output": bigint[];
  "pythContext": {
  "feeds": {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
}[];
};
  "valid": boolean;
}>,
    loadPriceFeeds: {"name":"load-price-feeds","access":"private","args":[{"name":"updates","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[updates: TypedAbiArg<Uint8Array[] | null, "updates">], Response<{
  "feeds": {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
}[];
}, bigint>>,
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
    priceMultiResolve: {"name":"price-multi-resolve","access":"private","args":[{"name":"data","type":{"list":{"type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]},"length":64}}},{"name":"aids","type":{"list":{"type":"uint128","length":64}}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"response":{"ok":{"list":{"type":"uint128","length":64}},"error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}[], "data">, aids: TypedAbiArg<number | bigint[], "aids">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], Response<bigint[], bigint>>,
    priceResolve: {"name":"price-resolve","access":"private","args":[{"name":"data","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<{
  "callcode": Uint8Array | null;
  "ident": Uint8Array;
  "maxStaleness": number | bigint;
  "type": Uint8Array;
}, "data">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], Response<bigint, bigint>>,
    processCollateralAsset: {"name":"process-collateral-asset","access":"private","args":[{"name":"coll-aid","type":"uint128"},{"name":"debt-actual-usd","type":"uint128"},{"name":"liq-penalty","type":"uint128"},{"name":"user-coll-balance","type":"uint128"},{"name":"assets","type":{"list":{"type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}},{"name":"price","type":"uint128"}]},"length":64}}},{"name":"coll-asset","type":{"tuple":[{"name":"addr","type":"principal"},{"name":"collateral","type":"bool"},{"name":"debt","type":"bool"},{"name":"decimals","type":"uint128"},{"name":"id","type":"uint128"},{"name":"oracle","type":{"tuple":[{"name":"callcode","type":{"optional":{"buffer":{"length":1}}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"max-staleness","type":"uint128"},{"name":"type","type":{"buffer":{"length":1}}}]}}]}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"tuple":[{"name":"coll-actual","type":"uint128"},{"name":"coll-decimals","type":"uint128"},{"name":"coll-expected","type":"uint128"},{"name":"coll-price","type":"uint128"}]}}} as TypedAbiFunction<[collAid: TypedAbiArg<number | bigint, "collAid">, debtActualUsd: TypedAbiArg<number | bigint, "debtActualUsd">, liqPenalty: TypedAbiArg<number | bigint, "liqPenalty">, userCollBalance: TypedAbiArg<number | bigint, "userCollBalance">, assets: TypedAbiArg<{
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
}, "collAsset">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], {
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
    resolvePriceFeed: {"name":"resolve-price-feed","access":"private","args":[{"name":"type","type":{"buffer":{"length":1}}},{"name":"ident","type":{"buffer":{"length":32}}},{"name":"pyth-context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[type: TypedAbiArg<Uint8Array, "type">, ident: TypedAbiArg<Uint8Array, "ident">, pythContext: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "pythContext">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolvePyth: {"name":"resolve-pyth","access":"private","args":[{"name":"ident","type":{"buffer":{"length":32}}},{"name":"context","type":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"timestamp","type":"uint128"},{"name":"value","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ident: TypedAbiArg<Uint8Array, "ident">, context: TypedAbiArg<{
  "feeds": {
  "confidence": number | bigint;
  "exponent": number | bigint;
  "feedId": number | bigint;
  "price": number | bigint;
  "timestamp": number | bigint;
}[];
}, "context">], Response<{
  "timestamp": bigint;
  "value": bigint;
}, bigint>>,
    resolveStbtc: {"name":"resolve-stbtc","access":"private","args":[{"name":"p","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[p: TypedAbiArg<number | bigint, "p">], Response<bigint, bigint>>,
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
    verifyLazerUpdate: {"name":"verify-lazer-update","access":"private","args":[{"name":"update","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"confidence","type":"uint128"},{"name":"exponent","type":"int128"},{"name":"feed-id","type":"uint128"},{"name":"price","type":"int128"},{"name":"timestamp","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[update: TypedAbiArg<Uint8Array, "update">], Response<{
  "feeds": {
  "confidence": bigint;
  "exponent": bigint;
  "feedId": bigint;
  "price": bigint;
  "timestamp": bigint;
}[];
}, bigint>>,
    borrow: {"name":"borrow","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"receiver","type":{"optional":"principal"}},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, receiver: TypedAbiArg<string | null, "receiver">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    callStbtcRatio: {"name":"call-stbtc-ratio","access":"public","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
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
    setMockStbtcRatio: {"name":"set-mock-stbtc-ratio","access":"public","args":[{"name":"ratio","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[ratio: TypedAbiArg<number | bigint, "ratio">], Response<boolean, bigint>>,
    setPauseLiquidation: {"name":"set-pause-liquidation","access":"public","args":[{"name":"paused","type":"bool"},{"name":"grace-period","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[paused: TypedAbiArg<boolean, "paused">, gracePeriod: TypedAbiArg<number | bigint, "gracePeriod">], Response<boolean, bigint>>,
    setStbtcHaircutBps: {"name":"set-stbtc-haircut-bps","access":"public","args":[{"name":"haircut","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[haircut: TypedAbiArg<number | bigint, "haircut">], Response<boolean, bigint>>,
    supplyCollateralAdd: {"name":"supply-collateral-add","access":"public","args":[{"name":"ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"min-shares","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[ft: TypedAbiArg<string, "ft">, amount: TypedAbiArg<number | bigint, "amount">, minShares: TypedAbiArg<number | bigint, "minShares">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<bigint, bigint>>,
    getCachedIndexes: {"name":"get-cached-indexes","access":"read_only","args":[{"name":"aid","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"index","type":"uint128"},{"name":"lindex","type":"uint128"}]}}}} as TypedAbiFunction<[aid: TypedAbiArg<number | bigint, "aid">], {
  "index": bigint;
  "lindex": bigint;
} | null>,
    getLiquidationGraceEnd: {"name":"get-liquidation-grace-end","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLiquidationGracePeriodAsset: {"name":"get-liquidation-grace-period-asset","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<bigint, null>>,
    getMaxConfidenceRatio: {"name":"get-max-confidence-ratio","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getPauseLiquidation: {"name":"get-pause-liquidation","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[], Response<boolean, null>>,
    getStbtcHaircutBps: {"name":"get-stbtc-haircut-bps","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
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
    CALLCODE_STBTC: {
  name: 'CALLCODE-STBTC',
  type: {
    buffer: {
      length: 1
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
    DEPLOYER: {
  name: 'DEPLOYER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
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
    ERR_ORACLE_STBTC_RATIO: {
  name: 'ERR-ORACLE-STBTC-RATIO',
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
    MAX_ORACLE_FUTURE_SKEW: {
  name: 'MAX-ORACLE-FUTURE-SKEW',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU64: {
  name: 'MAX-U64',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MICROS_PER_SECOND: {
  name: 'MICROS-PER-SECOND',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STBTC_RATIO_DECIMALS: {
  name: 'STBTC-RATIO-DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STBTC_RATIO_MAX: {
  name: 'STBTC-RATIO-MAX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STBTC_RATIO_MIN: {
  name: 'STBTC-RATIO-MIN',
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
    stBTC: {
  name: 'stBTC',
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
    zstBTC: {
  name: 'zstBTC',
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
      length: 7
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    maxConfidenceRatio: {
  name: 'max-confidence-ratio',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    mockStbtcRatio: {
  name: 'mock-stbtc-ratio',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    pauseLiquidation: {
  name: 'pause-liquidation',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    stbtcHaircutBps: {
  name: 'stbtc-haircut-bps',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  BPS: 10_000n,
  cALLCODESTBTC: Uint8Array.from([7]),
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTSTXBTC: Uint8Array.from([6]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  dEBTMASK: 340_282_366_920_938_463_444_927_863_358_058_659_840n,
  dEBTOFFSET: 64n,
  DEPLOYER: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
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
  eRRORACLESTBTCRATIO: {
    isOk: false,
    value: 400_020n
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
  mAXORACLEFUTURESKEW: 60n,
  mAXU64: 18_446_744_073_709_551_615n,
  mICROSPERSECOND: 1_000_000n,
  sTBTCRATIODECIMALS: 100_000_000n,
  sTBTCRATIOMAX: 200_000_000n,
  sTBTCRATIOMIN: 50_000_000n,
  sTSTXRATIODECIMALS: 1_000_000n,
  STX: 0n,
  tYPEDIA: Uint8Array.from([1]),
  tYPEMOCK: Uint8Array.from([2]),
  tYPEPYTH: Uint8Array.from([0]),
  USDC: 6n,
  USDH: 8n,
  zESTSTXWRAPPERCONTRACT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  maxConfidenceRatio: 1_000n,
  mockStbtcRatio: 100_000_000n,
  pauseLiquidation: false,
  sBTC: 2n,
  stBTC: 12n,
  stSTX: 4n,
  stSTXbtc: 10n,
  stbtcHaircutBps: 0n,
  zSTX: 1n,
  zUSDC: 7n,
  zUSDH: 9n,
  zsBTC: 3n,
  zstBTC: 13n,
  zstSTX: 5n,
  zstSTXbtc: 11n,
  ztokens: [
    1n,
    3n,
    5n,
    7n,
    9n,
    11n,
    13n
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-init-vaults',
  },
proposalLazerRepoint: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
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
    LAZER_BTC: {
  name: 'LAZER-BTC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    LAZER_STX: {
  name: 'LAZER-STX',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    LAZER_USDC: {
  name: 'LAZER-USDC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    LAZER_USDH: {
  name: 'LAZER-USDH',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    MAX_STALENESS: {
  name: 'MAX-STALENESS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TYPE_PYTH: {
  name: 'TYPE-PYTH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>
  },
  constants: {
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTSTXBTC: Uint8Array.from([6]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  lAZERBTC: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
  lAZERSTX: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]),
  lAZERUSDC: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5]),
  lAZERUSDH: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6]),
  mAXSTALENESS: 100_000_000n,
  tYPEPYTH: Uint8Array.from([0])
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-lazer-repoint',
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-protocol-init',
  },
proposalSetMarketV1: {
  "functions": {
    execute: {"name":"execute","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    CALLCODE_STBTC: {
  name: 'CALLCODE-STBTC',
  type: {
    buffer: {
      length: 1
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
    LAZER_BTC: {
  name: 'LAZER-BTC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    LAZER_STX: {
  name: 'LAZER-STX',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    LAZER_USDC: {
  name: 'LAZER-USDC',
  type: {
    buffer: {
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    MAX_STALENESS: {
  name: 'MAX-STALENESS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TYPE_PYTH: {
  name: 'TYPE-PYTH',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>
  },
  constants: {
  cALLCODESTBTC: Uint8Array.from([7]),
  cALLCODESTSTX: Uint8Array.from([0]),
  cALLCODEZSBTC: Uint8Array.from([2]),
  cALLCODEZSTSTX: Uint8Array.from([3]),
  cALLCODEZSTSTXBTC: Uint8Array.from([6]),
  cALLCODEZSTX: Uint8Array.from([1]),
  cALLCODEZUSDC: Uint8Array.from([4]),
  cALLCODEZUSDH: Uint8Array.from([5]),
  lAZERBTC: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
  lAZERSTX: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]),
  lAZERUSDC: Uint8Array.from([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5]),
  mAXSTALENESS: 100_000_000n,
  tYPEPYTH: Uint8Array.from([0])
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-set-market-v1',
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-set-usdc-interest-rates',
  },
proposalTestZvClaimOwnership: {
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-test-zv-claim-ownership',
  },
proposalTestZvOwnerConfig: {
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-test-zv-owner-config',
  },
proposalTestZvSetMetadata: {
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'proposal-test-zv-set-metadata',
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
    getPythPrice: {"name":"get-pyth-price","access":"private","args":[{"name":"feed-id","type":{"buffer":{"length":32}}}],"outputs":{"type":{"optional":"none"}}} as TypedAbiFunction<[feedId: TypedAbiArg<Uint8Array, "feedId">], null | null>,
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
    pythFeedIdToLazer: {"name":"pyth-feed-id-to-lazer","access":"private","args":[{"name":"feed-id","type":{"buffer":{"length":32}}}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[feedId: TypedAbiArg<Uint8Array, "feedId">], bigint | null>,
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'protocol-data',
  },
pythLazerDecoderV1: {
  "functions": {
    checkTrustedSigner: {"name":"check-trusted-signer","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"expires-at","type":"uint128"},{"name":"pubkey","type":{"buffer":{"length":33}}}]}},{"name":"acc","type":{"tuple":[{"name":"now","type":"uint128"},{"name":"target","type":{"buffer":{"length":33}}},{"name":"trusted","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"now","type":"uint128"},{"name":"target","type":{"buffer":{"length":33}}},{"name":"trusted","type":"bool"}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "expiresAt": number | bigint;
  "pubkey": Uint8Array;
}, "entry">, acc: TypedAbiArg<{
  "now": number | bigint;
  "target": Uint8Array;
  "trusted": boolean;
}, "acc">], {
  "now": bigint;
  "target": Uint8Array;
  "trusted": boolean;
}>,
    isSignerTrusted: {"name":"is-signer-trusted","access":"private","args":[{"name":"signer","type":{"buffer":{"length":33}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[signer: TypedAbiArg<Uint8Array, "signer">], boolean>,
    parseFeedSlot: {"name":"parse-feed-slot","access":"private","args":[{"name":"slot_","type":"uint128"},{"name":"acc","type":{"response":{"ok":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]},"length":75}}},{"name":"offset","type":"uint128"},{"name":"remaining","type":"uint128"}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"feeds","type":{"list":{"type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]},"length":75}}},{"name":"offset","type":"uint128"},{"name":"remaining","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[slot_: TypedAbiArg<number | bigint, "slot_">, acc: TypedAbiArg<Response<{
  "bytes": Uint8Array;
  "feeds": {
  "bestAsk": number | bigint | null;
  "bestBid": number | bigint | null;
  "confidence": number | bigint | null;
  "emaConfidence": number | bigint | null;
  "emaPrice": number | bigint | null;
  "exponent": number | bigint | null;
  "feedId": number | bigint;
  "feedUpdateTimestamp": number | bigint | null;
  "fundingRate": number | bigint | null;
  "fundingRateInterval": number | bigint | null;
  "fundingTimestamp": number | bigint | null;
  "marketSession": number | bigint | null;
  "price": number | bigint | null;
  "publisherCount": number | bigint | null;
}[];
  "offset": number | bigint;
  "remaining": number | bigint;
}, number | bigint>, "acc">], Response<{
  "bytes": Uint8Array;
  "feeds": {
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedId": bigint;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "price": bigint | null;
  "publisherCount": bigint | null;
}[];
  "offset": bigint;
  "remaining": bigint;
}, bigint>>,
    parseOneFeed: {"name":"parse-one-feed","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"offset","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"feed","type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]}},{"name":"offset","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, offset: TypedAbiArg<number | bigint, "offset">], Response<{
  "feed": {
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedId": bigint;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "price": bigint | null;
  "publisherCount": bigint | null;
};
  "offset": bigint;
}, bigint>>,
    parseProperty: {"name":"parse-property","access":"private","args":[{"name":"slot_","type":"uint128"},{"name":"acc","type":{"response":{"ok":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"offset","type":"uint128"},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}},{"name":"remaining","type":"uint128"}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"offset","type":"uint128"},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}},{"name":"remaining","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[slot_: TypedAbiArg<number | bigint, "slot_">, acc: TypedAbiArg<Response<{
  "bestAsk": number | bigint | null;
  "bestBid": number | bigint | null;
  "bytes": Uint8Array;
  "confidence": number | bigint | null;
  "emaConfidence": number | bigint | null;
  "emaPrice": number | bigint | null;
  "exponent": number | bigint | null;
  "feedUpdateTimestamp": number | bigint | null;
  "fundingRate": number | bigint | null;
  "fundingRateInterval": number | bigint | null;
  "fundingTimestamp": number | bigint | null;
  "marketSession": number | bigint | null;
  "offset": number | bigint;
  "price": number | bigint | null;
  "publisherCount": number | bigint | null;
  "remaining": number | bigint;
}, number | bigint>, "acc">], Response<{
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "bytes": Uint8Array;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "offset": bigint;
  "price": bigint | null;
  "publisherCount": bigint | null;
  "remaining": bigint;
}, bigint>>,
    readIntBe_q: {"name":"read-int-be?","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"size","type":"uint128"}],"outputs":{"type":{"optional":"int128"}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, size: TypedAbiArg<number | bigint, "size">], bigint | null>,
    readOptInt64: {"name":"read-opt-int64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"voffset","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"next","type":"uint128"},{"name":"value","type":{"optional":"int128"}}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, voffset: TypedAbiArg<number | bigint, "voffset">], Response<{
  "next": bigint;
  "value": bigint | null;
}, bigint>>,
    readOptUint64: {"name":"read-opt-uint64","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"voffset","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"next","type":"uint128"},{"name":"value","type":{"optional":"uint128"}}]},"error":"uint128"}}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, voffset: TypedAbiArg<number | bigint, "voffset">], Response<{
  "next": bigint;
  "value": bigint | null;
}, bigint>>,
    readUintBe_q: {"name":"read-uint-be?","access":"private","args":[{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"pos","type":"uint128"},{"name":"size","type":"uint128"}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[bytes: TypedAbiArg<Uint8Array, "bytes">, pos: TypedAbiArg<number | bigint, "pos">, size: TypedAbiArg<number | bigint, "size">], bigint | null>,
    setPropertyField: {"name":"set-property-field","access":"private","args":[{"name":"ptype","type":"uint128"},{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"voffset","type":"uint128"},{"name":"state","type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"offset","type":"uint128"},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}},{"name":"remaining","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"bytes","type":{"buffer":{"length":8192}}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"offset","type":"uint128"},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}},{"name":"remaining","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ptype: TypedAbiArg<number | bigint, "ptype">, bytes: TypedAbiArg<Uint8Array, "bytes">, voffset: TypedAbiArg<number | bigint, "voffset">, state: TypedAbiArg<{
  "bestAsk": number | bigint | null;
  "bestBid": number | bigint | null;
  "bytes": Uint8Array;
  "confidence": number | bigint | null;
  "emaConfidence": number | bigint | null;
  "emaPrice": number | bigint | null;
  "exponent": number | bigint | null;
  "feedUpdateTimestamp": number | bigint | null;
  "fundingRate": number | bigint | null;
  "fundingRateInterval": number | bigint | null;
  "fundingTimestamp": number | bigint | null;
  "marketSession": number | bigint | null;
  "offset": number | bigint;
  "price": number | bigint | null;
  "publisherCount": number | bigint | null;
  "remaining": number | bigint;
}, "state">], Response<{
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "bytes": Uint8Array;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "offset": bigint;
  "price": bigint | null;
  "publisherCount": bigint | null;
  "remaining": bigint;
}, bigint>>,
    someIfNonzeroInt: {"name":"some-if-nonzero-int","access":"private","args":[{"name":"v","type":"int128"}],"outputs":{"type":{"optional":"int128"}}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], bigint | null>,
    someIfNonzeroUint: {"name":"some-if-nonzero-uint","access":"private","args":[{"name":"v","type":"uint128"}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[v: TypedAbiArg<number | bigint, "v">], bigint | null>,
    decodeAndVerifyPriceFeeds: {"name":"decode-and-verify-price-feeds","access":"read_only","args":[{"name":"update","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"channel","type":"uint128"},{"name":"price-feeds","type":{"list":{"type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]},"length":75}}},{"name":"timestamp","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[update: TypedAbiArg<Uint8Array, "update">], Response<{
  "channel": bigint;
  "priceFeeds": {
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedId": bigint;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "price": bigint | null;
  "publisherCount": bigint | null;
}[];
  "timestamp": bigint;
}, bigint>>,
    decodeLazerPayload: {"name":"decode-lazer-payload","access":"read_only","args":[{"name":"payload","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"channel","type":"uint128"},{"name":"price-feeds","type":{"list":{"type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]},"length":75}}},{"name":"timestamp","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<{
  "channel": bigint;
  "priceFeeds": {
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedId": bigint;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "price": bigint | null;
  "publisherCount": bigint | null;
}[];
  "timestamp": bigint;
}, bigint>>,
    recoverSigner: {"name":"recover-signer","access":"read_only","args":[{"name":"update","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"payload","type":{"buffer":{"length":8192}}},{"name":"signer","type":{"buffer":{"length":33}}}]},"error":"uint128"}}}} as TypedAbiFunction<[update: TypedAbiArg<Uint8Array, "update">], Response<{
  "payload": Uint8Array;
  "signer": Uint8Array;
}, bigint>>,
    verifyUpdate: {"name":"verify-update","access":"read_only","args":[{"name":"update","type":{"buffer":{"length":8192}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"payload","type":{"buffer":{"length":8192}}},{"name":"signer","type":{"buffer":{"length":33}}}]},"error":"uint128"}}}} as TypedAbiFunction<[update: TypedAbiArg<Uint8Array, "update">], Response<{
  "payload": Uint8Array;
  "signer": Uint8Array;
}, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_HIGH_S_SIGNATURE: {
  name: 'ERR_HIGH_S_SIGNATURE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INPUT_TOO_SHORT: {
  name: 'ERR_INPUT_TOO_SHORT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_EVM_MAGIC: {
  name: 'ERR_INVALID_EVM_MAGIC',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_FEED_DATA: {
  name: 'ERR_INVALID_FEED_DATA',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_MARKET_SESSION: {
  name: 'ERR_INVALID_MARKET_SESSION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_PAYLOAD_MAGIC: {
  name: 'ERR_INVALID_PAYLOAD_MAGIC',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_SIGNATURE: {
  name: 'ERR_INVALID_SIGNATURE',
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
    ERR_PAYLOAD_OVERLAY: {
  name: 'ERR_PAYLOAD_OVERLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOO_MANY_FEEDS: {
  name: 'ERR_TOO_MANY_FEEDS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOO_MANY_PROPS: {
  name: 'ERR_TOO_MANY_PROPS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED_CALLER: {
  name: 'ERR_UNAUTHORIZED_CALLER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNKNOWN_PROPERTY: {
  name: 'ERR_UNKNOWN_PROPERTY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNTRUSTED_SIGNER: {
  name: 'ERR_UNTRUSTED_SIGNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    EVM_FORMAT_MAGIC: {
  name: 'EVM_FORMAT_MAGIC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    FEEDS_OFFSET: {
  name: 'FEEDS_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    FEED_SLOTS: {
  name: 'FEED_SLOTS',
  type: {
    list: {
      type: 'uint128',
      length: 75
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    FORMAT_MAGIC: {
  name: 'FORMAT_MAGIC',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    LEN_OFFSET: {
  name: 'LEN_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_FEEDS: {
  name: 'MAX_FEEDS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PAYLOAD_CHANNEL_OFFSET: {
  name: 'PAYLOAD_CHANNEL_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PAYLOAD_FEEDS_LEN_OFFSET: {
  name: 'PAYLOAD_FEEDS_LEN_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PAYLOAD_OFFSET: {
  name: 'PAYLOAD_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PAYLOAD_TIMESTAMP_OFFSET: {
  name: 'PAYLOAD_TIMESTAMP_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROPERTY_SLOTS: {
  name: 'PROPERTY_SLOTS',
  type: {
    list: {
      type: 'uint128',
      length: 13
    }
  },
  access: 'constant'
} as TypedAbiVariable<bigint[]>,
    PROP_BEST_ASK: {
  name: 'PROP_BEST_ASK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_BEST_BID: {
  name: 'PROP_BEST_BID',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_CONFIDENCE: {
  name: 'PROP_CONFIDENCE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_EMA_CONFIDENCE: {
  name: 'PROP_EMA_CONFIDENCE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_EMA_PRICE: {
  name: 'PROP_EMA_PRICE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_EXPONENT: {
  name: 'PROP_EXPONENT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_FEED_UPDATE_TIMESTAMP: {
  name: 'PROP_FEED_UPDATE_TIMESTAMP',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_FUNDING_RATE: {
  name: 'PROP_FUNDING_RATE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_FUNDING_RATE_INTERVAL: {
  name: 'PROP_FUNDING_RATE_INTERVAL',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_FUNDING_TIMESTAMP: {
  name: 'PROP_FUNDING_TIMESTAMP',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_MARKET_SESSION: {
  name: 'PROP_MARKET_SESSION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_PRICE: {
  name: 'PROP_PRICE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PROP_PUBLISHER_COUNT: {
  name: 'PROP_PUBLISHER_COUNT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SIG_OFFSET: {
  name: 'SIG_OFFSET',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  ERR_HIGH_S_SIGNATURE: {
    isOk: false,
    value: 2_107n
  },
  ERR_INPUT_TOO_SHORT: {
    isOk: false,
    value: 2_101n
  },
  ERR_INVALID_EVM_MAGIC: {
    isOk: false,
    value: 2_102n
  },
  ERR_INVALID_FEED_DATA: {
    isOk: false,
    value: 2_203n
  },
  ERR_INVALID_MARKET_SESSION: {
    isOk: false,
    value: 2_207n
  },
  ERR_INVALID_PAYLOAD_MAGIC: {
    isOk: false,
    value: 2_201n
  },
  ERR_INVALID_SIGNATURE: {
    isOk: false,
    value: 2_104n
  },
  ERR_OVERLAY_PRESENT: {
    isOk: false,
    value: 2_103n
  },
  ERR_PAYLOAD_OVERLAY: {
    isOk: false,
    value: 2_204n
  },
  ERR_TOO_MANY_FEEDS: {
    isOk: false,
    value: 2_202n
  },
  ERR_TOO_MANY_PROPS: {
    isOk: false,
    value: 2_206n
  },
  ERR_UNAUTHORIZED_CALLER: {
    isOk: false,
    value: 2_106n
  },
  ERR_UNKNOWN_PROPERTY: {
    isOk: false,
    value: 2_205n
  },
  ERR_UNTRUSTED_SIGNER: {
    isOk: false,
    value: 2_105n
  },
  EVM_FORMAT_MAGIC: 706_910_618n,
  FEEDS_OFFSET: 14n,
  FEED_SLOTS: [
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
    74n
  ],
  FORMAT_MAGIC: 2_479_346_549n,
  LEN_OFFSET: 69n,
  MAX_FEEDS: 75n,
  PAYLOAD_CHANNEL_OFFSET: 12n,
  PAYLOAD_FEEDS_LEN_OFFSET: 13n,
  PAYLOAD_OFFSET: 71n,
  PAYLOAD_TIMESTAMP_OFFSET: 4n,
  PROPERTY_SLOTS: [
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
    12n
  ],
  PROP_BEST_ASK: 2n,
  PROP_BEST_BID: 1n,
  PROP_CONFIDENCE: 5n,
  PROP_EMA_CONFIDENCE: 11n,
  PROP_EMA_PRICE: 10n,
  PROP_EXPONENT: 4n,
  PROP_FEED_UPDATE_TIMESTAMP: 12n,
  PROP_FUNDING_RATE: 6n,
  PROP_FUNDING_RATE_INTERVAL: 8n,
  PROP_FUNDING_TIMESTAMP: 7n,
  PROP_MARKET_SESSION: 9n,
  PROP_PRICE: 0n,
  PROP_PUBLISHER_COUNT: 3n,
  SIG_OFFSET: 4n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'pyth-lazer-decoder-v1',
  },
pythLazerOracle: {
  "functions": {
    chargeFee: {"name":"charge-fee","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    pause: {"name":"pause","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    setDecoder: {"name":"set-decoder","access":"public","args":[{"name":"new-decoder","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newDecoder: TypedAbiArg<string, "newDecoder">], Response<boolean, bigint>>,
    setFee: {"name":"set-fee","access":"public","args":[{"name":"new-fee","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newFee: TypedAbiArg<number | bigint, "newFee">], Response<boolean, bigint>>,
    setFeeRecipient: {"name":"set-fee-recipient","access":"public","args":[{"name":"new-recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newRecipient: TypedAbiArg<string, "newRecipient">], Response<boolean, bigint>>,
    setRole: {"name":"set-role","access":"public","args":[{"name":"who","type":"principal"},{"name":"role","type":{"buffer":{"length":1}}},{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">, role: TypedAbiArg<Uint8Array, "role">, enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setStalePriceThreshold: {"name":"set-stale-price-threshold","access":"public","args":[{"name":"seconds","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[seconds: TypedAbiArg<number | bigint, "seconds">], Response<boolean, bigint>>,
    setTrustedSigners: {"name":"set-trusted-signers","access":"public","args":[{"name":"signers","type":{"list":{"type":{"tuple":[{"name":"expires-at","type":"uint128"},{"name":"pubkey","type":{"buffer":{"length":33}}}]},"length":100}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[signers: TypedAbiArg<{
  "expiresAt": number | bigint;
  "pubkey": Uint8Array;
}[], "signers">], Response<boolean, bigint>>,
    unpause: {"name":"unpause","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    verifyPriceFeeds: {"name":"verify-price-feeds","access":"public","args":[{"name":"update","type":{"buffer":{"length":8192}}},{"name":"decoder-contract","type":"trait_reference"},{"name":"max-age","type":{"optional":"uint128"}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"channel","type":"uint128"},{"name":"price-feeds","type":{"list":{"type":{"tuple":[{"name":"best-ask","type":{"optional":"int128"}},{"name":"best-bid","type":{"optional":"int128"}},{"name":"confidence","type":{"optional":"uint128"}},{"name":"ema-confidence","type":{"optional":"uint128"}},{"name":"ema-price","type":{"optional":"int128"}},{"name":"exponent","type":{"optional":"int128"}},{"name":"feed-id","type":"uint128"},{"name":"feed-update-timestamp","type":{"optional":"uint128"}},{"name":"funding-rate","type":{"optional":"int128"}},{"name":"funding-rate-interval","type":{"optional":"uint128"}},{"name":"funding-timestamp","type":{"optional":"uint128"}},{"name":"market-session","type":{"optional":"uint128"}},{"name":"price","type":{"optional":"int128"}},{"name":"publisher-count","type":{"optional":"uint128"}}]},"length":75}}},{"name":"timestamp","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[update: TypedAbiArg<Uint8Array, "update">, decoderContract: TypedAbiArg<string, "decoderContract">, maxAge: TypedAbiArg<number | bigint | null, "maxAge">], Response<{
  "channel": bigint;
  "priceFeeds": {
  "bestAsk": bigint | null;
  "bestBid": bigint | null;
  "confidence": bigint | null;
  "emaConfidence": bigint | null;
  "emaPrice": bigint | null;
  "exponent": bigint | null;
  "feedId": bigint;
  "feedUpdateTimestamp": bigint | null;
  "fundingRate": bigint | null;
  "fundingRateInterval": bigint | null;
  "fundingTimestamp": bigint | null;
  "marketSession": bigint | null;
  "price": bigint | null;
  "publisherCount": bigint | null;
}[];
  "timestamp": bigint;
}, bigint>>,
    assertActive: {"name":"assert-active","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    assertGovernance: {"name":"assert-governance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<boolean, bigint>>,
    assertRole: {"name":"assert-role","access":"read_only","args":[{"name":"who","type":"principal"},{"name":"role","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">, role: TypedAbiArg<Uint8Array, "role">], Response<boolean, bigint>>,
    getDecoder: {"name":"get-decoder","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getFee: {"name":"get-fee","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getFeeRecipient: {"name":"get-fee-recipient","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getStalePriceThreshold: {"name":"get-stale-price-threshold","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getTrustedSigners: {"name":"get-trusted-signers","access":"read_only","args":[],"outputs":{"type":{"list":{"type":{"tuple":[{"name":"expires-at","type":"uint128"},{"name":"pubkey","type":{"buffer":{"length":33}}}]},"length":100}}}} as TypedAbiFunction<[], {
  "expiresAt": bigint;
  "pubkey": Uint8Array;
}[]>,
    hasRole: {"name":"has-role","access":"read_only","args":[{"name":"who","type":"principal"},{"name":"role","type":{"buffer":{"length":1}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">, role: TypedAbiArg<Uint8Array, "role">], boolean>,
    isPaused: {"name":"is-paused","access":"read_only","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>
  },
  "maps": {
    roles: {"name":"roles","key":{"tuple":[{"name":"role","type":{"buffer":{"length":1}}},{"name":"who","type":"principal"}]},"value":"bool"} as TypedAbiMap<{
  "role": Uint8Array;
  "who": string;
}, boolean>
  },
  "variables": {
    ERR_CANNOT_CHANGE_OWN_GOVERNANCE: {
  name: 'ERR_CANNOT_CHANGE_OWN_GOVERNANCE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_DECODER: {
  name: 'ERR_INVALID_DECODER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_PAUSED: {
  name: 'ERR_PAUSED',
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
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    MICROS_PER_SECOND: {
  name: 'MICROS_PER_SECOND',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ROLE_GOVERNANCE: {
  name: 'ROLE_GOVERNANCE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    ROLE_PAUSE: {
  name: 'ROLE_PAUSE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    decoder: {
  name: 'decoder',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    fee: {
  name: 'fee',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeRecipient: {
  name: 'fee-recipient',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    paused: {
  name: 'paused',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    stalePriceThreshold: {
  name: 'stale-price-threshold',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    trustedSigners: {
  name: 'trusted-signers',
  type: {
    list: {
      type: {
        tuple: [
          {
            name: 'expires-at',
            type: 'uint128'
          },
          {
            name: 'pubkey',
            type: {
              buffer: {
                length: 33
              }
            }
          }
        ]
      },
      length: 100
    }
  },
  access: 'variable'
} as TypedAbiVariable<{
  "expiresAt": bigint;
  "pubkey": Uint8Array;
}[]>
  },
  constants: {
  ERR_CANNOT_CHANGE_OWN_GOVERNANCE: {
    isOk: false,
    value: 4_005n
  },
  ERR_INVALID_DECODER: {
    isOk: false,
    value: 1_001n
  },
  ERR_PAUSED: {
    isOk: false,
    value: 4_004n
  },
  ERR_STALE_PRICE: {
    isOk: false,
    value: 1_002n
  },
  ERR_UNAUTHORIZED: {
    isOk: false,
    value: 4_003n
  },
  MICROS_PER_SECOND: 1_000_000n,
  ROLE_GOVERNANCE: Uint8Array.from([0]),
  ROLE_PAUSE: Uint8Array.from([1]),
  decoder: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-decoder-v1',
  fee: 0n,
  feeRecipient: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  paused: false,
  stalePriceThreshold: 157_680_000n,
  trustedSigners: []
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'pyth-lazer-oracle',
  },
pythLazerTraits: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'pyth-lazer-traits',
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
  "fungible_tokens":[{"name":"sBTC-locked"},{"name":"sbtc"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'sbtc',
  },
sbtcRegistry: {
  "functions": {
    incrementLastWithdrawalRequestId: {"name":"increment-last-withdrawal-request-id","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    completeDeposit: {"name":"complete-deposit","access":"public","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, burnHash: TypedAbiArg<Uint8Array, "burnHash">, burnHeight: TypedAbiArg<number | bigint, "burnHeight">, sweepTxid: TypedAbiArg<Uint8Array, "sweepTxid">], Response<boolean, bigint>>,
    completeWithdrawalAccept: {"name":"complete-withdrawal-accept","access":"public","args":[{"name":"request-id","type":"uint128"},{"name":"bitcoin-txid","type":{"buffer":{"length":32}}},{"name":"output-index","type":"uint128"},{"name":"signer-bitmap","type":"uint128"},{"name":"fee","type":"uint128"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[requestId: TypedAbiArg<number | bigint, "requestId">, bitcoinTxid: TypedAbiArg<Uint8Array, "bitcoinTxid">, outputIndex: TypedAbiArg<number | bigint, "outputIndex">, signerBitmap: TypedAbiArg<number | bigint, "signerBitmap">, fee: TypedAbiArg<number | bigint, "fee">, burnHash: TypedAbiArg<Uint8Array, "burnHash">, burnHeight: TypedAbiArg<number | bigint, "burnHeight">, sweepTxid: TypedAbiArg<Uint8Array, "sweepTxid">], Response<boolean, bigint>>,
    completeWithdrawalReject: {"name":"complete-withdrawal-reject","access":"public","args":[{"name":"request-id","type":"uint128"},{"name":"signer-bitmap","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[requestId: TypedAbiArg<number | bigint, "requestId">, signerBitmap: TypedAbiArg<number | bigint, "signerBitmap">], Response<boolean, bigint>>,
    createWithdrawalRequest: {"name":"create-withdrawal-request","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"height","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, maxFee: TypedAbiArg<number | bigint, "maxFee">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "recipient">, height: TypedAbiArg<number | bigint, "height">], Response<bigint, bigint>>,
    rotateKeys: {"name":"rotate-keys","access":"public","args":[{"name":"new-keys","type":{"list":{"type":{"buffer":{"length":33}},"length":128}}},{"name":"new-address","type":"principal"},{"name":"new-aggregate-pubkey","type":{"buffer":{"length":33}}},{"name":"new-signature-threshold","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newKeys: TypedAbiArg<Uint8Array[], "newKeys">, newAddress: TypedAbiArg<string, "newAddress">, newAggregatePubkey: TypedAbiArg<Uint8Array, "newAggregatePubkey">, newSignatureThreshold: TypedAbiArg<number | bigint, "newSignatureThreshold">], Response<boolean, bigint>>,
    updateProtocolContract: {"name":"update-protocol-contract","access":"public","args":[{"name":"contract-type","type":{"buffer":{"length":1}}},{"name":"new-contract","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contractType: TypedAbiArg<Uint8Array, "contractType">, newContract: TypedAbiArg<string, "newContract">], Response<boolean, bigint>>,
    getActiveProtocol: {"name":"get-active-protocol","access":"read_only","args":[{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], string | null>,
    getCompletedDeposit: {"name":"get-completed-deposit","access":"read_only","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">], {
  "amount": bigint;
  "recipient": string;
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
} | null>,
    getCompletedWithdrawalSweepData: {"name":"get-completed-withdrawal-sweep-data","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
} | null>,
    getCurrentAggregatePubkey: {"name":"get-current-aggregate-pubkey","access":"read_only","args":[],"outputs":{"type":{"buffer":{"length":33}}}} as TypedAbiFunction<[], Uint8Array>,
    getCurrentSignerData: {"name":"get-current-signer-data","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"current-aggregate-pubkey","type":{"buffer":{"length":33}}},{"name":"current-signature-threshold","type":"uint128"},{"name":"current-signer-principal","type":"principal"},{"name":"current-signer-set","type":{"list":{"type":{"buffer":{"length":33}},"length":128}}}]}}} as TypedAbiFunction<[], {
  "currentAggregatePubkey": Uint8Array;
  "currentSignatureThreshold": bigint;
  "currentSignerPrincipal": string;
  "currentSignerSet": Uint8Array[];
}>,
    getCurrentSignerPrincipal: {"name":"get-current-signer-principal","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getCurrentSignerSet: {"name":"get-current-signer-set","access":"read_only","args":[],"outputs":{"type":{"list":{"type":{"buffer":{"length":33}},"length":128}}}} as TypedAbiFunction<[], Uint8Array[]>,
    getDepositStatus: {"name":"get-deposit-status","access":"read_only","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}],"outputs":{"type":{"optional":"bool"}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">], boolean | null>,
    getWithdrawalRequest: {"name":"get-withdrawal-request","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount","type":"uint128"},{"name":"block-height","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"sender","type":"principal"},{"name":"status","type":{"optional":"bool"}}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "amount": bigint;
  "blockHeight": bigint;
  "maxFee": bigint;
  "recipient": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "sender": string;
  "status": boolean | null;
} | null>,
    isProtocolCaller: {"name":"is-protocol-caller","access":"read_only","args":[{"name":"contract-flag","type":{"buffer":{"length":1}}},{"name":"contract","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contractFlag: TypedAbiArg<Uint8Array, "contractFlag">, contract: TypedAbiArg<string, "contract">], Response<boolean, bigint>>
  },
  "maps": {
    activeProtocolContracts: {"name":"active-protocol-contracts","key":{"buffer":{"length":1}},"value":"principal"} as TypedAbiMap<Uint8Array, string>,
    activeProtocolRoles: {"name":"active-protocol-roles","key":"principal","value":{"buffer":{"length":1}}} as TypedAbiMap<string, Uint8Array>,
    aggregatePubkeys: {"name":"aggregate-pubkeys","key":{"buffer":{"length":33}},"value":"bool"} as TypedAbiMap<Uint8Array, boolean>,
    completedDeposits: {"name":"completed-deposits","key":{"tuple":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]},"value":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}} as TypedAbiMap<{
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}, {
  "amount": bigint;
  "recipient": string;
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
}>,
    completedWithdrawalSweep: {"name":"completed-withdrawal-sweep","key":"uint128","value":{"tuple":[{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}} as TypedAbiMap<number | bigint, {
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
}>,
    depositStatus: {"name":"deposit-status","key":{"tuple":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]},"value":"bool"} as TypedAbiMap<{
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}, boolean>,
    withdrawalRequests: {"name":"withdrawal-requests","key":"uint128","value":{"tuple":[{"name":"amount","type":"uint128"},{"name":"block-height","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"sender","type":"principal"}]}} as TypedAbiMap<number | bigint, {
  "amount": bigint;
  "blockHeight": bigint;
  "maxFee": bigint;
  "recipient": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "sender": string;
}>,
    withdrawalStatus: {"name":"withdrawal-status","key":"uint128","value":"bool"} as TypedAbiMap<number | bigint, boolean>
  },
  "variables": {
    ERR_AGG_PUBKEY_REPLAY: {
  name: 'ERR_AGG_PUBKEY_REPLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_REQUEST_ID: {
  name: 'ERR_INVALID_REQUEST_ID',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    depositRole: {
  name: 'deposit-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    governanceRole: {
  name: 'governance-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    withdrawalRole: {
  name: 'withdrawal-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    currentAggregatePubkey: {
  name: 'current-aggregate-pubkey',
  type: {
    buffer: {
      length: 33
    }
  },
  access: 'variable'
} as TypedAbiVariable<Uint8Array>,
    currentSignatureThreshold: {
  name: 'current-signature-threshold',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    currentSignerPrincipal: {
  name: 'current-signer-principal',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    currentSignerSet: {
  name: 'current-signer-set',
  type: {
    list: {
      type: {
        buffer: {
          length: 33
        }
      },
      length: 128
    }
  },
  access: 'variable'
} as TypedAbiVariable<Uint8Array[]>,
    lastWithdrawalRequestId: {
  name: 'last-withdrawal-request-id',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'sbtc-registry',
  },
sbtcToken: {
  "functions": {
    protocolMintManyIter: {"name":"protocol-mint-many-iter","access":"private","args":[{"name":"item","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[item: TypedAbiArg<{
  "amount": number | bigint;
  "recipient": string;
}, "item">], Response<boolean, bigint>>,
    transferManyIter: {"name":"transfer-many-iter","access":"private","args":[{"name":"individual-transfer","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sender","type":"principal"},{"name":"to","type":"principal"}]}},{"name":"result","type":{"response":{"ok":"uint128","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[individualTransfer: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "sender": string;
  "to": string;
}, "individualTransfer">, result: TypedAbiArg<Response<number | bigint, number | bigint>, "result">], Response<bigint, bigint>>,
    protocolBurn: {"name":"protocol-burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolBurnLocked: {"name":"protocol-burn-locked","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolLock: {"name":"protocol-lock","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolMint: {"name":"protocol-mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolMintMany: {"name":"protocol-mint-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}]},"length":200}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"response":{"ok":"bool","error":"uint128"}},"length":200}},"error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "recipient": string;
}[], "recipients">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<Response<boolean, bigint>[], bigint>>,
    protocolSetName: {"name":"protocol-set-name","access":"public","args":[{"name":"new-name","type":{"string-ascii":{"length":32}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newName: TypedAbiArg<string, "newName">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolSetSymbol: {"name":"protocol-set-symbol","access":"public","args":[{"name":"new-symbol","type":{"string-ascii":{"length":10}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newSymbol: TypedAbiArg<string, "newSymbol">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolSetTokenUri: {"name":"protocol-set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolUnlock: {"name":"protocol-unlock","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    transferMany: {"name":"transfer-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sender","type":"principal"},{"name":"to","type":"principal"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "sender": string;
  "to": string;
}[], "recipients">], Response<bigint, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getBalanceAvailable: {"name":"get-balance-available","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getBalanceLocked: {"name":"get-balance-locked","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_NOT_OWNER: {
  name: 'ERR_NOT_OWNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TRANSFER_INDEX_PREFIX: {
  name: 'ERR_TRANSFER_INDEX_PREFIX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'constant'
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
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"sbtc-token"},{"name":"sbtc-token-locked"}],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'sbtc-token',
  },
stackingDaoMock: {
  "functions": {
    deposit: {"name":"deposit","access":"public","args":[{"name":"sbtc-amount","type":"uint128"},{"name":"min-shares-out","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[sbtcAmount: TypedAbiArg<number | bigint, "sbtcAmount">, minSharesOut: TypedAbiArg<number | bigint, "minSharesOut">], Response<bigint, bigint>>,
    setDepositsEnabled: {"name":"set-deposits-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setRatio: {"name":"set-ratio","access":"public","args":[{"name":"new-ratio","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newRatio: TypedAbiArg<number | bigint, "newRatio">], Response<boolean, bigint>>,
    withdrawIdle: {"name":"withdraw-idle","access":"public","args":[{"name":"stbtc-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"sbtc-fee","type":"uint128"},{"name":"sbtc-user","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[stbtcAmount: TypedAbiArg<number | bigint, "stbtcAmount">], Response<{
  "sbtcFee": bigint;
  "sbtcUser": bigint;
}, bigint>>,
    getReserveBalance: {"name":"get-reserve-balance","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getSbtcPerStbtc: {"name":"get-sbtc-per-stbtc","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getSbtcPerStbtcUp: {"name":"get-sbtc-per-stbtc-up","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getTotalSbtc: {"name":"get-total-sbtc","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>
  },
  "maps": {
    
  },
  "variables": {
    DEAD_SHARES: {
  name: 'DEAD_SHARES',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    dENOMINATOR_8: {
  name: 'DENOMINATOR_8',
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
    ERR_DEPOSITS_DISABLED: {
  name: 'ERR-DEPOSITS-DISABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_IDLE: {
  name: 'ERR-INSUFFICIENT-IDLE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_MIN_SHARES: {
  name: 'ERR-MIN-SHARES',
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
    depositsEnabled: {
  name: 'deposits-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    owner: {
  name: 'owner',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    ratio: {
  name: 'ratio',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    reserveBalance: {
  name: 'reserve-balance',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  DEAD_SHARES: 1_000n,
  dENOMINATOR_8: 100_000_000n,
  eRRAMOUNTZERO: {
    isOk: false,
    value: 900_004n
  },
  eRRDEPOSITSDISABLED: {
    isOk: false,
    value: 900_005n
  },
  eRRINSUFFICIENTIDLE: {
    isOk: false,
    value: 900_001n
  },
  eRRMINSHARES: {
    isOk: false,
    value: 900_002n
  },
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 900_003n
  },
  depositsEnabled: true,
  owner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  ratio: 100_000_000n,
  reserveBalance: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'stacking-dao-mock',
  },
stbtcToken: {
  "functions": {
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">], Response<boolean, bigint>>,
    burnForProtocol: {"name":"burn-for-protocol","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    setAuthorizedContract: {"name":"set-authorized-contract","access":"public","args":[{"name":"contract","type":"principal"},{"name":"authorized","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contract: TypedAbiArg<string, "contract">, authorized: TypedAbiArg<boolean, "authorized">], Response<boolean, bigint>>,
    setContractOwner: {"name":"set-contract-owner","access":"public","args":[{"name":"new-owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newOwner: TypedAbiArg<string, "newOwner">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":16}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    authorizedContracts: {"name":"authorized-contracts","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    DECIMALS: {
  name: 'DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
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
    ERR_NOT_TOKEN_OWNER: {
  name: 'ERR-NOT-TOKEN-OWNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    NAME: {
  name: 'NAME',
  type: {
    'string-ascii': {
      length: 16
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    SYMBOL: {
  name: 'SYMBOL',
  type: {
    'string-ascii': {
      length: 5
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    TOKEN_URI: {
  name: 'TOKEN-URI',
  type: {
    'string-utf8': {
      length: 44
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    contractOwner: {
  name: 'contract-owner',
  type: 'principal',
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
  DECIMALS: 8n,
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 401n
  },
  eRRNOTTOKENOWNER: {
    isOk: false,
    value: 4n
  },
  NAME: 'Stacking DAO BTC',
  SYMBOL: 'stBTC',
  tOKENURI: 'https://app.stackingdao.com/stbtc-token.json',
  contractOwner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  tokenUri: 'https://app.stackingdao.com/stbtc-token.json'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"stbtc"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'stbtc-token',
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
  "fungible_tokens":[{"name":"ststx"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[{"name":"ststxbtc"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[{"name":"usdc"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[{"name":"usdh"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  lastUpdate: 1_788_354_749n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'vault-sbtc',
  },
vaultStbtc: {
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
    ERR_NO_DEBT: {
  name: 'ERR-NO-DEBT',
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
  DECIMALS: 8n,
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
    value: 802_023n
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
  eRRNODEBT: {
    isOk: false,
    value: 802_024n
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
  NAME: 'Zest stBTC',
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  PRECISION: 100_000_000n,
  sECONDSPERYEARBPS: 315_360_000_000n,
  SYMBOL: 'zstBTC',
  UNDERLYING: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token',
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
  lastUpdate: 1_788_355_079n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'vault-stbtc',
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
  lastUpdate: 1_788_355_019n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  lastUpdate: 1_788_355_039n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  lastUpdate: 1_788_354_739n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  lastUpdate: 1_788_354_809n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
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
  lastUpdate: 1_788_354_889n,
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
  "fungible_tokens":[{"name":"zft"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'vault-usdh',
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
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'wstx',
  },
zvEngineStbtc0: {
  "functions": {
    collFold: {"name":"coll-fold","access":"private","args":[{"name":"e","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"amount","type":"uint128"}]}},{"name":"acc","type":{"tuple":[{"name":"id","type":"uint128"},{"name":"ok","type":"bool"},{"name":"sum","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"id","type":"uint128"},{"name":"ok","type":"bool"},{"name":"sum","type":"uint128"}]}}} as TypedAbiFunction<[e: TypedAbiArg<{
  "aid": number | bigint;
  "amount": number | bigint;
}, "e">, acc: TypedAbiArg<{
  "id": number | bigint;
  "ok": boolean;
  "sum": number | bigint;
}, "acc">], {
  "id": bigint;
  "ok": boolean;
  "sum": bigint;
}>,
    computeGrossNav: {"name":"compute-gross-nav","access":"private","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    findDebt: {"name":"find-debt","access":"private","args":[{"name":"e","type":{"tuple":[{"name":"aid","type":"uint128"},{"name":"scaled","type":"uint128"}]}},{"name":"acc","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[e: TypedAbiArg<{
  "aid": number | bigint;
  "scaled": number | bigint;
}, "e">, acc: TypedAbiArg<number | bigint, "acc">], bigint>,
    livePrice: {"name":"live-price","access":"private","args":[{"name":"gross","type":"uint128"},{"name":"supply","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[gross: TypedAbiArg<number | bigint, "gross">, supply: TypedAbiArg<number | bigint, "supply">], bigint>,
    mulDivUp: {"name":"mul-div-up","access":"private","args":[{"name":"a","type":"uint128"},{"name":"b","type":"uint128"},{"name":"d","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[a: TypedAbiArg<number | bigint, "a">, b: TypedAbiArg<number | bigint, "b">, d: TypedAbiArg<number | bigint, "d">], bigint>,
    cancelRedeem: {"name":"cancel-redeem","access":"public","args":[{"name":"claim-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[claimId: TypedAbiArg<number | bigint, "claimId">], Response<bigint, bigint>>,
    crystallizeFees: {"name":"crystallize-fees","access":"public","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"fee-shares","type":"uint128"},{"name":"mgmt","type":"uint128"},{"name":"perf","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "feeShares": bigint;
  "mgmt": bigint;
  "perf": bigint;
}, bigint>>,
    deposit: {"name":"deposit","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"min-shares-out","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, minSharesOut: TypedAbiArg<number | bigint, "minSharesOut">], Response<bigint, bigint>>,
    depositSbtc: {"name":"deposit-sbtc","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"min-shares-out","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, minSharesOut: TypedAbiArg<number | bigint, "minSharesOut">], Response<bigint, bigint>>,
    fundClaim: {"name":"fund-claim","access":"public","args":[{"name":"claim-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[claimId: TypedAbiArg<number | bigint, "claimId">], Response<bigint, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[{"name":"token","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">], Response<boolean, bigint>>,
    redeem: {"name":"redeem","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"claim-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, claimId: TypedAbiArg<number | bigint, "claimId">], Response<bigint, bigint>>,
    requestRedeem: {"name":"request-redeem","access":"public","args":[{"name":"assets","type":"uint128"},{"name":"is-express","type":"bool"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[assets: TypedAbiArg<number | bigint, "assets">, isExpress: TypedAbiArg<boolean, "isExpress">], Response<bigint, bigint>>,
    convertToAssets: {"name":"convert-to-assets","access":"read_only","args":[{"name":"shares","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[shares: TypedAbiArg<number | bigint, "shares">], Response<bigint, bigint>>,
    convertToShares: {"name":"convert-to-shares","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, bigint>>,
    getNetAssets: {"name":"get-net-assets","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    getSharePrice: {"name":"get-share-price","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    previewDeposit: {"name":"preview-deposit","access":"read_only","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<bigint, bigint>>,
    previewRedeem: {"name":"preview-redeem","access":"read_only","args":[{"name":"shares","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[shares: TypedAbiArg<number | bigint, "shares">], Response<bigint, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BPS_BASE: {
  name: 'BPS-BASE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    DEAD_SHARES: {
  name: 'DEAD-SHARES',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ALREADY_FUNDED: {
  name: 'ERR-ALREADY-FUNDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ALREADY_INIT: {
  name: 'ERR-ALREADY-INIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_BELOW_MIN: {
  name: 'ERR-BELOW-MIN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_CANCEL_EXPRESS: {
  name: 'ERR-CANCEL-EXPRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_CAP_EXCEEDED: {
  name: 'ERR-CAP-EXCEEDED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_EXPRESS_DISABLED: {
  name: 'ERR-EXPRESS-DISABLED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_CLAIM: {
  name: 'ERR-NO-CLAIM',
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
    ERR_NOT_COOLED_DOWN: {
  name: 'ERR-NOT-COOLED-DOWN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_FUNDED: {
  name: 'ERR-NOT-FUNDED',
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
    ERR_RATIO_OOB: {
  name: 'ERR-RATIO-OOB',
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
    ERR_UNEXPECTED_COLLATERAL: {
  name: 'ERR-UNEXPECTED-COLLATERAL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_ZERO_SHARES: {
  name: 'ERR-ZERO-SHARES',
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
    MAX_RATIO: {
  name: 'MAX-RATIO',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAXU128: {
  name: 'MAX-U128',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MIN_RATIO: {
  name: 'MIN-RATIO',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    NULL_ADDRESS: {
  name: 'NULL-ADDRESS',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    SBTC_AID: {
  name: 'SBTC-AID',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SECONDS_PER_YEAR: {
  name: 'SECONDS-PER-YEAR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SHARE_BASE: {
  name: 'SHARE-BASE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {
  bPSBASE: 10_000n,
  dEADSHARES: 1_000n,
  eRRALREADYFUNDED: {
    isOk: false,
    value: 870_006n
  },
  eRRALREADYINIT: {
    isOk: false,
    value: 870_019n
  },
  eRRBELOWMIN: {
    isOk: false,
    value: 870_003n
  },
  eRRCANCELEXPRESS: {
    isOk: false,
    value: 870_009n
  },
  eRRCAPEXCEEDED: {
    isOk: false,
    value: 870_002n
  },
  eRREXPRESSDISABLED: {
    isOk: false,
    value: 870_015n
  },
  eRRNOCLAIM: {
    isOk: false,
    value: 870_004n
  },
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 870_008n
  },
  eRRNOTCOOLEDDOWN: {
    isOk: false,
    value: 870_005n
  },
  eRRNOTFUNDED: {
    isOk: false,
    value: 870_007n
  },
  eRRPAUSED: {
    isOk: false,
    value: 870_001n
  },
  eRRRATIOOOB: {
    isOk: false,
    value: 870_018n
  },
  eRRSLIPPAGE: {
    isOk: false,
    value: 870_016n
  },
  eRRUNEXPECTEDCOLLATERAL: {
    isOk: false,
    value: 870_020n
  },
  eRRZEROSHARES: {
    isOk: false,
    value: 870_014n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  mAXRATIO: 200_000_000n,
  mAXU128: 340_282_366_920_938_463_463_374_607_431_768_211_455n,
  mINRATIO: 50_000_000n,
  nULLADDRESS: 'ST000000000000000000002AMW42H',
  sBTCAID: 2n,
  sECONDSPERYEAR: 31_536_000n,
  sHAREBASE: 100_000_000n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'zv-engine-stbtc-0',
  },
zvOpsStbtc0: {
  "functions": {
    currentDebtActual: {"name":"current-debt-actual","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    currentDebtScaled: {"name":"current-debt-scaled","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    sweepSbtcResidual: {"name":"sweep-sbtc-residual","access":"private","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    addCollateral: {"name":"add-collateral","access":"public","args":[{"name":"collateral-ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[collateralFt: TypedAbiArg<string, "collateralFt">, amount: TypedAbiArg<number | bigint, "amount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    borrowMore: {"name":"borrow-more","access":"public","args":[{"name":"borrow-ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[borrowFt: TypedAbiArg<string, "borrowFt">, amount: TypedAbiArg<number | bigint, "amount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    closePosition: {"name":"close-position","access":"public","args":[{"name":"borrow-ft","type":"trait_reference"},{"name":"vault-ft","type":"trait_reference"},{"name":"repay-amount","type":"uint128"},{"name":"collateral-amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[borrowFt: TypedAbiArg<string, "borrowFt">, vaultFt: TypedAbiArg<string, "vaultFt">, repayAmount: TypedAbiArg<number | bigint, "repayAmount">, collateralAmount: TypedAbiArg<number | bigint, "collateralAmount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    depositYield: {"name":"deposit-yield","access":"public","args":[{"name":"collateral-ft","type":"trait_reference"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[collateralFt: TypedAbiArg<string, "collateralFt">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    openPosition: {"name":"open-position","access":"public","args":[{"name":"collateral-ft","type":"trait_reference"},{"name":"borrow-ft","type":"trait_reference"},{"name":"collateral-amount","type":"uint128"},{"name":"borrow-amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[collateralFt: TypedAbiArg<string, "collateralFt">, borrowFt: TypedAbiArg<string, "borrowFt">, collateralAmount: TypedAbiArg<number | bigint, "collateralAmount">, borrowAmount: TypedAbiArg<number | bigint, "borrowAmount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    removeCollateral: {"name":"remove-collateral","access":"public","args":[{"name":"vault-ft","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"price-feeds","type":{"optional":{"list":{"type":{"buffer":{"length":8192}},"length":3}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[vaultFt: TypedAbiArg<string, "vaultFt">, amount: TypedAbiArg<number | bigint, "amount">, priceFeeds: TypedAbiArg<Uint8Array[] | null, "priceFeeds">], Response<boolean, bigint>>,
    repayOnly: {"name":"repay-only","access":"public","args":[{"name":"borrow-ft","type":"trait_reference"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[borrowFt: TypedAbiArg<string, "borrowFt">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    restackOpsSbtc: {"name":"restack-ops-sbtc","access":"public","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    stackSbtcToState: {"name":"stack-sbtc-to-state","access":"public","args":[{"name":"sbtc-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[sbtcAmount: TypedAbiArg<number | bigint, "sbtcAmount">], Response<bigint, bigint>>,
    sweepOpsStbtc: {"name":"sweep-ops-stbtc","access":"public","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    unstackAndRepay: {"name":"unstack-and-repay","access":"public","args":[{"name":"borrow-ft","type":"trait_reference"},{"name":"stbtc-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[borrowFt: TypedAbiArg<string, "borrowFt">, stbtcAmount: TypedAbiArg<number | bigint, "stbtcAmount">], Response<bigint, bigint>>,
    unstackToState: {"name":"unstack-to-state","access":"public","args":[{"name":"stbtc-amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[stbtcAmount: TypedAbiArg<number | bigint, "stbtcAmount">], Response<bigint, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BORROW_TOKEN: {
  name: 'BORROW-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    BPS: {
  name: 'BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    COLLATERAL_TOKEN: {
  name: 'COLLATERAL-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    COLLATERAL_VAULT: {
  name: 'COLLATERAL-VAULT',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_BAD_CONVERSION: {
  name: 'ERR-BAD-CONVERSION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEBT_REMAINS: {
  name: 'ERR-DEBT-REMAINS',
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
    ERR_NOTHING_TO_SWEEP: {
  name: 'ERR-NOTHING-TO-SWEEP',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_OVER_UNSTACK: {
  name: 'ERR-OVER-UNSTACK',
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
    ERR_TRANSFER_FAILED: {
  name: 'ERR-TRANSFER-FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_WRONG_TOKEN: {
  name: 'ERR-WRONG-TOKEN',
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
    MAX_CLOSE_OVERSHOOT_BPS: {
  name: 'MAX-CLOSE-OVERSHOOT-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MIN_UNWIND_RATE_BPS: {
  name: 'MIN-UNWIND-RATE-BPS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SBTC_ASSET_ID: {
  name: 'SBTC-ASSET-ID',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STACKING_DAO_CORE: {
  name: 'STACKING-DAO-CORE',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>
  },
  constants: {
  bORROWTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc',
  BPS: 10_000n,
  cOLLATERALTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token',
  cOLLATERALVAULT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stbtc',
  eRRBADCONVERSION: {
    isOk: false,
    value: 880_006n
  },
  eRRDEBTREMAINS: {
    isOk: false,
    value: 880_007n
  },
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 880_001n
  },
  eRRNOTHINGTOSWEEP: {
    isOk: false,
    value: 880_005n
  },
  eRROVERUNSTACK: {
    isOk: false,
    value: 880_008n
  },
  eRRPAUSED: {
    isOk: false,
    value: 880_002n
  },
  eRRTRANSFERFAILED: {
    isOk: false,
    value: 880_003n
  },
  eRRWRONGTOKEN: {
    isOk: false,
    value: 880_004n
  },
  iNDEXPRECISION: 1_000_000_000_000n,
  mAXCLOSEOVERSHOOTBPS: 20_000n,
  mINUNWINDRATEBPS: 9_500n,
  sBTCASSETID: 2n,
  sTACKINGDAOCORE: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stacking-dao-mock'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'zv-ops-stbtc-0',
  },
zvStateStbtc0: {
  "functions": {
    addClaimLiability: {"name":"add-claim-liability","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    addDeposited: {"name":"add-deposited","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    claimOwnership: {"name":"claim-ownership","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    confirmPrincipalUpdate: {"name":"confirm-principal-update","access":"public","args":[{"name":"key","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<Uint8Array, "key">], Response<boolean, bigint>>,
    confirmUintUpdate: {"name":"confirm-uint-update","access":"public","args":[{"name":"key","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<Uint8Array, "key">], Response<boolean, bigint>>,
    deleteClaim: {"name":"delete-claim","access":"public","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<boolean, bigint>>,
    nextClaimId: {"name":"next-claim-id","access":"public","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[], Response<bigint, bigint>>,
    pauseVault: {"name":"pause-vault","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    receiveSbtcFromOps: {"name":"receive-sbtc-from-ops","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">], Response<boolean, bigint>>,
    receiveYieldCollateral: {"name":"receive-yield-collateral","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">], Response<boolean, bigint>>,
    requestOwnerTransfer: {"name":"request-owner-transfer","access":"public","args":[{"name":"new-owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newOwner: TypedAbiArg<string, "newOwner">], Response<boolean, bigint>>,
    requestPrincipalUpdate: {"name":"request-principal-update","access":"public","args":[{"name":"key","type":{"buffer":{"length":1}}},{"name":"value","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<Uint8Array, "key">, value: TypedAbiArg<string, "value">], Response<boolean, bigint>>,
    requestUintUpdate: {"name":"request-uint-update","access":"public","args":[{"name":"key","type":{"buffer":{"length":1}}},{"name":"value","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<Uint8Array, "key">, value: TypedAbiArg<number | bigint, "value">], Response<boolean, bigint>>,
    setClaim: {"name":"set-claim","access":"public","args":[{"name":"id","type":"uint128"},{"name":"claim","type":{"tuple":[{"name":"assets","type":{"optional":"uint128"}},{"name":"fee","type":{"optional":"uint128"}},{"name":"fee-bps","type":"uint128"},{"name":"is-express","type":"bool"},{"name":"share-price","type":{"optional":"uint128"}},{"name":"shares","type":"uint128"},{"name":"ts","type":"uint128"},{"name":"user","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, claim: TypedAbiArg<{
  "assets": number | bigint | null;
  "fee": number | bigint | null;
  "feeBps": number | bigint;
  "isExpress": boolean;
  "sharePrice": number | bigint | null;
  "shares": number | bigint;
  "ts": number | bigint;
  "user": string;
}, "claim">], Response<boolean, bigint>>,
    setDepositCap: {"name":"set-deposit-cap","access":"public","args":[{"name":"value","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[value: TypedAbiArg<number | bigint, "value">], Response<boolean, bigint>>,
    setDepositEnabled: {"name":"set-deposit-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setExpressEnabled: {"name":"set-express-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setFeeAnchors: {"name":"set-fee-anchors","access":"public","args":[{"name":"new-hwm","type":"uint128"},{"name":"new-ts","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newHwm: TypedAbiArg<number | bigint, "newHwm">, newTs: TypedAbiArg<number | bigint, "newTs">], Response<boolean, bigint>>,
    setHotRole: {"name":"set-hot-role","access":"public","args":[{"name":"key","type":{"buffer":{"length":1}}},{"name":"value","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[key: TypedAbiArg<Uint8Array, "key">, value: TypedAbiArg<string, "value">], Response<boolean, bigint>>,
    setRedeemEnabled: {"name":"set-redeem-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setTimelockDuration: {"name":"set-timelock-duration","access":"public","args":[{"name":"duration","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[duration: TypedAbiArg<number | bigint, "duration">], Response<boolean, bigint>>,
    setTradingEnabled: {"name":"set-trading-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    setVaultEnabled: {"name":"set-vault-enabled","access":"public","args":[{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    subClaimLiability: {"name":"sub-claim-liability","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    subDeposited: {"name":"sub-deposited","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transferCollateralIn: {"name":"transfer-collateral-in","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">], Response<boolean, bigint>>,
    transferCollateralOut: {"name":"transfer-collateral-out","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    transferCollateralToOps: {"name":"transfer-collateral-to-ops","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transferSbtcIn: {"name":"transfer-sbtc-in","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">], Response<boolean, bigint>>,
    transferSbtcToOps: {"name":"transfer-sbtc-to-ops","access":"public","args":[{"name":"token","type":"trait_reference"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[token: TypedAbiArg<string, "token">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    getClaim: {"name":"get-claim","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"assets","type":{"optional":"uint128"}},{"name":"fee","type":{"optional":"uint128"}},{"name":"fee-bps","type":"uint128"},{"name":"is-express","type":"bool"},{"name":"share-price","type":{"optional":"uint128"}},{"name":"shares","type":"uint128"},{"name":"ts","type":"uint128"},{"name":"user","type":"principal"}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "assets": bigint | null;
  "fee": bigint | null;
  "feeBps": bigint;
  "isExpress": boolean;
  "sharePrice": bigint | null;
  "shares": bigint;
  "ts": bigint;
  "user": string;
} | null>,
    getCollateralToken: {"name":"get-collateral-token","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getDepositConfig: {"name":"get-deposit-config","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"deposit-cap","type":"uint128"},{"name":"deposit-enabled","type":"bool"},{"name":"min-deposit","type":"uint128"},{"name":"net-deposited","type":"uint128"},{"name":"vault-enabled","type":"bool"}]}}} as TypedAbiFunction<[], {
  "depositCap": bigint;
  "depositEnabled": boolean;
  "minDeposit": bigint;
  "netDeposited": bigint;
  "vaultEnabled": boolean;
}>,
    getFeeConfig: {"name":"get-fee-config","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"fee-recipient","type":"principal"},{"name":"hwm-per-share","type":"uint128"},{"name":"last-fee-ts","type":"uint128"},{"name":"mgmt-fee-bps","type":"uint128"},{"name":"perf-fee-bps","type":"uint128"}]}}} as TypedAbiFunction<[], {
  "feeRecipient": string;
  "hwmPerShare": bigint;
  "lastFeeTs": bigint;
  "mgmtFeeBps": bigint;
  "perfFeeBps": bigint;
}>,
    getFeeRecipient: {"name":"get-fee-recipient","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getFundedClaimLiability: {"name":"get-funded-claim-liability","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getHwmPerShare: {"name":"get-hwm-per-share","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getLastFeeTs: {"name":"get-last-fee-ts","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getRedeemConfig: {"name":"get-redeem-config","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"cooldown","type":"uint128"},{"name":"exit-fee-bps","type":"uint128"},{"name":"express-cooldown","type":"uint128"},{"name":"express-enabled","type":"bool"},{"name":"express-fee-bps","type":"uint128"},{"name":"funded-claim-liability","type":"uint128"},{"name":"min-redeem","type":"uint128"},{"name":"redeem-enabled","type":"bool"},{"name":"vault-enabled","type":"bool"}]}}} as TypedAbiFunction<[], {
  "cooldown": bigint;
  "exitFeeBps": bigint;
  "expressCooldown": bigint;
  "expressEnabled": boolean;
  "expressFeeBps": bigint;
  "fundedClaimLiability": bigint;
  "minRedeem": bigint;
  "redeemEnabled": boolean;
  "vaultEnabled": boolean;
}>,
    getTradingEnabled: {"name":"get-trading-enabled","access":"read_only","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    getVaultEnabled: {"name":"get-vault-enabled","access":"read_only","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    isEngine: {"name":"is-engine","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isGuardian: {"name":"is-guardian","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isManagerOrEngine: {"name":"is-manager-or-engine","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isOps: {"name":"is-ops","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isOwner: {"name":"is-owner","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isRewarder: {"name":"is-rewarder","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>,
    isTrader: {"name":"is-trader","access":"read_only","args":[{"name":"caller","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[caller: TypedAbiArg<string, "caller">], boolean>
  },
  "maps": {
    claims: {"name":"claims","key":{"tuple":[{"name":"claim-id","type":"uint128"}]},"value":{"tuple":[{"name":"assets","type":{"optional":"uint128"}},{"name":"fee","type":{"optional":"uint128"}},{"name":"fee-bps","type":"uint128"},{"name":"is-express","type":"bool"},{"name":"share-price","type":{"optional":"uint128"}},{"name":"shares","type":"uint128"},{"name":"ts","type":"uint128"},{"name":"user","type":"principal"}]}} as TypedAbiMap<{
  "claimId": number | bigint;
}, {
  "assets": bigint | null;
  "fee": bigint | null;
  "feeBps": bigint;
  "isExpress": boolean;
  "sharePrice": bigint | null;
  "shares": bigint;
  "ts": bigint;
  "user": string;
}>,
    pendingPrincipalUpdates: {"name":"pending-principal-updates","key":{"tuple":[{"name":"key","type":{"buffer":{"length":1}}}]},"value":{"tuple":[{"name":"activation-ts","type":"uint128"},{"name":"value","type":"principal"}]}} as TypedAbiMap<{
  "key": Uint8Array;
}, {
  "activationTs": bigint;
  "value": string;
}>,
    pendingUintUpdates: {"name":"pending-uint-updates","key":{"tuple":[{"name":"key","type":{"buffer":{"length":1}}}]},"value":{"tuple":[{"name":"activation-ts","type":"uint128"},{"name":"value","type":"uint128"}]}} as TypedAbiMap<{
  "key": Uint8Array;
}, {
  "activationTs": bigint;
  "value": bigint;
}>
  },
  "variables": {
    BPS_BASE: {
  name: 'BPS-BASE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    COLLATERAL_TOKEN: {
  name: 'COLLATERAL-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
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
    ERR_INVALID_KEY: {
  name: 'ERR-INVALID-KEY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_CLAIM: {
  name: 'ERR-NO-CLAIM',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_PENDING_UPDATE: {
  name: 'ERR-NO-PENDING-UPDATE',
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
    ERR_TIMELOCK_NOT_READY: {
  name: 'ERR-TIMELOCK-NOT-READY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_WRONG_TOKEN: {
  name: 'ERR-WRONG-TOKEN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    KEY_COOLDOWN: {
  name: 'KEY-COOLDOWN',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_ENGINE: {
  name: 'KEY-ENGINE',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_EXIT_FEE_BPS: {
  name: 'KEY-EXIT-FEE-BPS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_EXPRESS_COOLDOWN: {
  name: 'KEY-EXPRESS-COOLDOWN',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_EXPRESS_FEE_BPS: {
  name: 'KEY-EXPRESS-FEE-BPS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_FEE_RECIPIENT: {
  name: 'KEY-FEE-RECIPIENT',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_GUARDIAN: {
  name: 'KEY-GUARDIAN',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_MANAGER: {
  name: 'KEY-MANAGER',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_MGMT_FEE_BPS: {
  name: 'KEY-MGMT-FEE-BPS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_MIN_DEPOSIT: {
  name: 'KEY-MIN-DEPOSIT',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_MIN_REDEEM: {
  name: 'KEY-MIN-REDEEM',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_OPS: {
  name: 'KEY-OPS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_PERF_FEE_BPS: {
  name: 'KEY-PERF-FEE-BPS',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_REWARDER: {
  name: 'KEY-REWARDER',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    KEY_TRADER: {
  name: 'KEY-TRADER',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    MAX_COOLDOWN: {
  name: 'MAX-COOLDOWN',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_EXIT_FEE: {
  name: 'MAX-EXIT-FEE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_EXPRESS_FEE: {
  name: 'MAX-EXPRESS-FEE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_MGMT_FEE: {
  name: 'MAX-MGMT-FEE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_PERF_FEE: {
  name: 'MAX-PERF-FEE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_TIMELOCK: {
  name: 'MAX-TIMELOCK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MIN_TIMELOCK: {
  name: 'MIN-TIMELOCK',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PCT_BASE: {
  name: 'PCT-BASE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    SBTC_TOKEN: {
  name: 'SBTC-TOKEN',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    SHARE_BASE: {
  name: 'SHARE-BASE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STX_WRAPPER_CONTRACT: {
  name: 'STX-WRAPPER-CONTRACT',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    authorizedEngine: {
  name: 'authorized-engine',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    authorizedOps: {
  name: 'authorized-ops',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    claimCounter: {
  name: 'claim-counter',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    cooldown: {
  name: 'cooldown',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    depositCap: {
  name: 'deposit-cap',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    depositEnabled: {
  name: 'deposit-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    exitFeeBps: {
  name: 'exit-fee-bps',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    expressCooldown: {
  name: 'express-cooldown',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    expressEnabled: {
  name: 'express-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    expressFeeBps: {
  name: 'express-fee-bps',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    feeRecipient: {
  name: 'fee-recipient',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    fundedClaimLiability: {
  name: 'funded-claim-liability',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    guardian: {
  name: 'guardian',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    hwmPerShare: {
  name: 'hwm-per-share',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    lastFeeTs: {
  name: 'last-fee-ts',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    manager: {
  name: 'manager',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    mgmtFeeBps: {
  name: 'mgmt-fee-bps',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    minDeposit: {
  name: 'min-deposit',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    minRedeem: {
  name: 'min-redeem',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    netDeposited: {
  name: 'net-deposited',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    owner: {
  name: 'owner',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    pendingOwner: {
  name: 'pending-owner',
  type: {
    optional: 'principal'
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    perfFeeBps: {
  name: 'perf-fee-bps',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    redeemEnabled: {
  name: 'redeem-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    rewarder: {
  name: 'rewarder',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    timelockDuration: {
  name: 'timelock-duration',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    trader: {
  name: 'trader',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    tradingEnabled: {
  name: 'trading-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    vaultEnabled: {
  name: 'vault-enabled',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>
  },
  constants: {
  bPSBASE: 10_000n,
  cOLLATERALTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token',
  eRRINSUFFICIENTLIQUIDITY: {
    isOk: false,
    value: 860_007n
  },
  eRRINVALIDKEY: {
    isOk: false,
    value: 860_005n
  },
  eRRNOCLAIM: {
    isOk: false,
    value: 860_002n
  },
  eRRNOPENDINGUPDATE: {
    isOk: false,
    value: 860_004n
  },
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 860_001n
  },
  eRRTIMELOCKNOTREADY: {
    isOk: false,
    value: 860_003n
  },
  eRRWRONGTOKEN: {
    isOk: false,
    value: 860_006n
  },
  kEYCOOLDOWN: Uint8Array.from([5]),
  kEYENGINE: Uint8Array.from([20]),
  kEYEXITFEEBPS: Uint8Array.from([12]),
  kEYEXPRESSCOOLDOWN: Uint8Array.from([6]),
  kEYEXPRESSFEEBPS: Uint8Array.from([13]),
  kEYFEERECIPIENT: Uint8Array.from([15]),
  kEYGUARDIAN: Uint8Array.from([19]),
  kEYMANAGER: Uint8Array.from([18]),
  kEYMGMTFEEBPS: Uint8Array.from([10]),
  kEYMINDEPOSIT: Uint8Array.from([3]),
  kEYMINREDEEM: Uint8Array.from([4]),
  kEYOPS: Uint8Array.from([21]),
  kEYPERFFEEBPS: Uint8Array.from([11]),
  kEYREWARDER: Uint8Array.from([17]),
  kEYTRADER: Uint8Array.from([16]),
  mAXCOOLDOWN: 2_592_000n,
  mAXEXITFEE: 100n,
  mAXEXPRESSFEE: 200n,
  mAXMGMTFEE: 55n,
  mAXPERFFEE: 3_000n,
  mAXTIMELOCK: 2_592_000n,
  mINTIMELOCK: 86_400n,
  pCTBASE: 100n,
  sBTCTOKEN: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc',
  sHAREBASE: 100_000_000n,
  sTXWRAPPERCONTRACT: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx',
  authorizedEngine: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-engine-stbtc-0',
  authorizedOps: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-ops-stbtc-0',
  claimCounter: 0n,
  cooldown: 259_200n,
  depositCap: 0n,
  depositEnabled: true,
  exitFeeBps: 0n,
  expressCooldown: 14_400n,
  expressEnabled: false,
  expressFeeBps: 50n,
  feeRecipient: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  fundedClaimLiability: 0n,
  guardian: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  hwmPerShare: 100_000_000n,
  lastFeeTs: 0n,
  manager: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  mgmtFeeBps: 0n,
  minDeposit: 100n,
  minRedeem: 100n,
  netDeposited: 0n,
  owner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  pendingOwner: null,
  perfFeeBps: 1_000n,
  redeemEnabled: true,
  rewarder: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  timelockDuration: 86_400n,
  trader: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  tradingEnabled: true,
  vaultEnabled: true
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'zv-state-stbtc-0',
  },
zvTraits: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'zv-traits',
  },
zvstBTC: {
  "functions": {
    isAuthorized: {"name":"is-authorized","access":"private","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    setAuthorizedMinter: {"name":"set-authorized-minter","access":"public","args":[{"name":"new-minter","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newMinter: TypedAbiArg<string, "newMinter">], Response<boolean, bigint>>,
    setTokenName: {"name":"set-token-name","access":"public","args":[{"name":"value","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[value: TypedAbiArg<string, "value">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"value","type":{"string-utf8":{"length":256}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[value: TypedAbiArg<string, "value">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":7}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
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
    TOKEN_DECIMALS: {
  name: 'TOKEN-DECIMALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TOKEN_SYMBOL: {
  name: 'TOKEN-SYMBOL',
  type: {
    'string-ascii': {
      length: 7
    }
  },
  access: 'constant'
} as TypedAbiVariable<string>,
    authorizedMinter: {
  name: 'authorized-minter',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    'string-utf8': {
      length: 256
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>
  },
  constants: {
  eRRNOTAUTHORIZED: {
    isOk: false,
    value: 850_001n
  },
  tOKENDECIMALS: 8n,
  tOKENSYMBOL: 'zvstBTC',
  authorizedMinter: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-engine-stbtc-0',
  tokenName: 'Zest stBTC Strategy Vault',
  tokenUri: 'https://token-meta.s3.eu-central-1.amazonaws.com/zvstBTC.json'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"zvstbtc"}],"epoch":"Epoch40","clarity_version":"Clarity6",
  contractName: 'zvstBTC',
  }
} as const;

export const accounts = {"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"100000000000000"},"faucet":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"}} as const;

export const identifiers = {"assets":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","daoExecutor":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","daoMultisig":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","daoTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","daoTreasury":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","diaOracle":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle","egroup":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","ftTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","market":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","marketTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","marketVault":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","mockOracle":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","proposalCreateEgroupSbtcUsdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","proposalCreateMultipleEgroups":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","proposalInitAssets":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","proposalInitMarketVault":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","proposalInitVaults":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","proposalLazerRepoint":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-lazer-repoint","proposalProtocolInit":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","proposalSetMarketV1":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-market-v1","proposalSetPriceStaleness":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","proposalSetSbtcInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","proposalSetStxInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","proposalSetUsdcInterestRates":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","proposalTestZvClaimOwnership":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-claim-ownership","proposalTestZvOwnerConfig":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-owner-config","proposalTestZvSetMetadata":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-set-metadata","protocolData":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","pythLazerDecoderV1":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-decoder-v1","pythLazerOracle":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-oracle","pythLazerTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-traits","sbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","sbtcRegistry":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","sbtcToken":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token","stackingDaoMock":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stacking-dao-mock","stbtcToken":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token","ststx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","ststxbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","traitDiaOracle":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","usdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","usdh":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","vaultSbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","vaultStbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stbtc","vaultStstx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","vaultStstxbtc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","vaultStx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","vaultTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","vaultUsdc":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","vaultUsdh":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","wstx":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx","zvEngineStbtc0":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-engine-stbtc-0","zvOpsStbtc0":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-ops-stbtc-0","zvStateStbtc0":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-state-stbtc-0","zvTraits":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-traits","zvstBTC":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zvstBTC"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"assets":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.assets","testnet":null,"mainnet":null},"daoExecutor":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-executor","testnet":null,"mainnet":null},"daoMultisig":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-multisig","testnet":null,"mainnet":null},"daoTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-traits","testnet":null,"mainnet":null},"daoTreasury":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dao-treasury","testnet":null,"mainnet":null},"diaOracle":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dia-oracle","simnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle","testnet":null,"mainnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle"},"egroup":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.egroup","testnet":null,"mainnet":null},"ftTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","testnet":null,"mainnet":null},"market":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market","testnet":null,"mainnet":null},"marketTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-trait","testnet":null,"mainnet":null},"marketVault":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.market-vault","testnet":null,"mainnet":null},"mockOracle":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-oracle","testnet":null,"mainnet":null},"proposalCreateEgroupSbtcUsdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-egroup-sbtc-usdc","testnet":null,"mainnet":null},"proposalCreateMultipleEgroups":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-create-multiple-egroups","testnet":null,"mainnet":null},"proposalInitAssets":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-assets","testnet":null,"mainnet":null},"proposalInitMarketVault":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-market-vault","testnet":null,"mainnet":null},"proposalInitVaults":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-init-vaults","testnet":null,"mainnet":null},"proposalLazerRepoint":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-lazer-repoint","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-lazer-repoint","testnet":null,"mainnet":null},"proposalProtocolInit":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-protocol-init","testnet":null,"mainnet":null},"proposalSetMarketV1":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-market-v1","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-market-v1","testnet":null,"mainnet":null},"proposalSetPriceStaleness":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-price-staleness","testnet":null,"mainnet":null},"proposalSetSbtcInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-sbtc-interest-rates","testnet":null,"mainnet":null},"proposalSetStxInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-stx-interest-rates","testnet":null,"mainnet":null},"proposalSetUsdcInterestRates":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-set-usdc-interest-rates","testnet":null,"mainnet":null},"proposalTestZvClaimOwnership":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-claim-ownership","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-claim-ownership","testnet":null,"mainnet":null},"proposalTestZvOwnerConfig":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-owner-config","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-owner-config","testnet":null,"mainnet":null},"proposalTestZvSetMetadata":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-set-metadata","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proposal-test-zv-set-metadata","testnet":null,"mainnet":null},"protocolData":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.protocol-data","testnet":null,"mainnet":null},"pythLazerDecoderV1":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-decoder-v1","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-decoder-v1","testnet":null,"mainnet":null},"pythLazerOracle":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-oracle","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-oracle","testnet":null,"mainnet":null},"pythLazerTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pyth-lazer-traits","testnet":null,"mainnet":null},"sbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc","testnet":null,"mainnet":null},"sbtcRegistry":{"devnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","simnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","testnet":null,"mainnet":null},"sbtcToken":{"devnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token","simnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token","testnet":null,"mainnet":null},"stackingDaoMock":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stacking-dao-mock","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stacking-dao-mock","testnet":null,"mainnet":null},"stbtcToken":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.stbtc-token","testnet":null,"mainnet":null},"ststx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststx","testnet":null,"mainnet":null},"ststxbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ststxbtc","testnet":null,"mainnet":null},"traitDiaOracle":{"devnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","simnet":"SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.trait-dia-oracle","testnet":null,"mainnet":null},"usdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdc","testnet":null,"mainnet":null},"usdh":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.usdh","testnet":null,"mainnet":null},"vaultSbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-sbtc","testnet":null,"mainnet":null},"vaultStbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stbtc","testnet":null,"mainnet":null},"vaultStstx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststx","testnet":null,"mainnet":null},"vaultStstxbtc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-ststxbtc","testnet":null,"mainnet":null},"vaultStx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-stx","testnet":null,"mainnet":null},"vaultTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-traits","testnet":null,"mainnet":null},"vaultUsdc":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdc","testnet":null,"mainnet":null},"vaultUsdh":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.vault-usdh","testnet":null,"mainnet":null},"wstx":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.wstx","testnet":null,"mainnet":null},"zvEngineStbtc0":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-engine-stbtc-0","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-engine-stbtc-0","testnet":null,"mainnet":null},"zvOpsStbtc0":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-ops-stbtc-0","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-ops-stbtc-0","testnet":null,"mainnet":null},"zvStateStbtc0":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-state-stbtc-0","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-state-stbtc-0","testnet":null,"mainnet":null},"zvTraits":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-traits","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zv-traits","testnet":null,"mainnet":null},"zvstBTC":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zvstBTC","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.zvstBTC","testnet":null,"mainnet":null}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  