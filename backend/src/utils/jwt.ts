import * as dotenv from 'dotenv';
import * as jwbt from 'jsonwebtoken';

dotenv.config();

const TOKEN_EXPIRATION_PERIOD = Number(process.env.TOKEN_EXPIRATION_PERIOD) || 3600; // expiration period in secods
const PRIVATE_KEY = process.env.PRIVATE_KEY || "my private key so don't look";

export function generateAccessToken(data: any) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD });
}

export function generateRefreshToken(data: any) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD * 24 });
}

export function generateTokens(data: any) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function verifyToken(token: string) {
  return jwbt.verify(token, PRIVATE_KEY);
}
