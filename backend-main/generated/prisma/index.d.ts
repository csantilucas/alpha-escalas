
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>
/**
 * Model Plantonistas
 * 
 */
export type Plantonistas = $Result.DefaultSelection<Prisma.$PlantonistasPayload>
/**
 * Model Registros
 * 
 */
export type Registros = $Result.DefaultSelection<Prisma.$RegistrosPayload>
/**
 * Model TomticketReportCache
 * 
 */
export type TomticketReportCache = $Result.DefaultSelection<Prisma.$TomticketReportCachePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeUsers: {
  atendente: 'atendente',
  admin: 'admin',
  gestor: 'gestor'
};

export type TypeUsers = (typeof TypeUsers)[keyof typeof TypeUsers]

}

export type TypeUsers = $Enums.TypeUsers

export const TypeUsers: typeof $Enums.TypeUsers

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Atendimentos
 * const atendimentos = await prisma.atendimento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Atendimentos
   * const atendimentos = await prisma.atendimento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantonistas`: Exposes CRUD operations for the **Plantonistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantonistas
    * const plantonistas = await prisma.plantonistas.findMany()
    * ```
    */
  get plantonistas(): Prisma.PlantonistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registros`: Exposes CRUD operations for the **Registros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registros
    * const registros = await prisma.registros.findMany()
    * ```
    */
  get registros(): Prisma.RegistrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tomticketReportCache`: Exposes CRUD operations for the **TomticketReportCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TomticketReportCaches
    * const tomticketReportCaches = await prisma.tomticketReportCache.findMany()
    * ```
    */
  get tomticketReportCache(): Prisma.TomticketReportCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Atendimento: 'Atendimento',
    Plantonistas: 'Plantonistas',
    Registros: 'Registros',
    TomticketReportCache: 'TomticketReportCache',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "atendimento" | "plantonistas" | "registros" | "tomticketReportCache" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Plantonistas: {
        payload: Prisma.$PlantonistasPayload<ExtArgs>
        fields: Prisma.PlantonistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantonistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantonistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          findFirst: {
            args: Prisma.PlantonistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantonistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          findMany: {
            args: Prisma.PlantonistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>[]
          }
          create: {
            args: Prisma.PlantonistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          createMany: {
            args: Prisma.PlantonistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantonistasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>[]
          }
          delete: {
            args: Prisma.PlantonistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          update: {
            args: Prisma.PlantonistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          deleteMany: {
            args: Prisma.PlantonistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantonistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantonistasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>[]
          }
          upsert: {
            args: Prisma.PlantonistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantonistasPayload>
          }
          aggregate: {
            args: Prisma.PlantonistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantonistas>
          }
          groupBy: {
            args: Prisma.PlantonistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantonistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantonistasCountArgs<ExtArgs>
            result: $Utils.Optional<PlantonistasCountAggregateOutputType> | number
          }
        }
      }
      Registros: {
        payload: Prisma.$RegistrosPayload<ExtArgs>
        fields: Prisma.RegistrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          findFirst: {
            args: Prisma.RegistrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          findMany: {
            args: Prisma.RegistrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>[]
          }
          create: {
            args: Prisma.RegistrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          createMany: {
            args: Prisma.RegistrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>[]
          }
          delete: {
            args: Prisma.RegistrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          update: {
            args: Prisma.RegistrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          deleteMany: {
            args: Prisma.RegistrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>[]
          }
          upsert: {
            args: Prisma.RegistrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrosPayload>
          }
          aggregate: {
            args: Prisma.RegistrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistros>
          }
          groupBy: {
            args: Prisma.RegistrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrosCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrosCountAggregateOutputType> | number
          }
        }
      }
      TomticketReportCache: {
        payload: Prisma.$TomticketReportCachePayload<ExtArgs>
        fields: Prisma.TomticketReportCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TomticketReportCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TomticketReportCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          findFirst: {
            args: Prisma.TomticketReportCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TomticketReportCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          findMany: {
            args: Prisma.TomticketReportCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>[]
          }
          create: {
            args: Prisma.TomticketReportCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          createMany: {
            args: Prisma.TomticketReportCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TomticketReportCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>[]
          }
          delete: {
            args: Prisma.TomticketReportCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          update: {
            args: Prisma.TomticketReportCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          deleteMany: {
            args: Prisma.TomticketReportCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TomticketReportCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TomticketReportCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>[]
          }
          upsert: {
            args: Prisma.TomticketReportCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomticketReportCachePayload>
          }
          aggregate: {
            args: Prisma.TomticketReportCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTomticketReportCache>
          }
          groupBy: {
            args: Prisma.TomticketReportCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<TomticketReportCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.TomticketReportCacheCountArgs<ExtArgs>
            result: $Utils.Optional<TomticketReportCacheCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    atendimento?: AtendimentoOmit
    plantonistas?: PlantonistasOmit
    registros?: RegistrosOmit
    tomticketReportCache?: TomticketReportCacheOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlantonistasCountOutputType
   */

  export type PlantonistasCountOutputType = {
    registros: number
  }

  export type PlantonistasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | PlantonistasCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * PlantonistasCountOutputType without action
   */
  export type PlantonistasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantonistasCountOutputType
     */
    select?: PlantonistasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantonistasCountOutputType without action
   */
  export type PlantonistasCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrosWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    registros: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | UserCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id: string | null
    ticketZpro: string | null
    ticketTomticket: string | null
    sincronizado: boolean | null
    clienteId: string | null
    cnpj: string | null
    atendente: string | null
    protocolo: string | null
    nomeContato: string | null
    tipoAtendimento: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id: string | null
    ticketZpro: string | null
    ticketTomticket: string | null
    sincronizado: boolean | null
    clienteId: string | null
    cnpj: string | null
    atendente: string | null
    protocolo: string | null
    nomeContato: string | null
    tipoAtendimento: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id: number
    ticketZpro: number
    ticketTomticket: number
    sincronizado: number
    clienteId: number
    cnpj: number
    atendente: number
    protocolo: number
    nomeContato: number
    tipoAtendimento: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AtendimentoMinAggregateInputType = {
    id?: true
    ticketZpro?: true
    ticketTomticket?: true
    sincronizado?: true
    clienteId?: true
    cnpj?: true
    atendente?: true
    protocolo?: true
    nomeContato?: true
    tipoAtendimento?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id?: true
    ticketZpro?: true
    ticketTomticket?: true
    sincronizado?: true
    clienteId?: true
    cnpj?: true
    atendente?: true
    protocolo?: true
    nomeContato?: true
    tipoAtendimento?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id?: true
    ticketZpro?: true
    ticketTomticket?: true
    sincronizado?: true
    clienteId?: true
    cnpj?: true
    atendente?: true
    protocolo?: true
    nomeContato?: true
    tipoAtendimento?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id: string
    ticketZpro: string | null
    ticketTomticket: string | null
    sincronizado: boolean
    clienteId: string | null
    cnpj: string
    atendente: string | null
    protocolo: string | null
    nomeContato: string | null
    tipoAtendimento: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketZpro?: boolean
    ticketTomticket?: boolean
    sincronizado?: boolean
    clienteId?: boolean
    cnpj?: boolean
    atendente?: boolean
    protocolo?: boolean
    nomeContato?: boolean
    tipoAtendimento?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketZpro?: boolean
    ticketTomticket?: boolean
    sincronizado?: boolean
    clienteId?: boolean
    cnpj?: boolean
    atendente?: boolean
    protocolo?: boolean
    nomeContato?: boolean
    tipoAtendimento?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketZpro?: boolean
    ticketTomticket?: boolean
    sincronizado?: boolean
    clienteId?: boolean
    cnpj?: boolean
    atendente?: boolean
    protocolo?: boolean
    nomeContato?: boolean
    tipoAtendimento?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id?: boolean
    ticketZpro?: boolean
    ticketTomticket?: boolean
    sincronizado?: boolean
    clienteId?: boolean
    cnpj?: boolean
    atendente?: boolean
    protocolo?: boolean
    nomeContato?: boolean
    tipoAtendimento?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketZpro" | "ticketTomticket" | "sincronizado" | "clienteId" | "cnpj" | "atendente" | "protocolo" | "nomeContato" | "tipoAtendimento" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["atendimento"]>

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketZpro: string | null
      ticketTomticket: string | null
      sincronizado: boolean
      clienteId: string | null
      cnpj: string
      atendente: string | null
      protocolo: string | null
      nomeContato: string | null
      tipoAtendimento: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id: FieldRef<"Atendimento", 'String'>
    readonly ticketZpro: FieldRef<"Atendimento", 'String'>
    readonly ticketTomticket: FieldRef<"Atendimento", 'String'>
    readonly sincronizado: FieldRef<"Atendimento", 'Boolean'>
    readonly clienteId: FieldRef<"Atendimento", 'String'>
    readonly cnpj: FieldRef<"Atendimento", 'String'>
    readonly atendente: FieldRef<"Atendimento", 'String'>
    readonly protocolo: FieldRef<"Atendimento", 'String'>
    readonly nomeContato: FieldRef<"Atendimento", 'String'>
    readonly tipoAtendimento: FieldRef<"Atendimento", 'String'>
    readonly status: FieldRef<"Atendimento", 'String'>
    readonly createdAt: FieldRef<"Atendimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Atendimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
  }


  /**
   * Model Plantonistas
   */

  export type AggregatePlantonistas = {
    _count: PlantonistasCountAggregateOutputType | null
    _avg: PlantonistasAvgAggregateOutputType | null
    _sum: PlantonistasSumAggregateOutputType | null
    _min: PlantonistasMinAggregateOutputType | null
    _max: PlantonistasMaxAggregateOutputType | null
  }

  export type PlantonistasAvgAggregateOutputType = {
    posicao: number | null
  }

  export type PlantonistasSumAggregateOutputType = {
    posicao: number | null
  }

  export type PlantonistasMinAggregateOutputType = {
    id: string | null
    nome: string | null
    posicao: number | null
    proxima_data: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlantonistasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    posicao: number | null
    proxima_data: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlantonistasCountAggregateOutputType = {
    id: number
    nome: number
    posicao: number
    proxima_data: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PlantonistasAvgAggregateInputType = {
    posicao?: true
  }

  export type PlantonistasSumAggregateInputType = {
    posicao?: true
  }

  export type PlantonistasMinAggregateInputType = {
    id?: true
    nome?: true
    posicao?: true
    proxima_data?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlantonistasMaxAggregateInputType = {
    id?: true
    nome?: true
    posicao?: true
    proxima_data?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlantonistasCountAggregateInputType = {
    id?: true
    nome?: true
    posicao?: true
    proxima_data?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PlantonistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantonistas to aggregate.
     */
    where?: PlantonistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantonistas to fetch.
     */
    orderBy?: PlantonistasOrderByWithRelationInput | PlantonistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantonistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantonistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantonistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantonistas
    **/
    _count?: true | PlantonistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantonistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantonistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantonistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantonistasMaxAggregateInputType
  }

  export type GetPlantonistasAggregateType<T extends PlantonistasAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantonistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantonistas[P]>
      : GetScalarType<T[P], AggregatePlantonistas[P]>
  }




  export type PlantonistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantonistasWhereInput
    orderBy?: PlantonistasOrderByWithAggregationInput | PlantonistasOrderByWithAggregationInput[]
    by: PlantonistasScalarFieldEnum[] | PlantonistasScalarFieldEnum
    having?: PlantonistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantonistasCountAggregateInputType | true
    _avg?: PlantonistasAvgAggregateInputType
    _sum?: PlantonistasSumAggregateInputType
    _min?: PlantonistasMinAggregateInputType
    _max?: PlantonistasMaxAggregateInputType
  }

  export type PlantonistasGroupByOutputType = {
    id: string
    nome: string
    posicao: number
    proxima_data: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PlantonistasCountAggregateOutputType | null
    _avg: PlantonistasAvgAggregateOutputType | null
    _sum: PlantonistasSumAggregateOutputType | null
    _min: PlantonistasMinAggregateOutputType | null
    _max: PlantonistasMaxAggregateOutputType | null
  }

  type GetPlantonistasGroupByPayload<T extends PlantonistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantonistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantonistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantonistasGroupByOutputType[P]>
            : GetScalarType<T[P], PlantonistasGroupByOutputType[P]>
        }
      >
    >


  export type PlantonistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    posicao?: boolean
    proxima_data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    registros?: boolean | Plantonistas$registrosArgs<ExtArgs>
    _count?: boolean | PlantonistasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantonistas"]>

  export type PlantonistasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    posicao?: boolean
    proxima_data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantonistas"]>

  export type PlantonistasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    posicao?: boolean
    proxima_data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantonistas"]>

  export type PlantonistasSelectScalar = {
    id?: boolean
    nome?: boolean
    posicao?: boolean
    proxima_data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PlantonistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "posicao" | "proxima_data" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["plantonistas"]>
  export type PlantonistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    registros?: boolean | Plantonistas$registrosArgs<ExtArgs>
    _count?: boolean | PlantonistasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantonistasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlantonistasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlantonistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plantonistas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      registros: Prisma.$RegistrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      posicao: number
      proxima_data: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["plantonistas"]>
    composites: {}
  }

  type PlantonistasGetPayload<S extends boolean | null | undefined | PlantonistasDefaultArgs> = $Result.GetResult<Prisma.$PlantonistasPayload, S>

  type PlantonistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantonistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantonistasCountAggregateInputType | true
    }

  export interface PlantonistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plantonistas'], meta: { name: 'Plantonistas' } }
    /**
     * Find zero or one Plantonistas that matches the filter.
     * @param {PlantonistasFindUniqueArgs} args - Arguments to find a Plantonistas
     * @example
     * // Get one Plantonistas
     * const plantonistas = await prisma.plantonistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantonistasFindUniqueArgs>(args: SelectSubset<T, PlantonistasFindUniqueArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plantonistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantonistasFindUniqueOrThrowArgs} args - Arguments to find a Plantonistas
     * @example
     * // Get one Plantonistas
     * const plantonistas = await prisma.plantonistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantonistasFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantonistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantonistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasFindFirstArgs} args - Arguments to find a Plantonistas
     * @example
     * // Get one Plantonistas
     * const plantonistas = await prisma.plantonistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantonistasFindFirstArgs>(args?: SelectSubset<T, PlantonistasFindFirstArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantonistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasFindFirstOrThrowArgs} args - Arguments to find a Plantonistas
     * @example
     * // Get one Plantonistas
     * const plantonistas = await prisma.plantonistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantonistasFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantonistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantonistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantonistas
     * const plantonistas = await prisma.plantonistas.findMany()
     * 
     * // Get first 10 Plantonistas
     * const plantonistas = await prisma.plantonistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantonistasWithIdOnly = await prisma.plantonistas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantonistasFindManyArgs>(args?: SelectSubset<T, PlantonistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plantonistas.
     * @param {PlantonistasCreateArgs} args - Arguments to create a Plantonistas.
     * @example
     * // Create one Plantonistas
     * const Plantonistas = await prisma.plantonistas.create({
     *   data: {
     *     // ... data to create a Plantonistas
     *   }
     * })
     * 
     */
    create<T extends PlantonistasCreateArgs>(args: SelectSubset<T, PlantonistasCreateArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantonistas.
     * @param {PlantonistasCreateManyArgs} args - Arguments to create many Plantonistas.
     * @example
     * // Create many Plantonistas
     * const plantonistas = await prisma.plantonistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantonistasCreateManyArgs>(args?: SelectSubset<T, PlantonistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plantonistas and returns the data saved in the database.
     * @param {PlantonistasCreateManyAndReturnArgs} args - Arguments to create many Plantonistas.
     * @example
     * // Create many Plantonistas
     * const plantonistas = await prisma.plantonistas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plantonistas and only return the `id`
     * const plantonistasWithIdOnly = await prisma.plantonistas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantonistasCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantonistasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plantonistas.
     * @param {PlantonistasDeleteArgs} args - Arguments to delete one Plantonistas.
     * @example
     * // Delete one Plantonistas
     * const Plantonistas = await prisma.plantonistas.delete({
     *   where: {
     *     // ... filter to delete one Plantonistas
     *   }
     * })
     * 
     */
    delete<T extends PlantonistasDeleteArgs>(args: SelectSubset<T, PlantonistasDeleteArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plantonistas.
     * @param {PlantonistasUpdateArgs} args - Arguments to update one Plantonistas.
     * @example
     * // Update one Plantonistas
     * const plantonistas = await prisma.plantonistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantonistasUpdateArgs>(args: SelectSubset<T, PlantonistasUpdateArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantonistas.
     * @param {PlantonistasDeleteManyArgs} args - Arguments to filter Plantonistas to delete.
     * @example
     * // Delete a few Plantonistas
     * const { count } = await prisma.plantonistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantonistasDeleteManyArgs>(args?: SelectSubset<T, PlantonistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantonistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantonistas
     * const plantonistas = await prisma.plantonistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantonistasUpdateManyArgs>(args: SelectSubset<T, PlantonistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantonistas and returns the data updated in the database.
     * @param {PlantonistasUpdateManyAndReturnArgs} args - Arguments to update many Plantonistas.
     * @example
     * // Update many Plantonistas
     * const plantonistas = await prisma.plantonistas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plantonistas and only return the `id`
     * const plantonistasWithIdOnly = await prisma.plantonistas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlantonistasUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantonistasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plantonistas.
     * @param {PlantonistasUpsertArgs} args - Arguments to update or create a Plantonistas.
     * @example
     * // Update or create a Plantonistas
     * const plantonistas = await prisma.plantonistas.upsert({
     *   create: {
     *     // ... data to create a Plantonistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plantonistas we want to update
     *   }
     * })
     */
    upsert<T extends PlantonistasUpsertArgs>(args: SelectSubset<T, PlantonistasUpsertArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantonistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasCountArgs} args - Arguments to filter Plantonistas to count.
     * @example
     * // Count the number of Plantonistas
     * const count = await prisma.plantonistas.count({
     *   where: {
     *     // ... the filter for the Plantonistas we want to count
     *   }
     * })
    **/
    count<T extends PlantonistasCountArgs>(
      args?: Subset<T, PlantonistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantonistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plantonistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantonistasAggregateArgs>(args: Subset<T, PlantonistasAggregateArgs>): Prisma.PrismaPromise<GetPlantonistasAggregateType<T>>

    /**
     * Group by Plantonistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantonistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantonistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantonistasGroupByArgs['orderBy'] }
        : { orderBy?: PlantonistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantonistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantonistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plantonistas model
   */
  readonly fields: PlantonistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plantonistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantonistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registros<T extends Plantonistas$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Plantonistas$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plantonistas model
   */
  interface PlantonistasFieldRefs {
    readonly id: FieldRef<"Plantonistas", 'String'>
    readonly nome: FieldRef<"Plantonistas", 'String'>
    readonly posicao: FieldRef<"Plantonistas", 'Int'>
    readonly proxima_data: FieldRef<"Plantonistas", 'DateTime'>
    readonly createdAt: FieldRef<"Plantonistas", 'DateTime'>
    readonly updatedAt: FieldRef<"Plantonistas", 'DateTime'>
    readonly userId: FieldRef<"Plantonistas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plantonistas findUnique
   */
  export type PlantonistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter, which Plantonistas to fetch.
     */
    where: PlantonistasWhereUniqueInput
  }

  /**
   * Plantonistas findUniqueOrThrow
   */
  export type PlantonistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter, which Plantonistas to fetch.
     */
    where: PlantonistasWhereUniqueInput
  }

  /**
   * Plantonistas findFirst
   */
  export type PlantonistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter, which Plantonistas to fetch.
     */
    where?: PlantonistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantonistas to fetch.
     */
    orderBy?: PlantonistasOrderByWithRelationInput | PlantonistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantonistas.
     */
    cursor?: PlantonistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantonistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantonistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantonistas.
     */
    distinct?: PlantonistasScalarFieldEnum | PlantonistasScalarFieldEnum[]
  }

  /**
   * Plantonistas findFirstOrThrow
   */
  export type PlantonistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter, which Plantonistas to fetch.
     */
    where?: PlantonistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantonistas to fetch.
     */
    orderBy?: PlantonistasOrderByWithRelationInput | PlantonistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantonistas.
     */
    cursor?: PlantonistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantonistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantonistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantonistas.
     */
    distinct?: PlantonistasScalarFieldEnum | PlantonistasScalarFieldEnum[]
  }

  /**
   * Plantonistas findMany
   */
  export type PlantonistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter, which Plantonistas to fetch.
     */
    where?: PlantonistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantonistas to fetch.
     */
    orderBy?: PlantonistasOrderByWithRelationInput | PlantonistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantonistas.
     */
    cursor?: PlantonistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantonistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantonistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantonistas.
     */
    distinct?: PlantonistasScalarFieldEnum | PlantonistasScalarFieldEnum[]
  }

  /**
   * Plantonistas create
   */
  export type PlantonistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * The data needed to create a Plantonistas.
     */
    data: XOR<PlantonistasCreateInput, PlantonistasUncheckedCreateInput>
  }

  /**
   * Plantonistas createMany
   */
  export type PlantonistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantonistas.
     */
    data: PlantonistasCreateManyInput | PlantonistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plantonistas createManyAndReturn
   */
  export type PlantonistasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * The data used to create many Plantonistas.
     */
    data: PlantonistasCreateManyInput | PlantonistasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plantonistas update
   */
  export type PlantonistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * The data needed to update a Plantonistas.
     */
    data: XOR<PlantonistasUpdateInput, PlantonistasUncheckedUpdateInput>
    /**
     * Choose, which Plantonistas to update.
     */
    where: PlantonistasWhereUniqueInput
  }

  /**
   * Plantonistas updateMany
   */
  export type PlantonistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantonistas.
     */
    data: XOR<PlantonistasUpdateManyMutationInput, PlantonistasUncheckedUpdateManyInput>
    /**
     * Filter which Plantonistas to update
     */
    where?: PlantonistasWhereInput
    /**
     * Limit how many Plantonistas to update.
     */
    limit?: number
  }

  /**
   * Plantonistas updateManyAndReturn
   */
  export type PlantonistasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * The data used to update Plantonistas.
     */
    data: XOR<PlantonistasUpdateManyMutationInput, PlantonistasUncheckedUpdateManyInput>
    /**
     * Filter which Plantonistas to update
     */
    where?: PlantonistasWhereInput
    /**
     * Limit how many Plantonistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plantonistas upsert
   */
  export type PlantonistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * The filter to search for the Plantonistas to update in case it exists.
     */
    where: PlantonistasWhereUniqueInput
    /**
     * In case the Plantonistas found by the `where` argument doesn't exist, create a new Plantonistas with this data.
     */
    create: XOR<PlantonistasCreateInput, PlantonistasUncheckedCreateInput>
    /**
     * In case the Plantonistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantonistasUpdateInput, PlantonistasUncheckedUpdateInput>
  }

  /**
   * Plantonistas delete
   */
  export type PlantonistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    /**
     * Filter which Plantonistas to delete.
     */
    where: PlantonistasWhereUniqueInput
  }

  /**
   * Plantonistas deleteMany
   */
  export type PlantonistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantonistas to delete
     */
    where?: PlantonistasWhereInput
    /**
     * Limit how many Plantonistas to delete.
     */
    limit?: number
  }

  /**
   * Plantonistas.registros
   */
  export type Plantonistas$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    where?: RegistrosWhereInput
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    cursor?: RegistrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrosScalarFieldEnum | RegistrosScalarFieldEnum[]
  }

  /**
   * Plantonistas without action
   */
  export type PlantonistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
  }


  /**
   * Model Registros
   */

  export type AggregateRegistros = {
    _count: RegistrosCountAggregateOutputType | null
    _min: RegistrosMinAggregateOutputType | null
    _max: RegistrosMaxAggregateOutputType | null
  }

  export type RegistrosMinAggregateOutputType = {
    id: string | null
    plantao_id: string | null
    user_id: string | null
    data: Date | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrosMaxAggregateOutputType = {
    id: string | null
    plantao_id: string | null
    user_id: string | null
    data: Date | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrosCountAggregateOutputType = {
    id: number
    plantao_id: number
    user_id: number
    data: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistrosMinAggregateInputType = {
    id?: true
    plantao_id?: true
    user_id?: true
    data?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrosMaxAggregateInputType = {
    id?: true
    plantao_id?: true
    user_id?: true
    data?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrosCountAggregateInputType = {
    id?: true
    plantao_id?: true
    user_id?: true
    data?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registros to aggregate.
     */
    where?: RegistrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registros
    **/
    _count?: true | RegistrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrosMaxAggregateInputType
  }

  export type GetRegistrosAggregateType<T extends RegistrosAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistros[P]>
      : GetScalarType<T[P], AggregateRegistros[P]>
  }




  export type RegistrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrosWhereInput
    orderBy?: RegistrosOrderByWithAggregationInput | RegistrosOrderByWithAggregationInput[]
    by: RegistrosScalarFieldEnum[] | RegistrosScalarFieldEnum
    having?: RegistrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrosCountAggregateInputType | true
    _min?: RegistrosMinAggregateInputType
    _max?: RegistrosMaxAggregateInputType
  }

  export type RegistrosGroupByOutputType = {
    id: string
    plantao_id: string
    user_id: string
    data: Date
    startTime: Date
    endTime: Date
    createdAt: Date
    updatedAt: Date
    _count: RegistrosCountAggregateOutputType | null
    _min: RegistrosMinAggregateOutputType | null
    _max: RegistrosMaxAggregateOutputType | null
  }

  type GetRegistrosGroupByPayload<T extends RegistrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrosGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrosGroupByOutputType[P]>
        }
      >
    >


  export type RegistrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantao_id?: boolean
    user_id?: boolean
    data?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registros"]>

  export type RegistrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantao_id?: boolean
    user_id?: boolean
    data?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registros"]>

  export type RegistrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantao_id?: boolean
    user_id?: boolean
    data?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registros"]>

  export type RegistrosSelectScalar = {
    id?: boolean
    plantao_id?: boolean
    user_id?: boolean
    data?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plantao_id" | "user_id" | "data" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["registros"]>
  export type RegistrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegistrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegistrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantao?: boolean | PlantonistasDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegistrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registros"
    objects: {
      plantao: Prisma.$PlantonistasPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plantao_id: string
      user_id: string
      data: Date
      startTime: Date
      endTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registros"]>
    composites: {}
  }

  type RegistrosGetPayload<S extends boolean | null | undefined | RegistrosDefaultArgs> = $Result.GetResult<Prisma.$RegistrosPayload, S>

  type RegistrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrosCountAggregateInputType | true
    }

  export interface RegistrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registros'], meta: { name: 'Registros' } }
    /**
     * Find zero or one Registros that matches the filter.
     * @param {RegistrosFindUniqueArgs} args - Arguments to find a Registros
     * @example
     * // Get one Registros
     * const registros = await prisma.registros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrosFindUniqueArgs>(args: SelectSubset<T, RegistrosFindUniqueArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrosFindUniqueOrThrowArgs} args - Arguments to find a Registros
     * @example
     * // Get one Registros
     * const registros = await prisma.registros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrosFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosFindFirstArgs} args - Arguments to find a Registros
     * @example
     * // Get one Registros
     * const registros = await prisma.registros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrosFindFirstArgs>(args?: SelectSubset<T, RegistrosFindFirstArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosFindFirstOrThrowArgs} args - Arguments to find a Registros
     * @example
     * // Get one Registros
     * const registros = await prisma.registros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrosFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registros
     * const registros = await prisma.registros.findMany()
     * 
     * // Get first 10 Registros
     * const registros = await prisma.registros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrosWithIdOnly = await prisma.registros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrosFindManyArgs>(args?: SelectSubset<T, RegistrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registros.
     * @param {RegistrosCreateArgs} args - Arguments to create a Registros.
     * @example
     * // Create one Registros
     * const Registros = await prisma.registros.create({
     *   data: {
     *     // ... data to create a Registros
     *   }
     * })
     * 
     */
    create<T extends RegistrosCreateArgs>(args: SelectSubset<T, RegistrosCreateArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registros.
     * @param {RegistrosCreateManyArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registros = await prisma.registros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrosCreateManyArgs>(args?: SelectSubset<T, RegistrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registros and returns the data saved in the database.
     * @param {RegistrosCreateManyAndReturnArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registros = await prisma.registros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registros and only return the `id`
     * const registrosWithIdOnly = await prisma.registros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrosCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registros.
     * @param {RegistrosDeleteArgs} args - Arguments to delete one Registros.
     * @example
     * // Delete one Registros
     * const Registros = await prisma.registros.delete({
     *   where: {
     *     // ... filter to delete one Registros
     *   }
     * })
     * 
     */
    delete<T extends RegistrosDeleteArgs>(args: SelectSubset<T, RegistrosDeleteArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registros.
     * @param {RegistrosUpdateArgs} args - Arguments to update one Registros.
     * @example
     * // Update one Registros
     * const registros = await prisma.registros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrosUpdateArgs>(args: SelectSubset<T, RegistrosUpdateArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registros.
     * @param {RegistrosDeleteManyArgs} args - Arguments to filter Registros to delete.
     * @example
     * // Delete a few Registros
     * const { count } = await prisma.registros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrosDeleteManyArgs>(args?: SelectSubset<T, RegistrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registros
     * const registros = await prisma.registros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrosUpdateManyArgs>(args: SelectSubset<T, RegistrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros and returns the data updated in the database.
     * @param {RegistrosUpdateManyAndReturnArgs} args - Arguments to update many Registros.
     * @example
     * // Update many Registros
     * const registros = await prisma.registros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registros and only return the `id`
     * const registrosWithIdOnly = await prisma.registros.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrosUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registros.
     * @param {RegistrosUpsertArgs} args - Arguments to update or create a Registros.
     * @example
     * // Update or create a Registros
     * const registros = await prisma.registros.upsert({
     *   create: {
     *     // ... data to create a Registros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registros we want to update
     *   }
     * })
     */
    upsert<T extends RegistrosUpsertArgs>(args: SelectSubset<T, RegistrosUpsertArgs<ExtArgs>>): Prisma__RegistrosClient<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosCountArgs} args - Arguments to filter Registros to count.
     * @example
     * // Count the number of Registros
     * const count = await prisma.registros.count({
     *   where: {
     *     // ... the filter for the Registros we want to count
     *   }
     * })
    **/
    count<T extends RegistrosCountArgs>(
      args?: Subset<T, RegistrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrosAggregateArgs>(args: Subset<T, RegistrosAggregateArgs>): Prisma.PrismaPromise<GetRegistrosAggregateType<T>>

    /**
     * Group by Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrosGroupByArgs['orderBy'] }
        : { orderBy?: RegistrosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registros model
   */
  readonly fields: RegistrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plantao<T extends PlantonistasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantonistasDefaultArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registros model
   */
  interface RegistrosFieldRefs {
    readonly id: FieldRef<"Registros", 'String'>
    readonly plantao_id: FieldRef<"Registros", 'String'>
    readonly user_id: FieldRef<"Registros", 'String'>
    readonly data: FieldRef<"Registros", 'DateTime'>
    readonly startTime: FieldRef<"Registros", 'DateTime'>
    readonly endTime: FieldRef<"Registros", 'DateTime'>
    readonly createdAt: FieldRef<"Registros", 'DateTime'>
    readonly updatedAt: FieldRef<"Registros", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registros findUnique
   */
  export type RegistrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where: RegistrosWhereUniqueInput
  }

  /**
   * Registros findUniqueOrThrow
   */
  export type RegistrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where: RegistrosWhereUniqueInput
  }

  /**
   * Registros findFirst
   */
  export type RegistrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistrosScalarFieldEnum | RegistrosScalarFieldEnum[]
  }

  /**
   * Registros findFirstOrThrow
   */
  export type RegistrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistrosScalarFieldEnum | RegistrosScalarFieldEnum[]
  }

  /**
   * Registros findMany
   */
  export type RegistrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registros.
     */
    cursor?: RegistrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistrosScalarFieldEnum | RegistrosScalarFieldEnum[]
  }

  /**
   * Registros create
   */
  export type RegistrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * The data needed to create a Registros.
     */
    data: XOR<RegistrosCreateInput, RegistrosUncheckedCreateInput>
  }

  /**
   * Registros createMany
   */
  export type RegistrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registros.
     */
    data: RegistrosCreateManyInput | RegistrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registros createManyAndReturn
   */
  export type RegistrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * The data used to create many Registros.
     */
    data: RegistrosCreateManyInput | RegistrosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registros update
   */
  export type RegistrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * The data needed to update a Registros.
     */
    data: XOR<RegistrosUpdateInput, RegistrosUncheckedUpdateInput>
    /**
     * Choose, which Registros to update.
     */
    where: RegistrosWhereUniqueInput
  }

  /**
   * Registros updateMany
   */
  export type RegistrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistrosUpdateManyMutationInput, RegistrosUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistrosWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
  }

  /**
   * Registros updateManyAndReturn
   */
  export type RegistrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistrosUpdateManyMutationInput, RegistrosUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistrosWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registros upsert
   */
  export type RegistrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * The filter to search for the Registros to update in case it exists.
     */
    where: RegistrosWhereUniqueInput
    /**
     * In case the Registros found by the `where` argument doesn't exist, create a new Registros with this data.
     */
    create: XOR<RegistrosCreateInput, RegistrosUncheckedCreateInput>
    /**
     * In case the Registros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrosUpdateInput, RegistrosUncheckedUpdateInput>
  }

  /**
   * Registros delete
   */
  export type RegistrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    /**
     * Filter which Registros to delete.
     */
    where: RegistrosWhereUniqueInput
  }

  /**
   * Registros deleteMany
   */
  export type RegistrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registros to delete
     */
    where?: RegistrosWhereInput
    /**
     * Limit how many Registros to delete.
     */
    limit?: number
  }

  /**
   * Registros without action
   */
  export type RegistrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
  }


  /**
   * Model TomticketReportCache
   */

  export type AggregateTomticketReportCache = {
    _count: TomticketReportCacheCountAggregateOutputType | null
    _min: TomticketReportCacheMinAggregateOutputType | null
    _max: TomticketReportCacheMaxAggregateOutputType | null
  }

  export type TomticketReportCacheMinAggregateOutputType = {
    id: string | null
    startDate: string | null
    endDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TomticketReportCacheMaxAggregateOutputType = {
    id: string | null
    startDate: string | null
    endDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TomticketReportCacheCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TomticketReportCacheMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TomticketReportCacheMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TomticketReportCacheCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TomticketReportCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TomticketReportCache to aggregate.
     */
    where?: TomticketReportCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TomticketReportCaches to fetch.
     */
    orderBy?: TomticketReportCacheOrderByWithRelationInput | TomticketReportCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TomticketReportCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TomticketReportCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TomticketReportCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TomticketReportCaches
    **/
    _count?: true | TomticketReportCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TomticketReportCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TomticketReportCacheMaxAggregateInputType
  }

  export type GetTomticketReportCacheAggregateType<T extends TomticketReportCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateTomticketReportCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTomticketReportCache[P]>
      : GetScalarType<T[P], AggregateTomticketReportCache[P]>
  }




  export type TomticketReportCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TomticketReportCacheWhereInput
    orderBy?: TomticketReportCacheOrderByWithAggregationInput | TomticketReportCacheOrderByWithAggregationInput[]
    by: TomticketReportCacheScalarFieldEnum[] | TomticketReportCacheScalarFieldEnum
    having?: TomticketReportCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TomticketReportCacheCountAggregateInputType | true
    _min?: TomticketReportCacheMinAggregateInputType
    _max?: TomticketReportCacheMaxAggregateInputType
  }

  export type TomticketReportCacheGroupByOutputType = {
    id: string
    startDate: string
    endDate: string
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TomticketReportCacheCountAggregateOutputType | null
    _min: TomticketReportCacheMinAggregateOutputType | null
    _max: TomticketReportCacheMaxAggregateOutputType | null
  }

  type GetTomticketReportCacheGroupByPayload<T extends TomticketReportCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TomticketReportCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TomticketReportCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TomticketReportCacheGroupByOutputType[P]>
            : GetScalarType<T[P], TomticketReportCacheGroupByOutputType[P]>
        }
      >
    >


  export type TomticketReportCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tomticketReportCache"]>

  export type TomticketReportCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tomticketReportCache"]>

  export type TomticketReportCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tomticketReportCache"]>

  export type TomticketReportCacheSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TomticketReportCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["tomticketReportCache"]>

  export type $TomticketReportCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TomticketReportCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: string
      endDate: string
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tomticketReportCache"]>
    composites: {}
  }

  type TomticketReportCacheGetPayload<S extends boolean | null | undefined | TomticketReportCacheDefaultArgs> = $Result.GetResult<Prisma.$TomticketReportCachePayload, S>

  type TomticketReportCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TomticketReportCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TomticketReportCacheCountAggregateInputType | true
    }

  export interface TomticketReportCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TomticketReportCache'], meta: { name: 'TomticketReportCache' } }
    /**
     * Find zero or one TomticketReportCache that matches the filter.
     * @param {TomticketReportCacheFindUniqueArgs} args - Arguments to find a TomticketReportCache
     * @example
     * // Get one TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TomticketReportCacheFindUniqueArgs>(args: SelectSubset<T, TomticketReportCacheFindUniqueArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TomticketReportCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TomticketReportCacheFindUniqueOrThrowArgs} args - Arguments to find a TomticketReportCache
     * @example
     * // Get one TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TomticketReportCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, TomticketReportCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TomticketReportCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheFindFirstArgs} args - Arguments to find a TomticketReportCache
     * @example
     * // Get one TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TomticketReportCacheFindFirstArgs>(args?: SelectSubset<T, TomticketReportCacheFindFirstArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TomticketReportCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheFindFirstOrThrowArgs} args - Arguments to find a TomticketReportCache
     * @example
     * // Get one TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TomticketReportCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, TomticketReportCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TomticketReportCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TomticketReportCaches
     * const tomticketReportCaches = await prisma.tomticketReportCache.findMany()
     * 
     * // Get first 10 TomticketReportCaches
     * const tomticketReportCaches = await prisma.tomticketReportCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tomticketReportCacheWithIdOnly = await prisma.tomticketReportCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TomticketReportCacheFindManyArgs>(args?: SelectSubset<T, TomticketReportCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TomticketReportCache.
     * @param {TomticketReportCacheCreateArgs} args - Arguments to create a TomticketReportCache.
     * @example
     * // Create one TomticketReportCache
     * const TomticketReportCache = await prisma.tomticketReportCache.create({
     *   data: {
     *     // ... data to create a TomticketReportCache
     *   }
     * })
     * 
     */
    create<T extends TomticketReportCacheCreateArgs>(args: SelectSubset<T, TomticketReportCacheCreateArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TomticketReportCaches.
     * @param {TomticketReportCacheCreateManyArgs} args - Arguments to create many TomticketReportCaches.
     * @example
     * // Create many TomticketReportCaches
     * const tomticketReportCache = await prisma.tomticketReportCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TomticketReportCacheCreateManyArgs>(args?: SelectSubset<T, TomticketReportCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TomticketReportCaches and returns the data saved in the database.
     * @param {TomticketReportCacheCreateManyAndReturnArgs} args - Arguments to create many TomticketReportCaches.
     * @example
     * // Create many TomticketReportCaches
     * const tomticketReportCache = await prisma.tomticketReportCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TomticketReportCaches and only return the `id`
     * const tomticketReportCacheWithIdOnly = await prisma.tomticketReportCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TomticketReportCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, TomticketReportCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TomticketReportCache.
     * @param {TomticketReportCacheDeleteArgs} args - Arguments to delete one TomticketReportCache.
     * @example
     * // Delete one TomticketReportCache
     * const TomticketReportCache = await prisma.tomticketReportCache.delete({
     *   where: {
     *     // ... filter to delete one TomticketReportCache
     *   }
     * })
     * 
     */
    delete<T extends TomticketReportCacheDeleteArgs>(args: SelectSubset<T, TomticketReportCacheDeleteArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TomticketReportCache.
     * @param {TomticketReportCacheUpdateArgs} args - Arguments to update one TomticketReportCache.
     * @example
     * // Update one TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TomticketReportCacheUpdateArgs>(args: SelectSubset<T, TomticketReportCacheUpdateArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TomticketReportCaches.
     * @param {TomticketReportCacheDeleteManyArgs} args - Arguments to filter TomticketReportCaches to delete.
     * @example
     * // Delete a few TomticketReportCaches
     * const { count } = await prisma.tomticketReportCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TomticketReportCacheDeleteManyArgs>(args?: SelectSubset<T, TomticketReportCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TomticketReportCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TomticketReportCaches
     * const tomticketReportCache = await prisma.tomticketReportCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TomticketReportCacheUpdateManyArgs>(args: SelectSubset<T, TomticketReportCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TomticketReportCaches and returns the data updated in the database.
     * @param {TomticketReportCacheUpdateManyAndReturnArgs} args - Arguments to update many TomticketReportCaches.
     * @example
     * // Update many TomticketReportCaches
     * const tomticketReportCache = await prisma.tomticketReportCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TomticketReportCaches and only return the `id`
     * const tomticketReportCacheWithIdOnly = await prisma.tomticketReportCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TomticketReportCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, TomticketReportCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TomticketReportCache.
     * @param {TomticketReportCacheUpsertArgs} args - Arguments to update or create a TomticketReportCache.
     * @example
     * // Update or create a TomticketReportCache
     * const tomticketReportCache = await prisma.tomticketReportCache.upsert({
     *   create: {
     *     // ... data to create a TomticketReportCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TomticketReportCache we want to update
     *   }
     * })
     */
    upsert<T extends TomticketReportCacheUpsertArgs>(args: SelectSubset<T, TomticketReportCacheUpsertArgs<ExtArgs>>): Prisma__TomticketReportCacheClient<$Result.GetResult<Prisma.$TomticketReportCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TomticketReportCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheCountArgs} args - Arguments to filter TomticketReportCaches to count.
     * @example
     * // Count the number of TomticketReportCaches
     * const count = await prisma.tomticketReportCache.count({
     *   where: {
     *     // ... the filter for the TomticketReportCaches we want to count
     *   }
     * })
    **/
    count<T extends TomticketReportCacheCountArgs>(
      args?: Subset<T, TomticketReportCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TomticketReportCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TomticketReportCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TomticketReportCacheAggregateArgs>(args: Subset<T, TomticketReportCacheAggregateArgs>): Prisma.PrismaPromise<GetTomticketReportCacheAggregateType<T>>

    /**
     * Group by TomticketReportCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomticketReportCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TomticketReportCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TomticketReportCacheGroupByArgs['orderBy'] }
        : { orderBy?: TomticketReportCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TomticketReportCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTomticketReportCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TomticketReportCache model
   */
  readonly fields: TomticketReportCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TomticketReportCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TomticketReportCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TomticketReportCache model
   */
  interface TomticketReportCacheFieldRefs {
    readonly id: FieldRef<"TomticketReportCache", 'String'>
    readonly startDate: FieldRef<"TomticketReportCache", 'String'>
    readonly endDate: FieldRef<"TomticketReportCache", 'String'>
    readonly data: FieldRef<"TomticketReportCache", 'Json'>
    readonly createdAt: FieldRef<"TomticketReportCache", 'DateTime'>
    readonly updatedAt: FieldRef<"TomticketReportCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TomticketReportCache findUnique
   */
  export type TomticketReportCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter, which TomticketReportCache to fetch.
     */
    where: TomticketReportCacheWhereUniqueInput
  }

  /**
   * TomticketReportCache findUniqueOrThrow
   */
  export type TomticketReportCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter, which TomticketReportCache to fetch.
     */
    where: TomticketReportCacheWhereUniqueInput
  }

  /**
   * TomticketReportCache findFirst
   */
  export type TomticketReportCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter, which TomticketReportCache to fetch.
     */
    where?: TomticketReportCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TomticketReportCaches to fetch.
     */
    orderBy?: TomticketReportCacheOrderByWithRelationInput | TomticketReportCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TomticketReportCaches.
     */
    cursor?: TomticketReportCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TomticketReportCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TomticketReportCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TomticketReportCaches.
     */
    distinct?: TomticketReportCacheScalarFieldEnum | TomticketReportCacheScalarFieldEnum[]
  }

  /**
   * TomticketReportCache findFirstOrThrow
   */
  export type TomticketReportCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter, which TomticketReportCache to fetch.
     */
    where?: TomticketReportCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TomticketReportCaches to fetch.
     */
    orderBy?: TomticketReportCacheOrderByWithRelationInput | TomticketReportCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TomticketReportCaches.
     */
    cursor?: TomticketReportCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TomticketReportCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TomticketReportCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TomticketReportCaches.
     */
    distinct?: TomticketReportCacheScalarFieldEnum | TomticketReportCacheScalarFieldEnum[]
  }

  /**
   * TomticketReportCache findMany
   */
  export type TomticketReportCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter, which TomticketReportCaches to fetch.
     */
    where?: TomticketReportCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TomticketReportCaches to fetch.
     */
    orderBy?: TomticketReportCacheOrderByWithRelationInput | TomticketReportCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TomticketReportCaches.
     */
    cursor?: TomticketReportCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TomticketReportCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TomticketReportCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TomticketReportCaches.
     */
    distinct?: TomticketReportCacheScalarFieldEnum | TomticketReportCacheScalarFieldEnum[]
  }

  /**
   * TomticketReportCache create
   */
  export type TomticketReportCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a TomticketReportCache.
     */
    data: XOR<TomticketReportCacheCreateInput, TomticketReportCacheUncheckedCreateInput>
  }

  /**
   * TomticketReportCache createMany
   */
  export type TomticketReportCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TomticketReportCaches.
     */
    data: TomticketReportCacheCreateManyInput | TomticketReportCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TomticketReportCache createManyAndReturn
   */
  export type TomticketReportCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * The data used to create many TomticketReportCaches.
     */
    data: TomticketReportCacheCreateManyInput | TomticketReportCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TomticketReportCache update
   */
  export type TomticketReportCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a TomticketReportCache.
     */
    data: XOR<TomticketReportCacheUpdateInput, TomticketReportCacheUncheckedUpdateInput>
    /**
     * Choose, which TomticketReportCache to update.
     */
    where: TomticketReportCacheWhereUniqueInput
  }

  /**
   * TomticketReportCache updateMany
   */
  export type TomticketReportCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TomticketReportCaches.
     */
    data: XOR<TomticketReportCacheUpdateManyMutationInput, TomticketReportCacheUncheckedUpdateManyInput>
    /**
     * Filter which TomticketReportCaches to update
     */
    where?: TomticketReportCacheWhereInput
    /**
     * Limit how many TomticketReportCaches to update.
     */
    limit?: number
  }

  /**
   * TomticketReportCache updateManyAndReturn
   */
  export type TomticketReportCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * The data used to update TomticketReportCaches.
     */
    data: XOR<TomticketReportCacheUpdateManyMutationInput, TomticketReportCacheUncheckedUpdateManyInput>
    /**
     * Filter which TomticketReportCaches to update
     */
    where?: TomticketReportCacheWhereInput
    /**
     * Limit how many TomticketReportCaches to update.
     */
    limit?: number
  }

  /**
   * TomticketReportCache upsert
   */
  export type TomticketReportCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the TomticketReportCache to update in case it exists.
     */
    where: TomticketReportCacheWhereUniqueInput
    /**
     * In case the TomticketReportCache found by the `where` argument doesn't exist, create a new TomticketReportCache with this data.
     */
    create: XOR<TomticketReportCacheCreateInput, TomticketReportCacheUncheckedCreateInput>
    /**
     * In case the TomticketReportCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TomticketReportCacheUpdateInput, TomticketReportCacheUncheckedUpdateInput>
  }

  /**
   * TomticketReportCache delete
   */
  export type TomticketReportCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
    /**
     * Filter which TomticketReportCache to delete.
     */
    where: TomticketReportCacheWhereUniqueInput
  }

  /**
   * TomticketReportCache deleteMany
   */
  export type TomticketReportCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TomticketReportCaches to delete
     */
    where?: TomticketReportCacheWhereInput
    /**
     * Limit how many TomticketReportCaches to delete.
     */
    limit?: number
  }

  /**
   * TomticketReportCache without action
   */
  export type TomticketReportCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TomticketReportCache
     */
    select?: TomticketReportCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TomticketReportCache
     */
    omit?: TomticketReportCacheOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    pass: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id_atendente: string | null
    typeUser: $Enums.TypeUsers | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    pass: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id_atendente: string | null
    typeUser: $Enums.TypeUsers | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    pass: number
    createdAt: number
    updatedAt: number
    id_atendente: number
    typeUser: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass?: true
    createdAt?: true
    updatedAt?: true
    id_atendente?: true
    typeUser?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass?: true
    createdAt?: true
    updatedAt?: true
    id_atendente?: true
    typeUser?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass?: true
    createdAt?: true
    updatedAt?: true
    id_atendente?: true
    typeUser?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    pass: string
    createdAt: Date
    updatedAt: Date
    id_atendente: string | null
    typeUser: $Enums.TypeUsers
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    pass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_atendente?: boolean
    typeUser?: boolean
    plantao?: boolean | User$plantaoArgs<ExtArgs>
    registros?: boolean | User$registrosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    pass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_atendente?: boolean
    typeUser?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    pass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_atendente?: boolean
    typeUser?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    pass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_atendente?: boolean
    typeUser?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "pass" | "createdAt" | "updatedAt" | "id_atendente" | "typeUser", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantao?: boolean | User$plantaoArgs<ExtArgs>
    registros?: boolean | User$registrosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      plantao: Prisma.$PlantonistasPayload<ExtArgs> | null
      registros: Prisma.$RegistrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      pass: string
      createdAt: Date
      updatedAt: Date
      id_atendente: string | null
      typeUser: $Enums.TypeUsers
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plantao<T extends User$plantaoArgs<ExtArgs> = {}>(args?: Subset<T, User$plantaoArgs<ExtArgs>>): Prisma__PlantonistasClient<$Result.GetResult<Prisma.$PlantonistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registros<T extends User$registrosArgs<ExtArgs> = {}>(args?: Subset<T, User$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly pass: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly id_atendente: FieldRef<"User", 'String'>
    readonly typeUser: FieldRef<"User", 'TypeUsers'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.plantao
   */
  export type User$plantaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantonistas
     */
    select?: PlantonistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantonistas
     */
    omit?: PlantonistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantonistasInclude<ExtArgs> | null
    where?: PlantonistasWhereInput
  }

  /**
   * User.registros
   */
  export type User$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registros
     */
    select?: RegistrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registros
     */
    omit?: RegistrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrosInclude<ExtArgs> | null
    where?: RegistrosWhereInput
    orderBy?: RegistrosOrderByWithRelationInput | RegistrosOrderByWithRelationInput[]
    cursor?: RegistrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrosScalarFieldEnum | RegistrosScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AtendimentoScalarFieldEnum: {
    id: 'id',
    ticketZpro: 'ticketZpro',
    ticketTomticket: 'ticketTomticket',
    sincronizado: 'sincronizado',
    clienteId: 'clienteId',
    cnpj: 'cnpj',
    atendente: 'atendente',
    protocolo: 'protocolo',
    nomeContato: 'nomeContato',
    tipoAtendimento: 'tipoAtendimento',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const PlantonistasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    posicao: 'posicao',
    proxima_data: 'proxima_data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PlantonistasScalarFieldEnum = (typeof PlantonistasScalarFieldEnum)[keyof typeof PlantonistasScalarFieldEnum]


  export const RegistrosScalarFieldEnum: {
    id: 'id',
    plantao_id: 'plantao_id',
    user_id: 'user_id',
    data: 'data',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistrosScalarFieldEnum = (typeof RegistrosScalarFieldEnum)[keyof typeof RegistrosScalarFieldEnum]


  export const TomticketReportCacheScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TomticketReportCacheScalarFieldEnum = (typeof TomticketReportCacheScalarFieldEnum)[keyof typeof TomticketReportCacheScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    pass: 'pass',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id_atendente: 'id_atendente',
    typeUser: 'typeUser'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TypeUsers'
   */
  export type EnumTypeUsersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeUsers'>
    


  /**
   * Reference to a field of type 'TypeUsers[]'
   */
  export type ListEnumTypeUsersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeUsers[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    ticketZpro?: StringNullableFilter<"Atendimento"> | string | null
    ticketTomticket?: StringNullableFilter<"Atendimento"> | string | null
    sincronizado?: BoolFilter<"Atendimento"> | boolean
    clienteId?: StringNullableFilter<"Atendimento"> | string | null
    cnpj?: StringFilter<"Atendimento"> | string
    atendente?: StringNullableFilter<"Atendimento"> | string | null
    protocolo?: StringNullableFilter<"Atendimento"> | string | null
    nomeContato?: StringNullableFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringNullableFilter<"Atendimento"> | string | null
    status?: StringFilter<"Atendimento"> | string
    createdAt?: DateTimeFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeFilter<"Atendimento"> | Date | string
  }

  export type AtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    ticketZpro?: SortOrderInput | SortOrder
    ticketTomticket?: SortOrderInput | SortOrder
    sincronizado?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    atendente?: SortOrderInput | SortOrder
    protocolo?: SortOrderInput | SortOrder
    nomeContato?: SortOrderInput | SortOrder
    tipoAtendimento?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    ticketZpro?: StringNullableFilter<"Atendimento"> | string | null
    ticketTomticket?: StringNullableFilter<"Atendimento"> | string | null
    sincronizado?: BoolFilter<"Atendimento"> | boolean
    clienteId?: StringNullableFilter<"Atendimento"> | string | null
    cnpj?: StringFilter<"Atendimento"> | string
    atendente?: StringNullableFilter<"Atendimento"> | string | null
    protocolo?: StringNullableFilter<"Atendimento"> | string | null
    nomeContato?: StringNullableFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringNullableFilter<"Atendimento"> | string | null
    status?: StringFilter<"Atendimento"> | string
    createdAt?: DateTimeFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeFilter<"Atendimento"> | Date | string
  }, "id">

  export type AtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    ticketZpro?: SortOrderInput | SortOrder
    ticketTomticket?: SortOrderInput | SortOrder
    sincronizado?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    atendente?: SortOrderInput | SortOrder
    protocolo?: SortOrderInput | SortOrder
    nomeContato?: SortOrderInput | SortOrder
    tipoAtendimento?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atendimento"> | string
    ticketZpro?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    ticketTomticket?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    sincronizado?: BoolWithAggregatesFilter<"Atendimento"> | boolean
    clienteId?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    cnpj?: StringWithAggregatesFilter<"Atendimento"> | string
    atendente?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    protocolo?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    nomeContato?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    tipoAtendimento?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    status?: StringWithAggregatesFilter<"Atendimento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
  }

  export type PlantonistasWhereInput = {
    AND?: PlantonistasWhereInput | PlantonistasWhereInput[]
    OR?: PlantonistasWhereInput[]
    NOT?: PlantonistasWhereInput | PlantonistasWhereInput[]
    id?: StringFilter<"Plantonistas"> | string
    nome?: StringFilter<"Plantonistas"> | string
    posicao?: IntFilter<"Plantonistas"> | number
    proxima_data?: DateTimeNullableFilter<"Plantonistas"> | Date | string | null
    createdAt?: DateTimeFilter<"Plantonistas"> | Date | string
    updatedAt?: DateTimeFilter<"Plantonistas"> | Date | string
    userId?: StringFilter<"Plantonistas"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    registros?: RegistrosListRelationFilter
  }

  export type PlantonistasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    posicao?: SortOrder
    proxima_data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    registros?: RegistrosOrderByRelationAggregateInput
  }

  export type PlantonistasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlantonistasWhereInput | PlantonistasWhereInput[]
    OR?: PlantonistasWhereInput[]
    NOT?: PlantonistasWhereInput | PlantonistasWhereInput[]
    nome?: StringFilter<"Plantonistas"> | string
    posicao?: IntFilter<"Plantonistas"> | number
    proxima_data?: DateTimeNullableFilter<"Plantonistas"> | Date | string | null
    createdAt?: DateTimeFilter<"Plantonistas"> | Date | string
    updatedAt?: DateTimeFilter<"Plantonistas"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    registros?: RegistrosListRelationFilter
  }, "id" | "userId">

  export type PlantonistasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    posicao?: SortOrder
    proxima_data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PlantonistasCountOrderByAggregateInput
    _avg?: PlantonistasAvgOrderByAggregateInput
    _max?: PlantonistasMaxOrderByAggregateInput
    _min?: PlantonistasMinOrderByAggregateInput
    _sum?: PlantonistasSumOrderByAggregateInput
  }

  export type PlantonistasScalarWhereWithAggregatesInput = {
    AND?: PlantonistasScalarWhereWithAggregatesInput | PlantonistasScalarWhereWithAggregatesInput[]
    OR?: PlantonistasScalarWhereWithAggregatesInput[]
    NOT?: PlantonistasScalarWhereWithAggregatesInput | PlantonistasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plantonistas"> | string
    nome?: StringWithAggregatesFilter<"Plantonistas"> | string
    posicao?: IntWithAggregatesFilter<"Plantonistas"> | number
    proxima_data?: DateTimeNullableWithAggregatesFilter<"Plantonistas"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plantonistas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plantonistas"> | Date | string
    userId?: StringWithAggregatesFilter<"Plantonistas"> | string
  }

  export type RegistrosWhereInput = {
    AND?: RegistrosWhereInput | RegistrosWhereInput[]
    OR?: RegistrosWhereInput[]
    NOT?: RegistrosWhereInput | RegistrosWhereInput[]
    id?: StringFilter<"Registros"> | string
    plantao_id?: StringFilter<"Registros"> | string
    user_id?: StringFilter<"Registros"> | string
    data?: DateTimeFilter<"Registros"> | Date | string
    startTime?: DateTimeFilter<"Registros"> | Date | string
    endTime?: DateTimeFilter<"Registros"> | Date | string
    createdAt?: DateTimeFilter<"Registros"> | Date | string
    updatedAt?: DateTimeFilter<"Registros"> | Date | string
    plantao?: XOR<PlantonistasScalarRelationFilter, PlantonistasWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RegistrosOrderByWithRelationInput = {
    id?: SortOrder
    plantao_id?: SortOrder
    user_id?: SortOrder
    data?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plantao?: PlantonistasOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RegistrosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrosWhereInput | RegistrosWhereInput[]
    OR?: RegistrosWhereInput[]
    NOT?: RegistrosWhereInput | RegistrosWhereInput[]
    plantao_id?: StringFilter<"Registros"> | string
    user_id?: StringFilter<"Registros"> | string
    data?: DateTimeFilter<"Registros"> | Date | string
    startTime?: DateTimeFilter<"Registros"> | Date | string
    endTime?: DateTimeFilter<"Registros"> | Date | string
    createdAt?: DateTimeFilter<"Registros"> | Date | string
    updatedAt?: DateTimeFilter<"Registros"> | Date | string
    plantao?: XOR<PlantonistasScalarRelationFilter, PlantonistasWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RegistrosOrderByWithAggregationInput = {
    id?: SortOrder
    plantao_id?: SortOrder
    user_id?: SortOrder
    data?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistrosCountOrderByAggregateInput
    _max?: RegistrosMaxOrderByAggregateInput
    _min?: RegistrosMinOrderByAggregateInput
  }

  export type RegistrosScalarWhereWithAggregatesInput = {
    AND?: RegistrosScalarWhereWithAggregatesInput | RegistrosScalarWhereWithAggregatesInput[]
    OR?: RegistrosScalarWhereWithAggregatesInput[]
    NOT?: RegistrosScalarWhereWithAggregatesInput | RegistrosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registros"> | string
    plantao_id?: StringWithAggregatesFilter<"Registros"> | string
    user_id?: StringWithAggregatesFilter<"Registros"> | string
    data?: DateTimeWithAggregatesFilter<"Registros"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Registros"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Registros"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Registros"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Registros"> | Date | string
  }

  export type TomticketReportCacheWhereInput = {
    AND?: TomticketReportCacheWhereInput | TomticketReportCacheWhereInput[]
    OR?: TomticketReportCacheWhereInput[]
    NOT?: TomticketReportCacheWhereInput | TomticketReportCacheWhereInput[]
    id?: StringFilter<"TomticketReportCache"> | string
    startDate?: StringFilter<"TomticketReportCache"> | string
    endDate?: StringFilter<"TomticketReportCache"> | string
    data?: JsonFilter<"TomticketReportCache">
    createdAt?: DateTimeFilter<"TomticketReportCache"> | Date | string
    updatedAt?: DateTimeFilter<"TomticketReportCache"> | Date | string
  }

  export type TomticketReportCacheOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TomticketReportCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    startDate_endDate?: TomticketReportCacheStartDateEndDateCompoundUniqueInput
    AND?: TomticketReportCacheWhereInput | TomticketReportCacheWhereInput[]
    OR?: TomticketReportCacheWhereInput[]
    NOT?: TomticketReportCacheWhereInput | TomticketReportCacheWhereInput[]
    startDate?: StringFilter<"TomticketReportCache"> | string
    endDate?: StringFilter<"TomticketReportCache"> | string
    data?: JsonFilter<"TomticketReportCache">
    createdAt?: DateTimeFilter<"TomticketReportCache"> | Date | string
    updatedAt?: DateTimeFilter<"TomticketReportCache"> | Date | string
  }, "id" | "startDate_endDate">

  export type TomticketReportCacheOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TomticketReportCacheCountOrderByAggregateInput
    _max?: TomticketReportCacheMaxOrderByAggregateInput
    _min?: TomticketReportCacheMinOrderByAggregateInput
  }

  export type TomticketReportCacheScalarWhereWithAggregatesInput = {
    AND?: TomticketReportCacheScalarWhereWithAggregatesInput | TomticketReportCacheScalarWhereWithAggregatesInput[]
    OR?: TomticketReportCacheScalarWhereWithAggregatesInput[]
    NOT?: TomticketReportCacheScalarWhereWithAggregatesInput | TomticketReportCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TomticketReportCache"> | string
    startDate?: StringWithAggregatesFilter<"TomticketReportCache"> | string
    endDate?: StringWithAggregatesFilter<"TomticketReportCache"> | string
    data?: JsonWithAggregatesFilter<"TomticketReportCache">
    createdAt?: DateTimeWithAggregatesFilter<"TomticketReportCache"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TomticketReportCache"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    pass?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    id_atendente?: StringNullableFilter<"User"> | string | null
    typeUser?: EnumTypeUsersFilter<"User"> | $Enums.TypeUsers
    plantao?: XOR<PlantonistasNullableScalarRelationFilter, PlantonistasWhereInput> | null
    registros?: RegistrosListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_atendente?: SortOrderInput | SortOrder
    typeUser?: SortOrder
    plantao?: PlantonistasOrderByWithRelationInput
    registros?: RegistrosOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    id_atendente?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    pass?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    typeUser?: EnumTypeUsersFilter<"User"> | $Enums.TypeUsers
    plantao?: XOR<PlantonistasNullableScalarRelationFilter, PlantonistasWhereInput> | null
    registros?: RegistrosListRelationFilter
  }, "id" | "email" | "id_atendente">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_atendente?: SortOrderInput | SortOrder
    typeUser?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    pass?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    id_atendente?: StringNullableWithAggregatesFilter<"User"> | string | null
    typeUser?: EnumTypeUsersWithAggregatesFilter<"User"> | $Enums.TypeUsers
  }

  export type AtendimentoCreateInput = {
    id?: string
    ticketZpro?: string | null
    ticketTomticket?: string | null
    sincronizado?: boolean
    clienteId?: string | null
    cnpj: string
    atendente?: string | null
    protocolo?: string | null
    nomeContato?: string | null
    tipoAtendimento?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUncheckedCreateInput = {
    id?: string
    ticketZpro?: string | null
    ticketTomticket?: string | null
    sincronizado?: boolean
    clienteId?: string | null
    cnpj: string
    atendente?: string | null
    protocolo?: string | null
    nomeContato?: string | null
    tipoAtendimento?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketZpro?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTomticket?: NullableStringFieldUpdateOperationsInput | string | null
    sincronizado?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    atendente?: NullableStringFieldUpdateOperationsInput | string | null
    protocolo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketZpro?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTomticket?: NullableStringFieldUpdateOperationsInput | string | null
    sincronizado?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    atendente?: NullableStringFieldUpdateOperationsInput | string | null
    protocolo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoCreateManyInput = {
    id?: string
    ticketZpro?: string | null
    ticketTomticket?: string | null
    sincronizado?: boolean
    clienteId?: string | null
    cnpj: string
    atendente?: string | null
    protocolo?: string | null
    nomeContato?: string | null
    tipoAtendimento?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketZpro?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTomticket?: NullableStringFieldUpdateOperationsInput | string | null
    sincronizado?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    atendente?: NullableStringFieldUpdateOperationsInput | string | null
    protocolo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketZpro?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTomticket?: NullableStringFieldUpdateOperationsInput | string | null
    sincronizado?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    atendente?: NullableStringFieldUpdateOperationsInput | string | null
    protocolo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeContato?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAtendimento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantonistasCreateInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantaoInput
    registros?: RegistrosCreateNestedManyWithoutPlantaoInput
  }

  export type PlantonistasUncheckedCreateInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    registros?: RegistrosUncheckedCreateNestedManyWithoutPlantaoInput
  }

  export type PlantonistasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantaoNestedInput
    registros?: RegistrosUpdateManyWithoutPlantaoNestedInput
  }

  export type PlantonistasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    registros?: RegistrosUncheckedUpdateManyWithoutPlantaoNestedInput
  }

  export type PlantonistasCreateManyInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlantonistasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantonistasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrosCreateInput = {
    id?: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plantao: PlantonistasCreateNestedOneWithoutRegistrosInput
    user: UserCreateNestedOneWithoutRegistrosInput
  }

  export type RegistrosUncheckedCreateInput = {
    id?: string
    plantao_id: string
    user_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantao?: PlantonistasUpdateOneRequiredWithoutRegistrosNestedInput
    user?: UserUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistrosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantao_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrosCreateManyInput = {
    id?: string
    plantao_id: string
    user_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantao_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TomticketReportCacheCreateInput = {
    id?: string
    startDate: string
    endDate: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TomticketReportCacheUncheckedCreateInput = {
    id?: string
    startDate: string
    endDate: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TomticketReportCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TomticketReportCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TomticketReportCacheCreateManyInput = {
    id?: string
    startDate: string
    endDate: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TomticketReportCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TomticketReportCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    plantao?: PlantonistasCreateNestedOneWithoutUserInput
    registros?: RegistrosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    plantao?: PlantonistasUncheckedCreateNestedOneWithoutUserInput
    registros?: RegistrosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    plantao?: PlantonistasUpdateOneWithoutUserNestedInput
    registros?: RegistrosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    plantao?: PlantonistasUncheckedUpdateOneWithoutUserNestedInput
    registros?: RegistrosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    ticketZpro?: SortOrder
    ticketTomticket?: SortOrder
    sincronizado?: SortOrder
    clienteId?: SortOrder
    cnpj?: SortOrder
    atendente?: SortOrder
    protocolo?: SortOrder
    nomeContato?: SortOrder
    tipoAtendimento?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketZpro?: SortOrder
    ticketTomticket?: SortOrder
    sincronizado?: SortOrder
    clienteId?: SortOrder
    cnpj?: SortOrder
    atendente?: SortOrder
    protocolo?: SortOrder
    nomeContato?: SortOrder
    tipoAtendimento?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    ticketZpro?: SortOrder
    ticketTomticket?: SortOrder
    sincronizado?: SortOrder
    clienteId?: SortOrder
    cnpj?: SortOrder
    atendente?: SortOrder
    protocolo?: SortOrder
    nomeContato?: SortOrder
    tipoAtendimento?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegistrosListRelationFilter = {
    every?: RegistrosWhereInput
    some?: RegistrosWhereInput
    none?: RegistrosWhereInput
  }

  export type RegistrosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantonistasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    posicao?: SortOrder
    proxima_data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlantonistasAvgOrderByAggregateInput = {
    posicao?: SortOrder
  }

  export type PlantonistasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    posicao?: SortOrder
    proxima_data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlantonistasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    posicao?: SortOrder
    proxima_data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlantonistasSumOrderByAggregateInput = {
    posicao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlantonistasScalarRelationFilter = {
    is?: PlantonistasWhereInput
    isNot?: PlantonistasWhereInput
  }

  export type RegistrosCountOrderByAggregateInput = {
    id?: SortOrder
    plantao_id?: SortOrder
    user_id?: SortOrder
    data?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrosMaxOrderByAggregateInput = {
    id?: SortOrder
    plantao_id?: SortOrder
    user_id?: SortOrder
    data?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrosMinOrderByAggregateInput = {
    id?: SortOrder
    plantao_id?: SortOrder
    user_id?: SortOrder
    data?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TomticketReportCacheStartDateEndDateCompoundUniqueInput = {
    startDate: string
    endDate: string
  }

  export type TomticketReportCacheCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TomticketReportCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TomticketReportCacheMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTypeUsersFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeUsers | EnumTypeUsersFieldRefInput<$PrismaModel>
    in?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeUsersFilter<$PrismaModel> | $Enums.TypeUsers
  }

  export type PlantonistasNullableScalarRelationFilter = {
    is?: PlantonistasWhereInput | null
    isNot?: PlantonistasWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_atendente?: SortOrder
    typeUser?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_atendente?: SortOrder
    typeUser?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_atendente?: SortOrder
    typeUser?: SortOrder
  }

  export type EnumTypeUsersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeUsers | EnumTypeUsersFieldRefInput<$PrismaModel>
    in?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeUsersWithAggregatesFilter<$PrismaModel> | $Enums.TypeUsers
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeUsersFilter<$PrismaModel>
    _max?: NestedEnumTypeUsersFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedOneWithoutPlantaoInput = {
    create?: XOR<UserCreateWithoutPlantaoInput, UserUncheckedCreateWithoutPlantaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantaoInput
    connect?: UserWhereUniqueInput
  }

  export type RegistrosCreateNestedManyWithoutPlantaoInput = {
    create?: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput> | RegistrosCreateWithoutPlantaoInput[] | RegistrosUncheckedCreateWithoutPlantaoInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutPlantaoInput | RegistrosCreateOrConnectWithoutPlantaoInput[]
    createMany?: RegistrosCreateManyPlantaoInputEnvelope
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
  }

  export type RegistrosUncheckedCreateNestedManyWithoutPlantaoInput = {
    create?: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput> | RegistrosCreateWithoutPlantaoInput[] | RegistrosUncheckedCreateWithoutPlantaoInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutPlantaoInput | RegistrosCreateOrConnectWithoutPlantaoInput[]
    createMany?: RegistrosCreateManyPlantaoInputEnvelope
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPlantaoNestedInput = {
    create?: XOR<UserCreateWithoutPlantaoInput, UserUncheckedCreateWithoutPlantaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantaoInput
    upsert?: UserUpsertWithoutPlantaoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlantaoInput, UserUpdateWithoutPlantaoInput>, UserUncheckedUpdateWithoutPlantaoInput>
  }

  export type RegistrosUpdateManyWithoutPlantaoNestedInput = {
    create?: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput> | RegistrosCreateWithoutPlantaoInput[] | RegistrosUncheckedCreateWithoutPlantaoInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutPlantaoInput | RegistrosCreateOrConnectWithoutPlantaoInput[]
    upsert?: RegistrosUpsertWithWhereUniqueWithoutPlantaoInput | RegistrosUpsertWithWhereUniqueWithoutPlantaoInput[]
    createMany?: RegistrosCreateManyPlantaoInputEnvelope
    set?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    disconnect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    delete?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    update?: RegistrosUpdateWithWhereUniqueWithoutPlantaoInput | RegistrosUpdateWithWhereUniqueWithoutPlantaoInput[]
    updateMany?: RegistrosUpdateManyWithWhereWithoutPlantaoInput | RegistrosUpdateManyWithWhereWithoutPlantaoInput[]
    deleteMany?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
  }

  export type RegistrosUncheckedUpdateManyWithoutPlantaoNestedInput = {
    create?: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput> | RegistrosCreateWithoutPlantaoInput[] | RegistrosUncheckedCreateWithoutPlantaoInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutPlantaoInput | RegistrosCreateOrConnectWithoutPlantaoInput[]
    upsert?: RegistrosUpsertWithWhereUniqueWithoutPlantaoInput | RegistrosUpsertWithWhereUniqueWithoutPlantaoInput[]
    createMany?: RegistrosCreateManyPlantaoInputEnvelope
    set?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    disconnect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    delete?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    update?: RegistrosUpdateWithWhereUniqueWithoutPlantaoInput | RegistrosUpdateWithWhereUniqueWithoutPlantaoInput[]
    updateMany?: RegistrosUpdateManyWithWhereWithoutPlantaoInput | RegistrosUpdateManyWithWhereWithoutPlantaoInput[]
    deleteMany?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
  }

  export type PlantonistasCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<PlantonistasCreateWithoutRegistrosInput, PlantonistasUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutRegistrosInput
    connect?: PlantonistasWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<UserCreateWithoutRegistrosInput, UserUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrosInput
    connect?: UserWhereUniqueInput
  }

  export type PlantonistasUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<PlantonistasCreateWithoutRegistrosInput, PlantonistasUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutRegistrosInput
    upsert?: PlantonistasUpsertWithoutRegistrosInput
    connect?: PlantonistasWhereUniqueInput
    update?: XOR<XOR<PlantonistasUpdateToOneWithWhereWithoutRegistrosInput, PlantonistasUpdateWithoutRegistrosInput>, PlantonistasUncheckedUpdateWithoutRegistrosInput>
  }

  export type UserUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<UserCreateWithoutRegistrosInput, UserUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrosInput
    upsert?: UserUpsertWithoutRegistrosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrosInput, UserUpdateWithoutRegistrosInput>, UserUncheckedUpdateWithoutRegistrosInput>
  }

  export type PlantonistasCreateNestedOneWithoutUserInput = {
    create?: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutUserInput
    connect?: PlantonistasWhereUniqueInput
  }

  export type RegistrosCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput> | RegistrosCreateWithoutUserInput[] | RegistrosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutUserInput | RegistrosCreateOrConnectWithoutUserInput[]
    createMany?: RegistrosCreateManyUserInputEnvelope
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
  }

  export type PlantonistasUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutUserInput
    connect?: PlantonistasWhereUniqueInput
  }

  export type RegistrosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput> | RegistrosCreateWithoutUserInput[] | RegistrosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutUserInput | RegistrosCreateOrConnectWithoutUserInput[]
    createMany?: RegistrosCreateManyUserInputEnvelope
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
  }

  export type EnumTypeUsersFieldUpdateOperationsInput = {
    set?: $Enums.TypeUsers
  }

  export type PlantonistasUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutUserInput
    upsert?: PlantonistasUpsertWithoutUserInput
    disconnect?: PlantonistasWhereInput | boolean
    delete?: PlantonistasWhereInput | boolean
    connect?: PlantonistasWhereUniqueInput
    update?: XOR<XOR<PlantonistasUpdateToOneWithWhereWithoutUserInput, PlantonistasUpdateWithoutUserInput>, PlantonistasUncheckedUpdateWithoutUserInput>
  }

  export type RegistrosUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput> | RegistrosCreateWithoutUserInput[] | RegistrosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutUserInput | RegistrosCreateOrConnectWithoutUserInput[]
    upsert?: RegistrosUpsertWithWhereUniqueWithoutUserInput | RegistrosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrosCreateManyUserInputEnvelope
    set?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    disconnect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    delete?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    update?: RegistrosUpdateWithWhereUniqueWithoutUserInput | RegistrosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrosUpdateManyWithWhereWithoutUserInput | RegistrosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
  }

  export type PlantonistasUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlantonistasCreateOrConnectWithoutUserInput
    upsert?: PlantonistasUpsertWithoutUserInput
    disconnect?: PlantonistasWhereInput | boolean
    delete?: PlantonistasWhereInput | boolean
    connect?: PlantonistasWhereUniqueInput
    update?: XOR<XOR<PlantonistasUpdateToOneWithWhereWithoutUserInput, PlantonistasUpdateWithoutUserInput>, PlantonistasUncheckedUpdateWithoutUserInput>
  }

  export type RegistrosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput> | RegistrosCreateWithoutUserInput[] | RegistrosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrosCreateOrConnectWithoutUserInput | RegistrosCreateOrConnectWithoutUserInput[]
    upsert?: RegistrosUpsertWithWhereUniqueWithoutUserInput | RegistrosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrosCreateManyUserInputEnvelope
    set?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    disconnect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    delete?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    connect?: RegistrosWhereUniqueInput | RegistrosWhereUniqueInput[]
    update?: RegistrosUpdateWithWhereUniqueWithoutUserInput | RegistrosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrosUpdateManyWithWhereWithoutUserInput | RegistrosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTypeUsersFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeUsers | EnumTypeUsersFieldRefInput<$PrismaModel>
    in?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeUsersFilter<$PrismaModel> | $Enums.TypeUsers
  }

  export type NestedEnumTypeUsersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeUsers | EnumTypeUsersFieldRefInput<$PrismaModel>
    in?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeUsers[] | ListEnumTypeUsersFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeUsersWithAggregatesFilter<$PrismaModel> | $Enums.TypeUsers
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeUsersFilter<$PrismaModel>
    _max?: NestedEnumTypeUsersFilter<$PrismaModel>
  }

  export type UserCreateWithoutPlantaoInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    registros?: RegistrosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlantaoInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    registros?: RegistrosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlantaoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlantaoInput, UserUncheckedCreateWithoutPlantaoInput>
  }

  export type RegistrosCreateWithoutPlantaoInput = {
    id?: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrosInput
  }

  export type RegistrosUncheckedCreateWithoutPlantaoInput = {
    id?: string
    user_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosCreateOrConnectWithoutPlantaoInput = {
    where: RegistrosWhereUniqueInput
    create: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput>
  }

  export type RegistrosCreateManyPlantaoInputEnvelope = {
    data: RegistrosCreateManyPlantaoInput | RegistrosCreateManyPlantaoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlantaoInput = {
    update: XOR<UserUpdateWithoutPlantaoInput, UserUncheckedUpdateWithoutPlantaoInput>
    create: XOR<UserCreateWithoutPlantaoInput, UserUncheckedCreateWithoutPlantaoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlantaoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlantaoInput, UserUncheckedUpdateWithoutPlantaoInput>
  }

  export type UserUpdateWithoutPlantaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    registros?: RegistrosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlantaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    registros?: RegistrosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RegistrosUpsertWithWhereUniqueWithoutPlantaoInput = {
    where: RegistrosWhereUniqueInput
    update: XOR<RegistrosUpdateWithoutPlantaoInput, RegistrosUncheckedUpdateWithoutPlantaoInput>
    create: XOR<RegistrosCreateWithoutPlantaoInput, RegistrosUncheckedCreateWithoutPlantaoInput>
  }

  export type RegistrosUpdateWithWhereUniqueWithoutPlantaoInput = {
    where: RegistrosWhereUniqueInput
    data: XOR<RegistrosUpdateWithoutPlantaoInput, RegistrosUncheckedUpdateWithoutPlantaoInput>
  }

  export type RegistrosUpdateManyWithWhereWithoutPlantaoInput = {
    where: RegistrosScalarWhereInput
    data: XOR<RegistrosUpdateManyMutationInput, RegistrosUncheckedUpdateManyWithoutPlantaoInput>
  }

  export type RegistrosScalarWhereInput = {
    AND?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
    OR?: RegistrosScalarWhereInput[]
    NOT?: RegistrosScalarWhereInput | RegistrosScalarWhereInput[]
    id?: StringFilter<"Registros"> | string
    plantao_id?: StringFilter<"Registros"> | string
    user_id?: StringFilter<"Registros"> | string
    data?: DateTimeFilter<"Registros"> | Date | string
    startTime?: DateTimeFilter<"Registros"> | Date | string
    endTime?: DateTimeFilter<"Registros"> | Date | string
    createdAt?: DateTimeFilter<"Registros"> | Date | string
    updatedAt?: DateTimeFilter<"Registros"> | Date | string
  }

  export type PlantonistasCreateWithoutRegistrosInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantaoInput
  }

  export type PlantonistasUncheckedCreateWithoutRegistrosInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlantonistasCreateOrConnectWithoutRegistrosInput = {
    where: PlantonistasWhereUniqueInput
    create: XOR<PlantonistasCreateWithoutRegistrosInput, PlantonistasUncheckedCreateWithoutRegistrosInput>
  }

  export type UserCreateWithoutRegistrosInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    plantao?: PlantonistasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegistrosInput = {
    id?: string
    name: string
    email: string
    pass: string
    createdAt?: Date | string
    updatedAt?: Date | string
    id_atendente?: string | null
    typeUser?: $Enums.TypeUsers
    plantao?: PlantonistasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegistrosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrosInput, UserUncheckedCreateWithoutRegistrosInput>
  }

  export type PlantonistasUpsertWithoutRegistrosInput = {
    update: XOR<PlantonistasUpdateWithoutRegistrosInput, PlantonistasUncheckedUpdateWithoutRegistrosInput>
    create: XOR<PlantonistasCreateWithoutRegistrosInput, PlantonistasUncheckedCreateWithoutRegistrosInput>
    where?: PlantonistasWhereInput
  }

  export type PlantonistasUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: PlantonistasWhereInput
    data: XOR<PlantonistasUpdateWithoutRegistrosInput, PlantonistasUncheckedUpdateWithoutRegistrosInput>
  }

  export type PlantonistasUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantaoNestedInput
  }

  export type PlantonistasUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutRegistrosInput = {
    update: XOR<UserUpdateWithoutRegistrosInput, UserUncheckedUpdateWithoutRegistrosInput>
    create: XOR<UserCreateWithoutRegistrosInput, UserUncheckedCreateWithoutRegistrosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrosInput, UserUncheckedUpdateWithoutRegistrosInput>
  }

  export type UserUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    plantao?: PlantonistasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_atendente?: NullableStringFieldUpdateOperationsInput | string | null
    typeUser?: EnumTypeUsersFieldUpdateOperationsInput | $Enums.TypeUsers
    plantao?: PlantonistasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PlantonistasCreateWithoutUserInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registros?: RegistrosCreateNestedManyWithoutPlantaoInput
  }

  export type PlantonistasUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    posicao?: number
    proxima_data?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registros?: RegistrosUncheckedCreateNestedManyWithoutPlantaoInput
  }

  export type PlantonistasCreateOrConnectWithoutUserInput = {
    where: PlantonistasWhereUniqueInput
    create: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
  }

  export type RegistrosCreateWithoutUserInput = {
    id?: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plantao: PlantonistasCreateNestedOneWithoutRegistrosInput
  }

  export type RegistrosUncheckedCreateWithoutUserInput = {
    id?: string
    plantao_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosCreateOrConnectWithoutUserInput = {
    where: RegistrosWhereUniqueInput
    create: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput>
  }

  export type RegistrosCreateManyUserInputEnvelope = {
    data: RegistrosCreateManyUserInput | RegistrosCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlantonistasUpsertWithoutUserInput = {
    update: XOR<PlantonistasUpdateWithoutUserInput, PlantonistasUncheckedUpdateWithoutUserInput>
    create: XOR<PlantonistasCreateWithoutUserInput, PlantonistasUncheckedCreateWithoutUserInput>
    where?: PlantonistasWhereInput
  }

  export type PlantonistasUpdateToOneWithWhereWithoutUserInput = {
    where?: PlantonistasWhereInput
    data: XOR<PlantonistasUpdateWithoutUserInput, PlantonistasUncheckedUpdateWithoutUserInput>
  }

  export type PlantonistasUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistrosUpdateManyWithoutPlantaoNestedInput
  }

  export type PlantonistasUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    posicao?: IntFieldUpdateOperationsInput | number
    proxima_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: RegistrosUncheckedUpdateManyWithoutPlantaoNestedInput
  }

  export type RegistrosUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrosWhereUniqueInput
    update: XOR<RegistrosUpdateWithoutUserInput, RegistrosUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrosCreateWithoutUserInput, RegistrosUncheckedCreateWithoutUserInput>
  }

  export type RegistrosUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrosWhereUniqueInput
    data: XOR<RegistrosUpdateWithoutUserInput, RegistrosUncheckedUpdateWithoutUserInput>
  }

  export type RegistrosUpdateManyWithWhereWithoutUserInput = {
    where: RegistrosScalarWhereInput
    data: XOR<RegistrosUpdateManyMutationInput, RegistrosUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrosCreateManyPlantaoInput = {
    id?: string
    user_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosUpdateWithoutPlantaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistrosUncheckedUpdateWithoutPlantaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrosUncheckedUpdateManyWithoutPlantaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrosCreateManyUserInput = {
    id?: string
    plantao_id: string
    data: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrosUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantao?: PlantonistasUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistrosUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantao_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrosUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantao_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}