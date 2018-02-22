import * as dotenv from 'dotenv';
import * as jwbt from 'jsonwebtoken';

import EncryptionData from '../domain/EncryptionData';

dotenv.config();

const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
const TOKEN_EXPIRATION_PERIOD = Number(process.env.TOKEN_EXPIRATION_PERIOD) || 3600; // expiration period in seconds

export function generateAccessToken(data: EncryptionData) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD });
}

export function generateRefreshToken(data: EncryptionData) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD * 24 });
}

export function generateTokens(data: EncryptionData) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function verifyToken(token: string) {
  return jwbt.verify(token, PRIVATE_KEY);
}
