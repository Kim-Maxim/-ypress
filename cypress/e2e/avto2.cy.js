describe('Длинный автотест', function () {
    
    it('Оформить заказ', function () {
       cy.visit('https://huntingpony.com/');
       cy.get('[href="/collection/sumki-i-avtokresla"] > .banner-list__item-title').click();
       cy.get('[data-product-id="338932820"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
       cy.wait(5000);
       cy.get('.add-cart-counter__btn').click();   
       cy.get('[data-add-cart-counter-plus=""]').click();
       cy.get('.header__cart > .icon').click();
       cy.get('.is-count-up').click();
       cy.get('.cart-controls > .button').click();

    })

   
})