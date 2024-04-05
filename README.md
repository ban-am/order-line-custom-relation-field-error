
1. create vendure2 postgres DB

2.
```
yarn
```

3.
```
yarn migration:run
```

4.
```
yarn populate
```

5.
```
yarn dev
```

6.

open http://localhost:3000/shop-api
 
run
```
mutation addItemToOrder($productVariantId: ID!, $quantity: Int!, $customFields: OrderLineCustomFieldsInput!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity, customFields: $customFields) {
    __typename
  }
}
```
Query Variables
```
{
  "productVariantId": "1", 
  "quantity": 1, 
  "customFields": {
    "materialId": "2"
  }
}
```

7. 

run

```
query activeOrder {
  activeOrder {
    ...OrderDetail
  }
}

fragment OrderDetail on Order {
  __typename
  lines {
    customFields {
      material {
        __typename
      }
    }
  }
}

```