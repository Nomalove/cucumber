export default {
    parallel: 2,
    format: ['html:cucumber-report.html'],
    require: ['./features/step-definitions/*.{js,ts}'], // Update with the correct path
    requireModule: ['ts-node/register']
  };
  