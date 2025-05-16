/* eslint-disable */
//@ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A scalar type for a HashMap. */
  HashMap: { input: any; output: any; }
  /** A positive Integer */
  PositiveInt: { input: any; output: any; }
  /** A float between 0 and 1 */
  Rate: { input: any; output: any; }
  /** An Universal Unique Identifier */
  UUID: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  meta: Maybe<Scalars['HashMap']['output']>;
  metaProperty: Maybe<Scalars['String']['output']>;
  middleName: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  postalCode: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  street: Maybe<Scalars['String']['output']>;
  street2: Maybe<Scalars['String']['output']>;
  streetNumber: Maybe<Scalars['String']['output']>;
  type: Maybe<AddressType>;
};


export type AddressMetaPropertyArgs = {
  key: Scalars['String']['input'];
};

export type AddressInput = {
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  middleName: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  postalCode: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  street: InputMaybe<Scalars['String']['input']>;
  street2: InputMaybe<Scalars['String']['input']>;
  streetNumber: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<AddressType>;
};

/** The Address type. */
export enum AddressType {
  Billing = 'billing',
  Delivery = 'delivery',
  Other = 'other'
}

/** A cart. */
export type Cart = {
  __typename?: 'Cart';
  /** The promotions applied to the cart. */
  appliedPromotions: Maybe<Array<PromotionSlim>>;
  /** The context of the cart. */
  context: Scalars['HashMap']['output'];
  /** The creation date of the cart. */
  createdAt: Scalars['DateTime']['output'];
  /** The customer of the cart. */
  customer: Maybe<Customer>;
  /** The expiration date of the cart. */
  expiresAt: Scalars['DateTime']['output'];
  /** The unique id of the cart. */
  id: Scalars['UUID']['output'];
  /** If the cart is expired. */
  isExpired: Scalars['Boolean']['output'];
  /** If the cart is stale. */
  isStale: Scalars['Boolean']['output'];
  /** The items in the cart. */
  items: Array<CartItem>;
  meta: Maybe<Scalars['HashMap']['output']>;
  metaProperty: Maybe<Scalars['String']['output']>;
  /** The order id of the cart when it reaches the state. */
  orderId: Maybe<Scalars['String']['output']>;
  /** The stale date of the cart, after which it is abandoned. */
  staleAt: Maybe<Scalars['DateTime']['output']>;
  /** The state of the cart. */
  state: CartState;
  /** The total of the cart. */
  total: Price;
  /** The update date of the cart. */
  updatedAt: Scalars['DateTime']['output'];
};


/** A cart. */
export type CartMetaPropertyArgs = {
  key: Scalars['String']['input'];
};

export type CartInput = {
  /** The context to use for the cart. */
  context: InputMaybe<ContextInput>;
  /** The customer to use for the cart. */
  customer: InputMaybe<CustomerInput>;
  /** The external items of the cart. */
  externalItems: InputMaybe<Array<InputMaybe<CartItemInputType>>>;
  id: InputMaybe<Scalars['UUID']['input']>;
  /** The items of the cart. */
  items: InputMaybe<Array<InputMaybe<CartSkuItemInput>>>;
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
};

/** A cart item. */
export type CartItem = {
  __typename?: 'CartItem';
  /** The context of the item. */
  context: Maybe<Scalars['HashMap']['output']>;
  /** The images of the item. */
  images: Maybe<Array<ImageVariant>>;
  meta: Maybe<Scalars['HashMap']['output']>;
  metaProperty: Maybe<Scalars['String']['output']>;
  /** The name of the item. */
  name: Scalars['String']['output'];
  /** The price of the cart item. Quantity * Unit price */
  price: Price;
  /** The quantity of the item. */
  quantity: Scalars['PositiveInt']['output'];
  /** The variant of the item. */
  variant: ProductVariant;
};


/** A cart item. */
export type CartItemMetaPropertyArgs = {
  key: Scalars['String']['input'];
};

export type CartItemInputType = {
  images: InputMaybe<Array<InputMaybe<ImageVariantInput>>>;
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  name: Scalars['String']['input'];
  quantity: InputMaybe<Scalars['PositiveInt']['input']>;
  sku: Scalars['String']['input'];
  /** The variant to use for the cart item. */
  variant: ProductVariantInput;
};

