import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

const USDT0 = '0x779ded0c9e1022225f8e0630b35a9b54be713736'.toLowerCase()

export const FACTORY_ADDRESS = '0x88f0a512ef09175d456bc9547f914f48c013e4aa'

export const REFERENCE_TOKEN = USDT0
export const STABLE_TOKEN_POOL = REFERENCE_TOKEN

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('2000')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

export const WHITELIST_TOKENS: string[] = [USDT0]

export const STABLE_COINS: string[] = [USDT0]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
