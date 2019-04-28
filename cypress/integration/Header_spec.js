describe('My first test', function () {
	it('Vists the site', function () {
		cy.visit('localhost:3000')

		cy.contains('Stressless Productions')

		cy.url().should('include', '3000')
	})
})