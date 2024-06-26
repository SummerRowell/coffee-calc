import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const RatioSelector = ({ brewType, setRatio }) => {
  return (
    <ToggleButtonGroup type='radio' name='ratioOptions' className='mb-2' defaultValue={brewType.standard}>
      <ToggleButton id='tbg-radio-1' value={brewType.mild} onChange={(e) => setRatio(e.target.value)}>
        Mild 1:{brewType.mild}
      </ToggleButton>
      <ToggleButton id='tbg-radio-2' value={brewType.standard} onChange={(e) => setRatio(e.target.value)}>
        Standard 1:{brewType.standard}
      </ToggleButton>
      <ToggleButton id='tbg-radio-3' value={brewType.strong} onChange={(e) => setRatio(e.target.value)}>
        Strong 1:{brewType.strong}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RatioSelector;