export type CartItemPricingChangeType = {
  price: InputMaybe<PriceInput>;
  quantity: InputMaybe<Scalars['PositiveInt']['input']>;
  sku: Scalars['String']['input'];
};

export type CartSkuItemInput = {
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  quantity: InputMaybe<Scalars['PositiveInt']['input']>;
  sku: Scalars['String']['input'];
  /** Override the Tax Rate for the calculation. It takes precedence over any other Tax Rate. */
  taxRate: InputMaybe<Scalars['Rate']['input']>;
};

/** The state of the cart. */
export enum CartState {
  /** The cart is abandoned. */
  Abandoned = 'abandoned',
  /** The cart is being edited. */
  Cart = 'cart',
  /** The cart is fulfill. It is read-only. */
  Ordered = 'ordered',
  /** The cart is placed. It is read-only. */
  Placed = 'placed'
}

export type ContextInput = {
  /** The language to use for hydrating the cart. */
  language: InputMaybe<Scalars['String']['input']>;
  /** The price context to adapt calculations. */
  price: InputMaybe<PriceContextInput>;
  /** The time during which the Cart will be stay in the state 'cart' before to become 'stale'. Once 'stale', within 5 minutes the Cart state will change to 'abandoned'. */
  staleTtl: InputMaybe<Scalars['Int']['input']>;
  /** The time during which the Shop API will keep the Cart. */
  ttl: InputMaybe<Scalars['Int']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  addresses: Maybe<Array<Maybe<Address>>>;
  birthDate: Maybe<Scalars['DateTime']['output']>;
  companyName: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  externalReference: Maybe<Scalars['String']['output']>;
  externalReferences: Maybe<Scalars['HashMap']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  identifier: Maybe<Scalars['String']['output']>;
  isGuest: Scalars['Boolean']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  meta: Maybe<Scalars['HashMap']['output']>;
  metaProperty: Maybe<Scalars['String']['output']>;
  middleName: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  taxNumber: Maybe<Scalars['String']['output']>;
  type: Maybe<CustomerType>;
};


export type CustomerExternalReferenceArgs = {
  key: Scalars['String']['input'];
};


export type CustomerMetaPropertyArgs = {
  key: Scalars['String']['input'];
};

export type CustomerInput = {
  addresses: InputMaybe<Array<InputMaybe<AddressInput>>>;
  birthDate: InputMaybe<Scalars['DateTime']['input']>;
  companyName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  externalReferences: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  firstName: InputMaybe<Scalars['String']['input']>;
  identifier: InputMaybe<Scalars['String']['input']>;
  isGuest: Scalars['Boolean']['input'];
  lastName: InputMaybe<Scalars['String']['input']>;
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  middleName: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  taxNumber: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<CustomerType>;
};

export enum CustomerType {
  Individual = 'individual',
  Organization = 'organization'
}

/** A discount applied. */
export type Discount = {
  __typename?: 'Discount';
  amount: Scalars['Float']['output'];
  percent: Scalars['Float']['output'];
};

export type DiscountInput = {
  amount: Scalars['Float']['input'];
};

export type Image = {
  __typename?: 'Image';
  altText: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['PositiveInt']['output']>;
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
  variants: Maybe<Array<ImageVariant>>;
  width: Maybe<Scalars['PositiveInt']['output']>;
};

export type ImageVariant = {
  __typename?: 'ImageVariant';
  altText: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['PositiveInt']['output']>;
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Maybe<Scalars['PositiveInt']['output']>;
};

export type ImageVariantInput = {
  height: Scalars['Float']['input'];
  key: Scalars['String']['input'];
  url: Scalars['String']['input'];
  width: Scalars['Float']['input'];
};

export type KeyValueInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Mechanism = {
  __typename?: 'Mechanism';
  type: Maybe<MechanismEnumType>;
  value: Maybe<Scalars['Float']['output']>;
};

/** The type of the promotion mechanism. */
export enum MechanismEnumType {
  /** Dynamic Fixed amount based on new set price. */
  DynamicFixed = 'DynamicFixed',
  /** Fixed amount. */
  Fixed = 'Fixed',
  /** Percentage. */
  Percentage = 'Percentage',
  /** Get X for the price of Y */
  XforY = 'XforY'
}

