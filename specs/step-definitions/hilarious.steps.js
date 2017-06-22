var assert = require('assert')

module.exports = function () {
    this.Given(/^the user is looking at the page$/, () => {
        browser.url('');
        assert.ok($('#can-you-see-me').isExisting(), 'Page should be open.');
    })

    this.Then(/^the page is hilarious$/, () => {
        assert.ok($('#can-you-see-me figcaption').getText().toLowerCase().includes('god'), 'Caption should be on page.');
    })

    this.Given(/^the user is looking at another path$/, () => {
        browser.url('/another_path');
    })

    this.Then(/^the page at another path is visible$/, () => {
        assert.ok($('#the_one_thing').isExisting(), 'The other page should be open.');
    })
}
