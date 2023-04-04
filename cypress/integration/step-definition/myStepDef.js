import { When, Then} from 'cypress-cucumber-preprocessor/steps' ;


When(/^I open the browser$/, function () {
   
});

When(/^I open the Google$/, function () {
    cy.visit('')
   // cy.contains('button', 'Alles accepteren').click();
});

Then(/^I can search$/, function () {
   cy.get('#search-input input').should('be.visible')
});

When(/^I search "([^"]*)"$/, part => { 
    cy.get('#search-input input').type(part)
});

Then(/^all elements in list should contain "([^"]*)"$/, function (value) {
    cy.get('#typeahead-suggestions a').each(el =>
        el.text().includes(value)
    )
    // cy.xpath("afe")
});