/** The root mutation type that allow you to mutate things. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Abandon the Cart, that will change its state. */
  abandon: Maybe<Cart>;
  /** Add the quantity to an item. */
  addCartItem: Maybe<Cart>;
  /** Add an item to the cart that is fully custom. */
  addExternalItem: Maybe<Cart>;
  /** Add an item to the cart from an SKU that exist in Crystallize. If the Item is not managed only the quantity will be updated. */
  addSkuItem: Maybe<Cart>;
  /** Change the quantity and/or the price of an iten and flag it "unmanaged". */
  changeCartItemPricing: Maybe<Cart>;
  /** Fulfill the Cart, that will change its state and assign the orderId. */
  fulfill: Maybe<Cart>;
  /** Hydrate items from the Catalog API and create/compute the cart based on the provided context. */
  hydrate: Maybe<Cart>;
  /** Place the Cart, that will change its state and make it read-only after its final re-hydration. */
  place: Maybe<Cart>;
  /** Remove the Cart. */
  remove: Maybe<Scalars['Boolean']['output']>;
  /** Remove or decrease the quantity of an item. */
  removeCartItem: Maybe<Cart>;
  /** Add or Update an Cart Item and flag it "unmanaged". */
  setCartItem: Maybe<Cart>;
  /** Set the customer of the cart. */
  setCustomer: Maybe<Cart>;
  /** Set meta on the Cart. */
  setMeta: Maybe<Cart>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationAbandonArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationAddCartItemArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['PositiveInt']['input']>;
  sku: InputMaybe<Scalars['String']['input']>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationAddExternalItemArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  input: CartItemInputType;
};


/** The root mutation type that allow you to mutate things. */
export type MutationAddSkuItemArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  input: CartSkuItemInput;
};


/** The root mutation type that allow you to mutate things. */
export type MutationChangeCartItemPricingArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  input: CartItemPricingChangeType;
};


/** The root mutation type that allow you to mutate things. */
export type MutationFulfillArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  orderId: Scalars['String']['input'];
};


/** The root mutation type that allow you to mutate things. */
export type MutationHydrateArgs = {
  input: CartInput;
};


/** The root mutation type that allow you to mutate things. */
export type MutationPlaceArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationRemoveArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationRemoveCartItemArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['PositiveInt']['input']>;
  sku: InputMaybe<Scalars['String']['input']>;
};


/** The root mutation type that allow you to mutate things. */
export type MutationSetCartItemArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  input: CartItemInputType;
};


/** The root mutation type that allow you to mutate things. */
export type MutationSetCustomerArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  input: CustomerInput;
};


/** The root mutation type that allow you to mutate things. */
export type MutationSetMetaArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
  merge?: InputMaybe<Scalars['Boolean']['input']>;
  meta: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
};

export enum OrderIntentFormat {
  Core = 'core',
  Legacy = 'legacy'
}

export type OrderIntentResult = {
  __typename?: 'OrderIntentResult';
  /** The cart. */
  cart: Maybe<Cart>;
  /** The order intent. */
  order: Maybe<Scalars['HashMap']['output']>;
};

/** A price. */
export type Price = {
  __typename?: 'Price';
  currency: Scalars['String']['output'];
  discounts: Maybe<Array<Discount>>;
  gross: Scalars['Float']['output'];
  net: Scalars['Float']['output'];
  taxAmount: Scalars['Float']['output'];
};

export type PriceContextInput = {
  /** The identifier of the variant to compare against. */
  compareAtVariantIdentifier: InputMaybe<Scalars['String']['input']>;
  /** The currency. This does not change anything and is merely here for reference. */
  currency: InputMaybe<Scalars['String']['input']>;
  /** An optional customerGroup. */
  customerGroup: InputMaybe<Scalars['String']['input']>;
  /** The number of decimals to use for the price. */
  decimals: InputMaybe<Scalars['Float']['input']>;
  /** Whether or not the discount is applied on the net price. It will change the way the prices are calculated. */
  discountOnNetPrices: InputMaybe<Scalars['Boolean']['input']>;
  /** A list of Price Variant identifier on which to fallback if the selectedVariantIdentifier as a null value. */
  fallbackVariantIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The markets to use for the price calculation. It will change the way the prices based on the enabled PriceLists. */
  markets: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Whether or not the prices have taxes included in Crystallize. It will change the way the prices are calculated. */
  pricesHaveTaxesIncludedInCrystallize: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier of the variant to use for the price calculation. */
  selectedVariantIdentifier: InputMaybe<Scalars['String']['input']>;
  /** Override the Tax Rate for the calculation. It takes precedence over the Tax Rate of the product. */
  taxRate: InputMaybe<Scalars['Rate']['input']>;
  /** An optional voucher code. */
  voucherCode: InputMaybe<Scalars['String']['input']>;
};

