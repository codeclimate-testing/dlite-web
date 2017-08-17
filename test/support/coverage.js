const istanbul = require('istanbul'),
  fs = require('fs'),
  path = require('path'),
  collector = new istanbul.Collector()
reporter = new istanbul.Reporter();

const workingDir = `${__dirname}/../../coverage`;

console.log('\n\n');
console.log('=============================== Combined Coverage summary ===============================');

['unit', 'bdd'].forEach(function (item) {
  var file = path.join(workingDir, item, 'coverage.json');
  collector.add(JSON.parse(fs.readFileSync(file, 'utf8')));
});

reporter.add('text');
reporter.addAll(['lcov', 'clover']);
reporter.write(collector, true, function () {
  console.log('All reports generated!');
});