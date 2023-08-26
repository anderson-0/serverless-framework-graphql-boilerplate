export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateItemInput = {
  content: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<Item>;
  sendBooleanValues?: Maybe<Scalars['Boolean']>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationSendBooleanValuesArgs = {
  input: SendBooleanValuesInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};

export type SendBooleanValuesInput = {
  NutritionFacts?: InputMaybe<Scalars['Boolean']>;
  SportsFacts?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateItemInput = {
  content: Scalars['String'];
  id: Scalars['ID'];
};