export type PriceInput = {
  discounts: InputMaybe<Array<InputMaybe<DiscountInput>>>;
  gross: Scalars['Float']['input'];
  net: Scalars['Float']['input'];
};

/** A product. */
export type Product = {
  __typename?: 'Product';
  /** The ID of the Product */
  id: Scalars['String']['output'];
  /** The name of the Product */
  name: Scalars['String']['output'];
  /** The path of the Product */
  path: Scalars['String']['output'];
  /** The shortcuts of the Product */
  shortcuts: Maybe<Array<Scalars['String']['output']>>;
  /** The topics of the Product */
  topics: Array<Scalars['String']['output']>;
  vatType: Maybe<VatType>;
};

export type ProductInput = {
  id: Scalars['String']['input'];
  path: Scalars['String']['input'];
  topics: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A product variant. */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  attribute: Maybe<Scalars['String']['output']>;
  /** The attributes of the variant */
  attributes: Maybe<Scalars['HashMap']['output']>;
  /** The compare at price (of the variant) if it exists. */
  compareAtPrice: Maybe<Price>;
  /** The images of the variant */
  images: Maybe<Array<Image>>;
  /** The name of the variant */
  name: Maybe<Scalars['String']['output']>;
  /** The unit price (of the variant) */
  price: Price;
  /** The product linked to the variant */
  product: Product;
  /** The SKU of the variant */
  sku: Maybe<Scalars['String']['output']>;
};


/** A product variant. */
export type ProductVariantAttributeArgs = {
  key: Scalars['String']['input'];
};

export type ProductVariantInput = {
  attributes: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the unit price. */
  price: PriceInput;
  product: ProductInput;
};

export type PromotionSlim = {
  __typename?: 'PromotionSlim';
  identifier: Scalars['String']['output'];
  mechanism: Maybe<PromotionSlimMechanism>;
  name: Maybe<Scalars['String']['output']>;
};

export type PromotionSlimMechanism = {
  __typename?: 'PromotionSlimMechanism';
  type: Maybe<MechanismEnumType>;
  value: Maybe<Scalars['Float']['output']>;
};

/** The root query type that does not mutate anything, ever. */
export type Query = {
  __typename?: 'Query';
  /** Get a cart by its id. */
  cart: Maybe<Cart>;
  /** Get a cart placed by its id and transform it into an order intent. */
  orderIntent: Maybe<OrderIntentResult>;
  /** Validate a voucher code. */
  validateVoucher: Maybe<VoucherValidationResult>;
};


/** The root query type that does not mutate anything, ever. */
export type QueryCartArgs = {
  id: InputMaybe<Scalars['UUID']['input']>;
};


/** The root query type that does not mutate anything, ever. */
export type QueryOrderIntentArgs = {
  format?: InputMaybe<OrderIntentFormat>;
  id: InputMaybe<Scalars['UUID']['input']>;
};


/** The root query type that does not mutate anything, ever. */
export type QueryValidateVoucherArgs = {
  voucher: Scalars['String']['input'];
};

/** The promotion(s) that matches the voucher. */
export type SlimPromotion = {
  __typename?: 'SlimPromotion';
  identifier: Maybe<Scalars['String']['output']>;
  mechanism: Maybe<Mechanism>;
  name: Maybe<Scalars['String']['output']>;
};

/** The VAT type. */
export type VatType = {
  __typename?: 'VatType';
  /** The VAT percent. */
  percent: Scalars['Float']['output'];
};

export type VoucherValidationResult = {
  __typename?: 'VoucherValidationResult';
  isValid: Maybe<Scalars['Boolean']['output']>;
  promotions: Maybe<Array<Maybe<SlimPromotion>>>;
};

