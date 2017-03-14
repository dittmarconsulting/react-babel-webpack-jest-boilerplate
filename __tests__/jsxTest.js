import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

import App from '../app/components/App'

test('App should render properly', () => {

  const component = renderer.create(
    <App/>
  )

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  //
  // // manually trigger the callback
  // tree.props.onMouseEnter()
  // // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave()
  //
  // // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
});
