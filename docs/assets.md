# Assets

## assets.clar - Asset Registry

The asset registry manages all supported assets in the Zest Protocol. Each asset is assigned a unique ID and configured with oracle settings for price resolution.

### Asset registration
```clarity
(define-map registry uint 
  { 
    id: uint, 
    addr: principal, 
    decimals: uint,
    oracle: {
      type: (buff 1),
      ident: (buff 32),
      callcode: (optional (buff 1)),
      max-staleness: uint
    }
  })
(define-map reverse principal uint)
```

### Key Functions
- `insert`: Adds a new asset (max 64 assets, IDs 0-63)
- `lookup(id)`: Get asset by numeric ID
- `find(principal)`: Get asset by contract address
- `enable(asset, collateral)`: Enable asset for collateral or debt
- `disable(asset, collateral)`: Disable asset
- `status(id)`: Get collateral/debt status from bitmap

### Sequential ID System

Asset IDs are auto-generated sequentially using a nonce counter:

```clarity
(define-data-var nonce uint u0)

(define-private (next-id)
  (let ((id (var-get nonce)))
    (var-set nonce (+ id u1))
    id))

;; First asset → ID 0
;; Second asset → ID 1
;; Third asset → ID 2
```

**What IDs Represent:**
- **Registration Order**: Order in which assets were added to the protocol
- **Bit Position**: Direct mapping to bitmap positions (ID = bit position)
- **Storage Key**: Compact 1-byte identifier (range: 0-63)

**ID to Bitmap Mapping:**
```
Asset ID 0 → Collateral bit 0,  Debt bit 64
Asset ID 1 → Collateral bit 1,  Debt bit 65
Asset ID 5 → Collateral bit 5,  Debt bit 69
Asset ID 63 → Collateral bit 63, Debt bit 127
```

**Why This Design:**
- **O(1) Lookups**: Direct map access via ID or principal
- **Efficient Masks**: Asset combinations represented as single uint
- **Compact Storage**: 1-byte IDs, 128-bit bitmap for 64 assets

### The Bitmap System
```
(define-data-var bitmap- uint u0)
```

#### How it works
- Single `uint` (128 bits) tracks asset states
- Each asset ID occupies **2 bits**:
    - Bit at position `id`: collateral enabled
    - Bit at position `id+64`: debt enabled

#### Example: Asset ID 5

- Bit 5: Can be used as collateral?
- Bit 69: Can be borrowed?

#### Functions

- `enable(asset, collateral)`: Sets bit for asset as collateral or debt
- `disable(asset, collateral)`: Clears bit
- `status(id)`: Returns `(collateral: bool, debt: bool)`

## Asset lifecycle

### 1. Asset Registration (assets.clar)

- DAO registers assets with `insert(ft, oracle)`
- Gets sequential ID (0, 1, 2, ...)

### 2. Asset Enablement (assets.clar)

- DAO enables assets: `enable(asset, collateral=true/false)`
- Updates global bitmap

### 3. Offboarding

- DAO disables assets: `disable(asset, collateral=true/false)`
