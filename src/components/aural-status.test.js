import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', function() {
  it('Renders without crashing', function() {
    shallow(<AuralStatus />);
  });

  it('Renders a status when passed one', function() {
    const wrapper = shallow(<AuralStatus auralStatus={'A Status!'} />);
    expect(wrapper.text()).toEqual('A Status!');
  });
});
