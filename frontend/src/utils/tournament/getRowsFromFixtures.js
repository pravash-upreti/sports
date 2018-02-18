const getRowsFromFixtures = (fixtures, pairPerRow) => {
  const numRows = Math.ceil(fixtures.length / pairPerRow);
  const rowArr = [];
  for (let i = 0; i < numRows; i++) {
    rowArr[i] = fixtures.slice(i * pairPerRow, (i + 1) * pairPerRow);
  }
  return rowArr;
}

export default getRowsFromFixtures;