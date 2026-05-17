
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
 * Model actor
 * 
 */
export type actor = $Result.DefaultSelection<Prisma.$actorPayload>
/**
 * Model customer
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model director
 * 
 */
export type director = $Result.DefaultSelection<Prisma.$directorPayload>
/**
 * Model film
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type film = $Result.DefaultSelection<Prisma.$filmPayload>
/**
 * Model film_actor
 * 
 */
export type film_actor = $Result.DefaultSelection<Prisma.$film_actorPayload>
/**
 * Model film_director
 * 
 */
export type film_director = $Result.DefaultSelection<Prisma.$film_directorPayload>
/**
 * Model film_genre
 * 
 */
export type film_genre = $Result.DefaultSelection<Prisma.$film_genrePayload>
/**
 * Model genre
 * 
 */
export type genre = $Result.DefaultSelection<Prisma.$genrePayload>
/**
 * Model payment
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model studio
 * 
 */
export type studio = $Result.DefaultSelection<Prisma.$studioPayload>
/**
 * Model subscription
 * 
 */
export type subscription = $Result.DefaultSelection<Prisma.$subscriptionPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const payment_type: {
  cash: 'cash',
  transfer: 'transfer',
  details: 'details',
  promo: 'promo'
};

export type payment_type = (typeof payment_type)[keyof typeof payment_type]


export const restriction: {
  R_0: 'R_0',
  R_12: 'R_12',
  R_16: 'R_16',
  R_18: 'R_18',
  R_21: 'R_21'
};

export type restriction = (typeof restriction)[keyof typeof restriction]


export const subscription_type: {
  family: 'family',
  student: 'student',
  standart: 'standart'
};

export type subscription_type = (typeof subscription_type)[keyof typeof subscription_type]

}

export type payment_type = $Enums.payment_type

export const payment_type: typeof $Enums.payment_type

export type restriction = $Enums.restriction

export const restriction: typeof $Enums.restriction

export type subscription_type = $Enums.subscription_type

