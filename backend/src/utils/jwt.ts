import * as dotenv from 'dotenv';
import * as jwbt from 'jsonwebtoken';

import EncryptionData from '../domain/EncryptionData';

dotenv.config();

const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
const TOKEN_EXPIRATION_PERIOD = Number(process.env.TOKEN_EXPIRATION_PERIOD) || 3600; // expiration period in seconds

/**
 * Generate access token from given data
 *
 * @export
 * @param {EncryptionData} data
 * @returns {string}
 */
export function generateAccessToken(data: EncryptionData) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD });
}

/**
 * Generate refresh token from given data
 *
 * @export
 * @param {EncryptionData} data
 * @returns {string}
 */
export function generateRefreshToken(data: EncryptionData) {
  return jwbt.sign({ encryptedData: data }, PRIVATE_KEY, { expiresIn: TOKEN_EXPIRATION_PERIOD * 24 });
}

/**
 * Generate access and refresh tokens from given data to send to user
 *
 * @export
 * @param {EncryptionData} data
 * @returns {object}
 */
export function generateTokens(data: EncryptionData) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

/**
 * Verify token of the user
 *
 * @export
 * @param {string} token
 * @returns {object}
 * @throws {error}
 */
export function verifyToken(token: string) {
  return jwbt.verify(token, PRIVATE_KEY);
}
