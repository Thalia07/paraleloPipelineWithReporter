describe("Bienvenido Modulo1", ()=>{
    it('Primer Test -> Hola Mundo', () => {
        cy.log("Holaaaaaa");
        cy.wait(1500);
    });
})

it('Segundo Test -> Campo name', () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").type("Sara");
    cy.wait(4000);
});

