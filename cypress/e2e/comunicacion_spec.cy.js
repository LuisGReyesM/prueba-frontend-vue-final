describe('Comunicación entre Parent y Child', () => {
  it('Debería enviar texto desde el Child al Parent', () => {
    // Visita la página donde se encuentra el componente Child
    cy.visit('/child'); 

    // Escribe texto en el campo de entrada del componente Child
    cy.get('input[type="text"]').type('Texto de prueba');

    // Simula el clic en el botón para enviar el texto al Parent
    cy.get('button').click();

    cy.wait(1000);  // Incluyo tiempo de espera para el envío a la pagina padre

    // Verifica que el componente Parent haya recibido el texto correctamente
    cy.get('#texto-recibido').should('have.text', 'Texto recibido: Texto de prueba');
  });
});
