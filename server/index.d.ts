// @ts-check
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Express } from "express";
import { Prisma } from "./prisma/generated/prisma-client";

export interface IRequestContext extends ExpressContext {
  prisma: Prisma;
  app: Express;
  user: IJWTPayload;
}

export interface IJWTPayload {
  id: ID;
  email: string;
  name: string;
}

export interface IJWTUtils {
  sign(opts: IJWTPayload): string;
  verify(token: string): IJWTPayload;
}
