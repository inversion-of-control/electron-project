/**
 * ============
 * ts-project COMMANDS
 * ============
**/

module.exports = {
  assemble: require('./cmd/assemble'),
  clean:    require('./cmd/clean'),
  compile:  require('./cmd/compile'),
  package:  require('./cmd/package'),
  test:     require('./cmd/test')
};