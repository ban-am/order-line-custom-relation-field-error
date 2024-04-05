import { EntityHydrator, RequestContext, ProductVariant, OrderItemPriceCalculationStrategy, Injector } from '@vendure/core';
import { Injectable } from '@nestjs/common';

type OrderLineCustomFieldsInput = {
  material: ProductVariant;
};

export class OrderPriceStrategy implements OrderItemPriceCalculationStrategy {
  private entityHydrator: EntityHydrator
  
  async init(injector: Injector) {
    this.entityHydrator = injector.get(EntityHydrator);
  }

  async calculateUnitPrice(ctx: RequestContext, productVariant: ProductVariant, customFields: OrderLineCustomFieldsInput) {
    
    // await this.entityHydrator.hydrate(ctx, customFields.material, {
    //   applyProductVariantPrices: true,
    //   relations: ['productVariantPrices']
    // });

    return {
      price: productVariant.listPrice,
      priceIncludesTax: productVariant.listPriceIncludesTax,
    };
  }
}