export const subscription_type: typeof $Enums.subscription_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Actors
 * const actors = await prisma.actor.findMany()
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
   * // Fetch zero or more Actors
   * const actors = await prisma.actor.findMany()
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
   * `prisma.actor`: Exposes CRUD operations for the **actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.actorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.directorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film`: Exposes CRUD operations for the **film** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.film.findMany()
    * ```
    */
  get film(): Prisma.filmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_actor`: Exposes CRUD operations for the **film_actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_actors
    * const film_actors = await prisma.film_actor.findMany()
    * ```
    */
  get film_actor(): Prisma.film_actorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_director`: Exposes CRUD operations for the **film_director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_directors
    * const film_directors = await prisma.film_director.findMany()
    * ```
    */
  get film_director(): Prisma.film_directorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_genre`: Exposes CRUD operations for the **film_genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_genres
    * const film_genres = await prisma.film_genre.findMany()
    * ```
    */
  get film_genre(): Prisma.film_genreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.genreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studio`: Exposes CRUD operations for the **studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.studioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.subscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
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
    actor: 'actor',
    customer: 'customer',
    director: 'director',
    film: 'film',
    film_actor: 'film_actor',
    film_director: 'film_director',
    film_genre: 'film_genre',
    genre: 'genre',
    payment: 'payment',
    studio: 'studio',
    subscription: 'subscription',
    review: 'review'
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
      modelProps: "actor" | "customer" | "director" | "film" | "film_actor" | "film_director" | "film_genre" | "genre" | "payment" | "studio" | "subscription" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actor: {
        payload: Prisma.$actorPayload<ExtArgs>
        fields: Prisma.actorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          findFirst: {
            args: Prisma.actorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          findMany: {
            args: Prisma.actorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>[]
          }
          create: {
            args: Prisma.actorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          createMany: {
            args: Prisma.actorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.actorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>[]
          }
          delete: {
            args: Prisma.actorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          update: {
            args: Prisma.actorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          deleteMany: {
            args: Prisma.actorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.actorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>[]
          }
          upsert: {
            args: Prisma.actorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actorPayload>
          }
          aggregate: {
            args: Prisma.ActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActor>
          }
          groupBy: {
            args: Prisma.actorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.actorCountArgs<ExtArgs>
            result: $Utils.Optional<ActorCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      director: {
        payload: Prisma.$directorPayload<ExtArgs>
        fields: Prisma.directorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.directorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.directorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          findFirst: {
            args: Prisma.directorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.directorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          findMany: {
            args: Prisma.directorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>[]
          }
          create: {
            args: Prisma.directorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          createMany: {
            args: Prisma.directorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.directorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>[]
          }
          delete: {
            args: Prisma.directorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          update: {
            args: Prisma.directorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          deleteMany: {
            args: Prisma.directorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.directorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.directorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>[]
          }
          upsert: {
            args: Prisma.directorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorPayload>
          }
          aggregate: {
            args: Prisma.DirectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirector>
          }
          groupBy: {
            args: Prisma.directorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.directorCountArgs<ExtArgs>
            result: $Utils.Optional<DirectorCountAggregateOutputType> | number
          }
        }
      }
      film: {
        payload: Prisma.$filmPayload<ExtArgs>
        fields: Prisma.filmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          findFirst: {
            args: Prisma.filmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          findMany: {
            args: Prisma.filmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>[]
          }
          create: {
            args: Prisma.filmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          createMany: {
            args: Prisma.filmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>[]
          }
          delete: {
            args: Prisma.filmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          update: {
            args: Prisma.filmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          deleteMany: {
            args: Prisma.filmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>[]
          }
          upsert: {
            args: Prisma.filmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmPayload>
          }
          aggregate: {
            args: Prisma.FilmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm>
          }
          groupBy: {
            args: Prisma.filmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmGroupByOutputType>[]
          }
          count: {
            args: Prisma.filmCountArgs<ExtArgs>
            result: $Utils.Optional<FilmCountAggregateOutputType> | number
          }
        }
      }
      film_actor: {
        payload: Prisma.$film_actorPayload<ExtArgs>
        fields: Prisma.film_actorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_actorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_actorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          findFirst: {
            args: Prisma.film_actorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_actorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          findMany: {
            args: Prisma.film_actorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>[]
          }
          create: {
            args: Prisma.film_actorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          createMany: {
            args: Prisma.film_actorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_actorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>[]
          }
          delete: {
            args: Prisma.film_actorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          update: {
            args: Prisma.film_actorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          deleteMany: {
            args: Prisma.film_actorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_actorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_actorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>[]
          }
          upsert: {
            args: Prisma.film_actorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_actorPayload>
          }
          aggregate: {
            args: Prisma.Film_actorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_actor>
          }
          groupBy: {
            args: Prisma.film_actorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_actorGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_actorCountArgs<ExtArgs>
            result: $Utils.Optional<Film_actorCountAggregateOutputType> | number
          }
        }
      }
      film_director: {
        payload: Prisma.$film_directorPayload<ExtArgs>
        fields: Prisma.film_directorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_directorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_directorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          findFirst: {
            args: Prisma.film_directorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_directorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          findMany: {
            args: Prisma.film_directorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>[]
          }
          create: {
            args: Prisma.film_directorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          createMany: {
            args: Prisma.film_directorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_directorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>[]
          }
          delete: {
            args: Prisma.film_directorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          update: {
            args: Prisma.film_directorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          deleteMany: {
            args: Prisma.film_directorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_directorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_directorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>[]
          }
          upsert: {
            args: Prisma.film_directorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_directorPayload>
          }
          aggregate: {
            args: Prisma.Film_directorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_director>
          }
          groupBy: {
            args: Prisma.film_directorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_directorGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_directorCountArgs<ExtArgs>
            result: $Utils.Optional<Film_directorCountAggregateOutputType> | number
          }
        }
      }
      film_genre: {
        payload: Prisma.$film_genrePayload<ExtArgs>
        fields: Prisma.film_genreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_genreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_genreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          findFirst: {
            args: Prisma.film_genreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_genreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          findMany: {
            args: Prisma.film_genreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>[]
          }
          create: {
            args: Prisma.film_genreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          createMany: {
            args: Prisma.film_genreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_genreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>[]
          }
          delete: {
            args: Prisma.film_genreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          update: {
            args: Prisma.film_genreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          deleteMany: {
            args: Prisma.film_genreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_genreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_genreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>[]
          }
          upsert: {
            args: Prisma.film_genreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genrePayload>
          }
          aggregate: {
            args: Prisma.Film_genreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_genre>
          }
          groupBy: {
            args: Prisma.film_genreGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_genreGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_genreCountArgs<ExtArgs>
            result: $Utils.Optional<Film_genreCountAggregateOutputType> | number
          }
        }
      }
      genre: {
        payload: Prisma.$genrePayload<ExtArgs>
        fields: Prisma.genreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          findFirst: {
            args: Prisma.genreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          findMany: {
            args: Prisma.genreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          create: {
            args: Prisma.genreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          createMany: {
            args: Prisma.genreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          delete: {
            args: Prisma.genreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          update: {
            args: Prisma.genreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          deleteMany: {
            args: Prisma.genreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          upsert: {
            args: Prisma.genreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.genreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.genreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      studio: {
        payload: Prisma.$studioPayload<ExtArgs>
        fields: Prisma.studioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          findFirst: {
            args: Prisma.studioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          findMany: {
            args: Prisma.studioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>[]
          }
          create: {
            args: Prisma.studioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          createMany: {
            args: Prisma.studioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>[]
          }
          delete: {
            args: Prisma.studioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          update: {
            args: Prisma.studioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          deleteMany: {
            args: Prisma.studioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>[]
          }
          upsert: {
            args: Prisma.studioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studioPayload>
          }
          aggregate: {
            args: Prisma.StudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudio>
          }
          groupBy: {
            args: Prisma.studioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.studioCountArgs<ExtArgs>
            result: $Utils.Optional<StudioCountAggregateOutputType> | number
          }
        }
      }
      subscription: {
        payload: Prisma.$subscriptionPayload<ExtArgs>
        fields: Prisma.subscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          findFirst: {
            args: Prisma.subscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          findMany: {
            args: Prisma.subscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[]
          }
          create: {
            args: Prisma.subscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          createMany: {
            args: Prisma.subscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[]
          }
          delete: {
            args: Prisma.subscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          update: {
            args: Prisma.subscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[]
          }
          upsert: {
            args: Prisma.subscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.subscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
    actor?: actorOmit
    customer?: customerOmit
    director?: directorOmit
    film?: filmOmit
    film_actor?: film_actorOmit
    film_director?: film_directorOmit
    film_genre?: film_genreOmit
    genre?: genreOmit
    payment?: paymentOmit
    studio?: studioOmit
    subscription?: subscriptionOmit
    review?: reviewOmit
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
   * Count Type ActorCountOutputType
   */

  export type ActorCountOutputType = {
    film_actor: number
  }

  export type ActorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_actor?: boolean | ActorCountOutputTypeCountFilm_actorArgs
  }

  // Custom InputTypes
  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeCountFilm_actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_actorWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    payment: number
    subscription: number
    reviews: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | CustomerCountOutputTypeCountPaymentArgs
    subscription?: boolean | CustomerCountOutputTypeCountSubscriptionArgs
    reviews?: boolean | CustomerCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type DirectorCountOutputType
   */

  export type DirectorCountOutputType = {
    film_director: number
  }

  export type DirectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_director?: boolean | DirectorCountOutputTypeCountFilm_directorArgs
  }

  // Custom InputTypes
  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     */
    select?: DirectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeCountFilm_directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_directorWhereInput
  }


  /**
   * Count Type FilmCountOutputType
   */

  export type FilmCountOutputType = {
    film_actor: number
    film_director: number
    film_genre: number
    reviews: number
  }

  export type FilmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_actor?: boolean | FilmCountOutputTypeCountFilm_actorArgs
    film_director?: boolean | FilmCountOutputTypeCountFilm_directorArgs
    film_genre?: boolean | FilmCountOutputTypeCountFilm_genreArgs
    reviews?: boolean | FilmCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmCountOutputType
     */
    select?: FilmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeCountFilm_actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_actorWhereInput
  }

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeCountFilm_directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_directorWhereInput
  }

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeCountFilm_genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genreWhereInput
  }

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    film_genre: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genre?: boolean | GenreCountOutputTypeCountFilm_genreArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountFilm_genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genreWhereInput
  }


  /**
   * Count Type StudioCountOutputType
   */

  export type StudioCountOutputType = {
    film: number
  }

  export type StudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | StudioCountOutputTypeCountFilmArgs
  }

  // Custom InputTypes
  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     */
    select?: StudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountFilmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payment: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | SubscriptionCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actor
   */

  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorAvgAggregateOutputType = {
    actor_id: number | null
  }

  export type ActorSumAggregateOutputType = {
    actor_id: number | null
  }

  export type ActorMinAggregateOutputType = {
    actor_id: number | null
    first_name: string | null
    last_name: string | null
    country: string | null
    birth_date: Date | null
  }

  export type ActorMaxAggregateOutputType = {
    actor_id: number | null
    first_name: string | null
    last_name: string | null
    country: string | null
    birth_date: Date | null
  }

  export type ActorCountAggregateOutputType = {
    actor_id: number
    first_name: number
    last_name: number
    country: number
    birth_date: number
    _all: number
  }


  export type ActorAvgAggregateInputType = {
    actor_id?: true
  }

  export type ActorSumAggregateInputType = {
    actor_id?: true
  }

  export type ActorMinAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    country?: true
    birth_date?: true
  }

  export type ActorMaxAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    country?: true
    birth_date?: true
  }

  export type ActorCountAggregateInputType = {
    actor_id?: true
    first_name?: true
    last_name?: true
    country?: true
    birth_date?: true
    _all?: true
  }

  export type ActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actor to aggregate.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: actorOrderByWithRelationInput | actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type actorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actorWhereInput
    orderBy?: actorOrderByWithAggregationInput | actorOrderByWithAggregationInput[]
    by: ActorScalarFieldEnum[] | ActorScalarFieldEnum
    having?: actorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _avg?: ActorAvgAggregateInputType
    _sum?: ActorSumAggregateInputType
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }

  export type ActorGroupByOutputType = {
    actor_id: number
    first_name: string
    last_name: string
    country: string
    birth_date: Date | null
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends actorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type actorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actor_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
    birth_date?: boolean
    film_actor?: boolean | actor$film_actorArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actor"]>

  export type actorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actor_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
    birth_date?: boolean
  }, ExtArgs["result"]["actor"]>

  export type actorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actor_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
    birth_date?: boolean
  }, ExtArgs["result"]["actor"]>

  export type actorSelectScalar = {
    actor_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
    birth_date?: boolean
  }

  export type actorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"actor_id" | "first_name" | "last_name" | "country" | "birth_date", ExtArgs["result"]["actor"]>
  export type actorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_actor?: boolean | actor$film_actorArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type actorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type actorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $actorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actor"
    objects: {
      film_actor: Prisma.$film_actorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      actor_id: number
      first_name: string
      last_name: string
      country: string
      birth_date: Date | null
    }, ExtArgs["result"]["actor"]>
    composites: {}
  }

  type actorGetPayload<S extends boolean | null | undefined | actorDefaultArgs> = $Result.GetResult<Prisma.$actorPayload, S>

  type actorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActorCountAggregateInputType | true
    }

  export interface actorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actor'], meta: { name: 'actor' } }
    /**
     * Find zero or one Actor that matches the filter.
     * @param {actorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actorFindUniqueArgs>(args: SelectSubset<T, actorFindUniqueArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actorFindUniqueOrThrowArgs>(args: SelectSubset<T, actorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actorFindFirstArgs>(args?: SelectSubset<T, actorFindFirstArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actorFindFirstOrThrowArgs>(args?: SelectSubset<T, actorFindFirstOrThrowArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `actor_id`
     * const actorWithActor_idOnly = await prisma.actor.findMany({ select: { actor_id: true } })
     * 
     */
    findMany<T extends actorFindManyArgs>(args?: SelectSubset<T, actorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actor.
     * @param {actorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
     */
    create<T extends actorCreateArgs>(args: SelectSubset<T, actorCreateArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actors.
     * @param {actorCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actorCreateManyArgs>(args?: SelectSubset<T, actorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actors and returns the data saved in the database.
     * @param {actorCreateManyAndReturnArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actors and only return the `actor_id`
     * const actorWithActor_idOnly = await prisma.actor.createManyAndReturn({
     *   select: { actor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends actorCreateManyAndReturnArgs>(args?: SelectSubset<T, actorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actor.
     * @param {actorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
     */
    delete<T extends actorDeleteArgs>(args: SelectSubset<T, actorDeleteArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actor.
     * @param {actorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actorUpdateArgs>(args: SelectSubset<T, actorUpdateArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actors.
     * @param {actorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actorDeleteManyArgs>(args?: SelectSubset<T, actorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actorUpdateManyArgs>(args: SelectSubset<T, actorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors and returns the data updated in the database.
     * @param {actorUpdateManyAndReturnArgs} args - Arguments to update many Actors.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actors and only return the `actor_id`
     * const actorWithActor_idOnly = await prisma.actor.updateManyAndReturn({
     *   select: { actor_id: true },
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
    updateManyAndReturn<T extends actorUpdateManyAndReturnArgs>(args: SelectSubset<T, actorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actor.
     * @param {actorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
     */
    upsert<T extends actorUpsertArgs>(args: SelectSubset<T, actorUpsertArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends actorCountArgs>(
      args?: Subset<T, actorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actorGroupByArgs} args - Group by arguments.
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
      T extends actorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actorGroupByArgs['orderBy'] }
        : { orderBy?: actorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, actorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actor model
   */
  readonly fields: actorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_actor<T extends actor$film_actorArgs<ExtArgs> = {}>(args?: Subset<T, actor$film_actorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the actor model
   */
  interface actorFieldRefs {
    readonly actor_id: FieldRef<"actor", 'Int'>
    readonly first_name: FieldRef<"actor", 'String'>
    readonly last_name: FieldRef<"actor", 'String'>
    readonly country: FieldRef<"actor", 'String'>
    readonly birth_date: FieldRef<"actor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * actor findUnique
   */
  export type actorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter, which actor to fetch.
     */
    where: actorWhereUniqueInput
  }

  /**
   * actor findUniqueOrThrow
   */
  export type actorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter, which actor to fetch.
     */
    where: actorWhereUniqueInput
  }

  /**
   * actor findFirst
   */
  export type actorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter, which actor to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: actorOrderByWithRelationInput | actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * actor findFirstOrThrow
   */
  export type actorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter, which actor to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: actorOrderByWithRelationInput | actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * actor findMany
   */
  export type actorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter, which actors to fetch.
     */
    where?: actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actors to fetch.
     */
    orderBy?: actorOrderByWithRelationInput | actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actors.
     */
    cursor?: actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * actor create
   */
  export type actorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * The data needed to create a actor.
     */
    data: XOR<actorCreateInput, actorUncheckedCreateInput>
  }

  /**
   * actor createMany
   */
  export type actorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actors.
     */
    data: actorCreateManyInput | actorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actor createManyAndReturn
   */
  export type actorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * The data used to create many actors.
     */
    data: actorCreateManyInput | actorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actor update
   */
  export type actorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * The data needed to update a actor.
     */
    data: XOR<actorUpdateInput, actorUncheckedUpdateInput>
    /**
     * Choose, which actor to update.
     */
    where: actorWhereUniqueInput
  }

  /**
   * actor updateMany
   */
  export type actorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actors.
     */
    data: XOR<actorUpdateManyMutationInput, actorUncheckedUpdateManyInput>
    /**
     * Filter which actors to update
     */
    where?: actorWhereInput
    /**
     * Limit how many actors to update.
     */
    limit?: number
  }

  /**
   * actor updateManyAndReturn
   */
  export type actorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * The data used to update actors.
     */
    data: XOR<actorUpdateManyMutationInput, actorUncheckedUpdateManyInput>
    /**
     * Filter which actors to update
     */
    where?: actorWhereInput
    /**
     * Limit how many actors to update.
     */
    limit?: number
  }

  /**
   * actor upsert
   */
  export type actorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * The filter to search for the actor to update in case it exists.
     */
    where: actorWhereUniqueInput
    /**
     * In case the actor found by the `where` argument doesn't exist, create a new actor with this data.
     */
    create: XOR<actorCreateInput, actorUncheckedCreateInput>
    /**
     * In case the actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actorUpdateInput, actorUncheckedUpdateInput>
  }

  /**
   * actor delete
   */
  export type actorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
    /**
     * Filter which actor to delete.
     */
    where: actorWhereUniqueInput
  }

  /**
   * actor deleteMany
   */
  export type actorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actors to delete
     */
    where?: actorWhereInput
    /**
     * Limit how many actors to delete.
     */
    limit?: number
  }

  /**
   * actor.film_actor
   */
  export type actor$film_actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    where?: film_actorWhereInput
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    cursor?: film_actorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_actorScalarFieldEnum | Film_actorScalarFieldEnum[]
  }

  /**
   * actor without action
   */
  export type actorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actor
     */
    select?: actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actor
     */
    omit?: actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actorInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    registration_date: Date | null
    is_deleted: boolean | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    registration_date: Date | null
    is_deleted: boolean | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    registration_date: number
    is_deleted: number
    phone: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    registration_date?: true
    is_deleted?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    registration_date?: true
    is_deleted?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    registration_date?: true
    is_deleted?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customer_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date: Date | null
    is_deleted: boolean | null
    phone: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    registration_date?: boolean
    is_deleted?: boolean
    phone?: boolean
    payment?: boolean | customer$paymentArgs<ExtArgs>
    subscription?: boolean | customer$subscriptionArgs<ExtArgs>
    reviews?: boolean | customer$reviewsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    registration_date?: boolean
    is_deleted?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    registration_date?: boolean
    is_deleted?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    registration_date?: boolean
    is_deleted?: boolean
    phone?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "first_name" | "last_name" | "email" | "password" | "registration_date" | "is_deleted" | "phone", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | customer$paymentArgs<ExtArgs>
    subscription?: boolean | customer$subscriptionArgs<ExtArgs>
    reviews?: boolean | customer$reviewsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[]
      subscription: Prisma.$subscriptionPayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      registration_date: Date | null
      is_deleted: boolean | null
      phone: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends customer$paymentArgs<ExtArgs> = {}>(args?: Subset<T, customer$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends customer$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, customer$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends customer$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, customer$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly customer_id: FieldRef<"customer", 'Int'>
    readonly first_name: FieldRef<"customer", 'String'>
    readonly last_name: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly password: FieldRef<"customer", 'String'>
    readonly registration_date: FieldRef<"customer", 'DateTime'>
    readonly is_deleted: FieldRef<"customer", 'Boolean'>
    readonly phone: FieldRef<"customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.payment
   */
  export type customer$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * customer.subscription
   */
  export type customer$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    where?: subscriptionWhereInput
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    cursor?: subscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * customer.reviews
   */
  export type customer$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model director
   */

  export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  export type DirectorAvgAggregateOutputType = {
    director_id: number | null
  }

  export type DirectorSumAggregateOutputType = {
    director_id: number | null
  }

  export type DirectorMinAggregateOutputType = {
    director_id: number | null
    first_name: string | null
    last_name: string | null
    country: string | null
  }

  export type DirectorMaxAggregateOutputType = {
    director_id: number | null
    first_name: string | null
    last_name: string | null
    country: string | null
  }

  export type DirectorCountAggregateOutputType = {
    director_id: number
    first_name: number
    last_name: number
    country: number
    _all: number
  }


  export type DirectorAvgAggregateInputType = {
    director_id?: true
  }

  export type DirectorSumAggregateInputType = {
    director_id?: true
  }

  export type DirectorMinAggregateInputType = {
    director_id?: true
    first_name?: true
    last_name?: true
    country?: true
  }

  export type DirectorMaxAggregateInputType = {
    director_id?: true
    first_name?: true
    last_name?: true
    country?: true
  }

  export type DirectorCountAggregateInputType = {
    director_id?: true
    first_name?: true
    last_name?: true
    country?: true
    _all?: true
  }

  export type DirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which director to aggregate.
     */
    where?: directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorOrderByWithRelationInput | directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned directors
    **/
    _count?: true | DirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType
  }

  export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirector[P]>
      : GetScalarType<T[P], AggregateDirector[P]>
  }




  export type directorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: directorWhereInput
    orderBy?: directorOrderByWithAggregationInput | directorOrderByWithAggregationInput[]
    by: DirectorScalarFieldEnum[] | DirectorScalarFieldEnum
    having?: directorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectorCountAggregateInputType | true
    _avg?: DirectorAvgAggregateInputType
    _sum?: DirectorSumAggregateInputType
    _min?: DirectorMinAggregateInputType
    _max?: DirectorMaxAggregateInputType
  }

  export type DirectorGroupByOutputType = {
    director_id: number
    first_name: string
    last_name: string
    country: string
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  type GetDirectorGroupByPayload<T extends directorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorGroupByOutputType[P]>
        }
      >
    >


  export type directorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    director_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
    film_director?: boolean | director$film_directorArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["director"]>

  export type directorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    director_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
  }, ExtArgs["result"]["director"]>

  export type directorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    director_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
  }, ExtArgs["result"]["director"]>

  export type directorSelectScalar = {
    director_id?: boolean
    first_name?: boolean
    last_name?: boolean
    country?: boolean
  }

  export type directorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"director_id" | "first_name" | "last_name" | "country", ExtArgs["result"]["director"]>
  export type directorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_director?: boolean | director$film_directorArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type directorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type directorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $directorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "director"
    objects: {
      film_director: Prisma.$film_directorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      director_id: number
      first_name: string
      last_name: string
      country: string
    }, ExtArgs["result"]["director"]>
    composites: {}
  }

  type directorGetPayload<S extends boolean | null | undefined | directorDefaultArgs> = $Result.GetResult<Prisma.$directorPayload, S>

  type directorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<directorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectorCountAggregateInputType | true
    }

  export interface directorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['director'], meta: { name: 'director' } }
    /**
     * Find zero or one Director that matches the filter.
     * @param {directorFindUniqueArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends directorFindUniqueArgs>(args: SelectSubset<T, directorFindUniqueArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Director that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {directorFindUniqueOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends directorFindUniqueOrThrowArgs>(args: SelectSubset<T, directorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindFirstArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends directorFindFirstArgs>(args?: SelectSubset<T, directorFindFirstArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Director that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindFirstOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends directorFindFirstOrThrowArgs>(args?: SelectSubset<T, directorFindFirstOrThrowArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.director.findMany()
     * 
     * // Get first 10 Directors
     * const directors = await prisma.director.findMany({ take: 10 })
     * 
     * // Only select the `director_id`
     * const directorWithDirector_idOnly = await prisma.director.findMany({ select: { director_id: true } })
     * 
     */
    findMany<T extends directorFindManyArgs>(args?: SelectSubset<T, directorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Director.
     * @param {directorCreateArgs} args - Arguments to create a Director.
     * @example
     * // Create one Director
     * const Director = await prisma.director.create({
     *   data: {
     *     // ... data to create a Director
     *   }
     * })
     * 
     */
    create<T extends directorCreateArgs>(args: SelectSubset<T, directorCreateArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directors.
     * @param {directorCreateManyArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const director = await prisma.director.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends directorCreateManyArgs>(args?: SelectSubset<T, directorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directors and returns the data saved in the database.
     * @param {directorCreateManyAndReturnArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const director = await prisma.director.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directors and only return the `director_id`
     * const directorWithDirector_idOnly = await prisma.director.createManyAndReturn({
     *   select: { director_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends directorCreateManyAndReturnArgs>(args?: SelectSubset<T, directorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Director.
     * @param {directorDeleteArgs} args - Arguments to delete one Director.
     * @example
     * // Delete one Director
     * const Director = await prisma.director.delete({
     *   where: {
     *     // ... filter to delete one Director
     *   }
     * })
     * 
     */
    delete<T extends directorDeleteArgs>(args: SelectSubset<T, directorDeleteArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Director.
     * @param {directorUpdateArgs} args - Arguments to update one Director.
     * @example
     * // Update one Director
     * const director = await prisma.director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends directorUpdateArgs>(args: SelectSubset<T, directorUpdateArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directors.
     * @param {directorDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends directorDeleteManyArgs>(args?: SelectSubset<T, directorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends directorUpdateManyArgs>(args: SelectSubset<T, directorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors and returns the data updated in the database.
     * @param {directorUpdateManyAndReturnArgs} args - Arguments to update many Directors.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directors and only return the `director_id`
     * const directorWithDirector_idOnly = await prisma.director.updateManyAndReturn({
     *   select: { director_id: true },
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
    updateManyAndReturn<T extends directorUpdateManyAndReturnArgs>(args: SelectSubset<T, directorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Director.
     * @param {directorUpsertArgs} args - Arguments to update or create a Director.
     * @example
     * // Update or create a Director
     * const director = await prisma.director.upsert({
     *   create: {
     *     // ... data to create a Director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Director we want to update
     *   }
     * })
     */
    upsert<T extends directorUpsertArgs>(args: SelectSubset<T, directorUpsertArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.director.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends directorCountArgs>(
      args?: Subset<T, directorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectorAggregateArgs>(args: Subset<T, DirectorAggregateArgs>): Prisma.PrismaPromise<GetDirectorAggregateType<T>>

    /**
     * Group by Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorGroupByArgs} args - Group by arguments.
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
      T extends directorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: directorGroupByArgs['orderBy'] }
        : { orderBy?: directorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, directorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the director model
   */
  readonly fields: directorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__directorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_director<T extends director$film_directorArgs<ExtArgs> = {}>(args?: Subset<T, director$film_directorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the director model
   */
  interface directorFieldRefs {
    readonly director_id: FieldRef<"director", 'Int'>
    readonly first_name: FieldRef<"director", 'String'>
    readonly last_name: FieldRef<"director", 'String'>
    readonly country: FieldRef<"director", 'String'>
  }
    

  // Custom InputTypes
  /**
   * director findUnique
   */
  export type directorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter, which director to fetch.
     */
    where: directorWhereUniqueInput
  }

  /**
   * director findUniqueOrThrow
   */
  export type directorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter, which director to fetch.
     */
    where: directorWhereUniqueInput
  }

  /**
   * director findFirst
   */
  export type directorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter, which director to fetch.
     */
    where?: directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorOrderByWithRelationInput | directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directors.
     */
    cursor?: directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directors.
     */
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * director findFirstOrThrow
   */
  export type directorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter, which director to fetch.
     */
    where?: directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorOrderByWithRelationInput | directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directors.
     */
    cursor?: directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directors.
     */
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * director findMany
   */
  export type directorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where?: directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorOrderByWithRelationInput | directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing directors.
     */
    cursor?: directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directors.
     */
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }

  /**
   * director create
   */
  export type directorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * The data needed to create a director.
     */
    data: XOR<directorCreateInput, directorUncheckedCreateInput>
  }

  /**
   * director createMany
   */
  export type directorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many directors.
     */
    data: directorCreateManyInput | directorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * director createManyAndReturn
   */
  export type directorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * The data used to create many directors.
     */
    data: directorCreateManyInput | directorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * director update
   */
  export type directorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * The data needed to update a director.
     */
    data: XOR<directorUpdateInput, directorUncheckedUpdateInput>
    /**
     * Choose, which director to update.
     */
    where: directorWhereUniqueInput
  }

  /**
   * director updateMany
   */
  export type directorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update directors.
     */
    data: XOR<directorUpdateManyMutationInput, directorUncheckedUpdateManyInput>
    /**
     * Filter which directors to update
     */
    where?: directorWhereInput
    /**
     * Limit how many directors to update.
     */
    limit?: number
  }

  /**
   * director updateManyAndReturn
   */
  export type directorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * The data used to update directors.
     */
    data: XOR<directorUpdateManyMutationInput, directorUncheckedUpdateManyInput>
    /**
     * Filter which directors to update
     */
    where?: directorWhereInput
    /**
     * Limit how many directors to update.
     */
    limit?: number
  }

  /**
   * director upsert
   */
  export type directorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * The filter to search for the director to update in case it exists.
     */
    where: directorWhereUniqueInput
    /**
     * In case the director found by the `where` argument doesn't exist, create a new director with this data.
     */
    create: XOR<directorCreateInput, directorUncheckedCreateInput>
    /**
     * In case the director was found with the provided `where` argument, update it with this data.
     */
    update: XOR<directorUpdateInput, directorUncheckedUpdateInput>
  }

  /**
   * director delete
   */
  export type directorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
    /**
     * Filter which director to delete.
     */
    where: directorWhereUniqueInput
  }

  /**
   * director deleteMany
   */
  export type directorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which directors to delete
     */
    where?: directorWhereInput
    /**
     * Limit how many directors to delete.
     */
    limit?: number
  }

  /**
   * director.film_director
   */
  export type director$film_directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    where?: film_directorWhereInput
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    cursor?: film_directorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_directorScalarFieldEnum | Film_directorScalarFieldEnum[]
  }

  /**
   * director without action
   */
  export type directorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the director
     */
    omit?: directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorInclude<ExtArgs> | null
  }


  /**
   * Model film
   */

  export type AggregateFilm = {
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  export type FilmAvgAggregateOutputType = {
    film_id: number | null
    release_year: number | null
    duration: number | null
    studio_id: number | null
  }

  export type FilmSumAggregateOutputType = {
    film_id: number | null
    release_year: number | null
    duration: number | null
    studio_id: number | null
  }

  export type FilmMinAggregateOutputType = {
    film_id: number | null
    title: string | null
    release_year: number | null
    duration: number | null
    age_restriction: $Enums.restriction | null
    studio_id: number | null
    isAvailable: boolean | null
  }

  export type FilmMaxAggregateOutputType = {
    film_id: number | null
    title: string | null
    release_year: number | null
    duration: number | null
    age_restriction: $Enums.restriction | null
    studio_id: number | null
    isAvailable: boolean | null
  }

  export type FilmCountAggregateOutputType = {
    film_id: number
    title: number
    release_year: number
    duration: number
    age_restriction: number
    studio_id: number
    isAvailable: number
    _all: number
  }


  export type FilmAvgAggregateInputType = {
    film_id?: true
    release_year?: true
    duration?: true
    studio_id?: true
  }

  export type FilmSumAggregateInputType = {
    film_id?: true
    release_year?: true
    duration?: true
    studio_id?: true
  }

  export type FilmMinAggregateInputType = {
    film_id?: true
    title?: true
    release_year?: true
    duration?: true
    age_restriction?: true
    studio_id?: true
    isAvailable?: true
  }

  export type FilmMaxAggregateInputType = {
    film_id?: true
    title?: true
    release_year?: true
    duration?: true
    age_restriction?: true
    studio_id?: true
    isAvailable?: true
  }

  export type FilmCountAggregateInputType = {
    film_id?: true
    title?: true
    release_year?: true
    duration?: true
    age_restriction?: true
    studio_id?: true
    isAvailable?: true
    _all?: true
  }

  export type FilmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film to aggregate.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmOrderByWithRelationInput | filmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned films
    **/
    _count?: true | FilmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmMaxAggregateInputType
  }

  export type GetFilmAggregateType<T extends FilmAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm[P]>
      : GetScalarType<T[P], AggregateFilm[P]>
  }




  export type filmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmWhereInput
    orderBy?: filmOrderByWithAggregationInput | filmOrderByWithAggregationInput[]
    by: FilmScalarFieldEnum[] | FilmScalarFieldEnum
    having?: filmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmCountAggregateInputType | true
    _avg?: FilmAvgAggregateInputType
    _sum?: FilmSumAggregateInputType
    _min?: FilmMinAggregateInputType
    _max?: FilmMaxAggregateInputType
  }

  export type FilmGroupByOutputType = {
    film_id: number
    title: string | null
    release_year: number | null
    duration: number | null
    age_restriction: $Enums.restriction | null
    studio_id: number | null
    isAvailable: boolean
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  type GetFilmGroupByPayload<T extends filmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmGroupByOutputType[P]>
            : GetScalarType<T[P], FilmGroupByOutputType[P]>
        }
      >
    >


  export type filmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    title?: boolean
    release_year?: boolean
    duration?: boolean
    age_restriction?: boolean
    studio_id?: boolean
    isAvailable?: boolean
    studio?: boolean | film$studioArgs<ExtArgs>
    film_actor?: boolean | film$film_actorArgs<ExtArgs>
    film_director?: boolean | film$film_directorArgs<ExtArgs>
    film_genre?: boolean | film$film_genreArgs<ExtArgs>
    reviews?: boolean | film$reviewsArgs<ExtArgs>
    _count?: boolean | FilmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film"]>

  export type filmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    title?: boolean
    release_year?: boolean
    duration?: boolean
    age_restriction?: boolean
    studio_id?: boolean
    isAvailable?: boolean
    studio?: boolean | film$studioArgs<ExtArgs>
  }, ExtArgs["result"]["film"]>

  export type filmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    title?: boolean
    release_year?: boolean
    duration?: boolean
    age_restriction?: boolean
    studio_id?: boolean
    isAvailable?: boolean
    studio?: boolean | film$studioArgs<ExtArgs>
  }, ExtArgs["result"]["film"]>

  export type filmSelectScalar = {
    film_id?: boolean
    title?: boolean
    release_year?: boolean
    duration?: boolean
    age_restriction?: boolean
    studio_id?: boolean
    isAvailable?: boolean
  }

  export type filmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"film_id" | "title" | "release_year" | "duration" | "age_restriction" | "studio_id" | "isAvailable", ExtArgs["result"]["film"]>
  export type filmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | film$studioArgs<ExtArgs>
    film_actor?: boolean | film$film_actorArgs<ExtArgs>
    film_director?: boolean | film$film_directorArgs<ExtArgs>
    film_genre?: boolean | film$film_genreArgs<ExtArgs>
    reviews?: boolean | film$reviewsArgs<ExtArgs>
    _count?: boolean | FilmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type filmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | film$studioArgs<ExtArgs>
  }
  export type filmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | film$studioArgs<ExtArgs>
  }

  export type $filmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film"
    objects: {
      studio: Prisma.$studioPayload<ExtArgs> | null
      film_actor: Prisma.$film_actorPayload<ExtArgs>[]
      film_director: Prisma.$film_directorPayload<ExtArgs>[]
      film_genre: Prisma.$film_genrePayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      film_id: number
      title: string | null
      release_year: number | null
      duration: number | null
      age_restriction: $Enums.restriction | null
      studio_id: number | null
      isAvailable: boolean
    }, ExtArgs["result"]["film"]>
    composites: {}
  }

  type filmGetPayload<S extends boolean | null | undefined | filmDefaultArgs> = $Result.GetResult<Prisma.$filmPayload, S>

  type filmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmCountAggregateInputType | true
    }

  export interface filmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film'], meta: { name: 'film' } }
    /**
     * Find zero or one Film that matches the filter.
     * @param {filmFindUniqueArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filmFindUniqueArgs>(args: SelectSubset<T, filmFindUniqueArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filmFindUniqueOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filmFindUniqueOrThrowArgs>(args: SelectSubset<T, filmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindFirstArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filmFindFirstArgs>(args?: SelectSubset<T, filmFindFirstArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindFirstOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filmFindFirstOrThrowArgs>(args?: SelectSubset<T, filmFindFirstOrThrowArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.film.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.film.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const filmWithFilm_idOnly = await prisma.film.findMany({ select: { film_id: true } })
     * 
     */
    findMany<T extends filmFindManyArgs>(args?: SelectSubset<T, filmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film.
     * @param {filmCreateArgs} args - Arguments to create a Film.
     * @example
     * // Create one Film
     * const Film = await prisma.film.create({
     *   data: {
     *     // ... data to create a Film
     *   }
     * })
     * 
     */
    create<T extends filmCreateArgs>(args: SelectSubset<T, filmCreateArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Films.
     * @param {filmCreateManyArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const film = await prisma.film.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filmCreateManyArgs>(args?: SelectSubset<T, filmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Films and returns the data saved in the database.
     * @param {filmCreateManyAndReturnArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const film = await prisma.film.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Films and only return the `film_id`
     * const filmWithFilm_idOnly = await prisma.film.createManyAndReturn({
     *   select: { film_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filmCreateManyAndReturnArgs>(args?: SelectSubset<T, filmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film.
     * @param {filmDeleteArgs} args - Arguments to delete one Film.
     * @example
     * // Delete one Film
     * const Film = await prisma.film.delete({
     *   where: {
     *     // ... filter to delete one Film
     *   }
     * })
     * 
     */
    delete<T extends filmDeleteArgs>(args: SelectSubset<T, filmDeleteArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film.
     * @param {filmUpdateArgs} args - Arguments to update one Film.
     * @example
     * // Update one Film
     * const film = await prisma.film.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filmUpdateArgs>(args: SelectSubset<T, filmUpdateArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Films.
     * @param {filmDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.film.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filmDeleteManyArgs>(args?: SelectSubset<T, filmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const film = await prisma.film.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filmUpdateManyArgs>(args: SelectSubset<T, filmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films and returns the data updated in the database.
     * @param {filmUpdateManyAndReturnArgs} args - Arguments to update many Films.
     * @example
     * // Update many Films
     * const film = await prisma.film.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Films and only return the `film_id`
     * const filmWithFilm_idOnly = await prisma.film.updateManyAndReturn({
     *   select: { film_id: true },
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
    updateManyAndReturn<T extends filmUpdateManyAndReturnArgs>(args: SelectSubset<T, filmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film.
     * @param {filmUpsertArgs} args - Arguments to update or create a Film.
     * @example
     * // Update or create a Film
     * const film = await prisma.film.upsert({
     *   create: {
     *     // ... data to create a Film
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film we want to update
     *   }
     * })
     */
    upsert<T extends filmUpsertArgs>(args: SelectSubset<T, filmUpsertArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.film.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends filmCountArgs>(
      args?: Subset<T, filmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmAggregateArgs>(args: Subset<T, FilmAggregateArgs>): Prisma.PrismaPromise<GetFilmAggregateType<T>>

    /**
     * Group by Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmGroupByArgs} args - Group by arguments.
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
      T extends filmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filmGroupByArgs['orderBy'] }
        : { orderBy?: filmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film model
   */
  readonly fields: filmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studio<T extends film$studioArgs<ExtArgs> = {}>(args?: Subset<T, film$studioArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    film_actor<T extends film$film_actorArgs<ExtArgs> = {}>(args?: Subset<T, film$film_actorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    film_director<T extends film$film_directorArgs<ExtArgs> = {}>(args?: Subset<T, film$film_directorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    film_genre<T extends film$film_genreArgs<ExtArgs> = {}>(args?: Subset<T, film$film_genreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends film$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, film$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the film model
   */
  interface filmFieldRefs {
    readonly film_id: FieldRef<"film", 'Int'>
    readonly title: FieldRef<"film", 'String'>
    readonly release_year: FieldRef<"film", 'Int'>
    readonly duration: FieldRef<"film", 'Int'>
    readonly age_restriction: FieldRef<"film", 'restriction'>
    readonly studio_id: FieldRef<"film", 'Int'>
    readonly isAvailable: FieldRef<"film", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * film findUnique
   */
  export type filmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter, which film to fetch.
     */
    where: filmWhereUniqueInput
  }

  /**
   * film findUniqueOrThrow
   */
  export type filmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter, which film to fetch.
     */
    where: filmWhereUniqueInput
  }

  /**
   * film findFirst
   */
  export type filmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter, which film to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmOrderByWithRelationInput | filmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmScalarFieldEnum | FilmScalarFieldEnum[]
  }

  /**
   * film findFirstOrThrow
   */
  export type filmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter, which film to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmOrderByWithRelationInput | filmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmScalarFieldEnum | FilmScalarFieldEnum[]
  }

  /**
   * film findMany
   */
  export type filmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmOrderByWithRelationInput | filmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing films.
     */
    cursor?: filmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmScalarFieldEnum | FilmScalarFieldEnum[]
  }

  /**
   * film create
   */
  export type filmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * The data needed to create a film.
     */
    data?: XOR<filmCreateInput, filmUncheckedCreateInput>
  }

  /**
   * film createMany
   */
  export type filmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many films.
     */
    data: filmCreateManyInput | filmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film createManyAndReturn
   */
  export type filmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * The data used to create many films.
     */
    data: filmCreateManyInput | filmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film update
   */
  export type filmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * The data needed to update a film.
     */
    data: XOR<filmUpdateInput, filmUncheckedUpdateInput>
    /**
     * Choose, which film to update.
     */
    where: filmWhereUniqueInput
  }

  /**
   * film updateMany
   */
  export type filmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update films.
     */
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * film updateManyAndReturn
   */
  export type filmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * The data used to update films.
     */
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film upsert
   */
  export type filmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * The filter to search for the film to update in case it exists.
     */
    where: filmWhereUniqueInput
    /**
     * In case the film found by the `where` argument doesn't exist, create a new film with this data.
     */
    create: XOR<filmCreateInput, filmUncheckedCreateInput>
    /**
     * In case the film was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmUpdateInput, filmUncheckedUpdateInput>
  }

  /**
   * film delete
   */
  export type filmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    /**
     * Filter which film to delete.
     */
    where: filmWhereUniqueInput
  }

  /**
   * film deleteMany
   */
  export type filmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to delete
     */
    where?: filmWhereInput
    /**
     * Limit how many films to delete.
     */
    limit?: number
  }

  /**
   * film.studio
   */
  export type film$studioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    where?: studioWhereInput
  }

  /**
   * film.film_actor
   */
  export type film$film_actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    where?: film_actorWhereInput
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    cursor?: film_actorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_actorScalarFieldEnum | Film_actorScalarFieldEnum[]
  }

  /**
   * film.film_director
   */
  export type film$film_directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    where?: film_directorWhereInput
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    cursor?: film_directorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_directorScalarFieldEnum | Film_directorScalarFieldEnum[]
  }

  /**
   * film.film_genre
   */
  export type film$film_genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    where?: film_genreWhereInput
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    cursor?: film_genreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genreScalarFieldEnum | Film_genreScalarFieldEnum[]
  }

  /**
   * film.reviews
   */
  export type film$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * film without action
   */
  export type filmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
  }


  /**
   * Model film_actor
   */

  export type AggregateFilm_actor = {
    _count: Film_actorCountAggregateOutputType | null
    _avg: Film_actorAvgAggregateOutputType | null
    _sum: Film_actorSumAggregateOutputType | null
    _min: Film_actorMinAggregateOutputType | null
    _max: Film_actorMaxAggregateOutputType | null
  }

  export type Film_actorAvgAggregateOutputType = {
    film_id: number | null
    actor_id: number | null
  }

  export type Film_actorSumAggregateOutputType = {
    film_id: number | null
    actor_id: number | null
  }

  export type Film_actorMinAggregateOutputType = {
    film_id: number | null
    actor_id: number | null
  }

  export type Film_actorMaxAggregateOutputType = {
    film_id: number | null
    actor_id: number | null
  }

  export type Film_actorCountAggregateOutputType = {
    film_id: number
    actor_id: number
    _all: number
  }


  export type Film_actorAvgAggregateInputType = {
    film_id?: true
    actor_id?: true
  }

  export type Film_actorSumAggregateInputType = {
    film_id?: true
    actor_id?: true
  }

  export type Film_actorMinAggregateInputType = {
    film_id?: true
    actor_id?: true
  }

  export type Film_actorMaxAggregateInputType = {
    film_id?: true
    actor_id?: true
  }

  export type Film_actorCountAggregateInputType = {
    film_id?: true
    actor_id?: true
    _all?: true
  }

  export type Film_actorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_actor to aggregate.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_actors
    **/
    _count?: true | Film_actorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_actorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_actorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_actorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_actorMaxAggregateInputType
  }

  export type GetFilm_actorAggregateType<T extends Film_actorAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_actor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_actor[P]>
      : GetScalarType<T[P], AggregateFilm_actor[P]>
  }




  export type film_actorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_actorWhereInput
    orderBy?: film_actorOrderByWithAggregationInput | film_actorOrderByWithAggregationInput[]
    by: Film_actorScalarFieldEnum[] | Film_actorScalarFieldEnum
    having?: film_actorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_actorCountAggregateInputType | true
    _avg?: Film_actorAvgAggregateInputType
    _sum?: Film_actorSumAggregateInputType
    _min?: Film_actorMinAggregateInputType
    _max?: Film_actorMaxAggregateInputType
  }

  export type Film_actorGroupByOutputType = {
    film_id: number
    actor_id: number
    _count: Film_actorCountAggregateOutputType | null
    _avg: Film_actorAvgAggregateOutputType | null
    _sum: Film_actorSumAggregateOutputType | null
    _min: Film_actorMinAggregateOutputType | null
    _max: Film_actorMaxAggregateOutputType | null
  }

  type GetFilm_actorGroupByPayload<T extends film_actorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_actorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_actorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_actorGroupByOutputType[P]>
            : GetScalarType<T[P], Film_actorGroupByOutputType[P]>
        }
      >
    >


  export type film_actorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    actor_id?: boolean
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_actor"]>

  export type film_actorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    actor_id?: boolean
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_actor"]>

  export type film_actorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    actor_id?: boolean
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_actor"]>

  export type film_actorSelectScalar = {
    film_id?: boolean
    actor_id?: boolean
  }

  export type film_actorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"film_id" | "actor_id", ExtArgs["result"]["film_actor"]>
  export type film_actorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }
  export type film_actorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }
  export type film_actorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | actorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }

  export type $film_actorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_actor"
    objects: {
      actor: Prisma.$actorPayload<ExtArgs>
      film: Prisma.$filmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      film_id: number
      actor_id: number
    }, ExtArgs["result"]["film_actor"]>
    composites: {}
  }

  type film_actorGetPayload<S extends boolean | null | undefined | film_actorDefaultArgs> = $Result.GetResult<Prisma.$film_actorPayload, S>

  type film_actorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_actorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_actorCountAggregateInputType | true
    }

  export interface film_actorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_actor'], meta: { name: 'film_actor' } }
    /**
     * Find zero or one Film_actor that matches the filter.
     * @param {film_actorFindUniqueArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_actorFindUniqueArgs>(args: SelectSubset<T, film_actorFindUniqueArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_actorFindUniqueOrThrowArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_actorFindUniqueOrThrowArgs>(args: SelectSubset<T, film_actorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindFirstArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_actorFindFirstArgs>(args?: SelectSubset<T, film_actorFindFirstArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindFirstOrThrowArgs} args - Arguments to find a Film_actor
     * @example
     * // Get one Film_actor
     * const film_actor = await prisma.film_actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_actorFindFirstOrThrowArgs>(args?: SelectSubset<T, film_actorFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_actors
     * const film_actors = await prisma.film_actor.findMany()
     * 
     * // Get first 10 Film_actors
     * const film_actors = await prisma.film_actor.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_actorWithFilm_idOnly = await prisma.film_actor.findMany({ select: { film_id: true } })
     * 
     */
    findMany<T extends film_actorFindManyArgs>(args?: SelectSubset<T, film_actorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_actor.
     * @param {film_actorCreateArgs} args - Arguments to create a Film_actor.
     * @example
     * // Create one Film_actor
     * const Film_actor = await prisma.film_actor.create({
     *   data: {
     *     // ... data to create a Film_actor
     *   }
     * })
     * 
     */
    create<T extends film_actorCreateArgs>(args: SelectSubset<T, film_actorCreateArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_actors.
     * @param {film_actorCreateManyArgs} args - Arguments to create many Film_actors.
     * @example
     * // Create many Film_actors
     * const film_actor = await prisma.film_actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_actorCreateManyArgs>(args?: SelectSubset<T, film_actorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_actors and returns the data saved in the database.
     * @param {film_actorCreateManyAndReturnArgs} args - Arguments to create many Film_actors.
     * @example
     * // Create many Film_actors
     * const film_actor = await prisma.film_actor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_actors and only return the `film_id`
     * const film_actorWithFilm_idOnly = await prisma.film_actor.createManyAndReturn({
     *   select: { film_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_actorCreateManyAndReturnArgs>(args?: SelectSubset<T, film_actorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_actor.
     * @param {film_actorDeleteArgs} args - Arguments to delete one Film_actor.
     * @example
     * // Delete one Film_actor
     * const Film_actor = await prisma.film_actor.delete({
     *   where: {
     *     // ... filter to delete one Film_actor
     *   }
     * })
     * 
     */
    delete<T extends film_actorDeleteArgs>(args: SelectSubset<T, film_actorDeleteArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_actor.
     * @param {film_actorUpdateArgs} args - Arguments to update one Film_actor.
     * @example
     * // Update one Film_actor
     * const film_actor = await prisma.film_actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_actorUpdateArgs>(args: SelectSubset<T, film_actorUpdateArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_actors.
     * @param {film_actorDeleteManyArgs} args - Arguments to filter Film_actors to delete.
     * @example
     * // Delete a few Film_actors
     * const { count } = await prisma.film_actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_actorDeleteManyArgs>(args?: SelectSubset<T, film_actorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_actors
     * const film_actor = await prisma.film_actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_actorUpdateManyArgs>(args: SelectSubset<T, film_actorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_actors and returns the data updated in the database.
     * @param {film_actorUpdateManyAndReturnArgs} args - Arguments to update many Film_actors.
     * @example
     * // Update many Film_actors
     * const film_actor = await prisma.film_actor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_actors and only return the `film_id`
     * const film_actorWithFilm_idOnly = await prisma.film_actor.updateManyAndReturn({
     *   select: { film_id: true },
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
    updateManyAndReturn<T extends film_actorUpdateManyAndReturnArgs>(args: SelectSubset<T, film_actorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_actor.
     * @param {film_actorUpsertArgs} args - Arguments to update or create a Film_actor.
     * @example
     * // Update or create a Film_actor
     * const film_actor = await prisma.film_actor.upsert({
     *   create: {
     *     // ... data to create a Film_actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_actor we want to update
     *   }
     * })
     */
    upsert<T extends film_actorUpsertArgs>(args: SelectSubset<T, film_actorUpsertArgs<ExtArgs>>): Prisma__film_actorClient<$Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorCountArgs} args - Arguments to filter Film_actors to count.
     * @example
     * // Count the number of Film_actors
     * const count = await prisma.film_actor.count({
     *   where: {
     *     // ... the filter for the Film_actors we want to count
     *   }
     * })
    **/
    count<T extends film_actorCountArgs>(
      args?: Subset<T, film_actorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_actorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_actorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_actorAggregateArgs>(args: Subset<T, Film_actorAggregateArgs>): Prisma.PrismaPromise<GetFilm_actorAggregateType<T>>

    /**
     * Group by Film_actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_actorGroupByArgs} args - Group by arguments.
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
      T extends film_actorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_actorGroupByArgs['orderBy'] }
        : { orderBy?: film_actorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_actorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_actorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_actor model
   */
  readonly fields: film_actorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_actorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends actorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, actorDefaultArgs<ExtArgs>>): Prisma__actorClient<$Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    film<T extends filmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmDefaultArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_actor model
   */
  interface film_actorFieldRefs {
    readonly film_id: FieldRef<"film_actor", 'Int'>
    readonly actor_id: FieldRef<"film_actor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_actor findUnique
   */
  export type film_actorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter, which film_actor to fetch.
     */
    where: film_actorWhereUniqueInput
  }

  /**
   * film_actor findUniqueOrThrow
   */
  export type film_actorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter, which film_actor to fetch.
     */
    where: film_actorWhereUniqueInput
  }

  /**
   * film_actor findFirst
   */
  export type film_actorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter, which film_actor to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_actors.
     */
    distinct?: Film_actorScalarFieldEnum | Film_actorScalarFieldEnum[]
  }

  /**
   * film_actor findFirstOrThrow
   */
  export type film_actorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter, which film_actor to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_actors.
     */
    distinct?: Film_actorScalarFieldEnum | Film_actorScalarFieldEnum[]
  }

  /**
   * film_actor findMany
   */
  export type film_actorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter, which film_actors to fetch.
     */
    where?: film_actorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_actors to fetch.
     */
    orderBy?: film_actorOrderByWithRelationInput | film_actorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_actors.
     */
    cursor?: film_actorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_actors.
     */
    distinct?: Film_actorScalarFieldEnum | Film_actorScalarFieldEnum[]
  }

  /**
   * film_actor create
   */
  export type film_actorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * The data needed to create a film_actor.
     */
    data: XOR<film_actorCreateInput, film_actorUncheckedCreateInput>
  }

  /**
   * film_actor createMany
   */
  export type film_actorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_actors.
     */
    data: film_actorCreateManyInput | film_actorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_actor createManyAndReturn
   */
  export type film_actorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * The data used to create many film_actors.
     */
    data: film_actorCreateManyInput | film_actorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_actor update
   */
  export type film_actorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * The data needed to update a film_actor.
     */
    data: XOR<film_actorUpdateInput, film_actorUncheckedUpdateInput>
    /**
     * Choose, which film_actor to update.
     */
    where: film_actorWhereUniqueInput
  }

  /**
   * film_actor updateMany
   */
  export type film_actorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_actors.
     */
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyInput>
    /**
     * Filter which film_actors to update
     */
    where?: film_actorWhereInput
    /**
     * Limit how many film_actors to update.
     */
    limit?: number
  }

  /**
   * film_actor updateManyAndReturn
   */
  export type film_actorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * The data used to update film_actors.
     */
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyInput>
    /**
     * Filter which film_actors to update
     */
    where?: film_actorWhereInput
    /**
     * Limit how many film_actors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_actor upsert
   */
  export type film_actorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * The filter to search for the film_actor to update in case it exists.
     */
    where: film_actorWhereUniqueInput
    /**
     * In case the film_actor found by the `where` argument doesn't exist, create a new film_actor with this data.
     */
    create: XOR<film_actorCreateInput, film_actorUncheckedCreateInput>
    /**
     * In case the film_actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_actorUpdateInput, film_actorUncheckedUpdateInput>
  }

  /**
   * film_actor delete
   */
  export type film_actorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
    /**
     * Filter which film_actor to delete.
     */
    where: film_actorWhereUniqueInput
  }

  /**
   * film_actor deleteMany
   */
  export type film_actorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_actors to delete
     */
    where?: film_actorWhereInput
    /**
     * Limit how many film_actors to delete.
     */
    limit?: number
  }

  /**
   * film_actor without action
   */
  export type film_actorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_actor
     */
    select?: film_actorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_actor
     */
    omit?: film_actorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_actorInclude<ExtArgs> | null
  }


  /**
   * Model film_director
   */

  export type AggregateFilm_director = {
    _count: Film_directorCountAggregateOutputType | null
    _avg: Film_directorAvgAggregateOutputType | null
    _sum: Film_directorSumAggregateOutputType | null
    _min: Film_directorMinAggregateOutputType | null
    _max: Film_directorMaxAggregateOutputType | null
  }

  export type Film_directorAvgAggregateOutputType = {
    film_id: number | null
    director_id: number | null
  }

  export type Film_directorSumAggregateOutputType = {
    film_id: number | null
    director_id: number | null
  }

  export type Film_directorMinAggregateOutputType = {
    film_id: number | null
    director_id: number | null
  }

  export type Film_directorMaxAggregateOutputType = {
    film_id: number | null
    director_id: number | null
  }

  export type Film_directorCountAggregateOutputType = {
    film_id: number
    director_id: number
    _all: number
  }


  export type Film_directorAvgAggregateInputType = {
    film_id?: true
    director_id?: true
  }

  export type Film_directorSumAggregateInputType = {
    film_id?: true
    director_id?: true
  }

  export type Film_directorMinAggregateInputType = {
    film_id?: true
    director_id?: true
  }

  export type Film_directorMaxAggregateInputType = {
    film_id?: true
    director_id?: true
  }

  export type Film_directorCountAggregateInputType = {
    film_id?: true
    director_id?: true
    _all?: true
  }

  export type Film_directorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_director to aggregate.
     */
    where?: film_directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_directors to fetch.
     */
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_directors
    **/
    _count?: true | Film_directorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_directorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_directorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_directorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_directorMaxAggregateInputType
  }

  export type GetFilm_directorAggregateType<T extends Film_directorAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_director]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_director[P]>
      : GetScalarType<T[P], AggregateFilm_director[P]>
  }




  export type film_directorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_directorWhereInput
    orderBy?: film_directorOrderByWithAggregationInput | film_directorOrderByWithAggregationInput[]
    by: Film_directorScalarFieldEnum[] | Film_directorScalarFieldEnum
    having?: film_directorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_directorCountAggregateInputType | true
    _avg?: Film_directorAvgAggregateInputType
    _sum?: Film_directorSumAggregateInputType
    _min?: Film_directorMinAggregateInputType
    _max?: Film_directorMaxAggregateInputType
  }

  export type Film_directorGroupByOutputType = {
    film_id: number
    director_id: number
    _count: Film_directorCountAggregateOutputType | null
    _avg: Film_directorAvgAggregateOutputType | null
    _sum: Film_directorSumAggregateOutputType | null
    _min: Film_directorMinAggregateOutputType | null
    _max: Film_directorMaxAggregateOutputType | null
  }

  type GetFilm_directorGroupByPayload<T extends film_directorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_directorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_directorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_directorGroupByOutputType[P]>
            : GetScalarType<T[P], Film_directorGroupByOutputType[P]>
        }
      >
    >


  export type film_directorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    director_id?: boolean
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_director"]>

  export type film_directorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    director_id?: boolean
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_director"]>

  export type film_directorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    director_id?: boolean
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_director"]>

  export type film_directorSelectScalar = {
    film_id?: boolean
    director_id?: boolean
  }

  export type film_directorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"film_id" | "director_id", ExtArgs["result"]["film_director"]>
  export type film_directorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }
  export type film_directorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }
  export type film_directorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | directorDefaultArgs<ExtArgs>
    film?: boolean | filmDefaultArgs<ExtArgs>
  }

  export type $film_directorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_director"
    objects: {
      director: Prisma.$directorPayload<ExtArgs>
      film: Prisma.$filmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      film_id: number
      director_id: number
    }, ExtArgs["result"]["film_director"]>
    composites: {}
  }

  type film_directorGetPayload<S extends boolean | null | undefined | film_directorDefaultArgs> = $Result.GetResult<Prisma.$film_directorPayload, S>

  type film_directorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_directorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_directorCountAggregateInputType | true
    }

  export interface film_directorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_director'], meta: { name: 'film_director' } }
    /**
     * Find zero or one Film_director that matches the filter.
     * @param {film_directorFindUniqueArgs} args - Arguments to find a Film_director
     * @example
     * // Get one Film_director
     * const film_director = await prisma.film_director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_directorFindUniqueArgs>(args: SelectSubset<T, film_directorFindUniqueArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_director that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_directorFindUniqueOrThrowArgs} args - Arguments to find a Film_director
     * @example
     * // Get one Film_director
     * const film_director = await prisma.film_director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_directorFindUniqueOrThrowArgs>(args: SelectSubset<T, film_directorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorFindFirstArgs} args - Arguments to find a Film_director
     * @example
     * // Get one Film_director
     * const film_director = await prisma.film_director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_directorFindFirstArgs>(args?: SelectSubset<T, film_directorFindFirstArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_director that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorFindFirstOrThrowArgs} args - Arguments to find a Film_director
     * @example
     * // Get one Film_director
     * const film_director = await prisma.film_director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_directorFindFirstOrThrowArgs>(args?: SelectSubset<T, film_directorFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_directors
     * const film_directors = await prisma.film_director.findMany()
     * 
     * // Get first 10 Film_directors
     * const film_directors = await prisma.film_director.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_directorWithFilm_idOnly = await prisma.film_director.findMany({ select: { film_id: true } })
     * 
     */
    findMany<T extends film_directorFindManyArgs>(args?: SelectSubset<T, film_directorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_director.
     * @param {film_directorCreateArgs} args - Arguments to create a Film_director.
     * @example
     * // Create one Film_director
     * const Film_director = await prisma.film_director.create({
     *   data: {
     *     // ... data to create a Film_director
     *   }
     * })
     * 
     */
    create<T extends film_directorCreateArgs>(args: SelectSubset<T, film_directorCreateArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_directors.
     * @param {film_directorCreateManyArgs} args - Arguments to create many Film_directors.
     * @example
     * // Create many Film_directors
     * const film_director = await prisma.film_director.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_directorCreateManyArgs>(args?: SelectSubset<T, film_directorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_directors and returns the data saved in the database.
     * @param {film_directorCreateManyAndReturnArgs} args - Arguments to create many Film_directors.
     * @example
     * // Create many Film_directors
     * const film_director = await prisma.film_director.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_directors and only return the `film_id`
     * const film_directorWithFilm_idOnly = await prisma.film_director.createManyAndReturn({
     *   select: { film_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_directorCreateManyAndReturnArgs>(args?: SelectSubset<T, film_directorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_director.
     * @param {film_directorDeleteArgs} args - Arguments to delete one Film_director.
     * @example
     * // Delete one Film_director
     * const Film_director = await prisma.film_director.delete({
     *   where: {
     *     // ... filter to delete one Film_director
     *   }
     * })
     * 
     */
    delete<T extends film_directorDeleteArgs>(args: SelectSubset<T, film_directorDeleteArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_director.
     * @param {film_directorUpdateArgs} args - Arguments to update one Film_director.
     * @example
     * // Update one Film_director
     * const film_director = await prisma.film_director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_directorUpdateArgs>(args: SelectSubset<T, film_directorUpdateArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_directors.
     * @param {film_directorDeleteManyArgs} args - Arguments to filter Film_directors to delete.
     * @example
     * // Delete a few Film_directors
     * const { count } = await prisma.film_director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_directorDeleteManyArgs>(args?: SelectSubset<T, film_directorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_directors
     * const film_director = await prisma.film_director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_directorUpdateManyArgs>(args: SelectSubset<T, film_directorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_directors and returns the data updated in the database.
     * @param {film_directorUpdateManyAndReturnArgs} args - Arguments to update many Film_directors.
     * @example
     * // Update many Film_directors
     * const film_director = await prisma.film_director.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_directors and only return the `film_id`
     * const film_directorWithFilm_idOnly = await prisma.film_director.updateManyAndReturn({
     *   select: { film_id: true },
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
    updateManyAndReturn<T extends film_directorUpdateManyAndReturnArgs>(args: SelectSubset<T, film_directorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_director.
     * @param {film_directorUpsertArgs} args - Arguments to update or create a Film_director.
     * @example
     * // Update or create a Film_director
     * const film_director = await prisma.film_director.upsert({
     *   create: {
     *     // ... data to create a Film_director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_director we want to update
     *   }
     * })
     */
    upsert<T extends film_directorUpsertArgs>(args: SelectSubset<T, film_directorUpsertArgs<ExtArgs>>): Prisma__film_directorClient<$Result.GetResult<Prisma.$film_directorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorCountArgs} args - Arguments to filter Film_directors to count.
     * @example
     * // Count the number of Film_directors
     * const count = await prisma.film_director.count({
     *   where: {
     *     // ... the filter for the Film_directors we want to count
     *   }
     * })
    **/
    count<T extends film_directorCountArgs>(
      args?: Subset<T, film_directorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_directorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_directorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_directorAggregateArgs>(args: Subset<T, Film_directorAggregateArgs>): Prisma.PrismaPromise<GetFilm_directorAggregateType<T>>

    /**
     * Group by Film_director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_directorGroupByArgs} args - Group by arguments.
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
      T extends film_directorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_directorGroupByArgs['orderBy'] }
        : { orderBy?: film_directorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_directorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_directorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_director model
   */
  readonly fields: film_directorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_directorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    director<T extends directorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, directorDefaultArgs<ExtArgs>>): Prisma__directorClient<$Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    film<T extends filmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmDefaultArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_director model
   */
  interface film_directorFieldRefs {
    readonly film_id: FieldRef<"film_director", 'Int'>
    readonly director_id: FieldRef<"film_director", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_director findUnique
   */
  export type film_directorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter, which film_director to fetch.
     */
    where: film_directorWhereUniqueInput
  }

  /**
   * film_director findUniqueOrThrow
   */
  export type film_directorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter, which film_director to fetch.
     */
    where: film_directorWhereUniqueInput
  }

  /**
   * film_director findFirst
   */
  export type film_directorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter, which film_director to fetch.
     */
    where?: film_directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_directors to fetch.
     */
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_directors.
     */
    cursor?: film_directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_directors.
     */
    distinct?: Film_directorScalarFieldEnum | Film_directorScalarFieldEnum[]
  }

  /**
   * film_director findFirstOrThrow
   */
  export type film_directorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter, which film_director to fetch.
     */
    where?: film_directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_directors to fetch.
     */
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_directors.
     */
    cursor?: film_directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_directors.
     */
    distinct?: Film_directorScalarFieldEnum | Film_directorScalarFieldEnum[]
  }

  /**
   * film_director findMany
   */
  export type film_directorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter, which film_directors to fetch.
     */
    where?: film_directorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_directors to fetch.
     */
    orderBy?: film_directorOrderByWithRelationInput | film_directorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_directors.
     */
    cursor?: film_directorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_directors.
     */
    distinct?: Film_directorScalarFieldEnum | Film_directorScalarFieldEnum[]
  }

  /**
   * film_director create
   */
  export type film_directorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * The data needed to create a film_director.
     */
    data: XOR<film_directorCreateInput, film_directorUncheckedCreateInput>
  }

  /**
   * film_director createMany
   */
  export type film_directorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_directors.
     */
    data: film_directorCreateManyInput | film_directorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_director createManyAndReturn
   */
  export type film_directorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * The data used to create many film_directors.
     */
    data: film_directorCreateManyInput | film_directorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_director update
   */
  export type film_directorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * The data needed to update a film_director.
     */
    data: XOR<film_directorUpdateInput, film_directorUncheckedUpdateInput>
    /**
     * Choose, which film_director to update.
     */
    where: film_directorWhereUniqueInput
  }

  /**
   * film_director updateMany
   */
  export type film_directorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_directors.
     */
    data: XOR<film_directorUpdateManyMutationInput, film_directorUncheckedUpdateManyInput>
    /**
     * Filter which film_directors to update
     */
    where?: film_directorWhereInput
    /**
     * Limit how many film_directors to update.
     */
    limit?: number
  }

  /**
   * film_director updateManyAndReturn
   */
  export type film_directorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * The data used to update film_directors.
     */
    data: XOR<film_directorUpdateManyMutationInput, film_directorUncheckedUpdateManyInput>
    /**
     * Filter which film_directors to update
     */
    where?: film_directorWhereInput
    /**
     * Limit how many film_directors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_director upsert
   */
  export type film_directorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * The filter to search for the film_director to update in case it exists.
     */
    where: film_directorWhereUniqueInput
    /**
     * In case the film_director found by the `where` argument doesn't exist, create a new film_director with this data.
     */
    create: XOR<film_directorCreateInput, film_directorUncheckedCreateInput>
    /**
     * In case the film_director was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_directorUpdateInput, film_directorUncheckedUpdateInput>
  }

  /**
   * film_director delete
   */
  export type film_directorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
    /**
     * Filter which film_director to delete.
     */
    where: film_directorWhereUniqueInput
  }

  /**
   * film_director deleteMany
   */
  export type film_directorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_directors to delete
     */
    where?: film_directorWhereInput
    /**
     * Limit how many film_directors to delete.
     */
    limit?: number
  }

  /**
   * film_director without action
   */
  export type film_directorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_director
     */
    select?: film_directorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_director
     */
    omit?: film_directorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_directorInclude<ExtArgs> | null
  }


  /**
   * Model film_genre
   */

  export type AggregateFilm_genre = {
    _count: Film_genreCountAggregateOutputType | null
    _avg: Film_genreAvgAggregateOutputType | null
    _sum: Film_genreSumAggregateOutputType | null
    _min: Film_genreMinAggregateOutputType | null
    _max: Film_genreMaxAggregateOutputType | null
  }

  export type Film_genreAvgAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genreSumAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genreMinAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genreMaxAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genreCountAggregateOutputType = {
    film_id: number
    genre_id: number
    _all: number
  }


  export type Film_genreAvgAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genreSumAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genreMinAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genreMaxAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genreCountAggregateInputType = {
    film_id?: true
    genre_id?: true
    _all?: true
  }

  export type Film_genreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genre to aggregate.
     */
    where?: film_genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_genres
    **/
    _count?: true | Film_genreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_genreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_genreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_genreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_genreMaxAggregateInputType
  }

  export type GetFilm_genreAggregateType<T extends Film_genreAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_genre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_genre[P]>
      : GetScalarType<T[P], AggregateFilm_genre[P]>
  }




  export type film_genreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genreWhereInput
    orderBy?: film_genreOrderByWithAggregationInput | film_genreOrderByWithAggregationInput[]
    by: Film_genreScalarFieldEnum[] | Film_genreScalarFieldEnum
    having?: film_genreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_genreCountAggregateInputType | true
    _avg?: Film_genreAvgAggregateInputType
    _sum?: Film_genreSumAggregateInputType
    _min?: Film_genreMinAggregateInputType
    _max?: Film_genreMaxAggregateInputType
  }

  export type Film_genreGroupByOutputType = {
    film_id: number
    genre_id: number
    _count: Film_genreCountAggregateOutputType | null
    _avg: Film_genreAvgAggregateOutputType | null
    _sum: Film_genreSumAggregateOutputType | null
    _min: Film_genreMinAggregateOutputType | null
    _max: Film_genreMaxAggregateOutputType | null
  }

  type GetFilm_genreGroupByPayload<T extends film_genreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_genreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_genreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_genreGroupByOutputType[P]>
            : GetScalarType<T[P], Film_genreGroupByOutputType[P]>
        }
      >
    >


  export type film_genreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genre"]>

  export type film_genreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genre"]>

  export type film_genreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genre"]>

  export type film_genreSelectScalar = {
    film_id?: boolean
    genre_id?: boolean
  }

  export type film_genreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"film_id" | "genre_id", ExtArgs["result"]["film_genre"]>
  export type film_genreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }
  export type film_genreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }
  export type film_genreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }

  export type $film_genrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_genre"
    objects: {
      film: Prisma.$filmPayload<ExtArgs>
      genre: Prisma.$genrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      film_id: number
      genre_id: number
    }, ExtArgs["result"]["film_genre"]>
    composites: {}
  }

  type film_genreGetPayload<S extends boolean | null | undefined | film_genreDefaultArgs> = $Result.GetResult<Prisma.$film_genrePayload, S>

  type film_genreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_genreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_genreCountAggregateInputType | true
    }

  export interface film_genreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_genre'], meta: { name: 'film_genre' } }
    /**
     * Find zero or one Film_genre that matches the filter.
     * @param {film_genreFindUniqueArgs} args - Arguments to find a Film_genre
     * @example
     * // Get one Film_genre
     * const film_genre = await prisma.film_genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_genreFindUniqueArgs>(args: SelectSubset<T, film_genreFindUniqueArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_genreFindUniqueOrThrowArgs} args - Arguments to find a Film_genre
     * @example
     * // Get one Film_genre
     * const film_genre = await prisma.film_genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_genreFindUniqueOrThrowArgs>(args: SelectSubset<T, film_genreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreFindFirstArgs} args - Arguments to find a Film_genre
     * @example
     * // Get one Film_genre
     * const film_genre = await prisma.film_genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_genreFindFirstArgs>(args?: SelectSubset<T, film_genreFindFirstArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreFindFirstOrThrowArgs} args - Arguments to find a Film_genre
     * @example
     * // Get one Film_genre
     * const film_genre = await prisma.film_genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_genreFindFirstOrThrowArgs>(args?: SelectSubset<T, film_genreFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_genres
     * const film_genres = await prisma.film_genre.findMany()
     * 
     * // Get first 10 Film_genres
     * const film_genres = await prisma.film_genre.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_genreWithFilm_idOnly = await prisma.film_genre.findMany({ select: { film_id: true } })
     * 
     */
    findMany<T extends film_genreFindManyArgs>(args?: SelectSubset<T, film_genreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_genre.
     * @param {film_genreCreateArgs} args - Arguments to create a Film_genre.
     * @example
     * // Create one Film_genre
     * const Film_genre = await prisma.film_genre.create({
     *   data: {
     *     // ... data to create a Film_genre
     *   }
     * })
     * 
     */
    create<T extends film_genreCreateArgs>(args: SelectSubset<T, film_genreCreateArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_genres.
     * @param {film_genreCreateManyArgs} args - Arguments to create many Film_genres.
     * @example
     * // Create many Film_genres
     * const film_genre = await prisma.film_genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_genreCreateManyArgs>(args?: SelectSubset<T, film_genreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_genres and returns the data saved in the database.
     * @param {film_genreCreateManyAndReturnArgs} args - Arguments to create many Film_genres.
     * @example
     * // Create many Film_genres
     * const film_genre = await prisma.film_genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_genres and only return the `film_id`
     * const film_genreWithFilm_idOnly = await prisma.film_genre.createManyAndReturn({
     *   select: { film_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_genreCreateManyAndReturnArgs>(args?: SelectSubset<T, film_genreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_genre.
     * @param {film_genreDeleteArgs} args - Arguments to delete one Film_genre.
     * @example
     * // Delete one Film_genre
     * const Film_genre = await prisma.film_genre.delete({
     *   where: {
     *     // ... filter to delete one Film_genre
     *   }
     * })
     * 
     */
    delete<T extends film_genreDeleteArgs>(args: SelectSubset<T, film_genreDeleteArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_genre.
     * @param {film_genreUpdateArgs} args - Arguments to update one Film_genre.
     * @example
     * // Update one Film_genre
     * const film_genre = await prisma.film_genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_genreUpdateArgs>(args: SelectSubset<T, film_genreUpdateArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_genres.
     * @param {film_genreDeleteManyArgs} args - Arguments to filter Film_genres to delete.
     * @example
     * // Delete a few Film_genres
     * const { count } = await prisma.film_genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_genreDeleteManyArgs>(args?: SelectSubset<T, film_genreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_genres
     * const film_genre = await prisma.film_genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_genreUpdateManyArgs>(args: SelectSubset<T, film_genreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_genres and returns the data updated in the database.
     * @param {film_genreUpdateManyAndReturnArgs} args - Arguments to update many Film_genres.
     * @example
     * // Update many Film_genres
     * const film_genre = await prisma.film_genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_genres and only return the `film_id`
     * const film_genreWithFilm_idOnly = await prisma.film_genre.updateManyAndReturn({
     *   select: { film_id: true },
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
    updateManyAndReturn<T extends film_genreUpdateManyAndReturnArgs>(args: SelectSubset<T, film_genreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_genre.
     * @param {film_genreUpsertArgs} args - Arguments to update or create a Film_genre.
     * @example
     * // Update or create a Film_genre
     * const film_genre = await prisma.film_genre.upsert({
     *   create: {
     *     // ... data to create a Film_genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_genre we want to update
     *   }
     * })
     */
    upsert<T extends film_genreUpsertArgs>(args: SelectSubset<T, film_genreUpsertArgs<ExtArgs>>): Prisma__film_genreClient<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreCountArgs} args - Arguments to filter Film_genres to count.
     * @example
     * // Count the number of Film_genres
     * const count = await prisma.film_genre.count({
     *   where: {
     *     // ... the filter for the Film_genres we want to count
     *   }
     * })
    **/
    count<T extends film_genreCountArgs>(
      args?: Subset<T, film_genreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_genreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_genreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_genreAggregateArgs>(args: Subset<T, Film_genreAggregateArgs>): Prisma.PrismaPromise<GetFilm_genreAggregateType<T>>

    /**
     * Group by Film_genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genreGroupByArgs} args - Group by arguments.
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
      T extends film_genreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_genreGroupByArgs['orderBy'] }
        : { orderBy?: film_genreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_genreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_genreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_genre model
   */
  readonly fields: film_genreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_genreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film<T extends filmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmDefaultArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends genreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, genreDefaultArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_genre model
   */
  interface film_genreFieldRefs {
    readonly film_id: FieldRef<"film_genre", 'Int'>
    readonly genre_id: FieldRef<"film_genre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_genre findUnique
   */
  export type film_genreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter, which film_genre to fetch.
     */
    where: film_genreWhereUniqueInput
  }

  /**
   * film_genre findUniqueOrThrow
   */
  export type film_genreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter, which film_genre to fetch.
     */
    where: film_genreWhereUniqueInput
  }

  /**
   * film_genre findFirst
   */
  export type film_genreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter, which film_genre to fetch.
     */
    where?: film_genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genreScalarFieldEnum | Film_genreScalarFieldEnum[]
  }

  /**
   * film_genre findFirstOrThrow
   */
  export type film_genreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter, which film_genre to fetch.
     */
    where?: film_genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genreScalarFieldEnum | Film_genreScalarFieldEnum[]
  }

  /**
   * film_genre findMany
   */
  export type film_genreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_genres.
     */
    cursor?: film_genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genreScalarFieldEnum | Film_genreScalarFieldEnum[]
  }

  /**
   * film_genre create
   */
  export type film_genreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * The data needed to create a film_genre.
     */
    data: XOR<film_genreCreateInput, film_genreUncheckedCreateInput>
  }

  /**
   * film_genre createMany
   */
  export type film_genreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_genres.
     */
    data: film_genreCreateManyInput | film_genreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_genre createManyAndReturn
   */
  export type film_genreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * The data used to create many film_genres.
     */
    data: film_genreCreateManyInput | film_genreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genre update
   */
  export type film_genreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * The data needed to update a film_genre.
     */
    data: XOR<film_genreUpdateInput, film_genreUncheckedUpdateInput>
    /**
     * Choose, which film_genre to update.
     */
    where: film_genreWhereUniqueInput
  }

  /**
   * film_genre updateMany
   */
  export type film_genreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_genres.
     */
    data: XOR<film_genreUpdateManyMutationInput, film_genreUncheckedUpdateManyInput>
    /**
     * Filter which film_genres to update
     */
    where?: film_genreWhereInput
    /**
     * Limit how many film_genres to update.
     */
    limit?: number
  }

  /**
   * film_genre updateManyAndReturn
   */
  export type film_genreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * The data used to update film_genres.
     */
    data: XOR<film_genreUpdateManyMutationInput, film_genreUncheckedUpdateManyInput>
    /**
     * Filter which film_genres to update
     */
    where?: film_genreWhereInput
    /**
     * Limit how many film_genres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genre upsert
   */
  export type film_genreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * The filter to search for the film_genre to update in case it exists.
     */
    where: film_genreWhereUniqueInput
    /**
     * In case the film_genre found by the `where` argument doesn't exist, create a new film_genre with this data.
     */
    create: XOR<film_genreCreateInput, film_genreUncheckedCreateInput>
    /**
     * In case the film_genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_genreUpdateInput, film_genreUncheckedUpdateInput>
  }

  /**
   * film_genre delete
   */
  export type film_genreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    /**
     * Filter which film_genre to delete.
     */
    where: film_genreWhereUniqueInput
  }

  /**
   * film_genre deleteMany
   */
  export type film_genreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genres to delete
     */
    where?: film_genreWhereInput
    /**
     * Limit how many film_genres to delete.
     */
    limit?: number
  }

  /**
   * film_genre without action
   */
  export type film_genreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
  }


  /**
   * Model genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    genre_id: number | null
  }

  export type GenreSumAggregateOutputType = {
    genre_id: number | null
  }

  export type GenreMinAggregateOutputType = {
    genre_id: number | null
    name: string | null
    description: string | null
  }

  export type GenreMaxAggregateOutputType = {
    genre_id: number | null
    name: string | null
    description: string | null
  }

  export type GenreCountAggregateOutputType = {
    genre_id: number
    name: number
    description: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    genre_id?: true
  }

  export type GenreSumAggregateInputType = {
    genre_id?: true
  }

  export type GenreMinAggregateInputType = {
    genre_id?: true
    name?: true
    description?: true
  }

  export type GenreMaxAggregateInputType = {
    genre_id?: true
    name?: true
    description?: true
  }

  export type GenreCountAggregateInputType = {
    genre_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genre to aggregate.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type genreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genreWhereInput
    orderBy?: genreOrderByWithAggregationInput | genreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: genreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    genre_id: number
    name: string | null
    description: string | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends genreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type genreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name?: boolean
    description?: boolean
    film_genre?: boolean | genre$film_genreArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type genreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["genre"]>

  export type genreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["genre"]>

  export type genreSelectScalar = {
    genre_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type genreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genre_id" | "name" | "description", ExtArgs["result"]["genre"]>
  export type genreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genre?: boolean | genre$film_genreArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genre"
    objects: {
      film_genre: Prisma.$film_genrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      genre_id: number
      name: string | null
      description: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type genreGetPayload<S extends boolean | null | undefined | genreDefaultArgs> = $Result.GetResult<Prisma.$genrePayload, S>

  type genreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface genreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genre'], meta: { name: 'genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {genreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genreFindUniqueArgs>(args: SelectSubset<T, genreFindUniqueArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genreFindUniqueOrThrowArgs>(args: SelectSubset<T, genreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genreFindFirstArgs>(args?: SelectSubset<T, genreFindFirstArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genreFindFirstOrThrowArgs>(args?: SelectSubset<T, genreFindFirstOrThrowArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.findMany({ select: { genre_id: true } })
     * 
     */
    findMany<T extends genreFindManyArgs>(args?: SelectSubset<T, genreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {genreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends genreCreateArgs>(args: SelectSubset<T, genreCreateArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genreCreateManyArgs>(args?: SelectSubset<T, genreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.createManyAndReturn({
     *   select: { genre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genreCreateManyAndReturnArgs>(args?: SelectSubset<T, genreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {genreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends genreDeleteArgs>(args: SelectSubset<T, genreDeleteArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {genreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genreUpdateArgs>(args: SelectSubset<T, genreUpdateArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genreDeleteManyArgs>(args?: SelectSubset<T, genreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genreUpdateManyArgs>(args: SelectSubset<T, genreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.updateManyAndReturn({
     *   select: { genre_id: true },
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
    updateManyAndReturn<T extends genreUpdateManyAndReturnArgs>(args: SelectSubset<T, genreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {genreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends genreUpsertArgs>(args: SelectSubset<T, genreUpsertArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genreCountArgs>(
      args?: Subset<T, genreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreGroupByArgs} args - Group by arguments.
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
      T extends genreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genreGroupByArgs['orderBy'] }
        : { orderBy?: genreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, genreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genre model
   */
  readonly fields: genreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_genre<T extends genre$film_genreArgs<ExtArgs> = {}>(args?: Subset<T, genre$film_genreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the genre model
   */
  interface genreFieldRefs {
    readonly genre_id: FieldRef<"genre", 'Int'>
    readonly name: FieldRef<"genre", 'String'>
    readonly description: FieldRef<"genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genre findUnique
   */
  export type genreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre findUniqueOrThrow
   */
  export type genreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre findFirst
   */
  export type genreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre findFirstOrThrow
   */
  export type genreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre findMany
   */
  export type genreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre create
   */
  export type genreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The data needed to create a genre.
     */
    data?: XOR<genreCreateInput, genreUncheckedCreateInput>
  }

  /**
   * genre createMany
   */
  export type genreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genreCreateManyInput | genreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genre createManyAndReturn
   */
  export type genreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genreCreateManyInput | genreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genre update
   */
  export type genreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The data needed to update a genre.
     */
    data: XOR<genreUpdateInput, genreUncheckedUpdateInput>
    /**
     * Choose, which genre to update.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre updateMany
   */
  export type genreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genreUpdateManyMutationInput, genreUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genre updateManyAndReturn
   */
  export type genreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genreUpdateManyMutationInput, genreUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genre upsert
   */
  export type genreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The filter to search for the genre to update in case it exists.
     */
    where: genreWhereUniqueInput
    /**
     * In case the genre found by the `where` argument doesn't exist, create a new genre with this data.
     */
    create: XOR<genreCreateInput, genreUncheckedCreateInput>
    /**
     * In case the genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genreUpdateInput, genreUncheckedUpdateInput>
  }

  /**
   * genre delete
   */
  export type genreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter which genre to delete.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre deleteMany
   */
  export type genreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genre.film_genre
   */
  export type genre$film_genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genre
     */
    select?: film_genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genre
     */
    omit?: film_genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genreInclude<ExtArgs> | null
    where?: film_genreWhereInput
    orderBy?: film_genreOrderByWithRelationInput | film_genreOrderByWithRelationInput[]
    cursor?: film_genreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genreScalarFieldEnum | Film_genreScalarFieldEnum[]
  }

  /**
   * genre without action
   */
  export type genreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    amount: number | null
    customer_id: number | null
    subscription_id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    amount: number | null
    customer_id: number | null
    subscription_id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    amount: number | null
    payment_type: $Enums.payment_type | null
    payment_date: Date | null
    status: boolean | null
    customer_id: number | null
    subscription_id: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    amount: number | null
    payment_type: $Enums.payment_type | null
    payment_date: Date | null
    status: boolean | null
    customer_id: number | null
    subscription_id: number | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    amount: number
    payment_type: number
    payment_date: number
    status: number
    customer_id: number
    subscription_id: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    amount?: true
    customer_id?: true
    subscription_id?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    amount?: true
    customer_id?: true
    subscription_id?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_type?: true
    payment_date?: true
    status?: true
    customer_id?: true
    subscription_id?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_type?: true
    payment_date?: true
    status?: true
    customer_id?: true
    subscription_id?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_type?: true
    payment_date?: true
    status?: true
    customer_id?: true
    subscription_id?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    amount: number | null
    payment_type: $Enums.payment_type | null
    payment_date: Date | null
    status: boolean | null
    customer_id: number | null
    subscription_id: number | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_type?: boolean
    payment_date?: boolean
    status?: boolean
    customer_id?: boolean
    subscription_id?: boolean
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_type?: boolean
    payment_date?: boolean
    status?: boolean
    customer_id?: boolean
    subscription_id?: boolean
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_type?: boolean
    payment_date?: boolean
    status?: boolean
    customer_id?: boolean
    subscription_id?: boolean
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    payment_id?: boolean
    amount?: boolean
    payment_type?: boolean
    payment_date?: boolean
    status?: boolean
    customer_id?: boolean
    subscription_id?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "amount" | "payment_type" | "payment_date" | "status" | "customer_id" | "subscription_id", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | payment$customerArgs<ExtArgs>
    subscription?: boolean | payment$subscriptionArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs> | null
      subscription: Prisma.$subscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      amount: number | null
      payment_type: $Enums.payment_type | null
      payment_date: Date | null
      status: boolean | null
      customer_id: number | null
      subscription_id: number | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
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
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends payment$customerArgs<ExtArgs> = {}>(args?: Subset<T, payment$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends payment$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, payment$subscriptionArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly payment_id: FieldRef<"payment", 'Int'>
    readonly amount: FieldRef<"payment", 'Float'>
    readonly payment_type: FieldRef<"payment", 'payment_type'>
    readonly payment_date: FieldRef<"payment", 'DateTime'>
    readonly status: FieldRef<"payment", 'Boolean'>
    readonly customer_id: FieldRef<"payment", 'Int'>
    readonly subscription_id: FieldRef<"payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data?: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment.customer
   */
  export type payment$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * payment.subscription
   */
  export type payment$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    where?: subscriptionWhereInput
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model studio
   */

  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioAvgAggregateOutputType = {
    studio_id: number | null
  }

  export type StudioSumAggregateOutputType = {
    studio_id: number | null
  }

  export type StudioMinAggregateOutputType = {
    studio_id: number | null
    name: string | null
    country: string | null
    founded_date: Date | null
  }

  export type StudioMaxAggregateOutputType = {
    studio_id: number | null
    name: string | null
    country: string | null
    founded_date: Date | null
  }

  export type StudioCountAggregateOutputType = {
    studio_id: number
    name: number
    country: number
    founded_date: number
    _all: number
  }


  export type StudioAvgAggregateInputType = {
    studio_id?: true
  }

  export type StudioSumAggregateInputType = {
    studio_id?: true
  }

  export type StudioMinAggregateInputType = {
    studio_id?: true
    name?: true
    country?: true
    founded_date?: true
  }

  export type StudioMaxAggregateInputType = {
    studio_id?: true
    name?: true
    country?: true
    founded_date?: true
  }

  export type StudioCountAggregateInputType = {
    studio_id?: true
    name?: true
    country?: true
    founded_date?: true
    _all?: true
  }

  export type StudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studio to aggregate.
     */
    where?: studioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studios to fetch.
     */
    orderBy?: studioOrderByWithRelationInput | studioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type studioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studioWhereInput
    orderBy?: studioOrderByWithAggregationInput | studioOrderByWithAggregationInput[]
    by: StudioScalarFieldEnum[] | StudioScalarFieldEnum
    having?: studioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _avg?: StudioAvgAggregateInputType
    _sum?: StudioSumAggregateInputType
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }

  export type StudioGroupByOutputType = {
    studio_id: number
    name: string
    country: string
    founded_date: Date | null
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends studioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type studioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studio_id?: boolean
    name?: boolean
    country?: boolean
    founded_date?: boolean
    film?: boolean | studio$filmArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type studioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studio_id?: boolean
    name?: boolean
    country?: boolean
    founded_date?: boolean
  }, ExtArgs["result"]["studio"]>

  export type studioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studio_id?: boolean
    name?: boolean
    country?: boolean
    founded_date?: boolean
  }, ExtArgs["result"]["studio"]>

  export type studioSelectScalar = {
    studio_id?: boolean
    name?: boolean
    country?: boolean
    founded_date?: boolean
  }

  export type studioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studio_id" | "name" | "country" | "founded_date", ExtArgs["result"]["studio"]>
  export type studioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | studio$filmArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type studioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $studioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "studio"
    objects: {
      film: Prisma.$filmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      studio_id: number
      name: string
      country: string
      founded_date: Date | null
    }, ExtArgs["result"]["studio"]>
    composites: {}
  }

  type studioGetPayload<S extends boolean | null | undefined | studioDefaultArgs> = $Result.GetResult<Prisma.$studioPayload, S>

  type studioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioCountAggregateInputType | true
    }

  export interface studioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['studio'], meta: { name: 'studio' } }
    /**
     * Find zero or one Studio that matches the filter.
     * @param {studioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studioFindUniqueArgs>(args: SelectSubset<T, studioFindUniqueArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Studio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studioFindUniqueOrThrowArgs>(args: SelectSubset<T, studioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studioFindFirstArgs>(args?: SelectSubset<T, studioFindFirstArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studioFindFirstOrThrowArgs>(args?: SelectSubset<T, studioFindFirstOrThrowArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `studio_id`
     * const studioWithStudio_idOnly = await prisma.studio.findMany({ select: { studio_id: true } })
     * 
     */
    findMany<T extends studioFindManyArgs>(args?: SelectSubset<T, studioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Studio.
     * @param {studioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
     */
    create<T extends studioCreateArgs>(args: SelectSubset<T, studioCreateArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studios.
     * @param {studioCreateManyArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studioCreateManyArgs>(args?: SelectSubset<T, studioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studios and returns the data saved in the database.
     * @param {studioCreateManyAndReturnArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studios and only return the `studio_id`
     * const studioWithStudio_idOnly = await prisma.studio.createManyAndReturn({
     *   select: { studio_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studioCreateManyAndReturnArgs>(args?: SelectSubset<T, studioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Studio.
     * @param {studioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
     */
    delete<T extends studioDeleteArgs>(args: SelectSubset<T, studioDeleteArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Studio.
     * @param {studioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studioUpdateArgs>(args: SelectSubset<T, studioUpdateArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studios.
     * @param {studioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studioDeleteManyArgs>(args?: SelectSubset<T, studioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studioUpdateManyArgs>(args: SelectSubset<T, studioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios and returns the data updated in the database.
     * @param {studioUpdateManyAndReturnArgs} args - Arguments to update many Studios.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studios and only return the `studio_id`
     * const studioWithStudio_idOnly = await prisma.studio.updateManyAndReturn({
     *   select: { studio_id: true },
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
    updateManyAndReturn<T extends studioUpdateManyAndReturnArgs>(args: SelectSubset<T, studioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Studio.
     * @param {studioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
     */
    upsert<T extends studioUpsertArgs>(args: SelectSubset<T, studioUpsertArgs<ExtArgs>>): Prisma__studioClient<$Result.GetResult<Prisma.$studioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends studioCountArgs>(
      args?: Subset<T, studioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): Prisma.PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studioGroupByArgs} args - Group by arguments.
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
      T extends studioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studioGroupByArgs['orderBy'] }
        : { orderBy?: studioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the studio model
   */
  readonly fields: studioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film<T extends studio$filmArgs<ExtArgs> = {}>(args?: Subset<T, studio$filmArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the studio model
   */
  interface studioFieldRefs {
    readonly studio_id: FieldRef<"studio", 'Int'>
    readonly name: FieldRef<"studio", 'String'>
    readonly country: FieldRef<"studio", 'String'>
    readonly founded_date: FieldRef<"studio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * studio findUnique
   */
  export type studioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter, which studio to fetch.
     */
    where: studioWhereUniqueInput
  }

  /**
   * studio findUniqueOrThrow
   */
  export type studioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter, which studio to fetch.
     */
    where: studioWhereUniqueInput
  }

  /**
   * studio findFirst
   */
  export type studioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter, which studio to fetch.
     */
    where?: studioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studios to fetch.
     */
    orderBy?: studioOrderByWithRelationInput | studioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studios.
     */
    cursor?: studioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * studio findFirstOrThrow
   */
  export type studioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter, which studio to fetch.
     */
    where?: studioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studios to fetch.
     */
    orderBy?: studioOrderByWithRelationInput | studioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studios.
     */
    cursor?: studioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * studio findMany
   */
  export type studioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter, which studios to fetch.
     */
    where?: studioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studios to fetch.
     */
    orderBy?: studioOrderByWithRelationInput | studioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing studios.
     */
    cursor?: studioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * studio create
   */
  export type studioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * The data needed to create a studio.
     */
    data: XOR<studioCreateInput, studioUncheckedCreateInput>
  }

  /**
   * studio createMany
   */
  export type studioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many studios.
     */
    data: studioCreateManyInput | studioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * studio createManyAndReturn
   */
  export type studioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * The data used to create many studios.
     */
    data: studioCreateManyInput | studioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * studio update
   */
  export type studioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * The data needed to update a studio.
     */
    data: XOR<studioUpdateInput, studioUncheckedUpdateInput>
    /**
     * Choose, which studio to update.
     */
    where: studioWhereUniqueInput
  }

  /**
   * studio updateMany
   */
  export type studioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update studios.
     */
    data: XOR<studioUpdateManyMutationInput, studioUncheckedUpdateManyInput>
    /**
     * Filter which studios to update
     */
    where?: studioWhereInput
    /**
     * Limit how many studios to update.
     */
    limit?: number
  }

  /**
   * studio updateManyAndReturn
   */
  export type studioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * The data used to update studios.
     */
    data: XOR<studioUpdateManyMutationInput, studioUncheckedUpdateManyInput>
    /**
     * Filter which studios to update
     */
    where?: studioWhereInput
    /**
     * Limit how many studios to update.
     */
    limit?: number
  }

  /**
   * studio upsert
   */
  export type studioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * The filter to search for the studio to update in case it exists.
     */
    where: studioWhereUniqueInput
    /**
     * In case the studio found by the `where` argument doesn't exist, create a new studio with this data.
     */
    create: XOR<studioCreateInput, studioUncheckedCreateInput>
    /**
     * In case the studio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studioUpdateInput, studioUncheckedUpdateInput>
  }

  /**
   * studio delete
   */
  export type studioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
    /**
     * Filter which studio to delete.
     */
    where: studioWhereUniqueInput
  }

  /**
   * studio deleteMany
   */
  export type studioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studios to delete
     */
    where?: studioWhereInput
    /**
     * Limit how many studios to delete.
     */
    limit?: number
  }

  /**
   * studio.film
   */
  export type studio$filmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film
     */
    select?: filmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film
     */
    omit?: filmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmInclude<ExtArgs> | null
    where?: filmWhereInput
    orderBy?: filmOrderByWithRelationInput | filmOrderByWithRelationInput[]
    cursor?: filmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilmScalarFieldEnum | FilmScalarFieldEnum[]
  }

  /**
   * studio without action
   */
  export type studioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studio
     */
    select?: studioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studio
     */
    omit?: studioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studioInclude<ExtArgs> | null
  }


  /**
   * Model subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    subscription_id: number | null
    price: number | null
    customer_id: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    subscription_id: number | null
    price: number | null
    customer_id: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    subscription_id: number | null
    start_date: Date | null
    end_date: Date | null
    type: $Enums.subscription_type | null
    price: number | null
    customer_id: number | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    subscription_id: number | null
    start_date: Date | null
    end_date: Date | null
    type: $Enums.subscription_type | null
    price: number | null
    customer_id: number | null
  }

  export type SubscriptionCountAggregateOutputType = {
    subscription_id: number
    start_date: number
    end_date: number
    type: number
    price: number
    customer_id: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    subscription_id?: true
    price?: true
    customer_id?: true
  }

  export type SubscriptionSumAggregateInputType = {
    subscription_id?: true
    price?: true
    customer_id?: true
  }

  export type SubscriptionMinAggregateInputType = {
    subscription_id?: true
    start_date?: true
    end_date?: true
    type?: true
    price?: true
    customer_id?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    subscription_id?: true
    start_date?: true
    end_date?: true
    type?: true
    price?: true
    customer_id?: true
  }

  export type SubscriptionCountAggregateInputType = {
    subscription_id?: true
    start_date?: true
    end_date?: true
    type?: true
    price?: true
    customer_id?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription to aggregate.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput
    orderBy?: subscriptionOrderByWithAggregationInput | subscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: subscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    subscription_id: number
    start_date: Date | null
    end_date: Date | null
    type: $Enums.subscription_type
    price: number | null
    customer_id: number | null
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    price?: boolean
    customer_id?: boolean
    payment?: boolean | subscription$paymentArgs<ExtArgs>
    customer?: boolean | subscription$customerArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type subscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    price?: boolean
    customer_id?: boolean
    customer?: boolean | subscription$customerArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type subscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    price?: boolean
    customer_id?: boolean
    customer?: boolean | subscription$customerArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type subscriptionSelectScalar = {
    subscription_id?: boolean
    start_date?: boolean
    end_date?: boolean
    type?: boolean
    price?: boolean
    customer_id?: boolean
  }

  export type subscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subscription_id" | "start_date" | "end_date" | "type" | "price" | "customer_id", ExtArgs["result"]["subscription"]>
  export type subscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | subscription$paymentArgs<ExtArgs>
    customer?: boolean | subscription$customerArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | subscription$customerArgs<ExtArgs>
  }
  export type subscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | subscription$customerArgs<ExtArgs>
  }

  export type $subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscription"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[]
      customer: Prisma.$customerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      subscription_id: number
      start_date: Date | null
      end_date: Date | null
      type: $Enums.subscription_type
      price: number | null
      customer_id: number | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type subscriptionGetPayload<S extends boolean | null | undefined | subscriptionDefaultArgs> = $Result.GetResult<Prisma.$subscriptionPayload, S>

  type subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscription'], meta: { name: 'subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {subscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscriptionFindUniqueArgs>(args: SelectSubset<T, subscriptionFindUniqueArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, subscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscriptionFindFirstArgs>(args?: SelectSubset<T, subscriptionFindFirstArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, subscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `subscription_id`
     * const subscriptionWithSubscription_idOnly = await prisma.subscription.findMany({ select: { subscription_id: true } })
     * 
     */
    findMany<T extends subscriptionFindManyArgs>(args?: SelectSubset<T, subscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {subscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends subscriptionCreateArgs>(args: SelectSubset<T, subscriptionCreateArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {subscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscriptionCreateManyArgs>(args?: SelectSubset<T, subscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {subscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `subscription_id`
     * const subscriptionWithSubscription_idOnly = await prisma.subscription.createManyAndReturn({
     *   select: { subscription_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, subscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {subscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends subscriptionDeleteArgs>(args: SelectSubset<T, subscriptionDeleteArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {subscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscriptionUpdateArgs>(args: SelectSubset<T, subscriptionUpdateArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscriptionDeleteManyArgs>(args?: SelectSubset<T, subscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscriptionUpdateManyArgs>(args: SelectSubset<T, subscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {subscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `subscription_id`
     * const subscriptionWithSubscription_idOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { subscription_id: true },
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
    updateManyAndReturn<T extends subscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, subscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {subscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends subscriptionUpsertArgs>(args: SelectSubset<T, subscriptionUpsertArgs<ExtArgs>>): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends subscriptionCountArgs>(
      args?: Subset<T, subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionGroupByArgs} args - Group by arguments.
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
      T extends subscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscription model
   */
  readonly fields: subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends subscription$paymentArgs<ExtArgs> = {}>(args?: Subset<T, subscription$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends subscription$customerArgs<ExtArgs> = {}>(args?: Subset<T, subscription$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subscription model
   */
  interface subscriptionFieldRefs {
    readonly subscription_id: FieldRef<"subscription", 'Int'>
    readonly start_date: FieldRef<"subscription", 'DateTime'>
    readonly end_date: FieldRef<"subscription", 'DateTime'>
    readonly type: FieldRef<"subscription", 'subscription_type'>
    readonly price: FieldRef<"subscription", 'Float'>
    readonly customer_id: FieldRef<"subscription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subscription findUnique
   */
  export type subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput
  }

  /**
   * subscription findUniqueOrThrow
   */
  export type subscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput
  }

  /**
   * subscription findFirst
   */
  export type subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * subscription findFirstOrThrow
   */
  export type subscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * subscription findMany
   */
  export type subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * subscription create
   */
  export type subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a subscription.
     */
    data: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>
  }

  /**
   * subscription createMany
   */
  export type subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionCreateManyInput | subscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscription createManyAndReturn
   */
  export type subscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionCreateManyInput | subscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscription update
   */
  export type subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a subscription.
     */
    data: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>
    /**
     * Choose, which subscription to update.
     */
    where: subscriptionWhereUniqueInput
  }

  /**
   * subscription updateMany
   */
  export type subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
  }

  /**
   * subscription updateManyAndReturn
   */
  export type subscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscription upsert
   */
  export type subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the subscription to update in case it exists.
     */
    where: subscriptionWhereUniqueInput
    /**
     * In case the subscription found by the `where` argument doesn't exist, create a new subscription with this data.
     */
    create: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>
    /**
     * In case the subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>
  }

  /**
   * subscription delete
   */
  export type subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter which subscription to delete.
     */
    where: subscriptionWhereUniqueInput
  }

  /**
   * subscription deleteMany
   */
  export type subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionWhereInput
    /**
     * Limit how many subscriptions to delete.
     */
    limit?: number
  }

  /**
   * subscription.payment
   */
  export type subscription$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * subscription.customer
   */
  export type subscription$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * subscription without action
   */
  export type subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscription
     */
    omit?: subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    rating: number | null
    film_id: number | null
    customer_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    rating: number | null
    film_id: number | null
    customer_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    film_id: number | null
    customer_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    film_id: number | null
    customer_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    rating: number
    comment: number
    created_at: number
    film_id: number
    customer_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    rating?: true
    film_id?: true
    customer_id?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    rating?: true
    film_id?: true
    customer_id?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    film_id?: true
    customer_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    film_id?: true
    customer_id?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    film_id?: true
    customer_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    rating: number
    comment: string | null
    created_at: Date
    film_id: number
    customer_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    film_id?: boolean
    customer_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    film_id?: boolean
    customer_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    film_id?: boolean
    customer_id?: boolean
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    film_id?: boolean
    customer_id?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "rating" | "comment" | "created_at" | "film_id" | "customer_id", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film?: boolean | filmDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      film: Prisma.$filmPayload<ExtArgs>
      customer: Prisma.$customerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      rating: number
      comment: string | null
      created_at: Date
      film_id: number
      customer_id: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
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
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film<T extends filmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmDefaultArgs<ExtArgs>>): Prisma__filmClient<$Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly review_id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
    readonly film_id: FieldRef<"review", 'Int'>
    readonly customer_id: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
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


  export const ActorScalarFieldEnum: {
    actor_id: 'actor_id',
    first_name: 'first_name',
    last_name: 'last_name',
    country: 'country',
    birth_date: 'birth_date'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customer_id: 'customer_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    registration_date: 'registration_date',
    is_deleted: 'is_deleted',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DirectorScalarFieldEnum: {
    director_id: 'director_id',
    first_name: 'first_name',
    last_name: 'last_name',
    country: 'country'
  };

  export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum]


  export const FilmScalarFieldEnum: {
    film_id: 'film_id',
    title: 'title',
    release_year: 'release_year',
    duration: 'duration',
    age_restriction: 'age_restriction',
    studio_id: 'studio_id',
    isAvailable: 'isAvailable'
  };

  export type FilmScalarFieldEnum = (typeof FilmScalarFieldEnum)[keyof typeof FilmScalarFieldEnum]


  export const Film_actorScalarFieldEnum: {
    film_id: 'film_id',
    actor_id: 'actor_id'
  };

  export type Film_actorScalarFieldEnum = (typeof Film_actorScalarFieldEnum)[keyof typeof Film_actorScalarFieldEnum]


  export const Film_directorScalarFieldEnum: {
    film_id: 'film_id',
    director_id: 'director_id'
  };

  export type Film_directorScalarFieldEnum = (typeof Film_directorScalarFieldEnum)[keyof typeof Film_directorScalarFieldEnum]


  export const Film_genreScalarFieldEnum: {
    film_id: 'film_id',
    genre_id: 'genre_id'
  };

  export type Film_genreScalarFieldEnum = (typeof Film_genreScalarFieldEnum)[keyof typeof Film_genreScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    genre_id: 'genre_id',
    name: 'name',
    description: 'description'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    amount: 'amount',
    payment_type: 'payment_type',
    payment_date: 'payment_date',
    status: 'status',
    customer_id: 'customer_id',
    subscription_id: 'subscription_id'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const StudioScalarFieldEnum: {
    studio_id: 'studio_id',
    name: 'name',
    country: 'country',
    founded_date: 'founded_date'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    subscription_id: 'subscription_id',
    start_date: 'start_date',
    end_date: 'end_date',
    type: 'type',
    price: 'price',
    customer_id: 'customer_id'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    film_id: 'film_id',
    customer_id: 'customer_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'restriction'
   */
  export type EnumrestrictionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'restriction'>
    


  /**
   * Reference to a field of type 'restriction[]'
   */
  export type ListEnumrestrictionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'restriction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'payment_type'
   */
  export type Enumpayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_type'>
    


  /**
   * Reference to a field of type 'payment_type[]'
   */
  export type ListEnumpayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_type[]'>
    


  /**
   * Reference to a field of type 'subscription_type'
   */
  export type Enumsubscription_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_type'>
    


  /**
   * Reference to a field of type 'subscription_type[]'
   */
  export type ListEnumsubscription_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_type[]'>
    
  /**
   * Deep Input Types
   */


  export type actorWhereInput = {
    AND?: actorWhereInput | actorWhereInput[]
    OR?: actorWhereInput[]
    NOT?: actorWhereInput | actorWhereInput[]
    actor_id?: IntFilter<"actor"> | number
    first_name?: StringFilter<"actor"> | string
    last_name?: StringFilter<"actor"> | string
    country?: StringFilter<"actor"> | string
    birth_date?: DateTimeNullableFilter<"actor"> | Date | string | null
    film_actor?: Film_actorListRelationFilter
  }

  export type actorOrderByWithRelationInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    film_actor?: film_actorOrderByRelationAggregateInput
  }

  export type actorWhereUniqueInput = Prisma.AtLeast<{
    actor_id?: number
    AND?: actorWhereInput | actorWhereInput[]
    OR?: actorWhereInput[]
    NOT?: actorWhereInput | actorWhereInput[]
    first_name?: StringFilter<"actor"> | string
    last_name?: StringFilter<"actor"> | string
    country?: StringFilter<"actor"> | string
    birth_date?: DateTimeNullableFilter<"actor"> | Date | string | null
    film_actor?: Film_actorListRelationFilter
  }, "actor_id">

  export type actorOrderByWithAggregationInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    _count?: actorCountOrderByAggregateInput
    _avg?: actorAvgOrderByAggregateInput
    _max?: actorMaxOrderByAggregateInput
    _min?: actorMinOrderByAggregateInput
    _sum?: actorSumOrderByAggregateInput
  }

  export type actorScalarWhereWithAggregatesInput = {
    AND?: actorScalarWhereWithAggregatesInput | actorScalarWhereWithAggregatesInput[]
    OR?: actorScalarWhereWithAggregatesInput[]
    NOT?: actorScalarWhereWithAggregatesInput | actorScalarWhereWithAggregatesInput[]
    actor_id?: IntWithAggregatesFilter<"actor"> | number
    first_name?: StringWithAggregatesFilter<"actor"> | string
    last_name?: StringWithAggregatesFilter<"actor"> | string
    country?: StringWithAggregatesFilter<"actor"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"actor"> | Date | string | null
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    customer_id?: IntFilter<"customer"> | number
    first_name?: StringFilter<"customer"> | string
    last_name?: StringFilter<"customer"> | string
    email?: StringFilter<"customer"> | string
    password?: StringFilter<"customer"> | string
    registration_date?: DateTimeNullableFilter<"customer"> | Date | string | null
    is_deleted?: BoolNullableFilter<"customer"> | boolean | null
    phone?: StringNullableFilter<"customer"> | string | null
    payment?: PaymentListRelationFilter
    subscription?: SubscriptionListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration_date?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    payment?: paymentOrderByRelationAggregateInput
    subscription?: subscriptionOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    email?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    first_name?: StringFilter<"customer"> | string
    last_name?: StringFilter<"customer"> | string
    password?: StringFilter<"customer"> | string
    registration_date?: DateTimeNullableFilter<"customer"> | Date | string | null
    is_deleted?: BoolNullableFilter<"customer"> | boolean | null
    phone?: StringNullableFilter<"customer"> | string | null
    payment?: PaymentListRelationFilter
    subscription?: SubscriptionListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "customer_id" | "email">

  export type customerOrderByWithAggregationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration_date?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customer"> | number
    first_name?: StringWithAggregatesFilter<"customer"> | string
    last_name?: StringWithAggregatesFilter<"customer"> | string
    email?: StringWithAggregatesFilter<"customer"> | string
    password?: StringWithAggregatesFilter<"customer"> | string
    registration_date?: DateTimeNullableWithAggregatesFilter<"customer"> | Date | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"customer"> | boolean | null
    phone?: StringNullableWithAggregatesFilter<"customer"> | string | null
  }

  export type directorWhereInput = {
    AND?: directorWhereInput | directorWhereInput[]
    OR?: directorWhereInput[]
    NOT?: directorWhereInput | directorWhereInput[]
    director_id?: IntFilter<"director"> | number
    first_name?: StringFilter<"director"> | string
    last_name?: StringFilter<"director"> | string
    country?: StringFilter<"director"> | string
    film_director?: Film_directorListRelationFilter
  }

  export type directorOrderByWithRelationInput = {
    director_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    film_director?: film_directorOrderByRelationAggregateInput
  }

  export type directorWhereUniqueInput = Prisma.AtLeast<{
    director_id?: number
    AND?: directorWhereInput | directorWhereInput[]
    OR?: directorWhereInput[]
    NOT?: directorWhereInput | directorWhereInput[]
    first_name?: StringFilter<"director"> | string
    last_name?: StringFilter<"director"> | string
    country?: StringFilter<"director"> | string
    film_director?: Film_directorListRelationFilter
  }, "director_id">

  export type directorOrderByWithAggregationInput = {
    director_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    _count?: directorCountOrderByAggregateInput
    _avg?: directorAvgOrderByAggregateInput
    _max?: directorMaxOrderByAggregateInput
    _min?: directorMinOrderByAggregateInput
    _sum?: directorSumOrderByAggregateInput
  }

  export type directorScalarWhereWithAggregatesInput = {
    AND?: directorScalarWhereWithAggregatesInput | directorScalarWhereWithAggregatesInput[]
    OR?: directorScalarWhereWithAggregatesInput[]
    NOT?: directorScalarWhereWithAggregatesInput | directorScalarWhereWithAggregatesInput[]
    director_id?: IntWithAggregatesFilter<"director"> | number
    first_name?: StringWithAggregatesFilter<"director"> | string
    last_name?: StringWithAggregatesFilter<"director"> | string
    country?: StringWithAggregatesFilter<"director"> | string
  }

  export type filmWhereInput = {
    AND?: filmWhereInput | filmWhereInput[]
    OR?: filmWhereInput[]
    NOT?: filmWhereInput | filmWhereInput[]
    film_id?: IntFilter<"film"> | number
    title?: StringNullableFilter<"film"> | string | null
    release_year?: IntNullableFilter<"film"> | number | null
    duration?: IntNullableFilter<"film"> | number | null
    age_restriction?: EnumrestrictionNullableFilter<"film"> | $Enums.restriction | null
    studio_id?: IntNullableFilter<"film"> | number | null
    isAvailable?: BoolFilter<"film"> | boolean
    studio?: XOR<StudioNullableScalarRelationFilter, studioWhereInput> | null
    film_actor?: Film_actorListRelationFilter
    film_director?: Film_directorListRelationFilter
    film_genre?: Film_genreListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type filmOrderByWithRelationInput = {
    film_id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_year?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    age_restriction?: SortOrderInput | SortOrder
    studio_id?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    studio?: studioOrderByWithRelationInput
    film_actor?: film_actorOrderByRelationAggregateInput
    film_director?: film_directorOrderByRelationAggregateInput
    film_genre?: film_genreOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
  }

  export type filmWhereUniqueInput = Prisma.AtLeast<{
    film_id?: number
    AND?: filmWhereInput | filmWhereInput[]
    OR?: filmWhereInput[]
    NOT?: filmWhereInput | filmWhereInput[]
    title?: StringNullableFilter<"film"> | string | null
    release_year?: IntNullableFilter<"film"> | number | null
    duration?: IntNullableFilter<"film"> | number | null
    age_restriction?: EnumrestrictionNullableFilter<"film"> | $Enums.restriction | null
    studio_id?: IntNullableFilter<"film"> | number | null
    isAvailable?: BoolFilter<"film"> | boolean
    studio?: XOR<StudioNullableScalarRelationFilter, studioWhereInput> | null
    film_actor?: Film_actorListRelationFilter
    film_director?: Film_directorListRelationFilter
    film_genre?: Film_genreListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "film_id">

  export type filmOrderByWithAggregationInput = {
    film_id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_year?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    age_restriction?: SortOrderInput | SortOrder
    studio_id?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    _count?: filmCountOrderByAggregateInput
    _avg?: filmAvgOrderByAggregateInput
    _max?: filmMaxOrderByAggregateInput
    _min?: filmMinOrderByAggregateInput
    _sum?: filmSumOrderByAggregateInput
  }

  export type filmScalarWhereWithAggregatesInput = {
    AND?: filmScalarWhereWithAggregatesInput | filmScalarWhereWithAggregatesInput[]
    OR?: filmScalarWhereWithAggregatesInput[]
    NOT?: filmScalarWhereWithAggregatesInput | filmScalarWhereWithAggregatesInput[]
    film_id?: IntWithAggregatesFilter<"film"> | number
    title?: StringNullableWithAggregatesFilter<"film"> | string | null
    release_year?: IntNullableWithAggregatesFilter<"film"> | number | null
    duration?: IntNullableWithAggregatesFilter<"film"> | number | null
    age_restriction?: EnumrestrictionNullableWithAggregatesFilter<"film"> | $Enums.restriction | null
    studio_id?: IntNullableWithAggregatesFilter<"film"> | number | null
    isAvailable?: BoolWithAggregatesFilter<"film"> | boolean
  }

  export type film_actorWhereInput = {
    AND?: film_actorWhereInput | film_actorWhereInput[]
    OR?: film_actorWhereInput[]
    NOT?: film_actorWhereInput | film_actorWhereInput[]
    film_id?: IntFilter<"film_actor"> | number
    actor_id?: IntFilter<"film_actor"> | number
    actor?: XOR<ActorScalarRelationFilter, actorWhereInput>
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
  }

  export type film_actorOrderByWithRelationInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
    actor?: actorOrderByWithRelationInput
    film?: filmOrderByWithRelationInput
  }

  export type film_actorWhereUniqueInput = Prisma.AtLeast<{
    film_id_actor_id?: film_actorFilm_idActor_idCompoundUniqueInput
    AND?: film_actorWhereInput | film_actorWhereInput[]
    OR?: film_actorWhereInput[]
    NOT?: film_actorWhereInput | film_actorWhereInput[]
    film_id?: IntFilter<"film_actor"> | number
    actor_id?: IntFilter<"film_actor"> | number
    actor?: XOR<ActorScalarRelationFilter, actorWhereInput>
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
  }, "film_id_actor_id">

  export type film_actorOrderByWithAggregationInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
    _count?: film_actorCountOrderByAggregateInput
    _avg?: film_actorAvgOrderByAggregateInput
    _max?: film_actorMaxOrderByAggregateInput
    _min?: film_actorMinOrderByAggregateInput
    _sum?: film_actorSumOrderByAggregateInput
  }

  export type film_actorScalarWhereWithAggregatesInput = {
    AND?: film_actorScalarWhereWithAggregatesInput | film_actorScalarWhereWithAggregatesInput[]
    OR?: film_actorScalarWhereWithAggregatesInput[]
    NOT?: film_actorScalarWhereWithAggregatesInput | film_actorScalarWhereWithAggregatesInput[]
    film_id?: IntWithAggregatesFilter<"film_actor"> | number
    actor_id?: IntWithAggregatesFilter<"film_actor"> | number
  }

  export type film_directorWhereInput = {
    AND?: film_directorWhereInput | film_directorWhereInput[]
    OR?: film_directorWhereInput[]
    NOT?: film_directorWhereInput | film_directorWhereInput[]
    film_id?: IntFilter<"film_director"> | number
    director_id?: IntFilter<"film_director"> | number
    director?: XOR<DirectorScalarRelationFilter, directorWhereInput>
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
  }

  export type film_directorOrderByWithRelationInput = {
    film_id?: SortOrder
    director_id?: SortOrder
    director?: directorOrderByWithRelationInput
    film?: filmOrderByWithRelationInput
  }

  export type film_directorWhereUniqueInput = Prisma.AtLeast<{
    film_id_director_id?: film_directorFilm_idDirector_idCompoundUniqueInput
    AND?: film_directorWhereInput | film_directorWhereInput[]
    OR?: film_directorWhereInput[]
    NOT?: film_directorWhereInput | film_directorWhereInput[]
    film_id?: IntFilter<"film_director"> | number
    director_id?: IntFilter<"film_director"> | number
    director?: XOR<DirectorScalarRelationFilter, directorWhereInput>
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
  }, "film_id_director_id">

  export type film_directorOrderByWithAggregationInput = {
    film_id?: SortOrder
    director_id?: SortOrder
    _count?: film_directorCountOrderByAggregateInput
    _avg?: film_directorAvgOrderByAggregateInput
    _max?: film_directorMaxOrderByAggregateInput
    _min?: film_directorMinOrderByAggregateInput
    _sum?: film_directorSumOrderByAggregateInput
  }

  export type film_directorScalarWhereWithAggregatesInput = {
    AND?: film_directorScalarWhereWithAggregatesInput | film_directorScalarWhereWithAggregatesInput[]
    OR?: film_directorScalarWhereWithAggregatesInput[]
    NOT?: film_directorScalarWhereWithAggregatesInput | film_directorScalarWhereWithAggregatesInput[]
    film_id?: IntWithAggregatesFilter<"film_director"> | number
    director_id?: IntWithAggregatesFilter<"film_director"> | number
  }

  export type film_genreWhereInput = {
    AND?: film_genreWhereInput | film_genreWhereInput[]
    OR?: film_genreWhereInput[]
    NOT?: film_genreWhereInput | film_genreWhereInput[]
    film_id?: IntFilter<"film_genre"> | number
    genre_id?: IntFilter<"film_genre"> | number
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
    genre?: XOR<GenreScalarRelationFilter, genreWhereInput>
  }

  export type film_genreOrderByWithRelationInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
    film?: filmOrderByWithRelationInput
    genre?: genreOrderByWithRelationInput
  }

  export type film_genreWhereUniqueInput = Prisma.AtLeast<{
    film_id_genre_id?: film_genreFilm_idGenre_idCompoundUniqueInput
    AND?: film_genreWhereInput | film_genreWhereInput[]
    OR?: film_genreWhereInput[]
    NOT?: film_genreWhereInput | film_genreWhereInput[]
    film_id?: IntFilter<"film_genre"> | number
    genre_id?: IntFilter<"film_genre"> | number
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
    genre?: XOR<GenreScalarRelationFilter, genreWhereInput>
  }, "film_id_genre_id">

  export type film_genreOrderByWithAggregationInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
    _count?: film_genreCountOrderByAggregateInput
    _avg?: film_genreAvgOrderByAggregateInput
    _max?: film_genreMaxOrderByAggregateInput
    _min?: film_genreMinOrderByAggregateInput
    _sum?: film_genreSumOrderByAggregateInput
  }

  export type film_genreScalarWhereWithAggregatesInput = {
    AND?: film_genreScalarWhereWithAggregatesInput | film_genreScalarWhereWithAggregatesInput[]
    OR?: film_genreScalarWhereWithAggregatesInput[]
    NOT?: film_genreScalarWhereWithAggregatesInput | film_genreScalarWhereWithAggregatesInput[]
    film_id?: IntWithAggregatesFilter<"film_genre"> | number
    genre_id?: IntWithAggregatesFilter<"film_genre"> | number
  }

  export type genreWhereInput = {
    AND?: genreWhereInput | genreWhereInput[]
    OR?: genreWhereInput[]
    NOT?: genreWhereInput | genreWhereInput[]
    genre_id?: IntFilter<"genre"> | number
    name?: StringNullableFilter<"genre"> | string | null
    description?: StringNullableFilter<"genre"> | string | null
    film_genre?: Film_genreListRelationFilter
  }

  export type genreOrderByWithRelationInput = {
    genre_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    film_genre?: film_genreOrderByRelationAggregateInput
  }

  export type genreWhereUniqueInput = Prisma.AtLeast<{
    genre_id?: number
    name?: string
    AND?: genreWhereInput | genreWhereInput[]
    OR?: genreWhereInput[]
    NOT?: genreWhereInput | genreWhereInput[]
    description?: StringNullableFilter<"genre"> | string | null
    film_genre?: Film_genreListRelationFilter
  }, "genre_id" | "name">

  export type genreOrderByWithAggregationInput = {
    genre_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: genreCountOrderByAggregateInput
    _avg?: genreAvgOrderByAggregateInput
    _max?: genreMaxOrderByAggregateInput
    _min?: genreMinOrderByAggregateInput
    _sum?: genreSumOrderByAggregateInput
  }

  export type genreScalarWhereWithAggregatesInput = {
    AND?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[]
    OR?: genreScalarWhereWithAggregatesInput[]
    NOT?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[]
    genre_id?: IntWithAggregatesFilter<"genre"> | number
    name?: StringNullableWithAggregatesFilter<"genre"> | string | null
    description?: StringNullableWithAggregatesFilter<"genre"> | string | null
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    amount?: FloatNullableFilter<"payment"> | number | null
    payment_type?: Enumpayment_typeNullableFilter<"payment"> | $Enums.payment_type | null
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: BoolNullableFilter<"payment"> | boolean | null
    customer_id?: IntNullableFilter<"payment"> | number | null
    subscription_id?: IntNullableFilter<"payment"> | number | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, subscriptionWhereInput> | null
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    payment_type?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    customer?: customerOrderByWithRelationInput
    subscription?: subscriptionOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    amount?: FloatNullableFilter<"payment"> | number | null
    payment_type?: Enumpayment_typeNullableFilter<"payment"> | $Enums.payment_type | null
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: BoolNullableFilter<"payment"> | boolean | null
    customer_id?: IntNullableFilter<"payment"> | number | null
    subscription_id?: IntNullableFilter<"payment"> | number | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, subscriptionWhereInput> | null
  }, "payment_id">

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    payment_type?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"payment"> | number
    amount?: FloatNullableWithAggregatesFilter<"payment"> | number | null
    payment_type?: Enumpayment_typeNullableWithAggregatesFilter<"payment"> | $Enums.payment_type | null
    payment_date?: DateTimeNullableWithAggregatesFilter<"payment"> | Date | string | null
    status?: BoolNullableWithAggregatesFilter<"payment"> | boolean | null
    customer_id?: IntNullableWithAggregatesFilter<"payment"> | number | null
    subscription_id?: IntNullableWithAggregatesFilter<"payment"> | number | null
  }

  export type studioWhereInput = {
    AND?: studioWhereInput | studioWhereInput[]
    OR?: studioWhereInput[]
    NOT?: studioWhereInput | studioWhereInput[]
    studio_id?: IntFilter<"studio"> | number
    name?: StringFilter<"studio"> | string
    country?: StringFilter<"studio"> | string
    founded_date?: DateTimeNullableFilter<"studio"> | Date | string | null
    film?: FilmListRelationFilter
  }

  export type studioOrderByWithRelationInput = {
    studio_id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    founded_date?: SortOrderInput | SortOrder
    film?: filmOrderByRelationAggregateInput
  }

  export type studioWhereUniqueInput = Prisma.AtLeast<{
    studio_id?: number
    name?: string
    AND?: studioWhereInput | studioWhereInput[]
    OR?: studioWhereInput[]
    NOT?: studioWhereInput | studioWhereInput[]
    country?: StringFilter<"studio"> | string
    founded_date?: DateTimeNullableFilter<"studio"> | Date | string | null
    film?: FilmListRelationFilter
  }, "studio_id" | "name">

  export type studioOrderByWithAggregationInput = {
    studio_id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    founded_date?: SortOrderInput | SortOrder
    _count?: studioCountOrderByAggregateInput
    _avg?: studioAvgOrderByAggregateInput
    _max?: studioMaxOrderByAggregateInput
    _min?: studioMinOrderByAggregateInput
    _sum?: studioSumOrderByAggregateInput
  }

  export type studioScalarWhereWithAggregatesInput = {
    AND?: studioScalarWhereWithAggregatesInput | studioScalarWhereWithAggregatesInput[]
    OR?: studioScalarWhereWithAggregatesInput[]
    NOT?: studioScalarWhereWithAggregatesInput | studioScalarWhereWithAggregatesInput[]
    studio_id?: IntWithAggregatesFilter<"studio"> | number
    name?: StringWithAggregatesFilter<"studio"> | string
    country?: StringWithAggregatesFilter<"studio"> | string
    founded_date?: DateTimeNullableWithAggregatesFilter<"studio"> | Date | string | null
  }

  export type subscriptionWhereInput = {
    AND?: subscriptionWhereInput | subscriptionWhereInput[]
    OR?: subscriptionWhereInput[]
    NOT?: subscriptionWhereInput | subscriptionWhereInput[]
    subscription_id?: IntFilter<"subscription"> | number
    start_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    type?: Enumsubscription_typeFilter<"subscription"> | $Enums.subscription_type
    price?: FloatNullableFilter<"subscription"> | number | null
    customer_id?: IntNullableFilter<"subscription"> | number | null
    payment?: PaymentListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
  }

  export type subscriptionOrderByWithRelationInput = {
    subscription_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    type?: SortOrder
    price?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    payment?: paymentOrderByRelationAggregateInput
    customer?: customerOrderByWithRelationInput
  }

  export type subscriptionWhereUniqueInput = Prisma.AtLeast<{
    subscription_id?: number
    AND?: subscriptionWhereInput | subscriptionWhereInput[]
    OR?: subscriptionWhereInput[]
    NOT?: subscriptionWhereInput | subscriptionWhereInput[]
    start_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    type?: Enumsubscription_typeFilter<"subscription"> | $Enums.subscription_type
    price?: FloatNullableFilter<"subscription"> | number | null
    customer_id?: IntNullableFilter<"subscription"> | number | null
    payment?: PaymentListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
  }, "subscription_id">

  export type subscriptionOrderByWithAggregationInput = {
    subscription_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    type?: SortOrder
    price?: SortOrderInput | SortOrder
    customer_id?: SortOrderInput | SortOrder
    _count?: subscriptionCountOrderByAggregateInput
    _avg?: subscriptionAvgOrderByAggregateInput
    _max?: subscriptionMaxOrderByAggregateInput
    _min?: subscriptionMinOrderByAggregateInput
    _sum?: subscriptionSumOrderByAggregateInput
  }

  export type subscriptionScalarWhereWithAggregatesInput = {
    AND?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[]
    OR?: subscriptionScalarWhereWithAggregatesInput[]
    NOT?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[]
    subscription_id?: IntWithAggregatesFilter<"subscription"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"subscription"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"subscription"> | Date | string | null
    type?: Enumsubscription_typeWithAggregatesFilter<"subscription"> | $Enums.subscription_type
    price?: FloatNullableWithAggregatesFilter<"subscription"> | number | null
    customer_id?: IntNullableWithAggregatesFilter<"subscription"> | number | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    review_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    film_id?: IntFilter<"review"> | number
    customer_id?: IntFilter<"review"> | number
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
    film?: filmOrderByWithRelationInput
    customer?: customerOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    film_id?: IntFilter<"review"> | number
    customer_id?: IntFilter<"review"> | number
    film?: XOR<FilmScalarRelationFilter, filmWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }, "review_id">

  export type reviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"review"> | Date | string
    film_id?: IntWithAggregatesFilter<"review"> | number
    customer_id?: IntWithAggregatesFilter<"review"> | number
  }

  export type actorCreateInput = {
    first_name: string
    last_name: string
    country: string
    birth_date?: Date | string | null
    film_actor?: film_actorCreateNestedManyWithoutActorInput
  }

  export type actorUncheckedCreateInput = {
    actor_id?: number
    first_name: string
    last_name: string
    country: string
    birth_date?: Date | string | null
    film_actor?: film_actorUncheckedCreateNestedManyWithoutActorInput
  }

  export type actorUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_actor?: film_actorUpdateManyWithoutActorNestedInput
  }

  export type actorUncheckedUpdateInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_actor?: film_actorUncheckedUpdateManyWithoutActorNestedInput
  }

  export type actorCreateManyInput = {
    actor_id?: number
    first_name: string
    last_name: string
    country: string
    birth_date?: Date | string | null
  }

  export type actorUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actorUncheckedUpdateManyInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customerCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentCreateNestedManyWithoutCustomerInput
    subscription?: subscriptionCreateNestedManyWithoutCustomerInput
    reviews?: reviewCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    subscription?: subscriptionUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: reviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    subscription?: subscriptionUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    subscription?: subscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
  }

  export type customerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customerUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type directorCreateInput = {
    first_name: string
    last_name: string
    country: string
    film_director?: film_directorCreateNestedManyWithoutDirectorInput
  }

  export type directorUncheckedCreateInput = {
    director_id?: number
    first_name: string
    last_name: string
    country: string
    film_director?: film_directorUncheckedCreateNestedManyWithoutDirectorInput
  }

  export type directorUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    film_director?: film_directorUpdateManyWithoutDirectorNestedInput
  }

  export type directorUncheckedUpdateInput = {
    director_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    film_director?: film_directorUncheckedUpdateManyWithoutDirectorNestedInput
  }

  export type directorCreateManyInput = {
    director_id?: number
    first_name: string
    last_name: string
    country: string
  }

  export type directorUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type directorUncheckedUpdateManyInput = {
    director_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type filmCreateInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    studio?: studioCreateNestedOneWithoutFilmInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_director?: film_directorCreateNestedManyWithoutFilmInput
    film_genre?: film_genreCreateNestedManyWithoutFilmInput
    reviews?: reviewCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_director?: film_directorUncheckedCreateNestedManyWithoutFilmInput
    film_genre?: film_genreUncheckedCreateNestedManyWithoutFilmInput
    reviews?: reviewUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    studio?: studioUpdateOneWithoutFilmNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUpdateManyWithoutFilmNestedInput
    reviews?: reviewUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUncheckedUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUncheckedUpdateManyWithoutFilmNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmCreateManyInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
  }

  export type filmUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type filmUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type film_actorCreateInput = {
    actor: actorCreateNestedOneWithoutFilm_actorInput
    film: filmCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateInput = {
    film_id: number
    actor_id: number
  }

  export type film_actorUpdateInput = {
    actor?: actorUpdateOneRequiredWithoutFilm_actorNestedInput
    film?: filmUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_actorCreateManyInput = {
    film_id: number
    actor_id: number
  }

  export type film_actorUpdateManyMutationInput = {

  }

  export type film_actorUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorCreateInput = {
    director: directorCreateNestedOneWithoutFilm_directorInput
    film: filmCreateNestedOneWithoutFilm_directorInput
  }

  export type film_directorUncheckedCreateInput = {
    film_id: number
    director_id: number
  }

  export type film_directorUpdateInput = {
    director?: directorUpdateOneRequiredWithoutFilm_directorNestedInput
    film?: filmUpdateOneRequiredWithoutFilm_directorNestedInput
  }

  export type film_directorUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    director_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorCreateManyInput = {
    film_id: number
    director_id: number
  }

  export type film_directorUpdateManyMutationInput = {

  }

  export type film_directorUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    director_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreCreateInput = {
    film: filmCreateNestedOneWithoutFilm_genreInput
    genre: genreCreateNestedOneWithoutFilm_genreInput
  }

  export type film_genreUncheckedCreateInput = {
    film_id: number
    genre_id: number
  }

  export type film_genreUpdateInput = {
    film?: filmUpdateOneRequiredWithoutFilm_genreNestedInput
    genre?: genreUpdateOneRequiredWithoutFilm_genreNestedInput
  }

  export type film_genreUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreCreateManyInput = {
    film_id: number
    genre_id: number
  }

  export type film_genreUpdateManyMutationInput = {

  }

  export type film_genreUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type genreCreateInput = {
    name?: string | null
    description?: string | null
    film_genre?: film_genreCreateNestedManyWithoutGenreInput
  }

  export type genreUncheckedCreateInput = {
    genre_id?: number
    name?: string | null
    description?: string | null
    film_genre?: film_genreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type genreUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    film_genre?: film_genreUpdateManyWithoutGenreNestedInput
  }

  export type genreUncheckedUpdateInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    film_genre?: film_genreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type genreCreateManyInput = {
    genre_id?: number
    name?: string | null
    description?: string | null
  }

  export type genreUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genreUncheckedUpdateManyInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentCreateInput = {
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer?: customerCreateNestedOneWithoutPaymentInput
    subscription?: subscriptionCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer_id?: number | null
    subscription_id?: number | null
  }

  export type paymentUpdateInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer?: customerUpdateOneWithoutPaymentNestedInput
    subscription?: subscriptionUpdateOneWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    subscription_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer_id?: number | null
    subscription_id?: number | null
  }

  export type paymentUpdateManyMutationInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    subscription_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studioCreateInput = {
    name: string
    country: string
    founded_date?: Date | string | null
    film?: filmCreateNestedManyWithoutStudioInput
  }

  export type studioUncheckedCreateInput = {
    studio_id?: number
    name: string
    country: string
    founded_date?: Date | string | null
    film?: filmUncheckedCreateNestedManyWithoutStudioInput
  }

  export type studioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film?: filmUpdateManyWithoutStudioNestedInput
  }

  export type studioUncheckedUpdateInput = {
    studio_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film?: filmUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type studioCreateManyInput = {
    studio_id?: number
    name: string
    country: string
    founded_date?: Date | string | null
  }

  export type studioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studioUncheckedUpdateManyInput = {
    studio_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionCreateInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    payment?: paymentCreateNestedManyWithoutSubscriptionInput
    customer?: customerCreateNestedOneWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateInput = {
    subscription_id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    customer_id?: number | null
    payment?: paymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type subscriptionUpdateInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    payment?: paymentUpdateManyWithoutSubscriptionNestedInput
    customer?: customerUpdateOneWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: paymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type subscriptionCreateManyInput = {
    subscription_id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    customer_id?: number | null
  }

  export type subscriptionUpdateManyMutationInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type subscriptionUncheckedUpdateManyInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    film: filmCreateNestedOneWithoutReviewsInput
    customer: customerCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    film_id: number
    customer_id: number
  }

  export type reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutReviewsNestedInput
    customer?: customerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateManyInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    film_id: number
    customer_id: number
  }

  export type reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
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

  export type Film_actorListRelationFilter = {
    every?: film_actorWhereInput
    some?: film_actorWhereInput
    none?: film_actorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type film_actorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actorCountOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    birth_date?: SortOrder
  }

  export type actorAvgOrderByAggregateInput = {
    actor_id?: SortOrder
  }

  export type actorMaxOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    birth_date?: SortOrder
  }

  export type actorMinOrderByAggregateInput = {
    actor_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
    birth_date?: SortOrder
  }

  export type actorSumOrderByAggregateInput = {
    actor_id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: subscriptionWhereInput
    some?: subscriptionWhereInput
    none?: subscriptionWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration_date?: SortOrder
    is_deleted?: SortOrder
    phone?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration_date?: SortOrder
    is_deleted?: SortOrder
    phone?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration_date?: SortOrder
    is_deleted?: SortOrder
    phone?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type Film_directorListRelationFilter = {
    every?: film_directorWhereInput
    some?: film_directorWhereInput
    none?: film_directorWhereInput
  }

  export type film_directorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type directorCountOrderByAggregateInput = {
    director_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
  }

  export type directorAvgOrderByAggregateInput = {
    director_id?: SortOrder
  }

  export type directorMaxOrderByAggregateInput = {
    director_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
  }

  export type directorMinOrderByAggregateInput = {
    director_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    country?: SortOrder
  }

  export type directorSumOrderByAggregateInput = {
    director_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumrestrictionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.restriction | EnumrestrictionFieldRefInput<$PrismaModel> | null
    in?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrestrictionNullableFilter<$PrismaModel> | $Enums.restriction | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudioNullableScalarRelationFilter = {
    is?: studioWhereInput | null
    isNot?: studioWhereInput | null
  }

  export type Film_genreListRelationFilter = {
    every?: film_genreWhereInput
    some?: film_genreWhereInput
    none?: film_genreWhereInput
  }

  export type film_genreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmCountOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    age_restriction?: SortOrder
    studio_id?: SortOrder
    isAvailable?: SortOrder
  }

  export type filmAvgOrderByAggregateInput = {
    film_id?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    studio_id?: SortOrder
  }

  export type filmMaxOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    age_restriction?: SortOrder
    studio_id?: SortOrder
    isAvailable?: SortOrder
  }

  export type filmMinOrderByAggregateInput = {
    film_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    age_restriction?: SortOrder
    studio_id?: SortOrder
    isAvailable?: SortOrder
  }

  export type filmSumOrderByAggregateInput = {
    film_id?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    studio_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumrestrictionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.restriction | EnumrestrictionFieldRefInput<$PrismaModel> | null
    in?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrestrictionNullableWithAggregatesFilter<$PrismaModel> | $Enums.restriction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrestrictionNullableFilter<$PrismaModel>
    _max?: NestedEnumrestrictionNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ActorScalarRelationFilter = {
    is?: actorWhereInput
    isNot?: actorWhereInput
  }

  export type FilmScalarRelationFilter = {
    is?: filmWhereInput
    isNot?: filmWhereInput
  }

  export type film_actorFilm_idActor_idCompoundUniqueInput = {
    film_id: number
    actor_id: number
  }

  export type film_actorCountOrderByAggregateInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
  }

  export type film_actorAvgOrderByAggregateInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
  }

  export type film_actorMaxOrderByAggregateInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
  }

  export type film_actorMinOrderByAggregateInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
  }

  export type film_actorSumOrderByAggregateInput = {
    film_id?: SortOrder
    actor_id?: SortOrder
  }

  export type DirectorScalarRelationFilter = {
    is?: directorWhereInput
    isNot?: directorWhereInput
  }

  export type film_directorFilm_idDirector_idCompoundUniqueInput = {
    film_id: number
    director_id: number
  }

  export type film_directorCountOrderByAggregateInput = {
    film_id?: SortOrder
    director_id?: SortOrder
  }

  export type film_directorAvgOrderByAggregateInput = {
    film_id?: SortOrder
    director_id?: SortOrder
  }

  export type film_directorMaxOrderByAggregateInput = {
    film_id?: SortOrder
    director_id?: SortOrder
  }

  export type film_directorMinOrderByAggregateInput = {
    film_id?: SortOrder
    director_id?: SortOrder
  }

  export type film_directorSumOrderByAggregateInput = {
    film_id?: SortOrder
    director_id?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: genreWhereInput
    isNot?: genreWhereInput
  }

  export type film_genreFilm_idGenre_idCompoundUniqueInput = {
    film_id: number
    genre_id: number
  }

  export type film_genreCountOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genreAvgOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genreMaxOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genreMinOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genreSumOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type genreCountOrderByAggregateInput = {
    genre_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type genreAvgOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type genreMaxOrderByAggregateInput = {
    genre_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type genreMinOrderByAggregateInput = {
    genre_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type genreSumOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Enumpayment_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_typeNullableFilter<$PrismaModel> | $Enums.payment_type | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: customerWhereInput | null
    isNot?: customerWhereInput | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: subscriptionWhereInput | null
    isNot?: subscriptionWhereInput | null
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_type?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    subscription_id?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    customer_id?: SortOrder
    subscription_id?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_type?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    subscription_id?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_type?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    subscription_id?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    customer_id?: SortOrder
    subscription_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Enumpayment_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_typeNullableFilter<$PrismaModel>
  }

  export type FilmListRelationFilter = {
    every?: filmWhereInput
    some?: filmWhereInput
    none?: filmWhereInput
  }

  export type filmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studioCountOrderByAggregateInput = {
    studio_id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    founded_date?: SortOrder
  }

  export type studioAvgOrderByAggregateInput = {
    studio_id?: SortOrder
  }

  export type studioMaxOrderByAggregateInput = {
    studio_id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    founded_date?: SortOrder
  }

  export type studioMinOrderByAggregateInput = {
    studio_id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    founded_date?: SortOrder
  }

  export type studioSumOrderByAggregateInput = {
    studio_id?: SortOrder
  }

  export type Enumsubscription_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_type | Enumsubscription_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_typeFilter<$PrismaModel> | $Enums.subscription_type
  }

  export type subscriptionCountOrderByAggregateInput = {
    subscription_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
  }

  export type subscriptionAvgOrderByAggregateInput = {
    subscription_id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
  }

  export type subscriptionMaxOrderByAggregateInput = {
    subscription_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
  }

  export type subscriptionMinOrderByAggregateInput = {
    subscription_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    type?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
  }

  export type subscriptionSumOrderByAggregateInput = {
    subscription_id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
  }

  export type Enumsubscription_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_type | Enumsubscription_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_typeWithAggregatesFilter<$PrismaModel> | $Enums.subscription_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscription_typeFilter<$PrismaModel>
    _max?: NestedEnumsubscription_typeFilter<$PrismaModel>
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

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type reviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    film_id?: SortOrder
    customer_id?: SortOrder
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

  export type film_actorCreateNestedManyWithoutActorInput = {
    create?: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput> | film_actorCreateWithoutActorInput[] | film_actorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutActorInput | film_actorCreateOrConnectWithoutActorInput[]
    createMany?: film_actorCreateManyActorInputEnvelope
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
  }

  export type film_actorUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput> | film_actorCreateWithoutActorInput[] | film_actorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutActorInput | film_actorCreateOrConnectWithoutActorInput[]
    createMany?: film_actorCreateManyActorInputEnvelope
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type film_actorUpdateManyWithoutActorNestedInput = {
    create?: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput> | film_actorCreateWithoutActorInput[] | film_actorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutActorInput | film_actorCreateOrConnectWithoutActorInput[]
    upsert?: film_actorUpsertWithWhereUniqueWithoutActorInput | film_actorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: film_actorCreateManyActorInputEnvelope
    set?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    disconnect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    delete?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    update?: film_actorUpdateWithWhereUniqueWithoutActorInput | film_actorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: film_actorUpdateManyWithWhereWithoutActorInput | film_actorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type film_actorUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput> | film_actorCreateWithoutActorInput[] | film_actorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutActorInput | film_actorCreateOrConnectWithoutActorInput[]
    upsert?: film_actorUpsertWithWhereUniqueWithoutActorInput | film_actorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: film_actorCreateManyActorInputEnvelope
    set?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    disconnect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    delete?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    update?: film_actorUpdateWithWhereUniqueWithoutActorInput | film_actorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: film_actorUpdateManyWithWhereWithoutActorInput | film_actorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
  }

  export type paymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput> | paymentCreateWithoutCustomerInput[] | paymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[]
    createMany?: paymentCreateManyCustomerInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type subscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput> | subscriptionCreateWithoutCustomerInput[] | subscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutCustomerInput | subscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: subscriptionCreateManyCustomerInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput> | paymentCreateWithoutCustomerInput[] | paymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[]
    createMany?: paymentCreateManyCustomerInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type subscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput> | subscriptionCreateWithoutCustomerInput[] | subscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutCustomerInput | subscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: subscriptionCreateManyCustomerInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type paymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput> | paymentCreateWithoutCustomerInput[] | paymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutCustomerInput | paymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: paymentCreateManyCustomerInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutCustomerInput | paymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutCustomerInput | paymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type subscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput> | subscriptionCreateWithoutCustomerInput[] | subscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutCustomerInput | subscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutCustomerInput | subscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: subscriptionCreateManyCustomerInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutCustomerInput | subscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutCustomerInput | subscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCustomerInput | reviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCustomerInput | reviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCustomerInput | reviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput> | paymentCreateWithoutCustomerInput[] | paymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutCustomerInput | paymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: paymentCreateManyCustomerInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutCustomerInput | paymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutCustomerInput | paymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type subscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput> | subscriptionCreateWithoutCustomerInput[] | subscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutCustomerInput | subscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutCustomerInput | subscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: subscriptionCreateManyCustomerInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutCustomerInput | subscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutCustomerInput | subscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCustomerInput | reviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCustomerInput | reviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCustomerInput | reviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type film_directorCreateNestedManyWithoutDirectorInput = {
    create?: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput> | film_directorCreateWithoutDirectorInput[] | film_directorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutDirectorInput | film_directorCreateOrConnectWithoutDirectorInput[]
    createMany?: film_directorCreateManyDirectorInputEnvelope
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
  }

  export type film_directorUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput> | film_directorCreateWithoutDirectorInput[] | film_directorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutDirectorInput | film_directorCreateOrConnectWithoutDirectorInput[]
    createMany?: film_directorCreateManyDirectorInputEnvelope
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
  }

  export type film_directorUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput> | film_directorCreateWithoutDirectorInput[] | film_directorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutDirectorInput | film_directorCreateOrConnectWithoutDirectorInput[]
    upsert?: film_directorUpsertWithWhereUniqueWithoutDirectorInput | film_directorUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: film_directorCreateManyDirectorInputEnvelope
    set?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    disconnect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    delete?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    update?: film_directorUpdateWithWhereUniqueWithoutDirectorInput | film_directorUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: film_directorUpdateManyWithWhereWithoutDirectorInput | film_directorUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
  }

  export type film_directorUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput> | film_directorCreateWithoutDirectorInput[] | film_directorUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutDirectorInput | film_directorCreateOrConnectWithoutDirectorInput[]
    upsert?: film_directorUpsertWithWhereUniqueWithoutDirectorInput | film_directorUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: film_directorCreateManyDirectorInputEnvelope
    set?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    disconnect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    delete?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    update?: film_directorUpdateWithWhereUniqueWithoutDirectorInput | film_directorUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: film_directorUpdateManyWithWhereWithoutDirectorInput | film_directorUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
  }

  export type studioCreateNestedOneWithoutFilmInput = {
    create?: XOR<studioCreateWithoutFilmInput, studioUncheckedCreateWithoutFilmInput>
    connectOrCreate?: studioCreateOrConnectWithoutFilmInput
    connect?: studioWhereUniqueInput
  }

  export type film_actorCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput> | film_actorCreateWithoutFilmInput[] | film_actorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutFilmInput | film_actorCreateOrConnectWithoutFilmInput[]
    createMany?: film_actorCreateManyFilmInputEnvelope
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
  }

  export type film_directorCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput> | film_directorCreateWithoutFilmInput[] | film_directorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutFilmInput | film_directorCreateOrConnectWithoutFilmInput[]
    createMany?: film_directorCreateManyFilmInputEnvelope
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
  }

  export type film_genreCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput> | film_genreCreateWithoutFilmInput[] | film_genreUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutFilmInput | film_genreCreateOrConnectWithoutFilmInput[]
    createMany?: film_genreCreateManyFilmInputEnvelope
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutFilmInput = {
    create?: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput> | reviewCreateWithoutFilmInput[] | reviewUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutFilmInput | reviewCreateOrConnectWithoutFilmInput[]
    createMany?: reviewCreateManyFilmInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type film_actorUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput> | film_actorCreateWithoutFilmInput[] | film_actorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutFilmInput | film_actorCreateOrConnectWithoutFilmInput[]
    createMany?: film_actorCreateManyFilmInputEnvelope
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
  }

  export type film_directorUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput> | film_directorCreateWithoutFilmInput[] | film_directorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutFilmInput | film_directorCreateOrConnectWithoutFilmInput[]
    createMany?: film_directorCreateManyFilmInputEnvelope
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
  }

  export type film_genreUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput> | film_genreCreateWithoutFilmInput[] | film_genreUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutFilmInput | film_genreCreateOrConnectWithoutFilmInput[]
    createMany?: film_genreCreateManyFilmInputEnvelope
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutFilmInput = {
    create?: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput> | reviewCreateWithoutFilmInput[] | reviewUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutFilmInput | reviewCreateOrConnectWithoutFilmInput[]
    createMany?: reviewCreateManyFilmInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumrestrictionFieldUpdateOperationsInput = {
    set?: $Enums.restriction | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type studioUpdateOneWithoutFilmNestedInput = {
    create?: XOR<studioCreateWithoutFilmInput, studioUncheckedCreateWithoutFilmInput>
    connectOrCreate?: studioCreateOrConnectWithoutFilmInput
    upsert?: studioUpsertWithoutFilmInput
    disconnect?: studioWhereInput | boolean
    delete?: studioWhereInput | boolean
    connect?: studioWhereUniqueInput
    update?: XOR<XOR<studioUpdateToOneWithWhereWithoutFilmInput, studioUpdateWithoutFilmInput>, studioUncheckedUpdateWithoutFilmInput>
  }

  export type film_actorUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput> | film_actorCreateWithoutFilmInput[] | film_actorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutFilmInput | film_actorCreateOrConnectWithoutFilmInput[]
    upsert?: film_actorUpsertWithWhereUniqueWithoutFilmInput | film_actorUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_actorCreateManyFilmInputEnvelope
    set?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    disconnect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    delete?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    update?: film_actorUpdateWithWhereUniqueWithoutFilmInput | film_actorUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_actorUpdateManyWithWhereWithoutFilmInput | film_actorUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
  }

  export type film_directorUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput> | film_directorCreateWithoutFilmInput[] | film_directorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutFilmInput | film_directorCreateOrConnectWithoutFilmInput[]
    upsert?: film_directorUpsertWithWhereUniqueWithoutFilmInput | film_directorUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_directorCreateManyFilmInputEnvelope
    set?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    disconnect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    delete?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    update?: film_directorUpdateWithWhereUniqueWithoutFilmInput | film_directorUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_directorUpdateManyWithWhereWithoutFilmInput | film_directorUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
  }

  export type film_genreUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput> | film_genreCreateWithoutFilmInput[] | film_genreUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutFilmInput | film_genreCreateOrConnectWithoutFilmInput[]
    upsert?: film_genreUpsertWithWhereUniqueWithoutFilmInput | film_genreUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_genreCreateManyFilmInputEnvelope
    set?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    disconnect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    delete?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    update?: film_genreUpdateWithWhereUniqueWithoutFilmInput | film_genreUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_genreUpdateManyWithWhereWithoutFilmInput | film_genreUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutFilmNestedInput = {
    create?: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput> | reviewCreateWithoutFilmInput[] | reviewUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutFilmInput | reviewCreateOrConnectWithoutFilmInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutFilmInput | reviewUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: reviewCreateManyFilmInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutFilmInput | reviewUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutFilmInput | reviewUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type film_actorUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput> | film_actorCreateWithoutFilmInput[] | film_actorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_actorCreateOrConnectWithoutFilmInput | film_actorCreateOrConnectWithoutFilmInput[]
    upsert?: film_actorUpsertWithWhereUniqueWithoutFilmInput | film_actorUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_actorCreateManyFilmInputEnvelope
    set?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    disconnect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    delete?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    connect?: film_actorWhereUniqueInput | film_actorWhereUniqueInput[]
    update?: film_actorUpdateWithWhereUniqueWithoutFilmInput | film_actorUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_actorUpdateManyWithWhereWithoutFilmInput | film_actorUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
  }

  export type film_directorUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput> | film_directorCreateWithoutFilmInput[] | film_directorUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_directorCreateOrConnectWithoutFilmInput | film_directorCreateOrConnectWithoutFilmInput[]
    upsert?: film_directorUpsertWithWhereUniqueWithoutFilmInput | film_directorUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_directorCreateManyFilmInputEnvelope
    set?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    disconnect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    delete?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    connect?: film_directorWhereUniqueInput | film_directorWhereUniqueInput[]
    update?: film_directorUpdateWithWhereUniqueWithoutFilmInput | film_directorUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_directorUpdateManyWithWhereWithoutFilmInput | film_directorUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
  }

  export type film_genreUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput> | film_genreCreateWithoutFilmInput[] | film_genreUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutFilmInput | film_genreCreateOrConnectWithoutFilmInput[]
    upsert?: film_genreUpsertWithWhereUniqueWithoutFilmInput | film_genreUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: film_genreCreateManyFilmInputEnvelope
    set?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    disconnect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    delete?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    update?: film_genreUpdateWithWhereUniqueWithoutFilmInput | film_genreUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: film_genreUpdateManyWithWhereWithoutFilmInput | film_genreUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput> | reviewCreateWithoutFilmInput[] | reviewUncheckedCreateWithoutFilmInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutFilmInput | reviewCreateOrConnectWithoutFilmInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutFilmInput | reviewUpsertWithWhereUniqueWithoutFilmInput[]
    createMany?: reviewCreateManyFilmInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutFilmInput | reviewUpdateWithWhereUniqueWithoutFilmInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutFilmInput | reviewUpdateManyWithWhereWithoutFilmInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type actorCreateNestedOneWithoutFilm_actorInput = {
    create?: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: actorCreateOrConnectWithoutFilm_actorInput
    connect?: actorWhereUniqueInput
  }

  export type filmCreateNestedOneWithoutFilm_actorInput = {
    create?: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_actorInput
    connect?: filmWhereUniqueInput
  }

  export type actorUpdateOneRequiredWithoutFilm_actorNestedInput = {
    create?: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: actorCreateOrConnectWithoutFilm_actorInput
    upsert?: actorUpsertWithoutFilm_actorInput
    connect?: actorWhereUniqueInput
    update?: XOR<XOR<actorUpdateToOneWithWhereWithoutFilm_actorInput, actorUpdateWithoutFilm_actorInput>, actorUncheckedUpdateWithoutFilm_actorInput>
  }

  export type filmUpdateOneRequiredWithoutFilm_actorNestedInput = {
    create?: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_actorInput
    upsert?: filmUpsertWithoutFilm_actorInput
    connect?: filmWhereUniqueInput
    update?: XOR<XOR<filmUpdateToOneWithWhereWithoutFilm_actorInput, filmUpdateWithoutFilm_actorInput>, filmUncheckedUpdateWithoutFilm_actorInput>
  }

  export type directorCreateNestedOneWithoutFilm_directorInput = {
    create?: XOR<directorCreateWithoutFilm_directorInput, directorUncheckedCreateWithoutFilm_directorInput>
    connectOrCreate?: directorCreateOrConnectWithoutFilm_directorInput
    connect?: directorWhereUniqueInput
  }

  export type filmCreateNestedOneWithoutFilm_directorInput = {
    create?: XOR<filmCreateWithoutFilm_directorInput, filmUncheckedCreateWithoutFilm_directorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_directorInput
    connect?: filmWhereUniqueInput
  }

  export type directorUpdateOneRequiredWithoutFilm_directorNestedInput = {
    create?: XOR<directorCreateWithoutFilm_directorInput, directorUncheckedCreateWithoutFilm_directorInput>
    connectOrCreate?: directorCreateOrConnectWithoutFilm_directorInput
    upsert?: directorUpsertWithoutFilm_directorInput
    connect?: directorWhereUniqueInput
    update?: XOR<XOR<directorUpdateToOneWithWhereWithoutFilm_directorInput, directorUpdateWithoutFilm_directorInput>, directorUncheckedUpdateWithoutFilm_directorInput>
  }

  export type filmUpdateOneRequiredWithoutFilm_directorNestedInput = {
    create?: XOR<filmCreateWithoutFilm_directorInput, filmUncheckedCreateWithoutFilm_directorInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_directorInput
    upsert?: filmUpsertWithoutFilm_directorInput
    connect?: filmWhereUniqueInput
    update?: XOR<XOR<filmUpdateToOneWithWhereWithoutFilm_directorInput, filmUpdateWithoutFilm_directorInput>, filmUncheckedUpdateWithoutFilm_directorInput>
  }

  export type filmCreateNestedOneWithoutFilm_genreInput = {
    create?: XOR<filmCreateWithoutFilm_genreInput, filmUncheckedCreateWithoutFilm_genreInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_genreInput
    connect?: filmWhereUniqueInput
  }

  export type genreCreateNestedOneWithoutFilm_genreInput = {
    create?: XOR<genreCreateWithoutFilm_genreInput, genreUncheckedCreateWithoutFilm_genreInput>
    connectOrCreate?: genreCreateOrConnectWithoutFilm_genreInput
    connect?: genreWhereUniqueInput
  }

  export type filmUpdateOneRequiredWithoutFilm_genreNestedInput = {
    create?: XOR<filmCreateWithoutFilm_genreInput, filmUncheckedCreateWithoutFilm_genreInput>
    connectOrCreate?: filmCreateOrConnectWithoutFilm_genreInput
    upsert?: filmUpsertWithoutFilm_genreInput
    connect?: filmWhereUniqueInput
    update?: XOR<XOR<filmUpdateToOneWithWhereWithoutFilm_genreInput, filmUpdateWithoutFilm_genreInput>, filmUncheckedUpdateWithoutFilm_genreInput>
  }

  export type genreUpdateOneRequiredWithoutFilm_genreNestedInput = {
    create?: XOR<genreCreateWithoutFilm_genreInput, genreUncheckedCreateWithoutFilm_genreInput>
    connectOrCreate?: genreCreateOrConnectWithoutFilm_genreInput
    upsert?: genreUpsertWithoutFilm_genreInput
    connect?: genreWhereUniqueInput
    update?: XOR<XOR<genreUpdateToOneWithWhereWithoutFilm_genreInput, genreUpdateWithoutFilm_genreInput>, genreUncheckedUpdateWithoutFilm_genreInput>
  }

  export type film_genreCreateNestedManyWithoutGenreInput = {
    create?: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput> | film_genreCreateWithoutGenreInput[] | film_genreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutGenreInput | film_genreCreateOrConnectWithoutGenreInput[]
    createMany?: film_genreCreateManyGenreInputEnvelope
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
  }

  export type film_genreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput> | film_genreCreateWithoutGenreInput[] | film_genreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutGenreInput | film_genreCreateOrConnectWithoutGenreInput[]
    createMany?: film_genreCreateManyGenreInputEnvelope
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
  }

  export type film_genreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput> | film_genreCreateWithoutGenreInput[] | film_genreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutGenreInput | film_genreCreateOrConnectWithoutGenreInput[]
    upsert?: film_genreUpsertWithWhereUniqueWithoutGenreInput | film_genreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: film_genreCreateManyGenreInputEnvelope
    set?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    disconnect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    delete?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    update?: film_genreUpdateWithWhereUniqueWithoutGenreInput | film_genreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: film_genreUpdateManyWithWhereWithoutGenreInput | film_genreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
  }

  export type film_genreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput> | film_genreCreateWithoutGenreInput[] | film_genreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: film_genreCreateOrConnectWithoutGenreInput | film_genreCreateOrConnectWithoutGenreInput[]
    upsert?: film_genreUpsertWithWhereUniqueWithoutGenreInput | film_genreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: film_genreCreateManyGenreInputEnvelope
    set?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    disconnect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    delete?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    connect?: film_genreWhereUniqueInput | film_genreWhereUniqueInput[]
    update?: film_genreUpdateWithWhereUniqueWithoutGenreInput | film_genreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: film_genreUpdateManyWithWhereWithoutGenreInput | film_genreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
  }

  export type customerCreateNestedOneWithoutPaymentInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput
    connect?: customerWhereUniqueInput
  }

  export type subscriptionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<subscriptionCreateWithoutPaymentInput, subscriptionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: subscriptionCreateOrConnectWithoutPaymentInput
    connect?: subscriptionWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumpayment_typeFieldUpdateOperationsInput = {
    set?: $Enums.payment_type | null
  }

  export type customerUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput
    upsert?: customerUpsertWithoutPaymentInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutPaymentInput, customerUpdateWithoutPaymentInput>, customerUncheckedUpdateWithoutPaymentInput>
  }

  export type subscriptionUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<subscriptionCreateWithoutPaymentInput, subscriptionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: subscriptionCreateOrConnectWithoutPaymentInput
    upsert?: subscriptionUpsertWithoutPaymentInput
    disconnect?: subscriptionWhereInput | boolean
    delete?: subscriptionWhereInput | boolean
    connect?: subscriptionWhereUniqueInput
    update?: XOR<XOR<subscriptionUpdateToOneWithWhereWithoutPaymentInput, subscriptionUpdateWithoutPaymentInput>, subscriptionUncheckedUpdateWithoutPaymentInput>
  }

  export type filmCreateNestedManyWithoutStudioInput = {
    create?: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput> | filmCreateWithoutStudioInput[] | filmUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: filmCreateOrConnectWithoutStudioInput | filmCreateOrConnectWithoutStudioInput[]
    createMany?: filmCreateManyStudioInputEnvelope
    connect?: filmWhereUniqueInput | filmWhereUniqueInput[]
  }

  export type filmUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput> | filmCreateWithoutStudioInput[] | filmUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: filmCreateOrConnectWithoutStudioInput | filmCreateOrConnectWithoutStudioInput[]
    createMany?: filmCreateManyStudioInputEnvelope
    connect?: filmWhereUniqueInput | filmWhereUniqueInput[]
  }

  export type filmUpdateManyWithoutStudioNestedInput = {
    create?: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput> | filmCreateWithoutStudioInput[] | filmUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: filmCreateOrConnectWithoutStudioInput | filmCreateOrConnectWithoutStudioInput[]
    upsert?: filmUpsertWithWhereUniqueWithoutStudioInput | filmUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: filmCreateManyStudioInputEnvelope
    set?: filmWhereUniqueInput | filmWhereUniqueInput[]
    disconnect?: filmWhereUniqueInput | filmWhereUniqueInput[]
    delete?: filmWhereUniqueInput | filmWhereUniqueInput[]
    connect?: filmWhereUniqueInput | filmWhereUniqueInput[]
    update?: filmUpdateWithWhereUniqueWithoutStudioInput | filmUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: filmUpdateManyWithWhereWithoutStudioInput | filmUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: filmScalarWhereInput | filmScalarWhereInput[]
  }

  export type filmUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput> | filmCreateWithoutStudioInput[] | filmUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: filmCreateOrConnectWithoutStudioInput | filmCreateOrConnectWithoutStudioInput[]
    upsert?: filmUpsertWithWhereUniqueWithoutStudioInput | filmUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: filmCreateManyStudioInputEnvelope
    set?: filmWhereUniqueInput | filmWhereUniqueInput[]
    disconnect?: filmWhereUniqueInput | filmWhereUniqueInput[]
    delete?: filmWhereUniqueInput | filmWhereUniqueInput[]
    connect?: filmWhereUniqueInput | filmWhereUniqueInput[]
    update?: filmUpdateWithWhereUniqueWithoutStudioInput | filmUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: filmUpdateManyWithWhereWithoutStudioInput | filmUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: filmScalarWhereInput | filmScalarWhereInput[]
  }

  export type paymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput> | paymentCreateWithoutSubscriptionInput[] | paymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutSubscriptionInput | paymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: paymentCreateManySubscriptionInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type customerCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<customerCreateWithoutSubscriptionInput, customerUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: customerCreateOrConnectWithoutSubscriptionInput
    connect?: customerWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput> | paymentCreateWithoutSubscriptionInput[] | paymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutSubscriptionInput | paymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: paymentCreateManySubscriptionInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type Enumsubscription_typeFieldUpdateOperationsInput = {
    set?: $Enums.subscription_type
  }

  export type paymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput> | paymentCreateWithoutSubscriptionInput[] | paymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutSubscriptionInput | paymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutSubscriptionInput | paymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: paymentCreateManySubscriptionInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutSubscriptionInput | paymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutSubscriptionInput | paymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type customerUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<customerCreateWithoutSubscriptionInput, customerUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: customerCreateOrConnectWithoutSubscriptionInput
    upsert?: customerUpsertWithoutSubscriptionInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutSubscriptionInput, customerUpdateWithoutSubscriptionInput>, customerUncheckedUpdateWithoutSubscriptionInput>
  }

  export type paymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput> | paymentCreateWithoutSubscriptionInput[] | paymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutSubscriptionInput | paymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutSubscriptionInput | paymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: paymentCreateManySubscriptionInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutSubscriptionInput | paymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutSubscriptionInput | paymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type filmCreateNestedOneWithoutReviewsInput = {
    create?: XOR<filmCreateWithoutReviewsInput, filmUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: filmCreateOrConnectWithoutReviewsInput
    connect?: filmWhereUniqueInput
  }

  export type customerCreateNestedOneWithoutReviewsInput = {
    create?: XOR<customerCreateWithoutReviewsInput, customerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: customerCreateOrConnectWithoutReviewsInput
    connect?: customerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type filmUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<filmCreateWithoutReviewsInput, filmUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: filmCreateOrConnectWithoutReviewsInput
    upsert?: filmUpsertWithoutReviewsInput
    connect?: filmWhereUniqueInput
    update?: XOR<XOR<filmUpdateToOneWithWhereWithoutReviewsInput, filmUpdateWithoutReviewsInput>, filmUncheckedUpdateWithoutReviewsInput>
  }

  export type customerUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<customerCreateWithoutReviewsInput, customerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: customerCreateOrConnectWithoutReviewsInput
    upsert?: customerUpsertWithoutReviewsInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutReviewsInput, customerUpdateWithoutReviewsInput>, customerUncheckedUpdateWithoutReviewsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumrestrictionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.restriction | EnumrestrictionFieldRefInput<$PrismaModel> | null
    in?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrestrictionNullableFilter<$PrismaModel> | $Enums.restriction | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumrestrictionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.restriction | EnumrestrictionFieldRefInput<$PrismaModel> | null
    in?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.restriction[] | ListEnumrestrictionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumrestrictionNullableWithAggregatesFilter<$PrismaModel> | $Enums.restriction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumrestrictionNullableFilter<$PrismaModel>
    _max?: NestedEnumrestrictionNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumpayment_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_typeNullableFilter<$PrismaModel> | $Enums.payment_type | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_type | Enumpayment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_type[] | ListEnumpayment_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumsubscription_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_type | Enumsubscription_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_typeFilter<$PrismaModel> | $Enums.subscription_type
  }

  export type NestedEnumsubscription_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscription_type | Enumsubscription_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscription_type[] | ListEnumsubscription_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscription_typeWithAggregatesFilter<$PrismaModel> | $Enums.subscription_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscription_typeFilter<$PrismaModel>
    _max?: NestedEnumsubscription_typeFilter<$PrismaModel>
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

  export type film_actorCreateWithoutActorInput = {
    film: filmCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateWithoutActorInput = {
    film_id: number
  }

  export type film_actorCreateOrConnectWithoutActorInput = {
    where: film_actorWhereUniqueInput
    create: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput>
  }

  export type film_actorCreateManyActorInputEnvelope = {
    data: film_actorCreateManyActorInput | film_actorCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type film_actorUpsertWithWhereUniqueWithoutActorInput = {
    where: film_actorWhereUniqueInput
    update: XOR<film_actorUpdateWithoutActorInput, film_actorUncheckedUpdateWithoutActorInput>
    create: XOR<film_actorCreateWithoutActorInput, film_actorUncheckedCreateWithoutActorInput>
  }

  export type film_actorUpdateWithWhereUniqueWithoutActorInput = {
    where: film_actorWhereUniqueInput
    data: XOR<film_actorUpdateWithoutActorInput, film_actorUncheckedUpdateWithoutActorInput>
  }

  export type film_actorUpdateManyWithWhereWithoutActorInput = {
    where: film_actorScalarWhereInput
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyWithoutActorInput>
  }

  export type film_actorScalarWhereInput = {
    AND?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
    OR?: film_actorScalarWhereInput[]
    NOT?: film_actorScalarWhereInput | film_actorScalarWhereInput[]
    film_id?: IntFilter<"film_actor"> | number
    actor_id?: IntFilter<"film_actor"> | number
  }

  export type paymentCreateWithoutCustomerInput = {
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    subscription?: subscriptionCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutCustomerInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    subscription_id?: number | null
  }

  export type paymentCreateOrConnectWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
  }

  export type paymentCreateManyCustomerInputEnvelope = {
    data: paymentCreateManyCustomerInput | paymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionCreateWithoutCustomerInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    payment?: paymentCreateNestedManyWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateWithoutCustomerInput = {
    subscription_id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    payment?: paymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type subscriptionCreateOrConnectWithoutCustomerInput = {
    where: subscriptionWhereUniqueInput
    create: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type subscriptionCreateManyCustomerInputEnvelope = {
    data: subscriptionCreateManyCustomerInput | subscriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutCustomerInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    film: filmCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutCustomerInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    film_id: number
  }

  export type reviewCreateOrConnectWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput>
  }

  export type reviewCreateManyCustomerInputEnvelope = {
    data: reviewCreateManyCustomerInput | reviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type paymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>
  }

  export type paymentUpdateManyWithWhereWithoutCustomerInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    amount?: FloatNullableFilter<"payment"> | number | null
    payment_type?: Enumpayment_typeNullableFilter<"payment"> | $Enums.payment_type | null
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: BoolNullableFilter<"payment"> | boolean | null
    customer_id?: IntNullableFilter<"payment"> | number | null
    subscription_id?: IntNullableFilter<"payment"> | number | null
  }

  export type subscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: subscriptionWhereUniqueInput
    update: XOR<subscriptionUpdateWithoutCustomerInput, subscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<subscriptionCreateWithoutCustomerInput, subscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type subscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: subscriptionWhereUniqueInput
    data: XOR<subscriptionUpdateWithoutCustomerInput, subscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type subscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: subscriptionScalarWhereInput
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type subscriptionScalarWhereInput = {
    AND?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
    OR?: subscriptionScalarWhereInput[]
    NOT?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
    subscription_id?: IntFilter<"subscription"> | number
    start_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscription"> | Date | string | null
    type?: Enumsubscription_typeFilter<"subscription"> | $Enums.subscription_type
    price?: FloatNullableFilter<"subscription"> | number | null
    customer_id?: IntNullableFilter<"subscription"> | number | null
  }

  export type reviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutCustomerInput, reviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutCustomerInput, reviewUncheckedUpdateWithoutCustomerInput>
  }

  export type reviewUpdateManyWithWhereWithoutCustomerInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    review_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    film_id?: IntFilter<"review"> | number
    customer_id?: IntFilter<"review"> | number
  }

  export type film_directorCreateWithoutDirectorInput = {
    film: filmCreateNestedOneWithoutFilm_directorInput
  }

  export type film_directorUncheckedCreateWithoutDirectorInput = {
    film_id: number
  }

  export type film_directorCreateOrConnectWithoutDirectorInput = {
    where: film_directorWhereUniqueInput
    create: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput>
  }

  export type film_directorCreateManyDirectorInputEnvelope = {
    data: film_directorCreateManyDirectorInput | film_directorCreateManyDirectorInput[]
    skipDuplicates?: boolean
  }

  export type film_directorUpsertWithWhereUniqueWithoutDirectorInput = {
    where: film_directorWhereUniqueInput
    update: XOR<film_directorUpdateWithoutDirectorInput, film_directorUncheckedUpdateWithoutDirectorInput>
    create: XOR<film_directorCreateWithoutDirectorInput, film_directorUncheckedCreateWithoutDirectorInput>
  }

  export type film_directorUpdateWithWhereUniqueWithoutDirectorInput = {
    where: film_directorWhereUniqueInput
    data: XOR<film_directorUpdateWithoutDirectorInput, film_directorUncheckedUpdateWithoutDirectorInput>
  }

  export type film_directorUpdateManyWithWhereWithoutDirectorInput = {
    where: film_directorScalarWhereInput
    data: XOR<film_directorUpdateManyMutationInput, film_directorUncheckedUpdateManyWithoutDirectorInput>
  }

  export type film_directorScalarWhereInput = {
    AND?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
    OR?: film_directorScalarWhereInput[]
    NOT?: film_directorScalarWhereInput | film_directorScalarWhereInput[]
    film_id?: IntFilter<"film_director"> | number
    director_id?: IntFilter<"film_director"> | number
  }

  export type studioCreateWithoutFilmInput = {
    name: string
    country: string
    founded_date?: Date | string | null
  }

  export type studioUncheckedCreateWithoutFilmInput = {
    studio_id?: number
    name: string
    country: string
    founded_date?: Date | string | null
  }

  export type studioCreateOrConnectWithoutFilmInput = {
    where: studioWhereUniqueInput
    create: XOR<studioCreateWithoutFilmInput, studioUncheckedCreateWithoutFilmInput>
  }

  export type film_actorCreateWithoutFilmInput = {
    actor: actorCreateNestedOneWithoutFilm_actorInput
  }

  export type film_actorUncheckedCreateWithoutFilmInput = {
    actor_id: number
  }

  export type film_actorCreateOrConnectWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    create: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput>
  }

  export type film_actorCreateManyFilmInputEnvelope = {
    data: film_actorCreateManyFilmInput | film_actorCreateManyFilmInput[]
    skipDuplicates?: boolean
  }

  export type film_directorCreateWithoutFilmInput = {
    director: directorCreateNestedOneWithoutFilm_directorInput
  }

  export type film_directorUncheckedCreateWithoutFilmInput = {
    director_id: number
  }

  export type film_directorCreateOrConnectWithoutFilmInput = {
    where: film_directorWhereUniqueInput
    create: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput>
  }

  export type film_directorCreateManyFilmInputEnvelope = {
    data: film_directorCreateManyFilmInput | film_directorCreateManyFilmInput[]
    skipDuplicates?: boolean
  }

  export type film_genreCreateWithoutFilmInput = {
    genre: genreCreateNestedOneWithoutFilm_genreInput
  }

  export type film_genreUncheckedCreateWithoutFilmInput = {
    genre_id: number
  }

  export type film_genreCreateOrConnectWithoutFilmInput = {
    where: film_genreWhereUniqueInput
    create: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput>
  }

  export type film_genreCreateManyFilmInputEnvelope = {
    data: film_genreCreateManyFilmInput | film_genreCreateManyFilmInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutFilmInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutFilmInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    customer_id: number
  }

  export type reviewCreateOrConnectWithoutFilmInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput>
  }

  export type reviewCreateManyFilmInputEnvelope = {
    data: reviewCreateManyFilmInput | reviewCreateManyFilmInput[]
    skipDuplicates?: boolean
  }

  export type studioUpsertWithoutFilmInput = {
    update: XOR<studioUpdateWithoutFilmInput, studioUncheckedUpdateWithoutFilmInput>
    create: XOR<studioCreateWithoutFilmInput, studioUncheckedCreateWithoutFilmInput>
    where?: studioWhereInput
  }

  export type studioUpdateToOneWithWhereWithoutFilmInput = {
    where?: studioWhereInput
    data: XOR<studioUpdateWithoutFilmInput, studioUncheckedUpdateWithoutFilmInput>
  }

  export type studioUpdateWithoutFilmInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studioUncheckedUpdateWithoutFilmInput = {
    studio_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_actorUpsertWithWhereUniqueWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    update: XOR<film_actorUpdateWithoutFilmInput, film_actorUncheckedUpdateWithoutFilmInput>
    create: XOR<film_actorCreateWithoutFilmInput, film_actorUncheckedCreateWithoutFilmInput>
  }

  export type film_actorUpdateWithWhereUniqueWithoutFilmInput = {
    where: film_actorWhereUniqueInput
    data: XOR<film_actorUpdateWithoutFilmInput, film_actorUncheckedUpdateWithoutFilmInput>
  }

  export type film_actorUpdateManyWithWhereWithoutFilmInput = {
    where: film_actorScalarWhereInput
    data: XOR<film_actorUpdateManyMutationInput, film_actorUncheckedUpdateManyWithoutFilmInput>
  }

  export type film_directorUpsertWithWhereUniqueWithoutFilmInput = {
    where: film_directorWhereUniqueInput
    update: XOR<film_directorUpdateWithoutFilmInput, film_directorUncheckedUpdateWithoutFilmInput>
    create: XOR<film_directorCreateWithoutFilmInput, film_directorUncheckedCreateWithoutFilmInput>
  }

  export type film_directorUpdateWithWhereUniqueWithoutFilmInput = {
    where: film_directorWhereUniqueInput
    data: XOR<film_directorUpdateWithoutFilmInput, film_directorUncheckedUpdateWithoutFilmInput>
  }

  export type film_directorUpdateManyWithWhereWithoutFilmInput = {
    where: film_directorScalarWhereInput
    data: XOR<film_directorUpdateManyMutationInput, film_directorUncheckedUpdateManyWithoutFilmInput>
  }

  export type film_genreUpsertWithWhereUniqueWithoutFilmInput = {
    where: film_genreWhereUniqueInput
    update: XOR<film_genreUpdateWithoutFilmInput, film_genreUncheckedUpdateWithoutFilmInput>
    create: XOR<film_genreCreateWithoutFilmInput, film_genreUncheckedCreateWithoutFilmInput>
  }

  export type film_genreUpdateWithWhereUniqueWithoutFilmInput = {
    where: film_genreWhereUniqueInput
    data: XOR<film_genreUpdateWithoutFilmInput, film_genreUncheckedUpdateWithoutFilmInput>
  }

  export type film_genreUpdateManyWithWhereWithoutFilmInput = {
    where: film_genreScalarWhereInput
    data: XOR<film_genreUpdateManyMutationInput, film_genreUncheckedUpdateManyWithoutFilmInput>
  }

  export type film_genreScalarWhereInput = {
    AND?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
    OR?: film_genreScalarWhereInput[]
    NOT?: film_genreScalarWhereInput | film_genreScalarWhereInput[]
    film_id?: IntFilter<"film_genre"> | number
    genre_id?: IntFilter<"film_genre"> | number
  }

  export type reviewUpsertWithWhereUniqueWithoutFilmInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutFilmInput, reviewUncheckedUpdateWithoutFilmInput>
    create: XOR<reviewCreateWithoutFilmInput, reviewUncheckedCreateWithoutFilmInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutFilmInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutFilmInput, reviewUncheckedUpdateWithoutFilmInput>
  }

  export type reviewUpdateManyWithWhereWithoutFilmInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutFilmInput>
  }

  export type actorCreateWithoutFilm_actorInput = {
    first_name: string
    last_name: string
    country: string
    birth_date?: Date | string | null
  }

  export type actorUncheckedCreateWithoutFilm_actorInput = {
    actor_id?: number
    first_name: string
    last_name: string
    country: string
    birth_date?: Date | string | null
  }

  export type actorCreateOrConnectWithoutFilm_actorInput = {
    where: actorWhereUniqueInput
    create: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
  }

  export type filmCreateWithoutFilm_actorInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    studio?: studioCreateNestedOneWithoutFilmInput
    film_director?: film_directorCreateNestedManyWithoutFilmInput
    film_genre?: film_genreCreateNestedManyWithoutFilmInput
    reviews?: reviewCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutFilm_actorInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
    film_director?: film_directorUncheckedCreateNestedManyWithoutFilmInput
    film_genre?: film_genreUncheckedCreateNestedManyWithoutFilmInput
    reviews?: reviewUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutFilm_actorInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
  }

  export type actorUpsertWithoutFilm_actorInput = {
    update: XOR<actorUpdateWithoutFilm_actorInput, actorUncheckedUpdateWithoutFilm_actorInput>
    create: XOR<actorCreateWithoutFilm_actorInput, actorUncheckedCreateWithoutFilm_actorInput>
    where?: actorWhereInput
  }

  export type actorUpdateToOneWithWhereWithoutFilm_actorInput = {
    where?: actorWhereInput
    data: XOR<actorUpdateWithoutFilm_actorInput, actorUncheckedUpdateWithoutFilm_actorInput>
  }

  export type actorUpdateWithoutFilm_actorInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actorUncheckedUpdateWithoutFilm_actorInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filmUpsertWithoutFilm_actorInput = {
    update: XOR<filmUpdateWithoutFilm_actorInput, filmUncheckedUpdateWithoutFilm_actorInput>
    create: XOR<filmCreateWithoutFilm_actorInput, filmUncheckedCreateWithoutFilm_actorInput>
    where?: filmWhereInput
  }

  export type filmUpdateToOneWithWhereWithoutFilm_actorInput = {
    where?: filmWhereInput
    data: XOR<filmUpdateWithoutFilm_actorInput, filmUncheckedUpdateWithoutFilm_actorInput>
  }

  export type filmUpdateWithoutFilm_actorInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    studio?: studioUpdateOneWithoutFilmNestedInput
    film_director?: film_directorUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUpdateManyWithoutFilmNestedInput
    reviews?: reviewUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutFilm_actorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_director?: film_directorUncheckedUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUncheckedUpdateManyWithoutFilmNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type directorCreateWithoutFilm_directorInput = {
    first_name: string
    last_name: string
    country: string
  }

  export type directorUncheckedCreateWithoutFilm_directorInput = {
    director_id?: number
    first_name: string
    last_name: string
    country: string
  }

  export type directorCreateOrConnectWithoutFilm_directorInput = {
    where: directorWhereUniqueInput
    create: XOR<directorCreateWithoutFilm_directorInput, directorUncheckedCreateWithoutFilm_directorInput>
  }

  export type filmCreateWithoutFilm_directorInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    studio?: studioCreateNestedOneWithoutFilmInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_genre?: film_genreCreateNestedManyWithoutFilmInput
    reviews?: reviewCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutFilm_directorInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_genre?: film_genreUncheckedCreateNestedManyWithoutFilmInput
    reviews?: reviewUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutFilm_directorInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutFilm_directorInput, filmUncheckedCreateWithoutFilm_directorInput>
  }

  export type directorUpsertWithoutFilm_directorInput = {
    update: XOR<directorUpdateWithoutFilm_directorInput, directorUncheckedUpdateWithoutFilm_directorInput>
    create: XOR<directorCreateWithoutFilm_directorInput, directorUncheckedCreateWithoutFilm_directorInput>
    where?: directorWhereInput
  }

  export type directorUpdateToOneWithWhereWithoutFilm_directorInput = {
    where?: directorWhereInput
    data: XOR<directorUpdateWithoutFilm_directorInput, directorUncheckedUpdateWithoutFilm_directorInput>
  }

  export type directorUpdateWithoutFilm_directorInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type directorUncheckedUpdateWithoutFilm_directorInput = {
    director_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type filmUpsertWithoutFilm_directorInput = {
    update: XOR<filmUpdateWithoutFilm_directorInput, filmUncheckedUpdateWithoutFilm_directorInput>
    create: XOR<filmCreateWithoutFilm_directorInput, filmUncheckedCreateWithoutFilm_directorInput>
    where?: filmWhereInput
  }

  export type filmUpdateToOneWithWhereWithoutFilm_directorInput = {
    where?: filmWhereInput
    data: XOR<filmUpdateWithoutFilm_directorInput, filmUncheckedUpdateWithoutFilm_directorInput>
  }

  export type filmUpdateWithoutFilm_directorInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    studio?: studioUpdateOneWithoutFilmNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUpdateManyWithoutFilmNestedInput
    reviews?: reviewUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutFilm_directorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUncheckedUpdateManyWithoutFilmNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmCreateWithoutFilm_genreInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    studio?: studioCreateNestedOneWithoutFilmInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_director?: film_directorCreateNestedManyWithoutFilmInput
    reviews?: reviewCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutFilm_genreInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_director?: film_directorUncheckedCreateNestedManyWithoutFilmInput
    reviews?: reviewUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutFilm_genreInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutFilm_genreInput, filmUncheckedCreateWithoutFilm_genreInput>
  }

  export type genreCreateWithoutFilm_genreInput = {
    name?: string | null
    description?: string | null
  }

  export type genreUncheckedCreateWithoutFilm_genreInput = {
    genre_id?: number
    name?: string | null
    description?: string | null
  }

  export type genreCreateOrConnectWithoutFilm_genreInput = {
    where: genreWhereUniqueInput
    create: XOR<genreCreateWithoutFilm_genreInput, genreUncheckedCreateWithoutFilm_genreInput>
  }

  export type filmUpsertWithoutFilm_genreInput = {
    update: XOR<filmUpdateWithoutFilm_genreInput, filmUncheckedUpdateWithoutFilm_genreInput>
    create: XOR<filmCreateWithoutFilm_genreInput, filmUncheckedCreateWithoutFilm_genreInput>
    where?: filmWhereInput
  }

  export type filmUpdateToOneWithWhereWithoutFilm_genreInput = {
    where?: filmWhereInput
    data: XOR<filmUpdateWithoutFilm_genreInput, filmUncheckedUpdateWithoutFilm_genreInput>
  }

  export type filmUpdateWithoutFilm_genreInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    studio?: studioUpdateOneWithoutFilmNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUpdateManyWithoutFilmNestedInput
    reviews?: reviewUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutFilm_genreInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUncheckedUpdateManyWithoutFilmNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type genreUpsertWithoutFilm_genreInput = {
    update: XOR<genreUpdateWithoutFilm_genreInput, genreUncheckedUpdateWithoutFilm_genreInput>
    create: XOR<genreCreateWithoutFilm_genreInput, genreUncheckedCreateWithoutFilm_genreInput>
    where?: genreWhereInput
  }

  export type genreUpdateToOneWithWhereWithoutFilm_genreInput = {
    where?: genreWhereInput
    data: XOR<genreUpdateWithoutFilm_genreInput, genreUncheckedUpdateWithoutFilm_genreInput>
  }

  export type genreUpdateWithoutFilm_genreInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genreUncheckedUpdateWithoutFilm_genreInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type film_genreCreateWithoutGenreInput = {
    film: filmCreateNestedOneWithoutFilm_genreInput
  }

  export type film_genreUncheckedCreateWithoutGenreInput = {
    film_id: number
  }

  export type film_genreCreateOrConnectWithoutGenreInput = {
    where: film_genreWhereUniqueInput
    create: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput>
  }

  export type film_genreCreateManyGenreInputEnvelope = {
    data: film_genreCreateManyGenreInput | film_genreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type film_genreUpsertWithWhereUniqueWithoutGenreInput = {
    where: film_genreWhereUniqueInput
    update: XOR<film_genreUpdateWithoutGenreInput, film_genreUncheckedUpdateWithoutGenreInput>
    create: XOR<film_genreCreateWithoutGenreInput, film_genreUncheckedCreateWithoutGenreInput>
  }

  export type film_genreUpdateWithWhereUniqueWithoutGenreInput = {
    where: film_genreWhereUniqueInput
    data: XOR<film_genreUpdateWithoutGenreInput, film_genreUncheckedUpdateWithoutGenreInput>
  }

  export type film_genreUpdateManyWithWhereWithoutGenreInput = {
    where: film_genreScalarWhereInput
    data: XOR<film_genreUpdateManyMutationInput, film_genreUncheckedUpdateManyWithoutGenreInput>
  }

  export type customerCreateWithoutPaymentInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    subscription?: subscriptionCreateNestedManyWithoutCustomerInput
    reviews?: reviewCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutPaymentInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    subscription?: subscriptionUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: reviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutPaymentInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
  }

  export type subscriptionCreateWithoutPaymentInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    customer?: customerCreateNestedOneWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateWithoutPaymentInput = {
    subscription_id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
    customer_id?: number | null
  }

  export type subscriptionCreateOrConnectWithoutPaymentInput = {
    where: subscriptionWhereUniqueInput
    create: XOR<subscriptionCreateWithoutPaymentInput, subscriptionUncheckedCreateWithoutPaymentInput>
  }

  export type customerUpsertWithoutPaymentInput = {
    update: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutPaymentInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>
  }

  export type customerUpdateWithoutPaymentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: subscriptionUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutPaymentInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: subscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type subscriptionUpsertWithoutPaymentInput = {
    update: XOR<subscriptionUpdateWithoutPaymentInput, subscriptionUncheckedUpdateWithoutPaymentInput>
    create: XOR<subscriptionCreateWithoutPaymentInput, subscriptionUncheckedCreateWithoutPaymentInput>
    where?: subscriptionWhereInput
  }

  export type subscriptionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: subscriptionWhereInput
    data: XOR<subscriptionUpdateWithoutPaymentInput, subscriptionUncheckedUpdateWithoutPaymentInput>
  }

  export type subscriptionUpdateWithoutPaymentInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    customer?: customerUpdateOneWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateWithoutPaymentInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type filmCreateWithoutStudioInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_director?: film_directorCreateNestedManyWithoutFilmInput
    film_genre?: film_genreCreateNestedManyWithoutFilmInput
    reviews?: reviewCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutStudioInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_director?: film_directorUncheckedCreateNestedManyWithoutFilmInput
    film_genre?: film_genreUncheckedCreateNestedManyWithoutFilmInput
    reviews?: reviewUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutStudioInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput>
  }

  export type filmCreateManyStudioInputEnvelope = {
    data: filmCreateManyStudioInput | filmCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type filmUpsertWithWhereUniqueWithoutStudioInput = {
    where: filmWhereUniqueInput
    update: XOR<filmUpdateWithoutStudioInput, filmUncheckedUpdateWithoutStudioInput>
    create: XOR<filmCreateWithoutStudioInput, filmUncheckedCreateWithoutStudioInput>
  }

  export type filmUpdateWithWhereUniqueWithoutStudioInput = {
    where: filmWhereUniqueInput
    data: XOR<filmUpdateWithoutStudioInput, filmUncheckedUpdateWithoutStudioInput>
  }

  export type filmUpdateManyWithWhereWithoutStudioInput = {
    where: filmScalarWhereInput
    data: XOR<filmUpdateManyMutationInput, filmUncheckedUpdateManyWithoutStudioInput>
  }

  export type filmScalarWhereInput = {
    AND?: filmScalarWhereInput | filmScalarWhereInput[]
    OR?: filmScalarWhereInput[]
    NOT?: filmScalarWhereInput | filmScalarWhereInput[]
    film_id?: IntFilter<"film"> | number
    title?: StringNullableFilter<"film"> | string | null
    release_year?: IntNullableFilter<"film"> | number | null
    duration?: IntNullableFilter<"film"> | number | null
    age_restriction?: EnumrestrictionNullableFilter<"film"> | $Enums.restriction | null
    studio_id?: IntNullableFilter<"film"> | number | null
    isAvailable?: BoolFilter<"film"> | boolean
  }

  export type paymentCreateWithoutSubscriptionInput = {
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer?: customerCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateWithoutSubscriptionInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer_id?: number | null
  }

  export type paymentCreateOrConnectWithoutSubscriptionInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type paymentCreateManySubscriptionInputEnvelope = {
    data: paymentCreateManySubscriptionInput | paymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type customerCreateWithoutSubscriptionInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentCreateNestedManyWithoutCustomerInput
    reviews?: reviewCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutSubscriptionInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: reviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutSubscriptionInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutSubscriptionInput, customerUncheckedCreateWithoutSubscriptionInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutSubscriptionInput, paymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<paymentCreateWithoutSubscriptionInput, paymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutSubscriptionInput, paymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type paymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type customerUpsertWithoutSubscriptionInput = {
    update: XOR<customerUpdateWithoutSubscriptionInput, customerUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<customerCreateWithoutSubscriptionInput, customerUncheckedCreateWithoutSubscriptionInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutSubscriptionInput, customerUncheckedUpdateWithoutSubscriptionInput>
  }

  export type customerUpdateWithoutSubscriptionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutSubscriptionInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type filmCreateWithoutReviewsInput = {
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
    studio?: studioCreateNestedOneWithoutFilmInput
    film_actor?: film_actorCreateNestedManyWithoutFilmInput
    film_director?: film_directorCreateNestedManyWithoutFilmInput
    film_genre?: film_genreCreateNestedManyWithoutFilmInput
  }

  export type filmUncheckedCreateWithoutReviewsInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    studio_id?: number | null
    isAvailable?: boolean
    film_actor?: film_actorUncheckedCreateNestedManyWithoutFilmInput
    film_director?: film_directorUncheckedCreateNestedManyWithoutFilmInput
    film_genre?: film_genreUncheckedCreateNestedManyWithoutFilmInput
  }

  export type filmCreateOrConnectWithoutReviewsInput = {
    where: filmWhereUniqueInput
    create: XOR<filmCreateWithoutReviewsInput, filmUncheckedCreateWithoutReviewsInput>
  }

  export type customerCreateWithoutReviewsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentCreateNestedManyWithoutCustomerInput
    subscription?: subscriptionCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutReviewsInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    registration_date?: Date | string | null
    is_deleted?: boolean | null
    phone?: string | null
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput
    subscription?: subscriptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutReviewsInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutReviewsInput, customerUncheckedCreateWithoutReviewsInput>
  }

  export type filmUpsertWithoutReviewsInput = {
    update: XOR<filmUpdateWithoutReviewsInput, filmUncheckedUpdateWithoutReviewsInput>
    create: XOR<filmCreateWithoutReviewsInput, filmUncheckedCreateWithoutReviewsInput>
    where?: filmWhereInput
  }

  export type filmUpdateToOneWithWhereWithoutReviewsInput = {
    where?: filmWhereInput
    data: XOR<filmUpdateWithoutReviewsInput, filmUncheckedUpdateWithoutReviewsInput>
  }

  export type filmUpdateWithoutReviewsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    studio?: studioUpdateOneWithoutFilmNestedInput
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutReviewsInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    studio_id?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUncheckedUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type customerUpsertWithoutReviewsInput = {
    update: XOR<customerUpdateWithoutReviewsInput, customerUncheckedUpdateWithoutReviewsInput>
    create: XOR<customerCreateWithoutReviewsInput, customerUncheckedCreateWithoutReviewsInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutReviewsInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutReviewsInput, customerUncheckedUpdateWithoutReviewsInput>
  }

  export type customerUpdateWithoutReviewsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutCustomerNestedInput
    subscription?: subscriptionUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutReviewsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput
    subscription?: subscriptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type film_actorCreateManyActorInput = {
    film_id: number
  }

  export type film_actorUpdateWithoutActorInput = {
    film?: filmUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateWithoutActorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_actorUncheckedUpdateManyWithoutActorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type paymentCreateManyCustomerInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    subscription_id?: number | null
  }

  export type subscriptionCreateManyCustomerInput = {
    subscription_id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    type: $Enums.subscription_type
    price?: number | null
  }

  export type reviewCreateManyCustomerInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    film_id: number
  }

  export type paymentUpdateWithoutCustomerInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subscription?: subscriptionUpdateOneWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutCustomerInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subscription_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentUncheckedUpdateManyWithoutCustomerInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subscription_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subscriptionUpdateWithoutCustomerInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    payment?: paymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateWithoutCustomerInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    payment?: paymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateManyWithoutCustomerInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: Enumsubscription_typeFieldUpdateOperationsInput | $Enums.subscription_type
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type reviewUpdateWithoutCustomerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film?: filmUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutCustomerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUncheckedUpdateManyWithoutCustomerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorCreateManyDirectorInput = {
    film_id: number
  }

  export type film_directorUpdateWithoutDirectorInput = {
    film?: filmUpdateOneRequiredWithoutFilm_directorNestedInput
  }

  export type film_directorUncheckedUpdateWithoutDirectorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorUncheckedUpdateManyWithoutDirectorInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_actorCreateManyFilmInput = {
    actor_id: number
  }

  export type film_directorCreateManyFilmInput = {
    director_id: number
  }

  export type film_genreCreateManyFilmInput = {
    genre_id: number
  }

  export type reviewCreateManyFilmInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    customer_id: number
  }

  export type film_actorUpdateWithoutFilmInput = {
    actor?: actorUpdateOneRequiredWithoutFilm_actorNestedInput
  }

  export type film_actorUncheckedUpdateWithoutFilmInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_actorUncheckedUpdateManyWithoutFilmInput = {
    actor_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorUpdateWithoutFilmInput = {
    director?: directorUpdateOneRequiredWithoutFilm_directorNestedInput
  }

  export type film_directorUncheckedUpdateWithoutFilmInput = {
    director_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_directorUncheckedUpdateManyWithoutFilmInput = {
    director_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreUpdateWithoutFilmInput = {
    genre?: genreUpdateOneRequiredWithoutFilm_genreNestedInput
  }

  export type film_genreUncheckedUpdateWithoutFilmInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreUncheckedUpdateManyWithoutFilmInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutFilmInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutFilmInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUncheckedUpdateManyWithoutFilmInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreCreateManyGenreInput = {
    film_id: number
  }

  export type film_genreUpdateWithoutGenreInput = {
    film?: filmUpdateOneRequiredWithoutFilm_genreNestedInput
  }

  export type film_genreUncheckedUpdateWithoutGenreInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genreUncheckedUpdateManyWithoutGenreInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type filmCreateManyStudioInput = {
    film_id?: number
    title?: string | null
    release_year?: number | null
    duration?: number | null
    age_restriction?: $Enums.restriction | null
    isAvailable?: boolean
  }

  export type filmUpdateWithoutStudioInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUpdateManyWithoutFilmNestedInput
    reviews?: reviewUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateWithoutStudioInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    film_actor?: film_actorUncheckedUpdateManyWithoutFilmNestedInput
    film_director?: film_directorUncheckedUpdateManyWithoutFilmNestedInput
    film_genre?: film_genreUncheckedUpdateManyWithoutFilmNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutFilmNestedInput
  }

  export type filmUncheckedUpdateManyWithoutStudioInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    age_restriction?: NullableEnumrestrictionFieldUpdateOperationsInput | $Enums.restriction | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type paymentCreateManySubscriptionInput = {
    payment_id?: number
    amount?: number | null
    payment_type?: $Enums.payment_type | null
    payment_date?: Date | string | null
    status?: boolean | null
    customer_id?: number | null
  }

  export type paymentUpdateWithoutSubscriptionInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer?: customerUpdateOneWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateWithoutSubscriptionInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentUncheckedUpdateManyWithoutSubscriptionInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    payment_type?: NullableEnumpayment_typeFieldUpdateOperationsInput | $Enums.payment_type | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
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