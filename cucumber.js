module.exports = {
  default: {
    require: [
      'features/step-definitions/*.js',
      'hooks/hooks.js'
    ],
    paths: ['features/**/*.feature'],

    format: [
      'progress',
      'summary',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir: 'allure-results'
    },

    dryRun: false,
    parallel: 1,
    retry: 1
  }
};