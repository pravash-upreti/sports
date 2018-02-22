import RefreshToken from '../models/refreshToken';

/**
 * Add refresh token in database and update if that user already has one in database.
 *
 * @export
 * @param {string} token
 * @param {number} userId
 * @returns {RefreshToken}
 */
export function addRefreshToken(token: string, userId: number) {
  return new RefreshToken({ user_id: userId }).fetch().then((refreshToken: RefreshToken) => {
    let shouldPatch = false;

    if (refreshToken) {
      shouldPatch = true; // If token already exists do an update not an insert.
    }

    return new RefreshToken()
      .where({ user_id: userId })
      .save(
        {
          token,
          user_id: userId
        },
        {
          patch: shouldPatch
        }
      )
      .then((newRefreshToken: RefreshToken) => newRefreshToken.refresh());
  });
}

/**
 * Remove refresh token from database.
 *
 * @export
 * @param {number} userId
 * @returns {RefreshToken}
 */
export function removeRefreshToken(token: string) {
  return new RefreshToken()
    .where({ token })
    .fetch()
    .then(refreshToken => {
      if (!refreshToken) {
        return refreshToken;
      }

      return refreshToken.destroy();
    });
}

/**
 * Fetch refresh token by token string.
 *
 * @export
 * @param {number} userId
 * @returns {RefreshToken}
 */
export function getRefreshTokenByValue(token: string) {
  return new RefreshToken({ token }).fetch();
}
