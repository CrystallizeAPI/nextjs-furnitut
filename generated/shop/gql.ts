/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment cart on Cart {\n  id\n  items {\n    quantity\n    variant {\n      sku\n      product {\n        name\n      }\n      price {\n        ...price\n      }\n    }\n    name\n    images {\n      url\n      height\n      width\n    }\n    price {\n      ...price\n    }\n  }\n  total {\n    ...price\n  }\n  appliedPromotions {\n    identifier\n    name\n    mechanism {\n      type\n      value\n    }\n  }\n}": typeof types.CartFragmentDoc,
    "mutation FulfillCart($id: UUID!, $orderId: String!) {\n  fulfill(id: $id, orderId: $orderId) {\n    id\n  }\n}": typeof types.FulfillCartDocument,
    "query GetCart($id: UUID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}": typeof types.GetCartDocument,
    "mutation HydrateCart($input: CartInput!) {\n  hydrate(input: $input) {\n    ...cart\n  }\n}": typeof types.HydrateCartDocument,
    "query OrderIntent($id: UUID!) {\n  orderIntent(id: $id) {\n    order\n  }\n}": typeof types.OrderIntentDocument,
    "mutation PlaceCart($id: UUID!) {\n  place(id: $id) {\n    id\n  }\n}": typeof types.PlaceCartDocument,
    "fragment price on Price {\n  gross\n  net\n  taxAmount\n  currency\n  discounts {\n    percent\n    amount\n  }\n}": typeof types.PriceFragmentDoc,
    "mutation SetCustomer($id: UUID!, $customer: CustomerInput!) {\n  setCustomer(id: $id, input: $customer) {\n    id\n  }\n}": typeof types.SetCustomerDocument,
};
const documents: Documents = {
    "fragment cart on Cart {\n  id\n  items {\n    quantity\n    variant {\n      sku\n      product {\n        name\n      }\n      price {\n        ...price\n      }\n    }\n    name\n    images {\n      url\n      height\n      width\n    }\n    price {\n      ...price\n    }\n  }\n  total {\n    ...price\n  }\n  appliedPromotions {\n    identifier\n    name\n    mechanism {\n      type\n      value\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation FulfillCart($id: UUID!, $orderId: String!) {\n  fulfill(id: $id, orderId: $orderId) {\n    id\n  }\n}": types.FulfillCartDocument,
    "query GetCart($id: UUID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}": types.GetCartDocument,
    "mutation HydrateCart($input: CartInput!) {\n  hydrate(input: $input) {\n    ...cart\n  }\n}": types.HydrateCartDocument,
    "query OrderIntent($id: UUID!) {\n  orderIntent(id: $id) {\n    order\n  }\n}": types.OrderIntentDocument,
    "mutation PlaceCart($id: UUID!) {\n  place(id: $id) {\n    id\n  }\n}": types.PlaceCartDocument,
    "fragment price on Price {\n  gross\n  net\n  taxAmount\n  currency\n  discounts {\n    percent\n    amount\n  }\n}": types.PriceFragmentDoc,
    "mutation SetCustomer($id: UUID!, $customer: CustomerInput!) {\n  setCustomer(id: $id, input: $customer) {\n    id\n  }\n}": types.SetCustomerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment cart on Cart {\n  id\n  items {\n    quantity\n    variant {\n      sku\n      product {\n        name\n      }\n      price {\n        ...price\n      }\n    }\n    name\n    images {\n      url\n      height\n      width\n    }\n    price {\n      ...price\n    }\n  }\n  total {\n    ...price\n  }\n  appliedPromotions {\n    identifier\n    name\n    mechanism {\n      type\n      value\n    }\n  }\n}"): (typeof documents)["fragment cart on Cart {\n  id\n  items {\n    quantity\n    variant {\n      sku\n      product {\n        name\n      }\n      price {\n        ...price\n      }\n    }\n    name\n    images {\n      url\n      height\n      width\n    }\n    price {\n      ...price\n    }\n  }\n  total {\n    ...price\n  }\n  appliedPromotions {\n    identifier\n    name\n    mechanism {\n      type\n      value\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation FulfillCart($id: UUID!, $orderId: String!) {\n  fulfill(id: $id, orderId: $orderId) {\n    id\n  }\n}"): (typeof documents)["mutation FulfillCart($id: UUID!, $orderId: String!) {\n  fulfill(id: $id, orderId: $orderId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCart($id: UUID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}"): (typeof documents)["query GetCart($id: UUID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation HydrateCart($input: CartInput!) {\n  hydrate(input: $input) {\n    ...cart\n  }\n}"): (typeof documents)["mutation HydrateCart($input: CartInput!) {\n  hydrate(input: $input) {\n    ...cart\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderIntent($id: UUID!) {\n  orderIntent(id: $id) {\n    order\n  }\n}"): (typeof documents)["query OrderIntent($id: UUID!) {\n  orderIntent(id: $id) {\n    order\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PlaceCart($id: UUID!) {\n  place(id: $id) {\n    id\n  }\n}"): (typeof documents)["mutation PlaceCart($id: UUID!) {\n  place(id: $id) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment price on Price {\n  gross\n  net\n  taxAmount\n  currency\n  discounts {\n    percent\n    amount\n  }\n}"): (typeof documents)["fragment price on Price {\n  gross\n  net\n  taxAmount\n  currency\n  discounts {\n    percent\n    amount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SetCustomer($id: UUID!, $customer: CustomerInput!) {\n  setCustomer(id: $id, input: $customer) {\n    id\n  }\n}"): (typeof documents)["mutation SetCustomer($id: UUID!, $customer: CustomerInput!) {\n  setCustomer(id: $id, input: $customer) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;