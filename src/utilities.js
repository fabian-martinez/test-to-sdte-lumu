function CompareTables(table1, table2) {
    if (table1.length !== table2.length) {
        return false;
    }
  
    for (let i = 0; i < table1.length; i++) {
        for (let j = 0; j < table1[i].length; j++) {
            if (table1[i][j] !== table2[i][j]) {
                return false; 
            }
        }
    }
  
    return true;
}

module.exports = {CompareTables}