export type CartFragment = { __typename?: 'Cart', id: any, items: Array<{ __typename?: 'CartItem', quantity: any, name: string, variant: { __typename?: 'ProductVariant', sku: string | null, product: { __typename?: 'Product', name: string }, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }, images: Array<{ __typename?: 'ImageVariant', url: string, height: any | null, width: any | null }> | null, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }>, total: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null }, appliedPromotions: Array<{ __typename?: 'PromotionSlim', identifier: string, name: string | null, mechanism: { __typename?: 'PromotionSlimMechanism', type: MechanismEnumType | null, value: number | null } | null }> | null };

export type FulfillCartMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  orderId: Scalars['String']['input'];
}>;


export type FulfillCartMutation = { __typename?: 'Mutation', fulfill: { __typename?: 'Cart', id: any } | null };

export type GetCartQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetCartQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', id: any, items: Array<{ __typename?: 'CartItem', quantity: any, name: string, variant: { __typename?: 'ProductVariant', sku: string | null, product: { __typename?: 'Product', name: string }, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }, images: Array<{ __typename?: 'ImageVariant', url: string, height: any | null, width: any | null }> | null, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }>, total: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null }, appliedPromotions: Array<{ __typename?: 'PromotionSlim', identifier: string, name: string | null, mechanism: { __typename?: 'PromotionSlimMechanism', type: MechanismEnumType | null, value: number | null } | null }> | null } | null };

export type HydrateCartMutationVariables = Exact<{
  input: CartInput;
}>;


export type HydrateCartMutation = { __typename?: 'Mutation', hydrate: { __typename?: 'Cart', id: any, items: Array<{ __typename?: 'CartItem', quantity: any, name: string, variant: { __typename?: 'ProductVariant', sku: string | null, product: { __typename?: 'Product', name: string }, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }, images: Array<{ __typename?: 'ImageVariant', url: string, height: any | null, width: any | null }> | null, price: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null } }>, total: { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null }, appliedPromotions: Array<{ __typename?: 'PromotionSlim', identifier: string, name: string | null, mechanism: { __typename?: 'PromotionSlimMechanism', type: MechanismEnumType | null, value: number | null } | null }> | null } | null };

export type OrderIntentQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type OrderIntentQuery = { __typename?: 'Query', orderIntent: { __typename?: 'OrderIntentResult', order: any | null } | null };

export type PlaceCartMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type PlaceCartMutation = { __typename?: 'Mutation', place: { __typename?: 'Cart', id: any } | null };

export type PriceFragment = { __typename?: 'Price', gross: number, net: number, taxAmount: number, currency: string, discounts: Array<{ __typename?: 'Discount', percent: number, amount: number }> | null };

export type SetCustomerMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  customer: CustomerInput;
}>;


export type SetCustomerMutation = { __typename?: 'Mutation', setCustomer: { __typename?: 'Cart', id: any } | null };

export const PriceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"price"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Price"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"}},{"kind":"Field","name":{"kind":"Name","value":"net"}},{"kind":"Field","name":{"kind":"Name","value":"taxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<PriceFragment, unknown>;
export const CartFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cart"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appliedPromotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mechanism"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"price"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Price"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"}},{"kind":"Field","name":{"kind":"Name","value":"net"}},{"kind":"Field","name":{"kind":"Name","value":"taxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<CartFragment, unknown>;
export const FulfillCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FulfillCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FulfillCartMutation, FulfillCartMutationVariables>;
export const GetCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"cart"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"price"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Price"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"}},{"kind":"Field","name":{"kind":"Name","value":"net"}},{"kind":"Field","name":{"kind":"Name","value":"taxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cart"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appliedPromotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mechanism"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCartQuery, GetCartQueryVariables>;
export const HydrateCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HydrateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hydrate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"cart"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"price"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Price"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"}},{"kind":"Field","name":{"kind":"Name","value":"net"}},{"kind":"Field","name":{"kind":"Name","value":"taxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cart"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appliedPromotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mechanism"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<HydrateCartMutation, HydrateCartMutationVariables>;
export const OrderIntentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderIntent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderIntent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<OrderIntentQuery, OrderIntentQueryVariables>;
export const PlaceCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PlaceCartMutation, PlaceCartMutationVariables>;
export const SetCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SetCustomerMutation, SetCustomerMutationVariables>;