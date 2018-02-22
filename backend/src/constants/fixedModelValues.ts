export const USER_ROLES = {
  ADMIN: {
    id: 1,
    desc: 'Admin'
  },
  USER: {
    id: 2,
    desc: 'User'
  }
};

export const USERS = {
  ADMIN: {
    id: 1,
    email: 'test@test.com',
    password: 'sports@!@#',
    roleId: 1,
    isActive: true
  }
};

export const ROUNDS = {
  FINAL: {
    id: 1,
    name: 'Finale',
    desc: 'Grand Finale'
  },
  SEMI_FINAL: {
    id: 2,
    name: 'Semi Final',
    desc: 'Semi Final'
  },
  QUARTER_FINAL: {
    id: 3,
    name: 'Quarter Final',
    desc: 'Quarter Final'
  },
  PRE_QUARTER_FINAL: {
    id: 4,
    name: 'Pre-Quarter Final',
    desc: 'Pre-Quarter Final (Round of 16)'
  },
  ROUND_OF_32: {
    id: 5,
    name: 'Round of 32',
    desc: 'Round of 32'
  },
  PLAY_OFFS: {
    id: 6,
    name: 'Play Off(s)',
    desc: 'Play Off(s)'
  }
};

export const CHESS_WINNING_METHODS = {
  CHECKMATE: {
    id: 1,
    desc: 'Checkmate'
  },
  TIME: {
    id: 2,
    desc: 'Time'
  }
};

export const FIXTURE_STATUSES = {
  PLAYED: {
    id: 1,
    desc: 'Played'
  },
  CANCELLED: {
    id: 2,
    desc: 'Cancelled'
  },
  TBD: {
    id: 3,
    desc: 'TBD'
  },
  FORFEITED: {
    id: 4,
    desc: 'Forfeited'
  }
};
