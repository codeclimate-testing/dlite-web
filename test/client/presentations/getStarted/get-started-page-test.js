'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import GetStartedPage           from '../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../support/page-store';
import translations             from '../../../../client/i18n';

describe('GetStartedPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        IDDL: [],
        cardAction: '',
        youthIDInstead: ''
      };
      let cardChanges = {
        correctOrUpdate: '',
        sections: []
      };
      let licenseType = {
        type: [],
        endorsement: [],
        needEndorsement: ''
      };
      let realID = {
        realIdDesignation: '',
        getRealID: ''
      };
      let reducedFee = {
        ID: '',
        form: ''
      };
      let seniorID = '';


      let onChange = spy();

      props = {
        cardType,
        cardChanges,
        licenseType,
        realID,
        reducedFee,
        seniorID,
        onChange
      };
    });

    describe('applying for a DL', function() {
      beforeEach(function() {
        props.cardType.IDDL = ['DL'];
      });

      it('user getting new DL will see they are applying for driver license on get started page', function() {
        props.cardType.cardAction = 'new';

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.applyingLicense), true);
      });

      it('user renewing DL will see they are renewing driver license on get started page', function() {
        props.cardType.cardAction = 'renew';

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.renewingLicense), true);
      });

      it('user updating DL will see they are updating driver license on get started page', function() {
        props.cardType.cardAction = 'change';
        props.cardChanges.correctOrUpdate = 'update'

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingLicense), true);
        assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.update.license), true);
      });

      it('user correcting DL will see they are correcting driver license on get started page', function() {
        props.cardType.cardAction = 'change';
        props.cardChanges.correctOrUpdate = 'correct'

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingLicense), true);
        assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.correct.license), true);
      });

      it('user replacing DL will see they are replacing driver license on get started page', function() {
        props.cardType.cardAction = 'replace';

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingLicense), true);
        assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.replace.license), true);
      });
    });

    describe('applying for ID', function() {
      beforeEach(function() {
        props.cardType.IDDL = ['ID'];
      });

      describe('new ID', function() {
        beforeEach(function() {
          props.cardType.cardAction = 'new';
        });

        it('user getting new ID will see they are applying for ID on get started page', function() {

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.applyingID), true);
        });

        it('user getting new senior ID will see they are applying for new senior ID on get started page', function() {
          props.seniorID = 'No';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.applyingSeniorID), true);
        });

        it('user getting no fee ID will see they are getting no fee ID  on get started page', function() {
          props.seniorID = 'Yes';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes('You are applying for a no-fee ID card'), true);
          assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
        });
      });

      describe('renew ID', function() {
        beforeEach(function() {
          props.cardType.cardAction = 'renew';
        });

        it('user getting new ID will see they are applying for ID on get started page', function() {

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.renewingID), true);
        });

        it('user renewing reduced fee ID will see they are renewing a reduced fee ID on get started page', function() {
          props.reducedFee.ID = 'Yes'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID), true);
        });

        it('user getting new senior ID will see they are applying for new senior ID on get started page', function() {
          props.seniorID = 'No';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.renewingSeniorID), true);
        });

        it('user getting no fee ID will see they are getting no fee ID  on get started page', function() {
          props.seniorID = 'Yes';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes('You are renewing a no-fee ID card'), true);
          assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
        });
      });

      describe('change ID', function() {
        beforeEach(function() {
          props.cardType.cardAction = 'change';
        });

        describe('correct ID', function() {
          beforeEach(function() {
            props.cardChanges.correctOrUpdate = 'correct';
          });

          it('user correcting ID will see they are correcting ID on get started page', function() {

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingID), true);
          });

        it('user correcting reduced fee ID  will see they are correcting reduced feeID on get started page', function() {
          props.reducedFee.ID = 'Yes'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID), true);
        });

          it('user correcting senior ID will see they are correcting senior ID on get started page', function() {
            props.seniorID = 'No';

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID), true);
          });

          it('user correcting no-fee ID will see they are correcting no-fee ID on get started page', function() {
            props.seniorID = 'Yes';

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes('You are correcting a no-fee ID card'), true);
            assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
          });
        });

        describe('update ID', function() {
          beforeEach(function() {
            props.cardChanges.correctOrUpdate = 'update';
          });

          it('user updating ID will see they are updating ID on get started page', function() {

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingID), true);
          });

        it('user updating reduced fee ID  will see they are updating reduced feeID on get started page', function() {
          props.reducedFee.ID = 'Yes'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID), true);
        });

          it('user updating senior ID will see they are updating senior ID on get started page', function() {
            props.seniorID = 'No';

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID), true);
          });

          it('user updating no-fee ID will see they are updating no-fee ID on get started page', function() {
            props.seniorID = 'Yes';

            let component = render(
              <Wrapper>
              <GetStartedPage {...props} />
              </Wrapper>
            );
            assert.equal(component.text().includes('You are updating a no-fee ID card'), true);
            assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
          });
        });
      });

      describe('replace ID', function() {
        beforeEach(function() {
          props.cardType.cardAction = 'replace';
        });

        it('user replacing ID will see they are replacing ID on get started page', function() {

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingID), true);
        });

        it('user replacing reduced fee ID  will see they are replacing reduced feeID on get started page', function() {
          props.reducedFee.ID = 'Yes'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID), true);
        });

        it('user replacing senior ID will see they are replacing senior ID on get started page', function() {
          props.seniorID = 'No';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingSeniorID), true);
        });

        it('user replacing no-fee ID will see they are replacing no-fee ID on get started page', function() {
          props.seniorID = 'Yes';

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes('You are replacing a no-fee ID card'), true);
          assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
        });
      });
    });

    describe('license type', function() {
      beforeEach(function() {
        props.cardType.IDDL = ['DL'];
      });

      describe('type', function() {
        it('shows class C when user selects car', function() {
          props.licenseType.type = ['car']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.C), true);
        });

        it('shows class M when user selects cycle', function() {
          props.licenseType.type = ['cycle']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.M), true);
        });

        it('shows class A when user selects long', function() {
          props.licenseType.type = ['long']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.A), true);
        });

        it('shows class B when user selects trailer', function() {
          props.licenseType.type = ['trailer']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.B), true);
        });
      });

      describe('endorsements', function() {
        it('shows firefighter endorsement when user selects firefighter', function() {
          props.licenseType.endorsement = ['firefighter']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.firefighterEndorsement), true);
        });
      });
    });

    describe('realID', function() {
      beforeEach(function() {
        props.realID.getRealID = 'Yes';
      });

      describe('ID', function() {
        it('shows that ID card will be real id compliant', function() {
          props.realID.realIdDesignation = 'ID'
          props.cardType.IDDL = ['ID', 'DL']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantID), true);
        });
      });

      describe('DL', function() {
        it('shows that DL will be real id compliant', function() {
          props.realID.realIdDesignation = ''
          props.cardType.IDDL = ['DL']

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense), true);
        });
      });
    });

    describe('new application language', function() {
      describe('DL', function() {
        beforeEach(function() {
          props.cardType.IDDL = ['DL'];
        });

        it('shows relevant language for updating DL', function() {
          props.cardType.cardAction = 'change'
          props.cardChanges.correctOrUpdate = 'update'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.update.license), true);
        });

        it('shows relevant language for correcting DL', function() {
          props.cardType.cardAction = 'change'
          props.cardChanges.correctOrUpdate = 'correct'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.correct.license), true);
        });

        it('shows relevant language for replacing DL', function() {
          props.cardType.cardAction = 'replace'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.replace.license), true);
        });
      });

      describe('ID', function() {
        beforeEach(function() {
          props.cardType.IDDL = ['ID'];
        });

        it('shows relevant language for updating ID', function() {
          props.cardType.cardAction = 'change'
          props.cardChanges.correctOrUpdate = 'update'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.update.id), true);
        });

        it('shows relevant language for correcting ID', function() {
          props.cardType.cardAction = 'change'
          props.cardChanges.correctOrUpdate = 'correct'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.correct.id), true);
        });

        it('shows relevant language for replacing ID', function() {
          props.cardType.cardAction = 'replace'

          let component = render(
            <Wrapper>
            <GetStartedPage {...props} />
            </Wrapper>
          );
          assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.replace.id), true);
        });
      });
    });
  });
});

