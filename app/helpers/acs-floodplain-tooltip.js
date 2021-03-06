import { helper } from '@ember/component/helper';
import { tooltipText } from '../tooltips/tooltip-text';

export function buildTooltip(data) {
  const {
    cd_short_title,
  } = data[0];

  const acsFloodplain = tooltipText.acs.acsFloodplain(cd_short_title);

  return acsFloodplain;
}

export default helper(buildTooltip);
