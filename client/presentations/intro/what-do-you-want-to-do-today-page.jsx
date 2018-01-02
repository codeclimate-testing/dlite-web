'use strict';

import React              from 'react';

import Page               from '../../containers/page.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import RadioSelector      from '../radio-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        <h4>What would you like to do today?</h4>
        <p>
          Pick one option for now. If you need to do more,
          you can do so at the end.
        </p>
        <form onSubmit={ props.onSubmit }>
          <div className='row inner-buttom'>
            <RadioCollection
              {...props}
              name='cardAction'
            >
              <RadioSelector
                value='new'
                text='Get a new card'
              />
              <RadioSelector
                value='renew'
                text='Renew a card'
              />
            </RadioCollection>
            <div className='unit spacer' />
          </div>
          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;
