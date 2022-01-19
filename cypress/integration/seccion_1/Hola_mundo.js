describe("Bienvenido Modulo1", ()=>{
    it.only('Primer Test -> Hola Mundo', () => {
        cy.log("Holaaaaaa");
        cy.wait(1500);
    });
})