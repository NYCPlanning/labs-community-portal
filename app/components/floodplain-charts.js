import Component from '@ember/component'; // eslint-disable-line
import computed from 'ember-computed-decorators';

export default Component.extend({
  mode: '100-yr',

  @computed('mode')
  buildingComparisonChartColumn(mode) {
    return (mode === '100-yr') ? 'fp_100_bldg' : 'fp_500_bldg';
  },

  @computed('mode')
  resunitsComparisonChartColumn(mode) {
    return (mode === '100-yr') ? 'fp_100_resunits' : 'fp_500_resunits';
  },

  actions: {
    setMode(mode) {
      this.set('mode', mode);
    },

    sum(accum, curr) {
      return accum + curr;
    },
  },
});
