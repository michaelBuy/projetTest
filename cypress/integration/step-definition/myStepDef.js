import { When, Then, And} from 'cypress-cucumber-preprocessor/steps' ;


When(/^I open the browser$/, function () {
    cy.visit('')
});

And(/^I write the login$/, function () {
    cy.get('input[id="login"]').type('cosmos')
});

And(/^I write the password$/, function () {
    cy.get('input[id="password"]').type('cosmos123')
});

When(/^I click the button$/, function () {    
    cy.contains('button', 'Log in').click();
});

Then(/^I click on Create$/, function () {    
    cy.contains('button', 'Create').click();
});

Then(/^I click on Customer$/, function () {    
    cy.get('input[id="o_field_input_911"]').click();
});

Then(/^I click on Create and edit$/, function () {    
    cy.get('ul[id="ui-id-1"]').should('be.visible');
    cy.contains('a', 'Create and Edit').click();
});

And(/^I click on company$/, function () {    
    cy.contains('label', 'Company').click();
});

Then(/^I write the name$/, function () {    
    cy.get('h1').should('be.visible');
    cy.get('input[id="o_field_input_1015"]').type('Test1234')
});

Then(/^I click on country$/, function () {    
    cy.get('input[id="o_field_input_1032"]').click();
});

// // Scenario demandant de visiter 
// //cy(visit('') => correspond à cypress.config.js => baseUrl

// When(/^I open the Wikipedia$/, function () {
//     cy.visit('')
//    // cy.contains('button', 'Alles accepteren').click();
// });

// Then(/^I can search$/, function () {
//    cy.get('#search-input input').should('be.visible')
// });

// When(/^I search "([^"]*)"$/, part => { 
//     cy.get('#search-input input').type(part)
// });

// Then(/^all elements in list should contain "([^"]*)"$/, function (value) {
//     cy.get('#typeahead-suggestions a').each(el =>
//         el.text().includes(value)
//     )
//     // cy.xpath("afe")
// });

// When(/^I open the browser$/, function () {
    
// })

// Then(/^I open the rtbf$/, function () {
//     cy.visit('')
    
// })

// Then(/^I Close the respect$/, function () {
    
     //cy.contains('button', 'accepter').click();
    // cy.contains('a', 'sport').click();
// })

// When(/^I open the sports page$/, function () {
//     // cy.contains('a', 'sport').click();
// })

// Then(/^I click on Lukaku $/, function () {
//     // cy.contains('a', 'sport').click();
// })