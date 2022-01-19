///<reference types="cypress"/> 
//para que funcionen los comandos

describe("Primer reto", ()=>{
    
    it('Reto', () => {
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should('eq','Computers database')
        cy.wait(1000);

        //Filtrar eemento
        cy.get('#searchbox').should("be.enabled").type("ASCI Purple");
        cy.wait(1000);
        cy.get('#searchsubmit').should("be.visible").click();
        cy.wait(1000);
        
        //Añadir elemento
        cy.get('#add').should("be.visible").click();
        cy.wait(1000);
        cy.get('#name').should("be.enabled").type("PC NEW");
        cy.wait(1000);
        cy.get('#introduced').should("be.enabled").type("2020-08-07");
        cy.wait(1000);
        cy.get('#discontinued').should("be.enabled").type("2021-01-01");
        cy.wait(1000);
        //cbo
        cy.get('#company').should("be.visible").select("RCA").should("have.value","3").wait(1500);

        cy.get('.primary').should("be.visible").click();

        //Buscar elemento creado
        cy.get('#searchbox').should("be.enabled").type("PC NEW");
        cy.get('#searchsubmit').should("be.visible").click();
    })

    
})


