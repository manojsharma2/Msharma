import React from 'react'
import { render } from '@testing-library/react'
import StableMuiClassnamesWrapper from '../../../testUtils/stableMuiClassnamesWrapper'
import { shallow } from '../../../setupTests'
import { MemoryRouter } from 'react-router-dom'
import CardList from '../card_list_view'

describe('Test CarListView Component', () => {
  it('Renders correctly  CarListView component', () => {
    const wrapper = shallow(
      <div key={'agent_response_test_id_2'}>
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      </div>,
    )
    const component = render(StableMuiClassnamesWrapper(wrapper))
    expect(component).toMatchSnapshot()
  })
})
