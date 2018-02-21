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
  return new RefreshToken({ user_id: userId }).fetch().then((refsToken: RefreshToken) => {
    let doPatch = false;

    if (refsToken) {
      doPatch = true; // If token already exists do an update not an insert.
    }

    return new RefreshToken()
      .where({ user_id: userId })
      .save(
        {
          token,
          user_id: userId
        },
        {
          patch: doPatch
        }
      )
      .then((rfrsToken: RefreshToken) => rfrsToken.refresh());
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
    .then(rfsToken => {
      if (!rfsToken) {
        return rfsToken;
      }

      return rfsToken.destroy();
    });
}

/**
 * Fetch refresh token by userId.
 *
 * @export
 * @param {number} userId
 * @returns {RefreshToken}
 */
export function getRefreshTokenByUserId(userId: number) {
  return new RefreshToken({ user_id: userId }).fetch();
}
