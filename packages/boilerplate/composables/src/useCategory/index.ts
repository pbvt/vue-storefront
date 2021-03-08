import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import { Category } from '@vue-storefront/boilerplate-api';

const params: UseCategoryFactoryParams<Category, any> = {
  categorySearch: async (context: Context, params) => {
    console.log('Mocked: categorySearch');
    const { customQuery, ...searchParams } = params;

    return await context.$boilerplate.api.getCategory(searchParams, customQuery);
  }
};

export default useCategoryFactory<Category, any>(params);
