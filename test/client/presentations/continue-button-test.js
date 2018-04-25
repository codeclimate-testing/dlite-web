'use strict';

import assert                       from 'assert';
import React                        from 'react';
import configure                    from '../support/configure-enzyme';
import { render }                   from 'enzyme';
import sinon                        from 'sinon';
import store                        from '../support/page-store';
import wrapperGenerator             from '../support/wrapper';
import { ContinueLanguageButton }   from '../../../client/presentations/continue-button.jsx';

describe('Continue Button', function() {
  let Wrapper = wrapperGenerator(store);
  let props, component;

  describe('#Continue Language Button', function() {
    beforeEach(function() {
      props = {
        language: ''
      }
      component='';
    });

    it('returns "Next" when language is "en"', function() {
      props.language = 'en';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('Next'));
    });

    it('returns "Siguiente" when language is "es"', function() {
      props.language = 'es';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('Siguiente'));
    });

    it('returns "下一頁" when language is "zh"', function() {
      props.language = 'zh';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('下一頁'));
    });

    it('returns "다음" when language is "ko"', function() {
      props.language = 'ko';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('다음'));
    });

    it('returns "បន្ទាប់" when language is "km"', function() {
      props.language = 'km';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('បន្ទាប់'));
    });

    it('returns "ถัดไป" when language is "th"', function() {
      props.language = 'th';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('ถัดไป'));
    });

    it('returns "Kế Tiếp" when language is "vi"', function() {
      props.language = 'vi';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('Kế Tiếp'));
    });

    it('returns "Kasunod" when language is "tl"', function() {
      props.language = 'tl';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('Kasunod'));
    });

    it('returns "次へ" when language is "ja"', function() {
      props.language = 'ja';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('次へ'));
    });

    it('returns "आगे" when language is "hi"', function() {
      props.language = 'hi';
      component = render(
        <Wrapper>
          <ContinueLanguageButton {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('आगे'));
    });
  });
});
