var assert = require('assert')

module.exports = function () {
    this.Given(/^the user is looking at the page$/, () => {
        browser.url('');
        assert.ok($('#can-you-see-me').isExisting(), 'Page should be open.');
    })

    this.Then(/^the page is hilarious$/, () => {
        assert.ok($('#can-you-see-me figcaption').getText().toLowerCase().includes('god'), 'Caption should be on page.');
    })
}
